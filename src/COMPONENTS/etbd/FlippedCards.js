import "./agent-44.sass";
import { useState, useEffect } from "react";
import etbdState from "./etbdState";
import * as d3 from "d3";

// let p = d3.range(0, etbdState.popSize);
let p = Array(etbdState.popSize).fill("-")

// console.log(": ", p)


export default function FlippedCards(props) {

    const [data, setdata] = useState(p);

    useEffect(() => {
        if (props.ppl && props.ppl.length) {
            setdata(props.ppl)
        } else {
            // let p = d3.range(0, popSize - 1)
            // console.log("pp: ", p)
            setdata(p)
        }

    },
        [props]
    )


    return (
        <>
            {data.map((item, i) => {
                return (

                    <div className='card-wrapper'
                    // style={{
                    //     border: i === props.emsidx ? "1px solid yellow" : "0px solid darkslategrey"
                    // }}
                    >

                        <div
                            // className='card-container'
                            className={i === props.emsidx ? 'card-container flipped' : 'card-container'}
                        >

                            <div className='front'>
                                <div className="image-container">
                                    <img className="card-image"></img>
                                    {/* <span className="span-item" >
                                        {item}
                                    </span> */}
                                </div>
                            </div>


                            <div className='back'>
                                <span className="span-item" >
                                    {item}
                                </span>
                            </div>


                        </div>
                    </div>


                )
            })}
        </>
    )
}