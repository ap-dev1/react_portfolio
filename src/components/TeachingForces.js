import React, { Component } from "react";
import "./sassy/teaching.sass";

import parse from "html-react-parser";

import * as d3 from "d3"
import infoTeaching from "../data/infoTeaching"

class TeachingForces extends Component {

    // componentDidMount() {

    // }


    render() {

        var width = 400,
            height = 250;

        var nodes = [
            { x: width / 3, y: height / 2 },
            { x: 2 * width / 3, y: height / 2 }
        ];

        var links = [
            { source: 0, target: 1 }
        ];

        // var svg = d3.select('#svgTeachingForces')

        var Simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(links))
            .force("center", d3.forceCenter());


        console.log(Simulation)

        return (
            <div className="divTeachingForces">

                <svg id="svgTeachingForces" width={width} height={height}>


                </svg>

            </div>


        )
    }
}

export default TeachingForces;
