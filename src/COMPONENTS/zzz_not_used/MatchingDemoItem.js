import React, { Component } from "react";
import * as d3 from "d3";
import { svg } from "d3";
// import {*} from "./matchingHelpers.js"
import parse from "html-react-parser";
import { ProgressBar } from "react-bootstrap"

import FastMatchingDemo from "../matching/FastMatchingDemo"
import ReadMore from "../timeline_files/ReadMore";


export default class MatchingDemoItem extends Component {

    render() {

        var Description = "description goes here";

        return (

            <div
                id="MyTimeline"
                style={{
                    //marginTop: "1rem",
                    marginBotton: "1rem",
                    //backgroundColor: "#eee",
                    //paddingTop: "0rem",
                    //paddingBottom: "0rem",
                    //paddingTop: "1rem",
                    //paddingBotton: "1rem"
                }}>

                <div className="vertical"
                    style={{
                        //marginBottom: "0rem",
                        //marginTop: "0rem",
                        //backgroundColor: "#1D2731",
                    }}>

                    <div
                        className="timelineItem right"
                        content1={"2011-2013"}
                        key={"fast_matching_as_item"}
                        id={"04/2011-04/2013"}
                        style={{
                            // marginBottom: "0rem",
                            // marginTop: "0rem",
                            //backgroundColor: "#4480c5",
                        }}
                    >


                        <div className="timelineContent"
                        // style={{ marginBottom: "0rem" }}
                        >

                            {/* -------------------       Event A      ---------------------- */}

                            <div className="projectColumnLeft">
                                <span className="title">{"Fast Matching Demo"}</span>
                                <ReadMore maxChars={300} overview={Description} />
                                <div className="divAuthors">{"Popa (2013)"}</div>
                            </div>

                            <div className="projectColumnImagesMatching">
                                <FastMatchingDemo />
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            // <div id="MyTimeline">
            //     <div className="vertical">{eventsMappedToElements}</div>
            // </div>
        )

    }
}