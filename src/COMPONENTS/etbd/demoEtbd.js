// formerly known as ETBD, now commented out.

import "./etbd.sass";
import etbdState from "./etbdState";
import * as d3 from "d3";




// let pair = [9, 30]
// let str1 = pair[0].toString(2)
// let str2 = pair[1].toString(2)

// let str11 = str1.padStart(5, "0")
// let str22 = str2.padStart(5, "0")


// console.log("after padding: ")
// console.log("str11: ", str11)
// console.log("str22: ", str22)

// let comparison = str1.localeCompare(str2)
// let comparison1 = str11.localeCompare(str22)
// console.log('comparison: ', comparison)
// console.log('comparison1: ', comparison1)

export function clonePop(arr1) {
    let arr2 = []
    arr1.forEach((item) => {
        arr2.push(item)
    })
    return arr2
}


export function createGenZero() {
    let genZero = []

    let n = etbdState.popSize
    let low = d3.min(etbdState.repertoire)
    let high = d3.max(etbdState.repertoire)


    for (let i = 0; i < n; i++) {
        let b = d3.randomInt(low, high + 1)()
        genZero.push(b)
    }

    genZero.sort((a, b) => a - b)

    return genZero
};



export function emitBehavior(array1) {
    let idx = d3.randomInt(array1.length)()
    let ems = array1[idx]
    return ems
};



export function emissionClass(ems) {
    if (etbdState.class1.includes(ems)) {
        return "class1";
    } else if (etbdState.class2.includes(ems)) {
        return "class2";
    } else {
        return "else";
    }
};






export function twoRandomParents(thisPopulation) {

    let idx1 = d3.randomInt(thisPopulation.length)()
    let p1 = thisPopulation[idx1]
    let diad = [p1]

    let p2 = null
    let leftOvers = thisPopulation.filter((item) => item !== p1)

    if (leftOvers.length === 0) {

        let idx2 = d3.randomInt(thisPopulation.length)()
        p2 = thisPopulation[idx2]
        diad.push(p2)
        console.log('Alert: no unique parents: ', thisPopulation)
    } else {
        let idx2 = d3.randomInt(leftOvers.length)()
        p2 = leftOvers[idx2]
        diad.push(p2)
    }

    return diad
}



export function twoFitParents(arr, cls, ems) {

    let fitDiad = []
    let miu = cls === 'b1' ? etbdState.Miu1 : etbdState.Miu2;

    //let rndExp = parseInt(d3.randomExponential(1, 5)(miu) * 100);
    //let rndExp1 = parseInt(d3.randomExponential(1, 5)(miu) * 100);

    arr = [1, 2, 5, 11, 15, 20, 22, 30]
    ems = 15
    let rndExp = 6
    let rndExp1 = 6


    let fitnessValues = []

    arr.forEach(b => {
        let phen_dif = Math.abs(b - ems)
        fitnessValues.push(phen_dif)
    })


    let relativeFitnessValues = [];

    fitnessValues.forEach(fitness => {
        let fitness_dif = Math.abs(fitness - rndExp)
        relativeFitnessValues.push(fitness_dif)
    })

    let closestIndex = d3.minIndex(relativeFitnessValues)


    //-------------
    let p1 = arr[closestIndex]
    let diad = [p1]


    let leftOvers = arr.filter((item) => item !== p1)

    //----------------


    let fitnessValues1 = []

    arr.forEach(b => {
        let phen_dif = Math.abs(b - ems)
        fitnessValues1.push(phen_dif)
    })


    let relativeFitnessValues1 = [];

    fitnessValues1.forEach(fitness => {
        let fitness_dif = Math.abs(fitness - rndExp1)
        relativeFitnessValues1.push(fitness_dif)
    })

    let closestIndex1 = d3.minIndex(relativeFitnessValues1)
    let p2 = arr[closestIndex1]
    diad.push(p2)


    return diad
    //--------------


    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // let fitnessValues = []

    // thisPopulation.forEach(phenotype => {
    //     let phen_dif = Math.abs(phenotype - ems)
    //     fitnessValues.push(phen_dif)
    // })

    // let fitParents = []

    // while (parents.length < 2) {
    //     let randomFitness = parseInt(d3.randomExponential(1, 300)(etbdState.Miu1) * 100);

    //     let relativeFitnessValues = [];

    //     fitnessValues.forEach(fitness => {
    //         let fitness_dif = Math.abs(fitness - randomFitness)
    //         relativeFitnessValues.push(fitness_dif)
    //     })

    //     let closestIndex = d3.minIndex(relativeFitnessValues)

    //     let closestPhen = thisPopulation[closestIndex]

    //     if (!fitParents.includes(closestPhen)) {
    //         fitParents.push(closestPhen)
    //     }
    // }
}



export function stringToInt(string) {
    let result = 0
    let arr1 = Array.from(string)

    arr1.forEach((item, i) => {
        let bitPower = arr1.length - 1 - i
        let bitValue = 2 ** bitPower
        result = result + item * bitValue
    })

    return result
}




export function crossTwoStrings(pair) {

    let bits = d3.max(etbdState.repertoire).toString(2).length
    let newString = ""
    let newArray = []

    // COMPUTE and pad GENOTYPEs:
    let s1 = pair[0].toString(2)
    let s2 = pair[1].toString(2)
    let s11 = s1.padStart(bits, "0")
    let s22 = s2.padStart(bits, "0")


    // CROSS GENOTYPES:
    for (let g = 0; g < bits; g++) {
        let bit = ""
        let coin = d3.randomUniform()()

        if (coin < 0.5) {
            bit = s11[g]
        } else {
            bit = s22[g]
        }
        newString = newString + bit
        newArray.push(parseInt(bit))
    };

    let newInt = stringToInt(newString)

    return newInt
}




export function undergoesMutation() {
    let mutation_chance = d3.randomUniform()()
    if (mutation_chance > etbdState.mutation_rate) {
        return false
    } else {
        return true
    }
};



export function flipRandomBit(phen) {
    let bits = d3.max(etbdState.repertoire).toString(2).length
    let s = phen.toString(2)

    let string1 = s.padStart(bits, "0")

    let idx = d3.randomInt(string1.length)()
    let array1 = Array.from(string1)
    let flippedBit = array1[idx] === '1' ? '0' : '1'

    array1[idx] = flippedBit

    let mutatedString = ''

    array1.forEach((item) => {
        mutatedString = mutatedString + item
    })

    let mutatedInt = stringToInt(mutatedString)


    return mutatedInt
}



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export function pressLeverEffect(cls) {
    // let svgMatching1 = d3.select("#svgMatching")
    // let lv1 = svgMatching1.select("#lever1")
    // lv1
    //     .style("opacity", .9)
    //     .attr("transform", "scale(0.98)")
    //     .attr("transform", "translate(2, 2)")
    //     .attr("box-shadow", "3px 2px 22px 1px rgba(0, 0, 0, 0.24)")

    let lever = `#lever${cls.toString()}`

    d3
        .select("#svgMatching")
        .select(lever)
        .style("opacity", .9)
        .attr("transform", "scale(0.98)")
        .attr("transform", "translate(2, 2)")
        .attr("box-shadow", "3px 2px 22px 1px rgba(0, 0, 0, 0.24)")
};
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// export function demoEtbd(props) {

//     // The first two Random Intervals, between 1000 and 5000 ms, from an exponential with mean 1/RI mean. I use integers here to remove the microseconds. When the timers exceed the intervals, reinforcement becomes available.

//     // const [r1ready, setR1ready] = useState(false)
//     // const [r2ready, setR2ready] = useState(false)

//     // const [int1, setInt1] = useState(() => parseInt(d3.randomExponential(1, 5)(etbdState.RI1) * 1000))
//     // const [int2, setInt2] = useState(() => parseInt(d3.randomExponential(1, 5)(etbdState.RI2) * 1000))


//     // console.log("demoEtbd, int1, int2, in ms: ", int1, int2)

//     // d3.timeout((elapsed1) => {
//     //     this.setState({ r1ready: 1 });
//     // }, int1);
//     // d3.timeout((elapsed2) => {
//     //     this.setState({ r2ready: 1 });
//     // }, int2);


//     // // EVENTS PER SESSION (15s):
//     // let r1min = `${1 / this.state.RI1 * this.state.timeLimit}`
//     // let r2min = `${1 / this.state.RI2 * this.state.timeLimit}`



//     let etbdEvents = props;
//     let thisPopulation = [];

//     if (props.population) {
//         thisPopulation = props.population
//     } else {
//         let g0 = createGenZero()
//         thisPopulation = g0
//     }


//     // Random emission:
//     // let emission = emitBehavior(thisPopulation)


//     let newEvent = { ems: ems, respClass: "be", reinforced: false }


//     // Evaluate ems:
//     if (etbdState.class1.includes(ems)) {
//         newEvent.respClass = "b1";

//         if (props.r1ready !== 0) {
//             newEvent.reinforced = true;
//             // this.setState({
//             //     Points1: Points1 + this.state.r1ready,
//             //     r1ready: 0,
//             // });
//             let int1 = parseInt(d3.randomExponential(1, 5)(etbdState.RI1) * 1000);
//             // d3.timeout((elapsed1) => {
//             //     this.setState({ r1ready: 1 });
//             // }, int1);
//         };
//         // lv1
//         //     .transition().duration(300).style("opacity", .5)
//         //     .attr("transform", "scale(1)")
//         //     .attr("transform", "translate(-2, -2)")
//         //     .attr("box-shadow", "none")
//     };




//     // -------------------------------------------------------------- Class 2

//     if (class2.includes(ems)) {

//         // let svgMatching = d3.select("#svgMatching")
//         // let lv2 = svgMatching.select("#lever2")

//         // lv2
//         //     .style("opacity", .9)
//         //     .attr("transform", "scale(0.98)")
//         //     .attr("transform", "translate(2, 2)")
//         //     .attr("box-shadow", "3px 2px 22px 1px rgba(0, 0, 0, 0.24)")


//         newEvent.respClass = "b2";


//         // CHECK FOR REINFORCEMENT:
//         if (props.r2ready !== 0) {
//             newEvent.reinforced = true;

//             // this.setState({
//             //     Points2: Points2 + this.state.r2ready,
//             //     r2ready: 0,
//             // });

//             let int2 = parseInt(d3.randomExponential(1, 5)(etbdState.RI2) * 1000);

//             // d3.timeout((elapsed2) => {
//             //     this.setState({ r2ready: 1 });
//             // }, int2);
//         };

//         // lv2
//         //     .transition().duration(300).style("opacity", .5)
//         //     .attr("transform", "scale(1)")
//         //     .attr("transform", "translate(-2, -2)")
//         //     .attr("box-shadow", "none")
//     };



//     // RETURN ..?

//     /*
//     //  PUSH NEW RESPONSE:  -----------------------------------  PUSH NEW RESPONSE

//     let newResponse = {
//         timestamp: eventTimeStamp,
//         class: respClass,
//         emission: randomEmission,
//         reinforced: reinforced,
//         population: population,
//         co: co,
//         // points1: points1,
//         // points2: points2,
//     };

//     // events.push(newResponse);
//     // this.setState({ events: events });
//     // console.log('ems, pop: ', randomEmission, ', ', reinforced, ' from ', population)

//     */





//     //               CREATE NEW_POPULATION:




//     var next_population = []

//     if (reinforced === false) {

//         for (let j = 0; j < population.length; j++) {

//             let idx1 = d3.randomInt(population.length)()
//             let p1 = population[idx1]
//             let idx2 = d3.randomInt(population.length)()
//             let p2 = population[idx2]

//             var phenRandom = recombineAndMutate(p1, p2, this.state.mutation_rate)

//             if (this.state.repertoire.includes(phenRandom)) {
//                 next_population.push(phenRandom)
//             } else {
//                 next_population.push(phenRandom % this.state.repertoire.length)
//             }

//         }

//         addData(next_population)
//         this.setState({ population: next_population })



//     }

//     else if (reinforced === true) {

//         var fitnessValues = []

//         population.forEach(phenotype => {
//             let phen_dif = Math.abs(phenotype - randomEmission)
//             fitnessValues.push(phen_dif)
//         })


//         // for each behavior in the population:
//         for (let j = 0; j < population.length; j++) {


//             // Get two parents:

//             var parents = []

//             while (parents.length < 2) {
//                 var randomFitness = parseInt(d3.randomExponential(1, 300)(this.state.Miu1) * 100);
//                 var relativeFitnessValues = []

//                 fitnessValues.forEach(fitness => {
//                     let fitness_dif = Math.abs(fitness - randomFitness)
//                     relativeFitnessValues.push(fitness_dif)
//                 })


//                 var closestIndex = d3.minIndex(relativeFitnessValues)
//                 var closestPhen = population[closestIndex]

//                 if (!parents.includes(closestPhen)) {
//                     parents.push(closestPhen)
//                 }
//             }


//             // CHILD BEHAVIOR:
//             //var phenFitness = recombineAndMutate(p1, p2, 0.50)
//             var child = recombineAndMutate(parents[0], parents[1], this.state.mutation_rate)


//             // IS THIS TO WRAP THE REPERTOIRE ... ??
//             if (this.state.repertoire.includes(child)) {
//                 next_population.push(child)
//             } else {
//                 next_population.push(child % this.state.repertoire.length)
//             }
//         };

//         addData(next_population)
//         this.setState({ population: next_population })
//     }






//     return (

//         <>

//             <div
//                 className='div-start-reset'

//             >
//                 <button
//                     id='btn-run-etbd'
//                     onClick={this.beginSimulation}
//                 >
//                     runETBD()
//                 </button>


//             </div>

//         </>



//     );
// }
// //}



