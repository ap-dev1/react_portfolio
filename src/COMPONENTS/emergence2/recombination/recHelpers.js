

import _ from 'lodash';
import etbdState from "../../etbd/etbdState";

let phenHigh = _.max(etbdState.repertoire)

export function getNrBits(phenHigh) {
    let binaryHigh = phenHigh.toString(2)
    return binaryHigh.length
}


export function emptyGenotype(content) {
    let nrBits = getNrBits(phenHigh)
    let emptyG = Array.apply(null, Array(nrBits)).map(function (x, i) { return content; })
    // let cg = Array.apply(null, Array(nrBits)).map(function (x, i) { return ""; })
    return emptyG
}


// export function newGenotype(a, b) {
//     // let myBits = []
//     let myBits = {}
//     let nrBits = a.length
//     for (let i = 0; i < nrBits; i++) {

//         // myBits[[parseInt(a[i])]] = parseInt(a[i])
// let varName= `bit${i}`
//         myBits[varName]=
//         // .push(

//         //     {
//         //         bitName: `bit${i}`,
//         //         bitValue: parseInt(a[i])
//         //     }
//         // )

//         // myBits.push(

//         //     {
//         //         bitName: `bit${i}`,
//         //         bitValue: parseInt(a[i])
//         //     }
//         // )

//     }
//     return myBits
// }