import './lovely-ogive.sass'
import * as d3 from "d3";
import { useRef, useState, useEffect } from "react";


export default function LovelyOgive(props) {

    const refOgiveGroup = useRef()

    const [margin, setMargin] = useState({ top: 30, left: 75, bottom: 90, right: 75 })

    const [width] = useState(() => {
        return (
            400 - margin.left - margin.right
        )
    })

    const [height] = useState(() => {
        return (
            300 - margin.top - margin.bottom)

    })

    const [X] = useState(() => {
        let x = d3.scaleLinear()
            .range([0, width])
            .domain([0.0, 7.5])

        return x
    })


    const [Y] = useState(() => {
        let y = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 1])

        return y
    })

    const [Y2] = useState(() => {
        let y2 = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 120])

        return y2
    })


    const [labelPath, setLabelPath] = useState('M8.571428571428571,157.5C8.571428571428571,157.5,28.643740823121025,148.9455085807564,37.142857142857146,140C48.49466858517217,128.0519664816741,55.42536315093716,102.81687644641862,65.71428571428571,87.5C74.65974479437328,74.18310596735574,84.19903186779767,62.46469839912068,94.28571428571428,52.50000000000001C103.35452113897328,43.540867414236516,112.6955925873036,34.012394483847494,122.85714285714285,29.750000000000007C131.8783198087884,25.965949943126688,141.99210349197116,28.256742422979706,151.42857142857142,26.250000000000004C161.0430488425248,24.20540239939486,171.2324781245283,18.812443156471748,180,17.499999999999996C187.17286214268302,16.42626742593976,200,17.499999999999996,200,17.499999999999996')


    const [labelPath1, setLabelPath1] = useState('M8.571428571428571,7.29166666666666C8.571428571428571,7.29166666666666,27.334891875651056,42.133879269055384,37.142857142857146,58.33333333333334C46.41282935220241,73.64420412979968,55.526816026962024,89.40278566230373,65.71428571428571,102.08333333333331C74.71952926441307,113.29234044024138,84.76190476190477,121.52777777777777,94.28571428571428,131.25C103.8095238095238,140.97222222222223,112.4235583437783,154.4040682831571,122.85714285714285,160.41666666666666C131.7239045450113,165.52634655886033,141.8781147993057,165.51606916507023,151.42857142857142,167.70833333333334C160.92602877706975,169.88843175615827,171.28671615056186,172.37179468931797,180,173.54166666666669C187.2237625904809,174.51155099175597,200,174.85416666666666,200,174.85416666666666')











    useEffect(() => {

        let gOgive = d3.select(refOgiveGroup.current)
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

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



        //    ---------------   AXES  ------------------------

        gOgive.select(".scatterX")
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(X)
                    .tickPadding(15)
                    .tickValues([0.3, 1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3])
                    .tickFormat(x => `${x.toFixed(1)}`)
                //.tickSize(-height)
            )

        gOgive.select(".scatterY")
            .attr('transform', `translate(${width}, 0)`)

            .call(
                d3
                    .axisRight(Y)
                    .tickPadding(15)
                    .tickValues([0.0, 0.2, 0.4, 0.6, 0.8, 1.0])
                //.tickSize(-width)
            )

        gOgive.select(".scatterY2")
            .call(
                d3
                    .axisLeft(Y2)
                    .tickPadding(15)
                    .tickValues([0, 20, 40, 60, 80, 100, 120])
                //.tickSize(0)
            )

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
            .attr("fill", "#ffff00")
            .attr("stroke-width", 1)
            .attr("stroke", "#ffff0080")


        // DATA POINTS CHANGEOVERS:

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
            .attr("width", 2)
            .attr("height", 2)

            .attr("stroke-width", 1)
            .attr("fill", "#dddddd")
            .attr("stroke", "#dddddd")




        // CHANGEOVERS VALUES INSTEAD OF SYMBOL:
        // i may need a separate group, or use a class name: 

        gOgive
            .selectAll(".co_values")
            .data(myData)
            .join(
                enter => enter.append('text').attr("class", "co_values"),
                // .on('mouseover', onHover),
                // .on('mouseout', hoverOver),
                update => update.attr("class", "updated_co_values"),
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
            .attr("dx", 6)
            //.attr("height", 2)

            //.attr("stroke-width", 1)
            .style("fill", "#ffffffad")
            .style('font-size', '10px')
            //.attr("stroke", "#dddddd")
            .text(d => d.coFrequency)









        //   -----------------------   Lines   ------------------------

        // I have the scales, X, Y, Y2;

        const lineGenerator = d3.line()
            .curve(d3.curveCatmullRom.alpha(.5))
            .x(d => X(d.hdCod))
            .y(d => Y(d.sensitivity))

        const lineGenerator2 = d3.line()
            .curve(d3.curveCatmullRom.alpha(.5))
            .x(d => X(d.hdCod))
            .y(d => Y2(d.coFrequency))


        let path1 = lineGenerator(myData)
        setLabelPath(path1)

        let path2 = lineGenerator2(myData)
        setLabelPath1(path2)

        // SENSITIVITY:
        gOgive.append('path')
            .datum(myData)
            .attr('d', lineGenerator)
            .attr('fill', 'none')
            .style('stroke', '#ffff0099')
            .style('stroke-width', 2)


        // CHANGEOVERS:
        gOgive.append('path')
            .attr('d', lineGenerator2(myData))
            .attr('fill', 'none')
            .style('stroke', '#d4d4d462')
            .style('stroke-width', 2)
            .style('stroke-dasharray', 4)



        /* 
            How to use a gradient.         
        */


        //make defs and add the linear gradient
        var lg = gOgive.append("defs")
            .append("linearGradient")
            .attr("id", "mygrad")
            .attr("x1", "0%")
            .attr("y1", "100%")
            .attr("x2", "100%")
            .attr("y2", "100%")
            ;


        lg.append("stop")
            .attr("offset", "0%")
            .style("stop-color", "#35493f") // red, 1f342a, 35493f
        //.style("stop-opacity", 0)

        lg.append("stop")
            .attr("offset", "50%")
            .style("stop-color", "#4f6b63") // red, 1f342a, 35493F
        //.style("stop-opacity", 0)

        lg.append("stop")
            .attr("offset", "100%")
            .style("stop-color", "#99dec3")  // 00fff2ec,  6ED0AA
        //.style("stop-opacity", .5)


        // LABEL X-AXIS, WITH GRADIENT... ? 
        gOgive.append('text')
            .text('discriminability')
            .attr('fill', 'url(#mygrad)')
            // .attr("fill", "#00fff2ec")
            .attr("x", 50)
            .attr("y", height + 70)
            .attr("font-size", "22px")
            .style("font-variant", "small-caps")
            .style("letter-spacing", "1.5px")
        // .style("font-family", "Monospace")


    }, []);






    return (

        <div id='divHammingOgive' >

            <svg id='svgOgive'>

                <g
                    ref={refOgiveGroup}
                    id='gOgive'
                >
                    <g className="scatterX"></g>
                    <g className="scatterY"></g>
                    <g className="scatterY2"></g>


                    <path
                        id="PathOfOgive"
                        fill="transparent"
                        style={{
                            stroke: "transparent",
                            //strokeWidth: 2,
                        }}
                        d={labelPath}
                    />


                    <text
                        dy='-10px'
                        style={{
                            fill: '#ffff0099',
                            fontSize: "14px",
                            letterSpacing: "1px",
                            fontStyle: 'italic',
                        }}
                    >
                        <textPath
                            href="#PathOfOgive" // xlink:href doesn't work in JSX
                            startOffset={'45%'}
                        >
                            Sensitivity  ( a )
                        </textPath>
                    </text>

                    <path
                        id="PathOfChangeovers"
                        fill="transparent"
                        style={{
                            stroke: "transparent",
                            //strokeWidth: 2,
                        }}
                        d={labelPath1}
                    />


                    <text
                        dy='20px'
                        style={{
                            fill: '#ffffff99',
                            fontSize: "14px",
                            letterSpacing: "1px",
                        }}
                    >
                        <textPath
                            href="#PathOfChangeovers"
                            startOffset={'15%'}
                        >
                            Changeovers
                        </textPath>
                    </text>



                </g>

            </svg>

        </div>
    )
}

