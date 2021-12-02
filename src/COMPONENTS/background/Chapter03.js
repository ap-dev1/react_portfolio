import React, { Component } from "react";
//import parse from "html-react-parser";

class Chapter03 extends Component {
    render() {

        var skills = [
            "VB.Net",
            "Excel/VBA",
            "Python",
            "SQL",
            "Octave",
            "human research",
            "computational research",
            'study management',
            "experimental interfaces",
        ];

        var Skills = skills.map((s) => {
            return <label key={s}>{s}</label>;
        });

        return (
            <div
                id="ch3"
                className="chapter"
                style={{ backgroundColor: "#1D2731", }}
            >

                <div className="chapterRow">
                    <div className="chapterCol">
                        <h1
                            className="chapter-title"
                            style={{ fontSize: "2.2rem", marginBottom: "1rem", }}
                        >
                            Rules, Context + Time
                        </h1>

                        <span className="spanYears">2014 - 2018</span>

                        <p id="ch3_p1" className="p-left">
                            After graduation I focused on the puzzle of human development.
                        By now it was clear to me that developmental "outcomes" like ADHD emerge from learning processes.</p>


                        {/* 
                        <h1 className="chapter-title" style={{ fontSize: "1.3rem", margin: "2rem 0rem 1rem 0rem" }}>The last time the environment affected your genes, did you consent?</h1>

                        <h1 className="chapter-title" style={{ fontSize: "1.3rem", margin: "2rem 0rem 1rem 0rem" }}>When was the last time your environment interacted with your genes?</h1>

                        <p id="ch3_p2" className="p-left">Modern psychological "perspectives" recognize that developmental outcomes are influenced by biological, psychological, and social factors. variables that interact in complicated ways during the lifetime of the individual (any textbook).</p>


                        <h1 className="chapter-title" style={{ fontSize: "1.3rem", margin: "2rem 0rem 1rem 0rem" }}>How, when, and where do these variables interact, exactly?</h1>

                        <p id="ch3_p3" className="p-left">
                            How does society influence biology?<br />Where do genes interact with families?<br />How do nature and nurture mediate each other?</p>

                        <p id="ch3_p4" className="p-left">
                            If one wants to observe and interfere with these interactions, where would one begin?<br />A handful of factors, somehow, give rise to seven billion unique personalities, thousands of disorders, three parenting styles (lol),  How?<br />Statistical jargon aside, to interact is to modify: something, somewhere, must undergo some kind of observable transformations.<br /><br />Whenandwheredothesetransformationsoccur?<br />How do they map on the plethora of contributing factors and developmental "outcomes"?What are sentience, agency, will? What role, if any,do they play in human life?</p>

 */}




                        <div className="chapterSkills">{Skills}</div>
                    </div>

                    <div className="chapterCol">


                        <h1 className="chapter-title" style={{ fontSize: "1.3rem", margin: "2rem 0rem 1rem 0rem" }}>Concepts, Forces</h1>

                        {/* <p className="p-left" style={{ color: "#14A76C" }}>
                            <a href="https://www.andreipopa515.com/computational-adhd" target="_blank">Disrupted neuronal dynamics and ADHD symptomatology</a>
                        </p> */}


                        <h1 className="chapter-title" style={{ fontSize: "1.3rem", margin: "2rem 0rem 1rem 0rem" }}>Emerge this, Jack</h1>


                        <p className="p-left" >
                            Punishment, negative reinforcement, and context - or <i>stimulus control</i> - became the focus of my next two research studies. Both resulted in interesting findings, some of which make challenging benchmarks for computational theories.
                        </p>


                        <p className="p-left" style={{ color: "#FF652F" }}>
                            Examples?
                        </p>


                        {/* <h1 className="chapter-title" style={{ fontSize: "1.3rem", margin: "2rem 0rem 1rem 0rem" }}>Development happens here and now</h1>



                        <h1 className="chapter-title" style={{ fontSize: "1.3rem", margin: "2rem 0rem 1rem 0rem" }}>Social evolution is caused by neuronal changes</h1>

                        <p className="p-left" style={{ fontSize: ".8rem", lineHeight: "1.3rem" }}>
                            The only causal factors that shape human society are the actions of individuals, and these actions are streams of neuronal activity. Modelling societies is to model populations of interacting nervous systems that act and interact. Now, this is a puzzle worth solving.
                        </p>

                        <h2 className="chapter-title" style={{ fontSize: "1.3rem", margin: "2rem 0rem 1rem 0rem" }}>Recreate this, Jack!</h2>

                        <p className="p-left" style={{ fontSize: ".8rem", lineHeight: "1.3rem" }} >
                            In addition to positively reinforced behavior, a complete theory of learning should account for punishment, negative reinforcement, and context (or stimulus control). That's why I focused my next two research projects on these phenomena. Both resulted in interesting findings, all of which can serve as verification criteria for computational theories of learning.
                        </p> */}



                    </div>
                </div>
            </div>
        );
    }
}

export default Chapter03;
