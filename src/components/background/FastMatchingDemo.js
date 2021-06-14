import React, { Component } from "react";
import * as d3 from "d3";
import { svg } from "d3";
import "../sassy/fast_matching_demo.sass"

export default class FastMatchingDemo extends Component {

    constructor() {
        super();

        this.state = {

            lever1: [150, 115, 100, 70],

            lever2: [350, 115, 100, 70],

            class1: [
                [150, 115],
                [250, 115],
                [250, 185],
                [150, 185],
            ],

            class2: [
                [350, 115],
                [450, 115],
                [450, 185],
                [350, 185],
            ],

            timeLimit: 15,
            recordHeight: 30,
            RI1: 1,
            RI2: 2,
            cod1_duration: 0,
            cod1_status: "off",
            cod2_duration: 0,
            cod2_status: "off",

            progress: 0,

            color1: 'rgb(255, 128, 49)',
            color2: 'rgb(28, 255, 28)',
            colorE: 'rgb(179, 179, 179)',
            colorCO: "#fff",
            responseColor: 'rgb(179, 179, 179)',
            codColor: '#282c34',

            r1ready: 0,
            r2ready: 0,
            B1: 0,
            B2: 0,
            Be: 0,
            CO: 0,
            Points1: 0,
            Points2: 0,

            timeStart: 0,
            timeElapsed: 0,
            dataPoints: [],

            events: [
                {
                    id: 0,
                    timestamp: 0,
                    x: 0,
                    y: 0,
                    class: "",
                    b1: 0,
                    b2: 0,
                    co: 0,
                    points1: 0,
                    points2: 0,
                },
            ],
        };
    }



    resetDemo = () => {

        // CLEAR CUMULATIVE RECORD:
        let svgRecord = d3.select("#svgRecord");
        svgRecord.selectAll(".dataLine").remove()
        svgRecord.selectAll(".dataCircle").remove()
        svgRecord.select("#gSummary").remove()


        let svgMatching = d3.select("#svgMatching")
        svgMatching.on("click", this.evaluateResponse);


        this.setState({
            cod1_duration: 0,
            cod1_status: "off",

            cod2_duration: 0,
            cod2_status: "off",

            progress: 0,

            // color1: "rgb(255, 128, 49)",
            // color2: "rgb(28, 255, 28)",
            // colorE: "rgb(179, 179, 179)",
            // colorCO: "#fff",
            // responseColor: "rgb(179, 179, 179)",
            // codColor: '#282c34',

            r1ready: 0,
            r2ready: 0,
            B1: 0,
            B2: 0,
            Be: 0,
            CO: 0,
            Points1: 0,
            Points2: 0,

            timeStart: 0,
            timeElapsed: 0,
            dataPoints: [],

            events: [
                {
                    id: 0,
                    timestamp: 0,
                    x: 0,
                    y: 0,
                    class: "",
                    b1: 0,
                    b2: 0,
                    co: 0,
                    points1: 0,
                    points2: 0,
                },
            ],
        });
    };















    evaluateResponse = (e) => {

        var timeStart = this.state.timeStart;
        var timeElapsed = this.state.timeElapsed;

        var timelimit = this.state.timeLimit * 1000;

        var timeNow = performance.now();
        var eventTime = d3.now()



        // If this is the first event, start the simulation: 

        if (timeStart === 0) {
            this.setState({ timeStart: performance.now(), timeElapsed: 0 });

            let overallInterval = d3.interval((te) => {
                this.setState({ progress: te })
                if (te > timelimit) {
                    let svg = d3.select("#svgMatching")
                    svg.on("click", null);
                    overallInterval.stop()
                    let gSummary = d3.select("#svgRecord").append("g").attr("id", "gSummary")
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
            // console.log("RI 1 schedules", 1 / this.state.RI1, "events/s, so ", r1min, "per session")
            // console.log("RI 2 schedules ", 1 / this.state.RI2, "events/s, so ", r2min, "per session")

        } else {
            this.setState({
                timeElapsed: timeNow - timeStart
            });
        }


        // DEFAULT VALUES FOR THE NEW EVENT:
        var respClass = "be",
            co = 0,
            b1 = 0,
            b2 = 0,
            points1 = 0,
            points2 = 0,
            newID = 0,
            reinforced = false;


        // CURRENT STATE:
        var events = this.state.events;
        var pe = events[events.length - 1]
        newID = pe.id + 1

        var B1 = this.state.B1;
        var B2 = this.state.B2;
        var Be = this.state.Be;
        var Points1 = this.state.Points1;
        var Points2 = this.state.Points2;
        var CO = this.state.CO;

        var cod1_duration = this.state.cod1_duration
        var cod1_status = this.state.cod1_status

        var cod2_duration = this.state.cod2_duration
        var cod2_status = this.state.cod2_status


        // EVENT COORDINATES: 
        var x = e.offsetX;
        var y = e.offsetY;


        // EVALUATE EVENT CLASS: B1, B2, Be


        // --------------------------------------------------------------   B1
        if (d3.polygonContains(this.state.class1, [x, y])) {
            respClass = "b1";
            b1 = events[events.length - 1].b1 + 1;
            b2 = events[events.length - 1].b2 + 0;

            this.setState({
                B1: B1 + 1,
                B2: B2,
                Be: Be,
                responseColor: this.state.color1
            })


            // CHANGEOVER? 
            if (pe.class === "b2") {
                co = 1;
                CO += 1
                this.setState({
                    CO: CO,
                    //responseColor: this.state.colorCO
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
            b1 = events[events.length - 1].b1 + 0;
            b2 = events[events.length - 1].b2 + 1;

            this.setState({
                B1: B1,
                B2: B2 + 1,
                Be: Be,
                responseColor: this.state.color2
            })


            if (pe.class === "b1") {
                co = co + 1;
                CO += 1
                this.setState({
                    CO: CO,
                    //responseColor: this.state.colorCO
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



        //  PUSH NEW RESPONSE:  -----------------------------------

        let newResponse = {
            id: newID,
            timestamp: eventTime,
            class: respClass,
            x: x,
            y: y,
            b1: b1,
            b2: b2,
            be: "",
            co: co,
            points1: points1,
            points2: points2,
            cod1: this.state.cod1_status,
            cod2: this.state.cod2_status,
        };
        events.push(newResponse);
        this.setState({ events: events });




        // CUMULATIVE RECORD:  SVG, SCALES ---------------------------- 
        let svgRecord = d3.select("#svgRecord");

        let scaleTime = d3
            .scaleLinear()
            .domain([0, this.state.timeLimit])
            .range([0, 250]);

        // let scaleResponses = d3
        //     .scaleLinear()
        //     .domain([0, this.state.recordHeight])
        //     .range([0, 250]);

        let scaleResponses = d3
            .scaleLinear()
            .domain([0, this.state.recordHeight])
            .range([0, 250]);

        // LINE COORDINATES:
        let px = 35 + scaleTime(timeElapsed / 1000);
        let py = scaleResponses(
            this.state.recordHeight - ((B1 + B2) % this.state.recordHeight)
        );
        let px1 = 35 + scaleTime(this.state.timeElapsed / 1000);
        let py1 = scaleResponses(
            this.state.recordHeight - ((B1 + B2 + 1) % this.state.recordHeight)
        );


        // DRAW TIME ELAPSED (PROGRESS):
        // let progressLine = d3.select("#progressLine");

        // progressLine
        //     .attr("x1", this.state.timeElapsed)
        //     .attr("x2", scaleTime(this.state.timeElapsed))
        //     .attr("y1", scaleResponses(0))
        //     .attr("y2", scaleResponses(this.state.recordHeight))




        // DRAW LINE     (but not if the needle needs reset):
        if ((B1 + B2 + 1) % this.state.recordHeight !== 0) {

            svgRecord.append("line").attr("class", "dataLine")
                .attr("x1", px)
                .attr("y1", py)
                .attr("x2", px1)
                .attr("y2", py1)
                .attr("stroke", this.state.responseColor)
                .attr("stroke-width", 1)
        }


        // DRAW CIRCLE:
        svgRecord
            .append("circle").attr("class", "dataCircle")
            .attr("cx", 35 + scaleTime(this.state.timeElapsed / 1000))
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
                    return 3
                } else {
                    return 3
                }
            })
            .attr("fill", () => {
                if (reinforced === false) {
                    return "none"
                } else {
                    return this.state.responseColor
                }
            })
        this.setState({ responseColor: "grey" });
    };




    componentDidMount() {


        // CUMULATIVE RECORD:
        let svgRecord = d3.select("#svgRecord");

        let scaleTime = d3
            .scaleLinear()
            .domain([0, this.state.timeLimit + 1])
            .range([0, 350]);

        let axisTime = d3.axisBottom(scaleTime);

        let gTime = svgRecord
            .append("g")
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

        // DRAW PROGRESS LINE & TEXT:
        // let progressText = svgRecord.append("text").attr("transform", `translate(35, 10)`).attr("id", "progressText")
        //     .attr("x", scaleTime(this.state.progress + 1))
        //     .attr("y", scaleResponses(28))
        //     .attr("fill", "lightgrey")
        //     .attr("font-size", ".9rem")
        //     .text(this.state.progress)



        // gProgress.append("line")
        //     .attr("id", "progressLine")
        //     .attr("x1", scaleTime(this.state.timeElapsed))
        //     .attr("y1", scaleResponses(0))
        //     .attr("x2", scaleTime(this.state.timeElapsed))
        //     .attr("y2", scaleResponses(this.state.recordHeight))
        //     .attr("stroke", "lightgrey")
        //     .attr("stroke-width", 1)
        //     .attr("stroke-linecap", "round");

        // .attr("stroke-dasharray", "8,2")


        // SENSITIVITY AND BIAS:



        // EXPERIMENTAL ENVIRONMENT:
        var svg = d3
            .select("#demo")
            .append("svg")
            .attr("id", "svgMatching")
            .attr("width", "100%")
            .attr("height", "100%");

        svg.on("click", this.evaluateResponse);

        // svg
        //     .append("rect")
        //     .attr("x", 320)
        //     .attr("y", 125)
        //     .attr("width", 100)
        //     .attr("height", 50)
        //     .attr("opacity", 0.7)
        //     .attr("fill", "rgb(121, 47, 0)");

        // svg
        //     .append("rect")
        //     .attr("x", 450)
        //     .attr("y", 125)
        //     .attr("width", 100)
        //     .attr("height", 50)
        //     .attr("opacity", 0.7)
        //     .attr("fill", "rgb(6, 45, 6)");



        svg
            .append("rect")
            .attr("x", this.state.lever1[0])
            .attr("y", this.state.lever1[1])
            .attr("width", this.state.lever1[2])
            .attr("height", this.state.lever1[3])
            .attr("opacity", 0.5)
            .attr("fill", "rgb(121, 47, 0)");

        svg
            .append("rect")
            .attr("x", this.state.lever2[0])
            .attr("y", this.state.lever2[1])
            .attr("width", this.state.lever2[2])
            .attr("height", this.state.lever2[3])
            .attr("opacity", 0.5)
            .attr("fill", "rgb(6, 45, 6)");
    }


    sliderChange = (e) => {
        this.setState({ cod1_duration: e.currentTarget.value * 1000 })
        this.setState({ cod2_duration: e.currentTarget.value * 1000 })

        var p0sec = document.getElementById("p0sec")
        var p2sec = document.getElementById("p2sec")

        if (e.currentTarget.value > 0) {
            p0sec.classList.remove("inEffect")
            p2sec.classList.add("inEffect")
        } else {
            p2sec.classList.remove("inEffect")
            p0sec.classList.add("inEffect")

        }
    }


    render() {
        return (

            <div class="matchingMetaWrapper">

                <div className="demoTitle">
                    <h2>Fast Matching <br />demo</h2>

                    <span>Click the experimental area to begin</span>



                </div>

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
                                <path
                                    id="pathResponses"
                                    style={{
                                        stroke: "rgb(186, 186, 186)",
                                        strokeWidth: 1,
                                        fill: "none",
                                    }}
                                ></path>

                                {/* <text id="te" x={this.state.progress / 1000} y={30} text={this.state.progress} fill="lightgrey" style={{

                                offsetX: 50,
                                fontSize: ".9rem",
                                zIndex: 0,
                                position: "relative",
                            }}></text> */}



                            </svg>



                        </div>


                        <div className="top-parameters">


                            <button
                                id="btnCOD"
                                style={{ backgroundColor: this.state.codColor }}
                            >COD</button>

                            <div className="divSlider">

                                <p className="inEffect" id="p0sec" >0s</p>

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

                                <p className="inotInEffect" id="p2sec">2s</p>
                            </div>

                            <progress
                                // value={this.state.timeLimit * 1000 - this.state.progress}
                                value={this.state.progress}
                                max={this.state.timeLimit * 1000}>
                            </progress>


                            <table>
                                <tbody>
                                    <tr >
                                        <td>Responses</td>
                                        <td>Points</td>
                                    </tr>

                                    <tr >
                                        <td className="color1">{this.state.B1}</td>
                                        <td className="color1">{this.state.Points1}</td>
                                    </tr>

                                    <tr>
                                        <td className="color2">{this.state.B2}</td>
                                        <td className="color2">{this.state.Points2}</td>
                                    </tr>

                                    <tr>
                                        <td colSpan="2" style={{
                                            textAlign: "center", borderTop: "1px solid rgb(100, 100, 100)",
                                            padding: ".5rem"
                                        }}>{this.state.CO} changeovers</td>
                                    </tr>
                                </tbody>


                            </table>

                            <button id="btnResetDemo" onClick={this.resetDemo}>reset</button>

                        </div>



                    </div>

                    <div className="bottom">

                        <div id="demo">

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
