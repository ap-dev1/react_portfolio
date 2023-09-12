
import { nanoid } from "nanoid"
import "./_research-overview.sass";
import "./span-scroll.sass";
import LearningDiagramSmall from "./LearningDiagramSmall";

export default function ResearchOverview() {

    return (

        <div id='research-overview' key={nanoid()}
            style={{
                flexDirection: "column",
            }}
        >

            <div
                style={{
                    justifyContent: "center",
                    marginTop: "120px"

                }}>
                <h1
                    style={{ textAlign: "center", fontSize: "2.5rem" }}
                    key={nanoid()}
                > RESEARCH OVERVIEW</h1>

                <h2
                    style={{ textAlign: "center", fontSize: ".9rem", fontWeight: "400", }}
                    key={nanoid()}
                > 2007 - present</h2>
            </div>


            <div

                className='content'

                key={nanoid()}
                style={{
                    marginTop: "10px",
                    // margin: "auto",

                }}
            >


                <div className='intro1' key={nanoid()} >
                    <p key={nanoid()} style={{ fontSize: "13px", maxWidth: "440px" }}

                    >
                        My journey began in Behavior Analysis, with the problem of <b>learning</b>. All phenomena examined in the lab emerge from combinations of reinforcers, punishers, and contextual cues, over time and trials.
                        <br />
                        <br />

                        {/* <b>I study how this happens.</b> */}

                        <b>I study the principles that allow past experience to alter future behavior, <i>i.e.</i> to learn, or adapt</b>.

                    </p>


                </div>



                <LearningDiagramSmall />


                {/* <p
                    style={{
                        width: "350px",
                        margin: "1rem auto",
                        fontSize: "13px"
                    }}
                >Essentially, I program virtual agents animated by a dynamic theory of learning, like the one instantiated here (Popa, 2019).
                </p>

                <p
                    style={{
                        width: "350px",
                        margin: "1rem auto",
                        fontSize: "13px"
                    }}
                >I compare the emergent behavior to live data using experimental interfaces like the one bellow (Popa, 2013; Popa et al, 2016; Popa, 2018).
                </p> */}





                {/* <p
                    key={nanoid()}
                    style={{
                        fontSize: "13px",
                        maxWidth: "350px",
                        margin: "auto",
                        marginTop: "1rem"
                    }}
                >
                    I complemented the computational approach with human research, for two reasons: to verify computational predictions (Popa, 2013; scroll to

                    <span
                        className="span-scroll"
                        style={{
                            color: "orange",
                        }}
                        onClick={(() => document.getElementById('FastMatching').scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        }))}
                    >
                        {' Fast Matching'}
                    </span>

                    {'), '}

                    and to create challenging new benchmarks (
                    <span
                        className="span-scroll"
                        style={{
                            color: "orange",
                        }}
                        onClick={(() => document.getElementById('Sparc').scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        }))}
                    >
                        {' SpARC 2016 '}
                    </span>


                    <span
                        className="span-scroll"
                        style={{
                            color: "orange",
                        }}
                        onClick={(() => document.getElementById('Triangles').scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        }))}
                    >
                        {' Triangles! '}
                    </span>
                </p> */}






            </div>




        </div >

    )
}

