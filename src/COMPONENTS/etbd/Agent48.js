import "./agent-44.sass";

import * as d3 from "d3";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import etbdState from "./etbdState";

// import { etbdSampleData, etbdFilteredData } from "./etbdSampleData";
import * as demoEtbd from "../etbd/demoEtbd";

import { CSSTransition } from 'react-transition-group';
import { Fade } from 'react-reveal';





// BEHAVIOR SPACE: --------------------------------

function createAgent(arcRange, adjustQuadrant) {
    let bp = [];
    let arcSize = arcRange / etbdState.repertoire.length

    etbdState.repertoire.forEach((item, i) => {
        let radians = arcSize * i + adjustQuadrant;
        let targetClass = '';
        if (etbdState.class1.includes(item)) {
            targetClass = 'class1'
        }
        if (etbdState.class2.includes(item)) {
            targetClass = 'class2'
        }
        bp.push(
            {
                phenotype: item,
                radians: radians,
                present: false,
                emited: false,
                consequence: false,
                frequency: 0,
                targetClass: targetClass,
            }
        )
    })
    return bp;
};

// let arcRange = 2 * Math.PI
// let adjustQuadrant = -Math.PI

let arcRange = Math.PI
let adjustQuadrant = Math.PI

let arcSize = arcRange / etbdState.repertoire.length
// const behaviorSpace = createAgent(2 * Math.PI, -Math.PI)
const behaviorSpace = createAgent(arcRange, adjustQuadrant)

// necessary... ?
let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));

// console.log("arcsize: ", arcSize)

export default function Agent48(props) {

    // const refAgent612 = useRef(null);
    // const g612 = useRef(null);

    const [paused, setpaused] = useState(false);
    const [g, setg] = useState(0)
    const [ppl, setppl] = useState(etbdState.defaultPopulation)
    const [emsidx, setemsidx] = useState(null)

    const [ems, setems] = useState(null)
    const [cls, setcls] = useState(null)
    const [rnf, setrnf] = useState(null)

    const [co, setco] = useState(null)

    const [b1, setb1] = useState(0)
    const [b2, setb2] = useState(0)

    const [etbdEvents, setetbdEvents] = useState(null);
    // const [targetEvents, settargetEvents] = useState(null);

    const [agent, setagent] = useState(behaviorSpace);

    const prevgen = useRef(null);

    const [r1etbd, setr1etbd] = useState(-etbdInt1);
    const [r2etbd, setr2etbd] = useState(-etbdInt2);

    const svgWidth = 300;
    const svgHeight = 150;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const innerRadius = 15;
    const outerRadius = 100;
    const radius = outerRadius - innerRadius;

    const tickDuration = 1000;




    function resetAgent() {
        setppl(etbdState.defaultPopulation);
        setems(null);
        setcls(null);
        setrnf(null);
        setg(0);
        setco(null);
        setb1(0);
        setb2(0);

        setetbdEvents(null);
        setagent(behaviorSpace);

        prevgen.current = null;

        let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
        let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));

        setr1etbd(-etbdInt1);
        setr2etbd(-etbdInt2);

        d3.select('#gEtbdRecord').selectAll('.etbd-record-line').remove()
        d3.select('#gEtbdRecord').selectAll('.etbd-record-circle').remove()
        d3.select('#gEtbdRecord').selectAll('.etbd-record-text').remove()
        d3.select('#gEtbdRecord').selectAll('.etbd-record-time').remove()
    }

    // function resetTime() {
    //     setg(1);
    //     setetbdEvents([]);
    //     prevgen.current = null;
    //     d3.select('#gEtbdRecord').selectAll('.etbd-record-line').remove()
    //     d3.select('#gEtbdRecord').selectAll('.etbd-record-circle').remove()
    //     d3.select('#gEtbdRecord').selectAll('.etbd-record-text').remove()
    //     d3.select('#gEtbdRecord').selectAll('.etbd-record-time').remove()
    // }



    useEffect(() => {
        let tick = null;

        if (paused === false) {

            tick = setTimeout(() => {
                setg(g => g + 1)
                setr1etbd(r1etbd => r1etbd + 1);
                setr2etbd(r2etbd => r2etbd + 1);


                // if (g + 1 > 100) {
                //     resetTime()
                // }

                //  POPULATION GOES IN:
                // let e = demoEtbd.emitBehavior(ppl);

                let idx = d3.randomInt(etbdState.popSize)();
                setemsidx(idx);

                let e = ppl[idx];
                setems(e);

                let c = demoEtbd.emissionClass(e);
                setcls(c);

                if (c === 'class1') {
                    setb1(b1 => b1 + 1)
                }

                if (c === 'class2') {
                    setb1(b2 => b2 + 1)
                }


                let r = false;


                if (c === 'class1' && r1etbd >= 0) {
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


                let gendata = { g: g, ppl: ppl, ems: e, cls: c, rnf: r, co: co };

                if (c === "class1" || c === "class2") {
                    prevgen.current = gendata;
                }

                if (etbdEvents && etbdEvents.length) {

                    // let evz = etbdEvents.slice(-49);
                    let evz = etbdEvents;
                    evz.push(gendata)
                    setetbdEvents(evz);
                } else {
                    setetbdEvents([gendata]);
                }


                // -------  CREATE NEW POPULATION:  ------------

                let parentalDiads = []
                let children = []


                // get n pairs of unique parents: 
                if (rnf === true) {
                    for (let j = 0; j < etbdState.popSize; j++) {
                        let parents = demoEtbd.twoFitParents(ppl, c, e)
                        parentalDiads.push(parents)
                    }
                } else {
                    for (let j = 0; j < etbdState.popSize; j++) {
                        let parents = demoEtbd.twoRandomParents(ppl)
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
                setppl(newChildren)

            }, tickDuration);
        }

        return () => clearTimeout(tick);

    },
        [paused, ppl]
    )






    // useEffect(() => {
    //     if (etbdEvents && etbdEvents.length > 0) {
    //         let ev = etbdEvents[etbdEvents.length - 1]
    //         // console.log("ev: ", ev)

    //         if (ev.cls === "class1" || ev.cls === "class2") {
    //             prevgen.current = ev;
    //         }
    //     }
    // },
    //     [etbdEvents]
    // )









    useEffect(() => {

        if (etbdEvents && etbdEvents.length && etbdEvents.length > 0) {

            // let etbdData = etbdEvents.filter((item) => (item.cls === "class1" || item.cls === "class2"))

            // let etbdData = etbdFilteredData
            // console.log('filtered events: ', etbdData)

            let gEtbdRecord = d3.select('#gEtbdRecord');
            // gEtbdRecord.attr("transform", `translate(${40}, ${40})`);


            /////////////////////////////////////////////////////////////

            let w = 310
            let h = 205


            let xdomain = [0, 100]

            // if (g > 100) {
            //     let xmin = 100 % g * 100
            //     let xmax = 100 % g * 100 + 100
            //     xdomain = [xmin, xmax]
            //     console.log('xdomain: ', xdomain)
            // }


            const xrec = d3.scaleLinear()
                .range([0, w])
                .domain(xdomain)

            const yrec = d3.scaleLinear()
                .range([h, 0])
                .domain([0, props.recordHeight]);

            /////////////////////////////////////////////////////////////


            gEtbdRecord.select('.xAxis1')
                .attr("transform", "translate(0," + h + ")")
                .call(
                    d3
                        .axisBottom(xrec)
                        // .tickPadding(30)
                        .ticks(0)
                    // .tickSize(-h)
                    // .tickFormat((d) => d === 0 ? `generations` : d)
                )
            // .selectAll('text')
            // .attr('opacity', () => {
            //     return props.agentType === 'etbd' ? .9 : .4
            // })
            // .selectAll('path')
            // .attr('stroke-width', .5)


            gEtbdRecord.select('.yAxis1')
                .call(
                    d3
                        .axisLeft(yrec)
                        .tickPadding(10)
                        .ticks(0)
                    // .tickValues([0, props.recordHeight * .33, props.recordHeight * .67, props.recordHeight])
                    // .tickSizeOuter(-width)
                )
            // .selectAll('path')
            // .attr('stroke-width', .5)
            ////////////////////////////////////////////////////////

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

                    // .attr('x1', xrec(x1 % 100))
                    // .attr('x2', xrec(x2 % 100))
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


            gEtbdRecord.append('circle').attr('class', 'etbd-record-circle')
                // .attr('cx', xrec(x2 % 100))
                .attr('cx', xrec(x2))
                .attr('cy', yrec(y2 % props.recordHeight))
                .attr('r', 2)
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


            gEtbdRecord.append('text').attr('class', 'etbd-record-text')
                // .attr('cx', xrec(x2 % 100))
                .attr('x', xrec(x2))
                .attr('y', yrec(y2 % props.recordHeight))
                .attr('dx', -20)
                .attr('dy', -10)
                .attr("font-size", '.6rem')
                .attr("fill", () => {
                    if (cls === 'class1' && rnf === true) {
                        return etbdState.color11
                    }
                    if (cls === 'class2' && rnf === true) {
                        return etbdState.color22
                    }
                    return '#1d2734'
                })

                // .attr("fill", () => {
                //     if (cls === 'class1' && rnf === true) {
                //         return etbdState.color1
                //     }
                //     if (cls === 'class2' && rnf === true) {
                //         return etbdState.color2
                //     }
                //     return '#1d2734'
                // })
                .text(ems)
        }
    },
        [b1, b2]
    );






    useEffect(() => {

        if (g && g > 0) {

            let gEtbdRecord = d3.select('#gEtbdRecord');

            let w = 310
            let h = 205

            let xrec = d3.scaleLinear()
                .range([0, w])
                .domain([0, 100]);

            let yrec = d3.scaleLinear()
                .range([h, 0])
                .domain([0, props.recordHeight]);

            gEtbdRecord.append('line').attr('class', 'etbd-record-time')

                // .attr('x1', xrec(x1 % 100))
                // .attr('x2', xrec(x2 % 100))
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
                .attr('dx', -40)
                .attr('dy', 20)
                .attr("font-size", '.75rem')
                .attr("fill", '#2abbc8')
                .text(`generation  ${g}`);
        }
    },
        [g]
    );





    useEffect(() => {

        if (g && g > 0) {

            let etbdPath = d3.line()
                .x(d => d.g)
                .y((d, i) => i)


            let gEtbdRecord = d3.select('#gEtbdRecord');
            let w = 310
            let h = 205

            let xdomain = [0, 100]


            let xrec = d3.scaleLinear()
                .range([0, w])
                .domain(xdomain)

            let yrec = d3.scaleLinear()
                .range([h, 0])
                .domain([0, props.recordHeight]);



        }
    },
        [g]
    );



    return (



        <>
            <div id='agent-44'>

                <div className='behavior-space-basic'>

                    <div className='min'>
                        {`${etbdState.repertoire[0]} ... `}
                    </div>

                    <div className='c1' style={{ color: etbdState.color11 }}>
                        {`${etbdState.class1[0]} ... ${etbdState.class1[etbdState.class1.length - 1]}`}
                    </div>


                    <div className='c2' style={{ color: etbdState.color22 }}>
                        {`${etbdState.class2[0]} ... ${etbdState.class2[etbdState.class2.length - 1]}`}
                    </div>

                    <div className='max'>
                        {` ... ${etbdState.repertoire[etbdState.repertoire.length - 1]}`}
                    </div>

                </div>



                <div className='agent-theory'>


                    <div className='agent' title='Agent'>

                        {/* <span
                            className='span-agent'
                            datag={g}
                        >
                            Agent
                        </span> */}


                        {/* <div className='div-ppl' title="An agent is a population of behaviors that is transform by Darwinian rules, again, and again, and again, and again,  ">
                            {
                                ppl.map((item, i) => {
                                    return (


                                        <button
                                            className={(emsidx && i === emsidx) ? 'btn-ppl-emited' : 'btn-ppl'}
                                            value={item}
                                        >

                                            {item}

                                        </button>

                                    )
                                })
                            }

                        </div> */}


                        <div className='div-cards'

                            style={{
                                display: "flex",
                                flexDirection: "row",
                                margin: 'auto',
                                // border: '1px solid darkslategrey',
                            }}
                        >


                            {
                                ppl.map((item, i) => {
                                    return (

                                        <div className='card-wrapper'>


                                            <div
                                                className='card-container'
                                            // className={i === emsidx ? 'card-container-flipped' : 'card-container'}
                                            >
                                                <div className='front'>
                                                    <div className='image-container'>
                                                        <img className='card-image'>

                                                        </img>
                                                    </div>
                                                </div>

                                                <div className='back'>
                                                    <span className='span-item' >
                                                        {item}
                                                    </span>

                                                </div>
                                            </div>
                                        </div>


                                    )
                                })
                            }

                        </div>



                        <div className='div-buttons' >

                            <button className='btn-ems'>
                                {ems ? ems : ""}
                            </button>

                            <button className='btn-rnf'>
                                {(rnf && rnf === true) ? '+ 1p' : ""}
                            </button>

                        </div>


                    </div>



                    <div className='evd'>
                        <div className='box-title'>
                            <h7
                                className={paused === true ? '' : 'running'}
                            >
                                DARWINIAN  PRINCIPLES

                            </h7>
                        </div>


                        <div className='box-controls' >

                            <button
                                className='btn-start'
                                onClick={() => { setpaused(!paused) }}
                            >
                                {paused ? 'run' : `||`}

                            </button>

                            <button
                                className='btn-reset'
                                onClick={resetAgent}
                                title='reset'
                            >
                                clr
                            </button>

                        </div>


                    </div>






                </div>


            </div>



        </>
    )
};






