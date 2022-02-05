import * as d3 from "d3"

export function createSVG_Matching() {

    let myTexts = [
        // {
        //     txt: 'Clicking inside the marked regions may result in points.',
        //     id: "introText2",
        //     x: 125, // 100
        //     y: 220, // 180
        // },
        // {
        //     txt: 'Obtain as many as you can. You have 15 seconds.',
        //     id: "introText22",
        //     x: 145, // 130
        //     y: 240, // 205
        // },
        {
            txt: 'When ready, click START.',
            id: "introText222",
            x: 200, // 220
            y: 230, // 230
        },
    ]


    var svg = d3
        .select('#demo')
        .append('svg')
        .attr("id", 'svgMatching')
        .attr("width", "100%")
        .attr("height", "100%")
        //.style("background-color", '#1d2731')
        // .style("background-color", '#aaaaaa')
        .style("background-color", '#fff')
    // .style("box-shadow", '0px 0px 10px #394d61')
    // .style("box-shadow", '0px 0px 6px cyan')


    //.style("border", "5px solid #fff")



    svg.selectAll('.introTexts').data(myTexts).join("text")
        .text(d => d.txt)
        .attr("class", "introTexts")
        .attr('id', d => d.id)
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("font-family", 'Mono')
        .attr("font-size", ".9rem")
        .attr("fill", 'rgb(50, 50, 50)')



    return svg
}