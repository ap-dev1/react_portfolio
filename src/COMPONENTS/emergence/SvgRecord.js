import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import * as d3 from "d3"


export const MyD3Component = (props) => {

    const d3Container = useRef(null)

    useEffect(
        () => {
            if (props.data && d3Container.current) {
                // const svg = d3.select(d3Container.current)
                // const update = svg.append('g').selectAll('text').data(props.data)
                // update.enter()
                //     .append('text')
                //     .attr('x', (d, i) => (i + 1) * 50)
                //     .attr('y', 150)
                //     .attr("font-size", 14)
                //     .attr("fill", '#fff')
                //     .text((d) => d)
                // update.exit().remove()

                const svg = d3.select(d3Container.current)
                svg.append('text').attr('x', 100).attr('y', 140).text('generations').attr('fill', '#ccc').attr('font-size', '12px')
                svg.append('text').attr('x', 15).attr('y', 70).text('B').attr('fill', '#ccc').attr('font-size', '16px')

                svg.append('line')
                    .attr('x1', 50).attr('y1', 125)
                    .attr('x2', 50).attr('y2', 25)
                    .attr('stroke', '#ccc')
                    .attr('stroke-width', 1)

                svg.append('line')
                    .attr('x1', 50).attr('y1', 125)
                    .attr('x2', 200).attr('y2', 125)
                    .attr('stroke', '#ccc')
                    .attr('stroke-width', 1)


                const X = d3
                    .scaleLinear()
                    .domain([0, 10])
                    .range([0, 200]);

                const Y = d3
                    .scaleLinear()
                    .domain([10, 0])
                    .range([0, 100]);

                //let axisTime = svg.axisBottom(scaleTime);


                const gTime = svg
                    .append("g")
                    .attr("transform", `translate(100, ${-15})`)

                //gTime.call(axisTime);


                // const update = svg.append('g').selectAll('circle').data(props.data)
                // const update = gTime.selectAll('circle').data(props.data)

                // update.enter()
                //     .append('circle')
                //     .attr('cx', (d) => X(d.tn))
                //     .attr('cy', (d) => Y(d.tn))
                //     .attr("r", 3)
                //     .attr("stroke", '#ccc')
                //     .attr("stroke-width", 1)
                //     .attr("fill", '#555')

                // update.exit().remove()

                const update1 = gTime.selectAll('text').data(props.data.slice(2))

                update1.enter()
                    .append('text')
                    .attr('x', (d) => X(d.tn))
                    .attr('y', (d) => Y(d.tn))
                    // .attr("stroke", '#ccc')
                    // .attr("stroke-width", 1)

                    .attr('font-size', '10px')

                    .attr('fill', (d) => {
                        let item = d.population.filter(entry => entry.status === "emited")
                        if (item[0]) {
                            return '#eee'
                        } else {
                            return "#555"
                        }

                    })
                    .text((d) => {
                        let item = d.population.filter(entry => entry.status === "emited")
                        if (item[0]) {
                            return item[0].phenotype
                        } else {
                            console.log("item: ", item)
                            return "NaN"
                        }

                    })

                update1.exit().remove()
            }
        },
        [props.data, d3Container.current]
    )



    // svg1.append('circle').attr('cx', 150).attr('cy', 80).attr('r', 30).attr('fill', 'red')

    // d3.select('#emergenceSvgRec').append('circle').attr('cx', 150).attr('cy', 80).attr('r', 30).attr('fill', 'red')
    //console.log("svg record: ", svg1)

    // let scaleTime = d3
    //     .scaleLinear()
    //     .domain([0, 20])
    //     .range([0, 150]);

    // let axisTime = d3.axisBottom(scaleTime);

    // axisTime.ticks(10)
    // axisTime.tickValues([5, 10, 15])

    // let gTime = svg1
    //     .append("g")
    //     .style("font", "12px sans-serif")
    //     .attr("transform", `translate(25, ${120})`);

    // gTime.call(axisTime);


    // let scaleResponses = d3
    //     .scaleLinear()
    //     .domain([100, 0])
    //     .range([0, 150]);

    // let axisResponses = d3.axisLeft(scaleResponses);

    // let gResponses = svg1
    //     .append("g")
    //     .attr("stroke", '#fff')
    //     .attr("transform", `translate(35, 10)`);

    // gResponses.call(axisResponses);

    // svg1.append("text").text('responses')
    //     .attr('x', 50)
    //     .attr('y', 20)
    //     .attr("font-size", "10px")
    //     .attr("fill", "rgb(50, 200, 100")
    //     .attr("stroke", "#ff0000")

    //     .attr("font-weight", 300)
    //     .style("color", "#fff")

    // svg1.append("text").text('generations')
    //     .attr('x', 10)
    //     .attr('y', 50)
    //     .attr("font-size", "1rem")
    //     .attr("fill", "rgb(50, 200, 100")
    //     .attr("font-weight", 300)


    return (
        <svg ref={d3Container} key={nanoid()} className="svg-emergence-record">

            {/* <circle fill="red" cx={10} cy={30} r={10} fill="lime" id="testCircle"></circle>
            <rect fill="green" x={20} y={50} width={100} height={25} id="testRect"></rect>*/}

        </svg>
    )
}