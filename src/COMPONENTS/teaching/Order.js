
import React, { Component } from "react";
import parse from "html-react-parser";


export default function Order() {


    return (


        <>

            <div id="order-wrapper">
                <p className="description">
                    Interdisciplinary seminars, part of the ORDER fellowship. I taught about the relevance of cellular automata to human behavior.

                    {/* My mentees carried out a study on conformity (Asch, 1955) that showed that the presence of others was not necessary: simply knowing their preferences produced strong conformity effects. */}

                    {/* It entailed co-teaching a course with coleagues from physics, women studies, anthropology, and epidemiology and guiding students in developing research projects. 
                             */}

                </p>

                <p className="description">
                    Coordinated by Professors David Lynn (Biological Chemistry) and Leslie Taylor (Theatre Studies).

                    The links were removed but here are some snapshots from 2021:

                    {/* thanks to the
                            <a href="http://web.archive.org/"> Wayback Machine</a>: */}

                </p>

                <li className="links">
                    <ul>
                        <a href='http://web.archive.org/web/20210731031935/www.order.emory.edu/about/index.html'
                        >
                            http://web.archive.org/web/20210731031935/www.order.emory.edu/about/index.html

                        </a>
                    </ul>
                    <ul>
                        <a href='http://web.archive.org/web/20210731053234/http://order.emory.edu/people/past-teacher-scholars.html'
                        >
                            http://web.archive.org/web/20210731053234/http://order.emory.edu/people/past-teacher-scholars.html
                        </a>
                    </ul>
                </li>

                <div className="links grey">


                </div>


            </div>


        </>




    )
}

