import React from "react"
import { nanoid } from "nanoid"

export default class RadioBit extends React.Component {

    render() {

        let colorBitChild = "#5ee4dd"

        if (this.props.bitState1 === this.props.bitState2) {
            colorBitChild = "#555"
        }


        return (


            <div className="div_radio_bit" key={nanoid()}>



                <label className="radio_bit" key={nanoid()}>

                    <input id="option1" type="radio" className="radio_input"
                        value={this.props.bitState1}
                        name={this.props.bitName}
                        onChange={this.props.onChange}

                        disabled={this.props.equal}
                        key={nanoid()}
                    />


                    <div

                        value={this.props.bitState1}
                        className="radio_text"
                        key={nanoid()}

                    >
                        {this.props.bitState1}
                    </div>

                </label>



                <label className="radio_bit" key={nanoid()}>

                    <input id="option2" type="radio" className="radio_input"


                        value={this.props.bitState2}
                        name={this.props.bitName}
                        onChange={this.props.onChange}
                        disabled={this.props.equal}
                        key={nanoid()}
                    />


                    <div
                        value={this.props.bitState2}
                        className="radio_text"
                        key={nanoid()}
                    >
                        {this.props.bitState2}
                    </div>

                </label>


                <label
                    className="radio_bit"
                    style={{
                        marginTop: "5px"
                    }}
                    key={nanoid()}
                >

                    <div className="radio_text radio_text_child"
                        key={nanoid()}

                        value={this.props.chosenBit}
                        style={{
                            color: colorBitChild,
                            borderTop: "1px solid #444",
                            borderRadius: "0px"
                        }}>
                        {this.props.chosenBit}

                    </div>
                </label>



            </div>



        )
    }
}







