//let d3.scale.ordinal = require("d3")
import react from "react"

import * as d3 from "d3"


export function radarData() {


    // let myData = [
    //     [//iPhone
    //         { axis: "Battery Life", value: 0.22 },
    //         { axis: "Brand", value: 0.28 },
    //         { axis: "Contract Cost", value: 0.29 },
    //         { axis: "Design And Quality", value: 0.17 },
    //         { axis: "Have Internet Connectivity", value: 0.22 },
    //         { axis: "Large Screen", value: 0.02 },
    //         { axis: "Price Of Device", value: 0.21 },
    //         { axis: "To Be A Smartphone", value: 0.50 }
    //     ], [//Samsung
    //         { axis: "Battery Life", value: 0.27 },
    //         { axis: "Brand", value: 0.16 },
    //         { axis: "Contract Cost", value: 0.35 },
    //         { axis: "Design And Quality", value: 0.13 },
    //         { axis: "Have Internet Connectivity", value: 0.20 },
    //         { axis: "Large Screen", value: 0.13 },
    //         { axis: "Price Of Device", value: 0.35 },
    //         { axis: "To Be A Smartphone", value: 0.38 }
    //     ], [//Nokia Smartphone
    //         { axis: "Battery Life", value: 0.26 },
    //         { axis: "Brand", value: 0.10 },
    //         { axis: "Contract Cost", value: 0.30 },
    //         { axis: "Design And Quality", value: 0.14 },
    //         { axis: "Have Internet Connectivity", value: 0.22 },
    //         { axis: "Large Screen", value: 0.04 },
    //         { axis: "Price Of Device", value: 0.41 },
    //         { axis: "To Be A Smartphone", value: 0.30 }
    //     ]
    // ]

    let myData = [
        [//iPhone
            //{ axis: "", value: 0.51 },

            { axis: "Sensitivity", value: 0.75 },
            { axis: "Variability", value: 0.4 },
            { axis: "Bias", value: 0.5 },

            { axis: "", value: 0.6 },
            { axis: "", value: 0.75 },
            { axis: "", value: 0.22 },
            { axis: "", value: 0.61 },
            { axis: "", value: 0.70 },
            { axis: "", value: 0.21 },
            { axis: "", value: 0.80 },

            { axis: "", value: 0.50 },
            { axis: "", value: 0.21 },
            // { axis: "", value: 0.50 },

        ]
    ]

    return myData

}




export function radarOptions() {

    let w = 400
    let h = 300
    //let margin = { top: 100, right: 100, bottom: 100, left: 100 }
    let margin = { top: 0, right: 0, bottom: 0, left: 0 }

    let width = Math.min(w, window.innerWidth - 10) - margin.left - margin.right

    let height = Math.min(h, window.innerHeight - margin.top - margin.bottom - 20)



    // let color = d3.scaleOrdinal()
    //     .range([
    //         "#EDC951",   //
    //         "#CC333F",   //
    //         "#00A0B0"    //
    //     ])


    let color = d3.scaleOrdinal()
        .range([
            "#ccc",   //
            "#CC333F",   //
            "#00A0B0"    //
        ])


    let myOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 1,

        levels: 2,
        dotRadius: 3,

        roundStrokes: false,
        color: color,

        dotFill: "#777",

        // arcSize: Math.PI * 2,
        arcSize: Math.PI * 2,

        maxAngle: 30,


    }

    return myOptions
}

