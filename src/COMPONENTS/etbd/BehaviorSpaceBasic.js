
import { useState, useEffect } from "react";
import etbdState from "./etbdState";


export default function BehaviorSpaceBasic(props) {



    return (

        <div className='behavior-space-basic'>

            <div className='min'>
                {/* {`${etbdState.repertoire[0]}`} */}
                min
            </div>

            <div className='c1' style={{ color: etbdState.color11 }}>

                {/* {`${etbdState.class1[0]} ... ${etbdState.class1[etbdState.class1.length - 1]}`} */}
                This
            </div>


            <div className='c2' style={{ color: etbdState.color22 }}>
                {/* {`${etbdState.class2[0]} ... ${etbdState.class2[etbdState.class2.length - 1]}`} */}
                That
            </div>

            {/* <div className='else'> ... </div> */}


            <div className='max'>
                {/* {`${etbdState.repertoire[etbdState.repertoire.length - 1]}`} */}
                max
            </div>

        </div>
    )
}