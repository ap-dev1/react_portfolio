

let colors = {
    color1: 'rgb(255, 128, 49)',
    color11: "rgba(255, 128, 49, .1)",

    color2: 'rgb(28, 255, 28)',
    color22: "rgba(28, 255, 28, .1)",

    colorE: 'rgb(179, 179, 179)',
    colorCO: '#59ebf0',

    responseColor: 'rgb(179, 179, 179)',

    codColor: '#282c34',

    codOn: '#DarkSlateGrey',

    codOff: 'transparent',

}


// --------    03/18/2022

let matchingWidth = 400
let matchingHeight = 175


function computeClassesLocation(w, h) {
    let dst = .02 * w
    let lw = .25 * w
    let lh = .3 * h

    let x1 = .5 * w - lw - dst
    let x2 = .5 * w + dst
    let y = .3 * h

    return [[x1, y, lw, lh], [x2, y, lw, lh]]
}


let levers = computeClassesLocation(matchingWidth, matchingHeight)
let l1 = levers[0]
let l2 = levers[1]

// let l1 = [60, 50, 80, 50]
// let l2 = [160, 50, 80, 50]


function pointsFromLever(lever) {
    let x = lever[0]
    let y = lever[1]
    let w = lever[2]
    let h = lever[3]

    return [
        [x, y],
        [x + w, y],
        [x + w, y + h],
        [x, y + h],
    ]
}


let c1 = pointsFromLever(l1)
let c2 = pointsFromLever(l2)



export function setMatchingState(array1) {

    let initialState = {
        events: [{}],
        liveSession: false,

        agentType: 'human',
        player1: false,
        resetplayer1: false,

        matchingWidth: matchingWidth,
        matchingHeight: matchingHeight,
        irtEtbd: 50,
        timeLimit: 10,
        recordHeight: 25,

        colors: colors,
        color1: 'rgb(255, 128, 49)',
        color2: 'rgb(28, 255, 28)',
        colorE: 'rgb(179, 179, 179)',
        colorCO: '#59ebf0',
        responseColor: 'rgb(179, 179, 179)',
        codColor: '#282c34',

        timeStart: 0,
        // timeElapsed: 0,

        lever1: l1,
        lever2: l2,
        class1: c1,
        class2: c2,

        progress: 0,

        RI1: 1,
        RI2: 2,
        cod1_duration: 2000,
        cod1_status: "off",
        cod2_duration: 2000,
        cod2_status: "off",

        r1ready: 0,
        r2ready: 0,

        // B1: 0,
        // B2: 0,
        // CO: 0,
        // Points1: 0,
        // Points2: 0,
        // PointsCO: 0,

        //pathData1: [["M100 100L150 200"]],


    };



    return initialState;
}