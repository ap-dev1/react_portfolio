import React, { Component } from "react";
import * as d3 from "d3";
//import { axisBottom, range, svg } from "d3";
import { recombineAndMutate } from "./recombineAndMutate.js"
//import DrawChartPhenotypes from "./ChartPhenotypes"
import etbdState from "./etbdState"
import "./etbd.sass";

import { findLastTarget } from "../matching/dataManipulation"

import { drawETBD, addData } from "./drawETBD";
//import { HistogramETBD } from "./HistogramETBD";

export default class ETBD extends Component {

    constructor() {
        super();

        this.state = etbdState
    }


    showETBD = () => {
        d3.selectAll(".introTexts").remove()

        drawETBD(this.state.population);
        //HistogramETBD(this.state.population);

        d3.selectAll(".lever").style("opacity", .15)


        //  button to run ETBD:

        let btnRunETBD = d3.select("#svgMatching").append('g').attr("id", "btnRunETBD")

        btnRunETBD.append('text').text("run ETBD")
            .attr("x", 505)
            .attr("y", 35)
            .attr("width", 100)
            .attr("height", 40)
            .attr("color", "#222")

        btnRunETBD.append('rect').on("click", this.beginSimulation)
            .attr("x", 480)
            .attr("y", 10)
            .attr("width", 120)
            .attr("height", 40)
            .attr("fill", "#ccc")
            .attr("stroke", "#111")
            .attr("stroke-width", 2)
            .style("cursor", "pointer")
            .style("opacity", .3)
            .style("font-family", 'Iceland')
            .style("border", '1 px solid #111')

        // d3.select("#svgMatching").append('text').text("run ETBD")
        //     .attr("x", 505)
        //     .attr("y", 35)
        //     .attr("width", 100)
        //     .attr("height", 40)
        //     .attr("color", "#222")

        // d3.select("#svgMatching").append('rect').on("click", this.beginSimulation)
        //     .attr("x", 480)
        //     .attr("y", 10)
        //     .attr("width", 120)
        //     .attr("height", 40)
        //     .attr("fill", "#ccc")
        //     .attr("stroke", "#222")
        //     .attr("stroke-width", 1)
        //     .style("cursor", "pointer")
        //     .style("opacity", .3)
        //     .style("font-family", 'Iceland')


        // // display responses and reinforcers:

        // // B1, r1
        // d3.select("#svgMatching").append('text').text(`${this.state.B1}`)
        //     .attr("x", 200)
        //     .attr("y", 100)
        //     .attr("fill", 'rgb(255, 128, 49)')

        // d3.select("#svgMatching").append('text').text(() => this.state.Points1)
        //     .attr("x", 200)
        //     .attr("y", 130)
        //     .attr("stroke", 'rgb(255, 128, 49)')

        // // B2, r2
        // d3.select("#svgMatching").append('text').text(`${this.state.B2}`)
        //     .attr("x", 350)
        //     .attr("y", 100)
        //     .attr("fill", '#0c6e0c')

        // d3.select("#svgMatching").append('text').text(`${this.state.Points2}`)
        //     .attr("x", 350)
        //     .attr("y", 130)
        //     .attr("stroke", '#0c6e0c')


    };


    hideETBD = () => {
        //d3.selectAll(".axisLine").remove()
        d3.select("#groupHistogram").remove()
        d3.select("#btnRunETBD").remove()
        d3.selectAll(".lever").style("opacity", .5)

        d3.select("#svgMatching").append("text").text("When ready, click START.")
            .attr("class", "introTexts")
            .attr("x", 220)
            .attr("y", 230)
            .attr("fill", 'rgb(50, 50, 50)')
            .attr("font-size", ".9rem")
            .attr("font-family", 'Montserrat')

    };


    beginSimulation = () => {

        //d3.select("#svgMatching").on("click", this.evaluateResponse);

        let thisEvent = {
            timestamp: performance.now(),
            //population: genZero,
            emission: 0,
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



        let overallInterval = d3.interval((te) => {

            //addData(this.state.allPopulations);
            //addData(this.state.population);

            let x1 = 35 + scaleTime((te - this.state.irt) / 1000)
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
                //let svgMatching = d3.select("#svgMatching")
                //svgMatching.on("click", null);
                overallInterval.stop()
                console.log("etbd_state = ", this.state)

            } else {

                this.runETBD();

            }

        }, this.state.irt);




    };




    //-----------------------________________________
    runETBD = () => {
        var timeStart = this.state.timeStart;
        var eventTimeStamp = performance.now()
        var events = this.state.events;

        this.setState({
            timeElapsed: eventTimeStamp - timeStart
        });


        // RANDOM EMISSION:
        var population = this.state.population;
        var allPopulations = this.state.allPopulations;

        var randomEmission = 0;
        let idx = d3.randomInt(0, 9)()
        randomEmission = population[idx]

        var respClass = "be";
        var co = 0;
        var newID = 0;
        var reinforced = false;
        //gen = this.state.gen;


        // PE: 
        var pe = events[events.length - 1]
        newID = pe.id + 1

        // CUMULATIVE FREQUENCIES:
        var B1 = this.state.B1;
        var B2 = this.state.B2;
        var Be = this.state.Be;
        var Points1 = this.state.Points1;
        var Points2 = this.state.Points2;
        var CO = this.state.CO;

        var class1 = this.state.class1;
        var class2 = this.state.class2;


        //                             EMISSION CLASS: B1, B2, Be

        // -------------------------------------------------------------- Class 1

        //if (randomEmission >= class1[0] & randomEmission <= class1[-1]) {
        if (class1.includes(randomEmission)) {

            let svgMatching = d3.select("#svgMatching")
            let lv1 = svgMatching.select("#lever1")

            lv1
                .style("opacity", .9)
                .attr("transform", "scale(0.98)")
                .attr("transform", "translate(2, 2)")
                .attr("box-shadow", "3px 2px 22px 1px rgba(0, 0, 0, 0.24)")



            respClass = "b1";
            this.setState({
                B1: B1 + 1,
                responseColor: this.state.color1
            })

            // CHANGEOVER? 
            if (pe.class === "b2") {
                co = 1;
                this.setState({
                    CO: CO + 1,
                    responseColor: this.state.colorCO
                })
            }

            // CHECK FOR REINFORCEMENT: 
            if (this.state.r1ready !== 0) {
                reinforced = true

                this.setState({
                    Points1: Points1 + this.state.r1ready,
                    r1ready: 0,
                });

                let int1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1) * 1000);

                d3.timeout((elapsed1) => {
                    this.setState({ r1ready: 1 });
                }, int1);
            };



            lv1
                .transition().duration(300).style("opacity", .5)
                .attr("transform", "scale(1)")
                .attr("transform", "translate(-2, -2)")
                .attr("box-shadow", "none")

        };




        // -------------------------------------------------------------- Class 2

        if (class2.includes(randomEmission)) {

            let svgMatching = d3.select("#svgMatching")
            let lv2 = svgMatching.select("#lever2")

            lv2
                .style("opacity", .9)
                .attr("transform", "scale(0.98)")
                .attr("transform", "translate(2, 2)")
                .attr("box-shadow", "3px 2px 22px 1px rgba(0, 0, 0, 0.24)")


            respClass = "b2";
            this.setState({
                B2: B2 + 1,
                responseColor: this.state.color2
            });

            // CHANGEOVER? 
            if (pe.class === "b1") {
                co = 1;
                this.setState({
                    CO: CO + 1,
                    responseColor: this.state.colorCO
                });
            }

            // CHECK FOR REINFORCEMENT: 
            if (this.state.r2ready !== 0) {
                reinforced = true

                this.setState({
                    Points2: Points2 + this.state.r2ready,
                    r2ready: 0,
                });

                let int2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2) * 1000);

                d3.timeout((elapsed2) => {
                    this.setState({ r2ready: 1 });
                }, int2);
            };

            lv2
                .transition().duration(300).style("opacity", .5)
                .attr("transform", "scale(1)")
                .attr("transform", "translate(-2, -2)")
                .attr("box-shadow", "none")
        };



        //    ----------------   CUMULATIVE RECORD  ----------------




        if (respClass === "b1" | respClass === "b2") {


            // SVG CUMULATIVE RECORD:
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

            let px = 35 + scaleTime(this.state.progress / 1000);

            let myBehavior = this.state.B1 + this.state.B2

            let py = scaleResponses(
                this.state.recordHeight - ((myBehavior - 1) % this.state.recordHeight)
            );

            let py1 = scaleResponses(
                this.state.recordHeight - ((myBehavior) % this.state.recordHeight)
            );


            // DRAW LINE     (but not if the needle needs reset):
            if ((B1 + B2 + 1) % this.state.recordHeight !== 0) {
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


            // SVG MATCHING:

            //console.log(randomEmission)

            //let svgMatching = d3.select("#svgMatching")

            // svgMatching.append("text").text(`${randomEmission}`)
            //     .attr("x", 180).attr("y", 90).attr("font-size", ".7rem")

            // svgMatching.append("text").text(`${randomEmission}`)
            //     .attr("x", 205).attr("y", 90).attr("font-size", ".7rem")

            // svgMatching.append("text").text(`${randomEmission}`)
            //     .attr("x", 180).attr("y", 105).attr("font-size", ".7rem")

            // svgMatching.append("text").text(`${randomEmission}`)
            //     .attr("x", 205).attr("y", 105).attr("font-size", ".8rem")

            // svgMatching.append("text").text(`${randomEmission}`)
            //     .attr("x", 230).attr("y", 90).attr("font-size", ".8rem")

            // svgMatching.append("text").text(`${randomEmission}`)
            //     .attr("x", 230).attr("y", 105).attr("font-size", ".8rem")

            // svgMatching.append("text").text(`${randomEmission}`)
            //     .attr("x", 255).attr("y", 90).attr("font-size", ".7rem")

            // svgMatching.append("text").text(`${randomEmission}`)
            //     .attr("x", 255).attr("y", 105).attr("font-size", ".7rem")

        };



        //  RECORD THIS EVENT:
        let newResponse = {
            id: newID,
            timestamp: eventTimeStamp,
            class: respClass,
            emission: randomEmission,
            reinforced: reinforced,
            population: population,
            co: co,
            // points1: points1,
            // points2: points2,
        };

        events.push(newResponse);
        this.setState({ events: events });









        //               CREATE NEW_POPULATION:




        var next_population = []

        if (reinforced === false) {

            for (let j = 0; j < population.length; j++) {

                let idx1 = d3.randomInt(9)()
                let p1 = population[idx1]
                let idx2 = d3.randomInt(population.length)()
                let p2 = population[idx2]

                var phenRandom = recombineAndMutate(p1, p2, this.state.mutation_rate)

                if (this.state.repertoire.includes(phenRandom)) {
                    next_population.push(phenRandom)
                } else {
                    next_population.push(phenRandom % this.state.repertoire.length)
                }

            }

            addData(next_population)
            this.setState({ population: next_population })

            // next_population.forEach(item => {
            //     allPopulations.push(item)
            // })

            //this.setState({ allPopulations: allPopulations })

            //this.setState({ responseColor: "grey" });


        } else if (reinforced === true) {

            var fitnessValues = []

            population.forEach(phenotype => {
                let phen_dif = Math.abs(phenotype - randomEmission)
                fitnessValues.push(phen_dif)
            })


            // for each behavior in the population:
            for (let j = 0; j < population.length; j++) {


                // Get two parents:

                var parents = []

                while (parents.length < 2) {
                    var randomFitness = parseInt(d3.randomExponential(1, 300)(this.state.Miu1) * 100);
                    var relativeFitnessValues = []

                    fitnessValues.forEach(fitness => {
                        let fitness_dif = Math.abs(fitness - randomFitness)
                        relativeFitnessValues.push(fitness_dif)
                    })


                    var closestIndex = d3.minIndex(relativeFitnessValues)
                    var closestPhen = population[closestIndex]

                    if (!parents.includes(closestPhen)) {
                        parents.push(closestPhen)
                    }
                }


                // CHILD BEHAVIOR:
                //var phenFitness = recombineAndMutate(p1, p2, 0.50)
                var child = recombineAndMutate(parents[0], parents[1], this.state.mutation_rate)

                //console.log("emission: ", randomEmission, "; parents: ", parents, " --> ", child)


                // IS THIS TO WRAP THE REPERTOIRE ... ?? 
                if (this.state.repertoire.includes(child)) {
                    next_population.push(child)
                } else {
                    next_population.push(child % this.state.repertoire.length)
                }

                /* console.log("population: ", population, "; ", randomEmission)
                console.log("fitnessValues: ", fitnessValues)
                console.log("randomFitness: ", randomFitness)
                console.log("relFitnessVals: ", relativeFitnessValues)
                console.log("closestPhen: ", closestPhen, "; index: ", closestIndex, "; parent: ", closestPhen)
                console.log("-----------------------------") */


                // let idx1 = d3.randomInt(9)()
                // let p1 = population[idx1]
                // let idx2 = d3.randomInt(population.length)()
                // let p2 = population[idx2]

                //var phenFitness = recombineAndMutate(p1, p2, 0.50)

                // if (this.state.repertoire.includes(phenFitness)) {
                //     next_population.push(phenFitness)
                // } else {
                //     next_population.push(phenFitness % this.state.repertoire.length)
                // }


            };

            addData(next_population)
            this.setState({ population: next_population })

            // next_population.forEach(item => {
            //     allPopulations.push(item)
            // })

            // this.setState({ allPopulations: allPopulations })

            //this.setState({ responseColor: "grey" });
        };







        //}

        //}, this.state.irt); // END OF TIMER

    } // END OF FUNCTION runETBD()




    resetETBD = () => {

        // RESET ALL TIMERS: 


        // CLEAR CUMULATIVE RECORD:
        let svgRecord = d3.select("#svgRecord");
        svgRecord.selectAll(".dataLine").remove();
        svgRecord.selectAll(".dataCircle").remove();

        let svgMatching = d3.select("#svgMatching")
        svgMatching.selectAll(".histRect").remove()


        // CLEAR SKINNER BOX :)
        //let svgMatching = d3.select("#svgMatching");

        // svgMatching
        //     .append("text")
        //     .attr("class", "introTexts")
        //     .attr("x", 220)
        //     .attr("y", 70)
        //     .attr("fill", 'rgb(50, 50, 50)')
        //     .attr("font-size", ".9rem")
        //     .attr("font-family", 'Montserrat')
        //     .text("When ready, click START.");


        // RESET STATE: 
        this.setState(etbdState)

        let genZero = []
        let n = this.state.N
        for (let i = 0; i < n; i++) {
            let b = d3.randomInt(1000)()
            genZero.push(b)
        }
        this.setState({ population: genZero })
        this.setState({ allPopulations: genZero })
    };



    componentDidMount() {
        // CREATE RANDOM POPULATION
        let genZero = []
        let n = this.state.N
        for (let i = 0; i < n; i++) {
            let b = d3.randomInt(1000)()
            genZero.push(b)
        }
        this.setState({ population: genZero })
        this.setState({ allPopulations: genZero })

        d3.select("#btnStartETBD").on("click", this.beginSimulation)
        d3.select("#btnResetETBD").on("click", this.resetETBD)
    };




    // BAR CHART REPERTOIRE ======================================      REPERTOIRE BAR CHART: 



    // var myPhens = phensTest.filter(item => item.present.length > 0)
    // DrawChartPhenotypes(myPhens, [d3.min(this.state.repertoire), d3.max(this.state.repertoire)])






    // svgMatching: ===========================================================  svgMatching
    // var svg = d3
    //     .select("#demo")
    //     .append("svg")
    //     .attr("id", "svgMatching")
    //     .attr("width", "100%")
    //     .attr("height", "100%");

    // svg.on("click", this.runETBD);

    // var svgETBD = d3
    //     .select("#demoETBD")
    //     .append("svg")
    //     .attr("id", "svgETBD")
    //     .attr("width", "100%")
    //     .attr("height", "100%");

    // svgETBD.on("click", this.runETBD);
    //}


    // sliderChange = (e) => {
    //     this.setState({ cod1_duration: e.currentTarget.value * 1000 })
    //     this.setState({ cod2_duration: e.currentTarget.value * 1000 })
    // }

    // dummyFunc = () => {

    //     d3.select("#svgMatching").append('text').text(`${this.state.B1}`)
    //         .attr("x", 200)
    //         .attr("y", 100)
    //         .attr("fill", 'rgb(255, 128, 49)')

    //     d3.select("#svgMatching").append('text').text(`${this.state.Points1}`)
    //         .attr("x", 200)
    //         .attr("y", 130)
    //         .attr("stroke", 'rgb(255, 128, 49)')

    //     // B2, r2
    //     d3.select("#svgMatching").append('text').text(`${this.state.B2}`)
    //         .attr("x", 350)
    //         .attr("y", 100)
    //         .attr("fill", '#0c6e0c')

    //     d3.select("#svgMatching").append('text').text(`${this.state.Points2}`)
    //         .attr("x", 350)
    //         .attr("y", 130)
    //         .attr("stroke", '#0c6e0c')
    // }

    render() {


        return (

            <>
                {/* <div className="divShowHideETBD">
                    <button id="btnShowETBD" onClick={this.showETBD}>Show ETBD</button>
                    <button id="btnClearETBD" onClick={this.hideETBD}>Hide</button>
                </div> */}

                <div className="divStartResetETBD">
                    <button id="btnStartETBD" onClick={this.beginSimulation}>run ETBD</button>
                    <button id="btnResetETBD" onClick={this.resetETBD}>reset</button>
                </div>

            </>



        );
    };
}
//}
