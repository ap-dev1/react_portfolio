//import * as d3 from "d3"

export function setDemoState(array1) {


    // let l1 = [100, 30, 80, 50]
    // let l2 = [200, 30, 80, 50]


    // let c1 = [
    //     [l1[0], l1[1]],
    //     [l1[0] + l1[2], l1[1]],
    //     [l1[0] + l1[2], l1[1] + l1[3]],
    //     [l1[0], l1[1] + l1[3]],
    // ]

    // let c2 = [
    //     [l2[0], l2[1]],
    //     [l2[0] + l2[2], l2[1]],
    //     [l2[0] + l2[2], l2[1] + l2[3]],
    //     [l2[0], l2[1] + l2[3]],
    // ]

    //-----------------------------------

    let schedules = [{ duration: 3 }, { duration: 4 }, { duration: 3 }]

    let sessionData = []

    schedules.forEach((s, i) => {
        sessionData.push(
            {
                schedule: i,
                duration: s.duration,
                scheduleData: { b1: 0, b2: 0, r1: 0, r2: 0 }
            }
        )
    })

    console.log("sessionData: ", sessionData)
    console.log("------------------------------")


    let initialState = {

        schedules: schedules,
        sessionData: sessionData,
        sessionDuration: schedules[0].duration * 1000,

        activeSchedule: 0,
        schMax: 5,
        endSchedule: false,
        endSession: false,
        timeLimit: 15,

        ////////////////////////////////

        // lever1: l1,
        // lever2: l2,

        // class1: c1,
        // class2: c2,

        timeStart: 0,
        timeElapsed: 0,


        progress: 0,

        RI1: 1,
        RI2: 2,

        mRI1: 1,
        mRI2: 2,

        r1ready: 1,
        r2ready: 1,


    };



    return initialState;
}