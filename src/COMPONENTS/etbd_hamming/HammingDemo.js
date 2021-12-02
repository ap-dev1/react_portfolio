import "./hamming_style.sass";
import '../etbd_input/input_styles.sass'

import React from "react";
//import parse from "html-react-parser"

import { hdValues } from "./hdValues";
import { hdCodValues } from "./hdCodValues";


// import DrawPhenotypes from "./drawPhenotypes";
import HammingDistances from "./HammingDistances"

import InputTemplate from "../etbd_input/InputTemplate";
import HeatMapHook from "./HeatmapHook";
import TableHD from "./TableHook"


export default class HammingDemo extends React.Component {

    constructor() {
        super();

        this.state = {
            range1: 0,
            limit1: 471,
            boundary1: 511,
            boundary2: 512,
            limit2: 552,
            range2: 1023,
            hdValues: hdValues,
            hdCodValues: hdCodValues,
            lim1: 471,
            lim2: 512,
            lim3: 553,
            hdSame: 0,
            hdOther: 0
        };



        this.updateValue = this.updateValue.bind(this)
        // this.decreaseValue = this.decreaseValue.bind(this)
        // this.increaseValue = this.increaseValue.bind(this)

        //this.handleFieldChange = this.handleFieldChange.bind(this)
    };


    updateValue = (e) => {
        e.preventDefault();
        let a22 = e.target.name
        let b22 = e.target.value
        this.setState({ [a22]: parseInt(b22) })
        console.log("target name & value: ", a22, b22)
    };


    // handleFieldChange = (e) => {
    //     //e.preventDefault();
    //     let a22 = e.target.name
    //     let b22 = e.target.value
    //     this.setState({ [a22]: parseInt(b22) })
    //     console.log("target name & value: ", a22, b22)
    // };


    decreaseValue = (e) => {
        //e.preventDefault();
        let a22 = e.target.name
        let b22 = e.target.value
        this.setState({ [a22]: parseInt(b22) })
    };

    increaseValue = (e) => {
        //e.preventDefault();
        let a22 = e.target.name
        let b22 = e.target.value
        this.setState({ [a22]: parseInt(b22) })
    };


    componentDidMount() {
        // let c1 = d3.range(471, 512)
        // let c11 = d3.range(471, 553)
        // let hdScatter = loadHammingDataOriginal(c11, c1)
        // this.setState({ scatterData: hdScatter })
        // console.log(this.state.lim1)
    };


    componentDidUpdate() {
        //console.log("HammingDemo did update")
    };


    render() {

        var formFields = Object.entries(this.state).map((key, value) => {

            let exceptions = ['hdValues', 'range1', 'range2', 'hdCodValues', "lim1", "lim2", "lim3", 'hdSame', 'hdOther', ""];

            if (exceptions.includes(key[0]) === true) {
                return
            } else {
                return (
                    <InputTemplate
                        key={key[0]}
                        name={key[0]}
                        value={key[1]}
                        updateValue={this.updateValue}
                    >
                    </InputTemplate>
                )
            }
        })

        // var hdScatter = this.state.hdCodValues.filter(
        //     item => item.variable > this.state.boundary1 - 3
        //         & item.variable <= this.state.boundary1
        //         & item.group > this.state.boundary1 - 3
        //         & item.group < this.state.boundary2 + 3
        // )
        //console.log(hdScatter)



        return (

            <>
                <div id="divHamming">

                    {/* <div
                        style={{display: "flex", flexDirection: "row",}}>
                        <svg id="svgHamming"></svg>
                    </div> */}



                    {/* <Scatter2
                        limit1={this.state.limit1}
                        limit2={this.state.limit2}
                        boundary1={this.state.boundary1}
                        boundary2={this.state.boundary2}
                    /> */}




                    <HeatMapHook
                        //myData={hdScatter}
                        limit1={this.state.limit1}
                        limit2={this.state.limit2}
                        boundary1={this.state.boundary1}
                        boundary2={this.state.boundary2}
                    />



                    {/* <TableHD
                        limit1={this.state.limit1}
                        limit2={this.state.limit2}
                        boundary1={this.state.boundary1}
                        boundary2={this.state.boundary2}
                    /> */}

                    <HammingDistances
                        myData={this.state.hdValues}
                        limit1={this.state.limit1}
                        limit2={this.state.limit2}
                        boundary1={this.state.boundary1}
                        boundary2={this.state.boundary2}
                    />


                    {/* <DrawPhenotypes
                        myData={this.state.hdValues}
                        limit1={this.state.limit1}
                        limit2={this.state.limit2}
                        boundary1={this.state.boundary1}
                        boundary2={this.state.boundary2}
                    /> */}




                    <div className="divButtons">
                        {formFields}
                    </div>


                    <div className="divButtons">

                        <button
                            name="reset"
                            title="historical standard, typical sensitivity, HDcod is about 4.3."
                            onClick={() => {
                                this.setState({
                                    limit1: 303,
                                    boundary1: 343,
                                    boundary2: 344,
                                    limit2: 384,
                                })
                            }}
                        >???</button>


                        <button
                            name="reset"
                            title="historical standard, typical sensitivity, HDcod is about 4.3."
                            onClick={() => {
                                this.setState({
                                    limit1: 407,
                                    boundary1: 447,
                                    boundary2: 448,
                                    limit2: 488,
                                })
                            }}
                        >1.4</button>


                        <button
                            name="reset"
                            title="historical standard, typical sensitivity, HDcod is about 4.3."
                            onClick={() => {
                                this.setState({
                                    limit1: 215,
                                    boundary1: 255,
                                    boundary2: 256,
                                    limit2: 296,
                                })
                            }}
                        >3.4</button>


                        <button
                            name="reset"
                            title="historical standard, typical sensitivity, HDcod is about 4.3."
                            onClick={() => {
                                this.setState({
                                    limit1: 471,
                                    boundary1: 511,
                                    boundary2: 512,
                                    limit2: 552,
                                })
                            }}
                        >4.4</button>



                    </div>


                    {/* <div
                        id="divHeatMap"
                        style={{
                            //backgroundColor: "#446b58",

                        }}
                    >
                        <svg id="svgHeatMap"></svg>

                        <div id="ttHeatMap"></div>
                    </div > */}


                    {/* {drawHeatMap(
                        // this.state.hdCodValues.filter(
                        //     item => item.variable > 506
                        //         & item.variable <= 511
                        //         & item.group > 506
                        //         & item.group < 517
                        // ),
                        hdScatter,
                        [],
                        //this.state.tick_values_heat,
                        [this.state.limit1, this.state.boundary1],
                    )
                    } */}


                </div>
            </>

        )
    }
}