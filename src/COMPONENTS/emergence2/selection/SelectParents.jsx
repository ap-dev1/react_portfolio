import './_select-parents.sass';

import React from "react";
import { nanoid } from "nanoid";
import * as d3 from "d3";

let color1 = 'yellow'
let color2 = '#274235'

// fitness gradient goes black to orange:
// let color1 = '#000'
// let color2 = '#ff6200'


const fitness_gradient = d3.scaleLinear()
    .domain([0, 0.1])
    .range([color2, color1])


export default function AvailableParents(props) {

    function handleClick(event) {
        props.chooseParent(event.target)
    }





    // if (props.demoState==='selection') {
    //     ParentPopulation = this.props.population.map((item, i) => {
    //         let cellId = `phenotype_${i + 1}`
    //         let parent

    //         if (item) {
    //             parent = item
    //         } else {
    //             parent = { phenotype: "", genotype: "", status: "" }
    //         }

    //         return (

    //             <button
    //                 dataParent={false}
    //                 key={nanoid()}
    //                 title={parent.status}
    //                 value={parent.phenotype}
    //                 id={cellId}
    //                 onClick={props.chooseParent}

    //                 className='btn-maybe-parent'

    //                 style={{
    //                     background: this.props.reinforced === true ? fitness_gradient(parseFloat(item.fitness)) : "transparent",
    //                     border: this.props.reinforced === true ? `1px solid ${fitness_gradient(parseFloat(item.fitness))}` : `0px solid ${fitness_gradient(parseFloat(item.fitness))}`
    //                 }}

    //             >
    //                 {parent.phenotype}

    //             </button>
    //         )
    //     })
    // }



    return (
        <div id='available-parents' key={nanoid()}>
            {
                props.availableParents.map((item, i) => {
                    let cellid = `phenotype_${i + 1}`
                    // let id1 = props.parentids[0]
                    // let id2 = props.parentids[1]

                    return (
                        <button className='btn-maybe-parent'
                            data-selected={(props.p1id === cellid || props.p2id === cellid) ? true : false}

                            title={item.status}
                            value={item.phenotype}
                            id={cellid}

                            onClick={handleClick}

                            // role='input'
                            key={nanoid()}
                            // disabled={props.demoState === 'selection' ? false : true}
                            disabled={(props.demoState === 'selection' || props.demoState === 'recombination') ? false : true}

                        // style={{
                        //     background: this.props.reinforced === true ? fitness_gradient(parseFloat(item.fitness)) : "transparent",
                        //     border: this.props.reinforced === true ? `1px solid ${fitness_gradient(parseFloat(item.fitness))}` : `0px solid ${fitness_gradient(parseFloat(item.fitness))}`
                        // }}
                        >
                            {item.phenotype}
                        </button>
                    )
                })
            }
        </div>
    )


}

