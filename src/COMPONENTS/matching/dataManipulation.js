//import * as d3 from "d3"

export function findLastTarget(array1) {


    // This works fine, use it after fixing the events.
    // for now, it starts with one empty event, so this 
    // needs addressed. 

    let array2 = array1.filter((item) => {
        if (item.class === "b1" | item.class === "b2") {
            return item
        }
    })


    //console.log("original: ", array1)
    //console.log("filtered: ", array2)

    if (array2.length === 0) {

        //console.log("return original: ", array1[(array1.length - 1)])

        return array1[(array1.length - 1)]

    } else {

        //console.log("return filtered: ", array2[(array2.length - 1)])

        return array2[(array2.length - 1)]
    }


}