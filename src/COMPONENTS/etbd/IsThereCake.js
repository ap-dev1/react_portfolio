
// import "./agent-44.sass";
import "./is-there-cake.sass";
import { useState, useEffect } from "react";
// import etbdState from "./etbdState";



export default function IsThereCake(props) {
    var [neonclass, setneonclass] = useState(() => {
        if (props.rnf === true) {
            return "light_on_yellow"
        }
        else {
            return "light_off"
        }
    })


    var [neontext, setneontext] = useState(() => {
        if (props.rnf === true) {
            return "reinforced"
        }
        else {
            return "no feedback"
        }
    })

    return (
        <div
            className="is-there-cake"
        >
            <span
                className={neonclass}
            >
                {neontext}
            </span>
        </div>
    )
};



// export function IsThereCake(props) {
//     var [neonClass, setNeonClass] = useState(() => {
//         if (props.demoState === "selection" && props.reinforced === true) {
//             return "light_on_yellow"
//         }
//         else if (props.demoState === "selection" && props.reinforced === false) {
//             return "light_on_white"
//         }
//         else {
//             return "light_off"
//         }
//     })


//     return (
//         <div
//             className="div-neon-sign"
//         >
//             <h2
//                 key={nanoid()}
//                 className={neonClass}
//             >
//                 points
//             </h2>
//         </div>
//     )
// };


