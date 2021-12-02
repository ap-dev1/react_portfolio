import * as d3 from "d3"

export function createSVG_Matching() {


    // EXPERIMENTAL ENVIRONMENT, svgMatching:
    var svg = d3
        .select("#demo")
        .append("svg")
        .attr("id", "svgMatching")
        .attr("width", "100%")
        .attr("height", "100%")

    svg
        .append("text")
        .attr("class", "introTexts")
        .attr("id", "introText2")
        .attr("x", 100)
        //.attr("y", 40)
        .attr("y", 180)
        .attr("font-size", ".9rem")
        .attr("font-family", 'Montserrat')
        .attr("fill", 'rgb(50, 50, 50)')
        .text("Clicking inside the marked regions may result in points.")

    svg
        .append("text")
        .attr("class", "introTexts")
        .attr("id", "introText22")
        .attr("x", 130)
        //.attr("y", 60)
        .attr("y", 205)
        .attr("font-size", ".9rem")
        .attr("font-family", 'Montserrat')
        .attr("fill", 'rgb(50, 50, 50)')
        .attr("text-align", "center")
        .text("Obtain as many as you can. You have 15 seconds.")

    svg
        .append("text")
        .attr("class", "introTexts")
        .attr("id", "introText222")
        .attr("x", 220)
        //.attr("y", 80)
        .attr("y", 230)
        .attr("fill", 'rgb(50, 50, 50)')
        .attr("font-size", ".9rem")
        .attr("font-family", 'Montserrat')
        .text("When ready, click START.")

    return svg
}