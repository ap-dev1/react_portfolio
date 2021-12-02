import "./hamming_style.sass";
import "./phenotypes.sass";

//import parse from "html-react-parser"
import * as d3 from "d3";

import { useEffect } from "react";
//import { useRef } from "react";


function DrawPhenotypes(props) {


    useEffect(() => {
        let margin = { top: 20, right: 20, bottom: 50, left: 30, }
        let svgWidth = 550
        let svgHeight = 150
        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom


        let X_Band = d3.scaleBand()
            .range([0, width])
            .domain(
                props.myData.map((d) => {
                    return d.hdNext.hdLabel
                }))
            .padding(0.0);


        // let X_Linear = d3.scaleLinear()
        //     .range([0, width])
        //     .domain([props.range1, props.range2])

        let Y_Linear = d3.scaleLinear().range([height, 0]).domain([1, 10]);



        let chartPhenotypes
        let xx = document.getElementById('chartPhenotypes')

        if (xx === null) {
            //console.log("no such group")

            chartPhenotypes = d3.select("#svgPhenotypes").append('g')
                .attr("id", "chartPhenotypes")
                .attr("transform",
                    `translate(${margin.left},${margin.top})`);

            chartPhenotypes
                .append("g")
                .attr("color", "yellow")
                .attr("font-size", "10px")
                .attr("transform", "translate(0," + height + ")")
                .call(
                    d3.axisBottom(X_Band)
                        .tickPadding(5)
                        .tickSize(0)
                )
                .selectAll("text").remove()

            // chartPhenotypes
            //     .append("g")
            //     .attr("class", "hammingLine")
            //     .attr("transform", "translate(0," + height + ")")
            //     .call(
            //         d3.axisBottom(X_Linear)
            //             //.tickPadding(2)
            //             //.tickSize(0)
            //             .ticks(5)
            //     )

            chartPhenotypes
                .append("g")
                .attr("class", "hammingLine")
                .call(
                    d3.axisLeft(Y_Linear)
                        .tickValues([1, 5, 10])
                )
        } else {
            chartPhenotypes = d3.select("#chartPhenotypes")
        }


        // average HD SELF:
        chartPhenotypes.append("text")
            .attr("fill", "lime")
            .attr("x", 100)
            .attr("y", 0)
            .text("props.hdSelf")

        // average HD OTHER:
        chartPhenotypes.append("text")
            .attr("fill", "orange")
            .attr("x", 300)
            .attr("y", 0)
            .text("props.hdOther")


        var updateChart = () => {
            let myBins
            let bb = document.getElementById("#myBins")

            if (bb === null) {
                myBins = chartPhenotypes.append('g').attr("id", "myBins").attr("class", "hammingBarPhens")
                    .selectAll("rect")
                    .data(props.myData)

            } else {
                myBins = d3.select("#myBins").data(props.myData)
            }

            myBins.enter().append("rect")
                .attr("x", (d) => X_Band(d.hdNext.hdLabel))
                .attr("y", (d) => Y_Linear(d.hdNext.hd))
                .attr("width", X_Band.bandwidth())
                .attr("height", (d) => height - Y_Linear(d.hdNext.hd))
                .attr("stroke-width", 1)

            myBins.exit().remove();
        }

        updateChart()


    }, []);





    useEffect(() => {

        var updateColors = () => {
            let groupBins = d3.select("#myBins")
            let bins1 = groupBins.selectAll("rect")

            bins1.attr("fill", (d) => {
                if (d.phenotype >= props.limit1 & d.phenotype <= props.boundary1) {
                    return 'rgb(28, 255, 28)'
                } else if (d.phenotype >= props.boundary2 & d.phenotype <= props.limit2) {
                    return 'rgb(255, 128, 49)'

                } else {
                    return '#fff'
                }
            })
            bins1.attr("stroke", (d) => {
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











    return (

        <>
            <div
                id="divPhenotypes"
                style={{
                    //backgroundColor: "#446b58",
                    position: "relative",
                    marginTop: "10px",
                }}
            >
                <svg
                    id="svgPhenotypes"
                ></svg>

                {/* <div id="ttPhenotypes"></div> */}

            </div >

        </>

    )
}


export default DrawPhenotypes;






    // var highlightClasses = () => {

    //     chartPhenotypes.selectAll("text")
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

    //     chartPhenotypes.selectAll("text").attr("fill", (d) => {
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
    // chartPhenotypes
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

    // let gBoundariesPhenotypes = chartPhenotypes.append("g").attr("id", "gBoundariesPhenotypes")

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