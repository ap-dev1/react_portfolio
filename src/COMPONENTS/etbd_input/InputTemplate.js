import React, { Component } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import './input_styles.sass'

export default class InputTemplate extends Component {

    render() {
        return (
            <InputGroup className="input_group">
                <FormControl
                    className="myNumberInput"
                    type="number"
                    name={this.props.name}
                    defaultValue={this.props.value}
                    onChange={this.props.updateValue}
                    value={this.props.value}
                >
                </FormControl>
            </InputGroup>
        )
    }
}
