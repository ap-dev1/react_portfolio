

import './_radio-bit.sass';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function RadioOption(props) {


    return (

        <label
            className='radio-option' key={nanoid()}
        >
            <input
                // id="option1"
                type="radio"
                className="radio_input1"
                value={props.options[0]}
                name={props.name}
                // onChange={props.handleChange}
                onChange={props.handleChange}

                checked={props.options[0] === props.selected ? true : false}
            />
            <div className="radio_text1" >
                {props.options[0]}
            </div>
        </label>








    )
}







