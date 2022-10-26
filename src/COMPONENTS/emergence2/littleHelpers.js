
import etbdState from "../etbd/etbdState";
import _ from "lodash";

export function createAgentHistory() {

    let defaultGeneration = []
    etbdState.defaultPopulation.forEach((item) => {
        defaultGeneration.push(
            {
                phenotype: item,
                genotype: "",
                status: "",      // emited, reinforced, or empty; used in emergence22.sass for styling;
                fitness: 0,
                mutant: false
            }
        )
    })

    let ah = [
        { tn: -2, population: defaultGeneration },
        { tn: -1, population: defaultGeneration }
    ]

    return ah
}





export function gLength() {
    // let binaryHigh = _.max(etbdState.repertoire).toString(2)

    let phenHigh = _.max(etbdState.repertoire)
    let binaryHigh = phenHigh.toString(2)
    let nrBits = binaryHigh.length

    let cg = Array.apply(null, Array(nrBits)).map(function (x, i) { return ""; })

    return [nrBits, cg]
}

// let binaryHigh = this.state.high.toString(2)
// this.setState({ nrBits: binaryHigh.length })
// let cg = Array.apply(null, Array(binaryHigh.length)).map(function (x, i) { return ""; })
// this.setState({ childGenotype: cg })