import "./_div-points.sass";
import React from "react";
import { useRef } from "react";

export default function DivPoints(props) {

    const reftPts = useRef(null)

    return (
        <div className='div-points'
        // key={nanoid()}
        // style={{ backgroundColor: this.state.consequence === true ? "LightGreen" : "transparent" }}
        >
            {/* <div className='points'>
                                    {this.state.consequence === true ? '+ 1' : ''}
                                </div> */}

            <div

                // className='points'
                className={props.consequence === true ? 'points added' : 'points'}

                ref={reftPts}
            >

                POINTS

            </div>



        </div>
    )
}