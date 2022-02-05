import React, { Component } from "react";
// import parse from "html-react-parser";
// import darwin_ferguson1 from "../../assets/darwin_ferguson1.png"
// import { Image } from "react-bootstrap"

class Chapter04 extends Component {
    render() {
        var skills = [
            "computational modelling",
            "reinforcement learning",
            "machine learning",
            "web development",
            "Python",
            "Tkinter",
            "SciPy",
            "NLTK",
            "Matplotlib",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "D3",
            "Node",
            "Postgres",
            "DynamoDB",
            "MongoDB",
            "Git",
            "Github",
            "Heroku",
            "Netlify",

        ];

        var Skills = skills.map((s) => {
            return <label key={Math.random()}>{s}</label>;
        });

        return (
            <div
                id="ch4"
                className="chapter"
                style={{
                    backgroundColor: "#1D2731",
                    minHeight: "100vh"
                }}
            >
                <div className="chapterRow">
                    <div className="chapterCol">
                        <h1
                            className="chapter-title"
                            style={{ fontSize: "2.5rem", textAlign: "left", marginBottom: "3rem", }}
                        >
                            How everything works
                        </h1>

                        {/* <span title={parse("Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.")} >{"Popa (2019)"}</span> */}

                        <p id="ch4_p1" className="p-left" style={{ maxWidth: "500px", fontSize: "1rem", marginBottom: "2rem", color: "#bbb", }} >Neurons are located in a confined, 3-dimensional space. A neuron can be in one of two states: 1 or 0.</p>

                        <p id="ch4_p1" className="p-left" style={{ maxWidth: "500px", fontSize: "1rem", marginBottom: "2rem", color: "#bbb", }} >The neurons that "fire" in a given window of time describe a shape, a configuration with measurable properties. This configuration keeps changing, as action potentials travel from cell to cell.</p>

                        <p className="p-left" style={{ color: "#14A76C", maxWidth: "500px", fontSize: "1.0rem", marginBottom: "4rem" }}>The streams of activation states is the material counterpart of all forms of experience and expression:  an agent that feels, notices, thinks, does - in real time.
                            </p>

                        {/* <div className="chapterSkills"
                            style={{ border: "1px solid #05F4B7", padding: ".5rem", borderRadius: "10px", }}>
                            <span className="citation-apa" style={{ color: "#ccc", color: "#05F4B7", width: "500px", fontSize: ".9rem", lineHeight: "1.5rem" }}>Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.</span>
                        </div> */}


                        <div className="chapterSkills">{Skills}</div>


                    </div>

                    <div className="chapterCol" style={{ opacity: .8 }}>


                        <h1 className="chapter-title" style={{ color: "#FFE400", fontSize: "1.5rem", margin: "2rem 0rem 2rem 0rem" }}>Development happens now</h1>

                        <p className="p-left" style={{ maxWidth: "500px", }} >Real-time biochemical changes shape and reshape the connectomme, creating "beaten neuronal paths" that come accross as tendencies to feel, act, think in certain ways.
                        </p>


                        <p className="p-left" style={{ maxWidth: "500px", }} >All phenomena discussed in psychology are collections of cognitive, emotional, and behavioral tendencies.
                        </p>


                        <h1 className="chapter-title" style={{ color: "#FFE400", fontSize: "1.5rem", margin: "2rem 0rem 1rem 0rem" }}>Counsciousness and Free Will</h1>
                        {/* 
                        <p className="p-left">Agency, freedom, will etc. - require sustained attention, or focus, so they can only exist in the present. They can only interfere with developmental trajectories, or "propensities", in the present. A smoker is someone who smoked now many times; a former smoker is someone who keeps not smoking now.
                        </p> */}

                        <p className="p-left" style={{ maxWidth: "500px", }} >Phenomena related to agency, intentionality, will, etc. - must corespond to patterns in neuronal activity. Identifying their signatures is a matter of experiment.
                        </p>

                        <h1 className="chapter-title" style={{ color: "#FFE400", fontSize: "1.5rem", margin: "2rem 0rem 1rem 0rem" }}>Computational neurosociology
                        </h1>

                        <p className="p-left">One agent's expression is another agent's experience. Societies are agents that experience each other's expression. Asimov's psychohistory is impossible without a complete theory of learning.
                        </p>

                    </div>
                </div>
            </div >
        );
    }
}

export default Chapter04;
