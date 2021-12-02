

// computeHamming = () => {

//     let phenRange = d3.range(1024);
//     phenRange.push(0);

//     var hDistances = [];

//     for (let i = 0; i < 1024; i++) {
//         var a = dec2bin(10, i);
//         var b = dec2bin(10, i + 1);

//         let hdList = []
//         for (let j = 0; j < 10; j++) {
//             if (a[j] !== b[j]) {
//                 hdList.push(1)
//             }
//             else {
//                 hdList.push(0)
//             }
//         }

//         hDistances.push(
//             {
//                 phenotype: i,
//                 genotype: a,
//                 hdNext: {
//                     hdLabel: `${i}-${i + 1}`,
//                     hdList: hdList.toString(),
//                     hd: d3.sum(hdList)
//                 }
//             }
//         );
//     };

//     return hDistances

// }

export var hdValues = [
    {
        phenotype: 0,
        genotype: "0000000000",
        hdNext: {
            hdLabel: "0 - 1",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1,
        genotype: "0000000001",
        hdNext: {
            hdLabel: "1 - 2",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 2,
        genotype: "0000000010",
        hdNext: {
            hdLabel: "2 - 3",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 3,
        genotype: "0000000011",
        hdNext: {
            hdLabel: "3 - 4",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 4,
        genotype: "0000000100",
        hdNext: {
            hdLabel: "4 - 5",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 5,
        genotype: "0000000101",
        hdNext: {
            hdLabel: "5 - 6",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 6,
        genotype: "0000000110",
        hdNext: {
            hdLabel: "6 - 7",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 7,
        genotype: "0000000111",
        hdNext: {
            hdLabel: "7 - 8",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 8,
        genotype: "0000001000",
        hdNext: {
            hdLabel: "8 - 9",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 9,
        genotype: "0000001001",
        hdNext: {
            hdLabel: "9 - 10",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 10,
        genotype: "0000001010",
        hdNext: {
            hdLabel: "10 - 11",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 11,
        genotype: "0000001011",
        hdNext: {
            hdLabel: "11 - 12",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 12,
        genotype: "0000001100",
        hdNext: {
            hdLabel: "12 - 13",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 13,
        genotype: "0000001101",
        hdNext: {
            hdLabel: "13 - 14",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 14,
        genotype: "0000001110",
        hdNext: {
            hdLabel: "14 - 15",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 15,
        genotype: "0000001111",
        hdNext: {
            hdLabel: "15 - 16",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 16,
        genotype: "0000010000",
        hdNext: {
            hdLabel: "16 - 17",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 17,
        genotype: "0000010001",
        hdNext: {
            hdLabel: "17 - 18",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 18,
        genotype: "0000010010",
        hdNext: {
            hdLabel: "18 - 19",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 19,
        genotype: "0000010011",
        hdNext: {
            hdLabel: "19 - 20",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 20,
        genotype: "0000010100",
        hdNext: {
            hdLabel: "20 - 21",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 21,
        genotype: "0000010101",
        hdNext: {
            hdLabel: "21 - 22",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 22,
        genotype: "0000010110",
        hdNext: {
            hdLabel: "22 - 23",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 23,
        genotype: "0000010111",
        hdNext: {
            hdLabel: "23 - 24",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 24,
        genotype: "0000011000",
        hdNext: {
            hdLabel: "24 - 25",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 25,
        genotype: "0000011001",
        hdNext: {
            hdLabel: "25 - 26",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 26,
        genotype: "0000011010",
        hdNext: {
            hdLabel: "26 - 27",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 27,
        genotype: "0000011011",
        hdNext: {
            hdLabel: "27 - 28",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 28,
        genotype: "0000011100",
        hdNext: {
            hdLabel: "28 - 29",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 29,
        genotype: "0000011101",
        hdNext: {
            hdLabel: "29 - 30",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 30,
        genotype: "0000011110",
        hdNext: {
            hdLabel: "30 - 31",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 31,
        genotype: "0000011111",
        hdNext: {
            hdLabel: "31 - 32",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 32,
        genotype: "0000100000",
        hdNext: {
            hdLabel: "32 - 33",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 33,
        genotype: "0000100001",
        hdNext: {
            hdLabel: "33 - 34",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 34,
        genotype: "0000100010",
        hdNext: {
            hdLabel: "34 - 35",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 35,
        genotype: "0000100011",
        hdNext: {
            hdLabel: "35 - 36",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 36,
        genotype: "0000100100",
        hdNext: {
            hdLabel: "36 - 37",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 37,
        genotype: "0000100101",
        hdNext: {
            hdLabel: "37 - 38",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 38,
        genotype: "0000100110",
        hdNext: {
            hdLabel: "38 - 39",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 39,
        genotype: "0000100111",
        hdNext: {
            hdLabel: "39 - 40",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 40,
        genotype: "0000101000",
        hdNext: {
            hdLabel: "40 - 41",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 41,
        genotype: "0000101001",
        hdNext: {
            hdLabel: "41 - 42",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 42,
        genotype: "0000101010",
        hdNext: {
            hdLabel: "42 - 43",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 43,
        genotype: "0000101011",
        hdNext: {
            hdLabel: "43 - 44",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 44,
        genotype: "0000101100",
        hdNext: {
            hdLabel: "44 - 45",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 45,
        genotype: "0000101101",
        hdNext: {
            hdLabel: "45 - 46",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 46,
        genotype: "0000101110",
        hdNext: {
            hdLabel: "46 - 47",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 47,
        genotype: "0000101111",
        hdNext: {
            hdLabel: "47 - 48",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 48,
        genotype: "0000110000",
        hdNext: {
            hdLabel: "48 - 49",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 49,
        genotype: "0000110001",
        hdNext: {
            hdLabel: "49 - 50",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 50,
        genotype: "0000110010",
        hdNext: {
            hdLabel: "50 - 51",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 51,
        genotype: "0000110011",
        hdNext: {
            hdLabel: "51 - 52",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 52,
        genotype: "0000110100",
        hdNext: {
            hdLabel: "52 - 53",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 53,
        genotype: "0000110101",
        hdNext: {
            hdLabel: "53 - 54",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 54,
        genotype: "0000110110",
        hdNext: {
            hdLabel: "54 - 55",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 55,
        genotype: "0000110111",
        hdNext: {
            hdLabel: "55 - 56",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 56,
        genotype: "0000111000",
        hdNext: {
            hdLabel: "56 - 57",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 57,
        genotype: "0000111001",
        hdNext: {
            hdLabel: "57 - 58",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 58,
        genotype: "0000111010",
        hdNext: {
            hdLabel: "58 - 59",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 59,
        genotype: "0000111011",
        hdNext: {
            hdLabel: "59 - 60",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 60,
        genotype: "0000111100",
        hdNext: {
            hdLabel: "60 - 61",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 61,
        genotype: "0000111101",
        hdNext: {
            hdLabel: "61 - 62",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 62,
        genotype: "0000111110",
        hdNext: {
            hdLabel: "62 - 63",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 63,
        genotype: "0000111111",
        hdNext: {
            hdLabel: "63 - 64",
            hdList: "0,0,0,1,1,1,1,1,1,1",
            hd: 7
        }
    },
    {
        phenotype: 64,
        genotype: "0001000000",
        hdNext: {
            hdLabel: "64 - 65",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 65,
        genotype: "0001000001",
        hdNext: {
            hdLabel: "65 - 66",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 66,
        genotype: "0001000010",
        hdNext: {
            hdLabel: "66 - 67",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 67,
        genotype: "0001000011",
        hdNext: {
            hdLabel: "67 - 68",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 68,
        genotype: "0001000100",
        hdNext: {
            hdLabel: "68 - 69",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 69,
        genotype: "0001000101",
        hdNext: {
            hdLabel: "69 - 70",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 70,
        genotype: "0001000110",
        hdNext: {
            hdLabel: "70 - 71",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 71,
        genotype: "0001000111",
        hdNext: {
            hdLabel: "71 - 72",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 72,
        genotype: "0001001000",
        hdNext: {
            hdLabel: "72 - 73",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 73,
        genotype: "0001001001",
        hdNext: {
            hdLabel: "73 - 74",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 74,
        genotype: "0001001010",
        hdNext: {
            hdLabel: "74 - 75",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 75,
        genotype: "0001001011",
        hdNext: {
            hdLabel: "75 - 76",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 76,
        genotype: "0001001100",
        hdNext: {
            hdLabel: "76 - 77",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 77,
        genotype: "0001001101",
        hdNext: {
            hdLabel: "77 - 78",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 78,
        genotype: "0001001110",
        hdNext: {
            hdLabel: "78 - 79",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 79,
        genotype: "0001001111",
        hdNext: {
            hdLabel: "79 - 80",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 80,
        genotype: "0001010000",
        hdNext: {
            hdLabel: "80 - 81",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 81,
        genotype: "0001010001",
        hdNext: {
            hdLabel: "81 - 82",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 82,
        genotype: "0001010010",
        hdNext: {
            hdLabel: "82 - 83",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 83,
        genotype: "0001010011",
        hdNext: {
            hdLabel: "83 - 84",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 84,
        genotype: "0001010100",
        hdNext: {
            hdLabel: "84 - 85",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 85,
        genotype: "0001010101",
        hdNext: {
            hdLabel: "85 - 86",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 86,
        genotype: "0001010110",
        hdNext: {
            hdLabel: "86 - 87",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 87,
        genotype: "0001010111",
        hdNext: {
            hdLabel: "87 - 88",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 88,
        genotype: "0001011000",
        hdNext: {
            hdLabel: "88 - 89",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 89,
        genotype: "0001011001",
        hdNext: {
            hdLabel: "89 - 90",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 90,
        genotype: "0001011010",
        hdNext: {
            hdLabel: "90 - 91",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 91,
        genotype: "0001011011",
        hdNext: {
            hdLabel: "91 - 92",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 92,
        genotype: "0001011100",
        hdNext: {
            hdLabel: "92 - 93",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 93,
        genotype: "0001011101",
        hdNext: {
            hdLabel: "93 - 94",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 94,
        genotype: "0001011110",
        hdNext: {
            hdLabel: "94 - 95",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 95,
        genotype: "0001011111",
        hdNext: {
            hdLabel: "95 - 96",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 96,
        genotype: "0001100000",
        hdNext: {
            hdLabel: "96 - 97",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 97,
        genotype: "0001100001",
        hdNext: {
            hdLabel: "97 - 98",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 98,
        genotype: "0001100010",
        hdNext: {
            hdLabel: "98 - 99",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 99,
        genotype: "0001100011",
        hdNext: {
            hdLabel: "99 - 100",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 100,
        genotype: "0001100100",
        hdNext: {
            hdLabel: "100 - 101",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 101,
        genotype: "0001100101",
        hdNext: {
            hdLabel: "101 - 102",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 102,
        genotype: "0001100110",
        hdNext: {
            hdLabel: "102 - 103",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 103,
        genotype: "0001100111",
        hdNext: {
            hdLabel: "103 - 104",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 104,
        genotype: "0001101000",
        hdNext: {
            hdLabel: "104 - 105",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 105,
        genotype: "0001101001",
        hdNext: {
            hdLabel: "105 - 106",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 106,
        genotype: "0001101010",
        hdNext: {
            hdLabel: "106 - 107",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 107,
        genotype: "0001101011",
        hdNext: {
            hdLabel: "107 - 108",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 108,
        genotype: "0001101100",
        hdNext: {
            hdLabel: "108 - 109",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 109,
        genotype: "0001101101",
        hdNext: {
            hdLabel: "109 - 110",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 110,
        genotype: "0001101110",
        hdNext: {
            hdLabel: "110 - 111",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 111,
        genotype: "0001101111",
        hdNext: {
            hdLabel: "111 - 112",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 112,
        genotype: "0001110000",
        hdNext: {
            hdLabel: "112 - 113",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 113,
        genotype: "0001110001",
        hdNext: {
            hdLabel: "113 - 114",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 114,
        genotype: "0001110010",
        hdNext: {
            hdLabel: "114 - 115",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 115,
        genotype: "0001110011",
        hdNext: {
            hdLabel: "115 - 116",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 116,
        genotype: "0001110100",
        hdNext: {
            hdLabel: "116 - 117",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 117,
        genotype: "0001110101",
        hdNext: {
            hdLabel: "117 - 118",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 118,
        genotype: "0001110110",
        hdNext: {
            hdLabel: "118 - 119",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 119,
        genotype: "0001110111",
        hdNext: {
            hdLabel: "119 - 120",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 120,
        genotype: "0001111000",
        hdNext: {
            hdLabel: "120 - 121",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 121,
        genotype: "0001111001",
        hdNext: {
            hdLabel: "121 - 122",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 122,
        genotype: "0001111010",
        hdNext: {
            hdLabel: "122 - 123",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 123,
        genotype: "0001111011",
        hdNext: {
            hdLabel: "123 - 124",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 124,
        genotype: "0001111100",
        hdNext: {
            hdLabel: "124 - 125",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 125,
        genotype: "0001111101",
        hdNext: {
            hdLabel: "125 - 126",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 126,
        genotype: "0001111110",
        hdNext: {
            hdLabel: "126 - 127",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 127,
        genotype: "0001111111",
        hdNext: {
            hdLabel: "127 - 128",
            hdList: "0,0,1,1,1,1,1,1,1,1",
            hd: 8
        }
    },
    {
        phenotype: 128,
        genotype: "0010000000",
        hdNext: {
            hdLabel: "128 - 129",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 129,
        genotype: "0010000001",
        hdNext: {
            hdLabel: "129 - 130",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 130,
        genotype: "0010000010",
        hdNext: {
            hdLabel: "130 - 131",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 131,
        genotype: "0010000011",
        hdNext: {
            hdLabel: "131 - 132",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 132,
        genotype: "0010000100",
        hdNext: {
            hdLabel: "132 - 133",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 133,
        genotype: "0010000101",
        hdNext: {
            hdLabel: "133 - 134",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 134,
        genotype: "0010000110",
        hdNext: {
            hdLabel: "134 - 135",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 135,
        genotype: "0010000111",
        hdNext: {
            hdLabel: "135 - 136",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 136,
        genotype: "0010001000",
        hdNext: {
            hdLabel: "136 - 137",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 137,
        genotype: "0010001001",
        hdNext: {
            hdLabel: "137 - 138",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 138,
        genotype: "0010001010",
        hdNext: {
            hdLabel: "138 - 139",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 139,
        genotype: "0010001011",
        hdNext: {
            hdLabel: "139 - 140",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 140,
        genotype: "0010001100",
        hdNext: {
            hdLabel: "140 - 141",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 141,
        genotype: "0010001101",
        hdNext: {
            hdLabel: "141 - 142",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 142,
        genotype: "0010001110",
        hdNext: {
            hdLabel: "142 - 143",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 143,
        genotype: "0010001111",
        hdNext: {
            hdLabel: "143 - 144",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 144,
        genotype: "0010010000",
        hdNext: {
            hdLabel: "144 - 145",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 145,
        genotype: "0010010001",
        hdNext: {
            hdLabel: "145 - 146",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 146,
        genotype: "0010010010",
        hdNext: {
            hdLabel: "146 - 147",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 147,
        genotype: "0010010011",
        hdNext: {
            hdLabel: "147 - 148",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 148,
        genotype: "0010010100",
        hdNext: {
            hdLabel: "148 - 149",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 149,
        genotype: "0010010101",
        hdNext: {
            hdLabel: "149 - 150",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 150,
        genotype: "0010010110",
        hdNext: {
            hdLabel: "150 - 151",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 151,
        genotype: "0010010111",
        hdNext: {
            hdLabel: "151 - 152",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 152,
        genotype: "0010011000",
        hdNext: {
            hdLabel: "152 - 153",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 153,
        genotype: "0010011001",
        hdNext: {
            hdLabel: "153 - 154",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 154,
        genotype: "0010011010",
        hdNext: {
            hdLabel: "154 - 155",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 155,
        genotype: "0010011011",
        hdNext: {
            hdLabel: "155 - 156",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 156,
        genotype: "0010011100",
        hdNext: {
            hdLabel: "156 - 157",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 157,
        genotype: "0010011101",
        hdNext: {
            hdLabel: "157 - 158",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 158,
        genotype: "0010011110",
        hdNext: {
            hdLabel: "158 - 159",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 159,
        genotype: "0010011111",
        hdNext: {
            hdLabel: "159 - 160",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 160,
        genotype: "0010100000",
        hdNext: {
            hdLabel: "160 - 161",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 161,
        genotype: "0010100001",
        hdNext: {
            hdLabel: "161 - 162",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 162,
        genotype: "0010100010",
        hdNext: {
            hdLabel: "162 - 163",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 163,
        genotype: "0010100011",
        hdNext: {
            hdLabel: "163 - 164",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 164,
        genotype: "0010100100",
        hdNext: {
            hdLabel: "164 - 165",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 165,
        genotype: "0010100101",
        hdNext: {
            hdLabel: "165 - 166",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 166,
        genotype: "0010100110",
        hdNext: {
            hdLabel: "166 - 167",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 167,
        genotype: "0010100111",
        hdNext: {
            hdLabel: "167 - 168",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 168,
        genotype: "0010101000",
        hdNext: {
            hdLabel: "168 - 169",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 169,
        genotype: "0010101001",
        hdNext: {
            hdLabel: "169 - 170",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 170,
        genotype: "0010101010",
        hdNext: {
            hdLabel: "170 - 171",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 171,
        genotype: "0010101011",
        hdNext: {
            hdLabel: "171 - 172",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 172,
        genotype: "0010101100",
        hdNext: {
            hdLabel: "172 - 173",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 173,
        genotype: "0010101101",
        hdNext: {
            hdLabel: "173 - 174",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 174,
        genotype: "0010101110",
        hdNext: {
            hdLabel: "174 - 175",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 175,
        genotype: "0010101111",
        hdNext: {
            hdLabel: "175 - 176",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 176,
        genotype: "0010110000",
        hdNext: {
            hdLabel: "176 - 177",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 177,
        genotype: "0010110001",
        hdNext: {
            hdLabel: "177 - 178",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 178,
        genotype: "0010110010",
        hdNext: {
            hdLabel: "178 - 179",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 179,
        genotype: "0010110011",
        hdNext: {
            hdLabel: "179 - 180",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 180,
        genotype: "0010110100",
        hdNext: {
            hdLabel: "180 - 181",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 181,
        genotype: "0010110101",
        hdNext: {
            hdLabel: "181 - 182",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 182,
        genotype: "0010110110",
        hdNext: {
            hdLabel: "182 - 183",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 183,
        genotype: "0010110111",
        hdNext: {
            hdLabel: "183 - 184",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 184,
        genotype: "0010111000",
        hdNext: {
            hdLabel: "184 - 185",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 185,
        genotype: "0010111001",
        hdNext: {
            hdLabel: "185 - 186",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 186,
        genotype: "0010111010",
        hdNext: {
            hdLabel: "186 - 187",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 187,
        genotype: "0010111011",
        hdNext: {
            hdLabel: "187 - 188",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 188,
        genotype: "0010111100",
        hdNext: {
            hdLabel: "188 - 189",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 189,
        genotype: "0010111101",
        hdNext: {
            hdLabel: "189 - 190",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 190,
        genotype: "0010111110",
        hdNext: {
            hdLabel: "190 - 191",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 191,
        genotype: "0010111111",
        hdNext: {
            hdLabel: "191 - 192",
            hdList: "0,0,0,1,1,1,1,1,1,1",
            hd: 7
        }
    },
    {
        phenotype: 192,
        genotype: "0011000000",
        hdNext: {
            hdLabel: "192 - 193",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 193,
        genotype: "0011000001",
        hdNext: {
            hdLabel: "193 - 194",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 194,
        genotype: "0011000010",
        hdNext: {
            hdLabel: "194 - 195",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 195,
        genotype: "0011000011",
        hdNext: {
            hdLabel: "195 - 196",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 196,
        genotype: "0011000100",
        hdNext: {
            hdLabel: "196 - 197",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 197,
        genotype: "0011000101",
        hdNext: {
            hdLabel: "197 - 198",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 198,
        genotype: "0011000110",
        hdNext: {
            hdLabel: "198 - 199",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 199,
        genotype: "0011000111",
        hdNext: {
            hdLabel: "199 - 200",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 200,
        genotype: "0011001000",
        hdNext: {
            hdLabel: "200 - 201",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 201,
        genotype: "0011001001",
        hdNext: {
            hdLabel: "201 - 202",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 202,
        genotype: "0011001010",
        hdNext: {
            hdLabel: "202 - 203",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 203,
        genotype: "0011001011",
        hdNext: {
            hdLabel: "203 - 204",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 204,
        genotype: "0011001100",
        hdNext: {
            hdLabel: "204 - 205",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 205,
        genotype: "0011001101",
        hdNext: {
            hdLabel: "205 - 206",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 206,
        genotype: "0011001110",
        hdNext: {
            hdLabel: "206 - 207",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 207,
        genotype: "0011001111",
        hdNext: {
            hdLabel: "207 - 208",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 208,
        genotype: "0011010000",
        hdNext: {
            hdLabel: "208 - 209",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 209,
        genotype: "0011010001",
        hdNext: {
            hdLabel: "209 - 210",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 210,
        genotype: "0011010010",
        hdNext: {
            hdLabel: "210 - 211",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 211,
        genotype: "0011010011",
        hdNext: {
            hdLabel: "211 - 212",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 212,
        genotype: "0011010100",
        hdNext: {
            hdLabel: "212 - 213",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 213,
        genotype: "0011010101",
        hdNext: {
            hdLabel: "213 - 214",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 214,
        genotype: "0011010110",
        hdNext: {
            hdLabel: "214 - 215",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 215,
        genotype: "0011010111",
        hdNext: {
            hdLabel: "215 - 216",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 216,
        genotype: "0011011000",
        hdNext: {
            hdLabel: "216 - 217",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 217,
        genotype: "0011011001",
        hdNext: {
            hdLabel: "217 - 218",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 218,
        genotype: "0011011010",
        hdNext: {
            hdLabel: "218 - 219",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 219,
        genotype: "0011011011",
        hdNext: {
            hdLabel: "219 - 220",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 220,
        genotype: "0011011100",
        hdNext: {
            hdLabel: "220 - 221",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 221,
        genotype: "0011011101",
        hdNext: {
            hdLabel: "221 - 222",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 222,
        genotype: "0011011110",
        hdNext: {
            hdLabel: "222 - 223",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 223,
        genotype: "0011011111",
        hdNext: {
            hdLabel: "223 - 224",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 224,
        genotype: "0011100000",
        hdNext: {
            hdLabel: "224 - 225",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 225,
        genotype: "0011100001",
        hdNext: {
            hdLabel: "225 - 226",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 226,
        genotype: "0011100010",
        hdNext: {
            hdLabel: "226 - 227",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 227,
        genotype: "0011100011",
        hdNext: {
            hdLabel: "227 - 228",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 228,
        genotype: "0011100100",
        hdNext: {
            hdLabel: "228 - 229",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 229,
        genotype: "0011100101",
        hdNext: {
            hdLabel: "229 - 230",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 230,
        genotype: "0011100110",
        hdNext: {
            hdLabel: "230 - 231",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 231,
        genotype: "0011100111",
        hdNext: {
            hdLabel: "231 - 232",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 232,
        genotype: "0011101000",
        hdNext: {
            hdLabel: "232 - 233",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 233,
        genotype: "0011101001",
        hdNext: {
            hdLabel: "233 - 234",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 234,
        genotype: "0011101010",
        hdNext: {
            hdLabel: "234 - 235",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 235,
        genotype: "0011101011",
        hdNext: {
            hdLabel: "235 - 236",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 236,
        genotype: "0011101100",
        hdNext: {
            hdLabel: "236 - 237",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 237,
        genotype: "0011101101",
        hdNext: {
            hdLabel: "237 - 238",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 238,
        genotype: "0011101110",
        hdNext: {
            hdLabel: "238 - 239",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 239,
        genotype: "0011101111",
        hdNext: {
            hdLabel: "239 - 240",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 240,
        genotype: "0011110000",
        hdNext: {
            hdLabel: "240 - 241",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 241,
        genotype: "0011110001",
        hdNext: {
            hdLabel: "241 - 242",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 242,
        genotype: "0011110010",
        hdNext: {
            hdLabel: "242 - 243",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 243,
        genotype: "0011110011",
        hdNext: {
            hdLabel: "243 - 244",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 244,
        genotype: "0011110100",
        hdNext: {
            hdLabel: "244 - 245",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 245,
        genotype: "0011110101",
        hdNext: {
            hdLabel: "245 - 246",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 246,
        genotype: "0011110110",
        hdNext: {
            hdLabel: "246 - 247",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 247,
        genotype: "0011110111",
        hdNext: {
            hdLabel: "247 - 248",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 248,
        genotype: "0011111000",
        hdNext: {
            hdLabel: "248 - 249",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 249,
        genotype: "0011111001",
        hdNext: {
            hdLabel: "249 - 250",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 250,
        genotype: "0011111010",
        hdNext: {
            hdLabel: "250 - 251",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 251,
        genotype: "0011111011",
        hdNext: {
            hdLabel: "251 - 252",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 252,
        genotype: "0011111100",
        hdNext: {
            hdLabel: "252 - 253",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 253,
        genotype: "0011111101",
        hdNext: {
            hdLabel: "253 - 254",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 254,
        genotype: "0011111110",
        hdNext: {
            hdLabel: "254 - 255",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 255,
        genotype: "0011111111",
        hdNext: {
            hdLabel: "255 - 256",
            hdList: "0,1,1,1,1,1,1,1,1,1",
            hd: 9
        }
    },
    {
        phenotype: 256,
        genotype: "0100000000",
        hdNext: {
            hdLabel: "256 - 257",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 257,
        genotype: "0100000001",
        hdNext: {
            hdLabel: "257 - 258",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 258,
        genotype: "0100000010",
        hdNext: {
            hdLabel: "258 - 259",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 259,
        genotype: "0100000011",
        hdNext: {
            hdLabel: "259 - 260",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 260,
        genotype: "0100000100",
        hdNext: {
            hdLabel: "260 - 261",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 261,
        genotype: "0100000101",
        hdNext: {
            hdLabel: "261 - 262",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 262,
        genotype: "0100000110",
        hdNext: {
            hdLabel: "262 - 263",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 263,
        genotype: "0100000111",
        hdNext: {
            hdLabel: "263 - 264",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 264,
        genotype: "0100001000",
        hdNext: {
            hdLabel: "264 - 265",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 265,
        genotype: "0100001001",
        hdNext: {
            hdLabel: "265 - 266",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 266,
        genotype: "0100001010",
        hdNext: {
            hdLabel: "266 - 267",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 267,
        genotype: "0100001011",
        hdNext: {
            hdLabel: "267 - 268",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 268,
        genotype: "0100001100",
        hdNext: {
            hdLabel: "268 - 269",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 269,
        genotype: "0100001101",
        hdNext: {
            hdLabel: "269 - 270",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 270,
        genotype: "0100001110",
        hdNext: {
            hdLabel: "270 - 271",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 271,
        genotype: "0100001111",
        hdNext: {
            hdLabel: "271 - 272",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 272,
        genotype: "0100010000",
        hdNext: {
            hdLabel: "272 - 273",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 273,
        genotype: "0100010001",
        hdNext: {
            hdLabel: "273 - 274",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 274,
        genotype: "0100010010",
        hdNext: {
            hdLabel: "274 - 275",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 275,
        genotype: "0100010011",
        hdNext: {
            hdLabel: "275 - 276",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 276,
        genotype: "0100010100",
        hdNext: {
            hdLabel: "276 - 277",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 277,
        genotype: "0100010101",
        hdNext: {
            hdLabel: "277 - 278",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 278,
        genotype: "0100010110",
        hdNext: {
            hdLabel: "278 - 279",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 279,
        genotype: "0100010111",
        hdNext: {
            hdLabel: "279 - 280",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 280,
        genotype: "0100011000",
        hdNext: {
            hdLabel: "280 - 281",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 281,
        genotype: "0100011001",
        hdNext: {
            hdLabel: "281 - 282",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 282,
        genotype: "0100011010",
        hdNext: {
            hdLabel: "282 - 283",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 283,
        genotype: "0100011011",
        hdNext: {
            hdLabel: "283 - 284",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 284,
        genotype: "0100011100",
        hdNext: {
            hdLabel: "284 - 285",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 285,
        genotype: "0100011101",
        hdNext: {
            hdLabel: "285 - 286",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 286,
        genotype: "0100011110",
        hdNext: {
            hdLabel: "286 - 287",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 287,
        genotype: "0100011111",
        hdNext: {
            hdLabel: "287 - 288",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 288,
        genotype: "0100100000",
        hdNext: {
            hdLabel: "288 - 289",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 289,
        genotype: "0100100001",
        hdNext: {
            hdLabel: "289 - 290",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 290,
        genotype: "0100100010",
        hdNext: {
            hdLabel: "290 - 291",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 291,
        genotype: "0100100011",
        hdNext: {
            hdLabel: "291 - 292",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 292,
        genotype: "0100100100",
        hdNext: {
            hdLabel: "292 - 293",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 293,
        genotype: "0100100101",
        hdNext: {
            hdLabel: "293 - 294",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 294,
        genotype: "0100100110",
        hdNext: {
            hdLabel: "294 - 295",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 295,
        genotype: "0100100111",
        hdNext: {
            hdLabel: "295 - 296",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 296,
        genotype: "0100101000",
        hdNext: {
            hdLabel: "296 - 297",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 297,
        genotype: "0100101001",
        hdNext: {
            hdLabel: "297 - 298",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 298,
        genotype: "0100101010",
        hdNext: {
            hdLabel: "298 - 299",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 299,
        genotype: "0100101011",
        hdNext: {
            hdLabel: "299 - 300",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 300,
        genotype: "0100101100",
        hdNext: {
            hdLabel: "300 - 301",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 301,
        genotype: "0100101101",
        hdNext: {
            hdLabel: "301 - 302",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 302,
        genotype: "0100101110",
        hdNext: {
            hdLabel: "302 - 303",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 303,
        genotype: "0100101111",
        hdNext: {
            hdLabel: "303 - 304",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 304,
        genotype: "0100110000",
        hdNext: {
            hdLabel: "304 - 305",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 305,
        genotype: "0100110001",
        hdNext: {
            hdLabel: "305 - 306",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 306,
        genotype: "0100110010",
        hdNext: {
            hdLabel: "306 - 307",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 307,
        genotype: "0100110011",
        hdNext: {
            hdLabel: "307 - 308",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 308,
        genotype: "0100110100",
        hdNext: {
            hdLabel: "308 - 309",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 309,
        genotype: "0100110101",
        hdNext: {
            hdLabel: "309 - 310",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 310,
        genotype: "0100110110",
        hdNext: {
            hdLabel: "310 - 311",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 311,
        genotype: "0100110111",
        hdNext: {
            hdLabel: "311 - 312",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 312,
        genotype: "0100111000",
        hdNext: {
            hdLabel: "312 - 313",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 313,
        genotype: "0100111001",
        hdNext: {
            hdLabel: "313 - 314",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 314,
        genotype: "0100111010",
        hdNext: {
            hdLabel: "314 - 315",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 315,
        genotype: "0100111011",
        hdNext: {
            hdLabel: "315 - 316",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 316,
        genotype: "0100111100",
        hdNext: {
            hdLabel: "316 - 317",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 317,
        genotype: "0100111101",
        hdNext: {
            hdLabel: "317 - 318",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 318,
        genotype: "0100111110",
        hdNext: {
            hdLabel: "318 - 319",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 319,
        genotype: "0100111111",
        hdNext: {
            hdLabel: "319 - 320",
            hdList: "0,0,0,1,1,1,1,1,1,1",
            hd: 7
        }
    },
    {
        phenotype: 320,
        genotype: "0101000000",
        hdNext: {
            hdLabel: "320 - 321",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 321,
        genotype: "0101000001",
        hdNext: {
            hdLabel: "321 - 322",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 322,
        genotype: "0101000010",
        hdNext: {
            hdLabel: "322 - 323",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 323,
        genotype: "0101000011",
        hdNext: {
            hdLabel: "323 - 324",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 324,
        genotype: "0101000100",
        hdNext: {
            hdLabel: "324 - 325",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 325,
        genotype: "0101000101",
        hdNext: {
            hdLabel: "325 - 326",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 326,
        genotype: "0101000110",
        hdNext: {
            hdLabel: "326 - 327",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 327,
        genotype: "0101000111",
        hdNext: {
            hdLabel: "327 - 328",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 328,
        genotype: "0101001000",
        hdNext: {
            hdLabel: "328 - 329",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 329,
        genotype: "0101001001",
        hdNext: {
            hdLabel: "329 - 330",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 330,
        genotype: "0101001010",
        hdNext: {
            hdLabel: "330 - 331",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 331,
        genotype: "0101001011",
        hdNext: {
            hdLabel: "331 - 332",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 332,
        genotype: "0101001100",
        hdNext: {
            hdLabel: "332 - 333",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 333,
        genotype: "0101001101",
        hdNext: {
            hdLabel: "333 - 334",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 334,
        genotype: "0101001110",
        hdNext: {
            hdLabel: "334 - 335",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 335,
        genotype: "0101001111",
        hdNext: {
            hdLabel: "335 - 336",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 336,
        genotype: "0101010000",
        hdNext: {
            hdLabel: "336 - 337",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 337,
        genotype: "0101010001",
        hdNext: {
            hdLabel: "337 - 338",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 338,
        genotype: "0101010010",
        hdNext: {
            hdLabel: "338 - 339",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 339,
        genotype: "0101010011",
        hdNext: {
            hdLabel: "339 - 340",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 340,
        genotype: "0101010100",
        hdNext: {
            hdLabel: "340 - 341",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 341,
        genotype: "0101010101",
        hdNext: {
            hdLabel: "341 - 342",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 342,
        genotype: "0101010110",
        hdNext: {
            hdLabel: "342 - 343",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 343,
        genotype: "0101010111",
        hdNext: {
            hdLabel: "343 - 344",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 344,
        genotype: "0101011000",
        hdNext: {
            hdLabel: "344 - 345",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 345,
        genotype: "0101011001",
        hdNext: {
            hdLabel: "345 - 346",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 346,
        genotype: "0101011010",
        hdNext: {
            hdLabel: "346 - 347",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 347,
        genotype: "0101011011",
        hdNext: {
            hdLabel: "347 - 348",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 348,
        genotype: "0101011100",
        hdNext: {
            hdLabel: "348 - 349",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 349,
        genotype: "0101011101",
        hdNext: {
            hdLabel: "349 - 350",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 350,
        genotype: "0101011110",
        hdNext: {
            hdLabel: "350 - 351",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 351,
        genotype: "0101011111",
        hdNext: {
            hdLabel: "351 - 352",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 352,
        genotype: "0101100000",
        hdNext: {
            hdLabel: "352 - 353",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 353,
        genotype: "0101100001",
        hdNext: {
            hdLabel: "353 - 354",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 354,
        genotype: "0101100010",
        hdNext: {
            hdLabel: "354 - 355",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 355,
        genotype: "0101100011",
        hdNext: {
            hdLabel: "355 - 356",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 356,
        genotype: "0101100100",
        hdNext: {
            hdLabel: "356 - 357",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 357,
        genotype: "0101100101",
        hdNext: {
            hdLabel: "357 - 358",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 358,
        genotype: "0101100110",
        hdNext: {
            hdLabel: "358 - 359",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 359,
        genotype: "0101100111",
        hdNext: {
            hdLabel: "359 - 360",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 360,
        genotype: "0101101000",
        hdNext: {
            hdLabel: "360 - 361",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 361,
        genotype: "0101101001",
        hdNext: {
            hdLabel: "361 - 362",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 362,
        genotype: "0101101010",
        hdNext: {
            hdLabel: "362 - 363",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 363,
        genotype: "0101101011",
        hdNext: {
            hdLabel: "363 - 364",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 364,
        genotype: "0101101100",
        hdNext: {
            hdLabel: "364 - 365",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 365,
        genotype: "0101101101",
        hdNext: {
            hdLabel: "365 - 366",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 366,
        genotype: "0101101110",
        hdNext: {
            hdLabel: "366 - 367",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 367,
        genotype: "0101101111",
        hdNext: {
            hdLabel: "367 - 368",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 368,
        genotype: "0101110000",
        hdNext: {
            hdLabel: "368 - 369",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 369,
        genotype: "0101110001",
        hdNext: {
            hdLabel: "369 - 370",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 370,
        genotype: "0101110010",
        hdNext: {
            hdLabel: "370 - 371",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 371,
        genotype: "0101110011",
        hdNext: {
            hdLabel: "371 - 372",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 372,
        genotype: "0101110100",
        hdNext: {
            hdLabel: "372 - 373",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 373,
        genotype: "0101110101",
        hdNext: {
            hdLabel: "373 - 374",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 374,
        genotype: "0101110110",
        hdNext: {
            hdLabel: "374 - 375",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 375,
        genotype: "0101110111",
        hdNext: {
            hdLabel: "375 - 376",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 376,
        genotype: "0101111000",
        hdNext: {
            hdLabel: "376 - 377",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 377,
        genotype: "0101111001",
        hdNext: {
            hdLabel: "377 - 378",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 378,
        genotype: "0101111010",
        hdNext: {
            hdLabel: "378 - 379",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 379,
        genotype: "0101111011",
        hdNext: {
            hdLabel: "379 - 380",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 380,
        genotype: "0101111100",
        hdNext: {
            hdLabel: "380 - 381",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 381,
        genotype: "0101111101",
        hdNext: {
            hdLabel: "381 - 382",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 382,
        genotype: "0101111110",
        hdNext: {
            hdLabel: "382 - 383",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 383,
        genotype: "0101111111",
        hdNext: {
            hdLabel: "383 - 384",
            hdList: "0,0,1,1,1,1,1,1,1,1",
            hd: 8
        }
    },
    {
        phenotype: 384,
        genotype: "0110000000",
        hdNext: {
            hdLabel: "384 - 385",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 385,
        genotype: "0110000001",
        hdNext: {
            hdLabel: "385 - 386",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 386,
        genotype: "0110000010",
        hdNext: {
            hdLabel: "386 - 387",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 387,
        genotype: "0110000011",
        hdNext: {
            hdLabel: "387 - 388",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 388,
        genotype: "0110000100",
        hdNext: {
            hdLabel: "388 - 389",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 389,
        genotype: "0110000101",
        hdNext: {
            hdLabel: "389 - 390",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 390,
        genotype: "0110000110",
        hdNext: {
            hdLabel: "390 - 391",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 391,
        genotype: "0110000111",
        hdNext: {
            hdLabel: "391 - 392",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 392,
        genotype: "0110001000",
        hdNext: {
            hdLabel: "392 - 393",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 393,
        genotype: "0110001001",
        hdNext: {
            hdLabel: "393 - 394",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 394,
        genotype: "0110001010",
        hdNext: {
            hdLabel: "394 - 395",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 395,
        genotype: "0110001011",
        hdNext: {
            hdLabel: "395 - 396",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 396,
        genotype: "0110001100",
        hdNext: {
            hdLabel: "396 - 397",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 397,
        genotype: "0110001101",
        hdNext: {
            hdLabel: "397 - 398",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 398,
        genotype: "0110001110",
        hdNext: {
            hdLabel: "398 - 399",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 399,
        genotype: "0110001111",
        hdNext: {
            hdLabel: "399 - 400",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 400,
        genotype: "0110010000",
        hdNext: {
            hdLabel: "400 - 401",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 401,
        genotype: "0110010001",
        hdNext: {
            hdLabel: "401 - 402",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 402,
        genotype: "0110010010",
        hdNext: {
            hdLabel: "402 - 403",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 403,
        genotype: "0110010011",
        hdNext: {
            hdLabel: "403 - 404",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 404,
        genotype: "0110010100",
        hdNext: {
            hdLabel: "404 - 405",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 405,
        genotype: "0110010101",
        hdNext: {
            hdLabel: "405 - 406",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 406,
        genotype: "0110010110",
        hdNext: {
            hdLabel: "406 - 407",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 407,
        genotype: "0110010111",
        hdNext: {
            hdLabel: "407 - 408",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 408,
        genotype: "0110011000",
        hdNext: {
            hdLabel: "408 - 409",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 409,
        genotype: "0110011001",
        hdNext: {
            hdLabel: "409 - 410",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 410,
        genotype: "0110011010",
        hdNext: {
            hdLabel: "410 - 411",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 411,
        genotype: "0110011011",
        hdNext: {
            hdLabel: "411 - 412",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 412,
        genotype: "0110011100",
        hdNext: {
            hdLabel: "412 - 413",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 413,
        genotype: "0110011101",
        hdNext: {
            hdLabel: "413 - 414",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 414,
        genotype: "0110011110",
        hdNext: {
            hdLabel: "414 - 415",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 415,
        genotype: "0110011111",
        hdNext: {
            hdLabel: "415 - 416",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 416,
        genotype: "0110100000",
        hdNext: {
            hdLabel: "416 - 417",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 417,
        genotype: "0110100001",
        hdNext: {
            hdLabel: "417 - 418",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 418,
        genotype: "0110100010",
        hdNext: {
            hdLabel: "418 - 419",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 419,
        genotype: "0110100011",
        hdNext: {
            hdLabel: "419 - 420",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 420,
        genotype: "0110100100",
        hdNext: {
            hdLabel: "420 - 421",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 421,
        genotype: "0110100101",
        hdNext: {
            hdLabel: "421 - 422",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 422,
        genotype: "0110100110",
        hdNext: {
            hdLabel: "422 - 423",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 423,
        genotype: "0110100111",
        hdNext: {
            hdLabel: "423 - 424",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 424,
        genotype: "0110101000",
        hdNext: {
            hdLabel: "424 - 425",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 425,
        genotype: "0110101001",
        hdNext: {
            hdLabel: "425 - 426",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 426,
        genotype: "0110101010",
        hdNext: {
            hdLabel: "426 - 427",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 427,
        genotype: "0110101011",
        hdNext: {
            hdLabel: "427 - 428",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 428,
        genotype: "0110101100",
        hdNext: {
            hdLabel: "428 - 429",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 429,
        genotype: "0110101101",
        hdNext: {
            hdLabel: "429 - 430",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 430,
        genotype: "0110101110",
        hdNext: {
            hdLabel: "430 - 431",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 431,
        genotype: "0110101111",
        hdNext: {
            hdLabel: "431 - 432",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 432,
        genotype: "0110110000",
        hdNext: {
            hdLabel: "432 - 433",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 433,
        genotype: "0110110001",
        hdNext: {
            hdLabel: "433 - 434",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 434,
        genotype: "0110110010",
        hdNext: {
            hdLabel: "434 - 435",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 435,
        genotype: "0110110011",
        hdNext: {
            hdLabel: "435 - 436",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 436,
        genotype: "0110110100",
        hdNext: {
            hdLabel: "436 - 437",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 437,
        genotype: "0110110101",
        hdNext: {
            hdLabel: "437 - 438",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 438,
        genotype: "0110110110",
        hdNext: {
            hdLabel: "438 - 439",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 439,
        genotype: "0110110111",
        hdNext: {
            hdLabel: "439 - 440",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 440,
        genotype: "0110111000",
        hdNext: {
            hdLabel: "440 - 441",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 441,
        genotype: "0110111001",
        hdNext: {
            hdLabel: "441 - 442",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 442,
        genotype: "0110111010",
        hdNext: {
            hdLabel: "442 - 443",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 443,
        genotype: "0110111011",
        hdNext: {
            hdLabel: "443 - 444",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 444,
        genotype: "0110111100",
        hdNext: {
            hdLabel: "444 - 445",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 445,
        genotype: "0110111101",
        hdNext: {
            hdLabel: "445 - 446",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 446,
        genotype: "0110111110",
        hdNext: {
            hdLabel: "446 - 447",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 447,
        genotype: "0110111111",
        hdNext: {
            hdLabel: "447 - 448",
            hdList: "0,0,0,1,1,1,1,1,1,1",
            hd: 7
        }
    },
    {
        phenotype: 448,
        genotype: "0111000000",
        hdNext: {
            hdLabel: "448 - 449",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 449,
        genotype: "0111000001",
        hdNext: {
            hdLabel: "449 - 450",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 450,
        genotype: "0111000010",
        hdNext: {
            hdLabel: "450 - 451",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 451,
        genotype: "0111000011",
        hdNext: {
            hdLabel: "451 - 452",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 452,
        genotype: "0111000100",
        hdNext: {
            hdLabel: "452 - 453",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 453,
        genotype: "0111000101",
        hdNext: {
            hdLabel: "453 - 454",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 454,
        genotype: "0111000110",
        hdNext: {
            hdLabel: "454 - 455",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 455,
        genotype: "0111000111",
        hdNext: {
            hdLabel: "455 - 456",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 456,
        genotype: "0111001000",
        hdNext: {
            hdLabel: "456 - 457",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 457,
        genotype: "0111001001",
        hdNext: {
            hdLabel: "457 - 458",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 458,
        genotype: "0111001010",
        hdNext: {
            hdLabel: "458 - 459",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 459,
        genotype: "0111001011",
        hdNext: {
            hdLabel: "459 - 460",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 460,
        genotype: "0111001100",
        hdNext: {
            hdLabel: "460 - 461",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 461,
        genotype: "0111001101",
        hdNext: {
            hdLabel: "461 - 462",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 462,
        genotype: "0111001110",
        hdNext: {
            hdLabel: "462 - 463",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 463,
        genotype: "0111001111",
        hdNext: {
            hdLabel: "463 - 464",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 464,
        genotype: "0111010000",
        hdNext: {
            hdLabel: "464 - 465",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 465,
        genotype: "0111010001",
        hdNext: {
            hdLabel: "465 - 466",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 466,
        genotype: "0111010010",
        hdNext: {
            hdLabel: "466 - 467",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 467,
        genotype: "0111010011",
        hdNext: {
            hdLabel: "467 - 468",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 468,
        genotype: "0111010100",
        hdNext: {
            hdLabel: "468 - 469",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 469,
        genotype: "0111010101",
        hdNext: {
            hdLabel: "469 - 470",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 470,
        genotype: "0111010110",
        hdNext: {
            hdLabel: "470 - 471",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 471,
        genotype: "0111010111",
        hdNext: {
            hdLabel: "471 - 472",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 472,
        genotype: "0111011000",
        hdNext: {
            hdLabel: "472 - 473",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 473,
        genotype: "0111011001",
        hdNext: {
            hdLabel: "473 - 474",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 474,
        genotype: "0111011010",
        hdNext: {
            hdLabel: "474 - 475",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 475,
        genotype: "0111011011",
        hdNext: {
            hdLabel: "475 - 476",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 476,
        genotype: "0111011100",
        hdNext: {
            hdLabel: "476 - 477",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 477,
        genotype: "0111011101",
        hdNext: {
            hdLabel: "477 - 478",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 478,
        genotype: "0111011110",
        hdNext: {
            hdLabel: "478 - 479",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 479,
        genotype: "0111011111",
        hdNext: {
            hdLabel: "479 - 480",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 480,
        genotype: "0111100000",
        hdNext: {
            hdLabel: "480 - 481",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 481,
        genotype: "0111100001",
        hdNext: {
            hdLabel: "481 - 482",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 482,
        genotype: "0111100010",
        hdNext: {
            hdLabel: "482 - 483",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 483,
        genotype: "0111100011",
        hdNext: {
            hdLabel: "483 - 484",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 484,
        genotype: "0111100100",
        hdNext: {
            hdLabel: "484 - 485",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 485,
        genotype: "0111100101",
        hdNext: {
            hdLabel: "485 - 486",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 486,
        genotype: "0111100110",
        hdNext: {
            hdLabel: "486 - 487",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 487,
        genotype: "0111100111",
        hdNext: {
            hdLabel: "487 - 488",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 488,
        genotype: "0111101000",
        hdNext: {
            hdLabel: "488 - 489",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 489,
        genotype: "0111101001",
        hdNext: {
            hdLabel: "489 - 490",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 490,
        genotype: "0111101010",
        hdNext: {
            hdLabel: "490 - 491",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 491,
        genotype: "0111101011",
        hdNext: {
            hdLabel: "491 - 492",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 492,
        genotype: "0111101100",
        hdNext: {
            hdLabel: "492 - 493",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 493,
        genotype: "0111101101",
        hdNext: {
            hdLabel: "493 - 494",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 494,
        genotype: "0111101110",
        hdNext: {
            hdLabel: "494 - 495",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 495,
        genotype: "0111101111",
        hdNext: {
            hdLabel: "495 - 496",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 496,
        genotype: "0111110000",
        hdNext: {
            hdLabel: "496 - 497",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 497,
        genotype: "0111110001",
        hdNext: {
            hdLabel: "497 - 498",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 498,
        genotype: "0111110010",
        hdNext: {
            hdLabel: "498 - 499",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 499,
        genotype: "0111110011",
        hdNext: {
            hdLabel: "499 - 500",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 500,
        genotype: "0111110100",
        hdNext: {
            hdLabel: "500 - 501",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 501,
        genotype: "0111110101",
        hdNext: {
            hdLabel: "501 - 502",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 502,
        genotype: "0111110110",
        hdNext: {
            hdLabel: "502 - 503",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 503,
        genotype: "0111110111",
        hdNext: {
            hdLabel: "503 - 504",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 504,
        genotype: "0111111000",
        hdNext: {
            hdLabel: "504 - 505",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 505,
        genotype: "0111111001",
        hdNext: {
            hdLabel: "505 - 506",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 506,
        genotype: "0111111010",
        hdNext: {
            hdLabel: "506 - 507",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 507,
        genotype: "0111111011",
        hdNext: {
            hdLabel: "507 - 508",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 508,
        genotype: "0111111100",
        hdNext: {
            hdLabel: "508 - 509",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 509,
        genotype: "0111111101",
        hdNext: {
            hdLabel: "509 - 510",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 510,
        genotype: "0111111110",
        hdNext: {
            hdLabel: "510 - 511",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 511,
        genotype: "0111111111",
        hdNext: {
            hdLabel: "511 - 512",
            hdList: "1,1,1,1,1,1,1,1,1,1",
            hd: 10
        }
    },
    {
        phenotype: 512,
        genotype: "1000000000",
        hdNext: {
            hdLabel: "512 - 513",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 513,
        genotype: "1000000001",
        hdNext: {
            hdLabel: "513 - 514",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 514,
        genotype: "1000000010",
        hdNext: {
            hdLabel: "514 - 515",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 515,
        genotype: "1000000011",
        hdNext: {
            hdLabel: "515 - 516",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 516,
        genotype: "1000000100",
        hdNext: {
            hdLabel: "516 - 517",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 517,
        genotype: "1000000101",
        hdNext: {
            hdLabel: "517 - 518",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 518,
        genotype: "1000000110",
        hdNext: {
            hdLabel: "518 - 519",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 519,
        genotype: "1000000111",
        hdNext: {
            hdLabel: "519 - 520",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 520,
        genotype: "1000001000",
        hdNext: {
            hdLabel: "520 - 521",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 521,
        genotype: "1000001001",
        hdNext: {
            hdLabel: "521 - 522",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 522,
        genotype: "1000001010",
        hdNext: {
            hdLabel: "522 - 523",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 523,
        genotype: "1000001011",
        hdNext: {
            hdLabel: "523 - 524",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 524,
        genotype: "1000001100",
        hdNext: {
            hdLabel: "524 - 525",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 525,
        genotype: "1000001101",
        hdNext: {
            hdLabel: "525 - 526",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 526,
        genotype: "1000001110",
        hdNext: {
            hdLabel: "526 - 527",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 527,
        genotype: "1000001111",
        hdNext: {
            hdLabel: "527 - 528",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 528,
        genotype: "1000010000",
        hdNext: {
            hdLabel: "528 - 529",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 529,
        genotype: "1000010001",
        hdNext: {
            hdLabel: "529 - 530",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 530,
        genotype: "1000010010",
        hdNext: {
            hdLabel: "530 - 531",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 531,
        genotype: "1000010011",
        hdNext: {
            hdLabel: "531 - 532",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 532,
        genotype: "1000010100",
        hdNext: {
            hdLabel: "532 - 533",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 533,
        genotype: "1000010101",
        hdNext: {
            hdLabel: "533 - 534",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 534,
        genotype: "1000010110",
        hdNext: {
            hdLabel: "534 - 535",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 535,
        genotype: "1000010111",
        hdNext: {
            hdLabel: "535 - 536",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 536,
        genotype: "1000011000",
        hdNext: {
            hdLabel: "536 - 537",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 537,
        genotype: "1000011001",
        hdNext: {
            hdLabel: "537 - 538",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 538,
        genotype: "1000011010",
        hdNext: {
            hdLabel: "538 - 539",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 539,
        genotype: "1000011011",
        hdNext: {
            hdLabel: "539 - 540",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 540,
        genotype: "1000011100",
        hdNext: {
            hdLabel: "540 - 541",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 541,
        genotype: "1000011101",
        hdNext: {
            hdLabel: "541 - 542",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 542,
        genotype: "1000011110",
        hdNext: {
            hdLabel: "542 - 543",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 543,
        genotype: "1000011111",
        hdNext: {
            hdLabel: "543 - 544",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 544,
        genotype: "1000100000",
        hdNext: {
            hdLabel: "544 - 545",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 545,
        genotype: "1000100001",
        hdNext: {
            hdLabel: "545 - 546",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 546,
        genotype: "1000100010",
        hdNext: {
            hdLabel: "546 - 547",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 547,
        genotype: "1000100011",
        hdNext: {
            hdLabel: "547 - 548",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 548,
        genotype: "1000100100",
        hdNext: {
            hdLabel: "548 - 549",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 549,
        genotype: "1000100101",
        hdNext: {
            hdLabel: "549 - 550",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 550,
        genotype: "1000100110",
        hdNext: {
            hdLabel: "550 - 551",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 551,
        genotype: "1000100111",
        hdNext: {
            hdLabel: "551 - 552",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 552,
        genotype: "1000101000",
        hdNext: {
            hdLabel: "552 - 553",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 553,
        genotype: "1000101001",
        hdNext: {
            hdLabel: "553 - 554",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 554,
        genotype: "1000101010",
        hdNext: {
            hdLabel: "554 - 555",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 555,
        genotype: "1000101011",
        hdNext: {
            hdLabel: "555 - 556",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 556,
        genotype: "1000101100",
        hdNext: {
            hdLabel: "556 - 557",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 557,
        genotype: "1000101101",
        hdNext: {
            hdLabel: "557 - 558",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 558,
        genotype: "1000101110",
        hdNext: {
            hdLabel: "558 - 559",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 559,
        genotype: "1000101111",
        hdNext: {
            hdLabel: "559 - 560",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 560,
        genotype: "1000110000",
        hdNext: {
            hdLabel: "560 - 561",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 561,
        genotype: "1000110001",
        hdNext: {
            hdLabel: "561 - 562",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 562,
        genotype: "1000110010",
        hdNext: {
            hdLabel: "562 - 563",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 563,
        genotype: "1000110011",
        hdNext: {
            hdLabel: "563 - 564",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 564,
        genotype: "1000110100",
        hdNext: {
            hdLabel: "564 - 565",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 565,
        genotype: "1000110101",
        hdNext: {
            hdLabel: "565 - 566",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 566,
        genotype: "1000110110",
        hdNext: {
            hdLabel: "566 - 567",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 567,
        genotype: "1000110111",
        hdNext: {
            hdLabel: "567 - 568",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 568,
        genotype: "1000111000",
        hdNext: {
            hdLabel: "568 - 569",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 569,
        genotype: "1000111001",
        hdNext: {
            hdLabel: "569 - 570",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 570,
        genotype: "1000111010",
        hdNext: {
            hdLabel: "570 - 571",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 571,
        genotype: "1000111011",
        hdNext: {
            hdLabel: "571 - 572",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 572,
        genotype: "1000111100",
        hdNext: {
            hdLabel: "572 - 573",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 573,
        genotype: "1000111101",
        hdNext: {
            hdLabel: "573 - 574",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 574,
        genotype: "1000111110",
        hdNext: {
            hdLabel: "574 - 575",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 575,
        genotype: "1000111111",
        hdNext: {
            hdLabel: "575 - 576",
            hdList: "0,0,0,1,1,1,1,1,1,1",
            hd: 7
        }
    },
    {
        phenotype: 576,
        genotype: "1001000000",
        hdNext: {
            hdLabel: "576 - 577",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 577,
        genotype: "1001000001",
        hdNext: {
            hdLabel: "577 - 578",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 578,
        genotype: "1001000010",
        hdNext: {
            hdLabel: "578 - 579",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 579,
        genotype: "1001000011",
        hdNext: {
            hdLabel: "579 - 580",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 580,
        genotype: "1001000100",
        hdNext: {
            hdLabel: "580 - 581",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 581,
        genotype: "1001000101",
        hdNext: {
            hdLabel: "581 - 582",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 582,
        genotype: "1001000110",
        hdNext: {
            hdLabel: "582 - 583",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 583,
        genotype: "1001000111",
        hdNext: {
            hdLabel: "583 - 584",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 584,
        genotype: "1001001000",
        hdNext: {
            hdLabel: "584 - 585",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 585,
        genotype: "1001001001",
        hdNext: {
            hdLabel: "585 - 586",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 586,
        genotype: "1001001010",
        hdNext: {
            hdLabel: "586 - 587",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 587,
        genotype: "1001001011",
        hdNext: {
            hdLabel: "587 - 588",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 588,
        genotype: "1001001100",
        hdNext: {
            hdLabel: "588 - 589",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 589,
        genotype: "1001001101",
        hdNext: {
            hdLabel: "589 - 590",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 590,
        genotype: "1001001110",
        hdNext: {
            hdLabel: "590 - 591",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 591,
        genotype: "1001001111",
        hdNext: {
            hdLabel: "591 - 592",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 592,
        genotype: "1001010000",
        hdNext: {
            hdLabel: "592 - 593",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 593,
        genotype: "1001010001",
        hdNext: {
            hdLabel: "593 - 594",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 594,
        genotype: "1001010010",
        hdNext: {
            hdLabel: "594 - 595",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 595,
        genotype: "1001010011",
        hdNext: {
            hdLabel: "595 - 596",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 596,
        genotype: "1001010100",
        hdNext: {
            hdLabel: "596 - 597",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 597,
        genotype: "1001010101",
        hdNext: {
            hdLabel: "597 - 598",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 598,
        genotype: "1001010110",
        hdNext: {
            hdLabel: "598 - 599",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 599,
        genotype: "1001010111",
        hdNext: {
            hdLabel: "599 - 600",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 600,
        genotype: "1001011000",
        hdNext: {
            hdLabel: "600 - 601",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 601,
        genotype: "1001011001",
        hdNext: {
            hdLabel: "601 - 602",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 602,
        genotype: "1001011010",
        hdNext: {
            hdLabel: "602 - 603",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 603,
        genotype: "1001011011",
        hdNext: {
            hdLabel: "603 - 604",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 604,
        genotype: "1001011100",
        hdNext: {
            hdLabel: "604 - 605",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 605,
        genotype: "1001011101",
        hdNext: {
            hdLabel: "605 - 606",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 606,
        genotype: "1001011110",
        hdNext: {
            hdLabel: "606 - 607",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 607,
        genotype: "1001011111",
        hdNext: {
            hdLabel: "607 - 608",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 608,
        genotype: "1001100000",
        hdNext: {
            hdLabel: "608 - 609",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 609,
        genotype: "1001100001",
        hdNext: {
            hdLabel: "609 - 610",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 610,
        genotype: "1001100010",
        hdNext: {
            hdLabel: "610 - 611",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 611,
        genotype: "1001100011",
        hdNext: {
            hdLabel: "611 - 612",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 612,
        genotype: "1001100100",
        hdNext: {
            hdLabel: "612 - 613",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 613,
        genotype: "1001100101",
        hdNext: {
            hdLabel: "613 - 614",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 614,
        genotype: "1001100110",
        hdNext: {
            hdLabel: "614 - 615",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 615,
        genotype: "1001100111",
        hdNext: {
            hdLabel: "615 - 616",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 616,
        genotype: "1001101000",
        hdNext: {
            hdLabel: "616 - 617",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 617,
        genotype: "1001101001",
        hdNext: {
            hdLabel: "617 - 618",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 618,
        genotype: "1001101010",
        hdNext: {
            hdLabel: "618 - 619",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 619,
        genotype: "1001101011",
        hdNext: {
            hdLabel: "619 - 620",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 620,
        genotype: "1001101100",
        hdNext: {
            hdLabel: "620 - 621",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 621,
        genotype: "1001101101",
        hdNext: {
            hdLabel: "621 - 622",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 622,
        genotype: "1001101110",
        hdNext: {
            hdLabel: "622 - 623",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 623,
        genotype: "1001101111",
        hdNext: {
            hdLabel: "623 - 624",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 624,
        genotype: "1001110000",
        hdNext: {
            hdLabel: "624 - 625",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 625,
        genotype: "1001110001",
        hdNext: {
            hdLabel: "625 - 626",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 626,
        genotype: "1001110010",
        hdNext: {
            hdLabel: "626 - 627",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 627,
        genotype: "1001110011",
        hdNext: {
            hdLabel: "627 - 628",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 628,
        genotype: "1001110100",
        hdNext: {
            hdLabel: "628 - 629",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 629,
        genotype: "1001110101",
        hdNext: {
            hdLabel: "629 - 630",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 630,
        genotype: "1001110110",
        hdNext: {
            hdLabel: "630 - 631",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 631,
        genotype: "1001110111",
        hdNext: {
            hdLabel: "631 - 632",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 632,
        genotype: "1001111000",
        hdNext: {
            hdLabel: "632 - 633",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 633,
        genotype: "1001111001",
        hdNext: {
            hdLabel: "633 - 634",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 634,
        genotype: "1001111010",
        hdNext: {
            hdLabel: "634 - 635",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 635,
        genotype: "1001111011",
        hdNext: {
            hdLabel: "635 - 636",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 636,
        genotype: "1001111100",
        hdNext: {
            hdLabel: "636 - 637",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 637,
        genotype: "1001111101",
        hdNext: {
            hdLabel: "637 - 638",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 638,
        genotype: "1001111110",
        hdNext: {
            hdLabel: "638 - 639",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 639,
        genotype: "1001111111",
        hdNext: {
            hdLabel: "639 - 640",
            hdList: "0,0,1,1,1,1,1,1,1,1",
            hd: 8
        }
    },
    {
        phenotype: 640,
        genotype: "1010000000",
        hdNext: {
            hdLabel: "640 - 641",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 641,
        genotype: "1010000001",
        hdNext: {
            hdLabel: "641 - 642",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 642,
        genotype: "1010000010",
        hdNext: {
            hdLabel: "642 - 643",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 643,
        genotype: "1010000011",
        hdNext: {
            hdLabel: "643 - 644",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 644,
        genotype: "1010000100",
        hdNext: {
            hdLabel: "644 - 645",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 645,
        genotype: "1010000101",
        hdNext: {
            hdLabel: "645 - 646",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 646,
        genotype: "1010000110",
        hdNext: {
            hdLabel: "646 - 647",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 647,
        genotype: "1010000111",
        hdNext: {
            hdLabel: "647 - 648",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 648,
        genotype: "1010001000",
        hdNext: {
            hdLabel: "648 - 649",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 649,
        genotype: "1010001001",
        hdNext: {
            hdLabel: "649 - 650",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 650,
        genotype: "1010001010",
        hdNext: {
            hdLabel: "650 - 651",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 651,
        genotype: "1010001011",
        hdNext: {
            hdLabel: "651 - 652",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 652,
        genotype: "1010001100",
        hdNext: {
            hdLabel: "652 - 653",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 653,
        genotype: "1010001101",
        hdNext: {
            hdLabel: "653 - 654",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 654,
        genotype: "1010001110",
        hdNext: {
            hdLabel: "654 - 655",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 655,
        genotype: "1010001111",
        hdNext: {
            hdLabel: "655 - 656",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 656,
        genotype: "1010010000",
        hdNext: {
            hdLabel: "656 - 657",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 657,
        genotype: "1010010001",
        hdNext: {
            hdLabel: "657 - 658",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 658,
        genotype: "1010010010",
        hdNext: {
            hdLabel: "658 - 659",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 659,
        genotype: "1010010011",
        hdNext: {
            hdLabel: "659 - 660",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 660,
        genotype: "1010010100",
        hdNext: {
            hdLabel: "660 - 661",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 661,
        genotype: "1010010101",
        hdNext: {
            hdLabel: "661 - 662",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 662,
        genotype: "1010010110",
        hdNext: {
            hdLabel: "662 - 663",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 663,
        genotype: "1010010111",
        hdNext: {
            hdLabel: "663 - 664",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 664,
        genotype: "1010011000",
        hdNext: {
            hdLabel: "664 - 665",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 665,
        genotype: "1010011001",
        hdNext: {
            hdLabel: "665 - 666",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 666,
        genotype: "1010011010",
        hdNext: {
            hdLabel: "666 - 667",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 667,
        genotype: "1010011011",
        hdNext: {
            hdLabel: "667 - 668",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 668,
        genotype: "1010011100",
        hdNext: {
            hdLabel: "668 - 669",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 669,
        genotype: "1010011101",
        hdNext: {
            hdLabel: "669 - 670",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 670,
        genotype: "1010011110",
        hdNext: {
            hdLabel: "670 - 671",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 671,
        genotype: "1010011111",
        hdNext: {
            hdLabel: "671 - 672",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 672,
        genotype: "1010100000",
        hdNext: {
            hdLabel: "672 - 673",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 673,
        genotype: "1010100001",
        hdNext: {
            hdLabel: "673 - 674",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 674,
        genotype: "1010100010",
        hdNext: {
            hdLabel: "674 - 675",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 675,
        genotype: "1010100011",
        hdNext: {
            hdLabel: "675 - 676",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 676,
        genotype: "1010100100",
        hdNext: {
            hdLabel: "676 - 677",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 677,
        genotype: "1010100101",
        hdNext: {
            hdLabel: "677 - 678",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 678,
        genotype: "1010100110",
        hdNext: {
            hdLabel: "678 - 679",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 679,
        genotype: "1010100111",
        hdNext: {
            hdLabel: "679 - 680",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 680,
        genotype: "1010101000",
        hdNext: {
            hdLabel: "680 - 681",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 681,
        genotype: "1010101001",
        hdNext: {
            hdLabel: "681 - 682",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 682,
        genotype: "1010101010",
        hdNext: {
            hdLabel: "682 - 683",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 683,
        genotype: "1010101011",
        hdNext: {
            hdLabel: "683 - 684",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 684,
        genotype: "1010101100",
        hdNext: {
            hdLabel: "684 - 685",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 685,
        genotype: "1010101101",
        hdNext: {
            hdLabel: "685 - 686",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 686,
        genotype: "1010101110",
        hdNext: {
            hdLabel: "686 - 687",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 687,
        genotype: "1010101111",
        hdNext: {
            hdLabel: "687 - 688",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 688,
        genotype: "1010110000",
        hdNext: {
            hdLabel: "688 - 689",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 689,
        genotype: "1010110001",
        hdNext: {
            hdLabel: "689 - 690",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 690,
        genotype: "1010110010",
        hdNext: {
            hdLabel: "690 - 691",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 691,
        genotype: "1010110011",
        hdNext: {
            hdLabel: "691 - 692",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 692,
        genotype: "1010110100",
        hdNext: {
            hdLabel: "692 - 693",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 693,
        genotype: "1010110101",
        hdNext: {
            hdLabel: "693 - 694",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 694,
        genotype: "1010110110",
        hdNext: {
            hdLabel: "694 - 695",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 695,
        genotype: "1010110111",
        hdNext: {
            hdLabel: "695 - 696",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 696,
        genotype: "1010111000",
        hdNext: {
            hdLabel: "696 - 697",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 697,
        genotype: "1010111001",
        hdNext: {
            hdLabel: "697 - 698",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 698,
        genotype: "1010111010",
        hdNext: {
            hdLabel: "698 - 699",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 699,
        genotype: "1010111011",
        hdNext: {
            hdLabel: "699 - 700",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 700,
        genotype: "1010111100",
        hdNext: {
            hdLabel: "700 - 701",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 701,
        genotype: "1010111101",
        hdNext: {
            hdLabel: "701 - 702",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 702,
        genotype: "1010111110",
        hdNext: {
            hdLabel: "702 - 703",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 703,
        genotype: "1010111111",
        hdNext: {
            hdLabel: "703 - 704",
            hdList: "0,0,0,1,1,1,1,1,1,1",
            hd: 7
        }
    },
    {
        phenotype: 704,
        genotype: "1011000000",
        hdNext: {
            hdLabel: "704 - 705",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 705,
        genotype: "1011000001",
        hdNext: {
            hdLabel: "705 - 706",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 706,
        genotype: "1011000010",
        hdNext: {
            hdLabel: "706 - 707",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 707,
        genotype: "1011000011",
        hdNext: {
            hdLabel: "707 - 708",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 708,
        genotype: "1011000100",
        hdNext: {
            hdLabel: "708 - 709",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 709,
        genotype: "1011000101",
        hdNext: {
            hdLabel: "709 - 710",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 710,
        genotype: "1011000110",
        hdNext: {
            hdLabel: "710 - 711",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 711,
        genotype: "1011000111",
        hdNext: {
            hdLabel: "711 - 712",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 712,
        genotype: "1011001000",
        hdNext: {
            hdLabel: "712 - 713",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 713,
        genotype: "1011001001",
        hdNext: {
            hdLabel: "713 - 714",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 714,
        genotype: "1011001010",
        hdNext: {
            hdLabel: "714 - 715",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 715,
        genotype: "1011001011",
        hdNext: {
            hdLabel: "715 - 716",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 716,
        genotype: "1011001100",
        hdNext: {
            hdLabel: "716 - 717",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 717,
        genotype: "1011001101",
        hdNext: {
            hdLabel: "717 - 718",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 718,
        genotype: "1011001110",
        hdNext: {
            hdLabel: "718 - 719",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 719,
        genotype: "1011001111",
        hdNext: {
            hdLabel: "719 - 720",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 720,
        genotype: "1011010000",
        hdNext: {
            hdLabel: "720 - 721",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 721,
        genotype: "1011010001",
        hdNext: {
            hdLabel: "721 - 722",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 722,
        genotype: "1011010010",
        hdNext: {
            hdLabel: "722 - 723",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 723,
        genotype: "1011010011",
        hdNext: {
            hdLabel: "723 - 724",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 724,
        genotype: "1011010100",
        hdNext: {
            hdLabel: "724 - 725",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 725,
        genotype: "1011010101",
        hdNext: {
            hdLabel: "725 - 726",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 726,
        genotype: "1011010110",
        hdNext: {
            hdLabel: "726 - 727",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 727,
        genotype: "1011010111",
        hdNext: {
            hdLabel: "727 - 728",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 728,
        genotype: "1011011000",
        hdNext: {
            hdLabel: "728 - 729",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 729,
        genotype: "1011011001",
        hdNext: {
            hdLabel: "729 - 730",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 730,
        genotype: "1011011010",
        hdNext: {
            hdLabel: "730 - 731",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 731,
        genotype: "1011011011",
        hdNext: {
            hdLabel: "731 - 732",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 732,
        genotype: "1011011100",
        hdNext: {
            hdLabel: "732 - 733",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 733,
        genotype: "1011011101",
        hdNext: {
            hdLabel: "733 - 734",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 734,
        genotype: "1011011110",
        hdNext: {
            hdLabel: "734 - 735",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 735,
        genotype: "1011011111",
        hdNext: {
            hdLabel: "735 - 736",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 736,
        genotype: "1011100000",
        hdNext: {
            hdLabel: "736 - 737",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 737,
        genotype: "1011100001",
        hdNext: {
            hdLabel: "737 - 738",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 738,
        genotype: "1011100010",
        hdNext: {
            hdLabel: "738 - 739",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 739,
        genotype: "1011100011",
        hdNext: {
            hdLabel: "739 - 740",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 740,
        genotype: "1011100100",
        hdNext: {
            hdLabel: "740 - 741",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 741,
        genotype: "1011100101",
        hdNext: {
            hdLabel: "741 - 742",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 742,
        genotype: "1011100110",
        hdNext: {
            hdLabel: "742 - 743",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 743,
        genotype: "1011100111",
        hdNext: {
            hdLabel: "743 - 744",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 744,
        genotype: "1011101000",
        hdNext: {
            hdLabel: "744 - 745",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 745,
        genotype: "1011101001",
        hdNext: {
            hdLabel: "745 - 746",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 746,
        genotype: "1011101010",
        hdNext: {
            hdLabel: "746 - 747",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 747,
        genotype: "1011101011",
        hdNext: {
            hdLabel: "747 - 748",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 748,
        genotype: "1011101100",
        hdNext: {
            hdLabel: "748 - 749",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 749,
        genotype: "1011101101",
        hdNext: {
            hdLabel: "749 - 750",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 750,
        genotype: "1011101110",
        hdNext: {
            hdLabel: "750 - 751",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 751,
        genotype: "1011101111",
        hdNext: {
            hdLabel: "751 - 752",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 752,
        genotype: "1011110000",
        hdNext: {
            hdLabel: "752 - 753",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 753,
        genotype: "1011110001",
        hdNext: {
            hdLabel: "753 - 754",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 754,
        genotype: "1011110010",
        hdNext: {
            hdLabel: "754 - 755",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 755,
        genotype: "1011110011",
        hdNext: {
            hdLabel: "755 - 756",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 756,
        genotype: "1011110100",
        hdNext: {
            hdLabel: "756 - 757",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 757,
        genotype: "1011110101",
        hdNext: {
            hdLabel: "757 - 758",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 758,
        genotype: "1011110110",
        hdNext: {
            hdLabel: "758 - 759",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 759,
        genotype: "1011110111",
        hdNext: {
            hdLabel: "759 - 760",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 760,
        genotype: "1011111000",
        hdNext: {
            hdLabel: "760 - 761",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 761,
        genotype: "1011111001",
        hdNext: {
            hdLabel: "761 - 762",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 762,
        genotype: "1011111010",
        hdNext: {
            hdLabel: "762 - 763",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 763,
        genotype: "1011111011",
        hdNext: {
            hdLabel: "763 - 764",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 764,
        genotype: "1011111100",
        hdNext: {
            hdLabel: "764 - 765",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 765,
        genotype: "1011111101",
        hdNext: {
            hdLabel: "765 - 766",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 766,
        genotype: "1011111110",
        hdNext: {
            hdLabel: "766 - 767",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 767,
        genotype: "1011111111",
        hdNext: {
            hdLabel: "767 - 768",
            hdList: "0,1,1,1,1,1,1,1,1,1",
            hd: 9
        }
    },
    {
        phenotype: 768,
        genotype: "1100000000",
        hdNext: {
            hdLabel: "768 - 769",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 769,
        genotype: "1100000001",
        hdNext: {
            hdLabel: "769 - 770",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 770,
        genotype: "1100000010",
        hdNext: {
            hdLabel: "770 - 771",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 771,
        genotype: "1100000011",
        hdNext: {
            hdLabel: "771 - 772",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 772,
        genotype: "1100000100",
        hdNext: {
            hdLabel: "772 - 773",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 773,
        genotype: "1100000101",
        hdNext: {
            hdLabel: "773 - 774",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 774,
        genotype: "1100000110",
        hdNext: {
            hdLabel: "774 - 775",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 775,
        genotype: "1100000111",
        hdNext: {
            hdLabel: "775 - 776",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 776,
        genotype: "1100001000",
        hdNext: {
            hdLabel: "776 - 777",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 777,
        genotype: "1100001001",
        hdNext: {
            hdLabel: "777 - 778",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 778,
        genotype: "1100001010",
        hdNext: {
            hdLabel: "778 - 779",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 779,
        genotype: "1100001011",
        hdNext: {
            hdLabel: "779 - 780",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 780,
        genotype: "1100001100",
        hdNext: {
            hdLabel: "780 - 781",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 781,
        genotype: "1100001101",
        hdNext: {
            hdLabel: "781 - 782",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 782,
        genotype: "1100001110",
        hdNext: {
            hdLabel: "782 - 783",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 783,
        genotype: "1100001111",
        hdNext: {
            hdLabel: "783 - 784",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 784,
        genotype: "1100010000",
        hdNext: {
            hdLabel: "784 - 785",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 785,
        genotype: "1100010001",
        hdNext: {
            hdLabel: "785 - 786",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 786,
        genotype: "1100010010",
        hdNext: {
            hdLabel: "786 - 787",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 787,
        genotype: "1100010011",
        hdNext: {
            hdLabel: "787 - 788",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 788,
        genotype: "1100010100",
        hdNext: {
            hdLabel: "788 - 789",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 789,
        genotype: "1100010101",
        hdNext: {
            hdLabel: "789 - 790",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 790,
        genotype: "1100010110",
        hdNext: {
            hdLabel: "790 - 791",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 791,
        genotype: "1100010111",
        hdNext: {
            hdLabel: "791 - 792",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 792,
        genotype: "1100011000",
        hdNext: {
            hdLabel: "792 - 793",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 793,
        genotype: "1100011001",
        hdNext: {
            hdLabel: "793 - 794",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 794,
        genotype: "1100011010",
        hdNext: {
            hdLabel: "794 - 795",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 795,
        genotype: "1100011011",
        hdNext: {
            hdLabel: "795 - 796",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 796,
        genotype: "1100011100",
        hdNext: {
            hdLabel: "796 - 797",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 797,
        genotype: "1100011101",
        hdNext: {
            hdLabel: "797 - 798",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 798,
        genotype: "1100011110",
        hdNext: {
            hdLabel: "798 - 799",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 799,
        genotype: "1100011111",
        hdNext: {
            hdLabel: "799 - 800",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 800,
        genotype: "1100100000",
        hdNext: {
            hdLabel: "800 - 801",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 801,
        genotype: "1100100001",
        hdNext: {
            hdLabel: "801 - 802",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 802,
        genotype: "1100100010",
        hdNext: {
            hdLabel: "802 - 803",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 803,
        genotype: "1100100011",
        hdNext: {
            hdLabel: "803 - 804",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 804,
        genotype: "1100100100",
        hdNext: {
            hdLabel: "804 - 805",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 805,
        genotype: "1100100101",
        hdNext: {
            hdLabel: "805 - 806",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 806,
        genotype: "1100100110",
        hdNext: {
            hdLabel: "806 - 807",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 807,
        genotype: "1100100111",
        hdNext: {
            hdLabel: "807 - 808",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 808,
        genotype: "1100101000",
        hdNext: {
            hdLabel: "808 - 809",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 809,
        genotype: "1100101001",
        hdNext: {
            hdLabel: "809 - 810",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 810,
        genotype: "1100101010",
        hdNext: {
            hdLabel: "810 - 811",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 811,
        genotype: "1100101011",
        hdNext: {
            hdLabel: "811 - 812",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 812,
        genotype: "1100101100",
        hdNext: {
            hdLabel: "812 - 813",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 813,
        genotype: "1100101101",
        hdNext: {
            hdLabel: "813 - 814",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 814,
        genotype: "1100101110",
        hdNext: {
            hdLabel: "814 - 815",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 815,
        genotype: "1100101111",
        hdNext: {
            hdLabel: "815 - 816",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 816,
        genotype: "1100110000",
        hdNext: {
            hdLabel: "816 - 817",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 817,
        genotype: "1100110001",
        hdNext: {
            hdLabel: "817 - 818",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 818,
        genotype: "1100110010",
        hdNext: {
            hdLabel: "818 - 819",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 819,
        genotype: "1100110011",
        hdNext: {
            hdLabel: "819 - 820",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 820,
        genotype: "1100110100",
        hdNext: {
            hdLabel: "820 - 821",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 821,
        genotype: "1100110101",
        hdNext: {
            hdLabel: "821 - 822",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 822,
        genotype: "1100110110",
        hdNext: {
            hdLabel: "822 - 823",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 823,
        genotype: "1100110111",
        hdNext: {
            hdLabel: "823 - 824",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 824,
        genotype: "1100111000",
        hdNext: {
            hdLabel: "824 - 825",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 825,
        genotype: "1100111001",
        hdNext: {
            hdLabel: "825 - 826",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 826,
        genotype: "1100111010",
        hdNext: {
            hdLabel: "826 - 827",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 827,
        genotype: "1100111011",
        hdNext: {
            hdLabel: "827 - 828",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 828,
        genotype: "1100111100",
        hdNext: {
            hdLabel: "828 - 829",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 829,
        genotype: "1100111101",
        hdNext: {
            hdLabel: "829 - 830",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 830,
        genotype: "1100111110",
        hdNext: {
            hdLabel: "830 - 831",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 831,
        genotype: "1100111111",
        hdNext: {
            hdLabel: "831 - 832",
            hdList: "0,0,0,1,1,1,1,1,1,1",
            hd: 7
        }
    },
    {
        phenotype: 832,
        genotype: "1101000000",
        hdNext: {
            hdLabel: "832 - 833",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 833,
        genotype: "1101000001",
        hdNext: {
            hdLabel: "833 - 834",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 834,
        genotype: "1101000010",
        hdNext: {
            hdLabel: "834 - 835",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 835,
        genotype: "1101000011",
        hdNext: {
            hdLabel: "835 - 836",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 836,
        genotype: "1101000100",
        hdNext: {
            hdLabel: "836 - 837",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 837,
        genotype: "1101000101",
        hdNext: {
            hdLabel: "837 - 838",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 838,
        genotype: "1101000110",
        hdNext: {
            hdLabel: "838 - 839",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 839,
        genotype: "1101000111",
        hdNext: {
            hdLabel: "839 - 840",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 840,
        genotype: "1101001000",
        hdNext: {
            hdLabel: "840 - 841",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 841,
        genotype: "1101001001",
        hdNext: {
            hdLabel: "841 - 842",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 842,
        genotype: "1101001010",
        hdNext: {
            hdLabel: "842 - 843",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 843,
        genotype: "1101001011",
        hdNext: {
            hdLabel: "843 - 844",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 844,
        genotype: "1101001100",
        hdNext: {
            hdLabel: "844 - 845",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 845,
        genotype: "1101001101",
        hdNext: {
            hdLabel: "845 - 846",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 846,
        genotype: "1101001110",
        hdNext: {
            hdLabel: "846 - 847",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 847,
        genotype: "1101001111",
        hdNext: {
            hdLabel: "847 - 848",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 848,
        genotype: "1101010000",
        hdNext: {
            hdLabel: "848 - 849",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 849,
        genotype: "1101010001",
        hdNext: {
            hdLabel: "849 - 850",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 850,
        genotype: "1101010010",
        hdNext: {
            hdLabel: "850 - 851",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 851,
        genotype: "1101010011",
        hdNext: {
            hdLabel: "851 - 852",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 852,
        genotype: "1101010100",
        hdNext: {
            hdLabel: "852 - 853",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 853,
        genotype: "1101010101",
        hdNext: {
            hdLabel: "853 - 854",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 854,
        genotype: "1101010110",
        hdNext: {
            hdLabel: "854 - 855",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 855,
        genotype: "1101010111",
        hdNext: {
            hdLabel: "855 - 856",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 856,
        genotype: "1101011000",
        hdNext: {
            hdLabel: "856 - 857",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 857,
        genotype: "1101011001",
        hdNext: {
            hdLabel: "857 - 858",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 858,
        genotype: "1101011010",
        hdNext: {
            hdLabel: "858 - 859",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 859,
        genotype: "1101011011",
        hdNext: {
            hdLabel: "859 - 860",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 860,
        genotype: "1101011100",
        hdNext: {
            hdLabel: "860 - 861",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 861,
        genotype: "1101011101",
        hdNext: {
            hdLabel: "861 - 862",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 862,
        genotype: "1101011110",
        hdNext: {
            hdLabel: "862 - 863",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 863,
        genotype: "1101011111",
        hdNext: {
            hdLabel: "863 - 864",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 864,
        genotype: "1101100000",
        hdNext: {
            hdLabel: "864 - 865",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 865,
        genotype: "1101100001",
        hdNext: {
            hdLabel: "865 - 866",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 866,
        genotype: "1101100010",
        hdNext: {
            hdLabel: "866 - 867",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 867,
        genotype: "1101100011",
        hdNext: {
            hdLabel: "867 - 868",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 868,
        genotype: "1101100100",
        hdNext: {
            hdLabel: "868 - 869",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 869,
        genotype: "1101100101",
        hdNext: {
            hdLabel: "869 - 870",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 870,
        genotype: "1101100110",
        hdNext: {
            hdLabel: "870 - 871",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 871,
        genotype: "1101100111",
        hdNext: {
            hdLabel: "871 - 872",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 872,
        genotype: "1101101000",
        hdNext: {
            hdLabel: "872 - 873",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 873,
        genotype: "1101101001",
        hdNext: {
            hdLabel: "873 - 874",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 874,
        genotype: "1101101010",
        hdNext: {
            hdLabel: "874 - 875",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 875,
        genotype: "1101101011",
        hdNext: {
            hdLabel: "875 - 876",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 876,
        genotype: "1101101100",
        hdNext: {
            hdLabel: "876 - 877",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 877,
        genotype: "1101101101",
        hdNext: {
            hdLabel: "877 - 878",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 878,
        genotype: "1101101110",
        hdNext: {
            hdLabel: "878 - 879",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 879,
        genotype: "1101101111",
        hdNext: {
            hdLabel: "879 - 880",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 880,
        genotype: "1101110000",
        hdNext: {
            hdLabel: "880 - 881",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 881,
        genotype: "1101110001",
        hdNext: {
            hdLabel: "881 - 882",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 882,
        genotype: "1101110010",
        hdNext: {
            hdLabel: "882 - 883",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 883,
        genotype: "1101110011",
        hdNext: {
            hdLabel: "883 - 884",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 884,
        genotype: "1101110100",
        hdNext: {
            hdLabel: "884 - 885",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 885,
        genotype: "1101110101",
        hdNext: {
            hdLabel: "885 - 886",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 886,
        genotype: "1101110110",
        hdNext: {
            hdLabel: "886 - 887",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 887,
        genotype: "1101110111",
        hdNext: {
            hdLabel: "887 - 888",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 888,
        genotype: "1101111000",
        hdNext: {
            hdLabel: "888 - 889",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 889,
        genotype: "1101111001",
        hdNext: {
            hdLabel: "889 - 890",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 890,
        genotype: "1101111010",
        hdNext: {
            hdLabel: "890 - 891",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 891,
        genotype: "1101111011",
        hdNext: {
            hdLabel: "891 - 892",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 892,
        genotype: "1101111100",
        hdNext: {
            hdLabel: "892 - 893",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 893,
        genotype: "1101111101",
        hdNext: {
            hdLabel: "893 - 894",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 894,
        genotype: "1101111110",
        hdNext: {
            hdLabel: "894 - 895",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 895,
        genotype: "1101111111",
        hdNext: {
            hdLabel: "895 - 896",
            hdList: "0,0,1,1,1,1,1,1,1,1",
            hd: 8
        }
    },
    {
        phenotype: 896,
        genotype: "1110000000",
        hdNext: {
            hdLabel: "896 - 897",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 897,
        genotype: "1110000001",
        hdNext: {
            hdLabel: "897 - 898",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 898,
        genotype: "1110000010",
        hdNext: {
            hdLabel: "898 - 899",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 899,
        genotype: "1110000011",
        hdNext: {
            hdLabel: "899 - 900",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 900,
        genotype: "1110000100",
        hdNext: {
            hdLabel: "900 - 901",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 901,
        genotype: "1110000101",
        hdNext: {
            hdLabel: "901 - 902",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 902,
        genotype: "1110000110",
        hdNext: {
            hdLabel: "902 - 903",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 903,
        genotype: "1110000111",
        hdNext: {
            hdLabel: "903 - 904",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 904,
        genotype: "1110001000",
        hdNext: {
            hdLabel: "904 - 905",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 905,
        genotype: "1110001001",
        hdNext: {
            hdLabel: "905 - 906",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 906,
        genotype: "1110001010",
        hdNext: {
            hdLabel: "906 - 907",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 907,
        genotype: "1110001011",
        hdNext: {
            hdLabel: "907 - 908",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 908,
        genotype: "1110001100",
        hdNext: {
            hdLabel: "908 - 909",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 909,
        genotype: "1110001101",
        hdNext: {
            hdLabel: "909 - 910",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 910,
        genotype: "1110001110",
        hdNext: {
            hdLabel: "910 - 911",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 911,
        genotype: "1110001111",
        hdNext: {
            hdLabel: "911 - 912",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 912,
        genotype: "1110010000",
        hdNext: {
            hdLabel: "912 - 913",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 913,
        genotype: "1110010001",
        hdNext: {
            hdLabel: "913 - 914",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 914,
        genotype: "1110010010",
        hdNext: {
            hdLabel: "914 - 915",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 915,
        genotype: "1110010011",
        hdNext: {
            hdLabel: "915 - 916",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 916,
        genotype: "1110010100",
        hdNext: {
            hdLabel: "916 - 917",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 917,
        genotype: "1110010101",
        hdNext: {
            hdLabel: "917 - 918",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 918,
        genotype: "1110010110",
        hdNext: {
            hdLabel: "918 - 919",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 919,
        genotype: "1110010111",
        hdNext: {
            hdLabel: "919 - 920",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 920,
        genotype: "1110011000",
        hdNext: {
            hdLabel: "920 - 921",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 921,
        genotype: "1110011001",
        hdNext: {
            hdLabel: "921 - 922",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 922,
        genotype: "1110011010",
        hdNext: {
            hdLabel: "922 - 923",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 923,
        genotype: "1110011011",
        hdNext: {
            hdLabel: "923 - 924",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 924,
        genotype: "1110011100",
        hdNext: {
            hdLabel: "924 - 925",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 925,
        genotype: "1110011101",
        hdNext: {
            hdLabel: "925 - 926",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 926,
        genotype: "1110011110",
        hdNext: {
            hdLabel: "926 - 927",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 927,
        genotype: "1110011111",
        hdNext: {
            hdLabel: "927 - 928",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 928,
        genotype: "1110100000",
        hdNext: {
            hdLabel: "928 - 929",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 929,
        genotype: "1110100001",
        hdNext: {
            hdLabel: "929 - 930",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 930,
        genotype: "1110100010",
        hdNext: {
            hdLabel: "930 - 931",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 931,
        genotype: "1110100011",
        hdNext: {
            hdLabel: "931 - 932",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 932,
        genotype: "1110100100",
        hdNext: {
            hdLabel: "932 - 933",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 933,
        genotype: "1110100101",
        hdNext: {
            hdLabel: "933 - 934",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 934,
        genotype: "1110100110",
        hdNext: {
            hdLabel: "934 - 935",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 935,
        genotype: "1110100111",
        hdNext: {
            hdLabel: "935 - 936",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 936,
        genotype: "1110101000",
        hdNext: {
            hdLabel: "936 - 937",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 937,
        genotype: "1110101001",
        hdNext: {
            hdLabel: "937 - 938",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 938,
        genotype: "1110101010",
        hdNext: {
            hdLabel: "938 - 939",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 939,
        genotype: "1110101011",
        hdNext: {
            hdLabel: "939 - 940",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 940,
        genotype: "1110101100",
        hdNext: {
            hdLabel: "940 - 941",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 941,
        genotype: "1110101101",
        hdNext: {
            hdLabel: "941 - 942",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 942,
        genotype: "1110101110",
        hdNext: {
            hdLabel: "942 - 943",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 943,
        genotype: "1110101111",
        hdNext: {
            hdLabel: "943 - 944",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 944,
        genotype: "1110110000",
        hdNext: {
            hdLabel: "944 - 945",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 945,
        genotype: "1110110001",
        hdNext: {
            hdLabel: "945 - 946",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 946,
        genotype: "1110110010",
        hdNext: {
            hdLabel: "946 - 947",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 947,
        genotype: "1110110011",
        hdNext: {
            hdLabel: "947 - 948",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 948,
        genotype: "1110110100",
        hdNext: {
            hdLabel: "948 - 949",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 949,
        genotype: "1110110101",
        hdNext: {
            hdLabel: "949 - 950",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 950,
        genotype: "1110110110",
        hdNext: {
            hdLabel: "950 - 951",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 951,
        genotype: "1110110111",
        hdNext: {
            hdLabel: "951 - 952",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 952,
        genotype: "1110111000",
        hdNext: {
            hdLabel: "952 - 953",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 953,
        genotype: "1110111001",
        hdNext: {
            hdLabel: "953 - 954",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 954,
        genotype: "1110111010",
        hdNext: {
            hdLabel: "954 - 955",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 955,
        genotype: "1110111011",
        hdNext: {
            hdLabel: "955 - 956",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 956,
        genotype: "1110111100",
        hdNext: {
            hdLabel: "956 - 957",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 957,
        genotype: "1110111101",
        hdNext: {
            hdLabel: "957 - 958",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 958,
        genotype: "1110111110",
        hdNext: {
            hdLabel: "958 - 959",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 959,
        genotype: "1110111111",
        hdNext: {
            hdLabel: "959 - 960",
            hdList: "0,0,0,1,1,1,1,1,1,1",
            hd: 7
        }
    },
    {
        phenotype: 960,
        genotype: "1111000000",
        hdNext: {
            hdLabel: "960 - 961",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 961,
        genotype: "1111000001",
        hdNext: {
            hdLabel: "961 - 962",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 962,
        genotype: "1111000010",
        hdNext: {
            hdLabel: "962 - 963",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 963,
        genotype: "1111000011",
        hdNext: {
            hdLabel: "963 - 964",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 964,
        genotype: "1111000100",
        hdNext: {
            hdLabel: "964 - 965",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 965,
        genotype: "1111000101",
        hdNext: {
            hdLabel: "965 - 966",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 966,
        genotype: "1111000110",
        hdNext: {
            hdLabel: "966 - 967",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 967,
        genotype: "1111000111",
        hdNext: {
            hdLabel: "967 - 968",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 968,
        genotype: "1111001000",
        hdNext: {
            hdLabel: "968 - 969",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 969,
        genotype: "1111001001",
        hdNext: {
            hdLabel: "969 - 970",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 970,
        genotype: "1111001010",
        hdNext: {
            hdLabel: "970 - 971",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 971,
        genotype: "1111001011",
        hdNext: {
            hdLabel: "971 - 972",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 972,
        genotype: "1111001100",
        hdNext: {
            hdLabel: "972 - 973",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 973,
        genotype: "1111001101",
        hdNext: {
            hdLabel: "973 - 974",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 974,
        genotype: "1111001110",
        hdNext: {
            hdLabel: "974 - 975",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 975,
        genotype: "1111001111",
        hdNext: {
            hdLabel: "975 - 976",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 976,
        genotype: "1111010000",
        hdNext: {
            hdLabel: "976 - 977",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 977,
        genotype: "1111010001",
        hdNext: {
            hdLabel: "977 - 978",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 978,
        genotype: "1111010010",
        hdNext: {
            hdLabel: "978 - 979",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 979,
        genotype: "1111010011",
        hdNext: {
            hdLabel: "979 - 980",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 980,
        genotype: "1111010100",
        hdNext: {
            hdLabel: "980 - 981",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 981,
        genotype: "1111010101",
        hdNext: {
            hdLabel: "981 - 982",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 982,
        genotype: "1111010110",
        hdNext: {
            hdLabel: "982 - 983",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 983,
        genotype: "1111010111",
        hdNext: {
            hdLabel: "983 - 984",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 984,
        genotype: "1111011000",
        hdNext: {
            hdLabel: "984 - 985",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 985,
        genotype: "1111011001",
        hdNext: {
            hdLabel: "985 - 986",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 986,
        genotype: "1111011010",
        hdNext: {
            hdLabel: "986 - 987",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 987,
        genotype: "1111011011",
        hdNext: {
            hdLabel: "987 - 988",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 988,
        genotype: "1111011100",
        hdNext: {
            hdLabel: "988 - 989",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 989,
        genotype: "1111011101",
        hdNext: {
            hdLabel: "989 - 990",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 990,
        genotype: "1111011110",
        hdNext: {
            hdLabel: "990 - 991",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 991,
        genotype: "1111011111",
        hdNext: {
            hdLabel: "991 - 992",
            hdList: "0,0,0,0,1,1,1,1,1,1",
            hd: 6
        }
    },
    {
        phenotype: 992,
        genotype: "1111100000",
        hdNext: {
            hdLabel: "992 - 993",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 993,
        genotype: "1111100001",
        hdNext: {
            hdLabel: "993 - 994",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 994,
        genotype: "1111100010",
        hdNext: {
            hdLabel: "994 - 995",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 995,
        genotype: "1111100011",
        hdNext: {
            hdLabel: "995 - 996",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 996,
        genotype: "1111100100",
        hdNext: {
            hdLabel: "996 - 997",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 997,
        genotype: "1111100101",
        hdNext: {
            hdLabel: "997 - 998",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 998,
        genotype: "1111100110",
        hdNext: {
            hdLabel: "998 - 999",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 999,
        genotype: "1111100111",
        hdNext: {
            hdLabel: "999 - 1000",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 1000,
        genotype: "1111101000",
        hdNext: {
            hdLabel: "1000 - 1001",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1001,
        genotype: "1111101001",
        hdNext: {
            hdLabel: "1001 - 1002",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 1002,
        genotype: "1111101010",
        hdNext: {
            hdLabel: "1002 - 1003",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1003,
        genotype: "1111101011",
        hdNext: {
            hdLabel: "1003 - 1004",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 1004,
        genotype: "1111101100",
        hdNext: {
            hdLabel: "1004 - 1005",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1005,
        genotype: "1111101101",
        hdNext: {
            hdLabel: "1005 - 1006",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 1006,
        genotype: "1111101110",
        hdNext: {
            hdLabel: "1006 - 1007",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1007,
        genotype: "1111101111",
        hdNext: {
            hdLabel: "1007 - 1008",
            hdList: "0,0,0,0,0,1,1,1,1,1",
            hd: 5
        }
    },
    {
        phenotype: 1008,
        genotype: "1111110000",
        hdNext: {
            hdLabel: "1008 - 1009",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1009,
        genotype: "1111110001",
        hdNext: {
            hdLabel: "1009 - 1010",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 1010,
        genotype: "1111110010",
        hdNext: {
            hdLabel: "1010 - 1011",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1011,
        genotype: "1111110011",
        hdNext: {
            hdLabel: "1011 - 1012",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 1012,
        genotype: "1111110100",
        hdNext: {
            hdLabel: "1012 - 1013",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1013,
        genotype: "1111110101",
        hdNext: {
            hdLabel: "1013 - 1014",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 1014,
        genotype: "1111110110",
        hdNext: {
            hdLabel: "1014 - 1015",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1015,
        genotype: "1111110111",
        hdNext: {
            hdLabel: "1015 - 1016",
            hdList: "0,0,0,0,0,0,1,1,1,1",
            hd: 4
        }
    },
    {
        phenotype: 1016,
        genotype: "1111111000",
        hdNext: {
            hdLabel: "1016 - 1017",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1017,
        genotype: "1111111001",
        hdNext: {
            hdLabel: "1017 - 1018",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 1018,
        genotype: "1111111010",
        hdNext: {
            hdLabel: "1018 - 1019",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1019,
        genotype: "1111111011",
        hdNext: {
            hdLabel: "1019 - 1020",
            hdList: "0,0,0,0,0,0,0,1,1,1",
            hd: 3
        }
    },
    {
        phenotype: 1020,
        genotype: "1111111100",
        hdNext: {
            hdLabel: "1020 - 1021",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1021,
        genotype: "1111111101",
        hdNext: {
            hdLabel: "1021 - 1022",
            hdList: "0,0,0,0,0,0,0,0,1,1",
            hd: 2
        }
    },
    {
        phenotype: 1022,
        genotype: "1111111110",
        hdNext: {
            hdLabel: "1022 - 1023",
            hdList: "0,0,0,0,0,0,0,0,0,1",
            hd: 1
        }
    },
    {
        phenotype: 1023,
        genotype: "1111111111",
        hdNext: {
            hdLabel: "1023 - 1024",
            hdList: "0,1,1,1,1,1,1,1,1,1",
            hd: 9
        }
    }
]

