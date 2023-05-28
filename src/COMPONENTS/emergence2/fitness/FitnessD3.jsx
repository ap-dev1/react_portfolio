import './_fitness-d3.sass'
import * as d3 from "d3"
import { nanoid } from "nanoid"
import { useState, useRef, useLayoutEffect } from "react"
import etbdState from "../../etbd/etbdState"
import _ from "lodash"

export default function FitnessD3(props) {

    const refFitness = useRef(null);

    let svgWidth = 400;
    let svgHeight = 300;
    let margin = { top: 50, left: 50, bottom: 50, right: 50 };

    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;


    useLayoutEffect(() => {

        // let miu = props.miu ? props.miu : 6;
        // let rnf = props.rnf ? props.rnf : true;

        // let population = props.population ? props.population : [5, 5, 5, 5, 5];
        // let rnd22 = props.rnd22 ? props.rnd22 : 9;

        // let nbt = props.nbt ? props.nbt : 5;

        /* 
                const getAge = (data, target) =>
                    data.reduce((acc, obj) =>
                        Math.abs(target - obj.age) < Math.abs(target - acc.age) ? obj : acc
                    );
         */



        // console.log("population: ", population)
        // console.log("ems, rnf: ", ems, ", ", rnf)
        // console.log("miu: ", miu)


        // let populationAgentHist = props.populationAgentHist
        // console.log('populationAgentHist: ', populationAgentHist)


        const PCumulated = (x) => {
            let lambda = 1 / props.miu
            let df = Math.abs(x - props.ems)
            let y = 1 - Math.exp(-lambda * df)

            return y
        }

        const pIndividual = (x) => {
            let lambda = 1 / props.miu
            let df = Math.abs(x - props.ems)
            let y = lambda * Math.exp(-lambda * df)
            return y
        }


        //------------------------------------           DATA

        let data = []

        etbdState.repertoire.forEach((x) => {
            let df = Math.abs(x - props.ems)
            let exists = props.population.includes(x) ? true : false

            let P
            let prob

            if (props.rnf === true) {
                P = PCumulated(x)
                prob = pIndividual(x)
            } else {
                P = PCumulated(1)
                prob = 1 / etbdState.repertoire.length
            }


            data.push({
                phen: x,
                df: df,
                P: P,
                prob: prob,
                // PU: 1,
                // probUniform: 1 / props.population.length,
                ems: x === props.ems ? true : false,
                exists: exists,
                available: true,
                parent: false,
                // child: false,
                // mutant: false, 

            })
        })


        const getNbt = (myData, target) =>
            myData.reduce((acc, obj) =>
                Math.abs(target - obj.df) < Math.abs(target - acc.df) ? obj : acc
            );


        const fontSizeGradient = d3.scalePow()
            .exponent(.2)
            .range(['.5rem', '1.2rem'])
            .domain([_.maxBy(data, function (o) { return o.df }).df, 0])


        const fitnessGradient = d3.scalePow()
            .exponent(.4)
            .domain([0, _.maxBy(data, function (o) { return o.df }).df])
            .range(['rgba(255, 255, 0, 1)', 'rgba(50, 50, 0, 1'])



        // =================  =================  =================        SCALES

        let x = d3.scaleLinear()
            .range([0, width])
            .domain([d3.min(etbdState.repertoire), d3.max(etbdState.repertoire)])

        let y = d3.scaleLinear()
            .range([height, 0])
            .domain([0, .3])

        // ==========================================================      CHART

        let svg = d3.select(refFitness.current)
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // ==========================================================      Y axis

        let yAxis = svg.append('g').attr("class", 'y-axis');
        yAxis.call(d3.axisLeft(y));
        yAxis.selectAll('.tick').remove();
        yAxis.selectAll('path').remove();

        // ==========================================================      X axis

        let xAxis = svg.append('g').attr("class", 'x-axis')
            .attr("transform", `translate(${0}, ${height})`);

        xAxis.call(
            d3.axisBottom(x)
                .tickPadding(10)
                .tickValues([d3.min(etbdState.repertoire), ...etbdState.class1, ...etbdState.class2, d3.max(etbdState.repertoire)])
        );

        // --------------------------------------------------------  

        xAxis.selectAll('.tick').selectAll('line').remove();
        let xLabels = xAxis.selectAll('.tick').selectAll('text');

        xLabels.attr('fill', (d) => {
            if (d === props.ems && props.rnf === false) { return 'rgba(0,200,200, 1)'; }
            if (d === props.ems && props.rnf === true) { return 'rgba(255, 255, 0, 1)'; }
            if (d === d3.min(etbdState.repertoire) || d === d3.max(etbdState.repertoire)) { return 'rgba(0,200,200, .5)'; }
            return 'rgba(0,200,200, .25)';
        });

        xLabels.text((d) => {
            if (d === d3.min(etbdState.repertoire)) { return 'min' }
            if (d === d3.max(etbdState.repertoire)) { return 'max' }
            return d
        });

        //  ==========================================================        AREA   PATH

        const probPath = svg.append('path').attr('id', 'probPath')
            .datum(data)
            .attr('fill', props.rnf === true ? 'rgba(187, 88, 64, .5)' : 'rgba(64,163,187, .5)')
            .attr('d', d3.area()
                .curve(d3.curveBasis)
                .x((d) => x(d.phen))
                .y0(y(0))
                .y1((d) => y(d.prob)))


        // PLOT THE PHENOTYPES, THE ACTUAL NUMBERS:
        svg
            .append('g')
            .selectAll('.phenotype-label')
            .data(data)
            .join("text")
            .attr("class", 'phenotype-label')
            .attr("x", d => x(d.phen))
            .attr("y", d => y(d.prob))

            .transition().duration(500)
            .text((d) => { return d.ems === true ? `fitness zero` : -d.df })
            .attr("font-weight", 100)
            .attr("font-family", "monospace")
            .attr('fill', (d) => {
                if (props.rnf === true) { return fitnessGradient(d.df) }
                return 'rgba(0, 100, 100, 1)'
            })
            .attr("font-size", '.8rem')


        svg
            .append('g')
            .selectAll('.phenotype-circles')
            .data(data)
            .join('circle')
            .attr("class", 'phenotype-label')
            .attr("x", d => x(d.phen))
            .attr("y", d => y(d.prob))

            .transition().duration(500)
            .text((d) => { return d.ems === true ? `fitness zero` : -d.df })
            .attr("font-weight", 100)
            .attr("font-family", "monospace")
            .attr('fill', (d) => {
                if (props.rnf === true) { return fitnessGradient(d.df) }
                return 'rgba(0, 100, 100, 1)'
            })
            .attr("font-size", '.8rem')




        // =============================
        // 
        // create texts for ems, rnf, df



        const txtInfo = svg.append('g')
            .attr("transform", `translate(${100}, 0)`);


        txtInfo
            .attr("font-weight", 100)
            .attr("font-family", "monospace")
            .attr("font-size", ".8rem")
            .attr("fill", "rgba(0, 200, 200, 1)");

        // txtInfo.append("text").text(`max df: ${_.maxBy(data, 'df').df}`).attr("y", 0);
        // txtInfo.append("text").text(`rnf: ${props.rnf}`).attr("y", 25);
        // txtInfo.append("text").text(`(mu): ${props.miu}`).attr("y", 50);

        //  ---------------------------       UNIFORM  AREA
        // svg.append('path')
        //     .datum(data)
        //     .attr('stroke', 'lightgrey')
        //     .attr('stroke-width', 1)
        //     .attr('fill', '#339376')
        //     .attr('d', d3.area()
        //         // .curve(d3.curveBasisOpen)
        //         .curve(d3.curveBasis)
        //         .x((d) => x(d.phen))
        //         .y0(y(0))
        //         // .y1((d) => y(d.uniformProb)))
        //         .y1((d) => props.rnf === true ? y(d.prob) : y(1 / etbdState.repertoire.length)))



        // PLOT THE PHENOTYPES, THE ACTUAL NUMBERS:
        // svg
        //     .append('g')
        //     .selectAll('.phenotype-label')
        //     .data(data)
        //     .join("text")
        //     .attr("class", 'phenotype-label')
        //     .attr("x", d => x(d.phen))
        //     .attr("y", d => y(d.prob))
        //     .text((d) => d.phen)

        //     .attr("dy", -10)
        //     .attr("font-weight", 100)

        //     .attr('fill', d => {
        //         fitnessGradient(d.df)
        //     }
        //     )

        //     .attr('font-size', d => fontSizeGradient(d.df))






    },
        [refFitness, props]
    );


    return (
        <>

            {/* <div
                style={{
                    width: "fit-content",
                    minWidth: "50px",
                    position: "absolute",
                    marginTop: "3rem",
                    alignSelf: "flex-end",
                    marginRight: "1rem",
                    color: "#cccccc"
                }}
                onClick={(e)=>{
                    e.preventDefault()
                    let fitnessVal = d3.randomExponential(1 / props.miu)(d3.min(etbdState.repertoire), d3.max(etbdState.repertoire))
                    setrnd22(fitnessVal)

                }}
            >
                <button

                >
                    get a random fitness
                    </button>
            </div> */}

            <svg id='svg-fitness'
                style={{
                    width: svgWidth,
                    height: svgHeight,
                    margin: 'auto',
                    // border: '1px solid rgba(0, 10, 10, 1)'
                }}
                key={nanoid()}
            >

                <g id='g-fitness' ref={refFitness}>

                </g>

            </svg></>
    )
}


