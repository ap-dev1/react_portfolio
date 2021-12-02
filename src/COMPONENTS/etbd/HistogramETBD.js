//import React from "react";
//import { useState } from "react";
import { useEffect } from "react";
//import { useRef } from "react";
import * as d3 from "d3";

export function HistogramETBD(props) {

    //var [data, setData] = useState([])
    var data = props

    useEffect(() => {
        var margin = { top: 75, left: 120, bottom: 100, right: 120 }
        var svgWidth = document.getElementById("svgMatching").clientWidth
        var svgHeight = document.getElementById("svgMatching").clientHeight
        var width = svgWidth - margin.left - margin.right
        var height = svgHeight - margin.top - margin.bottom


        var X_scale = d3.scaleLinear().domain([0, 256]).range([0, width]);
        var Y_scale = d3.scaleLinear().range([height, 0]).domain([0, 20])

        var groupHistogram = d3.select("#svgMatching")
            .append("g")
            .attr("id", "groupHistogram")
            .attr("transform",
                `translate(${margin.left},${margin.top})`);

        groupHistogram.select("#hist_X_axis")
            .attr("class", "axisLine")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(X_scale));



        // Turn data array into bins; 
        // Must be done before calling the Y_axis.
        var binGenerator = d3.bin()
            .value(function (d) { return d; })
            .domain(X_scale.domain())
            .thresholds(X_scale.ticks(8));

        var bins = binGenerator(data);

        groupHistogram.select("#hist_Y_axis")
            .attr("class", "axisLine")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(X_scale));

        groupHistogram.selectAll("rect")
            .data(bins)
            .join("rect")
            .attr("class", "histRect")
            .attr("x", 1)
            .attr("transform", function (d) { return `translate(${X_scale(d.x0)} , ${Y_scale(d.length)})` })
            .attr("width", function (d) { return X_scale(d.x1) - X_scale(d.x0) - 1 })
            .attr("height", function (d) { return height - Y_scale(d.length); })
            .style("fill", "#69b3a2")
    }, []);




}