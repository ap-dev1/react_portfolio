import { range } from "d3";



let repertoire = range(0, 32)
let popSize = 5
let c1 = range(11, 16)
let c2 = range(16, 21)
let ce = []

repertoire.forEach((item) => {
    if (!c1.includes(item) && !c2.includes(item)) {
        ce.push(item)
    }
})


// let repertoire = range(0, 100)
// let popSize = 100
// let c1 = range(30, 51)
// let c2 = range(51, 71)

var etbdState = {


    repertoire: repertoire,
    popSize: popSize,

    // defaultPopulation: [5, 6, 8, 10, 11, 19, 20, 22, 23, 25],
    // defaultPopulation: [5, 8, 11, 12, 25],
    defaultPopulation: [5, 8, 11, 12, 25],

    defaultEms: 11,

    class1: c1,
    class2: c2,
    classE: ce,


    mutation_rate: .5,

    // RI1: 1,
    // RI2: .1,
    RI1: .1,
    RI2: 1,

    Miu1: 0.01,
    Miu2: 0.99,


    population: [],
    emission: 0,
    gen: 0,
    progress: 0,


    timeLimit: 60,
    recordHeight: 37,
    color1: 'rgb(255, 128, 49)',
    color2: 'rgb(28, 255, 28)',
    color11: 'rgba(255, 128, 49, .75)',
    color22: 'rgba(28, 255, 28, .75)',
    color111: 'rgba(255, 128, 49, .25)',
    color222: 'rgba(28, 255, 28, .25)',

    // colorE: 'rgb(179, 179, 179)',
    // colorCO: "#fff",
    // responseColor: 'rgb(179, 179, 179)',

    r1ready: 0,
    r2ready: 0,
    B1: 0,
    B2: 0,
    CO: 0,
    Points1: 0,
    Points2: 0,
    PointsCO: 0,

    timeStart: 0,
    timeElapsed: 0,
    dataPoints: [],

    events: [
        {
            id: 0,
            timestamp: 0,

            emission: 0,
            class: "",
            co: 0,
            points: 0,
        },
    ],
};



export default etbdState;