
// More elegant version than FastMatchingDemo;

import React, { Component } from "react";
import * as d3 from "d3";
//import parse from "html-react-parser";
import "./matching.sass";

import { findLastTarget } from "./dataManipulation";
import { setMatchingState } from "./matchingState";
import { createSVG_Matching } from "./svgMatching";

import ETBD from "../etbd/ETBD"



export default class MatchingDemo extends Component {

    constructor() {
        super();
        let myState = setMatchingState();
        this.state = myState;
    };



    beginSession = () => {

        d3.select("#svgMatching").on("click", this.evaluateResponse);


        let thisEvent = {
            timestamp: performance.now(),
            x: 0,
            y: 0,
            class: "",
            co: 0,
            points: 0,
        }

        var myEvents = [thisEvent]

        this.setState({
            timeStart: performance.now(),
            events: myEvents,
        })


        d3.selectAll(".introTexts").remove()

        let scaleTime = d3
            .scaleLinear()
            .domain([0, this.state.timeLimit])
            .range([0, 350]);

        let scaleResponses = d3
            .scaleLinear()
            .domain([0, this.state.recordHeight])
            .range([0, 250]);

        let recordHeight = this.state.recordHeight



        let overallInterval = d3.interval((te) => {

            let x1 = 35 + scaleTime((te - 250) / 1000)
            let x2 = 35 + scaleTime(te / 1000)
            let B1 = this.state.B1
            let B2 = this.state.B2

            let y = scaleResponses(
                recordHeight - ((B1 + B2) % recordHeight)
            );

            d3.select('#svgRecord').append("line")
                .attr("class", "dataLine")
                .attr("x1", x1)
                .attr("y1", y)
                .attr("x2", x2)
                .attr("y2", y)
                .attr("stroke", this.state.responseColor)
                .attr("stroke-width", 1)


            this.setState({ progress: te })

            if (te > this.state.timeLimit * 1000) {

                let svgMatching = d3.select("#svgMatching")
                svgMatching.on("click", null);
                overallInterval.stop()
            }
        }, 250);


        // The first two Random Intervals, between 1000 and 5000 ms, from an exponential with mean 1/RI mean. I use integers here to remove the microseconds. When the timers exceed the intervals, reinforcement becomes available.

        let int1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1) * 1000);
        let int2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2) * 1000);
        d3.timeout((elapsed1) => {
            this.setState({ r1ready: 1 });
        }, int1);
        d3.timeout((elapsed2) => {
            this.setState({ r2ready: 1 });
        }, int2);


        // EVENTS PER SESSION (15s):
        let r1min = `${1 / this.state.RI1 * this.state.timeLimit}`
        let r2min = `${1 / this.state.RI2 * this.state.timeLimit}`

    };



    evaluateResponse = (e) => {
        var timeStart = this.state.timeStart;
        var eventTimeStamp = performance.now()
        var events = this.state.events;

        this.setState({
            timeElapsed: eventTimeStamp - timeStart
        });


        // DEFAULT VALUES FOR THE NEW EVENT:
        var respClass = "be",
            co = 0,
            // b1 = 0,
            // b2 = 0,
            // points1 = 0,
            // points2 = 0,
            newID = 0,
            reinforced = false;


        // PE: 
        var pe = events[events.length - 1]
        newID = pe.id + 1

        // CUMULATIVE FREQUENCIES:
        var B1 = this.state.B1;
        var B2 = this.state.B2;
        var Be = this.state.Be;
        var Points1 = this.state.Points1;
        var Points2 = this.state.Points2;
        //var Points3 = this.state.Points2;
        var CO = this.state.CO;

        // VARIABLES RELATED TO CHANGEOVER DELAYS:
        var cod1_duration = this.state.cod1_duration
        var cod1_status = this.state.cod1_status
        var cod2_duration = this.state.cod2_duration
        var cod2_status = this.state.cod2_status


        // EVENT COORDINATES:
        var x = e.offsetX;
        var y = e.offsetY;





        //                            EVALUATE EVENT CLASS: B1, B2, Be




        // --------------------------------------------------------------   B1

        if (d3.polygonContains(this.state.class1, [x, y])) {

            respClass = "b1";
            //b1 = events[events.length - 1].b1 + 1;
            //b2 = events[events.length - 1].b2 + 0;

            this.setState({
                B1: B1 + 1,
                //B2: B2,
                //Be: Be,
                responseColor: this.state.color1
            })


            // CHANGEOVER? 
            if (pe.class === "b2") {
                co = 1;
                // CO = CO + 1
                this.setState({
                    CO: CO + 1,
                    responseColor: this.state.colorCO
                })


                // CODE ENABLED? 
                if (cod1_duration > 0) {
                    cod2_status = "off"
                    cod1_status = "on"
                    reinforced = false
                    this.setState({ cod1_status: "on", cod2_status: "off", codColor: "#61DAFB" })

                    // START TIMER FOR COD 1
                    let cod1 = d3.timeout((elapsedCOD1) => {
                        cod1_status = "off"

                        this.setState({ cod1_status: "off" })

                        if (this.state.cod2_status === "off") {
                            this.setState({ codColor: "#282c34" })
                        }

                        cod1.stop()

                    }, cod1_duration);


                    // IF NO COD IN EFFECT, CHECK FOR REINFORCEMENT: 
                } else {

                    if (this.state.r1ready !== 0) {
                        reinforced = true

                        this.setState({
                            Points1: Points1 + this.state.r1ready,
                            Points2: Points2
                        })

                        this.setState({ r1ready: 0 });

                        let int1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1) * 1000);

                        let t1 = d3.timeout((elapsed1) => {
                            this.setState({ r1ready: 1 });
                        }, int1);
                    }
                }


                // IF NOT CHANGEOVER, CHECK IF COD IS ON:
            } else {

                if (cod1_status === "off" & this.state.cod1_status === "off") {
                    if (this.state.r1ready !== 0) {
                        reinforced = true
                        this.setState({
                            Points1: Points1 + this.state.r1ready,
                            Points2: Points2
                        })
                        this.setState({ r1ready: 0 });

                        let int1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1) * 1000);

                        let t1 = d3.timeout((elapsed1) => {
                            this.setState({ r1ready: 1 });
                        }, int1);
                    }
                } else {
                    reinforced = false
                    this.setState({
                        Points1: Points1,
                        Points2: Points2
                    })
                }
            }
        };  // _____ END of B1 ________



        // --------------------------------------------------------------   B2
        if (d3.polygonContains(this.state.class2, [x, y])) {
            respClass = "b2";
            //b1 = events[events.length - 1].b1 + 0;
            //b2 = events[events.length - 1].b2 + 1;

            this.setState({
                //B1: B1,
                B2: B2 + 1,
                //Be: Be,
                responseColor: this.state.color2
            })


            if (pe.class === "b1") {
                co = 1;
                CO += 1

                this.setState({
                    CO: CO,
                    responseColor: this.state.colorCO
                })

                if (cod2_duration > 0) {
                    cod1_status = "off"
                    cod2_status = "on"
                    reinforced = false
                    this.setState({ cod1_status: "off", cod2_status: "on", codColor: "#61DAFB" })

                    let cod2 = d3.timeout((elapsedCOD2) => {
                        cod2_status = "off"
                        this.setState({ cod2_status: "off" })

                        if (this.state.cod1_status === "off") {
                            this.setState({ codColor: "#282c34" })
                        }

                        cod2.stop()

                    }, cod2_duration);

                } else {

                    if (this.state.r2ready !== 0) {
                        reinforced = true
                        this.setState({
                            Points1: Points1,
                            Points2: Points2 + this.state.r2ready
                        })
                        this.setState({ r2ready: 0 });

                        let int2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2) * 1000);
                        let t2 = d3.timeout((elapsed2) => {
                            this.setState({ r2ready: 1 });
                        }, int2);
                    }
                };


            } else {

                if (cod2_status === "off" & this.state.cod2_status === "off") {
                    if (this.state.r2ready !== 0) {
                        reinforced = true
                        this.setState({
                            Points1: Points1,
                            Points2: Points2 + this.state.r2ready
                        })
                        this.setState({ r2ready: 0 });

                        let int2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2) * 1000);
                        let t2 = d3.timeout((elapsed2) => {
                            this.setState({ r2ready: 1 });
                        }, int2);
                    }
                } else {
                    reinforced = false
                    this.setState({
                        Points1: Points1 + this.state.r1ready,
                        Points2: Points2
                    })
                }
            }
        }  // _____ END of B2 ________



        // DRAW ONLY IF TARGET RESPONSE: -----------------------------------

        if (respClass === "b1" | respClass === "b2") {

            // CUMULATIVE RECORD:  SVG, SCALES ---------------------------- 
            let svgRecord = d3.select("#svgRecord");

            let scaleTime = d3
                .scaleLinear()
                .domain([0, this.state.timeLimit])
                .range([0, 350]);

            let scaleResponses = d3
                .scaleLinear()
                .domain([0, this.state.recordHeight])
                .range([0, 250]);



            // LINE COORDINATES:

            let LTR = findLastTarget(events)  // Last Target Response
            let delta_t = LTR.timestamp - this.state.timeStart

            //console.log("LTR: ", LTR)
            //console.log("LTR.delta_t: ", delta_t / 1000)
            // console.log("this.state.timeElapsed: ", this.state.timeElapsed / 1000)
            // console.log("--------------------------------------------")

            //let px = 35 + scaleTime(timeElapsed / 1000);

            //let px = 35 + scaleTime(delta_t / 1000)

            //let px1 = 35 + scaleTime(this.state.timeElapsed / 1000);
            let px = 35 + scaleTime(this.state.progress / 1000);

            // let myBehavior = this.state.B1
            // let myColor = this.state.color1

            // if (respClass === "b2") {
            //     myBehavior = this.state.B2
            //     myColor = this.state.color2

            // }

            let myBehavior = this.state.B1 + this.state.B2
            let py = scaleResponses(
                this.state.recordHeight - ((myBehavior - 1) % this.state.recordHeight)
            );

            let py1 = scaleResponses(
                this.state.recordHeight - ((myBehavior) % this.state.recordHeight)
            );


            // if (respClass === "b2") {
            //     py = scaleResponses(
            //         this.state.recordHeight - ((B2) % this.state.recordHeight)
            //     );

            //     py1 = scaleResponses(
            //         this.state.recordHeight - ((B2 + 1) % this.state.recordHeight)
            //     );
            // }

            // let py = scaleResponses(
            //     this.state.recordHeight - ((B1 + B2) % this.state.recordHeight)
            // );

            // let py1 = scaleResponses(
            //     this.state.recordHeight - ((B1 + B2 + 1) % this.state.recordHeight)
            // );


            // DRAW LINE     (but not if the needle needs reset):
            if ((B1 + B2 + 1) % this.state.recordHeight !== 0) {

                //if ((myBehavior + 1) % this.state.recordHeight !== 0) {
                // simple line:
                // svgRecord.append("line").attr("class", "dataLine")
                //     .attr("x1", px)
                //     .attr("y1", py)
                //     .attr("x2", px1)
                //     .attr("y2", py1)
                //     .attr("stroke", this.state.responseColor)
                //     .attr("stroke-width", 1)

                svgRecord.append("line").attr("class", "dataLine")
                    .attr("x1", px)
                    .attr("y1", py)
                    .attr("x2", px)
                    .attr("y2", py1)
                    .attr("stroke", this.state.responseColor)
                    .attr("stroke-width", 1)
            }



            // DRAW CIRCLE:
            svgRecord
                .append("circle").attr("class", "dataCircle")
                //.attr("cx", 35 + scaleTime(this.state.timeElapsed / 1000))
                .attr("cx", 35 + scaleTime(this.state.progress / 1000))
                .attr(
                    "cy",
                    scaleResponses(
                        this.state.recordHeight - ((B1 + B2 + 1) % this.state.recordHeight)
                    )
                )
                .attr("stroke", this.state.responseColor)
                .attr("stroke-width", 1)
                .attr("r", () => {
                    if (reinforced === false) {
                        return 1
                    } else {
                        return 3
                    }
                })
                .attr("fill", () => {
                    if (reinforced === false) {
                        return '#282c34'
                    } else {
                        return this.state.responseColor
                    }
                })


        }



        //  PUSH NEW RESPONSE:  -----------------------------------
        let newResponse = {
            id: newID,
            timestamp: eventTimeStamp,
            delta_t: eventTimeStamp - timeStart,
            class: respClass,
            x: x,
            y: y,
            co: co,
        };
        events.push(newResponse);
        this.setState({ events: events });

    };




    resetDemo = () => {

        // RESET ALL TIMERS: 


        // CLEAR CUMULATIVE RECORD:
        let svgRecord = d3.select("#svgRecord");
        svgRecord.selectAll(".dataLine").remove();
        svgRecord.selectAll(".dataCircle").remove();


        // CLEAR SKINNER BOX :)
        let svgMatching = d3.select("#svgMatching");
        svgMatching
            .append("text")
            .attr("class", "introTexts")
            .attr("x", 220)
            .attr("y", 70)
            .attr("fill", 'rgb(50, 50, 50)')
            .attr("font-size", ".9rem")
            .attr("font-family", 'Montserrat')
            .text("When ready, click START.");


        // RESET STATE: 
        let myState = setMatchingState();
        this.setState(myState)
    };






    componentDidMount() {


        // CUMULATIVE RECORD:
        let svgRecord = d3.select("#svgRecord");

        let scaleTime = d3
            .scaleLinear()
            .domain([0, this.state.timeLimit])
            .range([0, 350]);

        let axisTime = d3.axisBottom(scaleTime);

        axisTime.ticks(3)
        axisTime.tickValues([5, 10, 15])

        let gTime = svgRecord
            .append("g")
            .style("font", "12px sans-serif")
            .attr("transform", `translate(35, ${260})`);

        gTime.call(axisTime);


        let scaleResponses = d3
            .scaleLinear()
            .domain([this.state.recordHeight, 0])
            .range([0, 250]);

        let axisResponses = d3.axisLeft(scaleResponses);

        let gResponses = svgRecord
            .append("g")
            .attr("transform", `translate(35, 10)`);

        gResponses.call(axisResponses);

        svgRecord.append("text").text("responses")
            .attr("x", 50).attr("y", 20).attr("font-size", "1rem").attr("fill", 'rgb(200, 200, 200').attr("font-weight", 300)

        svgRecord.append("text").text("time (s)")
            .attr("x", 350).attr("y", 250).attr("font-size", "1rem").attr("fill", 'rgb(200, 200, 200').attr("font-weight", 300)



        let svgMatching = createSVG_Matching()

        svgMatching
            .append("rect").attr("class", "lever").attr("id", "lever1")
            .attr("x", this.state.lever1[0])
            .attr("y", this.state.lever1[1])
            .attr("width", this.state.lever1[2])
            .attr("height", this.state.lever1[3])
            .attr("fill", "rgb(121, 47, 0)");

        svgMatching
            .append("rect").attr("class", "lever").attr("id", "lever2")
            .attr("x", this.state.lever2[0])
            .attr("y", this.state.lever2[1])
            .attr("width", this.state.lever2[2])
            .attr("height", this.state.lever2[3])
            .attr("fill", "rgb(6, 45, 6)");

    }






    sliderChange = (e) => {
        this.setState({ cod1_duration: e.currentTarget.value * 1000 })
        this.setState({ cod2_duration: e.currentTarget.value * 1000 })

        var p0sec = document.getElementById("p0sec")
        var p2sec = document.getElementById("p2sec")

        if (e.currentTarget.value > 0) {
            p0sec.classList.remove("inEffect")
            p0sec.classList.add("notInEffect")
            p2sec.classList.remove("notInEffect")
            p2sec.classList.add("inEffect")
        } else {
            p2sec.classList.remove("inEffect")
            p2sec.classList.add("notInEffect")
            p0sec.classList.add("inEffect")
            p0sec.classList.remove("notInEffect")

        }
    }








    render() {
        return (

            <div className="matchingMetaWrapper">

                <div id="FastMatchingDemo" className="matchingWrapper">

                    <div className="top">

                        <div className="matching-results" id="charts">
                            <svg
                                id="svgRecord"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#282c34",
                                    color: "rgb(179,179,179)",
                                    fontSize: "22px",
                                }}
                            >

                            </svg>
                        </div>


                        <div className="top-parameters">

                            <button
                                id="btnCOD"
                                style={{ backgroundColor: this.state.codColor }}
                            >COD</button>

                            <div className="divSlider">

                                <p className="inEffect" id="p0sec" title="No changeover delay">0s
                                </p>

                                <input
                                    type="range"
                                    id="codSlider"
                                    title="COD duration"
                                    min="0"
                                    max="2"
                                    step="2"
                                    value={this.state.cod1_duration}
                                    list="codSliderList"
                                    onInput={this.sliderChange}
                                >{this.value}</input>

                                <p className="notInEffect" id="p2sec">2s</p>

                            </div>

                            <div className="divStartReset">
                                <button id="btnStartMatching" onClick={this.beginSession}>START</button>
                                <button id="btnResetMatching" onClick={this.resetDemo}>CLR</button>
                            </div>


                            <ETBD />

                        </div>

                    </div>




                    <div className="bottom">

                        <div id="demo"></div>


                    </div>
                </div>
            </div >
        );
    }
}
