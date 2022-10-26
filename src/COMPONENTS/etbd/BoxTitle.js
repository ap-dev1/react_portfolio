import { useState, useEffect } from "react";
import etbdState from "./etbdState";

export default function BoxTitle(props) {

    const [style, setstyle] = useState("box-title");


    useEffect(() => {

        let ss = props.simstate;

        if (ss === "newgen") {
            setstyle('box-title blue-shadow')
        } else {
            setstyle('box-title')
        }

        // if (ss === "newgen" && props.rnf === true) {
        //     setstyle('box-title raised yellow-shadow')
        // }



    },
        [props]
    )


    return (
        <div
            datag={props.g}
            className={style}
        >
            <h7>
                Darwinian
                <br />
                principles
            </h7>
        </div>


    )
}