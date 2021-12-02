//import {useState, useEffect} from "react"
// import { Form, ButtonToolbar, Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap"

import React from "react"
import RadioHook from "./RadioHook"
import { Button } from "react-bootstrap"

import { dec2binList } from "../../etbd_hamming/hammingFunctions";
import { nanoid } from "nanoid"

export default class Rec2 extends React.Component {


    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    createStates = () => {

        let nrBits = this.props.nrBits
        let p1, p2, x1, x2

        if (!this.props.parents) {
            p1 = this.props.low
            p2 = this.props.high

        } else {
            p1 = this.props.parent1
            p2 = this.props.parent2
        }


        x1 = dec2binList(nrBits, p1)
        x2 = dec2binList(nrBits, p2)



















        // console.log("x1, x2: ", x1, x2)

















        for (let i = 0; i < nrBits; i++) {

            let power = x1.length - 1 - i
            let cellName = `childBit_${power}`

            let outcome = ""
            let bit1 = parseInt(x1[i])
            let bit2 = parseInt(x2[i])


            if (bit1 === bit2) {
                outcome = parseInt(bit1)
            } else {
                // let rnd = Math.random()
                // if (rnd < .5) {
                //     outcome = bit1
                // } else {
                //     outcome = bit2
                // }
            }


            this.setState({ [cellName]: outcome })
        }
    }



    componentWillMount() {
        this.createStates()
    }


    computeChildPhenotype = () => {
        let child = 0

        Object.entries(this.state).map((entry) => {

            let cellName = entry[0]
            let power = cellName[cellName.length - 1]


            let bitState = this.state[[cellName]]
            let slotValue = 2 ** power

            // 2 ** props.bitName[props.bitName.length - 1]



            child += bitState * slotValue
        })
        return child
    }





    submitChildPhenotype = (e) => {
        let cp = this.computeChildPhenotype()
        this.props.addChildItem(cp)
    }


    render() {

        let MyGenotypes = Object.entries(this.state).map((entry, i) => {
            let cellName = entry[0]
            let sameThing = false

            if (this.props.g1[i] === this.props.g2[i]) {
                sameThing = true
            }

            return (
                <RadioHook
                    bitName={cellName}
                    bit1={this.props.g1[i]}
                    bit2={this.props.g2[i]}
                    chosenBit={this.state[[cellName]]}
                    equal={sameThing}
                    onChange={this.onChange}

                />
            )
        })



        let ChildPhenotype = this.computeChildPhenotype()


        return (

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%"
                }}
            //className="div_genotypes"

            >


                <div
                    className="div_radio_bit1 div_labels1"
                    style={{
                        margin: "auto",
                        margin: "1px 20px auto 5px",
                        width: "70px"

                    }}
                >

                    <label
                        className="radio_bit1"
                        style={{
                            border: "1px solid #0062cc",
                            borderBottom: "0px solid #0062cc",

                        }}
                    >
                        <div
                            value={this.props.parent1}
                            className="radio_text1"
                            style={{
                                color: "#ddd",
                                fontSize: "14px",
                            }}
                        >
                            {this.props.parent1}

                        </div>
                    </label>


                    <label
                        className="radio_bit1"
                        style={{
                            border: "1px solid #0062cc",
                            borderTop: "none",

                        }}
                    >
                        <div
                            value={this.props.parent2}
                            className="radio_text1"
                            style={{
                                color: "#ddd",
                                fontSize: "14px",
                            }}
                        >
                            {this.props.parent2}
                        </div>
                    </label>



                    <label className="radio_bit1"
                        style={{
                            marginTop: "5px",
                            border: "1px solid #0062cc",
                            borderRadius: "5px",
                            // textAlign: "center",



                        }}
                    >
                        <div
                            className="radio_text1"
                            style={{
                                color: "#5ee478",
                                height: "30px",
                                fontSize: "14px",
                                width: "100%",
                                //border: "1px solid red"

                            }}
                        >
                            {ChildPhenotype}

                        </div>



                    </label>


                </div>




                <div
                    //className="div_row"
                    style={{
                        textAlign: "left",
                        display: "inline-flex",
                        //margin: "auto",
                        margin: "1px 5px auto 5px",
                        border: "1px solid red"

                    }}
                >
                    {MyGenotypes}

                </div>



                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        //border: "1px solid #fff",
                        height: "fit-content",
                        margin: "auto",

                    }}
                >


                    <Button
                        onClick={this.submitChildPhenotype}
                        variant="outline-info"
                        style={{
                            width: "60px", height: "30px", fontSize: "10px", margin: "auto", marginBottom: "5px", padding: "2px"
                        }}
                    >
                        automate

                    </Button>


                    <Button
                        onClick={this.submitChildPhenotype}
                        variant="outline-success"
                        style={{
                            width: "60px", height: "30px", fontSize: "10px", margin: "auto", marginTop: "5px", padding: "2px"
                        }}
                    >
                        next

                </Button>

                </div>



            </div>
        )

    }
}