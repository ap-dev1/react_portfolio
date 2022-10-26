import './cumulative-record.sass';
import { dataSample } from "./dataSample";

import * as d3 from "d3";
import { nanoid } from "nanoid";
import _ from "lodash";
import { useRef, useEffect, useLayoutEffect } from "react";



export default function CumulativeRecord(props) {


    const refRecord = useRef(null);
    const refEtbdRecord = useRef(null);


    // const refRecordEtbd = useRef()

    // const [svgWidth] = useState(450)
    // const [svgHeight] = useState(300)
    // const [margin, setMargin] = useState({ top: 40, left: 40, bottom: 55, right: 50 })


    // const [width] = useState(() => {
    //     return (
    //         svgWidth - margin.left - margin.right
    //     )
    // })

    // const [height] = useState(() => {
    //     return (
    //         svgHeight - margin.top - margin.bottom)
    // })

    // const [X] = useState(() => {
    //     let x = d3.scaleLinear()
    //         .range([0, width])
    //         .domain([0, props.timeLimit * 1000])
    //     return x
    // })

    // const [Y] = useState(() => {
    //     let y = d3.scaleLinear()
    //         .range([height, 0])
    //         .domain([0, props.recordHeight])
    //     return y
    // })

    // const [Xetbd] = useState(() => {
    //     let x = d3.scaleLinear()
    //         .range([0, width])
    //         .domain([0, 100])
    //     return x
    // })
    ////////////////////////////////////////

    /////////////////////////////////////////
    // const [emsVisible, setEmsVisible] = useState(true)



    let svgWidth = 400;
    let svgHeight = 300;
    let margin = { top: 40, left: 40, bottom: 55, right: 50 };
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;


    useLayoutEffect(() => {

        const gRecord = d3.select(refRecord.current);

        const X = d3.scaleLinear()
            .range([0, width])
            .domain([0, props.timeLimit * 1000]);

        const Y = d3.scaleLinear()
            .range([height, 0])
            .domain([0, props.recordHeight]);

        const Xetbd = d3.scaleLinear()
            .range([0, width])
            .domain([0, 100]);

        gRecord.attr("transform", `translate(${margin.left}, ${margin.top})`);

        gRecord.select('.xAxis')
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(X)
                    .tickPadding(10)
                    .tickFormat((d) => d === 0 ? `seconds` : `${d / 1000} s`)
                    // .tickFormat((d) => d/1000 === this.state.timeLimit ? `${d / 1000} seconds` : `${d / 1000} s`)

                    .ticks(5)
                // .tickValues([0, (timeLimit / 2) * 1000, timeLimit * 1000])
                // .tickValues([0, (props.timeLimit / 2) * 1000, props.timeLimit * 1000])
                // .tickSize(-height)
                // .tickSizeOuter(-height)
            )
            .selectAll('text')
            // .transition().duration(1000)
            // .attr('fill', () => {
            //     return props.agentType === 'etbd'  ? 'cyan' : 'grey'
            // })
            // .style('font-size', () => {
            //     return props.agentType === 'etbd'  ? '.7rem' : '.5rem'
            // } )
            .attr('opacity', () => {
                return props.agentType === 'human' ? .9 : .4
            })
            .selectAll('path')
            .attr('stroke-width', .5)

        gRecord.select('.yAxis')
            .call(
                d3
                    .axisLeft(Y)
                    .tickPadding(10)
                    .ticks(4)
                // .tickValues([0, props.recordHeight * .33, props.recordHeight * .67, props.recordHeight])
                // .tickSizeOuter(-width)
            )
            .selectAll('path')
            .attr('stroke-width', .5)


        const gLabels = gRecord.append('g').attr("class", 'axes-labels')

        gLabels.append("text").text('Responses')
            .attr("x", -30).attr("y", -20)
            .attr("fill", 'rgba(185, 185, 185, .75)')
            .attr("font-size", '16px')
        // .style('text-shadow', '0 0 1px rgba(255, 255, 255, 0.55)')

        gLabels.append("text").text('This')
            .attr("x", 60).attr("y", -20)
            .attr("fill", props.color1)
            .attr("font-size", '16px')
            .attr("font-weight", 500)
            .attr("font-style", 'italic')
            .attr("letter-spacing", "1px")

        gLabels.append("text").text('That')
            .attr("x", 120).attr("y", -20)
            .attr("fill", props.color2)
            .attr("font-size", '16px')
            .attr("font-weight", 400)
            .attr("font-style", 'italic')
            .attr("letter-spacing", "1px");








        //  Live data

        let myData = props.events ? props.events : dataSample



        gRecord.selectAll('.time-line').remove();
        gRecord.selectAll('.response-line').remove();

















        gRecord.selectAll('.time-line')
            .data(myData)
            .join(
                enter => enter.append("line").attr("class", "time-line"),
                update => update.attr("class", "updated-time-line"),
                exit => exit.remove()
            )

            .attr('x1', (d) => X(d.delta_t - d.irt))
            .attr('x2', (d) => X(d.delta_t))
            .attr('y1', (d, i) => Y((i - 1) % props.recordHeight))
            .attr('y2', (d, i) => Y((i - 1) % props.recordHeight))


            .attr("stroke", (d) => d.class === 'b1' ? props.color1 : props.color2)

            .attr("fill", "none")
            // .attr("stroke-width", (d,i) => {
            //     if (i % props.recordHeight === 0 || d.co === 1) {
            //         return 0
            //     } else {
            //         return 1
            //     }
            // })
            .attr("stroke-width", (d, i) => {
                if (i % props.recordHeight === 0) {
                    return 0
                } else {
                    return .25
                }
            })
            .attr("opacity", () => props.agentType === 'human' ? .9 : .4);






















        gRecord.selectAll('.response-line')
            .data(myData)
            .join(
                enter => enter.append("line").attr("class", "response-line"),
                update => update.attr("class", "updated-response-line"),
                exit => exit.remove()
            )
            .attr('x1', (d) => X(d.delta_t))
            .attr('x2', (d) => X(d.delta_t))
            .attr('y1', (d, i) => Y((i - 1) % props.recordHeight))
            .attr('y2', (d, i) => Y(i % props.recordHeight))

            .attr("stroke", (d) => d.class === 'class1' ? props.color1 : props.color2)
            // .attr("stroke-width", (d) => {
            //     if (d.eventIndex % props.recordHeight === 0 || d.co === 1) {
            //         return 0
            //     } else {
            //         return 1
            //     }
            // })
            .attr("stroke-width", (d, i) => {
                if (i % props.recordHeight === 0) {
                    return 0
                } else {
                    return .25
                }
            })
            .attr("fill", "none")
            .attr("opacity", () => props.agentType === "human" ? .9 : .4);

















        gRecord.selectAll('circle')
            .data(myData)
            .join(
                enter => enter.append('circle').attr("class", "new"),
                update => update.attr("class", "updated"),
                exit => exit.remove()
            )
            .attr("cx", (d) => X(d.delta_t))
            .attr("cy", (d, i) => {
                return Y(i % props.recordHeight)
            })
            .attr("r", (d) => d.reinforced === true ? 3 : 3)
            .attr("stroke-width", (d) => d.reinforced === true ? 1 : 1)


            // .attr("fill", (d) => d.class === 'b1' ? props.color1 : props.color2)
            .attr("fill", (d) => {
                if (d.class === "class1" && d.consequence === true) {
                    return props.color1
                } else if (d.class === "class2" && d.consequence === true) {
                    return props.color2
                } else {
                    return '#1d2731'
                }
            })

            .attr("stroke", (d) => d.class === 'class1' ? props.color1 : props.color2)

            // .attr("transform", `translate(${-1}, ${-1})`)
            .attr("opacity", () => props.agentType === "human" ? .9 : .4);




        // if (!props.events) {

        //     gRecord.append("rect").attr("class", "intro-text")
        //         .attr("x", 20).attr("y", 20)
        //         .attr("width", 300)
        //         .attr("height", 75)
        //         .attr("stroke", '#aaa')
        //         .attr("stroke-width", 0)

        //     gRecord.append("text").attr("class", "intro-text")
        //         .text('Verification is done by comparing')
        //         .attr("x", 50).attr("y", 50)
        //         .attr("fill", 'rgb(55, 201, 201)')
        //         .attr("font-size", '1rem')
        //         .attr("font-weight", 400)

        //     gRecord.append("text").attr("class", "intro-text")
        //         .text('the output with that of live agents.')
        //         .attr("x", 50).attr("y", 75)
        //         .attr("fill", 'rgb(55, 201, 201)')
        //         .attr("font-size", '1rem')
        //         .attr("font-weight", 400)
        // }





        //  ETBD  ==================================    ETBD



        if (props.etbdEvents) {


            let etbdData = props.etbdEvents.filter((item) => (item.cls === "b1" || item.cls === "b2"))



            const gEtbdRecord = d3.select(refEtbdRecord.current);
            gEtbdRecord.attr("transform", `translate(${margin.left}, ${margin.top})`);


            gEtbdRecord.select('.xAxis1')
                .attr("transform", "translate(0," + height + ")")
                .call(
                    d3
                        .axisBottom(Xetbd)
                        .tickPadding(30)
                        .ticks(5)
                        .tickFormat((d) => d === 0 ? `generations` : d)

                )
                .selectAll('text')
                // .transition().duration(1000)
                .attr('opacity', () => {
                    return props.agentType === 'etbd' ? .9 : .4
                })
                .selectAll('path')
                .attr('stroke-width', .5)


            gEtbdRecord.select('.yAxis1')
                .call(
                    d3
                        .axisLeft(Y)
                        .tickPadding(10)
                        .ticks(0)
                    // .tickValues([0, props.recordHeight * .33, props.recordHeight * .67, props.recordHeight])
                    // .tickSizeOuter(-width)
                )
                .selectAll('path')
                .attr('stroke-width', .5)

            //     -----------------------------------------------------

            gEtbdRecord.selectAll('.time-line')
                .data(etbdData)
                .join(
                    enter => enter.append("line").attr("class", "time-line"),
                    update => update.attr("class", "updated-time-line"),
                    exit => exit.remove()
                )

                .attr('x1', (d, i) => {
                    if (i > 0) {
                        return Xetbd(etbdData[i - 1].g)
                    } else {
                        Xetbd(d.irt)
                    }
                })
                .attr('x2', (d) => Xetbd(d.g))
                .attr('y1', (d, i) => Y((i - 1) % props.recordHeight))
                .attr('y2', (d, i) => Y((i - 1) % props.recordHeight))

                .transition().delay((d, i) => i * 150)

                .attr("stroke", (d) => {
                    if (d.cls === "b1") {
                        return props.color1
                    } else if (d.cls === "b2") {
                        return props.color2
                    } else {
                        return '#aaa'
                    }
                })

                .attr("fill", "none")

                .attr("stroke-width", (d, i) => {
                    if (i % props.recordHeight === 0) {
                        return 0
                    } else {
                        return .25
                    }
                })
                .attr("opacity", () => props.agentType === 'etbd' ? .9 : .4)







            gEtbdRecord.selectAll('.response-line')
                .data(etbdData)

                .join(
                    enter => enter.append("line").attr("class", "response-line"),
                    update => update.attr("class", "updated-response-line"),
                    exit => exit.remove()
                )
                .attr('x1', (d) => Xetbd(d.g))
                .attr('x2', (d) => Xetbd(d.g))
                .attr('y1', (d, i) => Y((i - 1) % props.recordHeight))
                .attr('y2', (d, i) => Y(i % props.recordHeight))

                .transition().delay((d, i) => i * 150)

                .attr("stroke", (d) => {
                    if (d.cls === "b1") {
                        return props.color1
                    } else if (d.cls === "b2") {
                        return props.color2
                    } else {
                        return '#555'
                    }
                })
                .attr("stroke-width", (d, i) => {
                    if (i % props.recordHeight === 0) {
                        return 0
                    } else {
                        return .25
                    }
                })
                .attr("fill", "none")
                .attr("opacity", () => props.agentType === 'etbd' ? .9 : .4);



            gEtbdRecord.selectAll('circle')
                .data(etbdData)

                .join(
                    enter => enter.append('circle').attr("class", "new"),
                    update => update.attr("class", "updated"),
                    exit => exit.remove()
                )

                .attr("cx", (d) => Xetbd(d.g))
                .attr("cy", (d, i) => {
                    return Y(i % props.recordHeight)

                })
                .transition().delay((d, i) => i * 150)
                .attr("r", (d) => d.rnf === true ? 3 : 3)


                .attr("stroke-width", (d) => d.rnf === true ? 1 : 1)
                .attr("stroke", (d) => {
                    if (d.cls === "b1") {
                        return props.color1
                    } else if (d.cls === "b2") {
                        return props.color2
                    } else {
                        return '#555'
                    }
                })
                .attr("fill", (d) => {
                    if (d.cls === "b1" && d.rnf === true) {
                        return props.color1
                    } else if (d.cls === "b2" && d.rnf === true) {
                        return props.color2
                    } else {
                        return 'none'
                    }
                })
                .attr("opacity", () => props.agentType === 'etbd' ? .9 : .4)

            // .attr("transform", `translate(${-1}, ${-1})`)



            // gEtbdRecord.selectAll('.text-ems')
            //     .data(etbdData)
            //     .join(
            //         enter => enter.append('text').attr("class", "text-ems"),
            //         update => update.attr("class", "text-ems-updated"),
            //         exit => exit.remove()
            //     )
            //     .text((d) => (d.cls === "b1" || d.cls === "b2") ? d.ems : null)
            //     .attr("x", (d) => Xetbd(d.g))
            //     .attr("y", (d, i) => {
            //         // return Y(d.eventIndex % props.recordHeight)
            //         return Y(i % props.recordHeight)
            //     })
            //     .attr("stroke-width", (d) => d.rnf === true ? 1 : 0)
            //     .attr("fill", (d) => {
            //         if (d.cls === "b1") {
            //             return props.color1
            //         } else if (d.cls === "b2") {
            //             return props.color2
            //         } else {
            //             return '#555'
            //         }
            //     })
            //     .attr("transform", `translate(${-15}, ${-10})`)
            //     .style("font-size", ".5rem")



        } // end of if etbd data exists ... 



    },
        [refRecord, props]
    );




    return (
        <svg
            id='svgCumulativeRecord'
            style={{
                width: svgWidth,
                height: svgHeight,
                margin: 'auto',
            }}
            key={nanoid()}
        >
            <g id='gRecord'
                ref={refRecord}
            >
                <g className='xAxis'  ></g>
                <g className='yAxis'></g>


                refEtbdRecord
            </g>

            <g id='gEtbdRecord'
                ref={refEtbdRecord}
            >
                <g className='xAxis1'  ></g>
                <g className='yAxis1'></g>


            </g>
        </svg>
    )
}