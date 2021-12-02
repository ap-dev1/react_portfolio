import "./hamming_style.sass";
import "./phenotypes.sass";
//import "./scatter.sass";


//import parse from "html-react-parser"
import * as d3 from "d3";

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { dec2bin } from "./hammingFunctions";




function HammingCodTable(props) {

    const refHDTable = useRef()

    const [data, setData] = useState([])
    const [class1, setclass1] = useState([])
    const [classes, setClasses] = useState([])


    useEffect(() => {
        let size = 2
        let boundary2 = props.boundary1 + 1
        let class1 = d3.range(props.boundary1 - size, boundary2)
        let classes = d3.range(props.boundary1 - size, boundary2 + 1 + size)


        let myData = []
        class1.forEach((b1) => {
            let g1 = dec2bin(5, b1)
            classes.forEach((b12) => {
                let g12 = dec2bin(5, b12)
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
        console.log(myData)
        setData(myData)
        setclass1(class1)
        setClasses(classes)

    }, [props])


    useEffect(() => {
        let margin = { top: 50, left: 100, bottom: 50, right: 50 }
        let svgWidth = 550
        let svgHeight = 250
        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom

        // let X_Linear = d3.scaleLinear()
        //     .range([0, width])
        //     .domain([d3.min(classes) - 1, d3.max(classes) + 1])

        // let Y_Linear = d3.scaleLinear()
        //     .range([height, 0])
        //     .domain([d3.max(class1) + 1, d3.min(class1) - 1])

        // let Z_Linear = d3.scaleLinear()
        //     .range([2, 12])
        //     .domain([0, 10])


        //let svg = d3.select(refSVG.current)
        let tableHD = d3.select(refHDTable.current).attr("transform",
            `translate(${margin.left},${margin.top})`)

        // scatter2.select(".scatter2X")
        //     .attr("transform", "translate(0," + height + ")")
        //     .call(
        //         d3
        //             .axisBottom(X_Linear)
        //             .tickValues(classes)
        //             .tickPadding(11)
        //     )
        //     .selectAll('text')
        //     .transition()
        //     .duration(1000)
        //     .attr('fill', (d) => {
        //         if (d <= props.boundary1) {
        //             return 'lime'
        //         } else {
        //             return 'orange'
        //         }
        //     })

        // scatter2.select(".scatter2Y")
        //     .call(
        //         d3
        //             .axisLeft(Y_Linear)
        //             .tickValues((class1))
        //             .tickPadding(11)
        //     )
        //     .selectAll('text')
        //     .text((d) => d.toFixed(0))
        //     .text((d) => {
        //         console.log("text d: ", d)
        //         return dec2bin(10, d)
        //     })


        //var groupedData = d3.group(data, (d) => d.b12)
        var groupedArrayedData = Array.from(d3.group(data, (d) => d.b1))

        tableHD.selectAll("tr")
            .data(groupedArrayedData)
            .join(
                enter => enter.append('tr'),
                update => update.attr("class", "update"),
                exit => exit.remove()
            )
            .selectAll('td')
            //.data(d => d)
            .data((d) => {
                return d[1]
            })
            .join(
                enter => enter.append('td').attr("class", "cell"),
                update => update.attr("class", "cellUp"),
                exit => exit.remove()
            )
            // .attr("width", 45)
            // .attr("height", 20)
            // .text((d, i) => {
            //     return d
            // })
            //.html("whattt")
            .html((d) => {
                console.log("d cell: ", d)

                return d.g1
            })
            //.attr("stroke-width", 1)
            .attr("stroke", "#fff")
            .attr("stroke-width", 1)
            .attr("fill", "#ddd")
            .attr("color", "cyan")
            .attr("opacity", .8);



        // tableHD.on('mouseover', (e, d) => {
        //     //e.target.style.opacity = 1
        //     console.log(e.target)
        //     console.log("d: ", d)
        // })


        // .on('mouseout', (e, d) => {
        //     e.target.style.opacity = .7
        // })
        // ;



        // scatter2
        //     .selectAll("circle")
        //     .data(data)
        //     .join(
        //         enter => enter.append('circle').attr("class", "new"),
        //         update => update.attr("class", "update"),
        //         exit => exit.remove().transition()
        //             .duration(1500)

        //     )
        //     .transition()
        //     .duration(1000)
        //     .attr("cx", (d) => X_Linear(d.b12))
        //     .attr("cy", (d) => Y_Linear(d.b1))
        //     .attr("r", (d) => Z_Linear(d.hd))
        //     .attr("stroke-width", 1)
        //     .attr("fill", "#ddd")
        //     .attr("stroke", "cyan")
        //     .attr("stroke-width", 1)
        //     .attr("opacity", .4);


    }, [data]);






    return (

        <>

            <div
                id="divScatter2"
                style={{
                    position: "relative",
                    marginTop: "10px",
                    width: "550px",
                    border: "1px solid teal"
                }}
            >
                <label>{class1.toString().replaceAll(',', ', ')}</label>

                <label>{classes.slice(3).toString().replaceAll(',', ', ')}</label>

                {/* <svg id="svgScatter2" ref={refSVG} >
                    < g ref={refScatter2}>
                        <g className="scatter2X"></g>

                        <g className="scatter2Y"></g>
                    </g>
                </svg> */}

                <table >
                    <tbody ref={refHDTable}>


                    </tbody>
                </table>

            </div >


            {/* <div
                id="divScatter2"
                style={{
                    position: "relative",
                    marginTop: "10px",
                }}
            >
                <table ref={refHDTable}></table>
            </div > */}

        </>

    )
}


export default HammingCodTable;

