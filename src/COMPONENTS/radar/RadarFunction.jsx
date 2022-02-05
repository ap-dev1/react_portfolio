import "./radarStyles.sass"

import * as d3 from "d3"
import { radarData, radarOptions } from "./radarData"

import { useEffect } from "react"

export default function RadarFunction() {
    // let id = '.radarChart'
    let id = '#svgRadar'

    let data = radarData()
    let options = radarOptions()


    var cfg = {
        w: 400,
        h: 300,
        // margin: { top: 20, right: 20, bottom: 20, left: 20 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },

        levels: 3,				// number of inner circles
        minValue: 0,
        maxValue: 0,

        labelFactor: 1.30, 	//How much farther than the radius of the outer circle should the labels be placed
        wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
        //opacityArea: 0.35, 	//The opacity of the area of the blob
        opacityArea: 0.15, 	// blob area
        dotRadius: 5,

        opacityCircles: 0.0, 	//The opacity of the circles of each blob
        strokeWidth: 1, 		//The width of the stroke around each blob
        roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
        color: d3.scaleOrdinal(),


        dotFill: "#ccc",
        // arcSize: Math.PI * 2,
        arcSize: Math.PI * 2,

        maxAngle: 30,

    };

    //Put all of the options into a variable called cfg
    if ('undefined' !== typeof options) {
        for (var i in options) {
            if ('undefined' !== typeof options[i]) { cfg[i] = options[i]; }
        }//for i
    }//if



    // max value; if the supplied maxValue is smaller than the actual one, replace by the max in the data; ... wow

    // var maxValue = Math.max(cfg.maxValue, d3.max(data, function (i) { return d3.max(i.map(function (o) { return o.value; })) }));

    var maxValue = cfg.maxValue;



    // axes' names
    var allAxis = (data[0].map(function (i, j) { return i.axis }))

    var total = allAxis.length // nr of axes
    var radius = Math.min(cfg.w / 2, cfg.h / 2)
    var Format = d3.format('%')

    // slice width, in radians: 
    // var angleSlice = Math.PI * 2 / total

    var angleSlice = cfg.arcSize / total



    // Scale for the radius

    var rScale = d3.scaleLinear()
        .range([0, radius])
        .domain([0, maxValue]);





    /////////////////////////////////////////////////////////
    //////////// Create the container SVG and g /////////////
    /////////////////////////////////////////////////////////


    useEffect(() => {
        d3.select(id).select("svg").remove();

        //Initiate the radar chart SVG
        // var svg = d3.select(id).append("svg")
        //     .attr("width", cfg.w + cfg.margin.left + cfg.margin.right)
        //     .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        //     .attr("class", "radar" + id);

        var svg = d3.select('#svgRadar')

        // var svg = d3.select(id).append("svg")
        //     .attr("width", cfg.w + cfg.margin.left + cfg.margin.right)
        //     .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        //     .attr("class", "radar" + id);

        //Append a g element		
        var g = svg.append("g")
            .attr("transform",
                // `translate(${(cfg.w / 4 + cfg.margin.left + 650)} , ${(cfg.h / 2 + cfg.margin.top + cfg.h / 4 + 120)})`

                `translate(${(cfg.w / 2 + cfg.margin.left)} , ${(cfg.h / 2 + cfg.margin.top)})`
            );

        // .attr("transform", "translate(" + (cfg.w / 2 + cfg.margin.left) + "," + (cfg.h / 2 + cfg.margin.top) + ")");

        /////////////////////////////////////////////////////////
        ////////// Glow filter for some extra pizzazz ///////////
        /////////////////////////////////////////////////////////

        //Filter for the outside glow
        var filter = g.append('defs').append('filter').attr('id', 'glow'),
            feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur'),
            feMerge = filter.append('feMerge'),
            feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
            feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');



        //                     CIRCULAR GRID        

        // var gArcs = svg.append('g')
        //     .attr("transform",
        //         `translate(${525}, ${225})`);

        // var arc1 = d3.arc()
        //     .innerRadius(149)
        //     .outerRadius(150)
        //     .startAngle(0)
        //     .endAngle(Math.PI / 2);

        // gArcs.append("path")
        //     .attr("class", "arc1")
        //     .attr("d", arc1)
        //     .attr("fill", "tomato");


        //Wrapper for the grid & axes
        var axisGrid = g.append("g").attr("class", "axisWrapper");

        //Draw the background circles

        // axisGrid.selectAll(".levels")
        //     .data(d3.range(1, (cfg.levels + 1)).reverse())
        //     .enter()
        //     .append("circle")
        //     .attr("class", "gridCircle")
        //     .attr("r", function (d, i) { return radius / cfg.levels * d; })
        //     .style("fill", "#CDCDCD")
        //     .style("stroke", "#CDCDCD")
        //     .style("fill-opacity", cfg.opacityCircles)
        //     .style("filter", "url(#glow)");



        //Text indicating at what % each level is
        // axisGrid.selectAll(".axisLabel")
        //     .data(d3.range(1, (cfg.levels + 1)).reverse())
        //     .enter().append("text")
        //     .attr("class", "axisLabel")
        //     .attr("x", 4)
        //     .attr("y", function (d) { return -d * radius / cfg.levels; })
        //     .attr("dy", "1.5em")
        //     .style("font-size", "12px")
        //     .attr("fill", "#737373")
        //     .text(function (d, i) {
        //         let a = maxValue * d / cfg.levels

        //         let b = a.toFixed(2)
        //         let c = `${b * 100}%`
        //         return c;
        //     });




        //                     AXES 


        // Straight lines radiating outward from the center:
        var axis = axisGrid.selectAll(".axis")
            .data(allAxis)
            .enter()
            .append("g")
            .attr("class", "axis");


        //Append the lines
        axis.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", function (d, i) { return rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2); })
            .attr("y2", function (d, i) { return rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2); })
            .attr("class", "line")
            //.style("stroke", "white")
            .style("stroke", "#ddd")
            .style("stroke-width", "1px")
            .style("stroke-dasharay", 4);

        //Append the labels at each axis
        axis.append("text")
            .attr("class", "legend")
            .style("font-size", "12px")
            .style("fill", "#999")

            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .attr("x", function (d, i) { return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2); })
            .attr("y", function (d, i) { return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2); })
            .text(function (d) { return d })
            .call(wrap, cfg.wrapWidth);





        //        CHART BLOBS         


        //The radial line function
        var radarLine = d3.lineRadial()
            //.interpolate("linear-closed")


            .curve(d3.curveLinearClosed)
            .radius(function (d) { return rScale(d.value); })
            .angle(function (d, i) { return i * angleSlice; });

        if (cfg.roundStrokes) {
            //radarLine.interpolate("cardinal-closed");
            radarLine.curve(d3.curveCardinalClosed)
        }

        //Create a wrapper for the blobs	
        var blobWrapper = g.selectAll(".radarWrapper")
            .data(data)
            .enter().append("g")
            .attr("class", "radarWrapper");

        //Append the backgrounds	
        blobWrapper
            .append("path")
            .attr("class", "radarArea")
            .attr("d", function (d, i) { return radarLine(d); })
            .style("fill", function (d, i) { return cfg.color(i); })
            .style("fill-opacity", cfg.opacityArea)
            .on('mouseover', function (d, i) {
                //Dim all blobs
                d3.selectAll(".radarArea")
                    .transition().duration(200)
                    .style("fill-opacity", 0.1);
                //Bring back the hovered over blob
                d3.select(this)
                    .transition().duration(200)
                    .style("fill-opacity", 0.7);
            })
            .on('mouseout', function () {
                //Bring back all blobs
                d3.selectAll(".radarArea")
                    .transition().duration(200)
                    .style("fill-opacity", cfg.opacityArea);
            });

        //Create the outlines	
        blobWrapper.append("path")
            .attr("class", "radarStroke")
            .attr("d", function (d, i) { return radarLine(d); })
            .style("stroke-width", cfg.strokeWidth + "px")
            .style("stroke", function (d, i) { return cfg.color(i); })
            .style("fill", "none")
            .style("filter", "url(#glow)");



        //Append the circles  --  DATA POINTS


        blobWrapper.selectAll(".radarCircle")
            .data(function (d, i) { return d; })
            .enter().append("circle")
            .attr("class", "radarCircle")
            .attr("r", cfg.dotRadius)
            .attr("cx", function (d, i) { return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2); })
            .attr("cy", function (d, i) { return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2); })
            // .style("fill", function (d, i, j) { return cfg.color(j); })
            .style("fill", cfg.dotFill)

            .style("fill-opacity", 0.8);





        //              TOOLTIP
        // 
        //    append invisible circles

        // wrapper:
        var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
            .data(data)
            .enter().append("g")
            .attr("class", "radarCircleWrapper");

        //Append a set of invisible circles on top for the mouseover pop-up
        blobCircleWrapper.selectAll(".radarInvisibleCircle")
            .data(function (d, i) { return d; })
            .enter().append("circle")
            .attr("class", "radarInvisibleCircle")
            .attr("r", cfg.dotRadius * 1.5)
            .attr("cx", function (d, i) { return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2); })
            .attr("cy", function (d, i) { return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2); })
            .style("fill", "none")
            .style("pointer-events", "all")
            .on("mouseover", function (d, i) {
                let newX = parseFloat(d3.select(this).attr('cx')) - 10;
                let newY = parseFloat(d3.select(this).attr('cy')) - 10;

                tooltip
                    .attr('x', newX)
                    .attr('y', newY)
                    .text(Format(d.value))
                    .transition().duration(200)
                    .style('opacity', 1);
            })
            .on("mouseout", function () {
                tooltip.transition().duration(200)
                    .style("opacity", 0);
            });

        //Set up the small tooltip for when you hover over a circle
        var tooltip = g.append("text")
            .attr("class", "tooltip")
            .style("opacity", 0);




        //                   WRAP SVG TEXT
        // 
        // from http://bl.ocks.org/mbostock/7555321


        function wrap(text, width) {
            text.each(function () {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = 1.4, // ems
                    y = text.attr("y"),
                    x = text.attr("x"),
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

                while (word = words.pop()) {
                    line.push(word);
                    tspan.text(line.join(" "));
                    if (tspan.node().getComputedTextLength() > width) {
                        line.pop();
                        tspan.text(line.join(" "));
                        line = [word];
                        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                    }
                }
            });
        }
    }, [])




    return (

        <svg id="svgRadar"
            style={{
                border: "1px solid #ccc",
                width: "320px",
                height: "300px",
                margin: "20px auto",

            }}
        >

        </svg>
    )
}//RadarChart