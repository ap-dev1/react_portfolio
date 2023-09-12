import "./learning-diagram-small.sass";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import * as d3 from "d3";


export default function LearningDiagramSmall() {


    return (

        <div className='learning-diagram-small' key={nanoid()} >


            <div className="stimuli">
                <ul>
                    <li><b>Stimuli</b></li>

                    <li>reinforcers</li>
                    <li>punishers</li>
                    <li>context</li>
                </ul>
            </div>



            <div className="behaviors">
                <ul >
                    <li><b>Basic tendencies</b></li>

                    <li>approach</li>
                    <li>escape</li>
                    <li>avoidance</li>
                </ul>
            </div>


            <div className="phenomena">
                <ul >

                    <li><b>Behavioral phenomena</b></li>
                    <li>behavior allocation, matching</li>
                    <li>shaping, behavior acquision</li>
                    <li>behavior suppression</li>
                    <li>extinction and extinction bursts</li>
                    <li>habituation, . . . </li>

                </ul>
            </div>




        </div>

    )
}


