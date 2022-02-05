import React, { Component } from "react";
//import parse from "html-react-parser"
import ReadMore from "./ReadMore";
//import ImagesCarousel from "./ImagesCarousel";
import CollapseHook from "./CollapseHook"

// import HammingDemo from "../etbd_hamming/HammingDemo"



export default class Qual extends Component {



    render() {

        return (
            <div
                className="item"
                content1={this.props.qualDate}
                key={this.props.date + this.props.title}
                id={"QualPhdDesign"}

                style={{
                    fontFamily: this.props.fontFam,
                    marginTop: "3rem",
                    marginBottom: "3rem"
                }}
            >
                <div className="itemContent">


                    {/* -------------------       QUAL      ---------------------- */}

                    <div className="projectColumnLeft">

                        <span className="title">{this.props.title}</span>

                        <ReadMore maxChars={1000} overview={this.props.description} />

                        {/* <p className="p-left">
                            To verify ETBD predictions, I designed and implemented a concurrent-schedule procedure that allowed me to compare human and computational data side by side. This was my first study as a principal investigator.
                        </p> */}

                        <CollapseHook
                            collapsedTitle={"Relevant work"}

                            collapsedText={
                                <div className="divRefs">  {this.props.references}  </div>
                            }
                        />

                        <div className="links" >  {this.props.links}  </div>

                        {/* <div className="divTech">  {Technologies}  </div> */}

                    </div>


                    <div
                        className="chapterCol"
                        style={{ marginTop: "20px" }}
                    >

                        {/* <h1
                            className="chapter-sub-title"
                            style={{
                                fontSize: "18px",
                                textAlign: "center",
                            }}

                        >Dissertation project</h1> */}

                        <h2
                            className="chapter-sub-title"
                            style={{
                                fontSize: "14px",
                                textAlign: "left",
                                fontWeight: 600,
                                fontVariant: "normal",
                                color: "cyan",
                                opacity: .8
                            }}

                        >
                            Dissertation, Part One: Computational ADHD
                        </h2>

                        <p
                            className="p-left"
                            style={{ color: "#02aab0", color: "#ccc" }}
                        >
                            I explored the effects of mutation rates from 5% to 100% on nine behavioral measures, <br /> <br />

                            <ul type='square'>
                                <li>at different reinforcement rates; </li>
                                <li>at different reinforcement magnitudes; </li>
                                <li>and under different discriminability conditions. </li>
                            </ul >
                        </p>






                        {/* <HammingDemo /> */}


                        {/* <p className="p-left" style={{ color: 'rgb(255, 128, 49)', }}>Then, I explored human behavior under different COD requirements and I compared it with the ETBD. <br /><br /></p>


                        <p className="p-left" style={{ color: 'rgb(255, 128, 49)', }}>Finally, I used traditional instruments to measure ADHD symptoms in the same participants and I compared the scores with measures of choice behavior.</p> */}

                        {/* <p className="p-left"
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

                        ><b>Fast Matching.</b> To accomplish two and three I designed and implemented a concurrent-schedule procedure that allowed me to compare human and computational data side by side. This was my first study as a principal investigator.</p> */}
                    </div>


                </div>
            </div>
        );
    }
}