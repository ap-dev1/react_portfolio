
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

    // let cg = Array.apply(null, Array(nrBits)).map(function (x, i) { return ""; })

    return binaryHigh.length
}


export function emptyGenotype() {
    let nrBits = gLength()
    let cg = Array.apply(null, Array(nrBits)).map(function (x, i) { return ""; })
    return cg
}



export const initialState = {
    agentHistory: createAgentHistory(),
    popSize: 5,
    nrBits: gLength(),
    demoState: 'start',
    low: _.min(etbdState.repertoire),
    high: _.max(etbdState.repertoire),
    ems: '',
    emsid: '',
    reinforced: false,

    rnfMessage: "Reinforce it",
    rnfColor: "#555",

    p1: _.max(etbdState.repertoire) - 7,
    p2: _.max(etbdState.repertoire),
    cp: 0,

    p1id: "",
    p2id: "",
    // g1: emptyGenotype(),
    // g2: emptyGenotype(),
    // cg: emptyGenotype(),

    // genotype1: [0, 0, 0, 0, 0, 0],
    // genotype2: [1, 1, 1, 1, 1, 1],
    // childPhenotype: 57,
    // childGenotype: [0, 1, 0, 1, 1, 1, 1],

    mutatedPhenotype: "?",
    mutatedGenotype: ["?", "?", "?", "?"],

    fitnessZero: "",
    allParents: [],
    allChildren: [],

    responses: 0,
    mu: 6,
    fitness_colors: ['#000', '#ff6200'],


}
