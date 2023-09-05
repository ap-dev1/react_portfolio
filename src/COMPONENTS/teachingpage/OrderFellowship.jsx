//import "./teaching.sass";


// let urls_order = [
//     {
//         name: 'O.R.D.E.R.',
//         link: 'http://www.order.emory.edu/about/index.html'
//     },
//     {
//         name: 'Syllabus', link: 'http://www.order.emory.edu/documents/sex-drugs-and-vodou-spirits-fall-syllabus.pdf',
//     },
//     { name: "Google Drive", link: "gDrive" },

// ]


// let description_order = "My appreciation for mentorship was instilled in me since grad school, when I had the privilege of    holding an interdisciplinary teaching fellowship called O.R.D.E.R. (On Recent Discoveries by    Emory Researchers; 2011-2012). It entailed co-teaching an interdisciplinary course - with    fellows from physics, women studies, anthropology, and epidemiology – and guiding students in    developing research projects. The team I mentored, first-year students at the time, carried out    an ingenious study, which showed that conforming to the group (Asch, 1955) did not require the    presence of others; simply knowing their preferences sufficed to produce strong conformity    effects. My efforts and contribution were recognized with the Emory/Hughes Medical Institute    Teacher-Scholar Award (2012) and an invitation to serve on the O.R.D.E.R. 2012-13 advisory     board, which I gladly accepted. I am grateful to the fellowship coordinators, David Lynn and Leslie Taylor for their guidance and support."

// let summary_order = "As an ORDER fellow I developed two intersdisciplnary seminars with colleagues from physics, women studies, anthropology, and epidemiology. Together  – and guiding students in developing research projects. The team I mentored, first-year students at the time, carried out a study that showed that conforming to the group (Asch, 1955) did not require the presence of others; knowing their answers sufficed to produce conformity effects."





// {
//     id: 14,
//     title: "Conformity at a distance",
//     date: "05/10/2012",
//     type: "O.R.D.E.R. fellow, study coordinator",
//     role: "O.R.D.E.R. fellow",
//     keywords: [
//         "Prof. David Lynn (Biological Chemistry)",
//         "Prof. Leslie Taylor (Theatre Studies).",
//     ],
//     tags: [],

//     description: "<br/><br/>  <br/><br/>  <br/><br/>  <br/><br/> <br/><br/>",
//     img: [asch1, asch2],
//     citation: "",
//     urls: [
//         {
//             name: "O.R.D.E.R.",
//             link: "http://www.order.emory.edu/about/index.html",
//         },
//         { name: "Google Drive", link: "gDrive" },
//         {
//             name: "Syllabus",
//             link: "http://www.order.emory.edu/documents/sex-drugs-and-vodou-spirits-fall-syllabus.pdf",
//         },
//     ],

//     abstract:
//         "My appreciation for mentorship was instilled in me since grad school, when I had the privilege of    holding an interdisciplinary teaching fellowship called O.R.D.E.R. (On Recent Discoveries by    Emory Researchers; 2011-2012). It entailed co-teaching an interdisciplinary course - with    fellows from physics, women studies, anthropology, and epidemiology – and guiding students in    developing research projects. The team I mentored, first-year students at the time, carried out    an ingenious study, which showed that conforming to the group (Asch, 1955) did not require the    presence of others; simply knowing their preferences sufficed to produce strong conformity    effects. My efforts and contribution were recognized with the Emory/Hughes Medical Institute    Teacher-Scholar Award (2012) and an invitation to serve on the O.R.D.E.R. 2012-13 advisory     board, which I gladly accepted. I am grateful to the fellowship coordinators, David Lynn and Leslie Taylor for their guidance and support.",
// },




import React, { Component } from "react";
import CollapseHook from "../timeline_files/CollapseHook"

import parse from "html-react-parser";


export default function OrderFellowship() {


        return (


            <>
                <div
                    className='sub-section-header'
                    style={{
                        marginTop: "30px",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                        border: "1px dotted teal",

                        paddingTop: "10px",


                    }}
                >

                    <h2 className="years"
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "11px",
                            marginBottom: "5px",
                            letterSpacing: 1,
                        }}
                    >
                        On Recent Discoveries by Emory Researchers
                    </h2>


                    <h1 className="title"
                        style={{
                            marginBottom: "0px",
                            paddingBottom: "0px",
                            //fontSize: "10px",
                            fontFamily: "Montserrat",
                            color: "#ff9900",
                        }}
                    >

                        Complexity & Emergence:

                        {/* <br/>
                        from Automata to Behavior  */}

                    </h1>
                    <h1 className="title"
                        style={{
                            fontFamily: "Montserrat",
                            margin: "0px",
                            padding: "2px",
                            color: "#ff9900",

                        }}
                    >
                        from Automata to Behavior
                    </h1>

                    <h2 className="years"
                        style={{
                            margin: "15px auto 5px auto",
                        }}
                    >
                        - interdisciplinary seminars -
                    </h2>


                    <h2 className="years"
                        style={{
                            margin: "0px auto 15px auto",
                        }}
                    >
                        2011 - 2012
                    </h2>



                    <CollapseHook
                        collapsedTitle={'click to expand'}

                        collapsedText={

                            <div
                                className='sub-section-body'
                                style={{
                                    textAlign: "left",
                                    color: "#aaa",
                                    fontSize: "11px",
                                    fontFamily: "Roboto",
                                    wordWrap: "break-word",
                                    //padding: "2px",
                                    marginTop: "20px",
                                    //border: "1px dotted tomato",
                                    paddingTop: "0px",

                                }}
                            >






                                <p
                                    style={{
                                        maxWidth: "350px",
                                        wordWrap: "break-word",
                                        margin: "0px",
                                        fontSize: "11px",
                                        lineHeight: "15px",
                                        padding: "0px",
                                        marginBottom: "5px",
                                        fontFamily: "Roboto",
                                        color: "#aaa",
                                    }}
                                >
                                    When I wrote this, on 03/01/2022, the links were broken, but I found these snapshots from July 2021. Thank you,
                                    <a href="http://web.archive.org/"> Wayback Machine</a> !
                                </p>


                                <a href='http://web.archive.org/web/20210731031935/www.order.emory.edu/about/index.html'
                                >
                                    <p
                                        style={{
                                            maxWidth: "300px",
                                            wordWrap: "break-word",
                                            margin: "0px",
                                            fontSize: "10px",
                                            margin: "auto",
                                            paddingBottom: "5px",
                                        }}
                                    >
                                        http://web.archive.org/web/20210731031935/www.order.emory.edu/about/index.html
                                    </p>

                                </a>

                                <a href='http://web.archive.org/web/20210731053234/http://order.emory.edu/people/past-teacher-scholars.html'
                                >
                                    <p
                                        style={{

                                            maxWidth: "300px",
                                            wordWrap: "break-word",
                                            margin: "0px",
                                            padding: "0px",
                                            margin: "auto",
                                        }}
                                    >
                                        http://web.archive.org/web/20210731053234/http://order.emory.edu/people/past-teacher-scholars.html
                                    </p>
                                </a>



                                <p
                                    style={{
                                        padding: "0px",
                                        margin: "0px",
                                        marginTop: "10px",

                                        marginBottom: "5px",
                                        fontWeight: 600,
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Fellowship coordinators:
                                </p>

                                <p
                                    style={{
                                        marginBottom: "0px",
                                        paddingBottom: "0px",
                                    }}
                                >
                                    Prof. David Lynn (Biological Chemistry)<br />
                                    Prof. Leslie Taylor (Theatre Studies)
                                </p>


                            </div>
                        }
                    />
                </div>


            </>




        )
}

