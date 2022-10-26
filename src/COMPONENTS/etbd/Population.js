import "./agent-44.sass";
import { useState, useEffect } from "react";
import { parse } from "html-react-parser";
import etbdState from "./etbdState";
import PopulationItem from "./PopulationItem";

// let p = Array(etbdState.popSize).fill("-")

let p = Array(etbdState.popSize).fill("z")

let unicodes = [

    { name: 'smile', code: String.fromCodePoint("0x263A") },
    { name: 'smile1', code: String.fromCodePoint("0x1F642") },

    { name: 'frown', code: String.fromCodePoint("0x2639") },

    // { name: 'frown', code: String.fromCodePoint("0x26A1") },
    { name: 'comet', code: String.fromCodePoint("0x2604") },

    { name: 'speaker', code: String.fromCodePoint("0x1F508") },
    { name: 'music', code: String.fromCodePoint("0x266c") },

    { name: 'lightbulb', code: String.fromCodePoint("0x1F4A1") },
    // { name: 'stoplight', code: String.fromCodePoint("0x2623") },
    // { name: 'pigeon', code: String.fromCodePoint("0x2623") },
    // { name: 'person', code: String.fromCodePoint("0x2623") },

    { name: 'cake', code: String.fromCodePoint("0x1F382") },

    { name: 'danger', code: String.fromCodePoint("0x26A0") },
    { name: 'lightning', code: String.fromCodePoint("0x1F5F2") },
    { name: 'radioactive', code: String.fromCodePoint("0x2622") },
    { name: 'biohazard', code: String.fromCodePoint("0x2623") },
    { name: 'recycle', code: String.fromCodePoint("0x267b") },

    { name: 'clover', code: String.fromCodePoint("0x2618") },
    { name: 'infinity', code: String.fromCodePoint("0x221E") },
    { name: 'scissors1', code: String.fromCodePoint("0x2702") },

    { name: 'heart1', code: '❤' },
    { name: 'heart_blue', code: String.fromCodePoint("0x1F499") },
    { name: 'heart_orange', code: String.fromCodePoint("0x1F9E1") },
    { name: 'heart_purple', code: String.fromCodePoint("0x1F49C") },
    { name: 'heart_black', code: String.fromCodePoint("0x1F5A4") },




    { name: 'delta', code: String.fromCodePoint("0x0394") },
    { name: 'mu', code: String.fromCodePoint("0x03C1") },
    { name: 'sigma', code: String.fromCodePoint("0x03C3") },
    { name: 'xi', code: String.fromCodePoint("0x039E") },
    { name: 'lambda', code: String.fromCodePoint("0x039B") },
    { name: 'theta', code: String.fromCodePoint("0x0398") },
    { name: 'tau', code: String.fromCodePoint("0x03A6") },



    { name: 'logicalAnd', code: String.fromCodePoint("0x22C0") },
    { name: 'logicalOr', code: String.fromCodePoint("0x22C1") },
    { name: 'angle', code: String.fromCodePoint("0x2221") },

]


// let x = "AGENT"
// let agent = Array(x.split(""))
// console.log("agent: ", agent[0])


export default function Population(props) {

    const [data, setdata] = useState(p);
    const [bg, setbg] = useState('transparent');


    useEffect(() => {
        let ss = props.simstate;
        if (ss === 'randomindex' || ss === 'emission' || ss === 'class' || ss === 'reinforcement' || ss === 'events') {
            setdata(props.ppl)
            setbg('#0f1725')
        } else {
            setdata(p)
            setbg('transparent')

        }
    },
        [props]
    );


    // if (props.simstate === "off") return (
    //     <>
    //         <h2
    //             // className='xxx'
    //             style={{
    //                 fontSize: ".7rem",
    //                 margin: "auto",
    //                 fontFamily: "Arial",
    //                 color: "rgba(40, 150, 150, .5",
    //                 textAlign: "left"
    //             }}
    //         >
    //             Population
    //         </h2>
    //     </>
    // )


    return (
        <div
            className='div-ppl'
        // style={{ backgroundColor: bg }}
        >
            {data.map((item, i) => {
                return (
                    <PopulationItem
                        item={item}
                        title={item}
                        emited={i === props.emsidx ? true : false}
                        reinforced={props.rnf}
                        simstate={props.simstate}
                    />
                )
            })}

        </div>

    )
}