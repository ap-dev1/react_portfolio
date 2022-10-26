
import * as d3 from "d3";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

import "./agent-44.sass";
import './agent-44-animations.sass';

import etbdState from "./etbdState";
import * as demoEtbd from "../etbd/demoEtbd";
import BehaviorSpaceBasic from "./BehaviorSpaceBasic";
import Population from "./Population";
import EmissionSign from "./EmissionSign";
import ConsequenceSign from "./ConsequenceSign";
import BoxTitle from "./BoxTitle";


// let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));



export default function Agent50(props) {

    const [paused, setpaused] = useState(true);
    const [simstate, setsimstate] = useState("off")
    const [g, setg] = useState(null)
    const [ppl, setppl] = useState(null)
    const [emsidx, setemsidx] = useState(null)
    const [ems, setems] = useState(null)
    const [cls, setcls] = useState(null)
    const [rnf, setrnf] = useState(null)
    const [b1, setb1] = useState(0)
    const [b2, setb2] = useState(0)
    const [etbdEvents, setetbdEvents] = useState(null);
    const prevgen = useRef(null);

    // const [r1etbd, setr1etbd] = useState(-etbdInt1);
    const [r1etbd, setr1etbd] = useState(-1);
    const [r2etbd, setr2etbd] = useState(-etbdInt2);

    const svgWidth = 300;
    const svgHeight = 150;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const tickDuration = 1;


    function resetAgent() {
        setpaused(true);
        setsimstate("off");
        setppl(null);
        setemsidx(null);
        setems(null);
        setcls(null);
        setrnf(null);
        setg(null);
        setb1(0);
        setb2(0);

        setetbdEvents(null);
        prevgen.current = null;

        // let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
        let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));

        // setr1etbd(-etbdInt1);
        setr1etbd(-1);
        setr2etbd(-etbdInt2);
        d3.select('#gEtbdRecord').selectAll('.etbd-record-line').remove()
        d3.select('#gEtbdRecord').selectAll('.etbd-record-circle').remove()
        d3.select('#gEtbdRecord').selectAll('.etbd-record-text').remove()
        d3.select('#gEtbdRecord').selectAll('.etbd-record-time').remove()
    }



    // -------  CREATE NEW POPULATION:  ------------

    function newppl(oldgen) {

        let parentalDiads = []
        let children = []


        // get n pairs of unique parents: 
        if (oldgen.rnf === true) {
            for (let j = 0; j < etbdState.popSize; j++) {
                let parents = demoEtbd.twoFitParents(oldgen.ppl, oldgen.cls, oldgen.ems)
                parentalDiads.push(parents)
            }
        } else {
            for (let j = 0; j < etbdState.popSize; j++) {
                let parents = demoEtbd.twoRandomParents(oldgen.ppl)
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

        //  RETURN NEW POPULATION: newChildren:
        newChildren.sort((a, b) => a - b)
        return newChildren
    }



    //  ---------------------- --------------  setg(0)

    useLayoutEffect(() => {
        let tick = null;
        if (paused === false && g === null) {

            let gt = d3.select('#xlabel');
            gt.text(null);
            gt.text('generations');

            tick = setTimeout(() => {
                setg(0);
                setppl(etbdState.defaultPopulation);
                setsimstate("randomindex")
            }, tickDuration);
        }
        return () => clearTimeout(tick);
    },
        [paused]
    )


    // -----------------   ------------------- ems idx 

    useLayoutEffect(() => {
        let tick2 = null;
        if (paused === false && simstate === 'randomindex') {
            tick2 = setTimeout(() => {
                let idx = d3.randomInt(etbdState.popSize)();
                setemsidx(idx);
                setsimstate("emission")
            }, tickDuration);
        }
        return () => clearTimeout(tick2);
    },
        [simstate]
    )





    // -----------------   ------------------- ems value 
    useLayoutEffect(() => {
        let tick3 = null;
        if (paused === false && simstate === 'emission') {
            tick3 = setTimeout(() => {
                let e = ppl[emsidx];
                setems(e);
                setsimstate("class")
            }, tickDuration);
        }
        return () => clearTimeout(tick3);
    },
        [simstate]
    )


    // -----------------   ------------------- cls, b1, b2 
    useLayoutEffect(() => {
        let tick4 = null;
        if (paused === false && simstate === 'class') {
            tick4 = setTimeout(() => {
                let c = demoEtbd.emissionClass(ems);
                setcls(c);
                if (c === 'class1') {
                    setb1(b1 => b1 + 1)
                }
                if (c === 'class2') {
                    setb1(b2 => b2 + 1)
                }


                //  record, draw time-line:


                setsimstate("reinforcement")


            }, tickDuration);
        }
        return () => clearTimeout(tick4);
    },
        [simstate]
    )



    // -----------------   ------------------- rnf
    useLayoutEffect(() => {
        let tick5 = null;
        if (paused === false && simstate === 'reinforcement') {
            tick5 = setTimeout(() => {
                let r = false;
                if (cls === 'class1' && r1etbd >= 0) {
                    r = true;
                    let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
                    setr1etbd(-etbdInt1)
                }
                if (cls === 'class2' && r2etbd >= 0) {
                    r = true;
                    let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));
                    setr2etbd(-etbdInt2)
                }
                setrnf(r)
                setsimstate("events")
            }, tickDuration);
        }
        return () => clearTimeout(tick5);
    },
        [simstate]
    )



    // -----------------   ------------------- events
    useLayoutEffect(() => {
        // console.log("tick6 events --  1")
        let tick6 = null;
        // if (paused === false && g && ppl && ems && cls && rnf) {
        if (paused === false && simstate === 'events') {

            // console.log("tick6 events --  2")
            tick6 = setTimeout(() => {

                let gendata = { g: g, ppl: ppl, ems: ems, cls: cls, rnf: rnf };

                // console.log("tick6 events --  gendata: ", gendata)
                if (cls === "class1" || cls === "class2") {
                    prevgen.current = gendata;
                }
                if (etbdEvents && etbdEvents.length) {
                    let evz = etbdEvents;
                    evz.push(gendata)
                    setetbdEvents(evz);
                } else {
                    setetbdEvents([gendata]);
                }


                // draw on cumulative record:


                // reset generation:
                let p = Array(etbdState.popSize).fill("-")
                setppl(p)
                setemsidx(null)
                setems(null)
                setcls(null)
                setrnf(null)
                setsimstate('newgen')
            }, tickDuration);
        }
        return () => clearTimeout(tick6);
    },
        [simstate]
    )



    // -----------------   ------------------- new g
    useLayoutEffect(() => {
        let tick7 = null;
        if (paused === false && simstate === 'newgen') {
            tick7 = setTimeout(() => {
                setg(g => g + 1)
                setr1etbd(r1etbd => r1etbd + 1);
                setr2etbd(r2etbd => r2etbd + 1);
                setsimstate('newppl')


                //  record, draw time-line:

                if (g + 1 >= 100) {
                    setpaused(true)
                }


            }, tickDuration);
        }
        return () => clearTimeout(tick7);
    },
        [simstate]
    )



    // -----------------   ------------------- emission
    useLayoutEffect(() => {
        let tick8 = null;
        if (paused === false && simstate === 'newppl') {
            tick8 = setTimeout(() => {
                let ppl1 = newppl(etbdEvents[etbdEvents.length - 1])
                setppl(ppl1)
                setsimstate('randomindex')
            }, tickDuration);
        }
        return () => clearTimeout(tick8);
    },
        [simstate]
    )



    // ------------------------  ----------------------  RECORD TIME LINE




    useEffect(() => {

        if (etbdEvents && etbdEvents.length && etbdEvents.length > 0) {

            let gEtbdRecord = d3.select('#gEtbdRecord');

            let w = 250
            let h = 150

            // console.log(gEtbdRecord)

            let xdomain = [0, 100]

            const xrec = d3.scaleLinear()
                .range([0, w])
                .domain(xdomain)

            const yrec = d3.scaleLinear()
                .range([h, 0])
                .domain([0, props.recordHeight]);



            gEtbdRecord.select('.xAxis1')
                .attr("transform", "translate(0," + h + ")")
                .call(
                    d3
                        .axisBottom(xrec)
                        .ticks(0)
                )

            gEtbdRecord.select('.yAxis1')
                .call(
                    d3
                        .axisLeft(yrec)
                        .tickPadding(10)
                        .ticks(0)
                )

            let x1, x2, y1, y2;

            if (b1 + b2 === 1) {
                x1 = 0;
                x2 = g - 1;
                y1 = 0;
                y2 = 1;
            } else {
                x1 = prevgen.current.g;
                x2 = g - 1;
                y1 = b1 + b2 - 1;
                y2 = b1 + b2;
            }


            if (y2 % props.recordHeight !== 0) {
                gEtbdRecord.append('line').attr('class', 'etbd-record-line')

                    .attr('x1', xrec(x1))
                    .attr('x2', xrec(x2))

                    .attr('y1', yrec((y1 % props.recordHeight)))
                    .attr('y2', yrec(y2 % props.recordHeight))

                    .attr("stroke", () => {
                        if (cls === 'class1') {
                            return etbdState.color111
                        }
                        if (cls === 'class2') {
                            return etbdState.color222
                        }
                    })
                    .attr('stroke-width', 1)
            }


            // class 2 -- rectangle instead of circle; REVISIT.

            gEtbdRecord.append('circle').attr('class', 'etbd-record-circle')
                .attr('cx', xrec(x2))
                .attr('cy', yrec(y2 % props.recordHeight))
                .attr('r', 3)
                .attr("stroke", () => {
                    if (cls === 'class1') {
                        return etbdState.color11
                    }
                    if (cls === 'class2') {
                        return etbdState.color22
                    }
                })
                .attr("fill", () => {
                    if (cls === 'class1' && rnf === true) {
                        return etbdState.color1
                    }
                    if (cls === 'class2' && rnf === true) {
                        return etbdState.color2
                    }

                    return '#1d2734'
                })
                .attr('stroke-width', 1)



            // gEtbdRecord.append('text').attr('class', 'etbd-record-text')
            //     .attr('x', xrec(x2))
            //     .attr('y', yrec(y2 % props.recordHeight))
            //     .attr('dx', -20)
            //     .attr('dy', -10)
            //     .attr("font-size", '.6rem')
            //     .attr("fill", () => {
            //         if (cls === 'class1' && rnf === true) {
            //             return etbdState.color11
            //         }
            //         if (cls === 'class2' && rnf === true) {
            //             return etbdState.color22
            //         }
            //         return '#1d2734'
            //     })

            //     // .attr("fill", () => {
            //     //     if (cls === 'class1' && rnf === true) {
            //     //         return etbdState.color1
            //     //     }
            //     //     if (cls === 'class2' && rnf === true) {
            //     //         return etbdState.color2
            //     //     }
            //     //     return '#1d2734'
            //     // })
            //     .text(ems)
        }
    },
        [b1, b2]
    );


    // ------------------------  ----------------------  TIME line


    useEffect(() => {

        if (g && g > 0) {

            let gEtbdRecord = d3.select('#gEtbdRecord');

            let w = 250
            let h = 150

            let xrec = d3.scaleLinear()
                .range([0, w])
                .domain([0, 100]);

            let yrec = d3.scaleLinear()
                .range([h, 0])
                .domain([0, props.recordHeight]);

            gEtbdRecord.append('line').attr('class', 'etbd-record-time')
                .attr('x1', xrec(g - 1))
                .attr('x2', xrec(g))
                .attr('y1', yrec(-.2))
                .attr('y2', yrec(-.2))

                // .attr('dx', 0)
                // .attr('dy', '4px')

                .attr("stroke", '#2abbc8')
                .attr('stroke-width', 2)


            d3.select('#etbd-record-g').remove();



            gEtbdRecord.append('text').attr('id', 'etbd-record-g')
                .attr('x', xrec(g))
                .attr('y', yrec(0))
                .attr('dx', 0)
                .attr('dy', 20)
                .attr("font-size", '.75rem')
                .attr("fill", '#2abbc8')
                // .text(`generation  ${g}`);
                .text(` ${g}`);

        }
    },
        [g]
    );






    return (

        <>
            <div id='agent-44'>


                <div className="agent-border">
                    <div className="wrapper-behavior-space">
                        <BehaviorSpaceBasic />
                    </div>

                    <div className="ppl-wrapper" >
                        <Population
                            ppl={ppl}
                            emsidx={emsidx}
                            simstate={simstate}
                        />
                    </div>

                    <div className='evd-wrapper'>
                        <BoxTitle
                            paused={paused}
                            g={g}
                            simstate={simstate}
                        />
                    </div>
                </div>



                <div className='box-controls' >
                    <button
                        className='btn-start'
                        onClick={() => { setpaused(!paused) }}
                    >
                        {paused === true ? 'run theory' : `pause`}

                    </button>

                    <button
                        className='btn-reset'
                        onClick={resetAgent}
                        title='reset agent'
                    >
                        reset
                    </button>

                </div>

            </div>



        </>
    )
};






