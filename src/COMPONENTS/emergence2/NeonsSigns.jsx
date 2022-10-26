import { useState } from "react";
import { nanoid } from "nanoid";



export function NeonEmission(props) {
    var [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "emission") {
            return "light_on_white"
        } else {
            return "light_off"
        }
    })


    return (
        <div
            key={nanoid()}
            className="darwinian_cycle"
            // style={{ margin: "30px auto 0px auto", }}
            style={{ margin: "auto", }}

        >

            <h2
                key={nanoid()}
                className={neonClass}
                style={{
                    fontSize: "16px", textAlign: "center", fontFamily: "monospace"
                }}
            >

                <i>Emit</i> a response</h2>

        </div>
    )
};





// export function NeonReinforcement(props) {
//     var [neonClass, setNeonClass] = useState(() => {
//         if (props.demoState === "emission") {
//             //return "light_on_orange"
//             return "light_on_white"
//         } else {
//             return "light_off"
//         }
//     })


//     return (
//         <div
//             key={nanoid()}
//             className="div-neon-sign"
//         >
//             <h2
//                 key={nanoid()}
//                 className={neonClass}
//             >

//                 <i>Emit</i> a response</h2>
//         </div>
//     )
// };



export function NeonCreateNewPopulation(props) {
    var [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "selection" | props.demoState === "recombination" | props.demoState === "mutation") {
            return "light_on_neon"
        } else {
            return "light_off"
        }
    })


    return (
        <div
            key={nanoid()}
            className="div-neon-sign"
        >
            <h2
                key={nanoid()}
                className={neonClass}
            >

                Create new generation</h2>
        </div>
    )
};


export function NeonSelection(props) {
    var [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "selection" && props.reinforced === true) {
            return "light_on_yellow"
        }
        else if (props.demoState === "selection" && props.reinforced === false) {
            return "light_on_white"
        }
        else {
            return "light_off"
        }
    })


    return (
        <div
            key={nanoid()}
            className="div-neon-sign"
        >
            <h2
                key={nanoid()}
                className={neonClass}
            >
                Select parents
            </h2>
        </div>
    )
};



export function NeonRecombination(props) {
    var [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "recombination") {
            //return "light_on_green"
            return "light_on_white"

        } else {
            return "light_off"
        }
    })


    return (
        <div
            key={nanoid()}
            className="div-neon-sign"
        >
            <h2
                key={nanoid()}
                className={neonClass}
            >
                Recombination


            </h2>
        </div>
    )
};


export function NeonMutation(props) {
    var [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "mutation") {
            //return "light_on_pink"
            return "light_on_white"

        } else {
            return "light_off"
        }
    })


    return (
        <div className='div-neon-sign' key={nanoid()}>

            <h2 className={neonClass} key={nanoid()}>
                Mutation
            </h2>

        </div>
    )
};