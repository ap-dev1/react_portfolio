import './emergence.sass';
import './emergence22.sass';

import './fitness/_btn-set-fitness.sass';
import './_demo-state.sass';
import './_btn-go-to-rulz.sass';

import React from "react";
import { nanoid } from "nanoid";
import * as d3 from "d3";
import { Button } from "react-bootstrap";


import etbdState from "../etbd/etbdState";
import { dec2binList } from "../etbd_hamming/hammingFunctions";

import { NeonCreateNewPopulation, NeonSelection, NeonRecombination, NeonMutation } from "./NeonsSigns";

import NeonEmitBehavior from './emission/NeonEmitBehavior';
import AvailableOptions from "./emission/AvailableOptions";

import SelectionPressure from "./fitness/SelectionPressure";
import FitnessD3 from "./fitness/FitnessD3";

import SelectParents from "./selection/SelectParents";

// import RecombineGenotypes from "./recombination/RecombineGenotypes";

import ChildGenotype from "./recombination/ChildGenotype";

import MutationDemo from "./mutation/MutationDemo";

import * as littleHelpers from './littleHelpers';

// import SetFitnessCriterion from "./fitness/SetFitnessCriterion";


// var defaultGeneration = []
// etbdState.defaultPopulation.forEach((item) => {
//     defaultGeneration.push(
//         {
//             phenotype: item,
//             genotype: "",
//             status: "",      // emited, reinforced, or empty; used in emergence22.sass for styling;
//             fitness: 0,
//             mutant: false
//         }
//     )
// })


export default class EmergenceMain2 extends React.Component {

    constructor(props) {
        super(props)

        this.state = littleHelpers.initialState

        this.initializeAgent = this.initializeAgent.bind(this)
        this.doSomething = this.doSomething.bind(this)
        this.recombinePair = this.recombinePair.bind(this)
        this.addChildItem = this.addChildItem.bind(this)
        this.automateRecombination = this.automateRecombination.bind(this)
    }



    componentWillMount() {
        let binaryHigh = this.state.high.toString(2)
        // this.setState({ nrBits: binaryHigh.length })
        let cg = Array.apply(null, Array(binaryHigh.length)).map(function (x, i) { return ""; })
        this.setState({ childGenotype: cg })
    }


    componentDidMount() {
        this.initializeAgent()
    }

    initializeAgent = () => {

        this.setState({ demoState: "emission" })

        let bits = this.state.nrBits

        let population = etbdState.defaultPopulation
        let generation = []
        let n = this.state.popSize

        // population.sort((a, b) => a > b)

        this.setState({ parentPopulation: population })
        this.setState({ population: population })
        // this.setState({ parent1: d3.min(population) })
        // this.setState({ parent2: d3.max(population) })
        this.setState({ parents: [d3.min(population), d3.max(population)] })

        this.setState({ childG: d3.min(population) })


        // AGENT HISTORY:
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
    }



    // EMIT A RESPONSE

    doSomething = (eventTarget) => {
        // console.log(value, id.id)
        this.setState({ emsid: eventTarget.id })

        let history = this.state.agentHistory
        let gen = history[history.length - 1]
        let pop = gen.population

        let individual = pop.filter(item => item.phenotype === parseInt(eventTarget.value))

        individual[0].status = "emited"

        this.setState({ ems: parseInt(eventTarget.value) })
        this.setState({ agentHistory: history })
        // this.setState({ demoState: 'selection' })
    }



    dsSelection = () => {
        this.setState({ demoState: 'selection' })
    }



    chooseParent = (eventTarget) => {

        if (!this.state.p1) {
            this.setState({
                p1: eventTarget.value,
                p1id: eventTarget.id
            })
        } else {
            this.setState({
                p2: eventTarget.value,
                p2id: eventTarget.id,
                demoState: 'recombination',
            })
        }
    }


    reinforceResponse = () => {

        let ah = this.state.agentHistory
        let gn = ah[ah.length - 1]

        if (this.state.reinforced === false) {
            let ems = gn.population.filter(item => item.status === "emited")[0]
            ems.status = "reinforced"

            this.setState({ fitnessZero: ems.phenotype })

            gn.population.forEach((item) => {
                // let rf = Math.abs(item.phenotype - ems.phenotype)
                // item.fitness = rf

                let rd = Math.abs(item.phenotype - ems.phenotype)
                let a = 1 / this.state.mu
                let rf = a * Math.E ** (-a * item.phenotype)
                let rf1 = 1 - Math.E ** (-a * item.phenotype)

                item.fitness = rf.toFixed(3)

                // console.log('-------------')                
                // console.log("rd: ", rd)
                // console.log("miu1: ", this.state.miu1)
                // console.log("a: ", a)
                // console.log("rf: ", rf)
            })

            let chosenFitness = d3.randomExponential(1 / this.state.mu)(this.state.low, this.state.high)

            // console.log("chosenFitness: ", parseInt(chosenFitness))

            // let myVals = []
            // for (let i = 0; i < 1000000; i++) {
            //     // let chosenFitness = d3.randomExponential(1, 5)(this.state.miu1)
            //     let chosenFitness = d3.randomExponential(1 / this.state.miu1)(this.state.low, this.state.high)

            //     let cf = parseInt(chosenFitness)
            //     myVals.push(1 / chosenFitness)
            // }

            // console.log("miu = 5, (1, 5): ", d3.mean(myVals), d3.median(myVals))

            // let chosenFitness = d3.randomExponential(1, 5)(this.state.miu1) * 1000
            // let cf = parseInt(chosenFitness)




        } else {
            let ems = gn.population.filter(item => item.status === "reinforced")[0]
            ems.status = "emited"
        }


        this.setState({ agentHistory: ah })

        if (this.state.reinforced === false) {
            this.setState({
                reinforced: true,
                rnfMessage: `${this.state.ems} is now the "fitness ideal".`,
                rnfColor: "yellow"
            })
        } else {
            this.setState({
                reinforced: false,
                rnfMessage: "reinforce it",
                rnfColor: "#555"
            })
        }
    }







    twoFitParents = () => {
        let parents = []

        let mu = this.state.mu
        let fitnessZero = this.state.ems
        let range = [this.state.low, this.state.high]

        let parentPopulation = this.state.agentHistory[this.state.agentHistory.length - 1].population
        let population = []

        parentPopulation.forEach((item) => {
            population.push(item.phenotype)
        })

        while (parents.length < 2) {
            let randomFitness = parseInt(d3.randomExponential(1 / mu)(range[0], range[1]))
            let phen1 = fitnessZero - randomFitness
            let phen2 = fitnessZero + randomFitness

            if (population.includes(phen1) && !parents.includes(phen1) && parents.length < 2) {
                parents.push(phen1)
            }

            if (population.includes(phen2) && !parents.includes(phen2) && parents.length < 2) {
                parents.push(phen2)
            }
        }

        return parents
    }




    automateSelection = () => {
        let parentPopulation = this.state.agentHistory[this.state.agentHistory.length - 1].population
        let bits = this.state.nrBits
        let allP = this.state.allParents
        let i = 0


        for (i; i < this.state.popSize; i++) {

            let pair = []

            if (this.state.reinforced === true) {
                pair = this.twoFitParents()
            } else {
                let p1 = parentPopulation[Math.floor(Math.random() * parentPopulation.length)]
                let p2 = parentPopulation[Math.floor(Math.random() * parentPopulation.length)]
                pair = [p1.phenotype, p2.phenotype]
            }

            pair.sort((a, b) => a > b)
            allP.unshift(pair)
        }

        this.setState({
            allParents: allP,
            demoState: "recombination"
        })
    };









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

        this.setState({
            parents: [p1, p2],
            genotype1: g1,
            genotype2: g2,
            allParents: allPairs
        })
    };



    automateRecombination = () => {
        let bits = this.state.nrBits
        let allP = this.state.allParents
        let allC = []

        allP.forEach(pair => {
            let p1 = pair[0]
            let p2 = pair[1]
            let g1 = dec2binList(bits, p1)
            let g2 = dec2binList(bits, p2)

            let cg = []
            let cp = 0

            for (let i = 0; i < g1.length; i++) {
                let gene = ""
                let power = g1.length - i - 1


                let rnd = Math.random()
                if (rnd < .5) {
                    gene = parseInt(g1[i])
                } else {
                    gene = parseInt(g2[i])
                }

                cg.push(gene)
                let slotValue = gene * 2 ** power
                cp = cp + slotValue
            }


            let childItem = this.createChildItem(cp)
            allC.push(childItem)
        })


        this.setState({
            allChildren: allC,
            demoState: "mutation"
        })
    };




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
                status: ""
            }
        )
    };

    addChildItem = (newChild) => {
        let childItem = this.createChildItem(newChild)
        let ac = this.state.allChildren
        ac.push(childItem)

        if (ac.length >= this.state.popSize) {
            this.setState({
                parents: [],
                allChildren: ac,
                demoState: "mutation"
            })
        }

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
    };

    mutateChild = (event) => {
        let x = event.currentTarget.id.split("_")
        let idx = parseInt(x[1]) - 1
        let childItem = this.state.allChildren[idx]

        this.setState({ childPhenotype: childItem.phenotype })
        this.setState({ childGenotype: childItem.genotype })
        this.setState({ mutatedGenotype: childItem.genotype })
        this.setState({ mutantIndex: idx })
    }


    mutateChildAutomatic = (event) => {
        let x = event.currentTarget.id.split("_")
        let idx = parseInt(x[1]) - 1
        let childItem = this.state.allChildren[idx]

        this.setState({ childPhenotype: childItem.phenotype })
        this.setState({ childGenotype: childItem.genotype })
        this.setState({ mutatedGenotype: childItem.genotype })
        this.setState({ mutantIndex: idx })
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



    automateMutation = () => {
        let ac = this.state.allChildren
        let idx1 = Math.floor(Math.random() * this.state.popSize)
        let idx2 = Math.floor(Math.random() * this.state.nrBits)

        this.setState({ mutantIndex: idx1 })

        let child = ac[idx1]

        let childP = child.phenotype
        let childG = child.genotype

        this.setState({
            childPhenotype: childP,
            childGenotype: childG,
            //mutantGenotype: child.genotype,
        })

        let mg = []
        let mutant = 0

        // Re-create the original genotype; when it reaches the bit
        //  with index === idx2, flip it; results in a mutated genotype. 
        child.genotype.forEach((bit, i) => {
            if (i !== idx2) {
                mg.push(bit)
            } else {
                mg.push(Math.abs(1 - bit))
            }
        })


        // Compute the mutated phenotype:
        mg.forEach((bit, i) => {
            let power = mg.length - 1 - i
            let slotValue = bit * 2 ** power
            mutant += slotValue
        })

        child.genotype = mg
        child.phenotype = mutant
        child.status = "mutant"
        this.setState({
            allChildren: ac,
        })
    };


    swapPopulations = () => {
        let ah = this.state.agentHistory
        let ac = this.state.allChildren
        let tn = ah[ah.length - 1].tn

        let newPopulation = {
            tn: tn + 1,
            population: ac
        }

        ah.push(newPopulation)

        // if (tn > 0) {
        //     ah = ah,slice(1)
        // }

        this.setState({
            agentHistory: ah,
            allParents: [],
            allChildren: [],
            ems: "",
            reinforced: false,
            demoState: "emission",
        })
    };



    automateOneGeneration = () => {
        let ah = this.state.agentHistory
        let gn = ah[ah.length - 1]
        let tn = gn.tn

        // RANDOM EMISSION:
        let myEms = gn.population[Math.floor(Math.random() * gn.population.length)]
        myEms.status = "emited"
        this.setState({ ems: myEms.phenotype })
        this.setState({ demoState: "selection" })

        // SELECT PARENTS:
        this.automateSelection()

        // RECOMBINE:
        this.automateRecombination()

        // MUTATE ONE GENOTYPE:
        setTimeout(() => {
            this.automateMutation()
            this.swapPopulations()
        }, 1000)
    };



    automateMultiple = () => {
        let x = 5
        for (let i = 0; i < x; i++) {
            setTimeout(this.automateOneGeneration())
        }
    };





    // sliderChange = (e) => {
    //     this.setState({ cod1_duration: e.currentTarget.value * 1000 })
    //     this.setState({ cod2_duration: e.currentTarget.value * 1000 })

    //     var p0sec = document.getElementById("p0sec")
    //     var p2sec = document.getElementById("p2sec")

    //     if (e.currentTarget.value > 0) {
    //         p0sec.classList.remove("inEffect")
    //         p0sec.classList.add("notInEffect")
    //         p2sec.classList.remove("notInEffect")
    //         p2sec.classList.add("inEffect")
    //     } else {
    //         p2sec.classList.remove("inEffect")
    //         p2sec.classList.add("notInEffect")
    //         p0sec.classList.add("inEffect")
    //         p0sec.classList.remove("notInEffect")

    //     }
    // }



    handleMu = () => {
        console.log("handle mu: this.state.mu, no bind: ", this.state.mu)
        // this.setState({mu: 5})
    }



    render() {
        let AllTheParents = []
        let AllTheChildren = []
        // let fitness_gradient = d3.scaleLinear()
        //     .domain([1, 99])
        //     .range([this.state.fitness_colors[0], this.state.fitness_colors[1]])


        if (this.state.allParents) {
            for (let i = 0; i < this.state.popSize; i++) {
                let pairId = `pair_${i + 1}`
                let pair = this.state.allParents[i] ? this.state.allParents[i] : ["", ""]

                // let pair = ["", ""]
                // if (this.state.allParents[i]) {
                //     pair = this.state.allParents[i]
                // }

                AllTheParents.push(

                    <button
                        disabled={false}
                        id={pairId}
                        value={pair}
                        key={nanoid()}
                        className="btn-pair"
                        onClick={this.recombinePair}
                    >
                        <span>{pair[0]}</span>
                        <span>{pair[1]}</span>

                    </button>
                )
            }
        };



        if (this.state.allChildren) {
            for (let i = 0; i < this.state.popSize; i++) {
                let childId = `child_${i + 1}`
                let childPhen = this.state.allChildren[i] ? this.state.allChildren[i].phenotype : ""
                let childStatus = this.state.allChildren[i] ? this.state.allChildren[i].status : ""

                // let childPhen = ""
                // let childStatus = ""

                // if (this.state.allChildren[i]) {
                //     childPhen = this.state.allChildren[i].phenotype
                //     childStatus = this.state.allChildren[i].status
                // }

                AllTheChildren.push(
                    <button
                        title={childStatus}
                        id={childId}
                        value={childPhen}
                        key={nanoid()}
                        className="btn-child"
                        onClick={this.mutateChild}
                    // style={{
                    //     background: fitness_gradient(i * 10),
                    //     border: `1px solid ${fitness_gradient(i * 10)}`
                    // }}

                    >
                        {childPhen}
                    </button>
                )
            }
        };





        return (


            <div id='EmergenceSection'>

                <div className='emergence-main'>

                    <div className='left'>


                        <div className='row' key={nanoid()}>
                            <FitnessD3
                                population={etbdState.defaultPopulation}
                                // ems={this.state.ems !== '?' ? this.state.ems : etbdState.defaultEms}

                                ems={this.state.ems !== '?' ? this.state.ems : null}

                                populationAgentHist={this.state.agentHistory[this.state.agentHistory.length - 1].population}

                                rnf={this.state.reinforced}
                                miu={this.state.mu}

                            // onChange={this.handleMiu1()}
                            />

                        </div>




                        <div className='row' key={nanoid()} >


                            <NeonEmitBehavior demoState={this.state.demoState} />


                            <AvailableOptions
                                demoState={this.state.demoState}
                                population={this.state.agentHistory[this.state.agentHistory.length - 1].population}
                                emsid={this.state.emsid}
                                doSomething={this.doSomething}
                            />


                        </div>



                        <div className='row' key={nanoid()} >


                            <button
                                id='btn-set-fitness'
                                className={this.state.reinforced === true ? 'sunk' : ' raised'}
                                key={nanoid()}
                                disabled={this.state.demoState === "emission" ? false : true}
                                title="Click to reinforce it"
                                onClick={this.reinforceResponse}
                            >
                                {this.state.rnfMessage}
                            </button>

                            <SelectionPressure
                                varName={'Selection pressure'}
                                miu={this.state.mu}
                                bgColor={d3.scaleLinear().domain([5, 15]).range(['grey', 'red'])}
                                decrement={() => this.setState({ mu: this.state.mu + 1 })}
                                increment={() => this.setState({ mu: this.state.mu - 1 })}
                                ems={this.state.ems}
                            />

                        </div>


                        <button
                            id='btn-go-to-rulz'
                            key={nanoid()}
                            onClick={this.dsSelection}
                            title='Initiate the Darwinian cycle'
                            disabled={(this.state.demoState === 'emission' && this.state.ems) ? false : true}
                        >
                            Create next generation
                        </button>


                        {/* <div className='row' key={nanoid()} >

                        </div> */}


                    </div>








                    <div className='rulz-column' key={nanoid()} >

                        <div className='row demo-state' key={nanoid()}   >
                            <h1>{this.state.demoState}</h1>
                        </div>

                        <div className='selection' key={nanoid()}  >

                            <div className='row' key={nanoid()}   >
                                <NeonSelection
                                    demoState={this.state.demoState}
                                    reinforced={this.state.reinforced}
                                    allParents={this.state.allParents}
                                    popSize={this.state.popSize}
                                />
                                {/* <button
                                    className='btn-automate'
                                    key={nanoid()}
                                    onClick={this.automateSelection}
                                    title='automate it'
                                >
                                    automate
                                </button> */}
                                <button
                                    className='btn-continue'
                                    key={nanoid()}
                                    onClick={this.automateSelection}
                                    title='next rule'
                                >
                                    continue
                                </button>
                            </div>





                            <div className='row' key={nanoid()}   >
                                <SelectParents
                                    demoState={this.state.demoState}
                                    // availableParents={this.state.agentHistory[this.state.agentHistory.length - 1].population}
                                    availableParents={this.state.agentHistory[this.state.agentHistory.length - 1].population.filter(item => item.phenotype !== this.state.p1)}
                                    chooseParent={this.chooseParent}
                                    reinforced={this.state.reinforced}
                                    p1id={this.state.p1id}
                                    p2id={this.state.p2id}
                                />


                            </div>


                            {/* <div className='row' key={nanoid()}   >
                                <div className="parents-wrapper" key={nanoid()}
                                >
                                    {AllTheParents}
                                </div>
                            </div> */}


                        </div>

                        <div className='recombination' key={nanoid()} >

                            <div className='row' key={nanoid()}>

                                < NeonRecombination demoState={this.state.demoState} />


                            </div>




                            <ChildGenotype
                                nrBits={this.state.nrBits}
                                demoState={this.state.demoState}
                                p1={this.state.p1}
                                p2={this.state.p2}
                            // addChildItem={this.addChildItem}
                            />


                        </div>




                        <div className='mutation' key={nanoid()} >

                            <div className='row' key={nanoid()} >
                                <NeonMutation demoState={this.state.demoState} />
                            </div>

                            <div className='row' key={nanoid()}>
                                <div className='children-wrapper' key={nanoid()}  >
                                    {AllTheChildren}
                                    <button
                                        className="btn-swap"
                                        onClick={this.swapPopulations}
                                        key={nanoid()}
                                        title="Replace parents with children and start again."
                                    >
                                    </button>
                                </div>
                            </div>


                            <div className='row' key={nanoid()}>
                                <MutationDemo
                                    nrBits={this.state.nrBits}
                                    demoState={this.state.demoState}
                                    genotype={this.state.childGenotype}
                                    childPhenotype={this.state.childPhenotype}
                                    addToNext={this.replaceOriginal}

                                />
                            </div>

                        </div>

                    </div>

                </div>



            </div >
        )
    }




}
