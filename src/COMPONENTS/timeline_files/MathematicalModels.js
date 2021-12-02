
import "../sensitivity/mathematical_models.sass";

import D3ScatterRatios from "../sensitivity/D3ScatterRatios";
import BasicSummaryTable from "../sensitivity/BasicSummaryTable";
import D3ScatterLogs from "../sensitivity/D3ScatterLogs";


import React, { Component } from "react";
//import parse from "html-react-parser"
import ReadMore from "./ReadMore";
import CollapseHook from "./CollapseHook"
import MatchingEquations from "../sensitivity/MatchingEquations";

const regression = window.regression;


export default class MathematicalModels extends Component {

    state = {
        // sessionData: [
        //     { schedule: 1, scheduleData: { b1: 69, b2: 154, r1: 32, r2: 73, co: 60 } },
        //     { schedule: 2, scheduleData: { b1: 125, b2: 125, r1: 61, r2: 65, co: 92 } },
        //     { schedule: 3, scheduleData: { b1: 119, b2: 119, r1: 58, r2: 49, co: 92 } },
        //     { schedule: 4, scheduleData: { b1: 101, b2: 352, r1: 26, r2: 84, co: 59 } },
        //     { schedule: 5, scheduleData: { b1: 317, b2: 209, r1: 84, r2: 38, co: 72 } },
        // ]

        sessionData: [
            { schedule: 1, scheduleData: { b1: 69, b2: 154, r1: 32, r2: 73, co: 60 } },
            { schedule: 2, scheduleData: { b1: 125, b2: 125, r1: 61, r2: 65, co: 92 } },
            { schedule: 3, scheduleData: { b1: 119, b2: 119, r1: 58, r2: 49, co: 92 } },
            { schedule: 4, scheduleData: { b1: 101, b2: 352, r1: 26, r2: 84, co: 59 } },
            { schedule: 5, scheduleData: { b1: 317, b2: 209, r1: 84, r2: 38, co: 72 } },
        ]
    }


    componentDidMount() {
        // add ratios and logs to each schedule in sessionData:

        let regData = [];
        let sessionData = this.state.sessionData;

        sessionData.forEach((sch) => {
            sch.ratioB = (sch.scheduleData.b1 / sch.scheduleData.b2).toFixed(2)
            sch.ratioR = (sch.scheduleData.r1 / sch.scheduleData.r2).toFixed(2)
            sch.logB = Math.log10(sch.scheduleData.b1 / sch.scheduleData.b2).toFixed(2)
            sch.logR = Math.log10(sch.scheduleData.r1 / sch.scheduleData.r2).toFixed(2)
        })


        sessionData.forEach((item) => {
            regData.push(
                [parseFloat(item.logR), parseFloat(item.logB)]
            )
        })

        let result = regression.linear(regData)
        // const gradient = result.equation[0];
        // const yIntercept = result.equation[1];
        // const predictedB = result.predict;

        let gradient = result.equation[0];
        let yIntercept = result.equation[1];
        let bias = parseFloat((10 ** yIntercept).toFixed(2));

        let predictedB = result.predict;

        console.log("predictedB: ")
        console.log(predictedB)


        this.setState({
            sessionData: sessionData,
            regData: regData,
            slope: gradient,
            yIntercept: yIntercept,
            bias: bias,
        })

    }


    render() {

        return (
            <div
                className="item"
                content1={this.props.qualDate}
                key={this.props.date + this.props.title}
                id={this.props.date}

                style={{
                    fontFamily: this.props.fontFam,
                    marginTop: "3rem",
                    marginBottom: "3rem"
                }}
            >
                <div className="itemContent">


                    {/* -------------------      DEMO SENSITIVITY      ---------------------- */}


                    <div className="projectColumnLeft" >

                        <span className="title">{this.props.title}</span>

                        <ReadMore maxChars={1000} overview={this.props.description} />

                        <CollapseHook
                            collapsedTitle={"Relevant work"}
                            collapsedText={
                                <div className="divRefs">  {this.props.references}  </div>
                            }
                        />
                        <div className="links" >  {this.props.links}  </div>
                    </div>


                    <div
                        className="chapterCol"
                        style={{
                            color: "lightgrey",
                            fontSize: "12px",
                            border: "1px solid grey",
                            margin: "0px",
                            padding: "5px",
                            maxWidth: "55%",
                        }}
                    >


                        <MatchingEquations />

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                backgroundColor: "#cf4343",
                                padding: "2px",
                            }}>

                            <D3ScatterRatios data={this.state.sessionData} />

                            <D3ScatterLogs data={this.state.sessionData} />
                        </div>

                        <BasicSummaryTable
                            data={this.state.sessionData}
                            a={this.state.slope}
                            b={this.state.bias}
                        />

                    </div>
                </div>
            </div>
        );
    }
}