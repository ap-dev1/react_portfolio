

import * as d3 from "d3";

import { useEffect } from "react";
import { useRef } from "react";



export default function D3ScatterLogs(props) {

    const refOgiveGroup = useRef()

    useEffect(() => {

        let margin = { top: 75, left: 75, bottom: 125, right: 75 }

        let svgWidth = document.getElementById('svgScatterOgive').clientWidth
        let svgHeight = document.getElementById('svgScatterOgive').clientHeight

        let width = svgWidth - margin.left - margin.right
        let height = svgHeight - margin.top - margin.bottom


        //    ---------------   POSITION  ------------------------

        let gOgive = d3.select(refOgiveGroup.current)
            .attr("transform", `translate(${margin.left},${margin.top})`)




        //    ---------------   DATA  ------------------------

        // the data will come from props eventually:
        let myData = [
            { hdCod: 0.3, sensitivity: .1, coFrequency: 115 },
            { hdCod: 1.3, sensitivity: .2, coFrequency: 80 },
            { hdCod: 2.3, sensitivity: .5, coFrequency: 50 },
            { hdCod: 3.3, sensitivity: .7, coFrequency: 30 },
            { hdCod: 4.3, sensitivity: .83, coFrequency: 10 },
            { hdCod: 5.3, sensitivity: .85, coFrequency: 5 },
            { hdCod: 6.3, sensitivity: .9, coFrequency: 1 },
            { hdCod: 7, sensitivity: .9, coFrequency: .1 },
        ]


        let rangeX = [0, width]
        let rangeY = [height, 0]
        let rangeY2 = [height, 0]

        let X = d3.scaleLinear()
            .range(rangeX)
            .domain([0, 7])

        let Y = d3.scaleLinear()
            .range(rangeY)
            .domain([0, 1.2])

        let Y2 = d3.scaleLinear()
            .range(rangeY2)
            .domain([0, 120])



        //    ---------------   AXES  ------------------------

        gOgive.select(".scatterX")
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(X)
                    .tickPadding(10)
                    .tickValues([0, 1, 2, 3, 4, 5, 6, 7])
            )
            .selectAll("text").style("font-size", "10px")


        gOgive.select(".scatterY")
            .call(
                d3
                    .axisLeft(Y)
                    .tickPadding(10)
                    .tickValues([0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2])
            )

        gOgive.select(".scatterY2")
            .attr('transform', `translate(${width}, 0)`)
            .call(
                d3
                    .axisRight(Y2)
                    .tickPadding(10)
                    .tickValues([0, 20, 40, 60, 80, 100, 120])
            )


        //    ---------------   HOVER  ------------------------

        // let onHover = (e, d) => {
        //     let tgt = e.explicitOriginalTarget
        //     let circleId = tgt.attributes[1].value

        //     let bb = props.data.filter((item) => {
        //         return circleId === `Schedule${item.schedule}`
        //     })

        //     let xx = parseInt(tgt.attributes[2].value)
        //     let yy = parseInt(tgt.attributes[3].value)

        //     e.target.style.stroke = "cyan"
        //     e.target.style.fill = "cyan"

        //     gOgive.append("text")
        //         .attr("x", xx - 50)
        //         .attr("y", yy - 25)
        //         //.text(`${bbb1}, ${bbb2}`)
        //         .text(circleId)
        //         .attr("class", "d3tooltip")
        //         .style("fill", "white")
        //         .attr("font-size", "14px")
        //         .attr("font-family", "Courier New");
        // };


        // let hoverOver = (e, d) => {
        //     d3.selectAll(".d3tooltip").remove()
        //     e.target.style.stroke = "white"
        //     e.target.style.fill = "#ffffff89"
        // };


        //   -----------------------   DATA POINTS   ------------------------

        gOgive
            .selectAll("circle")
            .data(myData)
            .join(
                enter => enter.append('circle').attr("class", "new"),
                // .on('mouseover', onHover),
                // .on('mouseout', hoverOver),
                update => update.attr("class", "update"),
                exit => exit.remove()
            )
            .transition()
            .duration(1000)
            // .on('mouseover', d => {
            //     onHover(d)
            // })
            // .on('mouseout', hoverOver)
            //.attr("id", (d) => `Schedule${d.schedule}`)
            .attr("cx", (d) => X(d.hdCod))
            .attr("cy", (d) => Y(d.sensitivity))
            .attr("r", 3)
            .attr("stroke-width", 1)
            .attr("fill", "#ffffff89")
            .attr("stroke", "white");

        gOgive
            .selectAll("rect")
            .data(myData)
            .join(
                enter => enter.append('rect').attr("class", "newRect"),
                // .on('mouseover', onHover),
                // .on('mouseout', hoverOver),
                update => update.attr("class", "updateRect"),
                exit => exit.remove()
            )
            .transition()
            .duration(1000)
            // .on('mouseover', d => {
            //     onHover(d)
            // })
            // .on('mouseout', hoverOver)
            //.attr("id", (d) => `Schedule${d.schedule}`)
            .attr("x", (d) => X(d.hdCod))
            .attr("y", (d) => Y2(d.coFrequency))
            .attr("width", 3)
            .attr("height", 3)

            .attr("stroke-width", 1)
            .attr("fill", "#ffffff89")
            .attr("stroke", "white");


        gOgive.append('text').text('Sensitivity')
            .attr('x', -50)
            .attr('y', -30)
            .attr("fill", "#ffffff89")

        gOgive.append('text').text('Changeovers')
            .attr('x', width - 50)
            .attr('y', -30)
            .attr("fill", "#ffffff89")

        gOgive.append('text').text('Class discriminability')
            .attr('x', 50)
            .attr('y', height + 60)
            .attr("fill", "#ffffff89")


        gOgive.append('text').text('HD_same - HD_other')
            .attr('x', 50)
            .attr('y', height + 100)
            .attr("fill", "#ffffff89")


            .selectAll("text")
            .data(myData)
            .join(
                enter => enter.append('rect').attr("class", "newRect"),
                // .on('mouseover', onHover),
                // .on('mouseout', hoverOver),
                update => update.attr("class", "updateRect"),
                exit => exit.remove()
            )
            .transition()
            .duration(1000)
            // .on('mouseover', d => {
            //     onHover(d)
            // })
            // .on('mouseout', hoverOver)
            //.attr("id", (d) => `Schedule${d.schedule}`)
            .attr("x", (d) => X(d.hdCod))
            .attr("y", (d) => Y2(d.coFrequency))
            .attr("width", 3)
            .attr("height", 3)

            .attr("stroke-width", 1)
            .attr("fill", "#ffffff89")
            .attr("stroke", "white");

    }, []);






    return (

        <div
            style={{
                margin: "auto",
                border: "1px solid green"
            }}
        >

            <svg id='svgScatterOgive'
                style={{
                    margin: "auto",
                    border: "1px solid tomato",
                    width: "400px",
                    height: "400px",
                    margin: "auto",
                    border: "1px solid blue",
                }}
            >

                <g ref={refOgiveGroup}>

                    <g className="scatterX"></g>

                    <g className="scatterY"></g>
                    <g className="scatterY2"></g>

                </g>

            </svg>

        </div>
    )
}

