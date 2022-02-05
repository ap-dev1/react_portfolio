// import "./chapters.sass"

import { nanoid } from "nanoid"
import data from '../../DATA/myData'
import parse from "html-react-parser"
import * as d3 from "d3"
import { useEffect } from "react"


export default function ResearchBegins() {

    const phenString = 'behavior acquisition and extinction; extinction bursts and spontaneous recovery; escape, avoidance, and behavior suppression; conditioned reinforcement and stimulus control, ...'

    /* 
        const phenomenaCircles = [
            { 'cx': 50, 'cy': 200 },
            { 'cx': 100, 'cy': 200 },
            { 'cx': 175, 'cy': 125 },
            { 'cx': 200, 'cy': 125 },
            { 'cx': 225, 'cy': 125 },
            { 'cx': 250, 'cy': 125 },
            { 'cx': 275, 'cy': 70 },
            { 'cx': 375, 'cy': 200 },
            { 'cx': 415, 'cy': 200 },
            { 'cx': 450, 'cy': 200 },
            { 'cx': 475, 'cy': 150 },
            { 'cx': 500, 'cy': 200 },
            { 'cx': 520, 'cy': 200 },
        ]
    
        const phenomenaAxes = [
            { 'x1': 50, 'y1': 200, 'x2': 500, 'y2': 200 },
        ]
    
        const crCurve = d3.line()
            .x(d => d.cx)
            .y(d => d.cy)
            .curve(d3.curveCatmullRom)
    
        useEffect(() => {
            let svg = d3.select('#svgBehaviorPhenomena')
                .attr("width", '600px')
                .attr("height", '300px')
                .attr("margin", '20px auto')
    
            let gTexts = svg.append('g')
            let gCircles = svg.append('g')
            let gAxes = svg.append('g')
    
            let gBehaviorPath = svg.append('g')
    
            gBehaviorPath
                .append("path")
                .attr("d", crCurve(phenomenaCircles))
                .style("stroke", "#aaa")
                .style("stroke-width", 3)
                .attr("fill", "none")
    
    
            gAxes.selectAll('line').data(phenomenaAxes).join('line')
                .attr('x1', d => d.x1)
                .attr('y1', d => d.y1)
                .attr('x2', d => d.x2)
                .attr('y2', d => d.y2)
                .attr('stroke', '#aaa')
                .attr('stroke-width', 1)
                .attr('stroke-dasharray', 3)
    
    
            gTexts.append('text').text('BEHAVIOR').attr("x", 240).attr("y", 50)
                .attr('class', 'txt-phenomena')
                .style('font-size', '16px')
                .style('stroke', '#aaa')
    
    
            gTexts.append('text').text('acquisition').attr("x", 160).attr("y", 165).attr('class', 'txt-phenomena').style('stroke', '#A9A9A9')
    
    
            gTexts.append('text').text('extinction').attr("x", 350).attr("y", 230).attr('class', 'txt-phenomena').style('stroke', '#A9A9A9')
            gTexts.append('text').text('spontaneous').attr("x", 450).attr("y", 100).attr('class', 'txt-phenomena').style('stroke', '#A9A9A9')
            gTexts.append('text').text('recovery').attr("x", 450).attr("y", 120).attr('class', 'txt-phenomena').style('stroke', '#A9A9A9')
    
    
            svg.append('rect').attr('fill', '#fff')
                .attr('x', 240)
                .attr('y', 60)
                .attr('width', 70)
                .attr('height', 220)
                .attr('stroke', 'tomato')
                .attr('stroke-width', 0)
    
    
            gAxes.selectAll('circle').data(phenomenaCircles).join('circle')
                .attr('cx', d => d.cx)
                .attr('cy', d => d.cy)
                .attr('r', 1)
                .attr('stroke', 'lightgrey')
                .attr('stroke-width', 1)
                .attr('fill', '#aaa')
        }, [])
    
     */
    return (

        <div
            id='researchBegins'
            key={nanoid()}
            style={{
                width: '100%',
                minHeight: '100vh'
            }}
        >




            <div className="carved-text" key={nanoid()}

            >

                <span className="span-title" key={nanoid()}>RESEARCH</span>


                <span className="span-year" >  2007 - ____ </span>


                <span className="span-intro" key={nanoid()}>
                    I study computational theories of <i>learning</i>, or behavior dynamics.
                </span>


            </div>





            <div
                key={nanoid()}
                style={{
                    border: "1px solid red",
                    margin: "auto",
                    //padding: "0px",
                    //margin: "100px auto 10px auto",
                    //width: "550px",
                    //fontSize: "14px",
                    display: "flex",
                    flexDirection: "row",
                }}
            >

                {/* <svg id='svgBehaviorPhenomena' key={nanoid()}>

                </svg> */}


                {/* <LearningNetwork /> */}


                {/* <div
                    style={{
                        width: "150px",
                        height: "200px",
                        border: "0px solid #aaa",
                        backgroundColor: "transparent",
                        margin: "auto",
                        color: "#778899",
                        color: "#A9A9A9",
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontSize: "16px",
                        padding: "10px",
                    }}
                    key={nanoid()}
                >
                    <p>
                        reinforcers<br />
                        punishers<br />
                        context<br />

                    </p>
                </div> */}


                {/* <div
                    style={{
                        //border: "1px solid lime",
                        width: "500px",
                        height: "200px",
                        border: "0px solid #aaa",
                        backgroundColor: "transparent",
                        margin: "auto",
                        color: "#778899",
                        color: "#A9A9A9",
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "26px",
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        padding: "10px 14px",
                    }}
                    key={nanoid()}

                >



                    <p>
                        {phenString}
                    </p>



                </div> */}


            </div>




        </div>

    )
}