//import * as d3 from "d3"

export function setMatchingState(array1) {

    let initialState = {

        timeStart: 0,
        timeElapsed: 0,

        // events: [
        //     {id: 0, timestamp: 0, x: 0, y: 0,  class: "",  co: 0,  points: 0,},
        // ],

        // HOOKS!!  drag, read location and size:


        // SMALL, kind of.
        lever1: [150, 115, 100, 70],  // x, y, width, height
        lever2: [350, 115, 100, 70],
        class1: [[150, 115], [250, 115], [250, 185], [150, 185],],
        class2: [[350, 115], [450, 115], [450, 185], [350, 185],],


        // LARGE:
        // lever1: [165, 60, 125, 75],
        // lever2: [315, 60, 125, 75],
        // class1: [[150, 115], [250, 115], [250, 185], [150, 185],],
        // class2: [[350, 115], [450, 115], [450, 185], [350, 185],],

        // SMALL, UPPER CORNER:
        // lever1: [165, 60, 125, 75],
        // lever2: [315, 60, 125, 75],
        // class1: [[150, 115], [250, 115], [250, 185], [150, 185],],
        // class2: [[350, 115], [450, 115], [450, 185], [350, 185],],


        timeLimit: 15,
        recordHeight: 30,
        progress: 0,

        RI1: 1,
        RI2: 2,
        cod1_duration: 0,
        cod1_status: "off",
        cod2_duration: 0,
        cod2_status: "off",



        r1ready: 0,
        r2ready: 0,

        B1: 0,
        B2: 0,
        CO: 0,
        Points1: 0,
        Points2: 0,
        PointsCO: 0,


        //pathData1: [["M100 100L150 200"]],

        color1: 'rgb(255, 128, 49)',
        color2: 'rgb(28, 255, 28)',
        colorE: 'rgb(179, 179, 179)',
        colorCO: "#59ebf0",
        responseColor: 'rgb(179, 179, 179)',
        codColor: '#282c34',
        // codColor: '#282c34', // light cyan

    };



    return initialState;
}