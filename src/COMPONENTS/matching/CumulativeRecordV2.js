import './cumulative-record.sass';
import { dataSample } from "./dataSample";

import * as d3 from "d3";
import { nanoid } from "nanoid";
import _ from "lodash";
import { useRef, useEffect, useLayoutEffect, useState } from "react";

import PopOverV2 from '../abc/PopOverV2';
import etbdState from '../etbd/etbdState';
import myColors from '../../styles/_colors.sass';


export default function CumulativeRecordV2(props) {

    const refRecord = useRef(null);
    const refEtbdRecord = useRef(null);

    let svgWidth = 300;
    let svgHeight = 200;
    let margin = { top: 10, left: 40, bottom: 40, right: 10 };
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;

    const X = d3.scaleLinear()
        .range([0, width])
        .domain([0, props.timeLimit * 1000]);

    const Y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, props.recordHeight]);

    // const Xetbd = d3.scaleLinear()
    //     .range([0, width])
    //     .domain([0, 100]);


    // ------------------------------------------------------------   CHART  BODY

    useLayoutEffect(() => {

        //--------------------------------------------
        d3.select(refEtbdRecord.current).attr("transform", `translate(${margin.left}, ${margin.top})`);
        //---------------------------------------------
        const gRecord = d3.select(refRecord.current);
        gRecord.attr("transform", `translate(${margin.left}, ${margin.top})`);

        gRecord.select('.xAxis')
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(X)
                    .tickPadding(10)
                    // .tickFormat((d) => d === 0 ? `seconds` : `${d / 1000} s`)
                    // .tickFormat((d) => d / 1000 === rops.timeLimit ? `${d / 1000} seconds` : `${d / 1000} s`)

                    .ticks(0)
                // .tickValues([(timeLimit / 2) * 1000, timeLimit * 1000])
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
                return props.agentType === "human" ? .9 : .4
            })
        // .selectAll('path')
        // .attr('stroke', '#333333')

        gRecord.select('.yAxis')
            .call(
                d3
                    .axisLeft(Y)
                    .tickPadding(10)
                    .ticks(4)
                // .tickValues([0, props.recordHeight * .33, props.recordHeight * .67, props.recordHeight])
                // .tickSizeOuter(-width)
            )
        // .selectAll('path')
        // .attr('stroke-width', .5)

        const gLabels = gRecord.append('g').attr("class", 'axes-labels')

        gLabels.append("text").text('This')
            .attr("x", 15)
            .attr("y", .05 * height)
            .attr("fill", props.color1)
            .attr("font-size", '.8rem')
            .attr("font-weight", 100)

        gLabels.append("text").text('+')
            .attr("x", 50)
            .attr("y", .05 * height)
            .attr("fill", "#888888")
            .attr("font-size", '.8rem')
            .attr("font-weight", 100)

        gLabels.append("text").text('That')
            .attr("x", 70)
            .attr("y", .05 * height)
            .attr("fill", props.color2)
            .attr("font-size", '.8rem')
            .attr("font-weight", 100)

        // gLabels.append("text").text('seconds / generations')

        gLabels.append("text")
            // .text('time')
            // .text(() => { return props.agentType === 'etbd' ? 'generations' : 'time' })
            .text(() => {
                if (props.agentType && props.agentType === 'etbd') {
                    return 'generations'
                } else {
                    return 'time'
                }
            })
            .attr("x", (.9 * width) / 2)
            .attr("y", Y(0))
            .attr("dx", 0)
            .attr("dy", 25)
            // .attr("fill", "#777")

            // .fill(() => {
            //     if (props.agentType && props.agentType === 'etbd') {
            //         return '#00ff00'
            //     } else {
            //         return '#ff9900'
            //     }
            // })
            .attr('fill', () => {
                if (props.agentType && props.agentType === 'etbd') {
                    return '#00ff00'
                } else {
                    return '#ff9900'
                }
            })

            .attr("font-size", '.9rem')
            .attr("font-weight", 100)

        // gLabels.append("text")
        //     .text('seconds')
        //     .attr('id', 'time-units')
        //     .attr("x", X(0))
        //     .attr("y", Y(0))
        //     .attr("dx", 5)
        //     .attr("dy", 15)
        //     .attr("fill", "#555555")
        //     .attr("font-size", '.8rem')
        //     .attr("font-weight", 100)

        // gLabels.append("text")
        //     .text(props.timeLimit)
        //     .attr('id', 'time-limit')
        //     .attr("x", width)
        //     .attr("y", Y(0))
        //     .attr("dx", 0)
        //     .attr("dy", 25)
        //     .attr("fill", "#555")
        //     .attr("font-size", '1rem')
        //     .attr("font-weight", 100)

        // LIVE DATA  ------------------------------   LIVE DATA 

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
            .attr("r", 3)
            .attr("stroke-width", 1)
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
            .attr("opacity", () => props.agentType === "human" ? .9 : .4)
            .attr("border-radius", '50%')
        // .attr("border-radius", (d) => d.class === 'class1' ? props.color1 : props.color2);









        //  ----     ETBD stuff   -------------------------

        if (props.etbdEvents && props.etbdEvents.length > 1) {

            let etbdData = props.etbdEvents.filter((item) => (item.cls === "b1" || item.cls === "b2"))

            etbdData.forEach((item, i) => {
                if (etbdData[i - 1]) {
                    item['irt'] = item.g - etbdData[i - 1].g
                }
            })
        }


    },
        [refRecord, props]
    );

    ///////////////////////////////////////////////////////







    return (
        <div className="record-wrapper">



            <svg id='svgCumulativeRecord'
                style={{
                    width: svgWidth,
                    height: svgHeight,
                }}
            >
                <g id='gRecord' ref={refRecord}>
                    <g className='xAxis'  ></g>
                    <g className='yAxis'></g>
                </g>

                <g id='gEtbdRecord' ref={refEtbdRecord}>
                    <g className='xAxis1'  ></g>
                    <g className='yAxis1'></g>
                </g>
            </svg>
        </div>
    )
}