import React from "react"
import { nanoid } from "nanoid"


export default class CheckProps extends React.Component {

    render() {
        return (

            <React.Fragment>


                <label
                    className="cbx_mutation"
                    key={nanoid()}
                    style={{
                        textAlign: "center",
                        fontSize: "13px",
                        //height: "40px",
                        //border: "1px solid red"

                    }}
                    title={2 ** this.props.bitName[this.props.bitName.length - 1]}
                > 2<sup>{this.props.bitName[this.props.bitName.length - 1]}</sup>

                    <input
                        key={nanoid()}
                        className="cbx_input"
                        type="checkbox"
                        //type="radio"
                        checked={this.props.mutant}
                        value={this.props.bitState}
                        name={this.props.bitName}
                        onChange={this.props.onChange}
                    />


                    <div
                        value={this.props.bitState}

                        class="cbx_text"
                        key={nanoid()}
                    >
                        {this.props.bitState}
                    </div>

                </label>

            </React.Fragment>

        )
    }
}







