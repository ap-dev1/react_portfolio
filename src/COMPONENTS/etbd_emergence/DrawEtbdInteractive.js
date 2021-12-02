// import * as d3 from "d3";
// import { scaleBand } from "d3";
// import { useEffect, useRef, useState } from "react";

// export default function DrawEtbdInteractive() {

//     var [low, setLow] = useState(0)
//     var [high, setHigh] = useState(15)
//     var [genZero, updateGenZero] = useState([])
//     var [genOne, updateGenOne] = useState([])


//     var [myRange, updateMyRange] = useState(() => {
//         let res = []
//         let rng = d3.range(low, high)

//         rng.forEach((val) => {
//             res.push(
//                 {
//                     phenotype: val,
//                     genotype: "",
//                     frequency: 0,
//                     fitness: 0,

//                 }
//             )
//         })

//         return res
//     })


//     useEffect(() => {
//         var margin = { top: 20, left: 10, bottom: 50, right: 10 }
//         var svgWidth = document.getElementById("svgEtbd").clientWidth
//         var svgHeight = document.getElementById("svgEtbd").clientHeight

//         var width = svgWidth - margin.left - margin.right
//         var height = svgHeight - margin.top - margin.bottom

//         var c1 = d3.range(11, 15)
//         var c2 = d3.range(16, 20)


//         let etbd = d3.select("#gEtbd")
//             .attr("transform",
//                 `translate(${margin.left},${margin.top})`)

//         let X = d3.scaleBand()
//             .range([0, width])
//             .domain(d3.range(low, high))
//             .padding(0.2)
//             .paddingInner(.2)

//         let Y = d3.scaleLinear()
//             .range([height, 0])
//             .domain([0, 1])


//         // -----------------   X    AXIS ------------------------
//         etbd.select(".x_axis")
//             .attr("transform", "translate(0," + height + ")")
//             .call(
//                 d3.axisBottom(X)
//                     .tickPadding(10)
//                     .tickValues(d3.range(low, high))

//             )
//             .selectAll("text")
//             .attr("padding", "5px")
//             .on("click", (e, d) => {
//                 updateGenZero((genZero) => [...genZero, { phenotype: d, frequency: 1 }])
//                 let a = genZero.filter(item => item.phenotype === d)
//                 if (a.length > 0) {
//                     a[0].frequency += 1
//                 }
//             })



//         // -----------------   Y    AXIS ------------------------
//         etbd.select(".y_axis")
//             .call(
//                 d3.axisLeft(Y)
//                     .tickValues([])
//                 //.tickSize(-width)

//             )
//             .selectAll("text").remove()


//         etbd.selectAll("rect")
//             //.data(genZero)
//             .data(genZero)
//             .join(
//                 enter => enter.append('rect').attr("class", "new1111"),
//                 update => update.attr("class", "update1111"),
//                 exit => exit.remove().transition()
//                     .duration(1000)
//             )
//             .attr("x", (d) => {
//                 return X(d.phenotype)
//             })
//             .attr("y", (d) => Y(.25))
//             .attr("width", X.bandwidth())
//             // .attr("height", (d) => height - Y(d.frequency))
//             .attr("height", (d) => height - Y(.25))
//             .transition()
//             .duration(1000)
//             .attr("fill", "#ddd")
//             .attr("stroke", "#555")
//             .attr("stroke-width", (d) => d.frequency * 3)

//     })



//     return (
//         <svg id="svgEtbd">
//             <g id="gEtbd">

//                 <g className="x_axis"></g>
//                 <g className="y_axis"></g>
//             </g>
//         </svg>

//     )
// }