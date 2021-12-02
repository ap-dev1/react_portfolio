import { range } from "d3";


// let repertoire = range(0, 1000)
// let c1 = range(250, 500)
// let c2 = range(501, 750)

// let repertoire = range(400, 600)
// let c1 = range(470, 512)
// let c2 = range(512, 553)

let repertoire = range(0, 1000)
let c1 = range(300, 401)
let c2 = range(401, 501)

var initialState = {
    repertoire: repertoire,
    class1: c1,
    class2: c2,

    population: [],
    allPopulations: [],

    emission: 0,

    irt: 200,
    N: 100,

    mutation_rate: .3,
    gen: 0,

    timeLimit: 15,
    recordHeight: 30,

    RI1: 1,
    RI2: 2,

    Miu1: 0.1,
    Miu2: 0.1,


    progress: 0,

    color1: 'rgb(255, 128, 49)',
    color2: 'rgb(28, 255, 28)',
    colorE: 'rgb(179, 179, 179)',
    colorCO: "#fff",
    responseColor: 'rgb(179, 179, 179)',

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



export default initialState;