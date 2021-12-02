import "../emergence22.sass"
import React from "react"
//import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { Fade } from "react-reveal"
import { Button } from "react-bootstrap"

export default class Selection extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.selectParent = this.selectParent.bind(this)
    // }


    // selectParent = (event) => {

    //     this.props.doSomethingSelect(event.target.value)
    // }



    render() {

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
                        className="btn-selection"
                    >
                        {parent.phenotype}

                    </button>
                )
            })
        }



        return (
            <div className="parents-wrapper" key={nanoid()}  >
                {ParentPopulation}
            </div>
        )
    }
}


