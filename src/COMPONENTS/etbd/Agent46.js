import "./agent-44.sass";

import * as d3 from "d3";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import etbdState from "./etbdState";
import * as demoEtbd from "../etbd/demoEtbd";


let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));

export default function Agent46(props) {

    const [paused, setpaused] = useState(true);
    const [phase, setphase] = useState('emission')
    const [g, setg] = useState(0)
    const [ppl, setppl] = useState(etbdState.defaultPopulation)

    const [emsidx, setemsidx] = useState(null)
    const [ems, setems] = useState(null)

    const [cls, setcls] = useState('')

    // const [co, setco] = useState({})

    const [b1, setb1] = useState(0)
    const [b2, setb2] = useState(0)

    const [rnf, setrnf] = useState(false)

    const [etbdEvents, setetbdEvents] = useState([]);

    // const [agent, setagent] = useState(behaviorSpace);

    // const prevgen = useRef({});

    const [r1etbd, setr1etbd] = useState(-etbdInt1);
    const [r2etbd, setr2etbd] = useState(-etbdInt2);


    // const [etbd, setetbd] = useState('ems')



    const svgWidth = 300;
    const svgHeight = 150;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    // const innerRadius = 15;
    // const outerRadius = 100;
    // const radius = outerRadius - innerRadius;

    const tickDuration = 1000;




    function resetAgent() {
        setppl(etbdState.defaultPopulation);
        setems(null);
        setcls('');
        setrnf(false);
        setg(0);
        // setco(false);
        setb1(0);
        setb2(0);

        setetbdEvents([]);
        // setagent(behaviorSpace);

        // prevgen.current = {};

        let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
        let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));

        setr1etbd(-etbdInt1);
        setr2etbd(-etbdInt2);

        d3.select('#gEtbdRecord').selectAll('.etbd-record-line').remove()
        d3.select('#gEtbdRecord').selectAll('.etbd-record-circle').remove()
        d3.select('#gEtbdRecord').selectAll('.etbd-record-text').remove()

        console.log("is this running?")
    }






    //      EMISSION  ----------------------------------

    useEffect(() => {
        let tick = null;

        if (paused === false && phase == 'emission') {
            let idx = d3.randomInt(etbdState.popSize)();
            setemsidx(idx);

            let e = ppl[idx];
            setems(e);

            tick = setTimeout(() => {
                // setg(g => g + 1)
                // setr1etbd(r1etbd => r1etbd + 1);
                // setr2etbd(r2etbd => r2etbd + 1);

                // let idx = d3.randomInt(etbdState.popSize)();
                // setemsidx(idx);

                // let e = ppl[idx];
                // setems(e);

                setphase('class')
            }, tickDuration);
        }

        return () => clearTimeout(tick);

    },
        [paused, ppl]
    )




    // CLASS   -------------------------------

    useEffect(() => {
        let tick_cls = null;

        if (paused === false && phase === 'class') {
            let c = demoEtbd.emissionClass(ems);
            setcls(c);

            tick_cls = setTimeout(() => {
                // let c = demoEtbd.emissionClass(ems);
                // setcls(c);
                setphase('behavior')
            }, tickDuration);
        }

        return () => clearTimeout(tick_cls);

    },
        [phase]
    )




    // b1, b2  -------------------------------

    useEffect(() => {
        let tick_b = null;

        if (paused === false && phase === 'behavior') {

            if (cls === 'class1') {
                setb1(b1 => b1 + 1)
            }

            if (cls === 'class2') {
                setb1(b2 => b2 + 1)
            }
            tick_b = setTimeout(() => {

                // if (cls === 'class1') {
                //     setb1(b1 => b1 + 1)
                // }

                // if (cls === 'class2') {
                //     setb1(b2 => b2 + 1)
                // }

                setphase('reinforcement')
            }, tickDuration);
        }

        return () => clearTimeout(tick_b);

    },
        [phase]
    )


    // REINFORCEMENT  ---------------------------

    useEffect(() => {
        let tick_rnf = null;

        if (paused === false && phase === 'reinforcement') {

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


            tick_rnf = setTimeout(() => {

                // let r = false;

                // if (cls === 'class1' && r1etbd >= 0) {
                //     r = true;
                //     let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
                //     setr1etbd(-etbdInt1)
                // }

                // if (cls === 'class2' && r2etbd >= 0) {
                //     r = true;
                //     let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));
                //     setr2etbd(-etbdInt2)
                // }

                // setrnf(r)

                setphase('gendata')

            }, tickDuration);
        }

        return () => clearTimeout(tick_rnf);

    },
        [phase]
    )




    // GENERATION DATA --> etbdEvents; --------------------
    // 
    // update prevgen.current;


    useEffect(() => {
        let tick_evz = null;

        if (paused === false && phase === 'gendata') {
            let gendata = { g: g, ppl: ppl, ems: ems, cls: cls, rnf: rnf };

            // if (cls === "class1" || cls === "class2") {
            //     prevgen.current = gendata;
            // }

            if (etbdEvents && etbdEvents.length) {
                let evz = etbdEvents;
                evz.push(gendata)
                setetbdEvents(evz);
            } else {
                setetbdEvents([gendata]);
            }

            tick_evz = setTimeout(() => {

                // setppl(['-', '-', '-', '-', '-']);
                // setppl(null);

                // setemsidx(null);
                // setems(null);

                setphase('darwin')

            }, tickDuration);
        }

        return () => clearTimeout(tick_evz);

    },
        [phase]
    )




    //       -------  CREATE NEW POPULATION:  ------------



    useEffect(() => {
        let tick_new = null;

        if (paused === false && phase === 'darwin') {


            let parentalDiads = []
            let children = []


            // get n pairs of unique parents: 
            if (rnf === true) {
                for (let j = 0; j < etbdState.popSize; j++) {
                    let parents = demoEtbd.twoFitParents(ppl, cls, ems)
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
            setg(g => g + 1)
            setr1etbd(r1etbd => r1etbd + 1);
            setr2etbd(r2etbd => r2etbd + 1);




            tick_new = setTimeout(() => {

                setphase('emission')
            }, tickDuration);
        }

        return () => clearTimeout(tick_new);

    },
        [phase]
    )





    // EFFECT 6 - ---------------------------------------------- 6

    // useEffect(() => {
    //     let tick = null;

    //     if (paused === false) {

    //         tick = setTimeout(() => {
    //             let c = demoEtbd.emissionClass(ems);
    //             setcls(c);

    //             if (c === 'class1') {
    //                 setb1(b1 => b1 + 1)
    //             }

    //             if (c === 'class2') {
    //                 setb1(b2 => b2 + 1)
    //             }


    //             let r = false;


    //             if (c === 'class1' && r1etbd >= 0) {
    //                 r = true;
    //                 let etbdInt1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1));
    //                 setr1etbd(-etbdInt1)
    //             }

    //             if (cls === 'class2' && r2etbd >= 0) {
    //                 r = true;
    //                 let etbdInt2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2));
    //                 setr2etbd(-etbdInt2)
    //             }

    //             setrnf(r)


    //             let gendata = { g: g, ppl: ppl, ems: e, cls: c, rnf: r, co: co };

    //             if (c === "class1" || c === "class2") {
    //                 prevgen.current = gendata;
    //             }

    //             if (etbdEvents && etbdEvents.length) {

    //                 // let evz = etbdEvents.slice(-49);
    //                 let evz = etbdEvents;
    //                 evz.push(gendata)
    //                 setetbdEvents(evz);
    //             } else {
    //                 setetbdEvents([gendata]);
    //             }


    //             // -------  CREATE NEW POPULATION:  ------------

    //             let parentalDiads = []
    //             let children = []


    //             // get n pairs of unique parents: 
    //             if (rnf === true) {
    //                 for (let j = 0; j < etbdState.popSize; j++) {
    //                     let parents = demoEtbd.twoFitParents(ppl, c, e)
    //                     parentalDiads.push(parents)
    //                 }
    //             } else {
    //                 for (let j = 0; j < etbdState.popSize; j++) {
    //                     let parents = demoEtbd.twoRandomParents(ppl)
    //                     parentalDiads.push(parents)
    //                 }
    //             }


    //             // recombine their genotypes: 
    //             parentalDiads.forEach((pair) => {
    //                 let child = demoEtbd.crossTwoStrings(pair)
    //                 children.push(child)
    //             })


    //             // mutate some genotypes:
    //             let newChildren = []

    //             children.forEach((child) => {
    //                 let mutant = demoEtbd.undergoesMutation()

    //                 if (mutant === true) {
    //                     let newChild = demoEtbd.flipRandomBit(child)
    //                     newChildren.push(newChild)
    //                 } else {
    //                     newChildren.push(child)
    //                 }
    //             })



    //             //  RETURN NEW POPULATION: newChildren:
    //             newChildren.sort((a, b) => a - b)
    //             setppl(newChildren)

    //         }, tickDuration);
    //     }

    //     return () => clearTimeout(tick);

    // },
    //     [paused, ppl]
    // )







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









    // useEffect(() => {

    //     if (etbdEvents && etbdEvents.length && etbdEvents.length > 0) {

    //         // let etbdData = etbdEvents.filter((item) => (item.cls === "class1" || item.cls === "class2"))

    //         // let etbdData = etbdFilteredData
    //         // console.log('filtered events: ', etbdData)

    //         let gEtbdRecord = d3.select('#gEtbdRecord');
    //         gEtbdRecord.attr("transform", `translate(${40}, ${40})`);


    //         /////////////////////////////////////////////////////////////

    //         let w = 310
    //         let h = 205

    //         let xdomain = g > 100 ? [g - 99, g] : [0, 100]

    //         const xrec = d3.scaleLinear()
    //             .range([0, w])
    //             .domain(xdomain)

    //         const yrec = d3.scaleLinear()
    //             .range([h, 0])
    //             .domain([0, props.recordHeight]);

    //         /////////////////////////////////////////////////////////////


    //         gEtbdRecord.select('.xAxis1')
    //             .attr("transform", "translate(0," + h + ")")
    //             .call(
    //                 d3
    //                     .axisBottom(xrec)
    //                     .tickPadding(30)
    //                 // .ticks(20)
    //                 // .tickSize(-h)
    //                 // .tickFormat((d) => d === 0 ? `generations` : d)
    //             )
    //             .selectAll('text')
    //             .attr('opacity', () => {
    //                 return props.agentType === 'etbd' ? .9 : .4
    //             })
    //             .selectAll('path')
    //             .attr('stroke-width', .5)


    //         gEtbdRecord.select('.yAxis1')
    //             .call(
    //                 d3
    //                     .axisLeft(yrec)
    //                     .tickPadding(10)
    //                     .ticks(0)
    //                 // .tickValues([0, props.recordHeight * .33, props.recordHeight * .67, props.recordHeight])
    //                 // .tickSizeOuter(-width)
    //             )
    //             .selectAll('path')
    //             .attr('stroke-width', .5)
    //         ////////////////////////////////////////////////////////

    //         let x1, x2, y1, y2;

    //         if (b1 + b2 === 1) {
    //             x1 = 0;
    //             x2 = g - 1;
    //             y1 = 0;
    //             y2 = 1;
    //         } else {
    //             x1 = prevgen.current.g;
    //             x2 = g - 1;
    //             y1 = b1 + b2 - 1;
    //             y2 = b1 + b2;
    //         }

    //         if (y2 % props.recordHeight !== 0) {
    //             gEtbdRecord.append('line').attr('class', 'etbd-record-line')

    //                 // .attr('x1', xrec(x1 % 100))
    //                 // .attr('x2', xrec(x2 % 100))
    //                 .attr('x1', xrec(x1))
    //                 .attr('x2', xrec(x2))

    //                 .attr('y1', yrec((y1 % props.recordHeight)))
    //                 .attr('y2', yrec(y2 % props.recordHeight))

    //                 .attr("stroke", () => {
    //                     if (cls === 'class1') {
    //                         return etbdState.color111
    //                     }
    //                     if (cls === 'class2') {
    //                         return etbdState.color222
    //                     }
    //                 })
    //                 .attr('stroke-width', 1)
    //         }

    //         gEtbdRecord.append('circle').attr('class', 'etbd-record-circle')
    //             // .attr('cx', xrec(x2 % 100))
    //             .attr('cx', xrec(x2))
    //             .attr('cy', yrec(y2 % props.recordHeight))
    //             .attr('r', 3)
    //             .attr("stroke", () => {
    //                 if (cls === 'class1') {
    //                     return etbdState.color11
    //                 }
    //                 if (cls === 'class2') {
    //                     return etbdState.color22
    //                 }
    //             })
    //             .attr("fill", () => {
    //                 if (cls === 'class1' && rnf === true) {
    //                     return etbdState.color1
    //                 }
    //                 if (cls === 'class2' && rnf === true) {
    //                     return etbdState.color2
    //                 }

    //                 return '#1d2734'
    //             })
    //             .attr('stroke-width', 1)


    //         gEtbdRecord.append('text').attr('class', 'etbd-record-text')
    //             // .attr('cx', xrec(x2 % 100))
    //             .attr('x', xrec(x2))
    //             .attr('y', yrec(y2 % props.recordHeight))
    //             .attr('dx', -20)
    //             .attr('dy', -10)
    //             .attr("font-size", '.7rem')
    //             .attr("fill", () => {
    //                 if (cls === 'class1') {
    //                     return etbdState.color11
    //                 }
    //                 if (cls === 'class2') {
    //                     return etbdState.color22
    //                 }
    //             })

    //             // .attr("fill", () => {
    //             //     if (cls === 'class1' && rnf === true) {
    //             //         return etbdState.color1
    //             //     }
    //             //     if (cls === 'class2' && rnf === true) {
    //             //         return etbdState.color2
    //             //     }
    //             //     return '#1d2734'
    //             // })
    //             .text(ems)
    //     }
    // },
    //     [b1, b2]
    // );



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

                        <span
                            className='span-agent'
                            datag={`g ${g}`}
                        >
                            Agent
                        </span>


                        <div className='div-ppl'>
                            {
                                ppl.map((item, i) => {
                                    return (
                                        <button
                                            className='btn-ppl'
                                            value={item}
                                            style={{
                                                // color: i === emsidx ? '#ffff00aa' : '#ffffff69',
                                                // transform: i === emsidx ? `translateY(-10px)` : `translateY(0px)`,
                                                // borderColor: (i === emsidx && rnf === true) ? '#ffff00aa' : '#ffffff29',
                                            }}
                                        >
                                            {item}
                                        </button>
                                    )
                                })
                            }
                        </div>



                        <div
                            className='div-b'
                        >


                            <button
                                // className='btn-b1'
                                style={{
                                    border: '1px solid #444',
                                    color: 'orange',
                                    fontSize: '.6rem',
                                    backgroundColor: 'transparent',
                                    marginRight: '.5rem',

                                }}
                            >
                                {[phase]}
                            </button>



                            <button
                                className='btn-b1'
                                style={{
                                    // borderColor: (cls === 'class1' && rnf === true) ? '#ffff00aa' : '#ffffff29',
                                    color: cls === 'class1' ? etbdState.color1 : etbdState.color111,
                                    // borderColor: '#ffffff29',
                                }}
                            >
                                {b1}
                            </button>

                            <button
                                className='btn-b2'
                                style={{
                                    // borderColor: (cls === 'class2' && rnf === true) ? '#ffff00aa' : '#ffffff29',
                                    color: cls === 'class2' ? etbdState.color2 : etbdState.color222,
                                    // borderColor: '#ffffff29',
                                }}
                            >
                                {b2}
                            </button>

                            <button
                                className='btn-rnf'
                                style={{
                                    // borderColor: (cls === 'class2' && rnf === true) ? '#ffff00aa' : '#ffffff29',
                                    // color: '#00000029',
                                }}
                            >
                                {rnf === true ? 'yess!' : '--'}
                            </button>
                        </div>




                    </div>





                    <div className='evd'>
                        <div className='box-title'>
                            <h7>Darwinian <br />principles</h7>
                        </div>


                        <div className='box-controls' >

                            <button
                                className='btn-start'
                                onClick={() => { setpaused(!paused) }}
                            >
                                {/* {paused ? 'run ETBD' : `${g}`} */}
                                {paused ? 'run' : `||`}

                            </button>

                            <button
                                className='btn-reset'
                                onClick={resetAgent}
                                title='reset'
                            >
                                clr
                            </button>




                            {/* <div
className='div-g'
>
<span> {g}</span>
</div> */}

                        </div>


                    </div>






                </div>


            </div>



        </>
    )
};






