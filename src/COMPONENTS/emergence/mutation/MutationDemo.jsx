import "./checkbox_mutation.sass"
import React from "react"
import CheckProps from "./CheckProps"
import { nanoid } from "nanoid"
//import ButtonNext from "../ButtonNext"
import { Button } from "react-bootstrap"


export default class MutationDemo extends React.Component {

    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
    }



    onChange = (e) => {
        let a = this.state[[e.target.name]][0]
        let b = this.state[[e.target.name]][1]
        let b1 = Math.abs(1 - b)
        let absVal = this.state[[e.target.name]][2]

        this.setState({
            [e.target.name]: [e.target.checked, b1, absVal]
        })
    }




    createStates = () => {

        let bits = this.props.nrBits
        let defaultGenotype = []

        let x

        if (this.props.genotype === []) {
            x = Array.length(bits).fill("")
            console.log("mutation genotype: ", x)
        } else {
            x = this.props.genotype
        }

        x.map((item, i) => {
            let power = x.length - 1 - i
            let cellName = `bit${power}`
            this.setState({ [cellName]: [false, item, 2 ** power] })
        })
    }



    componentWillMount() {
        this.createStates()
    }


    computePhenotype = () => {
        let mtn = 0
        Object.entries(this.state).map((entry) => {
            let info = entry[1]
            mtn += info[1] * info[2]
        })

        return mtn
    }



    submitMutantPhenotype = (e) => {
        let xxx = this.computePhenotype()
        this.props.addToNext(xxx)
    }



    render() {

        const Checkboxes = Object.entries(this.state).map((entry) => {
            let cellName = entry[0]

            return (
                <CheckProps
                    mutant={this.state[[cellName]][0]}
                    bitState={this.state[[cellName]][1]}
                    cellValue={this.state[[cellName]][2]}
                    bitName={cellName}
                    onChange={this.onChange}
                />
            )
        })


        // const myPhenotype = this.computePhenotype()
        let myPhenotype = this.computePhenotype()


        let section_opacity = 0.5

        if (this.props.demoState === "mutation") {
            section_opacity = 1
        }


        return (
            <div
                key={nanoid()}
                className="div_cbx"
                style={{
                    opacity: section_opacity,
                    transition: "opacity 2s",
                    //border: "1px solid cyan",
                    width: "fit-content",
                    margin: "auto",
                    //backgroundColor: "#000"
                }}
            >


                {Checkboxes}


                <div
                    style={{
                        //border: "1px solid red",
                        width: "fit-content",
                        margin: "0px 0px 0px 20px",
                        textAlign: "center",
                        padding: "0px",
                    }}
                    key={nanoid()}
                >


                    <label
                        key={nanoid()}
                        value={myPhenotype}
                        className="cbx_text_mutated"
                        style={{
                            //width: "60px", height: "30px", fontSize: "14px", 
                            margin: "0px auto",
                            //border: "1px solid tomato"
                        }}
                    >
                        {myPhenotype}
                    </label>


                    <Button
                        onClick={this.submitMutantPhenotype}
                        variant="outline-info"
                        style={{
                            width: "60px", height: "30px", fontSize: "10px", margin: "0px",
                        }}
                    >
                        replace

                </Button>

                </div>



            </div>

        )
    }
}







