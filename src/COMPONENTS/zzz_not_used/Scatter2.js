//import "./hamming_style.sass";
//import "./phenotypes.sass";
import "./scatter.sass";


//import parse from "html-react-parser"
import * as d3 from "d3";

import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { dec2bin } from "../etbd_hamming/hammingFunctions";




function Scatter2(props) {

    const refSVG = useRef()
    const refScatter2 = useRef()

    const [data, setData] = useState([])
    const [class1, setclass1] = useState([])
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
        // console.log("Scatter2:")
        // console.log(myData)

        setData(myData)
        setclass1(class1)
        setClasses(classes)
        setClass2(class2)

    }, [props])






    useEffect(() => {


        //let margin = { top: 80, left: 100, bottom: 100, right: 325 }
        let margin = { top: 50, left: 150, bottom: 50, right: 100 }

        let svgWidth = 550
        let svgHeight = 250
        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom

        // let size = 3
        // let boundary2 = props.boundary1 + 1
        // let class1 = d3.range(props.boundary1 - size, props.boundary1 + 1)
        // let classes = d3.range(props.boundary1 - size, boundary2 + 1 + size)

        let X_Linear = d3.scaleLinear()
            .range([0, width])
            .domain([d3.min(classes) - 1, d3.max(classes)])

        let Y_Linear = d3.scaleLinear()
            .range([height, 0])
            .domain([d3.max(class1) + 1, d3.min(class1)])

        let Z_Linear = d3.scaleLinear()
            .range([0, 10])
            .domain([0, 10])


        //let svg = d3.select(refSVG.current)
        let scatter2 = d3.select(refScatter2.current).attr("transform",
            `translate(${margin.left},${margin.top})`)

        //TITLE:
        scatter2
            .append('text')
            .attr("id", "chartTitle")
            .attr("x", 0)
            .attr("y", -20)
            .text("Scatter2.js/Scatter2(props)")
            .attr("fill", "cyan")







        // X-axis:
        scatter2.select(".scatter2X")
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(X_Linear)
                    .tickValues(classes)
                    .tickPadding(11)
            )
            .selectAll('text')
            .transition()
            .duration(1000)
            .attr('fill', (d) => {
                if (d <= props.boundary1) {
                    return 'lime'
                } else {
                    return 'orange'
                }
            })
            .attr("font-size", "10px")


        // Y-axis:
        scatter2.select(".scatter2Y")
            .call(
                d3
                    .axisLeft(Y_Linear)
                    .tickValues((class1))
                    .tickPadding(11)
            )
            .selectAll('text')
            .text((d) => d.toFixed(0))
            .text((d) => {
                return dec2bin(10, d)
            })
            .attr("font-size", "10px")


        // DATA:
        scatter2
            .selectAll("circle")
            .data(data)
            .join(
                enter => enter.append('circle').attr("class", "new"),
                update => update.attr("class", "update"),
                exit => exit.remove().transition()
                    .duration(1000)

            )
            .transition()
            .duration(1000)
            .attr("cx", (d) => X_Linear(d.b12))
            .attr("cy", (d) => Y_Linear(d.b1))
            .attr("r", (d) => Z_Linear(d.hd))
            .attr("stroke-width", 1)
            .attr("fill", "#ddd")
            .attr("stroke", "cyan")
            .attr("stroke-width", 1)
            .attr("opacity", .4);


        scatter2.on('mouseover', (e, d) => {
            e.target.style.opacity = 1
        })
            .on('mouseout', (e, d) => {
                e.target.style.opacity = .4
            })
            ;


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
                {/* <label>{class1.toString().replaceAll(',', ', ')}</label>

                <br />

                <label>{classes.slice(4).toString().replaceAll(',', ', ')}</label> */}

                <svg id="svgScatter2" ref={refSVG} >

                    < g ref={refScatter2}>

                        <g className="scatter2X"></g>

                        <g className="scatter2Y"></g>

                    </g>

                </svg>

            </div >


        </>

    )
}


export default Scatter2;






    // var highlightClasses = () => {

    //     chartScatter.selectAll("text")
    //         .attr("font-size", "14px")
    //         .attr("transform", (d) => {
    //             if (d === limit1) {
    //                 return "translate(-20,0)rotate(0)"
    //             } else if (d === boundary1) {
    //                 return "translate(-10,0)rotate(0)"
    //             } else if (d === boundary2) {
    //                 return "translate(10,0)rotate(0)"
    //             } else if (d === limit2) {
    //                 return "translate(20,0)rotate(0)"
    //             }
    //         })

    //     chartScatter.selectAll("text").attr("fill", (d) => {
    //         if (d === limit1) {
    //             return "lime"
    //         } else if (d === boundary1) {
    //             return "lime"
    //         } else if (d === boundary2) {
    //             return "orange"
    //         } else if (d === limit2) {
    //             return "orange"
    //         } else {
    //             return "#ddd"
    //         }
    //     })


    // };


    // // X LINEAR
    // chartScatter
    //     .append("g")
    //     .attr("class", "yellowLine")
    //     .attr("transform", "translate(0," + (height + 10) + ")")
    //     .call(
    //         d3.axisBottom(X_Linear)
    //             .tickPadding(10)
    //             .tickValues([1, limit1, limit2, 1000,])
    //             //.ticks(10)
    //             .tickSize(0)
    //     )
    //     .selectAll('text')
    //     .attr("fill", (d) => {
    //         if (d === limit1) {
    //             return "lime"
    //         } else if (d === boundary1) {
    //             return "lime"
    //         } else if (d === boundary2) {
    //             return "orange"
    //         } else if (d === limit2) {
    //             return "orange"
    //         } else {
    //             return "#ddd"
    //         }
    //     })








    // // // LIMITS AND MOUSE GESTURES: -------------------------------------------------------

    // let gBoundariesPhenotypes = chartScatter.append("g").attr("id", "gBoundariesPhenotypes")

    // //LIMIT 1:
    // gBoundariesPhenotypes.append("line")
    //     .attr("id", "L1")
    //     .attr("class", "boundary left")
    //     .attr("dragging", true)
    //     .attr('z-index', 10)
    //     .attr("x1", X_Linear(this.props.limit1))
    //     .attr("x2", X_Linear(this.props.limit1))
    //     .attr("y1", Y_Linear(-7))
    //     .attr("y2", Y_Linear(-4))

    // //HD BETWEEN:
    // gBoundariesPhenotypes.append("line")
    //     .attr("id", "L2")
    //     .attr("class", "boundary")
    //     .attr('z-index', 10)
    //     .attr("dragging", true)
    //     .attr("x1", X_Linear(this.props.boundary2))
    //     .attr("x2", X_Linear(this.props.boundary2))
    //     .attr("y1", Y_Linear(-7))
    //     .attr("y2", Y_Linear(-4))
    //     .attr("fill", "yellow")
    //     .attr("stroke", "yellow")

    // //LIMIT 2:
    // gBoundariesPhenotypes.append("line")
    //     .attr("id", "L3")
    //     .attr("class", "boundary right")
    //     .attr("dragging", true)
    //     .attr("x1", X_Linear(this.props.limit2))
    //     .attr("x2", X_Linear(this.props.limit2))
    //     .attr("y1", Y_Linear(-7))
    //     .attr("y2", Y_Linear(-4));

    // // MOUSE OVER:
    // gBoundariesPhenotypes.selectAll('line').on('mouseover', function (e) {
    //     //e.preventDefault()
    //     let id = e.target.id
    //     let xx = e.layerX
    //     let yy = e.layerY

    //     // console.log(id)
    //     // console.log(this)
    //     // console.log("--------------------")
    // })

    // // MOUSE OUT:
    // gBoundariesPhenotypes.selectAll('line').on('mouseout', function (e) {
    //     //e.preventDefault()
    //     let id = e.target.id
    //     let xx = e.layerX
    //     let yy = e.layerY
    // })

    // DRAG:
    //gBoundariesPhenotypes.selectAll("line").call(d3.drag().on('drag', this.props.onDrag))

    // render() {
    //     return (

    //         <>
    //             <div
    //                 id="divPhenotypes"
    //                 style={{
    //                     backgroundColor: "#446b58",
    //                     position: "relative",
    //                     marginTop: "10px",
    //                 }}
    //             >
    //                 <svg id="svgPhenotypes"></svg>
    //                 <div id="ttPhenotypes"></div>
    //             </div >

    //         </>

    //     )
    // }








//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// FROM hammingDemo.js


// drawPhenotypes = () => {

//     let svgHamming, chartClasses;
//     let svgWidth, svgHeight, width, height;
//     let margin = { top: 30, left: 30, bottom: 135, right: 300 }

//     if (!document.getElementById('chartClasses')) {
//         console.log("chartClasses doesnt exist.")
//         svgWidth = 550
//         svgHeight = 250
//         width = svgWidth - margin.left - margin.right
//         height = svgHeight - margin.top - margin.bottom
//     } else {
//         console.log("it already exists")
//         svgWidth = document.getElementById("svgHamming").clientWidth
//         svgHeight = document.getElementById("svgHamming").clientHeight
//         width = svgWidth - margin.left - margin.right
//         height = svgHeight - margin.top - margin.bottom
//     };

//     svgHamming = d3.select("#svgHamming")

//     chartClasses = svgHamming
//         .append('g')
//         .attr("id", "chartClasses")
//         .attr("transform",
//             `translate(${margin.left},${margin.top})`);


//     let Xscale = d3.scaleBand()
//         .range([0, width])
//         .domain(this.state.hdValues.slice(this.state.limit1, this.state.limit2 + 1).map((d) => {
//             return d.hdNext.hdLabel
//         }))
//         .padding(0.3);

//     chartClasses
//         .append("g")
//         .attr("class", "hammingLine")
//         .attr("transform", "translate(0," + height + ")")
//         .call(
//             d3.axisBottom(Xscale)
//                 .tickPadding(20)
//                 .tickSize(0)
//         )
//         .selectAll("text").remove()


//     let Yscale = d3.scaleLinear()
//         .range([height, 0])
//         .domain([0, 10]);

//     chartClasses
//         .append("g")
//         .attr("class", "axisLine")
//         .call(d3.axisLeft(Yscale).tickValues([1, 5, 10]))

//     chartClasses
//         .selectAll("rect")
//         .data(this.state.hdValues.slice(this.state.limit1, this.state.limit2 + 1))
//         .enter()
//         .append("rect")
//         .attr("fill", (d) => {
//             if (d.phenotype <= this.state.boundary1 & d.phenotype >= this.state.limit1) {
//                 return 'lime'
//             } else if (d.phenotype >= this.state.boundary2 & d.phenotype <= this.state.limit2) {
//                 return 'orange'
//             } else {
//                 return '#222'
//             }
//         })
//         .attr("x", (d) => Xscale(d.hdNext.hdLabel))
//         .attr("y", (d) => Yscale(d.hdNext.hd))
//         .attr("width", Xscale.bandwidth())
//         .attr("height", (d) => height - Yscale(d.hdNext.hd))
//         .attr("class", "hammingBar")




//     let new_height = height + 10

//     let Xscale1 = d3.scaleLinear()
//         .range([0, width])
//         .domain([this.state.limit1, this.state.limit2 + 1])

//     chartClasses
//         .append("g")
//         .attr("class", "yellowLine")
//         .attr("transform", "translate(0," + new_height + ")")
//         .call(
//             d3.axisBottom(Xscale1)
//                 .tickPadding(5)
//                 .tickValues([
//                     this.state.limit1,
//                     this.state.boundary1,
//                     this.state.boundary2,
//                     this.state.limit2
//                 ])
//                 .tickSize(0)
//         )
//         .selectAll("text")
//         .attr("transform", (d) => {
//             if (d === this.state.limit1) {
//                 return "translate(10,0)rotate(0)"
//             } else if (d === this.state.boundary1) {
//                 return "translate(-10,0)rotate(0)"
//             } else if (d === this.state.boundary2) {
//                 return "translate(15,0)rotate(0)"
//             } else if (d === this.state.limit2) {
//                 return "translate(-10,0)rotate(0)"
//             }
//         })
//         .attr("fill", (d) => {
//             if (d === this.state.limit1) {
//                 return "lime"
//             } else if (d === this.state.boundary1) {
//                 return "lime"
//             } else if (d === this.state.boundary2) {
//                 return "orange"
//             } else if (d === this.state.limit2) {
//                 return "orange"
//             } else {
//                 return "#ddd"
//             }
//         })

//     let gBoundaries = chartClasses.append("g").attr("id", "gBoundaries")

//     chartClasses.append("line")
//         .attr("class", "boundary")
//         .attr("id", "limit12")
//         .attr("dragging", true)
//         .attr("x1", Xscale1(this.state.boundary2))
//         .attr("x2", Xscale1(this.state.boundary2))
//         .attr("y1", Yscale(-7))
//         .attr("y2", Yscale(-4))

//     chartClasses.append("line")
//         .attr("id", "limit1")
//         .attr("class", "boundary left")
//         .attr("dragging", true)
//         .attr("x1", Xscale1(this.state.limit1))
//         .attr("x2", Xscale1(this.state.limit1))
//         .attr("y1", Yscale(-7))
//         .attr("y2", Yscale(-4))

//     chartClasses.append("line")
//         .attr("id", "limit2")
//         .attr("class", "boundary right")
//         .attr("dragging", true)
//         .attr("x1", Xscale1(this.state.limit2))
//         .attr("x2", Xscale1(this.state.limit2))
//         .attr("y1", Yscale(-7))
//         .attr("y2", Yscale(-4));

//     gBoundaries.selectAll('line').on('mouseover', function () {
//         let id = d3.select(this).attr("id")
//         let xxx = parseInt(d3.select(this).attr("x1"))
//         let yyy = parseInt(d3.select(this).attr("y1"))
//         let legend = parse(`${id} <br/> [${xxx}, ${yyy}]`)
//         console.log("id, X: ", id, xxx,)
//     })

//     gBoundaries.selectAll('line').on('mouseout', function () {
//         let id = d3.select(this).attr("id")
//         let xxx = parseInt(d3.select(this).attr("x1"))
//         this.setState({ [id]: newValue })
//         console.log("newValue: ", newValue)
//     })

//     gBoundaries.selectAll("line")
//         .call(
//             d3.drag()
//                 .on('drag', function (e) {
//                     //let lim1 = this.state.limit1
//                     let x = d3.select(this).attr('x1')

//                     let id = d3.select(this).attr("id")

//                     d3.select(this).attr("x1", x)
//                     d3.select(this).attr("x2", x)
//                 }
//                 )
//         )
// };