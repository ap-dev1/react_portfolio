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
                    //border: "1px solid blue",
                    width: "100%",
                    // margin: "0px 0px 0px 20px",

                    margin: "auto",
                    //textAlign: "center",
                    //padding: "0px",
                    display: "flex",
                    flexDirection: "row",

                }}
                key={nanoid()}
            >



                <div
                    style={{
                        //border: "1px solid red",
                        width: "60px",
                        //padding: "5px",
                        height: "60px",
                        marginBottom: "10px",
                        verticalAlign: "middle",

                        borderRadius: "10px",

                        //marginLeft: "15px",
                        //textAlign: "center",
                        //padding: "0px",
                        display: "flex",
                        flexDirection: "column",
                        webkitBoxShadow: "inset 2px -2px 2px 0px #111, -1px -1px 1px 1px #fec5e577",
                        cursor: "pointer",

                    }}
                    key={nanoid()}
                    onClick={this.submitMutantPhenotype}
                    title={"click to replace the original phenotype"}
                >



                    {/* <label className="radio_bit1"
                        style={{
                            //margin: "5px auto",
                            borderRadius: "0px",
                            width: "60px",
                            textAlign: "left",
                            height: "20px",

                            //webkitBoxShadow: "inset 2px -2px 2px 0px #111, -1px -1px 1px 1px #4496487b",
                            //boxShadow: "inset 2px -2px 2px 0px #111, -1px -1px 1px 1px #4496487b",

                        }}
                    >
                        <div
                            className="radio_text1"
                            style={{
                                color: "#5ee478",
                                //color: "#0062cc",
                                color: "#03A062",
                                fontSize: "11px",
                                width: "60px",
                                textAlign: "left",
                                height: "20px",
                                //marginBottom: "0px",
                            }}
                        >
                            {this.props.childPhenotype}
                        </div>
                    </label> */}



                    <span
                        style={{
                            //color: "#5ee478",
                            //color: "#0062cc",
                            //color: "#03A062",
                            fontSize: "12px",
                            //width: "60px",
                            //textAlign: "left",
                            //height: "20px",
                            // marginBottom: "0px",
                            color: "#03A062",
                            margin: "4px auto auto 6px",

                        }}
                    >
                        {this.props.childPhenotype}

                    </span>




                    <label className="radio_bit1"
                        style={{
                            borderRadius: "0px",
                            width: "60px",
                            margin: "auto auto 15px auto",
                        }}
                    >
                        <div
                            className="radio_text1"
                            style={{
                                color: "#5ee478",
                                height: "20px",
                                fontSize: "14px",
                                width: "60px",
                                margin: "auto",
                                paddingLeft: "15px",
                                color: this.props.childPhenotype === myPhenotype ? "#5ee478" : "tomato"
                            }}
                        >
                            {myPhenotype}
                        </div>
                    </label>


                    {/* <Button
                        onClick={this.submitMutantPhenotype}
                        variant="outline-success"
                        style={{
                            width: "60px",
                            height: "30px",
                            fontSize: "10px",
                            margin: "auto",
                            position: "absolute",
                            marginLeft: "80px",
                            marginTop: "30px",
                        }}
                    >
                        replace

                    </Button> */}

                </div>



                <div className="div_cbx" key={nanoid()}>
                    {Checkboxes}
                </div>

            </div>

        )
    }
}







