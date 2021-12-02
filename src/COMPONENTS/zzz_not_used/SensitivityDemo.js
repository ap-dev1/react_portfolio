import React, { Component } from "react";
import * as d3 from "d3";
import "../matching/matching.sass";
import "./sensitivity.sass";

import { setDemoState } from "./demoState";

import SensitivityScatter from "./SensitivityScatter";
import ResultsTable from "./BasicSummaryTable";


export default class SensitivityDemo extends Component {

    constructor() {
        super();
        let myState = setDemoState();
        this.state = myState;
    };


    beginSession = () => {

        d3.select("#svgMatchingSmall").on("click", this.evaluateResponse);

        this.setState({ timeStart: performance.now() })

        const schedules = this.state.schedules

        var updateTimeElapsed = (te) => {
            this.setState({ progress: te })

            if (te >= this.state.sessionDuration) {
                let activeSchedule = this.state.activeSchedule
                let sch111 = activeSchedule + 1

                if (schedules[sch111]) {
                    this.setState({
                        activeSchedule: sch111,
                        sessionDuration: this.state.sessionDuration + schedules[sch111].duration * 1000
                    })

                    schInterval.restart(updateTimeElapsed, 50)

                } else {
                    console.log("schedules[sch111].duration -- DOES NOT EXIST. ending session... ")
                    d3.select("#svgMatchingSmall").on("click", null)
                    //console.log("... END OF SESSION")
                    schInterval.stop()
                }
            }
        }

        const schInterval = d3.interval(updateTimeElapsed, 50);
    };





    evaluateResponse = (e) => {

        let timeStart = this.state.timeStart;
        let timeElapsed = this.state.timeElapsed;
        let eventTimeStamp = performance.now()

        // console.log("timeStart: ", timeStart / 1000)
        // console.log("timeElapsed: ", timeElapsed)
        // console.log("eventTimeStamp: ", eventTimeStamp / 1000)
        // console.log("----------")

        this.setState({
            timeElapsed: eventTimeStamp - timeStart
        });

        let schNr = parseInt(this.state.activeSchedule);
        let sessionData = this.state.sessionData;
        let scheduleData = sessionData.filter((item) => item.schedule === schNr)[0].scheduleData

        let b1 = scheduleData.b1;
        let r1 = scheduleData.r1;
        let b2 = scheduleData.b2;
        let r2 = scheduleData.r2;


        // EVENT COORDINATES:
        let x = e.offsetX;
        let y = e.offsetY;


        // CLASS 1: -----------------------------------------------------

        if (d3.polygonContains(this.state.class1, [x, y])) {
            b1 += 1
            //console.log("b1: ", b1)

            if (this.state.r1ready !== 0) {
                r1 += this.state.r1ready;
                this.setState({ r1ready: 0 });
                // let mg1 = parseInt(d3.randomExponential(1, 5)(this.state.mRI1));
                let mg1 = 1;
                let int1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1) * 1000);
                let t1 = d3.timeout((elapsed1) => {
                    this.setState({ r1ready: 1 * mg1 });
                }, int1)

            }
        }


        // CLASS 2: -----------------------------------------------------

        if (d3.polygonContains(this.state.class2, [x, y])) {
            //console.log("class2!")

            b2 += 1;
            if (this.state.r2ready !== 0) {
                r2 += this.state.r2ready;
                this.setState({ r2ready: 0 });
                let mg2 = 1;
                let int2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2) * 1000);
                let t2 = d3.timeout((elapsed2) => {
                    this.setState({ r2ready: 1 * mg2 })
                }, int2);
            }
        }


        //  UPDATE  sessionData:
        sessionData.filter((item) => item.schedule === schNr)[0].scheduleData = { b1: b1, b2: b2, r1: r1, r2: r2 }
        this.setState({ sessionData: sessionData })
    }




    // nextSchedule = () => {
    //     this.setState({ schedule: this.state.schedule + 1 })
    //     //this.setState({ endSchedule: true })
    // }


    endSession = () => {
        console.log("endSession()")
        this.setState({ endSession: true })

        // RESET STATE: 
        let myState = setDemoState();
        this.setState(myState)
    };






    componentDidMount() {

        let skinnerBox = d3.select("#svgMatchingSmall")
        let w = document.getElementById("svgMatchingSmall").clientWidth
        let h = document.getElementById("svgMatchingSmall").clientHeight

        let lw = parseInt(.35 * w)
        let lh = parseInt(.30 * h)

        let x1 = parseInt((w / 2 - lw) - ((w / 2 - lw) / 2))
        let y1 = parseInt(0.2 * h)

        let x2 = parseInt(w / 2 + (w / 2 - lw) / 2)
        let y2 = parseInt(0.2 * h)

        let l1 = [x1, y1, lw, lh]
        let l2 = [x2, y2, lw, lh]

        let c1 = [
            [l1[0], l1[1]],
            [l1[0] + l1[2], l1[1]],
            [l1[0] + l1[2], l1[1] + l1[3]],
            [l1[0], l1[1] + l1[3]],
        ]

        let c2 = [
            [l2[0], l2[1]],
            [l2[0] + l2[2], l2[1]],
            [l2[0] + l2[2], l2[1] + l2[3]],
            [l2[0], l2[1] + l2[3]],
        ]

        this.setState({ class1: c1, class2: c2 })

        skinnerBox
            .append("rect")
            .attr("class", "lever")
            .attr("x", l1[0])
            .attr("y", l1[1])
            .attr("width", l1[2])
            .attr("height", l1[3])
            .attr("fill", "rgb(121, 47, 0)")

        skinnerBox
            .append("rect").attr("class", "lever")
            .attr("x", l2[0])
            .attr("y", l2[1])
            .attr("width", l2[2])
            .attr("height", l2[3])
            .attr("fill", "rgb(6, 45, 6)")
    };








    render() {

        // RESULTS TABLE:




        return (
            <div id="SensitivityDemo" className="demoWrapper">

                <div className="topRow">

                    <div className="columnLeft">

                        <label
                            style={{
                                width: "100px",
                                right: "-100px",
                                color: "yellow",
                                fontSize: "18px",
                                padding: "10px",
                            }}

                        >sch: {this.state.activeSchedule}
                            <br /> te: {this.state.progress}
                            <br /> {this.state.sessionDuration}
                        </label>


                        <ResultsTable sessionData={this.props.sessionData} />

                        <ResultsTable sessionData={this.state.sessionData} />

                        <svg id="svgMatchingSmall"></svg>

                        <div className="whatevers">
                            <button id="btnStartDemo" onClick={this.beginSession}>start</button>


                            <button id="btnResetDemo" onClick={this.endSession}>reset</button>
                        </div>

                    </div>

                    <SensitivityScatter data={this.props.sessionData} />

                </div>
            </div>
        )
    }
}