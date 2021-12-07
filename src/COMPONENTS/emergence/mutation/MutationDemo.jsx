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


        // let section_opacity = 0.5
        // if (this.props.demoState === "mutation") {
        //     section_opacity = 1
        // }


        return (

            <div
                //className="div_cbx" 
                style={{
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "row",
                }}
                key={nanoid()}
            >

                <div className="div_cbx" key={nanoid()}>
                    {Checkboxes}
                </div>

                <div
                    id='divReplaceOriginal'
                    key={nanoid()}
                    onClick={this.submitMutantPhenotype}
                    title={"click to replace the original phenotype"}
                >

                    <span id="spanOriginal" >
                        {this.props.childPhenotype}
                    </span>


                    <label id="lblMutant" >
                        <div id="divMutantText"
                            style={{
                                color: this.props.childPhenotype === myPhenotype ? "#5ee478" : "tomato",
                            }}
                        >
                            {myPhenotype}
                        </div>
                    </label>


                </div>




            </div>

        )
    }
}







