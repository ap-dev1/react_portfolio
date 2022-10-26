import "./agent-44.sass";
import "./agent-44-animations.sass";
import { useState, useEffect } from "react";
import etbdState from "./etbdState";
import { CSSTransition } from "react-transition-group";

export default function Gen(props) {

    const [data1, setdata1] = useState("g");

    useEffect(() => {
        if (props.g !== null) {
            setdata1(props.g)
        } else {
            // let p = d3.range(0, popSize - 1)
            // console.log("pp: ", p)
            setdata1("g")
        }

    },
        [props]
    )


    return (

        <span
            key='ps8e9231u'
            className="example"
            title='generation'
        >
            {data1}
        </span>



        // <CSSTransition
        //     key='ddxsfgsdfh'
        //     in={true}
        //     appear={true}
        //     timeout={2000}
        //     classNames="fade"
        // >

        //     <span
        //         key='ps8e9231u'
        //         className="fade"
        //         title='generation'
        //     >
        //         {data1}
        //     </span>

        // </CSSTransition>
    )
}