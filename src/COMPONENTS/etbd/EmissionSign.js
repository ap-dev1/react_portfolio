import { useState, useEffect } from "react";
import etbdState from "./etbdState";


export default function EmissionSign(props) {

    const [style, setstyle] = useState("sign-emission zzz-time");
    const [msg, setmsg] = useState("Response");


    useEffect(() => {
        let ss = props.simstate;

        // if (ss === 'randomindex' || ss === 'emission' || ss === 'class' || ss === 'reinforcement') {
        //     setstyle('sign-emission')
        // }

        if (ss === 'off') {
            setstyle('sign-emission zzz-time')
            setmsg('Response')
        }
        else if (ss === "emission" || ss === "class" || ss === "reinforcement" || ss === "events") {
            setstyle("sign-emission emision-time")
        }
        else if (ss === "newgen" || ss === "newppl") {
            setstyle("sign-emission darwin-time")
        }
        else {
            setstyle("sign-emission")
        }

        // if (props.paused === true) {
        //     setstyle('sign-emission zzz-time')
        // }
    },
        [props]
    )

    return (
        <button
            data-ss={props.simstate}
            data-paused={props.paused}
            data-rnf={props.rnf}
            className={style}
        >
            {msg}
        </button>

    )


}