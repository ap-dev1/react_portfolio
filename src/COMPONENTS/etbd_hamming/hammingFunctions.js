import { sum } from "d3-array";


//added October 22, 2021, for Emergence Demo:
export function dec2binList(bits, x) {

    // let bits = x.toString(2).length
    let zeroes = "";

    for (let i = 0; i < bits; i++) {
        zeroes += "0"
    };

    let paddedString = x.toString(2);
    paddedString = zeroes.substr(paddedString.length) + paddedString;

    let bitList = []

    for (let i = 0; i < paddedString.length; i++) {
        let a = parseInt(paddedString[i])
        bitList.push(a)
    }
    return bitList
};



// returns only the string:
export function dec2bin(bits, x) {
    let zeroes = "";

    for (let i = 0; i < bits; i++) {
        zeroes += "0"
    };

    let paddedString = x.toString(2);
    paddedString = zeroes.substr(paddedString.length) + paddedString;

    return paddedString
};




export function hammingDist(string1, string2) {

    // assuming they are equal: 
    let hd = 0

    for (let i = 0; i < string1.length; i++) {
        if (string2[i] !== string1[i]) {
            hd = hd + 1
        }
    }

    return hd
};



export function hdSelf(list1) {

    // assuming they are equal: 
    let distances = []

    list1.forEach(b => {
        let string1 = dec2bin(10, b)

        for (let n = 0; n < list1.length; n++) {
            let string2 = dec2bin(10, list1[n])

            let hd = 0

            for (let i = 0; i < string1.length; i++) {
                if (string2[i] !== string1[i]) {
                    hd = hd + 1
                }
            }

            distances.push(hd)
        }
    }
    )

    let sumHd = sum(distances)
    let cnt = distances.length
    let avg_self = (sumHd / cnt).toFixed(2)

    //console.log("avg_self: ", avg_self)

    return avg_self
};




export function hdOther(list1, list2) {

    // assuming they are equal: 
    let distances = []

    list1.forEach(b => {
        let string1 = dec2bin(10, b)

        for (let n = 0; n < list2.length; n++) {
            let string2 = dec2bin(10, list2[n])

            let hd = 0

            for (let i = 0; i < string1.length; i++) {
                if (string2[i] !== string1[i]) {
                    hd = hd + 1
                }
            }

            distances.push(hd)
        }
    }
    )

    let sumHd = sum(distances)
    let cnt = distances.length
    let avg_other = (sumHd / cnt).toFixed(2)

    //console.log("avg_other: ", avg_other)

    return avg_other
};