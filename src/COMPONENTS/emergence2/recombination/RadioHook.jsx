import './_radio-hook.sass';
import { useState } from 'react';

export default function RadioHook(props) {

    const [option, setoption] = useState('?')

    function handleChange(e) {
        console.log(e.target.id, option)
        props.onChange(e)
        setoption(e.target.id)

    }

    return (

        <div className='div-radio'>


            <label
                className='radio_bit1'
            >
                <input
                    id="option1"
                    type="radio"
                    className="radio_input1"
                    value={props.bit1}
                    name={props.bitName}
                    // onChange={props.onChange}
                    onChange={handleChange}
                    // checked={props.bit1 === parseInt(props.chosenBit) ? true : false}
                    checked={props.bit1 === props.chosenBit ? true : false}
                    disabled={props.equal}
                />
                <div className="radio_text1" >
                    {props.bit1}
                    {/* {2 ** props.bitName[props.bitName.length - 1]} */}
                </div>
            </label>



            <label className='radio_bit1' >
                <input
                    id="option2"
                    type="radio"
                    className="radio_input1"
                    value={props.bit2}
                    name={props.bitName}
                    onChange={handleChange}
                    checked={props.bit2 === props.chosenBit ? true : false}
                    disabled={props.equal}

                />
                <div className="radio_text1"
                >
                    {props.bit2}
                </div>
            </label>




            {/* 
            <label className="radio_bit1 chosen-bit" >
                <div className="radio_text1" data-same={props.equal}>
                    {props.chosenBit}
                </div>
            </label> */}



        </div>


    )
}







