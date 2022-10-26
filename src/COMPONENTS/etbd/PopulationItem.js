import { useState, useEffect } from "react";

export default function PopulationItem(props) {

    const [style, setstyle] = useState('card-content zzz');

    useEffect(() => {
        let ss = props.simstate;

        // if (ss === 'randomindex' || ss === 'emission' || ss === 'class' || ss === 'reinforcement') {
        //     setstyle('card-content')
        // }
        // if (props.emited === true) {
        //     setstyle('card-content emited')
        // }
        // if (ss === 'darwin') {
        //     setstyle('card-content darwin')
        // }

        // if (ss === 'off') {
        //     setstyle('card-content zzz')
        // }

        // if (ss === 'randomindex' || ss === 'emission' || ss === 'class' || ss === 'reinforcement') {
        //     setstyle('card-content')
        // }

        if (props.paused === true) {
            setstyle('card-content zzz')
        }

        if (ss === 'randomindex' || ss === 'emission' || ss === 'class' || ss === 'reinforcement' || ss === 'events') {

            if (props.emited === true) {
                setstyle('card-content emited')
            } else {
                setstyle('card-content')
            }
        }


        if (ss === 'newgen' || ss === 'newppl') {
            setstyle('card-content darwin')
        }

        // else {
        //     if (props.emited === true) {
        //         setstyle('card-content emited')
        //     } else {
        //         setstyle('card-content')
        //     }
        // }

        console.log("sim state: ", ss)



    },
        [props]
    )


    return (
        <div className="card-wrapper">
            <div
                className={style}
                title={props.title}
            >
                <span className="span-item" >
                    {props.item}
                </span>
            </div>
        </div>
    )
}