// /* 
// d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv").then(function (data) {

//  */


//import React from "react";
import * as d3 from "d3";
import "./hamming_style.sass";

import { dec2bin } from "./hammingFunctions";
// import { hdValues } from "./hammingValues";

// import { loadDummyData, loadHammingData, computeSelf, computeOther, loadHammingDataOriginal } from "./HeatmapTestData"

// import parse from "html-react-parser";


export function drawHeatMap(data, tickValuesX, tickValuesY) {

    let margin = { top: 50, left: 150, bottom: 50, right: 100 }

    let colorGreen = 'rgb(28, 255, 28)'
    let colorOrange = 'rgb(255, 128, 49)'

    var greenOrange = d3.scaleLinear()
        .domain([1, 10])
        .range([colorGreen, colorOrange])

    let svgWidth
    let svgHeight

    if (document.getElementById("svgHeatMap")) {
        svgWidth = document.getElementById("svgHeatMap").clientWidth
        svgHeight = document.getElementById("svgHeatMap").clientHeight
    } else {
        svgWidth = 550
        svgHeight = 250
    }

    let width = svgWidth - margin.left - margin.right
    let height = svgHeight - margin.top - margin.bottom

    let svg = d3.select("#svgHeatMap")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);



    //   -------------  DATA  --------------

    // Labels of row and columns -> unique identifier 
    // of the column called 'group' and 'variable'.
    const myGroups = Array.from(new Set(data.map(d => d.group)))
    const myVars = Array.from(new Set(data.map(d => d.variable)))

    // Build X scales and axis:
    const x = d3.scaleBand()
        .range([0, width])
        .domain(myGroups)
        .padding(0.1);

    svg.append("g")
        .attr("class", "heatmapX")
        .attr("transform", `translate(0, ${height})`)
        .call(
            d3.axisBottom(x).tickPadding(11)
        )
        .selectAll("text")
        .style("color", (d) => {
            if (d <= d3.max(myVars)) {
                return 'lime'
            } else {
                return 'orange'
            }
        })



    // Build Y scales and axis:
    const y = d3.scaleBand()
        // .range([0, height])
        // .range([height, 0])
        .range([0, height])
        .domain(myVars)
        .padding(0.1);

    svg.append("g").attr("class", "heatmapY")
        .call(
            d3.axisLeft(y).tickPadding(11)
        )
        .selectAll("text")
        .text(
            (d) => {
                return `${d}: ${dec2bin(10, d)}`
            }
        )


    // TOOLTIP:
    const tooltip = d3.select("#ttHeatMap")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("font-size", "14px")


    // MOUSE OVER, MOVE, LEAVE:
    const mouseover = function (event, d) {
        tooltip
            .style("opacity", 0.8)
    }


    const mousemove = function (event, d) {
        tooltip
            .style("opacity", 0.8)
            .html(d.description)
            .style("left", (event.x) / 18 + "px")
            .style("top", (event.y) / 20 + "px")
            .style("position", "absolute")
    }


    const mouseleave = function (event, d) {
        tooltip
            .style("opacity", 0)
    }


    // SQUARES:
    svg.selectAll()
        .data(data, function (d) { return d.group + ':' + d.variable; })
        .join("rect")
        .attr("x", function (d) { return x(d.group) })
        .attr("y", function (d) { return y(d.variable) })

        // .attr("rx", 4)
        // .attr("ry", 4)
        .attr("rx", 0)
        .attr("ry", 0)
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", function (d) {
            if (d.value === 0) {
                return "#274235"
            } else {
                return greenOrange(d.value)
            }
        })
        .style("stroke-width", 0)
        .style("stroke", "none")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
    // //}
    //)


    // // Add title to graph
    // svg.append("text")
    //     .attr("x", 0)
    //     .attr("y", -70)
    //     .attr("text-anchor", "left")
    //     .style("font-size", "16px")
    //     .text("A d3.js heatmap");


    // // Add subtitle 
    // svg.append("text")
    //     .attr("x", 0)
    //     .attr("y", -40)
    //     .attr("text-anchor", "left")
    //     .style("font-size", "12px")
    //     .style("fill", "grey")
    //     .style("max-width", 400)
    //     .text("A short description of the take-away message of this chart.")


    // // HD-SAME:
    // svg.append("text")
    //     .attr("x", 40)
    //     .attr("y", -10)
    //     .attr("text-anchor", "left")
    //     .style("font-size", "14px")
    //     .style("fill", "blue")
    //     .style("max-width", 400)
    //     .text("avg hd same")

    // // HD-OTHER:
    // svg.append("text")
    //     .attr("x", 200)
    //     .attr("y", -10)
    //     .attr("text-anchor", "left")
    //     .style("font-size", "14px")
    //     .style("fill", "red")
    //     .style("max-width", 400)
    //     .text("avg hd other")
};


        // return(
        //         <div
        //             id = "my_dataviz"
        //             style = {{
        //         backgroundColor: "#446b58",
        //         position: "relative",
        //         marginTop: "10px",
        //     }}
        //         >
        //         </div >
        //     )

// export default class HeatmapTemplate extends React.Component {

//     constructor(props) {
//         super(props)
//     }
//     // loadHamminData = () => {
//     //     let c1 = d3.range(506, 512)
//     //     let c11 = d3.range(506, 518)
//     //     let hamming111 = loadHammingDataOriginal(c11, c1)
//     //     this.setState({ hammingData: hamming111 })
//     // }

//     // constructor() {
//     //     super()
//     //     let myData = this.loadHamminData()

//     //     this.state = {
//     //         range: [0, 128],
//     //         limit1: 54,
//     //         limit2: 73,
//     //         boundary: [63, 64],
//     //         hammingData: myData,
//     //     }
//     // }

//     componentDidMount() {

//         let data = this.props.data

//         let margin = { top: 30, right: 25, bottom: 30, left: 50 },
//             width = 350 - margin.left - margin.right,
//             height = 150 - margin.top - margin.bottom;

//         // append the svg object to the body of the page
//         let svg = d3.select("#my_dataviz")
//             .append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom)
//             .append("g")
//             .attr("transform", `translate(${margin.left}, ${margin.top})`);



//         //   DATA

//         // Labels of row and columns -> unique identifier 
//         // of the column called 'group' and 'variable'.


//         const myGroups = Array.from(new Set(data.map(d => d.group)))
//         const myVars = Array.from(new Set(data.map(d => d.variable)))

//         // Build X scales and axis:
//         const x = d3.scaleBand()
//             .range([0, width])
//             .domain(myGroups)
//             .padding(0.05);

//         svg.append("g").attr("class", "hammingLine")
//             .attr("transform", `translate(0, ${height})`)
//             .call(
//                 d3.axisBottom(x)
//                     .tickSize(0)
//                     .tickValues([506, 508, 511, 512, 515])
//                     .tickPadding(11)
//             )
//             .select(".domain").remove()



//         // Build Y scales and axis:
//         const y = d3.scaleBand()
//             .range([0, height])
//             .domain(myVars)
//             .padding(0.05);

//         svg.append("g").attr("class", "hammingLine")
//             .style("font-size", 15)
//             .call(d3.axisLeft(y).tickSize(0).tickPadding(10))
//             .select(".domain").remove()


//         let colorGreen = 'rgb(28, 255, 28)'
//         let colorOrange = 'rgb(255, 128, 49)'
//         var greenOrange = d3.scaleLinear()
//             .domain([0, 10])
//             .range([colorGreen, colorOrange])


//         // TOOLTIP:
//         const tooltip = d3.select("#my_dataviz")
//             .append("div")
//             .style("opacity", 0)
//             //.attr("class", "tooltip")
//             .style("background-color", "white")
//             .style("border", "solid")
//             .style("border-width", "1px")
//             .style("border-radius", "5px")
//             .style("padding", "5px")
//             .style("font-size", "11px")



//         // MOUSE OVER, MOVE, LEAVE:
//         const mouseover = function (event, d) {
//             tooltip
//                 .style("opacity", 0.8)
//         }

//         const mousemove = function (event, d) {
//             tooltip
//                 .html(d.description)
//                 .style("left", (event.x) / 14 + "px")
//                 .style("top", (event.y) / 20 + "px")
//                 .style("position", "absolute")
//         }

//         const mouseleave = function (event, d) {
//             tooltip
//                 .style("opacity", 0)
//         }

//         // add the squares
//         svg.selectAll()
//             .data(data, function (d) { return d.group + ':' + d.variable; })
//             .join("rect")
//             .attr("x", function (d) { return x(d.group) })
//             .attr("y", function (d) { return y(d.variable) })

//             .attr("rx", 4)
//             .attr("ry", 4)
//             .attr("width", x.bandwidth())
//             .attr("height", y.bandwidth())
//             .style("fill", function (d) { return greenOrange(d.value) })
//             // .style("stroke-width", 0)
//             // .style("stroke", "none")
//             // .style("opacity", 0.8)
//             .style("stroke-width", 0)
//             .style("stroke", "none")
//             .style("opacity", 1)
//             .on("mouseover", mouseover)
//             .on("mousemove", mousemove)
//             .on("mouseleave", mouseleave)
//         //}
//         //)


//         // // Add title to graph
//         // svg.append("text")
//         //     .attr("x", 0)
//         //     .attr("y", -70)
//         //     .attr("text-anchor", "left")
//         //     .style("font-size", "16px")
//         //     .text("A d3.js heatmap");


//         // // Add subtitle 
//         // svg.append("text")
//         //     .attr("x", 0)
//         //     .attr("y", -40)
//         //     .attr("text-anchor", "left")
//         //     .style("font-size", "12px")
//         //     .style("fill", "grey")
//         //     .style("max-width", 400)
//         //     .text("A short description of the take-away message of this chart.")


//         // // HD-SAME:
//         // svg.append("text")
//         //     .attr("x", 40)
//         //     .attr("y", -10)
//         //     .attr("text-anchor", "left")
//         //     .style("font-size", "14px")
//         //     .style("fill", "blue")
//         //     .style("max-width", 400)
//         //     .text("avg hd same")

//         // // HD-OTHER:
//         // svg.append("text")
//         //     .attr("x", 200)
//         //     .attr("y", -10)
//         //     .attr("text-anchor", "left")
//         //     .style("font-size", "14px")
//         //     .style("fill", "red")
//         //     .style("max-width", 400)
//         //     .text("avg hd other")
//     };


//     render() {
//         return (
//             <div
//                 id="my_dataviz"
//                 style={{
//                     backgroundColor: "#446b58",
//                     position: "relative",
//                     marginTop: "10px",
//                 }}
//             >
//             </div>
//         )
//     }
// }