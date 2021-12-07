import "./radio_bit.sass"


import React from "react"

import { nanoid } from "nanoid"
//import ButtonNext from "../ButtonNext"

import RadioBit from "./RadioBit"
import { dec2binList } from "../../etbd_hamming/hammingFunctions";
import { Button } from "react-bootstrap"

export default class RecombinationDemo extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }


    onChange = (e) => {

        console.log("Recombination on change, props demoState =  ", this.state.demoState)


        let a = this.state[[e.target.name]]
        console.log("recombination, on change, a: ", a)
        this.setState({
            [e.target.name]: [a[0], a[1], parseInt(e.target.value), a[3]]
        })
    }






    createStates = () => {

        let nrBits = this.props.nrBits
        let p1, p2, x1, x2

        if (!this.props.parents) {
            p1 = this.props.low
            p2 = this.props.high
            x1 = dec2binList(nrBits, p1)
            x2 = dec2binList(nrBits, p2)
        } else {
            p1 = this.props.parent1
            p2 = this.props.parent2
            x1 = this.props.genotype1
            x2 = this.props.genotype2

        }


        x1.map((item, i) => {
            let power = x1.length - 1 - i
            let cellName = `myChildBit${power}`
            let outcome = ""
            let rnd = Math.random()
            if (rnd < .5) {
                outcome = x1[i]
            } else {
                outcome = x2[i]
            }

            this.setState({ [cellName]: [x1[i], x2[i], outcome, 2 ** power] })
        })
    }






    componentWillMount() {
        this.createStates()
    }


    // componentDidUpdate() {
    //     this.createStates()
    // }


    computeChildPhenotype = () => {
        let child = 0
        let emptyBits = 0
        Object.entries(this.state).map((entry) => {
            let bitState = entry[1][2]
            let slotValue = entry[1][3]
            child += bitState * slotValue

            if (bitState === "?" | bitState === "") {
                emptyBits += 1
            }
        })

        if (emptyBits > 0) {
            return ""
        } else {
            return child
        }
    }


    submitChildPhenotype = (e) => {
        let cp = this.computeChildPhenotype()
        //this.props.goToMutation(xxx)
        this.props.addChildItem(cp)
    }



    render() {



        let MyGenotypes = Object.entries(this.state).map((entry) => {

            let cellName = entry[0]
            let sameThing = false

            if (this.state[[cellName]][0] === this.state[[cellName]][1]) {
                sameThing = true
            }
            return (
                <RadioBit
                    bitName={cellName}
                    bitState1={this.state[[cellName]][0]}
                    bitState2={this.state[[cellName]][1]}
                    chosenBit={this.state[[cellName]][2]}
                    equal={sameThing}
                    onChange={this.onChange}

                />
            )
        })


        let ChildPhenotype = this.computeChildPhenotype()

        let section_opacity = 0.7
        if (this.props.demoState === "recombination") {
            section_opacity = 1
        }


        if (this.props.demoState !== "start") {
            return null
        } else {
            return (
                <div

                    className="div_genotypes"
                // style={{
                //     opacity: section_opacity,
                //     transition: "opacity 2s",
                // }}
                >


                    <div className="div_radio_bit div_labels">

                        <label
                            className="radio_bit"
                            style={{
                                border: "1px solid #0062cc",
                                borderBottom: "0px solid #0062cc",
                            }}
                        >
                            <div
                                value={this.props.parent1}
                                className="radio_text"
                                style={{
                                    color: "#ddd",
                                    fontSize: "14px",
                                }}
                            >
                                {this.props.parent1}

                            </div>
                        </label>


                        <label
                            className="radio_bit"
                            style={{
                                border: "1px solid #0062cc",
                                borderTop: "none",


                            }}
                        >
                            <div
                                value={this.props.parent2}
                                className="radio_text"
                                style={{
                                    color: "#ddd",
                                    fontSize: "14px",


                                }}
                            >
                                {this.props.parent2}
                            </div>
                        </label>



                        <label className="radio_bit"
                            style={{
                                marginTop: "5px"

                            }}
                        >
                            <div className="radio_text"
                                style={{
                                    color: "#5ee478",
                                    height: "30px",
                                    fontSize: "14px",
                                    transition: "color 1s",

                                }}
                            >  {ChildPhenotype}  </div>
                        </label>

                    </div>


                    {MyGenotypes}


                    <Button
                        onClick={this.submitChildPhenotype}
                        variant="outline-info"
                        style={{
                            height: "30px", fontSize: "10px", margin: "auto",
                        }}
                    >
                        next

                    </Button>

                </div>
            )
        }


    }
}







