import React, { Component } from "react";
import "./teaching.sass";

import parse from "html-react-parser";


// {
//     id: 14,
//         title: "Conformity at a distance",
//             date: "05/10/2012",
//                 type: "O.R.D.E.R. fellow, study coordinator",
//                     role: "O.R.D.E.R. fellow",
//                         keywords: [
//                             "Prof. David Lynn (Biological Chemistry)",
//                             "Prof. Leslie Taylor (Theatre Studies).",
//                         ],
//                             tags: [],

//                                 description: "<br/><br/>  <br/><br/>  <br/><br/>  <br/><br/> <br/><br/>",
//                                     img: [asch1, asch2],
//                                         citation: "",
//                                             urls: [
//                                                 {
//                                                     name: "O.R.D.E.R.",
//                                                     link: "http://www.order.emory.edu/about/index.html",
//                                                 },
//                                                 { name: "Google Drive", link: "gDrive" },
//                                                 {
//                                                     name: "Syllabus",
//                                                     link: "http://www.order.emory.edu/documents/sex-drugs-and-vodou-spirits-fall-syllabus.pdf",
//                                                 },
//                                             ],

//                                                 abstract:
//     "My appreciation for mentorship was instilled in me since grad school, when I had the privilege of    holding an interdisciplinary teaching fellowship called O.R.D.E.R. (On Recent Discoveries by    Emory Researchers; 2011-2012). It entailed co-teaching an interdisciplinary course - with    fellows from physics, women studies, anthropology, and epidemiology – and guiding students in    developing research projects. The team I mentored, first-year students at the time, carried out    an ingenious study, which showed that conforming to the group (Asch, 1955) did not require the    presence of others; simply knowing their preferences sufficed to produce strong conformity    effects. My efforts and contribution were recognized with the Emory/Hughes Medical Institute    Teacher-Scholar Award (2012) and an invitation to serve on the O.R.D.E.R. 2012-13 advisory     board, which I gladly accepted. I am grateful to the fellowship coordinators, David Lynn and Leslie Taylor for their guidance and support.",
//     },



class OrderFellowship extends Component {

    render() {


        return (


            <>

                <div
                    id="divOrder"
                    style={{
                        backgroundColor: "#68d668",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >

                    <div className="divIntro">
                        <h1 className="title">{parse("On Recent Discoveries by Emory Researchers")}</h1>
                        <span className="subtitle">Emory University</span>
                        <span className="subtitle">2011-2012</span>

                        <p
                            style={
                                {
                                    textAlign: "left",
                                    fontSize: ".7rem",
                                    width: "40%",
                                }
                            }
                        >
                            As an ORDER fellow () I developed two intersdisciplnary seminars with colleagues from physics, women studies, anthropology, and epidemiology. Together  – and guiding students
                            in developing research projects. The team I mentored, first-year
                            students at the time, carried out an ingenious study, which
                            showed that conforming to the group (Asch, 1955) did not require
                            the existence of others; knowing their answers
                            sufficed to produce strong conformity effects.
                            </p>
                    </div>


                </div>
            </>




        )
    }
}

export default OrderFellowship;
