import React, { Component } from "react";
import parse from "html-react-parser";
import ReadMoreHook from "./ReadMoreHook";


//import CollapseHook from "./CollapseHook";
//import ContinuousEducation from "../ContinuousEducation";


class Chapter4 extends Component {
    render() {
        var skills = [
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
            "computational modelling",
            "reinforcement learning",
            "machine learning",
            "web development",
        ];

        var Skills = skills.map((s) => {
            return <label key={s}>{s}</label>;
        });

        return (
            <div id="ch4" className="chapter">
                <div className="chapterRow">
                    <div className="chapterCol">
                        <h1 className="chapter-title">
                            The shape of will and the evolution of human societies
            </h1>

                        <span className="spanYears">2019 - now</span>

                        <p id="ch4_p1" className="p-left">
                            <i>
                                Nothing exists in "society" without existing in individuals.
              </i>
                            <br />
                            <i>Nothing exists "in general" without existing in particular.</i>
                            <br />
                            <i>
                                Nothing exists at psychological level without existing at
                                neuronal level.
              </i>
                            <br />
                            <br />
                        </p>

                        <div className="chapterSkills">{Skills}</div>
                    </div>

                    <div className="chapterCol">
                        <h2 className="chapter-sub-title">
                            Development happens here and now
            </h2>

                        <ReadMoreHook
                            maxChars={300}
                            overview="The configuration of neurons that 'fire' in a given time window changes continuously, as action potentials travel from cell to cell. The succession of configurations of active neurons is the material counterpart of psychological phenomena. Everything that we experience, do, think, say - is reflected in the streams of neuronal activation states."
                        />

                        <h2 className="chapter-sub-title">
                            The shape of will, expectations, and insight
            </h2>

                        <ReadMoreHook
                            maxChars={300}
                            overview="The configuration of neurons that 'fire' in a given time window changes continuously, as action potentials travel from cell to cell. The succession of configurations of active neurons is the material counterpart of psychological phenomena. Everything that we experience, do, think, say, imagine - all is reflected in the streams of neuronal activation states."
                        />
                        <h2 className="chapter-sub-title">
                            Social evolution is caused by neuronal changes
            </h2>

                        <ReadMoreHook
                            maxChars={300}
                            overview="<i>Nothing exists in 'society' without existing in individuals</i>.<br/> <i>Nothing exists 'in general' without existing in particular</i>.<br/> <i>Nothing exists at psychological level without existing at neuronal level</i>.<br/><br/> The only causal factors that shape human society are the actions of individuals, and these actions are streams of neuronal activity. Modelling societies is to model populations of interacting nervous systems that act and interact. Now, this is a puzzle worth solving."
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Chapter4;
