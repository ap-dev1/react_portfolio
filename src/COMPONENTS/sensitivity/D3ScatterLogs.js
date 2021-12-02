

import * as d3 from "d3";

import { useEffect } from "react";
import { useRef } from "react";
//import { useState } from "react";

//import regression from "regression";
const regression = window.regression;


export default function D3ScatterLogs(props) {

    const refScatterLogs = useRef()



    useEffect(() => {

        let margin = { top: 75, left: 75, bottom: 75, right: 75 }

        let svgWidth = document.getElementById("svgScatterLogs").clientWidth
        let svgHeight = document.getElementById("svgScatterLogs").clientHeight

        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom


        //    ---------------   POSITION  ------------------------

        let scatterLogs = d3.select(refScatterLogs.current)
            .attr("transform", `translate(${margin.left},${margin.top})`)




        //    ---------------   DATA PREP  ------------------------
        props.data.forEach((sch) => {
            sch.ratioB = (sch.scheduleData.b1 / sch.scheduleData.b2).toFixed(2)
            sch.ratioR = (sch.scheduleData.r1 / sch.scheduleData.r2).toFixed(2)
            sch.logB = Math.log10(sch.scheduleData.b1 / sch.scheduleData.b2).toFixed(2)
            sch.logR = Math.log10(sch.scheduleData.r1 / sch.scheduleData.r2).toFixed(2)
        })

        //let dataX = Array.from(new Set(props.data.map(d => d.logR)))
        //let dataY = Array.from(new Set(props.data.map(d => d.logB)))


        // console.log("dataX: ", dataX)
        // console.log("dataY: ", dataY)

        //    ---------------   SCALES  ------------------------


        // The chart must be square, so the smallest dimension
        //  becomes the range for both axes: 
        let rangeX = [0, d3.min([width, height])]
        let rangeY = [d3.min([width, height]), 0]

        let tickValuesX = [-2, 0, 2]
        let tickValuesY = [-2, 0, 2]
        let myTickValues = d3.range(d3.min(tickValuesX), d3.max(tickValuesX), 0.5)

        // let tickValuesX = [-.5, 0, .5]
        // let tickValuesY = [-.5, 0, .5]

        // let tickValuesX = [-.10, 0, .10]
        // let tickValuesY = [-.10, 0, .10]
        // let myTickValues = d3.range(d3.min(tickValuesX), d3.max(tickValuesX), 0.05)

        myTickValues.push(d3.max(tickValuesX))

        let domainX = [d3.min(tickValuesX), d3.max(tickValuesX)]
        let domainY = [d3.min(tickValuesY), d3.max(tickValuesY)]

        let X_Linear = d3.scaleLinear().range(rangeX).domain(domainX)
        let Y_Linear = d3.scaleLinear().range(rangeY).domain(domainY)



        //    ---------------   TITLES  ------------------------

        // scatter2.selectAll(".axisLabel").remove();

        // scatter2
        //     .append('text').attr("class", "axisLabel")
        //     .text("Log(B1/B2)")
        //     .attr("x", -margin.left * 0.8)
        //     .attr("y", height * 0.55)
        //     .attr("fill", "#ccc")
        //     .attr("font-family", "Courier New")
        //     .attr("font-size", "14px")

        // scatter2
        //     .append('text').attr("class", "axisLabel")
        //     .text("Log(r1/r2)")
        //     .attr("x", width * 0.12)
        //     .attr("y", height * 1.30)
        //     .attr("fill", "#ccc")
        //     .attr("font-family", "Courier New")
        //     .attr("font-size", "14px")



        //    ---------------   AXES  ------------------------

        scatterLogs.select(".scatterLogsX")
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(X_Linear)
                    .tickPadding(10)
                    //.tickValues([0])
                    //.tickValues(tickValuesX)
                    .tickValues(myTickValues)
                    .tickSize(-d3.min([height, width]))
            )
            .selectAll("path").remove()
            .selectAll("text").style("font-size", "10px")


        scatterLogs.select(".scatterLogsY")
            .call(
                d3
                    .axisLeft(Y_Linear)
                    .tickPadding(10)
                    //.tickValues([0])
                    //.tickValues(tickValuesY)
                    .tickValues(myTickValues)
                    .tickSize(-d3.min([height, width]))
            )
            .selectAll("path").remove()

        //    ---------------   HOVER  ------------------------

        let onHover = (e, d) => {
            let tgt = e.explicitOriginalTarget
            let circleId = tgt.attributes[1].value

            let bb = props.data.filter((item) => {
                return circleId === `Schedule${item.schedule}`
            })

            //let bbb1 = (bb[0].scheduleData.b1 / bb[0].scheduleData.b2).toFixed(1)
            //let bbb2 = (bb[0].scheduleData.r1 / bb[0].scheduleData.r2).toFixed(1)

            let xx = parseInt(tgt.attributes[2].value)
            let yy = parseInt(tgt.attributes[3].value)

            e.target.style.stroke = "cyan"
            e.target.style.fill = "cyan"

            scatterLogs.append("text")
                .attr("x", xx - 50)
                .attr("y", yy - 25)
                //.text(`${bbb1}, ${bbb2}`)
                .text(circleId)
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


        //   -----------------------   DATA POINTS   ------------------------

        scatterLogs
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
            .attr("cx", (d) => X_Linear(d.logR))
            .attr("cy", (d) => Y_Linear(d.logB))

            .attr("r", 5)
            .attr("stroke-width", 1)
            .attr("fill", "#ffffff89")
            .attr("stroke", "white");



        //  -----------------------    REGRESSION     --------------------


        let regData = [];
        props.data.forEach((item) => {
            regData.push(
                [parseFloat(item.logR), parseFloat(item.logB)]
            )
        })

        const result = regression.linear(regData)
        const gradient = result.equation[0];
        const yIntercept = result.equation[1];
        const predictedB = result.predict;

        // console.log("regression: ", result)
        // console.log("gradient: ", gradient)
        // console.log("yIntercept: ", yIntercept)
        // console.log("10^INTERCEPT: ", 10 ** yIntercept)
        // console.log("result.string: ", result.string)
        // console.log("predictedB: ", predictedB)
        // console.log("predictedB: ", predictedB(-1))
        // console.log("predictedB: ", predictedB(1))


        //const regLine = d3.line().data(regData)
        //scatterLogs.append("path").attr("datum", regLine)

        scatterLogs.selectAll(".fittedLine").remove()
        scatterLogs.selectAll(".parameters").remove()

        // scatterLogs.append("line").attr("class", "fittedLine")
        //     .attr("x1", X_Linear(d3.min(tickValuesX) * gradient + yIntercept))
        //     .attr("y1", Y_Linear(d3.min(tickValuesY) * gradient + yIntercept))
        //     .attr("x2", X_Linear(d3.max(tickValuesX) * gradient + yIntercept))
        //     .attr("y2", Y_Linear(d3.max(tickValuesY) * gradient + yIntercept))
        //     .attr("stroke", "red")
        //     .attr("stroke-width", 2)


        scatterLogs.append("line").attr("class", "fittedLine")
            .attr("x1", X_Linear(predictedB(d3.min(tickValuesX))[0]))
            .attr("y1", Y_Linear(predictedB(d3.min(tickValuesX))[1]))
            .attr("x2", X_Linear(predictedB(d3.max(tickValuesX))[0]))
            .attr("y2", Y_Linear(predictedB(d3.max(tickValuesX))[1]))
            .attr("stroke", "red")
            .attr("stroke-width", 2)


        scatterLogs.append("line").attr("class", "perfectMatching")
            .attr("x1", X_Linear(d3.min(tickValuesX) * 1.00 + 0.00))
            .attr("y1", Y_Linear(d3.min(tickValuesY) * 1.00 + 0.00))
            .attr("x2", X_Linear(d3.max(tickValuesX) * 1.00 + 0.00))
            .attr("y2", Y_Linear(d3.max(tickValuesY) * 1.00 + 0.00))
            .attr("stroke", "#bbb")
            .attr("stroke-width", 1)
            .attr("stroke-dasharray", 0)

        scatterLogs.append("text").attr("class", "parameters").attr("x", -50).attr("y", -50).text(`slope(a): ${gradient}; intercept: ${yIntercept};`).attr("fill", "#fff")

    }, [props.data]);






    return (

        <div id="divScatterLogs">

            <svg id="svgScatterLogs">

                <g ref={refScatterLogs}>

                    <g className="scatterLogsX"></g>

                    <g className="scatterLogsY"></g>

                </g>

            </svg>

        </div>
    )
}

