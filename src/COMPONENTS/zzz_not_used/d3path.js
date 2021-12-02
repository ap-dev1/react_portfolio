import { useState, useEffect } from "react";
import { Collapse, Button } from "react-bootstrap";
import * as d3 from "d3";
import { path } from "d3";

export default function D3path() {
    var [pathObject, drawPath] = useState();

    useEffect(() => {
        var tail = d3.path(), //  path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x, y)
            tail1 = d3.path(),
            wing1 = d3.path(), //  path.quadraticCurveTo(cpx, cpy, x, y)
            wing2 = d3.path();

        //----------------------------------------------------------------------

        tail.moveTo(130, 250);
        let cp1 = [170, 175];
        let cp2 = [140, 125];

        tail.quadraticCurveTo(cp1[0], cp1[1], cp2[0], cp2[1]);

        tail1.moveTo(cp2[0], cp2[1]);
        let cp4 = [120, 100];
        let cp5 = [170, 95];
        let cp6 = [150, 120];

        tail1.bezierCurveTo(cp4[0], cp4[1], cp5[0], cp5[1], cp6[0], cp6[1]);

        wing1.moveTo(140, 195);
        wing2.moveTo(160, 195);

        wing1.quadraticCurveTo(40, 115, 145, 25);
        wing2.quadraticCurveTo(260, 115, 155, 25);

        var svg = d3
            .select("#myPath")
            .append("svg")
            .attr("width", 300)
            .attr("height", 300);

        svg
            .append("path")
            .attr("d", tail)
            .attr("stroke", "#59ebf0")
            .attr("stroke-width", 3)
            .attr("fill", "none");

        svg
            .append("path")
            .attr("d", wing1)
            .attr("stroke", "#59ebf0")
            .attr("stroke-width", 3)
            .attr("fill", "none");

        svg
            .append("path")
            .attr("d", wing2)
            .attr("stroke", "#59ebf0")
            .attr("stroke-width", 3)
            .attr("fill", "none");

        svg
            .append("path")
            .attr("d", tail1)
            .attr("stroke", "#59ebf0")
            .attr("stroke-width", 3)
            .attr("fill", "none");
    });

    return (
        <div>
            <div
                style={{
                    width: "300px",
                    height: "300px",
                    margin: "100px auto 0px auto",
                    backgroundColor: "#075e61",
                }}
                id="myPath"
            ></div>
        </div>
    );
}
