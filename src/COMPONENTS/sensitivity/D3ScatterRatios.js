

import * as d3 from "d3";
import { useEffect } from "react";
import { useRef } from "react";



export default function D3ScatterRatios(props) {

    //const refSVG = useRef()
    const refScatterRatios = useRef()
    const refPredictedRatios = useRef()



    useEffect(() => {

        let margin = { top: 50, left: 120, bottom: 100, right: 20 }

        let svgWidth = document.getElementById("svgScatterRatios").clientWidth
        let svgHeight = document.getElementById("svgScatterRatios").clientHeight

        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom


        //    ---------------   POSITION  ------------------------

        let scatter2 = d3.select(refScatterRatios.current)
            .attr("transform", `translate(${margin.left},${margin.top})`)

        let scatter222 = d3.select(refPredictedRatios.current)
            .attr("transform", `translate(${margin.left},${margin.top})`)


        //    ---------------   SCALES  ------------------------


        // The chart must be square, so the SMALLEST dimension
        //  becomes the range for both axes: 
        let rangeX = [0, d3.min([width, height])]
        let rangeY = [d3.min([width, height]), 0]

        //let dataX = Array.from(new Set(props.data.map(d => d.scheduleData.r1 / d.scheduleData.r2)))
        //let dataY = Array.from(new Set(props.data.map(d => d.scheduleData.b1 / d.scheduleData.b2)))
        let dataX = Array.from(props.data.map(d => d.scheduleData.r1 / d.scheduleData.r2))
        let dataY = Array.from(props.data.map(d => d.scheduleData.b1 / d.scheduleData.b2))


        // keep it square, using the HIGHEST value:
        let highestValue = d3.max([d3.max(dataX), d3.max(dataY)])

        let domainX = [0, highestValue]
        let domainY = [0, highestValue]

        let X_Linear = d3.scaleLinear().range(rangeX).domain(domainX)
        let Y_Linear = d3.scaleLinear().range(rangeY).domain(domainY)



        //    ---------------   TITLES  ------------------------

        scatter2.selectAll(".axisLabel").remove();

        scatter2
            .append('text').attr("class", "axisLabel")
            .text("y")
            .attr("x", -margin.left * 0.5)
            .attr("y", height * 0.55)
            .attr("fill", "#ccc")
            .attr("font-family", "Times New Roman")
            .attr("font-size", "18px")

        scatter2
            .append('text').attr("class", "axisLabel")
            .text("x")
            .attr("x", width * 0.30)
            .attr("y", height * 1.30)
            .attr("fill", "#ccc")
            .attr("font-family", "Times New Roman")
            .attr("font-size", "18px")



        //    ---------------   AXES  ------------------------

        scatter2.select(".scatterRatiosX")
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(X_Linear)
                    .tickPadding(10)
                    //.tickValues(tickValuesX)
                    .ticks(12)
                    .tickSize(-d3.min([height, width]))
            )

        scatter2.select(".scatterRatiosY")
            .call(
                d3
                    .axisLeft(Y_Linear)
                    .tickPadding(10)
                    //.tickValues(tickValuesY)
                    .tickSize(-d3.min([height, width]))
                    .ticks(12)
            )

        //    ---------------   HOVER  ------------------------

        let onHover = (e, d) => {
            let tgt = e.explicitOriginalTarget
            let circleId = tgt.attributes[1].value

            let bb = props.data.filter((item) => {
                return circleId === `Schedule${item.schedule}`
            })

            let bbb1 = (bb[0].scheduleData.b1 / bb[0].scheduleData.b2).toFixed(1)
            let bbb2 = (bb[0].scheduleData.r1 / bb[0].scheduleData.r2).toFixed(1)

            let xx = parseInt(tgt.attributes[2].value)
            let yy = parseInt(tgt.attributes[3].value)

            e.target.style.stroke = "cyan"
            e.target.style.fill = "cyan"

            scatter2.append("text")
                .attr("x", xx - 50)
                .attr("y", yy - 25)
                .text(`${bbb2}, ${bbb1}`)
                .attr("class", "d3tooltip")
                .style("fill", "white")
                .attr("font-size", "14px")
                .attr("font-family", "Courier New");
        };


        let hoverOver = (e, d) => {
            d3.selectAll(".d3tooltip").remove()
            e.target.style.stroke = "white"
            e.target.style.fill = "#ffffff89"
        };


        //   -----------------------   PERFECT MATCHING   ------------------------
        // plot line from 0 to max of dataX and dataY, maxRatio:

        let maxRatio = (d3.max([d3.max(dataX), d3.max(dataY)])).toFixed(1)
        scatter2.append("line")
            .attr("x1", X_Linear(0))
            .attr("y1", Y_Linear(0))
            .attr("x2", X_Linear(maxRatio))
            .attr("y2", Y_Linear(maxRatio))
            .attr("class", "perfectMatching")
            .attr("stroke", "#aaa")
            .attr("stroke-width", 1)
            .attr("stroke-dasharray", 2)


        //   -----------------------   DATA POINTS   ------------------------

        scatter2
            .selectAll("circle")
            .data(props.data)
            .join(
                enter => enter.append('circle').attr("class", "new")
                    .on("mouseover", onHover)
                    .on('mouseout', hoverOver),
                update => update.attr("class", "update"),
                exit => exit.remove()
            )
            // .transition()
            // .duration(1000)
            .on("mouseover", d => {
                onHover(d)
            })
            .on('mouseout', hoverOver)
            .attr("id", (d) => `Schedule${d.schedule}`)
            .attr("cx", (d) => X_Linear(d.scheduleData.r1 / d.scheduleData.r2))
            .attr("cy", (d) => Y_Linear(d.scheduleData.b1 / d.scheduleData.b2))
            .attr("r", 5)
            .attr("stroke-width", 1)
            .attr("fill", "#ffffff75")
            .attr("stroke", "white")


        //   -----------------------   PREDICTED VALUES  ------------------------

        console.log("bias: ", 10 ** (-0.06))
        let xRange = d3.range(0, 2.2, 0.1)
        let yPrimeList = []
        xRange.forEach(val => yPrimeList.push(
            [X_Linear(val), Y_Linear(0.87 * val ** 0.85)]
        ))

        var myLine222 = d3.line().curve(d3.curveCardinal)
        var myPath = myLine222(yPrimeList)

        scatter2.append("path").attr("id", "muie")
            .attr("d", myPath)
            .style("stroke", "red")
            .style("stroke-width", 2)
            .attr("fill", "none")
            .style("stroke-dasharray", 0);



    }, [props.data]);






    return (

        <div id="divScatterRatios">

            <svg id="svgScatterRatios">

                <g ref={refScatterRatios}>

                    <g className="scatterRatiosX"></g>

                    <g className="scatterRatiosY"></g>

                    <path id="muieMami"></path>
                </g>


            </svg>

        </div>
    )
}

