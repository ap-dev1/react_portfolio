import "./fade_effects.sass"

import "../sensitivity/mathematical_models.sass";
import "../etbd_emergence/emergence.sass";
import "./emergence22.sass";

import "./selection/toggle_reinforcement.sass"

import React from "react";
import { nanoid } from "nanoid";
import { dec2binList } from "../etbd_hamming/hammingFunctions";
import * as d3 from "d3";

import { Fade } from "react-reveal"

import { NeonStart, NeonEmission, NeonCreateNewPopulation, NeonSelection, NeonRecombination, NeonMutation } from "./NeonsFunctionality";


// import SvgRecord from "./SvgRecord";
// import ToggleReinforcement from "./selection/ToggleReinforcement"
// import EmergenceSettings from "./EmergenceSettings"
// import { ToggleButtonGroup, ToggleButton, Button } from "react-bootstrap"


import AgentHistory from "./AgentHistory"

import ButtonNext from "./ButtonNext"

//import RecombinationDemo from "./recombination/RecombinationDemo"
import MutationDemo from "./mutation/MutationDemo"

import Emission from "./emission/Emission"
import Selection from "./selection/Selection"
import { Button } from "react-bootstrap"

import Rec2 from "./rechooks/Rec2"


let defaultGeneration = []

for (let i = 0; i < 5; i++) {

    defaultGeneration.push(
        {
            phenotype: "",
            genotype: "",
            status: "",      // emited, reinforced, or empty; used in emergence22.sass for styling;
            fitness: 0,
            mutant: false
        }
    )
}


export default class EmergenceMain extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            agentHistory: [{ tn: -2, population: defaultGeneration }, { tn: -1, population: defaultGeneration }],

            popSize: 5,
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



            genotype1: [0, 0, 0, 0, 0, 0, 0],
            genotype2: [1, 1, 0, 0, 0, 1, 1],



            childPhenotype: 57,
            childGenotype: [0, 1, 0, 1, 1, 1, 1],

            mutatedPhenotype: "?",
            mutatedGenotype: ["?", "?", "?", "?"],

            fitnessZero: "",

            allParents: [],
            //allParentsSingle: [],

            allChildren: [],


        }

        this.initializeAgent = this.initializeAgent.bind(this)
        this.doSomething = this.doSomething.bind(this)
        //this.doSomethingSelect = this.doSomethingSelect.bind(this)

        this.recombinePair = this.recombinePair.bind(this)
        this.addChildItem = this.addChildItem.bind(this)
        //this.emitResponse = this.emitResponse.bind(this)
        //this.goToRecombination = this.goToRecombination.bind(this)
        //this.goToMutation = this.goToMutation.bind(this)
        //this.addToNext = this.addToNext.bind(this)
        //this.handleRadioChange = this.handleRadioChange.bind(this)
        //this.checkParent = this.checkParent.bind(this)

        //this.automateOneGeneration = this.automateOneGeneration.bind(this)
    }


    componentWillMount() {
        console.log("EmergenceMain willMount; get rid of it.")
        let binaryHigh = this.state.high.toString(2)
        this.setState({ nrBits: binaryHigh.length })
        let cg = Array.apply(null, Array(binaryHigh.length)).map(function (x, i) { return ""; })
        this.setState({ childGenotype: cg })
    }



    initializeAgent = () => {

        this.setState({ demoState: "emission" })

        let bits = this.state.nrBits

        let population = []
        let generation = []
        let n = this.state.popSize


        for (let i = 0; i < n; i++) {
            let x = d3.randomInt(this.state.low, this.state.high)()
            population.push(x)
        }

        population.sort((a, b) => a > b)

        this.setState({ parentPopulation: population })
        this.setState({ population: population })
        //this.setState({ demoState: "emission" })


        // PARENTS:
        // let allParents = []
        // for (let i = 0; i < n; i++) {
        //     allParents.push(["", ""])
        // }
        // this.setState({ allParents: allParents })


        // PARENTS, SINGLE:
        // let allSingle = []
        // for (let i = 0; i < n * 2; i++) {
        //     allSingle.push("?")
        // }
        // this.setState({ allParentsSingle: allSingle })


        // CHILDREN:
        // let allChildren = []
        // for (let i = 0; i < n; i++) {
        //     allChildren.push("?")
        // }
        // this.setState({ allChildren: allChildren })


        // AGENT HISTORY
        let history = this.state.agentHistory

        population.forEach((item) => {
            let bitString = dec2binList(bits, parseInt(item))

            generation.push({
                phenotype: parseInt(item),
                genotype: bitString,
                status: ""
            })

        })

        history.push({
            tn: 0,
            population: generation
        })

        this.setState({ agentHistory: history })


        // let p1 = this.state.low
        // let g1 = dec2binList(bits, p1)

        // let p2 = this.state.high
        // let g2 = dec2binList(bits, p2)

        // this.setState = ({
        //     parents: [p1, p2],
        //     genotype1: g1,
        //     genotype2: g2
        // })

    }



    // EMIT A RESPONSE

    doSomething = (value) => {
        //console.log("Emergence main, doSomething..  demoState = ", this.state.demoState)

        //console.log(value)
        let history = this.state.agentHistory
        let gen = history[history.length - 1]
        let pop = gen.population

        let individual = pop.filter(item => item.phenotype === parseInt(value))

        individual[0].status = "emited"

        this.setState({ ems: parseInt(value) })
        this.setState({ agentHistory: history })
        this.setState({ demoState: "selection" })



        // ADD A NEW, EMPTY GENERATION:
        // let newTn = gen.tn + 1
        // history.push({ tn: newTn, population: [] })
        // this.setState({ agentHistory: history })
    }




    reinforceResponse = () => {

        let ah = this.state.agentHistory
        let gn = ah[ah.length - 1]

        if (this.state.reinforced === false) {
            let ems = gn.population.filter(item => item.status === "emited")[0]
            ems.status = "reinforced"

            //let fitness0 = ems.phenotype
            this.setState({ fitnessZero: ems.phenotype })

            gn.population.forEach((item) => {
                let rf = Math.abs(item.phenotype - ems.phenotype)
                item.fitness = rf
            })

        } else {
            let ems = gn.population.filter(item => item.status === "reinforced")[0]
            ems.status = "emited"
        }


        this.setState({ agentHistory: ah })

        if (this.state.reinforced === false) {
            this.setState({
                reinforced: true,
                rnfMessage: "reinforced",
                rnfColor: "yellow"
            })
        } else {
            this.setState({
                reinforced: false,
                rnfMessage: "not reinforced",
                rnfColor: "#555"
            })
        }
    }



    //  SELECT PARENTS, AS MANY PAIRS AS POPULATION SIZE:

    doSomethingSelect = (event) => {

        //let activeParent = event.currentTarget.getAttribute("dataParent")

        let value = event.currentTarget.value



        let bits = this.state.nrBits
        let gn = dec2binList(bits, parseInt(value))

        let ppp = this.state.parents
        let allP = this.state.allParents

        ppp.push(parseInt(value))

        if (ppp.length === 1) {
            this.setState({ parents: ppp })
            allP.unshift(ppp)
        }


        if (ppp.length === 2) {
            ppp.sort((a, b) => a > b)
            allP[0] = ppp
            this.setState({ allParents: allP, parents: [] })
        }


        if (allP.length >= this.state.popSize && ppp.length === 2) {
            let pair = allP[0]
            let idx = 0

            let p1 = parseInt(pair[0])
            let p2 = parseInt(pair[1])
            let g1 = dec2binList(this.state.nrBits, p1)
            let g2 = dec2binList(this.state.nrBits, p2)

            allP[idx] = []
            this.setState({ parents: [p1, p2], genotype1: g1, genotype2: g2, allParents: allP, demoState: "recombination" })
        }
    }


    automateSelection = () => {
        let parentPopulation = this.state.agentHistory[this.state.agentHistory.length - 1].population

        let bits = this.state.nrBits

        let allP = this.state.allParents

        // let i = allP.length
        let i = 0

        for (i; i < this.state.popSize; i++) {
            let p1 = parentPopulation[Math.floor(Math.random() * parentPopulation.length)]
            let p2 = parentPopulation[Math.floor(Math.random() * parentPopulation.length)]
            let pair = [p1.phenotype, p2.phenotype]
            pair.sort((a, b) => a > b)
            allP.unshift(pair)
        }

        let pair0 = allP[0]
        let idx = 0

        let p1 = parseInt(pair0[0])
        let p2 = parseInt(pair0[1])
        let g1 = dec2binList(this.state.nrBits, p1)
        let g2 = dec2binList(this.state.nrBits, p2)

        allP[idx] = []

        this.setState({ parents: [p1, p2], genotype1: g1, genotype2: g2, allParents: allP, demoState: "recombination" })

    }


    recombinePair = (event) => {

        let x0 = event.currentTarget.id

        let x = event.currentTarget.id.split("_")
        let idx = parseInt(x[1]) - 1

        let allPairs = this.state.allParents

        allPairs[idx] = []


        let v = event.currentTarget.value.split(",")

        let p1 = parseInt(v[0])
        let p2 = parseInt(v[1])


        let g1 = dec2binList(this.state.nrBits, p1)
        let g2 = dec2binList(this.state.nrBits, p2)

        this.setState({ parents: [p1, p2], genotype1: g1, genotype2: g2, allParents: allPairs })

    }



    createChildItem = (value) => {
        let a = parseInt(value)
        let b = dec2binList(this.state.nrBits, a)
        let rf = Math.abs(a - this.state.fitnessZero)
        return (
            {
                phenotype: a,
                genotype: b,
                fitness: rf,
                mutant: false,
                status: "",
            }
        )
    }


    addChildItem = (newChild) => {

        let childItem = this.createChildItem(newChild)

        let ac = this.state.allChildren
        ac.push(childItem)


        if (ac.length >= this.state.popSize) {
            this.setState({
                parents: [],
                allChildren: ac,
                demoState: "mutation",
            })


        }


        //this.setState({ allChildren: ac })


        //this.setState({ parents: [], genotype1: [], genotype2: [] })


        /* let ah = this.state.agentHistory
        let gn = ah[ah.length - 1]
        let newPopulation = gn.population
        newPopulation.push(childItem)
        this.setState({ agentHistory: ah }) */


        /* this.setState({ childPhenotype: childItem.phenotype })
        this.setState({ childGenotype: childItem.genotype })
        this.setState({ mutatedGenotype: childItem.genotype })
        this.setState({ demoState: "mutation" }) */

        // extract? 

        let allPairs = this.state.allParents
        let pair = allPairs.find(item => item.length === 2)

        if (pair) {
            let idx = allPairs.indexOf(pair)
            let p1 = parseInt(pair[0])
            let p2 = parseInt(pair[1])
            let g1 = dec2binList(this.state.nrBits, p1)
            let g2 = dec2binList(this.state.nrBits, p2)

            allPairs[idx] = []

            this.setState({ parents: [p1, p2], genotype1: g1, genotype2: g2, allParents: allPairs, allChildren: ac })
        }
    }



    mutateChild = (event) => {


        let x = event.currentTarget.id.split("_")
        let idx = parseInt(x[1]) - 1


        let childItem = this.state.allChildren[idx]

        this.setState({ childPhenotype: childItem.phenotype })
        this.setState({ childGenotype: childItem.genotype })
        this.setState({ mutatedGenotype: childItem.genotype })
        this.setState({ mutantIndex: idx })

        //this.setState({ demoState: "mutation" })




        // console.log("event.currentTarget.value: ", v)
        // console.log("event.currentTarget.id: ", id)

        // console.log("childItem: ", childItem)



        // let ah = this.state.agentHistory
        // let gn = ah[ah.length - 1]
        // let newPopulation = gn.population
        // newPopulation.push(childItem)
        // this.setState({ agentHistory: ah })
        // this.setState({ parents: [] })


        // this.setState({ childPhenotype: childItem.phenotype })
        // this.setState({ childGenotype: childItem.genotype })
        // this.setState({ mutatedGenotype: childItem.genotype })
        // this.setState({ demoState: "mutation" })
    }



    replaceOriginal = (mutatedChild) => {
        let ac = this.state.allChildren

        let p = parseInt(mutatedChild)
        let g = dec2binList(this.state.nrBits, p)
        let childIndex = this.state.mutantIndex

        ac[childIndex].phenotype = p
        ac[childIndex].genotype = g
        ac[childIndex].mutant = true
        ac[childIndex].status = "mutant"


        this.setState({ allChildren: ac })
    }



    addNewPopulation = () => {
        let ah = this.state.agentHistory
        let ac = this.state.allChildren

        let tn = ah[ah.length - 1].tn

        let newPopulation = {
            tn: tn + 1,
            population: ac
        }

        ah.push(newPopulation)
        this.setState({
            agentHistory: ah,
            //childPhenotype: "?",
            //childGenotype: ["?", "?", "?", "?",],

            //mutatedPhenotype: "?",
            //mutatedGenotype: ["?", "?", "?", "?"],

            //ems: "",

            demoState: "emission",
        })

    }



    // goToRecombination = (e) => {
    //     e.preventDefault()
    //     let ppp = this.state.parents

    //     this.setState({
    //         parent1: ppp[0],
    //         parent2: ppp[1],
    //         genotype1: dec2binList(this.state.nrBits, ppp[0]),
    //         genotype2: dec2binList(this.state.nrBits, ppp[1]),
    //         demoState: "recombination",
    //     })
    // }


    /* 
    
        createChild = (value) => {
            let a = parseInt(value)
            let b = dec2binList(this.state.nrBits, a)
            let rf = Math.abs(a - this.state.fitnessZero)
            return (
                {
                    phenotype: a,
                    genotype: b,
                    fitness: rf,
                    mutant: false,
                    status: "",
                }
            )
        }
    
        goToMutation = (newChild, event) => {
            let childItem = this.createChild(newChild)
            let ah = this.state.agentHistory
            let gn = ah[ah.length - 1]
            let newPopulation = gn.population
            newPopulation.push(childItem)
            this.setState({ agentHistory: ah })
            this.setState({ parents: [] })
            this.setState({ childPhenotype: childItem.phenotype })
            this.setState({ childGenotype: childItem.genotype })
            this.setState({ mutatedGenotype: childItem.genotype })
            this.setState({ demoState: "mutation" })
        }
    
    
    */





    // addToNext = (mutatedChild) => {

    //     //let np = this.state.nextPopulation
    //     //np.unshift(mutatedChild)
    //     //np.pop()

    //     let ah = this.state.agentHistory
    //     let gn = ah[ah.length - 1]
    //     let newPopulation = gn.population
    //     let newChild = newPopulation[newPopulation.length - 1]

    //     let x = parseInt(mutatedChild)

    //     if (x !== newChild.phenotype) {
    //         newChild.phenotype = x
    //         newChild.genotype = dec2binList(this.state.nrBits, x)
    //         newChild.mutant = true
    //         newChild.status = "mutant"

    //     }

    //     this.setState({ agentHistory: ah })


    //     // SELECT again or EMIT a response?

    //     if (newPopulation.length < this.state.popSize) {
    //         this.setState({
    //             parents: [],

    //             genotype1: ["?", "?", "?", "?"],
    //             genotype2: ["?", "?", "?", "?"],

    //             childPhenotype: "?",
    //             childGenotype: ["?", "?", "?", "?",],

    //             mutatedPhenotype: "?",
    //             mutatedGenotype: ["?", "?", "?", "?"],
    //             demoState: "selection",
    //         })
    //     }
    //     else {

    //         this.setState({
    //             parents: [],

    //             genotype1: ["?", "?", "?", "?"],
    //             genotype2: ["?", "?", "?", "?"],

    //             childPhenotype: "?",
    //             childGenotype: ["?", "?", "?", "?",],

    //             mutatedPhenotype: "?",
    //             mutatedGenotype: ["?", "?", "?", "?"],

    //             ems: "",

    //             demoState: "emission",
    //         })
    //     }


    // }





    // automateOneGeneration = () => {

    //     //this.initializeAgent()

    //     let ah = this.state.agentHistory

    //     let gn = ah[ah.length - 1]

    //     //console.log("gn: ", gn)
    //     console.log("population: ", gn.population)

    //     let myEms = this.state.ems

    //     if (myEms === "?" | myEms === "") {
    //         let randomEms = gn.population[Math.floor(Math.random() * gn.population.length)];
    //         //this.reinforceResponse(randomEms.phenotype)
    //         randomEms.status = "emited"
    //         this.setState({ ems: randomEms.phenotype })
    //         this.setState({ demoState: "selection" })
    //     }
    // }



    render() {


        let AllTheParents = []

        if (this.state.allParents) {

            for (let i = 0; i < this.state.popSize; i++) {
                let pairId = `pair_${i + 1}`
                let pair = ["", ""]


                if (this.state.allParents[i]) {
                    pair = this.state.allParents[i]
                }

                AllTheParents.push(
                    <button
                        disabled={false}
                        id={pairId}
                        value={pair}
                        key={nanoid()}
                        className="btn-pair"
                        onClick={this.recombinePair}

                    >
                        <span>
                            {pair[0]}

                        </span>

                        <span>
                            {pair[1]}

                        </span>
                    </button>
                )
            }
        }




        let AllTheChildren = []

        if (this.state.allChildren) {

            for (let i = 0; i < this.state.popSize; i++) {
                let childId = `child_${i + 1}`
                let childPhen = ""
                let childStatus = ""


                if (this.state.allChildren[i]) {
                    childPhen = this.state.allChildren[i].phenotype
                    childStatus = this.state.allChildren[i].status
                }

                AllTheChildren.push(
                    <button
                        title={childStatus}
                        id={childId}
                        value={childPhen}
                        key={nanoid()}
                        className="btn-child"
                        onClick={this.mutateChild}

                    >
                        {childPhen}
                    </button>
                )

            }

        }



        return (
            <div key={nanoid()} className="row_emergence">

                <div key={nanoid()} className="columnA" >







                    <NeonStart
                        demoState={this.state.demoState}
                        randomPopulation={this.initializeAgent}
                    />



                    <div className="div_row" key={nanoid()}>

                        {/* <button
                            onClick={this.automateOneGeneration}
                            key={nanoid()}
                        >
                            do one
                        </button> */}

                        {/* <button
                            key={nanoid()}
                        > do 10

                        </button> */}


                    </div>



                    <div className="div_col" key={nanoid()}>

                        <div className="div_row">
                            <NeonEmission demoState={this.state.demoState} />

                            <button
                                title="Click to reinforce it"
                                id="btnReinforce"
                                className="toggle_reinforcement"
                                onClick={this.reinforceResponse}
                                style={{
                                    color: this.state.rnfColor,
                                }}
                            >
                                {this.state.rnfMessage}
                            </button>


                        </div>


                        <div
                            style={{
                                width: "90%",
                                minHeight: "50px",
                                margin: "10px auto",
                                //border: "1px solid #333",
                                padding: "0",
                                //backgroundColor: "#7036063b",
                                justifyContent: "space-between",

                            }}
                            key={nanoid()}
                        >
                            <AgentHistory
                                data={this.state.agentHistory}
                            />

                        </div>




                        <div
                            style={{
                                width: "90%",
                                height: "50px",
                                margin: "10px auto",
                                //border: "1px solid #333",
                                padding: "0",
                                //backgroundColor: "#7036063b",
                                justifyContent: "space-between",

                            }}
                            className="div_row"
                            key={nanoid()}
                        >

                            <Emission
                                population={this.state.agentHistory[this.state.agentHistory.length - 1].population}
                                doSomething={this.doSomething}
                            />

                        </div>

                    </div>


                </div>








                <div className="columnB" key={nanoid()} >

                    {/* <div
                        className="div_row"
                        style={{
                            margin: "10px auto",
                        }}
                        key={nanoid()}
                    >
                        <NeonCreateNewPopulation demoState={this.state.demoState} />
                    </div> */}


                    {/* <table className="engraved">
                        <tbody>

                            <tr>
                                <td colSpan="4">
                                    Select parents
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan="2">
                                    <span> random </span>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="2">
                                    <span> favor the fitter </span>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>


                        </tbody>
                    </table> */}

                    <NeonSelection
                        demoState={this.state.demoState}
                        reinforced={this.state.reinforced}
                        allParents={this.state.allParents}
                        popSize={this.state.popSize}
                    />



                    <div
                        className="div_row"
                        key={nanoid()}
                        style={{
                            width: "90%",
                            height: "50px",
                            margin: "10px auto",
                            border: "1px solid #333",
                            padding: "0",
                            //backgroundColor: "#7036063b",
                            justifyContent: "space-between",

                        }}
                    >


                        <Selection
                            demoState={this.state.demoState}
                            population={this.state.agentHistory[this.state.agentHistory.length - 1].population}
                            doSomethingSelect={this.doSomethingSelect}
                        />


                        {/* <ButtonNext onClick={this.goToRecombination} /> */}

                        {/* <ButtonNext onClick={this.automateSelection} /> */}


                        <Button
                            onClick={this.automateSelection}
                            variant="outline-info"
                            style={{
                                height: "30px", fontSize: "10px", margin: "auto",
                            }}
                        >
                            automate

                    </Button>


                    </div>




                    <div className="parents-wrapper" key={nanoid()} >
                        {/* <label>parents</label> */}
                        {AllTheParents}

                    </div>




                    < NeonRecombination demoState={this.state.demoState} />




                    {/* <div
                        className="div_row"
                        key={nanoid()}
                        style={{
                            width: "90%",
                            height: "150px",
                            margin: "10px auto",
                            border: "1px solid #333",
                            padding: "0",
                            //backgroundColor: "#3a3a3a3b",
                            justifyContent: "space-between",

                        }}

                    >
                        <RecombinationDemo
                            nrBits={this.state.nrBits}
                            demoState={this.state.demoState}
                            low={this.state.low}
                            high={this.state.high}

                            // goToMutation={this.goToMutation}
                            addChildItem={this.addChildItem}


                            parent1={this.state.parents[0]}
                            parent2={this.state.parents[1]}
                            genotype1={this.state.genotype1}
                            genotype2={this.state.genotype2}
                        />
                    </div> */}


                    <div
                        className="div_row"
                        key={nanoid()}
                        style={{
                            width: "90%",
                            height: "150px",
                            margin: "10px auto",
                            border: "1px solid #333",
                            padding: "0",
                            //backgroundColor: "#3a3a3a3b",
                            justifyContent: "space-between",

                        }}

                    >
                        <Rec2
                            nrBits={this.state.nrBits}
                            demoState={this.state.demoState}
                            low={this.state.low}
                            high={this.state.high}

                            // goToMutation={this.goToMutation}
                            addChildItem={this.addChildItem}


                            parent1={this.state.parents[0]}
                            parent2={this.state.parents[1]}
                            g1={this.state.genotype1}
                            g2={this.state.genotype2}
                        />
                    </div>


                    <div className="parents-wrapper" key={nanoid()} >
                        {/* <label>children</label> */}
                        {AllTheChildren}




                    </div>



                    <NeonMutation demoState={this.state.demoState} />


                    <div
                        className="div_row"
                        key={nanoid()}
                        style={{
                            width: "90%",
                            height: "100px",
                            margin: "10px auto",
                            border: "1px solid #333",
                            padding: "0",
                            //backgroundColor: "#350e073b",
                            justifyContent: "space-between"

                        }}
                    >


                        <MutationDemo
                            genotype={this.state.childGenotype}
                            // addToNext={this.addToNext}
                            addToNext={this.replaceOriginal}
                            demoState={this.state.demoState}
                            nrBits={this.state.nrBits}
                        />



                    </div>


                    <div className="div_row" key={nanoid()}>

                        <Button
                            onClick={this.addNewPopulation}
                            variant="outline-success"
                            style={{
                                height: "30px", fontSize: "12px", margin: "auto",
                            }}
                        >
                            add new population

                    </Button>

                    </div>





                </div>


            </div >
        )
    }




}
