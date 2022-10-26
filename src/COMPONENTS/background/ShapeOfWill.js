


import React, { Component } from "react";

export default class ShapeOfWill extends Component {

    render() {

        var Description = "description goes here";

        return (

            <div id="MyTimeline" style={{
                marginBottom: "1rem",
                marginTop: ".1rem",
                backgroundColor: "#1d2731"
            }}>

                <div className="vertical" style={{
                    //backgroundColor: "#FF652F",
                    //backgroundColor: "#1B4D3E",
                    //backgroundImage: "linear-gradient(to bottom, #1d2731 , orange, #1A2930)"
                    //backgroundImage: "linear-gradient(to right, #1D2731 ,  #1D2731 , #FF652F ,   #FFF)"

                }}>

                    <div
                        className="timelineItem right"
                        content2={"PsyArXiv"}
                        key={"shape_of_will_as_item"}
                        style={{
                            backgroundColor: "#1D2731",
                            //backgroundColor: "#05F4B7",
                            //backgroundColor: "#FF652F",
                            //backgroundColor: "#aaa",

                            width: "70%",
                            //padding: "2rem"
                            marginBottom: "2rem",
                            marginTop: "2rem",
                            color: "#ccc",
                        }}
                    >
                        <div className="timelineContent"
                            style={{
                                backgroundColor: "#1D2731",
                                //backgroundColor: "#ff652f",
                                //backgroundColor: "#ff652f",
                                //backgroundColor: "#aaa",
                                //color: "#ccc",
                            }}
                        >

                            {/* -------------------       Event A      ---------------------- */}

                            <div className="projectColumnLeft">
                                <span className="title" style={{ color: "#ccc" }}>{"The Shape of Will"}</span>

                                <p>{Description}</p>

                                <div className="divAuthors">
                                    {"Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an."}
                                </div>
                            </div>



                            <div
                                // className="projectColumnImagesMatching"
                                style={{
                                    //backgroundColor: "#1D2731",
                                    //backgroundColor: "#aaa",
                                    //backgroundColor: "#FF652F",
                                    //width: "75%",
                                    //marginLeft: "10%"
                                }}>




                                <h1 className="chapter-title" style={{ color: "#FF652F", color: "#FFE400", fontSize: "1.5rem", margin: "2rem 0rem 2rem 0rem" }}>Development happens now</h1>

                                <p className="p-left" style={{ maxWidth: "500px", }} >Real-time biochemical changes shape and reshape the connectomme, creating "beaten neuronal paths" that come accross as tendencies to feel, act, think in certain ways.
                                </p>


                                <p className="p-left" style={{ maxWidth: "500px", }} >All phenomena discussed in psychology are collections of cognitive, emotional, and behavioral tendencies.
                                </p>


                                <h1 className="chapter-title" style={{ color: "#FF652F", color: "#FFE400", fontSize: "1.5rem", margin: "2rem 0rem 1rem 0rem" }}>Counsciousness and Free Will</h1>
                                {/* 
                        <p className="p-left">Agency, freedom, will etc. - require sustained attention, or focus, so they can only exist in the present. They can only interfere with developmental trajectories, or "propensities", in the present. A smoker is someone who smoked now many times; a former smoker is someone who keeps not smoking now.
                        </p> */}

                                <p className="p-left" style={{ maxWidth: "500px", }} >Phenomena related to agency, intentionality, will, etc. - must corespond to patterns in neuronal activity. Identifying their signatures is a matter of experiment.
                                </p>


                                <p className="p-left" style={{ maxWidth: "500px", }} >
                                    <br />
                                    <br />
                                    <br />
                                </p>

                                <h1 className="chapter-title" style={{ color: "#FFE400", fontSize: "1.5rem", margin: "2rem 0rem 1rem 0rem" }}>Computational neurosociology
                                </h1>

                                <p className="p-left">One agent's expression is another agent's experience. Societies are agents that experience each other's expression. Asimov's psychohistory is impossible without a complete theory of learning.
                                </p>





                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}