
import React, { Component } from "react";
import * as d3 from "d3";
import _ from "lodash";

import './_div-live-matching.sass';

import { setMatchingState } from "./matchingState";
import * as demoEtbd from "../etbd/demoEtbd"
import CumulativeRecordV2 from "./CumulativeRecordV2";
import Agent50 from "../etbd/Agent50";
import DivPoints from "./DivPoints";

import PopOverV2 from "../abc/PopOverV2";

export default class MatchingDemo extends Component {

    constructor() {
        super();
        let myState = setMatchingState();
        this.state = myState;
    };


    beginSession = () => {

        let startEvent = {
            timestamp: performance.now(),
            coordinates: {},
            eventIndex: 0,
            x: 0,
            y: 0,
            class: "start",
            co: false,
            consequence: false,
            magnitude: 0,
        };

        this.setState({
            timeStart: performance.now(),
            events: [startEvent],
            agentType: 'human',
            liveSession: true
        });


        let overallInterval = d3.interval((te) => {
            this.setState({ progress: te })
            if (te > this.state.timeLimit * 1000) {

                overallInterval.stop()

                this.setState({
                    liveSession: false
                })
            }
        }, 1000);


        let int1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1) * 1000);
        let int2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2) * 1000);

        // d3.timeout((elapsed1) => {
        //     this.setState({ r1ready: 1 });
        // }, int1);

        d3.timeout((elapsed2) => {
            this.setState({ r2ready: 1 });
        }, int2);

    };




    // clickCoords = (event) => {
    //     let t = performance.now()
    //     let x = parseInt(d3.pointer(event)[0])
    //     let y = parseInt(d3.pointer(event)[1])
    //     let cls = ''
    //     let co = false
    //     let consequence = false
    //     let magnitude = 0



    //     //////////////////////////////////////////////////////////     CLASS  ONE

    //     if (d3.polygonContains(this.state.class1, [x, y])) {
    //         cls = 'class1';

    //         if (_.last(this.state.events).class !== "class2") {
    //             co = true
    //         }

    //         // CHANGEOVER DELAY:
    //         if (co === true) {
    //             if (this.state.cod1_duration > 0) {
    //                 this.setState({
    //                     cod1_status: "on",
    //                     codColor: this.state.colors.color1
    //                 })
    //                 d3.timeout((elapsedCOD1) => {
    //                     this.setState({
    //                         cod1_status: "off",
    //                         codColor: "#282c34"
    //                     })
    //                 }, this.state.cod1_duration)
    //             }
    //         }

    //         // REINFORCEMENT:
    //         if (this.state.r1ready !== 0 && this.state.cod1_status === 'off') {
    //             consequence = true

    //             this.setState({ r1ready: 0, consequence: true, magnitude: 1 });

    //             let int1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1) * 1000);

    //             d3.timeout((elapsed1) => {
    //                 this.setState({ r1ready: 1 });
    //             }, int1);
    //         }
    //     }



    //     if (d3.polygonContains(this.state.class2, [x, y])) {
    //         cls = 'class2'

    //         if (_.last(this.state.events).class !== "class1") {
    //             co = true
    //         }

    //         // CHANGEOVER DELAY:
    //         if (co === true) {
    //             if (this.state.cod2_duration > 0) {
    //                 this.setState({
    //                     cod2_status: "on",
    //                     codColor: this.state.colors.color2
    //                 })
    //                 d3.timeout((elapsedCOD2) => {
    //                     this.setState({
    //                         cod2_status: "off",
    //                         codColor: "#282c34"
    //                     })
    //                 }, this.state.cod2_duration)
    //             }
    //         }

    //         // REINFORCEMENT:
    //         if (this.state.r2ready !== 0 && this.state.cod2_status === 'off') {
    //             consequence = true

    //             this.setState({ r2ready: 0, consequence: true, magnitude: 1 });

    //             let int2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2) * 1000);

    //             d3.timeout((elapsed2) => {
    //                 this.setState({ r2ready: 1 });
    //             }, int2);
    //         }
    //     }



    //     let thisEvent = {
    //         timestamp: t,
    //         coordinates: { x: x, y: y },
    //         class: cls,
    //         consequence: consequence,
    //         magnitude: this.state.magnitude1 ? this.state.magnitude1 : 1,
    //     }

    //     this.setState({
    //         x: x,
    //         y: y,
    //         class: cls,
    //         consequence: consequence,
    //         magnitude: this.state.magnitude1 ? this.state.magnitude1 : 1,
    //     })

    //     this.setState({ events: [...this.state.events, thisEvent] })
    // }


    logResponse = (event) => {

        // console.log("muie lu mata")
        // console.log(event.target.id)

        let x = parseInt(d3.pointer(event)[0])
        let y = parseInt(d3.pointer(event)[1])
        // this.setState({ cls: event.target.id })
        // console.log(x, y)

        // console.log(event.target.id)

    }


    evaluateResponse = (event) => {
        // event.preventDefault()
        // console.log(event)
        let t = performance.now()
        let cls = event.target.id

        // console.log(" event.target.id: ", event.target.id)
        // console.log("event.currentTarget.id: ", event.currentTarget.id)


        let x = parseInt(d3.pointer(event)[0])
        let y = parseInt(d3.pointer(event)[1])
        let co = false
        let consequence = false
        let magnitude = 0



        ////////////////////////////////////////     CLASS  ONE

        if (cls === 'class1') {

            if (_.last(this.state.events).class !== "class2") {
                co = true
            }

            // CHANGEOVER DELAY:
            // if (co === true) {
            //     if (this.state.cod1_duration > 0) {
            //         this.setState({
            //             cod1_status: "on",
            //             codColor: this.state.colors.color1
            //         })
            //         d3.timeout((elapsedCOD1) => {
            //             this.setState({
            //                 cod1_status: "off",
            //                 codColor: "#282c34"
            //             })
            //         }, this.state.cod1_duration)
            //     }
            // }

            // REINFORCEMENT:
            if (this.state.r1ready !== 0) {
                consequence = true
                this.setState({
                    r1ready: 0,
                    consequence: true,
                    magnitude: 1
                })
                let int1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1) * 1000)
                d3.timeout((elapsed1) => {
                    this.setState({ r1ready: 1 });
                }, int1);
            }
        }



        if (cls === 'class2') {

            if (_.last(this.state.events).class !== "class1") {
                co = true
            }

            // REINFORCEMENT:
            if (this.state.r2ready !== 0) {
                consequence = true

                this.setState({
                    r2ready: 0,
                    consequence: true,
                    magnitude: 1
                });

                let int2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2) * 1000);

                d3.timeout((elapsed2) => {
                    this.setState({ r2ready: 1 });
                }, int2);
            }
        }



        let thisEvent = {
            timestamp: t,
            coordinates: { x: x, y: y },
            class: cls,
            consequence: consequence,
            magnitude: this.state.magnitude1 ? this.state.magnitude1 : 1,
            delta_t: t - this.state.timeStart,
            irt: t - _.last(this.state.events).timestamp
        }

        this.setState({
            x: x,
            y: y,
            class: cls,
            consequence: consequence,
            magnitude: this.state.magnitude1 ? this.state.magnitude1 : 1,
        })

        this.setState({ events: [...this.state.events, thisEvent] })
    }






    ////////////////////////////////////////////

    runSimulation = () => {

        this.setState({
            agentType: 'etbd',
            player1: true
        })

        d3.selectAll('.introTexts').remove()

        let etbdInt1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1));
        let etbdInt2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2));

        this.setState({ r1etbd: etbdInt1, r2etbd: etbdInt2 });


        for (let g = 0; g < 1000; g++) {

            let evz = this.state.etbdEvents
            let thisGeneration = evz[evz.length - 1]

            let population = thisGeneration.population
            let ems = demoEtbd.emitBehavior(thisGeneration.population)
            let cls = demoEtbd.emissionClass(ems)
            let rnf = false

            if (cls === 'b1' && g > this.state.r1etbd) {
                rnf = true
                let etbdInt1 = parseInt(d3.randomExponential(1, 5)(this.state.RI1));
                this.setState({ r1etbd: g + etbdInt1 })
            }

            if (cls === 'b2' && g > this.state.r2etbd) {
                rnf = true
                let etbdInt2 = parseInt(d3.randomExponential(1, 5)(this.state.RI2));
                this.setState({ r2etbd: g + etbdInt2 })
            }

            this.setState({
                population: population,
                ems: ems,
                cls: cls,
                rnf: rnf
            })


            thisGeneration.g = g
            thisGeneration.eventIndex = g
            thisGeneration.ems = ems
            thisGeneration.cls = cls
            thisGeneration.rnf = rnf


            // ----------------  CREATE NEW POPULATION:  --------------

            let parentalDiads = []
            let children = []

            // get n pairs of unique parents: 

            if (rnf === true) {
                for (let j = 0; j < thisGeneration.population.length; j++) {
                    let parents = demoEtbd.twoFitParents(thisGeneration.population, cls, ems)
                    parentalDiads.push(parents)
                }
            } else {
                for (let j = 0; j < thisGeneration.population.length; j++) {
                    let parents = demoEtbd.twoRandomParents(thisGeneration.population)
                    parentalDiads.push(parents)
                }
            }


            // recombine their genotypes: 
            parentalDiads.forEach((pair) => {
                let child = demoEtbd.crossTwoStrings(pair)
                children.push(child)
            })


            // mutate some genotypes:
            let newChildren = []

            children.forEach((child) => {
                let mutant = demoEtbd.undergoesMutation()

                if (mutant === true) {
                    let newChild = demoEtbd.flipRandomBit(child)
                    newChildren.push(newChild)
                } else {
                    newChildren.push(child)
                }
            })

            //  =============   A new population has been created  ===========

            let irt = 0
            let co = false

            if (this.state.etbdEvents.length > 1) {
                irt = g - this.state.etbdEvents[this.state.etbdEvents.length - 1].g

                if (cls !== this.state.etbdEvents[this.state.etbdEvents.length - 1].cls) {
                    co = true
                }
            }

            thisGeneration.co = co
            thisGeneration.irt = irt

            evz[evz.length - 1] = thisGeneration
            evz.push({
                population: newChildren,
                g: null,
                eventIndex: null,
                ems: null,
                cls: "",
                rnf: false,
                co: false,
                irt: null
            })

            this.setState({
                etbdEvents: evz
            })
        }
    };



















    //  RESET:  ---------------------------------------------------          RESET

    resetDemo = () => {

        // RESET ALL TIMERS: 


        // CLEAR CUMULATIVE RECORD:
        let svgRecord = d3.select("#svgRecord");
        svgRecord.selectAll(".dataLine").remove();
        svgRecord.selectAll(".dataCircle").remove();

        // RESET STATE: 
        let myState = setMatchingState();
        this.setState(myState)
    };



    resetEtbd = () => {

        this.setState({ player1: false })
        let population = demoEtbd.createGenZero()
        this.setState({
            // population: population,
            etbdEvents: [{
                g: 0,
                eventIndex: 0,
                population: population,
                ems: null,
                cls: "",
                rnf: false,
                co: false,
                irt: 0
            }],
        })
    };




    componentDidMount() {

        let population = demoEtbd.createGenZero()
        this.setState({
            // population: population,
            etbdEvents: [{
                g: 0,
                eventIndex: 0,
                population: population,
                ems: null,
                cls: "",
                rnf: false,

                co: false,
                irt: 0
            }],
        })


    }


    render() {


        return (


            <div className='demo-container'>

                {/* <h1>learned behavior in mice, mehn, and machines</h1> */}


                <div className='row' >

                    <div className='left'>

                        <PopOverV2
                            title={'Cumulative records'}
                            description={'show the stream of events that occur in a Skinner box during an experiment.'}
                            link={'https://abatechnologies.com/blog/when-in-doubt-make-a-cumulative-record'}
                        />
                        <CumulativeRecordV2
                            agentType={this.state.agentType}
                            events={this.state.events}
                            etbdEvents={this.state.etbdEvents}
                            timeLimit={this.state.timeLimit}
                            recordHeight={this.state.recordHeight}
                            color1={this.state.colors.color1}
                            color2={this.state.colors.color2}
                        />






                        <div className='div-live-matching'>


                            <PopOverV2
                                title={'Skinner boxes'}
                                description={'are used to explore the effects of experience on the probability to engage in an activity.'
                                }
                                link={'https://behavioralscientist.org/21st-century-skinner-box/'}
                            />


                            <DivPoints
                                consequence={this.state.consequence}
                            />

                            <div className='classes'>
                                <button
                                    id='class1'
                                    className='btn-class1 lever-gradient'
                                    // key={nanoid()}
                                    onClick={(this.state.liveSession === true && this.state.cod1_status === 'off') ? this.evaluateResponse : this.logResponse}
                                    style={{
                                        // borderColor: this.state.liveSession === true ? '#28f4bd' : '#1d2731',
                                        color: this.state.liveSession === true ? '#1d2731' : this.state.colors.color1
                                    }}
                                >
                                    This
                                </button>

                                <button
                                    id='class2'
                                    className='btn-class2 lever-gradient'
                                    // key={nanoid()}
                                    onClick={(this.state.liveSession === true && this.state.cod2_status === 'off') ? this.evaluateResponse : this.logResponse}
                                    style={{
                                        // borderColor: this.state.liveSession === true ? '#28f4bd' : '#1d2731',
                                        color: this.state.liveSession === true ? '#1d2731' : this.state.colors.color2
                                    }}
                                >
                                    That
                                </button>
                            </div>


                            <p className='p-directions'
                                style={{
                                    // borderColor: this.state.liveSession === true ? '#28f4bd' : '#1d2731',

                                    color: this.state.liveSession === true ? '#1d2731' : '#aaa'
                                }}
                            >
                                Doing
                                <span> this </span>
                                or
                                <span> that </span>
                                may result in points.<br />
                                Go ahead, learn something.
                            </p>

                        </div>





                        <div className='box-controls'>
                            <button
                                id="btnStartMatching"
                                onClick={this.beginSession}
                                className='btn-start'
                            >
                                Start
                            </button>

                            <button
                                id="btnResetMatching"
                                onClick={this.resetDemo}
                                className='btn-reset'
                            >
                                reset
                            </button>
                        </div>






                    </div>





                    <div className='right'>


                        {/* <p
                            style={{
                                width: "350px",
                                margin: "auto auto 2rem auto",
                                margin: "auto",
                                color: "#999",
                                fontSize: ".6rem",
                                fontWeight: 700,

                            }}
                        >
                            The computational theory is essentially the same as the one I worked with in the past (McDowell, 2004; Popa. 2013; Popa & McDowell, 2016), except for one subtle change to the selection rule (Popa, 2018).

                            <br />

                            The live procedure is similar to the one I developed for my disertation project (in VB.Net; Popa, 2013).

                            <br /><br />

                            Both were recreated from scratch using React and D3.
                            <a
                                href='https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en'
                            >
                                https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en
                            </a>
                        </p> */}



                        <div className='sub-section'>


                            <h2>Computational representation</h2>

                            <p >
                                In ETBD, <span> behaviors </span> are represented by a range of integers; target <span> classes </span>,
                                by custom sub-ranges; and <span> agents </span>, by populations of integers that evolve according to Darwinian principles.
                            </p>
                        </div>


                        {/* <div>
    {this.state.population ? this.state.population.toString() : "this.state.population"}
</div> */}


                        {/* <PopOverV2
                            title={'Skinner boxes'}
                            description={'are used to explore the effects of experience on the probability to engage in an activity.'
                            }
                            link={'https://behavioralscientist.org/21st-century-skinner-box/'}
                        /> */}

                        <div className='sub-section'
                            // key={nanoid()}
                            style={{
                                textAlign: "center",
                                // border: "5px solid red"
                            }}
                        >




                            {/* <PlayerRangeBasicV1
                                // agentType={this.state.agentType}
                                player1={this.state.player1}
                                resetplayer1={this.state.resetplayer1}
                                // vvv={(this.state.etbdEvents && this.state.etbdEvents.length > 0) ? this.state.etbdEvents : null}
                                vvv={this.state.etbdEvents}
                                runSimulation={this.runSimulation}
                                resetEtbd={this.resetEtbd}
                            /> */}

                            <Agent50
                                agentType={this.state.agentType}

                                player1={this.state.player1}
                                resetplayer1={this.state.resetplayer1}
                                vvv={this.state.etbdEvents}
                                runSimulation={this.runSimulation}
                                resetEtbd={this.resetEtbd}
                                recordHeight={this.state.recordHeight}
                            />
                        </div>










                    </div>






                </div>

            </div>





        );
    }
}
