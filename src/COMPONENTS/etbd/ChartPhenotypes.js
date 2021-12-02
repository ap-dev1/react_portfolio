import * as d3 from "d3"
import React, { Component } from "react"

class DrawChartPhenotypes extends Component {

    constructor(props) {
        super(props)
    }


    componentDidMount() {

        var svgBarChart = d3.select("#svgBarChart")
        var X_group = svgBarChart.select("xGroup")

        var X_range = [0, 500]
        var X_scale = d3.scaleLinear().domain([0, 1000]).range(X_range)
        var marginLeft = 50

        var X_axis = d3.axisBottom(X_scale)

        var X_group = svgBarChart.append("g").attr("transform", `translate(${marginLeft},150 )`)

        X_group.call(X_axis)

        let classes = this.props.classes
        var c1 = d3.range(classes[0][0], classes[0][1])
        var c2 = d3.range(classes[1][0], classes[1][1])

        var color1 = 'rgb(255, 128, 49)',
            color2 = 'rgb(28, 255, 28)',
            colorE = 'rgb(179, 179, 179)'

        // X_group.selectAll("line")
        //     .data(myData)
        //     .enter()
        //     .append("line")
        //     .attr("x1", d => X_scale(d.behavior))
        //     .attr("y1", 0)
        //     .attr("x2", d => X_scale(d.behavior))
        //     .attr("y2", d => - d.present.length * 10)
        //     .attr("stroke", "darkgrey")
        //     .attr("stroke-width", 1)

        X_group.selectAll("line")
            .data(this.props.population)
            .enter()
            .append("line")
            .attr("x1", d => X_scale(d))
            .attr("y1", 0)
            .attr("x2", d => X_scale(d))
            .attr("y2", -50)
            .attr("stroke", (d) => {
                if (c1.includes(d)) {
                    return color1
                } else if (c2.includes(d)) {
                    return color2
                } else {
                    return colorE
                }
            })
            .attr("stroke-width", 2)
    }


    componentDidUpdate() {

        let classes = this.props.classes
        var c1 = d3.range(classes[0][0], classes[0][1] + 1)
        var c2 = d3.range(classes[1][0], classes[1][1] + 1)

        var color1 = 'rgb(255, 128, 49)',
            color2 = 'rgb(28, 255, 28)',
            colorE = 'rgb(179, 179, 179)'


        var X_group = d3.select("#xGroup")
            .attr("transform", `translate(50,150)`)

        var X_range = [0, 500]

        var X_scale = d3.scaleLinear().domain([0, 1000]).range(X_range)

        X_group.selectAll(".whatever").remove()

        X_group.selectAll("line")
            .data(this.props.population)
            .enter()
            .append("line")
            .attr("class", "whatever")
            .attr("x1", d => X_scale(d))
            .attr("y1", 0)
            .attr("x2", d => X_scale(d))
            .attr("y2", -50)
            .attr("stroke-width", 2)
            .attr("stroke", (d) => {
                if (c1.includes(d)) {
                    return color1
                } else if (c2.includes(d)) {
                    return color2
                } else {
                    return colorE
                }
            })
    }


    render() {
        return (
            <g id="xGroup"></g>
        )
    }
}




export default DrawChartPhenotypes;
