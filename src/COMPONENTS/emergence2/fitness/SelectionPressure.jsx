import "./_selection-pressure.sass";

import * as d3 from "d3";


export default function SelectionPressure(props) {

    const fitnessGradient = d3.scaleLinear()
        .domain([1, 21])
        .range(['yellow', '#274235'])


    return (

        <>
            <div id='selection-pressure' >

                <h2
                    title={`mu = ${props.miu}`}
                    style={{
                        // backgroundColor: fitnessGradient(props.miu),
                        // textShadow: `1px 1px 1px ${fitnessGradient(props.miu)}, -1px -1px 10px ${fitnessGradient(props.miu)}`
                        // textShadow: `1px 1px 1px ${fitnessGradient(props.miu)}, -1px -1px 10px ${fitnessGradient(props.miu)}`,

                        textShadow: `0px 0px 1px ${fitnessGradient(props.miu)}`,
                        // textShadow: `-1px -1px 10px ${fitnessGradient(props.miu)}`,

                        // color: 'rgba(0, 0, 0, 1)',
                        border: "1px solid grey",
                    }}
                >
                    {props.varName ? props.varName : 'varName'}
                </h2>

                <div className='div-plus-minus'>

                    <button className='btn-minus'
                        disabled={props.miu >= 20 ? true : false}
                        onClick={props.decrement}
                    >
                        -
                    </button>



                    <div className='div-display'>
                        <span
                            lambda={`= ${(1 / props.miu).toFixed(3)}`}
                        >
                            {props.miu}
                        </span>

                        {/* <span>
                            = {(1 / props.miu).toFixed(3)}
                        </span> */}

                    </div>

                    <button
                        disabled={props.miu <= 4 ? true : false}
                        className='btn-plus'
                        onClick={props.increment}
                    >
                        +
                    </button>


                </div>

            </div>




        </>

    )
}
