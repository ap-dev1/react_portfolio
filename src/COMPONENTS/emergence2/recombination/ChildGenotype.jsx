import './_selected-parents.sass';
import './_child-genotype.sass';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { dec2binList } from "../../etbd_hamming/hammingFunctions";
import * as recHelpers from './recHelpers';

let g0 = recHelpers.emptyGenotype(0)

export default function ChildGenotype(props) {

    const [g1, setg1] = useState(g0)
    const [g2, setg2] = useState(g0)
    const [newp, setnewp] = useState(0)

    const [newg, setnewg] = useState(
        // [
        //     { name: 'bit0', value: 0 },
        //     { name: 'bit1', value: 0 },
        //     { name: 'bit2', value: 0 },
        //     { name: 'bit3', value: 0 },
        //     { name: 'bit4', value: 0 },
        // ]


        {
            'bit0': 0,
            'bit1': 0,
            'bit2': 0,
            'bit3': 0,
            'bit4': 0
        }

    )




    function toggleBit(event) {
        let a = event.target.name
        let b = event.target.value
        console.log("toggle bit event: ", a, b)
        console.log("newg: ", newg[a])

    }


    useEffect(() => {
        if (props.p1) {
            let phen = parseInt(props.p1)
            let gen = dec2binList(g1.length - 1, phen)
            setg1(gen)
        }
        if (props.p2) {
            let phen = parseInt(props.p2)
            let gen = dec2binList(g2.length - 1, phen)
            setg2(gen)
        }
    },
        [props.p1, props.p2]
    )




    return (
        <div id='recombination-demo' key={nanoid()}  >

            <div id='selected-parents' key={nanoid()} >
                <label>Phenotypes</label>
                <label key={nanoid()}>{props.p1}</label>
                <label key={nanoid()}>{props.p2}</label>
                <label key={nanoid()}>{newp}</label>
                {/* <label key={nanoid()}>{newg.toString()}</label> */}
            </div>


            <div id='child-genotype' key={nanoid()} >
                {
                    newg.map((item, i) => {
                        return (
                            <div
                                className='new-bit-wrapper'
                                role='radiogroup'
                            // name={item.name}
                            // name={item.na}
                            >
                                <input
                                    // className='option-input'
                                    type="radio"
                                    id="option1"
                                    value={g1[i]}
                                    name={item.name}
                                    onChange={toggleBit}
                                />
                                <label for='option1'
                                // className="lbl-option-text"
                                >
                                    {parseInt(g1[i])}
                                </label>

                                <input
                                    // className="radio_input1"
                                    type="radio"
                                    id='option2'
                                    value={g2[i]}
                                    name={item.name}
                                    onChange={toggleBit}
                                />
                                <label
                                    // className="lbl-option-text"
                                    for='option2'
                                >
                                    {parseInt(g2[i])}
                                </label>
                                {/* <button
                                    classname='new-bit'
                                >
                                    {item.value}
                                </button> */}
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>

    )
} 