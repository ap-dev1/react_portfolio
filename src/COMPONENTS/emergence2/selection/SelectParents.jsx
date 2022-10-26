import './_select-parents.sass';
import React from "react";
import { nanoid } from "nanoid";
import * as d3 from "d3";

export default class SelectParents extends React.Component {

    render() {

        // fitness gradient goes black to orange:
        // let color1 = '#000'
        // let color2 = '#ff6200'

        let color1 = 'yellow'
        let color2 = '#274235'

        const fitness_gradient = d3.scaleLinear()
            .domain([0, 0.1])
            .range([color2, color1])


        let ParentPopulation

        if (this.props.population) {
            ParentPopulation = this.props.population.map((item, i) => {
                let cellId = `phenotype_${i + 1}`
                let parent

                if (item) {
                    parent = item
                } else {
                    parent = { phenotype: "", genotype: "", status: "" }
                }

                return (

                    <button
                        dataParent={false}
                        key={nanoid()}
                        title={parent.status}
                        value={parent.phenotype}
                        id={cellId}
                        onClick={this.props.doSomethingSelect}
                        className='btn-maybe-parent'

                        style={{
                            background: this.props.reinforced === true ? fitness_gradient(parseFloat(item.fitness)) : "transparent",
                            border: this.props.reinforced === true ? `1px solid ${fitness_gradient(parseFloat(item.fitness))}` : `0px solid ${fitness_gradient(parseFloat(item.fitness))}`
                        }}

                    >
                        {parent.phenotype}

                    </button>
                )
            })
        }



        return (
            <div
                id='select-parents'
                className='parents-wrapper'
                key={nanoid()}  >
                {ParentPopulation}
            </div>
        )
    }
}

