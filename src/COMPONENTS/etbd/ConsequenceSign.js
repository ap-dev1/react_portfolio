import { useState, useEffect } from "react";
// import etbdState from "./etbdState";

export default function ConsequenceSign(props) {

    // const [styles, setstyles] = useState(["btn-sign-consequence", "btn-sign-consequence"]);

    // useEffect(() => {
    //     if (props.simstate === "reinforcement" && props.rnf === true) {
    //         setstyles(["btn-sign-consequence active", "btn-sign-consequence"])
    //     }
    //     if (props.simstate === "reinforcement" && props.rnf === false) {
    //         setstyles(["btn-sign-consequence", "btn-sign-consequence active"])
    //     }
    //     else {
    //         setstyles(["btn-sign-consequence", "btn-sign-consequence"])
    //     }
    // },
    //     [props]
    // )


    const [style, setstyle] = useState("sign-rnf zzz-time");
    const [msg, setmsg] = useState("Consequence");

    useEffect(() => {
        let ss = props.simstate;

        // if (ss === 'randomindex' || ss === 'emission' || ss === 'class' || ss === 'reinforcement') {
        //     setstyle('sign-emission')
        // }

        if (ss === "off") {
            setstyle("sign-rnf zzz-time")
            setmsg("Consequence")
        }
        else if (ss === "reinforcement" || ss === "events") {
            setstyle("sign-rnf rnf-time")
            setmsg(props.rnf === true ? 'Reinforcer' : '')
        }
        else if (ss === "newgen" || ss === "newppl") {
            setstyle("sign-rnf darwin-time")
        }
        else {
            setstyle("sign-rnf")
        }

    },
        [props]
    )



    // if (props.simstate === "off") return (
    //     <div className={'consequences '}>

    //         <h2
    //             style={{
    //                 fontSize: ".7rem",
    //                 margin: "auto",
    //                 fontFamily: "Arial",
    //                 color: "rgba(40, 150, 150, .5",
    //             }}
    //         >
    //             Consequence
    //         </h2>


    //     </div>
    // )


    return (

        <button
            // data-ss={props.simstate}
            // data-paused={props.paused}
            data-rnf={props.rnf}
            className={style}
        >
            {msg}
        </button>


        // <div className='contingencies' data-ss={props.simstate}>
        //     <button
        //         className='reinforcer'
        //         data-ss={props.simstate}
        //         data-paused={props.paused} 
        //         data-rnf={props.rnf}
        //     >
        //         Reinforcer
        //     </button>

        //     <button
        //         className='nothing'
        //         data-rnf={props.rnf}
        //     >
        //         Nothing
        //     </button>
        // </div>
    )
}