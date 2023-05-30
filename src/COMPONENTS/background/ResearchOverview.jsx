
import { nanoid } from "nanoid"
import "./_research-overview.sass";
import "./span-scroll.sass";

export default function ResearchOverview() {

    return (

        <div id='research-overview' key={nanoid()} style={{ flexDirection: "column", marginTop: "200px" }}>

            <div
                style={{
                    marginTop: "100px",
                    justifyContent: "center",
                }}>
                <h1
                    style={{ textAlign: "center", fontSize: "2.5rem" }}
                    key={nanoid()}
                > RESEARCH </h1>

                <h2
                    style={{ textAlign: "center", fontSize: ".8rem", fontWeight: "400" }}
                    key={nanoid()}
                > 2007 - present</h2>
            </div>


            <div className='content' key={nanoid()} >


                <div className='intro1' key={nanoid()} >
                    <p key={nanoid()} style={{ fontSize: "13px", maxWidth: "440px" }} >
                        My journey began in Behavior Analysis, with the problem of <b>learning</b>. All phenomena examined in the lab emerge from combinations of reinforcers, punishers, and contextual cues, over time. <b>I study how this happens.</b>
                    </p>

                    <p key={nanoid()} style={{ fontSize: "13px", maxWidth: "440px" }}>
                        <b>My main approach is computational</b>. Essentially, I program virtual agents to act by a set of rules and I observe their behavior. If it conforms with what we already know, the learning framework embodied by those rules is worth pursuing.

                        {/* <span
                            className="span-scroll"
                            style={{
                                color: "orange",
                            }}
                            onClick={(() => document.getElementById('AgreementMatching').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            }))}
                        >
                            {' Agreement with mathematical models, '}
                        </span>

                        <span
                            className="span-scroll"
                            style={{
                                color: "orange",
                            }}
                            onClick={(() => document.getElementById('divHammingOgive').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            }))}
                        >
                            {' Hamming Distances, '}
                        </span>

                        <span
                            className="span-scroll"
                            style={{
                                color: "orange",
                            }}
                            onClick={(() => document.getElementById('MutationADHD').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            }))}
                        >
                            {' Mutation rate and impulsivity, '}
                        </span>

                        <span
                            className="span-scroll"
                            style={{
                                color: "orange",
                            }}
                            onClick={(() => document.getElementById('Dissertation').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            }))}
                        >
                            {' or the emergence of ADHD. '}
                        </span> */}
                    </p>

                    <p key={nanoid()} style={{ fontSize: "13px", maxWidth: "440px" }}>
                        <b>Live research</b>. One way to create new knowledge is to simulate environmental scenarios that have not been studied in humans, then create a human version of the experimental scenario and see if humans behave as predicted by the simulation (Popa, 2013; scroll to

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


                        {'). '}
                    </p>

                    <p key={nanoid()} style={{ fontSize: "13px", maxWidth: "440px" }}>
                        Another way is to learn about humans first, to explore new phenomena, a path I took in two research studies, at Agnes Scott (

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

                        ) and at Emory, Oxford College (



                        <span
                            className="span-scroll"
                            style={{
                                color: "orange",
                            }}
                            onClick={(() => document.getElementById('Triangles').scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                //inline: "nearest" //start, center, end, or nearest. Defaults to nearest;
                            }))}
                        >
                            {' Triangles! '}
                        </span>



                        ).  New findings become new benchmarks. Computational frameworks must accomodate the experimental contexts and the results must match.
                    </p>

                </div>




            </div>


        </div >

    )
}

