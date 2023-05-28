import './nbt_styles.sass'
import * as d3 from "d3";
import { nanoid } from "nanoid"
import { useRef, useState, useEffect } from "react";
import { nbtData } from './nbtData'


export default function Nbt2008(props) {

    const refBaseline = useRef()
    // const refBias = useRef()


    const [margin, setMargin] = useState({ top: 75, left: 75, bottom: 50, right: 75 })

    const [width] = useState(() => {
        return (
            400 - margin.left - margin.right
        )
    })

    const [height] = useState(() => {
        return (
            300 - margin.top - margin.bottom)

    })

    const [X] = useState(() => {
        let x = d3.scaleLinear()
            .range([0, width])
            .domain([0, 70])

        return x
    })


    const [Y] = useState(() => {
        let y = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 2.5])

        return y
    })


    const [biasData] = useState(() => {
        let allData = nbtData()
        //console.log("allData: ", allData)
        //console.log("-----------------: ")

        let bias = allData[1]
        //console.log("bsn: ", bsn)

        //let xxx = bsn.filter(item => {return item.study === 'original'})[0]
        //console.log("original: ", xxx)

        return bias
    })



    useEffect(() => {

        let gBaseline = d3.select(refBaseline.current)
            .attr("transform", `translate(${margin.left}, ${margin.top})`)


        //    ---------------   AXES  ------------------------

        gBaseline.select(".gX")
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(X)
                    .tickPadding(15)
                    .tickValues([10, 25, 40, 55, 70])
                    .tickFormat((d) => { return `L${d}-40` })
            )

        gBaseline.select(".gY")
            .call(
                d3
                    .axisLeft(Y)
                    .tickPadding(10)
                    .tickValues([0.0, 0.5, 1, 1.5, 2, 2.5])
            )


        // _______________________   data  POINTS  _______________________

        gBaseline
            .selectAll(".slope-original")
            .data(
                biasData.filter(item => { return item.study === 'original' })[0].conditions
            )
            .join(
                enter => enter.append('circle').attr("class", "slope-original"),
            )
            //.attr("cx", (d) => X(d.magnRatio))
            .attr("cx", (d) => X(d.miuLeft))

            .attr("cy", (d) => Y(d.slopeMean))
            .attr("r", 2)
            .attr("stroke-width", 0)
            .attr("fill", "#c9cecc75")
            .attr("stroke", "#c9cecc75")


        gBaseline
            .selectAll(".slope-replication")
            .data(
                biasData.filter(item => { return item.study === 'replication' })[0].conditions
            )
            .join(
                enter => enter.append('circle').attr("class", "slope-replication"),
            )
            .attr("cx", (d) => X(d.miuLeft))
            .attr("cy", (d) => Y(d.slopeMean))
            .attr("r", 2)
            .attr("stroke-width", 0)
            .attr("fill", "#c9cecc75")
            .attr("stroke", "#c9cecc75")


        gBaseline
            .selectAll(".slope-nbt")
            .data(
                biasData.filter(item => { return item.study === 'nbt' })[0].conditions
            )
            .join(
                enter => enter.append('circle').attr("class", "slope-nbt"),
            )
            .attr("cx", (d) => X(d.miuLeft))
            .attr("cy", (d) => Y(d.slopeMean))
            .attr("r", 2)
            .attr("stroke-width", 1)
            .attr("fill", "#6ED0AA")
            .attr("stroke", "#6ED0AA")


        //  CIRCLES BIAS POINTS:


        gBaseline
            .selectAll(".bias-original")
            .data(
                biasData.filter(item => { return item.study === 'original' })[0].conditions
            )
            .join(
                enter => enter.append('circle').attr("class", "bias-original"),
            )
            //.attr("cx", (d) => X(d.magnRatio))
            .attr("cx", (d) => X(d.miuLeft))

            .attr("cy", (d) => Y(d.biasMean))
            .attr("r", 2)
            .attr("stroke-width", 0)
            .attr("fill", "#c9cecc75")
            .attr("stroke", "#c9cecc75")


        gBaseline
            .selectAll(".bias-replication")
            .data(
                biasData.filter(item => { return item.study === 'replication' })[0].conditions
            )
            .join(
                enter => enter.append('circle').attr("class", "bias-replication"),
            )
            .attr("cx", (d) => X(d.miuLeft))
            .attr("cy", (d) => Y(d.biasMean))
            .attr("r", 2)
            .attr("stroke-width", 0)
            .attr("fill", "#c9cecc75")
            .attr("stroke", "#c9cecc75")


        gBaseline
            .selectAll(".bias-nbt")
            .data(
                biasData.filter(item => { return item.study === 'nbt' })[0].conditions
            )
            .join(
                enter => enter.append('circle').attr("class", "bias-nbt"),

            )
            .attr("cx", (d) => X(d.miuLeft))
            .attr("cy", (d) => Y(d.biasMean))
            .attr("r", 2)
            .attr("stroke-width", 1)
            .attr("fill", "#6ED0AA")
            .attr("stroke", "#6ED0AA")



        // _______________________   data LINES / PATHS  _______________________


        // SLOPES:
        const lineGenerator = d3.line()
            .curve(d3.curveCatmullRom.alpha(.5))
            .x(d => X(d.miuLeft))
            .y(d => Y(d.slopeMean))

        const originalSlope = lineGenerator(biasData.filter(item => { return item.study === 'original' })[0].conditions)
        const replicationSlope = lineGenerator(biasData.filter(item => { return item.study === 'replication' })[0].conditions)
        const nbtSlope = lineGenerator(biasData.filter(item => { return item.study === 'nbt' })[0].conditions)


        // BIAS PARAMETERS:
        const lineGenerator2 = d3.line()
            .curve(d3.curveCatmullRom.alpha(.5))
            .x(d => X(d.miuLeft))
            .y(d => Y(d.biasMean))

        const originalBias = lineGenerator2(biasData.filter(item => { return item.study === 'original' })[0].conditions)
        const replicationBias = lineGenerator2(biasData.filter(item => { return item.study === 'replication' })[0].conditions)
        const nbtBias = lineGenerator2(biasData.filter(item => { return item.study === 'nbt' })[0].conditions)


        // APPEND SLOPE PATHS:

        gBaseline.append('path')
            .attr('d', originalSlope)
            .attr('fill', 'none')
            .style('stroke', '#c9cecc75')
            .style('stroke-width', 1)

        gBaseline.append('path')
            .attr('d', replicationSlope)
            .attr('fill', 'none')
            .style('stroke-width', 1)
            .attr("stroke-dasharray", 5)

        gBaseline.append('path')
            .attr('d', nbtSlope)
            .attr('fill', 'none')
            .style('stroke', '#6ED0AA')
            .style('stroke-width', 1)


        // APPEND BIAS PATHS:

        gBaseline.append('path')
            .attr('d', originalBias)
            .attr('fill', 'none')
            .style('stroke', '#c9cecc75')
            .style('stroke-width', 1)

        gBaseline.append('path')
            .attr('d', replicationBias)
            .attr('fill', 'none')
            .style('stroke-width', 1)
            .attr("stroke-dasharray", 5)

        gBaseline.append('path')
            .attr('d', nbtBias)
            .attr('fill', 'none')
            .style('stroke', '#6ED0AA')
            .style('stroke-width', 1)



        // _______________________   LABELS  _______________________

        gBaseline.append('text')
            .text('Linear selection, unequal magnitudes')
            .attr("fill", "#ffffffaa")
            .attr("x", 10)
            .attr("y", -45)
            .attr("font-size", "15px")
        //.style("font-variant", "small-caps")
        //.style("letter-spacing", "1.5px")


        gBaseline.append('text')
            .text('(Studies 1 and 2 from McDowell et. al. (2008)')
            .attr("fill", "#ffffff70")
            .attr("x", 30)
            .attr("y", -25)
            .attr("font-size", "10px")


    }, []);






    return (

        <div id='divNbt2008' >

            <svg id='svgNbt2008'>


                <g
                    ref={refBaseline}
                    id='gBaseline'
                >
                    <g className="gX"></g>
                    <g className="gY"></g>
                    {/* <g className="gY2"></g> */}
                </g>


                {/* <g
                    ref={refBias}
                    id='gBias'
                >
                    <g className="gX"></g>
                    <g className="gY"></g>
                    <g className="gY2"></g>
                </g> */}

            </svg>

        </div>
    )
}

