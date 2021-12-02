import React, { Component } from "react";
//import parse from "html-react-parser";

class Chapter02 extends Component {
    render() {
        var skills = [
            "principal investigator",
            "VB.Net",
            "Excel/VBA",
            "experimental interface",
            "human and synthetic data",
            "translational research",
        ];

        var Skills = skills.map((s) => {
            return <label key={s}>{s}</label>;
        });

        return (
            <div
                id="ch2"
                className="chapter"
                style={{
                    backgroundColor: "#1D2731",
                }}
            >
                <div className="chapterRow">
                    <div className="chapterCol">
                        <h1 className="chapter-title" style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>From bits to ADHD</h1>

                        <span className="spanYears">2011 - 2013</span>

                        <div className="chapterSkills">{Skills}</div>

                        <p id="ch2_p1" className="p-left">
                            For my dissertation project I tackled the parallel between mutation and ADHD. My main goals were to verify if ETBD can simulate ADHD symptoms, treatments, and developmental trajectories, and if ETBD data is relevant to human behavior. In both cases, the answer was yes.</p>


                        {/* <p>
                            <a
                                href="https://www.andreipopa515.com/computational-adhd"
                                className="link515"
                            >
                        {
                            "More details and subsequent analyses here: https://www.andreipopa515.com/computational-adhd"
                        }
                            </a>
                        </p> */}


                    </div>


                    <div className="chapterCol" >

                        <p className="p-left">In part one, I explored interactions between mutation rate and environmental properties: reinforcement rate, magnitude, and COD.<br /><br /></p>


                        <p className="p-left">In part two, I explored human behavior under different COD requirements and I compared it with that of ETBD.<br /><br /></p>


                        <p className="p-left">In part three, I used traditional instruments to measure ADHD symptoms in the same participants and I compared the scores with measures of choice behavior.</p>

                        <p className="p-left"
                            style={{
                                marginTop: "2rem",
                                border: "1px solid #888",
                                borderRadius: "10px",
                                padding: "0.5rem",
                                // backgroundColor: "#fdff9f",
                                // backgroundColor: "rgb(20, 33, 61)",
                                // backgroundColor: "rgb(20, 33, 61)",
                                backgroundColor: "rgba(5, 75, 87, 0.5)",


                                width: "90%",
                                color: "#fff",
                                opacity: "0.8",
                                fontSize: ".9rem",
                                lineHeight: "1.5rem",
                            }}

                        ><b>Fast Matching.</b> To accomplish two and three I designed and implemented a concurrent-schedule procedure that allowed me to compare human and computational data side by side. This was my first study as a principal investigator.</p>
                    </div>


                </div >
            </div >
        );
    }
}

export default Chapter02;
