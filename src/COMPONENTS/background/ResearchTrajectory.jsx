// import './chapters.sass'

import { nanoid } from "nanoid"
import data from '../../DATA/myData'
import parse from "html-react-parser"


export default function ResearchTrajectory() {


    // const phenList = ['behavior acquisition, extinction,', 'extinction bursts, spontaneous recovery,', 'escape, avoidance, behavior suppression,', 'conditioned reinforcement, stimulus control, ...']

    // behavior acquisition, extinction,, extinction bursts, spontaneous recovery,, escape, avoidance, behavior suppression,, conditioned reinforcement, stimulus control, ...

    // const phenList = ['behavior acquisition and extinction,', 'escape and avoidance,', 'conditioned reinforcement and stimulus control, ...']


    return (

        <div
            id='researchTrajectory'
            key={nanoid()}
            style={{
                backgroundColor: '#274235',  //  green timeline
                backgroundColor: '#FF6347',  //  tomato

                backgroundColor: '#FF6347',  //  tomato
                backgroundColor: '#FF6347',  //  tomato
                backgroundColor: '#F0FFFF',  //  azure
                //backgroundColor: '#FAFAD2',  //  tomato
                backgroundColor: '#ccc',



                width: '100%',
                minHeight: '100vh'

            }}
        >




            {/* <div className="carved-text" key={nanoid()}>

                <span id="span1" key={nanoid()}>RESEARCH</span>


                <span id="span2" >  2007 - ____ </span>

                <span className="span_shaddow" key={nanoid()}>I study computational theories of behavior dynamics. That's where I started, anyway.</span>

            </div> */}



            <div className="div-row" key={nanoid()}  >



                <div className="col1" key={nanoid()} >

                    <div
                        className='txt-inset-dark'
                        key={nanoid()}
                    >

                        {/* <p className="paragraph-story" key={nanoid()} >
                            Every moment is an opportunity to <i>stop</i> and <i>do something else</i>. A fork in the road, if you will.
                        </p>


                        <p className="paragraph-story" key={nanoid()} >
                            The probability to "go" one way or another depends on experience.
                        </p> */}


                        {/* <p className="paragraph-story" key={nanoid()} >
                            The probability to choose a course of action depends on how it went in the past and the context in which it happened.
                        </p> */}

                        <p
                            className="paragraph-story"
                            key={nanoid()}
                            style={{
                                fontSize: '14px',
                                fontWeight: 800,
                                width: "450px",
                            }}
                        >
                            <b>We know </b> that all behavioral phenomena examined in the lab emerge - <span>trial</span> after <span>trial</span> after <span>trial</span> - from some combinations of reinforcers, punishers, and contextual cues.

                            <br /><br />
                            What we don't know is how it happens.
                        </p>

                        <p
                            className="paragraph-story"
                            key={nanoid()}
                            style={{
                                fontSize: '16px',
                                fontWeight: 900,
                                //fontFamily: 'Courier New',
                                // fontFamily: 'Architects Daughter, cursive',
                                fontFamily: 'Roboto Mono, monospace',

                                width: "400px",
                                fontWeight: "900px",
                                margin: "20px auto",
                                fontVariantCaps: 'all-petite-caps',

                            }}
                        >
                            <ol>
                                <li>behavior acquisition & extinction</li>
                                <li>undermatching</li>
                                <li>escape and avoidance</li>
                                <li>conditioned reinforcement</li>
                                <li>stimulus control</li>
                                <li>...</li>

                            </ol>
                        </p>





                        {/* <p
                            className="paragraph-story"
                            key={nanoid()}
                            style={{
                                fontSize: '14px',
                                fontWeight: 900,
                                width: "450px",


                            }}
                        >
                            What we don't know is how it happens.
                        </p> */}


                    </div>





                    {/* <div className="txt-inset-green" key={nanoid()}
                        style={{
                            margin: "20px auto 20px auto",
                            padding: "20px",
                            fontSize: "16px",
                            border: "1px solid #777",
                        }}>


                        <p
                            className="paragraph-story"
                            key={nanoid()}
                            style={{
                                width: "400px",
                                margin: "auto",
                            }}
                            key={nanoid()}

                        >
                            A good theory would recreate known phenomena, fill in gaps, reconcile inconsistencies, and connect the dynamics of behavior with brain function, cognition, and development.

                        </p>
                    </div> */}

                </div>





                {/* The probability to choose one course of action over another varies with experience.

                    Choices produce preference patterns that can be analyzed on many dimensions.

                    Learning theories propose causal mechanisms for how this happen.
                    
                    For the past fifteen years I verifyed, tested and built  computational theories of learning, or behavior dynamics.

                    //------------------------------------------

                    A complete theory of learning should recreate what we know, fill in the gaps, reconcile contradictory findings, and connect this body of knowledge with those from other fields (Popa, 2019)
                    //------------------------------------------

                    
                    */}


                {/* 
                {
                    data.researchText.map((item) => {
                        return (
                            <p
                                className="p-left"
                                style={{
                                    border: "1px solid #fff",
                                    padding: "0px",
                                    margin: "100px auto 10px auto",
                                    width: "550px",
                                    fontSize: "14px",
                                }}
                            >
                                {
                                    parse(item)
                                }

                            </p>
                        )
                    })
                }

 */}

            </div>






        </div>

    )
}