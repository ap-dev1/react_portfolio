import "./_mutation-demo.sass";
import React from "react"
import { nanoid } from "nanoid"
import CbxMutation from "./CbxMutation"


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
                <CbxMutation
                    mutant={this.state[[cellName]][0]}
                    bitState={this.state[[cellName]][1]}
                    cellValue={this.state[[cellName]][2]}
                    bitName={cellName}
                    onChange={this.onChange}
                />
            )
        })



        let myPhenotype = this.computePhenotype()



        return (

            <div id='mutation-demo' key={nanoid()} >

                <div className='child-string' key={nanoid()}>
                    {Checkboxes}
                </div>

                <div
                    id='div-swap'
                    key={nanoid()}
                    onClick={this.submitMutantPhenotype}
                    title={"Replace the original"}
                >

                    <span id='spanOriginal' >
                        {this.props.childPhenotype}
                    </span>


                    <label id='lblMutant' >
                        <div id='divMutantText'
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







