import React, { Component } from 'react';
//import InputGroup from "react-bootstrap/InputGroup";
//import FormControl from "react-bootstrap/FormControl";
import InputTemplate from "./InputTemplate";


// import { Form, ProgressBar, InputGroup, FormControl } from 'react-bootstrap';

//import * as d3 from 'd3';

export default class InputClasses extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         range1: 0,
    //         range2: 1023,
    //         limit1: 471,
    //         boundary1: 511,
    //         boundary2: 512,
    //         limit2: 552,
    //     };


    //     this.updateValue = this.updateValue.bind(this)
    // };


    // updateValue = (e) => {
    //     e.preventDefault();
    //     let a22 = e.target.name;
    //     let b22 = parseInt(e.target.value);
    //     this.setState({ [a22]: b22 });
    // };


    render() {

        var formFields = Object.entries(this.props.variables).map((key, value) => {
            let exceptions = ['width', 'myData', 'range1', 'range2', 'tick_values_heat', 'hammingData'];

            if (exceptions.includes(key[0]) === true) {

                return //console.log("exception: ", key[0])
            } else {
                return (
                    <InputTemplate
                        key={key[0]}
                        name={key[0]}
                        value={key[1]}
                        // updateValue={this.updateValue}

                        updateValue={this.props.updateValue}
                    >
                    </InputTemplate>
                )
            }
        })

        return (

            <div className="divButtons">
                {formFields}
            </div>

        )
    }
}
