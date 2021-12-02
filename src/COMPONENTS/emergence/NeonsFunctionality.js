import { useState } from "react";
import { nanoid } from "nanoid";
import { Fade } from "react-reveal"



export function NeonStart(props) {
    var [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "start") {
            return "light_on_orange"
        } else {
            return "light_off"
        }
    })


    return (
        <div key={nanoid()}
            className="darwinian_cycle"
            style={{
                //position: "absolute",
                margin: "auto",
                marginBottom: "10px",
                marginTop: "10px",

            }}
        >


            <h2
                key={nanoid()}
                className={neonClass}
                style={{
                    fontSize: "20px",
                }}
                onClick={props.randomPopulation}
            >
                Click to play
            </h2>

        </div>

    )
};




export function NeonEmission(props) {
    var [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "emission") {
            //return "light_on_orange"
            return "light_on_white"
        } else {
            return "light_off"
        }
    })


    return (
        <div
            key={nanoid()}
            className="darwinian_cycle"
            style={{
                margin: "auto",
                marginBottom: "0px",


            }}
        >

            <h2
                key={nanoid()}
                className={neonClass}
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
//             className="darwinian_cycle"
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
            className="darwinian_cycle"
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
            className="darwinian_cycle"
            style={{
                width: "90%",
                margin: "0px auto 0px auto",
                padding: "0px",
            }}
        >
            <h2
                key={nanoid()}
                className={neonClass}
                style={{
                    width: "100%",
                    margin: "0px",
                    textAlign: "left",


                }}
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
            className="darwinian_cycle"
            style={{
                width: "90%",
                margin: "20px auto 0px auto",
                padding: "0px",
            }}
        >
            <h2
                key={nanoid()}
                className={neonClass}
                style={{
                    width: "100%",
                    margin: "0px",
                    textAlign: "left",


                }}
            >
                Recombine their genotypes


            </h2>
        </div>
    )
};


export function NeonMutation(props) {
    var [neonClass, setNeonClass] = useState(() => {
        if (props.demoState === "mutation") {
            return "light_on_pink"
            //return "light_on_white"

        } else {
            return "light_off"
        }
    })


    return (
        <div
            key={nanoid()}
            className="darwinian_cycle"
            style={{
                width: "90%",
                margin: "20px auto 0px auto",
                padding: "0px",
            }}
        >
            <h2
                key={nanoid()}
                className={neonClass}
                style={{
                    width: "100%",
                    margin: "0px",
                    textAlign: "left",


                }}

            >Mutation
            </h2>

        </div>
    )
};