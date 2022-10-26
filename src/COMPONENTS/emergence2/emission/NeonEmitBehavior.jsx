import './_neon-emit-behavior.sass';
import { useState } from "react";
import { nanoid } from "nanoid";


export default function NeonEmitBehavior(props) {
    const [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "emission") {
            return 'light_on_blue'
        } else {
            return 'light_off'
        }
    })


    return (
        <div
            className='neon-emit-behavior' key={nanoid()}
        >

            <h2 className={neonClass} key={nanoid()}>
                <i>Do something</i>
            </h2>

        </div>
    )
};
