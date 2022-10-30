import './_radio-bit.sass';
import { useState } from 'react';

export default function RadioBit(props) {

    function toggleOption(event) {
        props.toggleBit(event.target)
    }

    return (

        <div className='radio-bit'>

            <label
                className='lbl-option'
            >
                <input className='radio_input1'
                    id="option1"
                    type="radio"
                    value={props.options[0]}
                    name={props.name}
                    onChange={toggleOption}
                    checked={props.options[0] === props.selected ? true : false}
                />
                {/* <div className="radio_text1" >
                    {props.options[0]}
                </div> */}
                {props.options[0]}
            </label>



            <label className='lbl-option' >
                <input className='radio_input1'

                    id="option2"
                    type="radio"
                    value={props.options[1]}
                    name={props.name}
                    onChange={toggleOption}
                    checked={props.options[1] === props.selected ? true : false}

                />
                {/* <div className="radio_text1">
                    {props.options[1]}
                </div> */}
                {props.options[1]}
            </label>





            <label className="radio_bit1 chosen-bit" >
                <div className="radio_text1" >
                    {props.selected}
                </div>
            </label>



        </div>


    )
}







