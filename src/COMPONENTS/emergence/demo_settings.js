function defaultGeneration(n) {
    let dg = []

    for (let i = 0; i < n; i++) {

        dg.push(
            {
                phenotype: "",
                genotype: "",
                status: "",      // emited, reinforced, or empty; used in emergence22.sass for styling;
                fitness: 0,
                mutant: false
            }
        )
    }

    return dg
}



export function resetAgent(props) {

    let dg = defaultGeneration(props.popSize)

    let agent_state = {
        agentHistory: [{ tn: -2, population: dg }, { tn: -1, population: dg }],

        popSize: props.popSize,
        nrBits: "",

        demoState: "start",
        low: 0,
        high: 99,

        //population: ["", "", "", "", "", ""],
        //parentPopulation: ["", "", "", "", "", ""],
        //nextPopulation: ["", "", "", "", "", ""],
        ems: "?",
        //emsCell: "",
        reinforced: false,
        rnfMessage: "not reinforced",
        rnfColor: "#555",

        //parents: [0, 99],
        parents: [],
        genotype1: ["?", "?", "?", "?"],
        genotype2: ["?", "?", "?", "?"],

        childPhenotype: "?",
        childGenotype: ["?", "?", "?", "?",],

        mutatedPhenotype: "?",
        mutatedGenotype: ["?", "?", "?", "?"],

        fitnessZero: "",

        allParents: [],
        //allParentsSingle: [],

        allChildren: [],
    }

    return agent_state

}
