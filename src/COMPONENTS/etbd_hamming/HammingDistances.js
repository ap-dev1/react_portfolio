import "./hamming_style.sass";
import "./phenotypes.sass";

//import parse from "html-react-parser"
import * as d3 from "d3";
import { dec2bin, hdSelf, hdOther } from "./hammingFunctions";

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { hdValues } from "./hdValues";


function HammingDistances(props) {
    const refHammingDistances = useRef()

    const [data, setData] = useState(hdValues)
    const [class1, setClass1] = useState([])
    const [classes, setClasses] = useState([])
    const [class2, setClass2] = useState([]) // just for hd-cod;


    useEffect(() => {
        let size = 3
        let boundary2 = props.boundary1 + 1
        let class1 = d3.range(props.boundary1 - size, props.boundary1 + 1)
        let classes = d3.range(props.boundary1 - size, boundary2 + 1 + size)
        let class2 = d3.range(props.boundary1 + 1, boundary2 + 1 + size)

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
        // console.log("HammingDistances:")
        // console.log(myData)

        //setData(myData)
        setClass1(class1)
        setClasses(classes)
        setClass2(class2)

    }, [props])


    useEffect(() => {
        let margin = { top: 20, right: 20, bottom: 100, left: 40, }
        let svgWidth = 550
        let svgHeight = 250
        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom

        let X_Band = d3.scaleBand()
            .range([0, width])
            .domain(
                data.map((d) => {
                    return d.hdNext.hdLabel
                }))
            .padding(0.0);

        let Y_Linear = d3.scaleLinear().range([height, 0]).domain([1, 10]);

        let HammingChart = d3.select(refHammingDistances.current).attr("transform",
            `translate(${margin.left},${margin.top})`);

        HammingChart.select(".hammingX")
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3.axisBottom(X_Band)
                    .tickSize(0)
            )
            .selectAll("text").remove()

        HammingChart.select(".hammingY")
            .call(
                d3.axisLeft(Y_Linear)
                    .tickPadding(10)
            )


        HammingChart.select(".hammingBarPhens")
            .selectAll("rect")
            .data(data)
            .join(
                enter => enter.append('rect').attr("class", "new"),
                update => update.attr("class", "update"),
                exit => exit.remove().transition()
                    .duration(1000)
            )
            .attr("x", (d) => X_Band(d.hdNext.hdLabel))
            .attr("y", (d) => Y_Linear(d.hdNext.hd))
            .attr("width", X_Band.bandwidth())
            .attr("height", (d) => height - Y_Linear(d.hdNext.hd))
            .attr("stroke-width", 1)



    }, []);





    useEffect(() => {

        var updateColors = () => {
            let hammingBins = d3.select(".hammingBarPhens").selectAll("rect")

            hammingBins.attr("fill", (d) => {
                if (d.phenotype >= props.limit1 & d.phenotype <= props.boundary1) {
                    return 'rgb(28, 255, 28)'
                } else if (d.phenotype >= props.boundary2 & d.phenotype <= props.limit2) {
                    return 'rgb(255, 128, 49)'

                } else {
                    return '#fff'
                }
            })
            hammingBins.attr("stroke", (d) => {
                if (d.phenotype >= props.limit1 & d.phenotype <= props.boundary1) {
                    return 'rgb(28, 255, 28)'
                } else if (d.phenotype >= props.boundary2 & d.phenotype <= props.limit2) {
                    return 'rgb(255, 128, 49)'
                } else {
                    return 'none'
                }
            })
        }

        updateColors()


    }, [props.limit1, props.boundary1, props.limit2, props.boundary2]
    );




    useEffect(() => {
        let HammingChart = d3.select(refHammingDistances.current)

        HammingChart.append("rect")

    })






    return (

        <>
            <div
                id="divHammingChart"
                style={{
                    backgroundColor: "#446b58",
                    position: "relative",
                    marginTop: "10px",
                }}
            >
                <svg id="svgHammingChart">

                    <g ref={refHammingDistances}>
                        <g className="hammingX"></g>
                        <g className="hammingY"></g>
                        <g className="chartInfo"></g>
                        <g className="hammingBarPhens"></g>
                    </g>

                </svg>

                {/* <div id="ttPhenotypes"></div> */}

            </div >

        </>

    )
}


export default HammingDistances;

