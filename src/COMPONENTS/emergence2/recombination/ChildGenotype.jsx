import './_selected-parents.sass';
import './_child-genotype.sass';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { dec2binList } from "../../etbd_hamming/hammingFunctions";


import RadioBit from "./RadioBit";


export default function ChildGenotype(props) {

    const [g1, setg1] = useState([])
    const [g2, setg2] = useState([])
    const [powers, setpowers] = useState([])

    const [cg, setcg] = useState([])
    const [cp, setcp] = useState('\"child\"')

    function toggleBit(muie) {
        let v = parseInt(muie.value)

        let x = cg
        let mybit = x.filter(item => item.name === muie.name)[0]
        mybit['selected'] = v
        setcg(x)

        console.log(mybit)
    }

    useEffect(() => {
        let bits = parseInt(props.nrBits)
        let pws = []

        for (let i = 0; i < bits; i++) {
            pws.unshift(2 ** i)
        }

        setpowers(pws)

        if (props.p1) {
            let phen = parseInt(props.p1)
            let gen = dec2binList(bits, phen)
            setg1(gen)
        }

        if (props.p2) {
            let phen = parseInt(props.p2)
            let gen = dec2binList(bits, phen)
            setg2(gen)
        }


        // if (g1.length > 0 && g2.length > 0) {
        //     let bits = parseInt(props.nrBits)

        //     let child = []

        //     for (let i = 0; i < bits; i++) {
        //         let rnd = Math.random()
        //         let selected

        //         if (rnd < .5) {
        //             selected = parseInt(g1[i])
        //         } else {
        //             selected = parseInt(g2[i])
        //         }

        //         child.push({
        //             worth: powers[i],
        //             name: `bit${powers[i]}`,
        //             options: [
        //                 parseInt(g1[i]),
        //                 parseInt(g2[i])
        //             ],
        //             selected: selected
        //         })
        //     }
        //     setcg(child)
        // }

    },
        [props]
    )


    useEffect(() => {

        let bits = parseInt(props.nrBits)

        if (g1.length === bits && g2.length === bits) {

            let child = []

            for (let i = 0; i < bits; i++) {
                let rnd = Math.random()
                let selected

                if (rnd < .5) {
                    selected = parseInt(g1[i])
                } else {
                    selected = parseInt(g2[i])
                }

                child.push({
                    name: `bit${powers[i]}`,
                    options: [
                        parseInt(g1[i]),
                        parseInt(g2[i])
                    ],
                    selected: selected
                })
            }
            setcg(child)
        }

    },
        [g1, g2]
    )



    return (
        <div id='recombination-demo' key={nanoid()}  >
            <div id='selected-parents' key={nanoid()} >
                <label>Phenotypes</label>
                <label key={nanoid()}>{props.p1 ? props.p1 : 'p1'}</label>
                <label key={nanoid()}>{props.p2 ? props.p2 : 'p2'}</label>
                <label key={nanoid()}>{cp}</label>
            </div>




            <div id='child-genotype' key={nanoid()} >
                {
                    cg.map((item, i) => {
                        return (
                            <RadioBit
                                options={[g1[i], g2[i]]}
                                name={item.name}
                                selected={item.selected}
                                toggleBit={toggleBit}
                            />
                        )
                    })
                }
            </div>


        </div>
    )
}