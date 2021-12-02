import React, { Component } from "react";
import parse from "html-react-parser";
// import ReadMoreHook from "./ReadMoreHook";
// import CollapseHook from "./CollapseHook";
import FastMatchingDemo from "../matching/FastMatchingDemo.js"

class Chapter0 extends Component {
    render() {
        // var skills = [
        //     "VB.Net",
        //     "Excel/VBA",
        //     "Principal Investigator",
        // ];

        // var Skills = skills.map((s) => {
        //     return <label key={s}>{s}</label>;
        // });

        return (
            <div
                id="ch0"
                className="chapter"
                style={{
                    backgroundColor: "#373738", backgroundColor: "#1f1e1e", backgroundColor: "#101f2f", backgroundColor: "#233d46",
                }}>
                <div className="chapterRow">
                    <div className="chapterCol">

                        {/* <span className="spanYears">Prologue</span> */}

                        <h1 className="chapter-title" style={{ fontSize: "2rem" }}>Choice & preference</h1>

                        <p id="ch0_p1" className="p-left">
                            ipso mata dolorata suge pula ciocolata sa rimeze pizdelete maracasa paranarama salvae higortorishcana
                        </p>

                        <h1 className="chapter-title" style={{ fontSize: "2rem" }}>Changeover Delays</h1>

                        <p className="p-left">
                            {parse("When two sources of reinforcement are simoultaneously available, the agent can be reinforced for responding on A, for responding on B, or for <i>changing over</i> from one to the other, which is problematic. An effective strategy for preventing the third scenario is to implement a <i>changeover delay</i>, or COD: a few seconds during which reinforcers are withheld (Findley, 1950s).")}
                        </p>



                        {/* <div className="chapterSkills">{Skills}</div> */}


                    </div>

                    <div className="chapterCol">

                        <div className="projectColumnImagesMatching">
                            <FastMatchingDemo />
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Chapter0;
