// /* 
// d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv").then(function (data) {

//  */


//import React from "react";
import * as d3 from "d3";
import "./hamming_style.sass";

import { dec2bin, hdSelf, hdOther } from "./hammingFunctions";

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

// import parse from "html-react-parser"

function HeatMapHook(props) {

    const refHeatMap = useRef()
    const refHeatMapSmall = useRef()


    const [data, setData] = useState([])
    const [class1, setClass1] = useState([])
    const [classes, setClasses] = useState([])
    const [class2, setClass2] = useState([]) // just for hd-cod;

    const [hd_self, setSelf] = useState(0)
    const [hd_other, setOther] = useState(0)
    const [hd_cod, setCod] = useState(0)

    //const [plotAvg, setPlotAvg] = useState(true)
    const [plotAvg, setPlotAvg] = useState(false)



    // Creates the data and sets it as state; 
    // uses limits, supplied as props. 


    useEffect(() => {
        // let size = 41
        // let boundary2 = props.boundary1 + 1
        // let class1 = d3.range(props.boundary1 - size, props.boundary1 + 1)
        // let classes = d3.range(props.boundary1 - size, boundary2 + 1 + size)
        // let class2 = d3.range(props.boundary1 + 1, boundary2 + 1 + size)

        let class1 = d3.range(props.limit1, props.boundary1 + 1)
        let classes = d3.range(props.limit1, props.limit2 + 1)
        let class2 = d3.range(props.boundary2, props.limit2 + 1)

        let myData = []
        class1.forEach((b1) => {
            let g1 = dec2bin(10, b1)
            classes.forEach((b12) => {
                let g12 = dec2bin(10, b12)
                let hd = 0
                for (let i = 0; i < g12.length; i++) {
                    if (g1[i] !== g12[i]) {
                        hd = hd + 1
                    }
                }
                myData.push(
                    { b1: b1, b12: b12, hd: hd, g1: g1, g12: g12 }
                )
            })
        })


        // HD self, other, cod
        let hd1, hd2, hd3;
        if (classes.length > 0) {
            hd1 = hdSelf(class1)
            hd2 = hdOther(class1, class2)
            hd3 = Math.abs(hd1 - hd2)
        } else {
            hd1 = 0
            hd2 = 0
            hd3 = Math.abs(hd1 - hd2)
        }


        setData(myData)
        setClass1(class1)
        setClasses(classes)
        setClass2(class2)

        setSelf(hd1)
        setOther(hd2)
        setCod(hd3.toFixed(1))

    }, [props])



    // ===============================================

    useEffect(() => {
        let margin = { top: 60, left: 150, bottom: 50, right: 110 }
        //let margin = { top: 80, left: 100, bottom: 100, right: 325 }

        let colorGreen = 'rgb(28, 255, 28)'
        let colorOrange = 'rgb(255, 128, 49)'

        var greenOrange = d3.scaleLinear()
            .domain([1, 10])
            .range([colorGreen, colorOrange])

        let svgWidth
        let svgHeight

        if (document.getElementById("svgHeatMapHook")) {
            svgWidth = document.getElementById("svgHeatMapHook").clientWidth
            svgHeight = document.getElementById("svgHeatMapHook").clientHeight
        } else {
            svgWidth = 550
            svgHeight = 250
        }

        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom


        // SCALES:
        let myGroups = Array.from(new Set(data.map(d => d.b1)))
        let myVars = Array.from(new Set(data.map(d => d.b12)))

        let X_Band = d3.scaleBand().range([0, width]).domain(myVars)
        let Y_band = d3.scaleBand().range([height, 0]).domain(myGroups)


        let chartHeatMap = d3.select(refHeatMap.current).attr("transform",
            `translate(${margin.left},${margin.top})`);





        // CHART INFO:
        let chartInfo = chartHeatMap.select(".chartInfo")
            .attr("transform", `translate(${0},${0})`)

        chartInfo.selectAll("text").remove()

        // TITLE:
        chartInfo
            .append('text')
            .text("HeatmapHook.js")
            .attr("id", "chartTitle1")
            .attr("x", -130)
            .attr("y", -40)
            .attr("fill", "yellow")
            .attr("font-size", '16px')


        // HD SELF:
        chartInfo.append("text").attr("fill", "lime")
            .attr("font-size", "14px")
            .attr("x", 50)
            .attr("y", 160)
            .text(hd_self)

        // HD OTHER:
        chartInfo.append("text").attr("fill", "orange")
            .attr("font-size", "14px")
            .attr("x", 200)
            .attr("y", 160)
            .text(hd_other)

        // COMBINED:
        chartInfo.append("text").attr("fill", "cyan")
            .attr("font-size", "14px")
            .attr("x", 120)
            .attr("y", 180)
            .text(() => {
                // return `HDcod = | ${hd_self} - ${hd_other} | = ${hd_cod}`
                return hd_cod
            })




        // X-axis:
        chartHeatMap.select(".heatmapX")
            .attr("transform", `translate(0, ${height})`)
            .call(
                d3.axisBottom(X_Band)
                    .tickValues([])
                // .tickValues(classes)
                // .tickPadding(11)
            )
            .selectAll("text").remove()
        // .style("color", (d) => {
        //     if (d <= d3.max(myGroups)) {
        //         return 'lime'
        //     } else {
        //         return 'orange'
        //     }
        // })


        // Y-axis:
        chartHeatMap.select(".heatmapY")
            .call(
                d3.axisLeft(Y_band)
                    .tickValues([])
                // .tickValues((class1))
                // .tickPadding(11)
            )
            .selectAll("text").remove()
        // .text(
        //     (d) => {
        //         return `${d}: ${dec2bin(10, d)}`
        //     }
        // )


        // TOOLTIP:
        const ttHeatMap = d3.select("#ttHeatMap")
            .style("opacity", 0)
            .style("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            .style("font-size", "11px")
            .attr("z-index", 0)


        // MOUSE OVER, MOVE, LEAVE:
        const mouseover = function (event, d) {
            //console.log(event)
            ttHeatMap
                .style("opacity", 0.8)

        }

        const mousemove = function (event, d) {
            //console.log(d)
            ttHeatMap
                .style("opacity", 0.8)
                .html(d.description)
                .style("left", (event.layerX - 30) + "px")
                .style("top", (event.layerY - 15) + "px")
                .style("position", "absolute")
        }

        const mouseleave = function (event, d) {
            ttHeatMap
                .style("opacity", 0)
        }


        // DATA:
        chartHeatMap
            .selectAll("rect")
            .data(data)
            .join(
                enter => enter.append('rect').attr("class", "new"),
                update => update.attr("class", "update"),
                exit => exit.remove().transition()
                    .duration(1000)
            )
            .attr("x", function (d) { return X_Band(d.b12) })
            .attr("y", function (d) { return Y_band(d.b1) })
            .attr("width", X_Band.bandwidth())
            .attr("height", Y_band.bandwidth())
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .transition()
            .duration(1000)
            .style("fill", function (d) {

                if (plotAvg === true) {
                    if (d.b12 <= props.boundary1) {
                        return greenOrange(hd_self)
                    } else {
                        return greenOrange(hd_other)
                    }
                } else {
                    return greenOrange(d.hd)
                }


            })




    }, [data]);





    // SMALL VERSION, ONLY AVERAGES of HD SELF - OTHER



    useEffect(() => {
        let margin = { top: 60, left: 30, bottom: 150, right: 450 }

        let colorGreen = 'rgb(28, 255, 28)'
        let colorOrange = 'rgb(255, 128, 49)'

        var greenOrange = d3.scaleLinear()
            .domain([1, 10])
            .range([colorGreen, colorOrange])

        let svgWidth = 550
        let svgHeight = 250
        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom




        let smallData = [
            {
                b1: 1, b12: 1, hd: hd_self,
                class: `${props.limit1} - ${props.boundary1}`, g1: "0111010111", g12: "0111010111"
            },
            {
                b1: 1, b12: 2, hd: hd_other,
                class: `${props.boundary2} - ${props.limit2}`, g1: "0111010111", g12: "0111010111"
            }]

        // SCALES:
        let mySmallGroups = Array.from(new Set(smallData.map(d => d.b1)))
        let mySmallVars = Array.from(new Set(smallData.map(d => d.b12)))

        let X_Band = d3.scaleBand().range([0, 100]).domain(mySmallVars)
        let Y_band = d3.scaleBand().range([50, 0]).domain(mySmallGroups)

        let chartHeatMap = d3.select(refHeatMapSmall.current).attr("transform",
            `translate(${margin.left},${margin.top})`);

        chartHeatMap.select(".smallInfo").selectAll("text").remove()
        chartHeatMap.select(".smallInfo").append("text")
            .text(hd_cod)
            .attr("font-size", "14px")
            .attr("x", 35)
            .attr("y", -10)
            .attr("fill", "cyan")


        // X-axis:
        chartHeatMap.select(".smallX")
            .attr("transform", `translate(0, ${height})`)
            .call(
                d3.axisBottom(X_Band)
                    .tickSize(0)
                    .tickPadding(20)

            )
            .selectAll("text")
            .style("color", (d) => {
                if (d <= d3.max(mySmallGroups)) {
                    return 'lime'
                } else {
                    return 'orange'
                }
            })
            .text((d) => {
                if (d === 1) {
                    return hd_self
                } else {
                    return hd_other
                }
            })
            .attr("font-size", "12px")


        // Y-axis:
        chartHeatMap.select(".smallY")
            .call(
                d3.axisLeft(Y_band)
                    .tickValues([])
                    .tickSize(0)
            )


        // SMALL DATA:
        chartHeatMap
            .selectAll("rect")
            .data(smallData)
            .join(
                enter => enter.append('rect').attr("class", "new"),
                update => update.attr("class", "update"),
                exit => exit.remove().transition()
                    .duration(1000)
            )
            .attr("x", function (d) { return X_Band(d.b12) })
            .attr("y", function (d) { return Y_band(d.b1) })
            .attr("width", X_Band.bandwidth())
            .attr("height", Y_band.bandwidth())
            .transition()
            .duration(1000)
            .style("fill", function (d) {
                // console.log("d: ", parseFloat(d.hd) + 1)
                return greenOrange(parseFloat(d.hd))


            })


        // chartHeatMap
        //     .selectAll("rect").on("mouseover", mouseover)
        //     .on("mousemove", mousemove)
        //     .on("mouseleave", mouseleave)



    }, [data]);


    return (

        <>
            <div
                id="divHeatMapHook"
                style={{
                    position: "relative",
                    marginTop: "10px",
                    border: "1px solid red"
                }}
            >
                <svg id="svgHeatMapHook">

                    <g ref={refHeatMap}>
                        <g className="heatmapX"></g>
                        <g className="heatmapY"></g>
                        <g className="chartInfo"></g>
                    </g>


                    <g ref={refHeatMapSmall}>
                        <g className="smallX"></g>
                        <g className="smallY"></g>
                        <g className="smallInfo"></g>
                    </g>



                </svg>

                <div id="ttHeatMap"></div>

            </div >

        </>

    )
};

export default HeatMapHook;

