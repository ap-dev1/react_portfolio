import * as d3 from "d3";


export function fitnessBasedSelection(p1, p2, mutation_rate) {

    // CONVERT PHENOTYPE TO GENOTYPE:
    var s1 = p1.toString(2)
    var s2 = p2.toString(2)
    var bits = 10
    var s3 = ""
    var child = 9999

    while (s1.length < bits) {
        s1 = "0" + s1
    }

    while (s2.length < bits) {
        s2 = "0" + s2
    }


    // RECOMBINATION:
    for (let g = 0; g < bits; g++) {
        let bit = ""
        let coin = d3.randomUniform()()

        if (coin < 0.5) {
            bit = s1[g]
        } else {
            bit = s2[g]
        }

        s3 = s3 + bit
    };



    // MUTATION:
    let mutation_chance = d3.randomUniform()()


    if (mutation_chance <= mutation_rate) {

        let idx = d3.randomInt(s3.length)()
        let new_bit = ""
        let s4 = Array.from(s3)

        if (s3[idx] === "0") {
            new_bit = "1"
        } else {
            new_bit = "0"
        }

        s4.splice(idx, 1, new_bit)

        let s5 = ""

        s4.forEach((bit) => {
            s5 = s5 + bit
        })

        child = parseInt(s5, 2);

    } else {

        child = parseInt(s3, 2);
    }


    return child;
}