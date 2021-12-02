// import { useState, useEffect } from "react"


export default function RadioHook(props) {



    return (

        <div className="div_radio_bit1">



            <label className="radio_bit1" >



                <input id="option1" type="radio"
                    className="radio_input1"
                    value={props.bit1}
                    name={props.bitName}
                    onChange={props.onChange}
                    disabled={props.equal}
                />


                <div className="radio_text1"  >
                    {props.bit1}

                    {/* {2 ** props.bitName[props.bitName.length - 1]} */}

                </div>

            </label>





            <label className="radio_bit1">



                <input id="option2" type="radio" className="radio_input1"
                    value={props.bit2}
                    name={props.bitName}
                    onChange={props.onChange}
                    disabled={props.equal}
                />





                <div className="radio_text1">
                    {props.bit2}
                </div>




            </label>





            {/* <label className="radio_bit1" >
                <div className="radio_text1" data-same={props.equal}>
                    {props.chosenBit}
                </div>
            </label> */}



        </div>


    )
}







