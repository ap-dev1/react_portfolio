// import * as d3 from "d3"
// import { useEffect } from "react"

// export default function PseudoRadar() {

//     let radarCirclesData = [
//         { name: 'origin', cx: 100, cy: 100, radius: 3, title: "title", stroke: "black", strokew: 1, fill: "black" },

//         { name: 'middle', cx: 100, cy: 100, radius: 50, title: "title", stroke: "grey", strokew: 1, fill: "none" },

//         { name: 'max', cx: 100, cy: 100, radius: 100, title: "title", stroke: "grey", strokew: 1, fill: "none" },



//         { name: 'var1', cx: 130, cy: 20, radius: 3, title: "title", stroke: "#222", strokew: 1, fill: "#555" },

//         { name: 'var2', cx: 150, cy: 60, radius: 3, title: "title", stroke: "#222", strokew: 1, fill: "#555" },

//         { name: 'var3', cx: 170, cy: 90, radius: 3, title: "title", stroke: "#222", strokew: 1, fill: "#555" },

//         { name: 'var4', cx: 160, cy: 130, radius: 3, title: "title", stroke: "#222", strokew: 1, fill: "#555" },


//         { name: 'var5', cx: 120, cy: 155, radius: 3, title: "title", stroke: "#222", strokew: 1, fill: "#555" },
//     ]



//     useEffect(() => {
//         d3.select('#svgPseudoRadar').selectAll('g').remove()

//         let svg = d3.select('#svgPseudoRadar').append('g')
//             .attr("transform", `translate(${0}, ${0})`)


//         svg.selectAll('circle').data(radarCirclesData).join("circle")
//             .attr("cx", d => d.cx)
//             .attr("cy", d => d.cy)
//             .attr("r", d => d.radius)
//             .style("stroke", d => d.stroke)
//             .style("stroke-width", d => d.strokew)
//             .style("fill", d => d.fill)



//         svg.append('text').text("sensitivity")
//             .attr("x", 160)
//             .attr("y", 5)
//             .style("font-size", "12px")
//             .style("fill", "#aaa")


//         svg.append('text').text("variability")
//             .attr("x", 190)
//             .attr("y", 40)
//             .style("font-size", "12px")
//             .style("fill", "#aaa")


//         svg.append('text').text("bias")
//             .attr("x", 200)
//             .attr("y", 70)
//             .style("font-size", "12px")
//             .style("fill", "#aaa")

//     }, [])





//     return (
//         <svg id="svgPseudoRadar"
//             style={{
//                 width: 300,
//                 height: 300,
//                 border: "1px solid tomato"
//             }}
//         ></svg>
//     )
// }