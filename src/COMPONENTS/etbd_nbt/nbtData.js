export function nbtData() {
    let baselineData = [
        {
            study: 'original',
            experiments: [
                { id: "C039", exp: 1, slope: 0.84, bias: 1.01, rSquare: 0.99 },
                { id: "C040", exp: 2, slope: 0.85, bias: 1.03, rSquare: 0.99 },
                { id: "C041", exp: 3, slope: 0.80, bias: 0.92, rSquare: 0.98 },
                { id: "C042", exp: 4, slope: 0.80, bias: 0.98, rSquare: 0.98 },
                { id: "C043", exp: 5, slope: 0.87, bias: 1.03, rSquare: 0.98 },
                { id: "C044", exp: 6, slope: 0.77, bias: 0.90, rSquare: 0.97 },
                { id: "C045", exp: 7, slope: 0.82, bias: 1.03, rSquare: 1.00 },
                { id: "C046", exp: 8, slope: 0.83, bias: 0.95, rSquare: 0.99 },
                { id: "C048", exp: 9, slope: 0.76, bias: 0.99, rSquare: 0.98 },
                { id: "C049", exp: 10, slope: 0.89, bias: 1.01, rSquare: 0.98 }
            ]
        },

        {
            study: 'replication',
            experiments: [
                { id: "exp1", exp: 1, slope: 0.90, bias: 1.01, rSquare: 0.99 },
                { id: "exp2", exp: 2, slope: 0.80, bias: 0.99, rSquare: 0.96 },
                { id: "exp3", exp: 3, slope: 0.84, bias: 1.05, rSquare: 1.00 },
                { id: "exp4", exp: 4, slope: 0.79, bias: 1.07, rSquare: 0.99 },
                { id: "exp5", exp: 5, slope: 0.80, bias: 1.00, rSquare: 0.98 },
                { id: "exp6", exp: 6, slope: 0.88, bias: 0.95, rSquare: 0.99 },
                { id: "exp7", exp: 7, slope: 0.83, bias: 0.99, rSquare: 0.99 },
                { id: "exp8", exp: 8, slope: 0.87, bias: 0.99, rSquare: 0.98 },
                { id: "exp9", exp: 9, slope: 0.89, bias: 0.97, rSquare: 0.99 },
                { id: "exp10", exp: 10, slope: 0.76, bias: 1.00, rSquare: 0.98 },
            ]
        },

        {
            study: 'nbt',
            experiments: [
                { id: "exp1", exp: 1, slope: 0.766, bias: 1.011, rSquare: 0.987 },
                { id: "exp2", exp: 2, slope: 0.749, bias: 0.943, rSquare: 0.989 },
                { id: "exp3", exp: 3, slope: 0.757, bias: 0.978, rSquare: 0.971 },
                { id: "exp4", exp: 4, slope: 0.783, bias: 1.023, rSquare: 0.969 },
                { id: "exp5", exp: 7, slope: 0.795, bias: 0.995, rSquare: 0.980 },
                { id: "exp6", exp: 8, slope: 0.730, bias: 1.004, rSquare: 0.978 },
                { id: "exp7", exp: 9, slope: 0.772, bias: 1.040, rSquare: 0.98 },
                { id: "exp8", exp: 10, slope: 0.785, bias: 0.982, rSquare: 0.99 },

            ]
        },
    ]



    let biasData = [
        {
            study: 'original',
            conditions: [
                { id: 'L10-40', miuLeft: 10, magnRatio: 4.00, slopeMean: 0.8575, biasMean: 2.350, rSquareMean: 0.9933 },
                { id: 'L25-40', miuLeft: 25, magnRatio: 1.60, slopeMean: 0.85, biasMean: 1.41, rSquareMean: 0.99 },
                { id: 'L40-40', miuLeft: 40, magnRatio: 1.00, slopeMean: 0.823, biasMean: 0.985, rSquareMean: 0.984 },
                { id: 'L55-40', miuLeft: 55, magnRatio: 0.72, slopeMean: 0.81, biasMean: 0.84, rSquareMean: 0.99 },
                { id: 'L70-40', miuLeft: 70, magnRatio: 0.57, slopeMean: 0.84, biasMean: 0.71, rSquareMean: 0.98 },
            ]
        },

        {
            study: 'replication',
            conditions: [
                { id: 'L10-40', miuLeft: 10, magnRatio: 4.00, slopeMean: 0.8615599, biasMean: 2.05, rSquareMean: 0.99 },
                { id: 'L25-40', miuLeft: 25, magnRatio: 1.60, slopeMean: 0.85, biasMean: 1.38, rSquareMean: 0.99 },
                { id: 'L40-40', miuLeft: 40, magnRatio: 1.00, slopeMean: 0.835, biasMean: 1.002, rSquareMean: 0.985 },
                { id: 'L55-40', miuLeft: 55, magnRatio: 0.72, slopeMean: 0.82, biasMean: 0.84, rSquareMean: 0.97 },
                { id: 'L70-40', miuLeft: 70, magnRatio: 0.57, slopeMean: 0.80, biasMean: 0.70, rSquareMean: 0.99 },
            ]
        },

        {
            study: 'nbt',
            conditions: [
                { id: 'L10-40', miuLeft: 10, magnRatio: 4.00, slopeMean: '0.83333333', biasMean: '1.77777', rSquareMean: '0.933333333' },
                { id: 'L25-40', miuLeft: 25, magnRatio: 1.60, slopeMean: 0.82, biasMean: 1.47, rSquareMean: 0.99 },

                // { id: 'L10-40', miuLeft: 10, magnRatio: 4.00, slopeMean: 'TBE', biasMean: 'TBE', rSquareMean: 'TBE' },
                // { id: 'L25-40', miuLeft: 25, magnRatio: 1.60, slopeMean: 0.82, biasMean: 1.47, rSquareMean: 0.99 },
                { id: 'L40-40', miuLeft: 40, magnRatio: 1.00, slopeMean: 0.767, biasMean: 0.992, rSquareMean: 0.981 },
                { id: 'L55-40', miuLeft: 55, magnRatio: 0.72, slopeMean: 0.68, biasMean: 0.79, rSquareMean: 0.96 },
                { id: 'L70-40', miuLeft: 70, magnRatio: 0.57, slopeMean: 0.67, biasMean: 0.66, rSquareMean: 0.98 },

            ]
        },
    ]


    let xxx = [baselineData, biasData]

    return xxx
}



/* 



        // Original	19	L10-40	4 to 1  (L10-40)	0.10	0.8575	2.3500	0.9933
        // Original	19	L25-40	1.6 to 1  (L25-40)		0.85	1.41	0.99
        // Original	19	L55-40	0.7 to 1  (L55-40)		0.81	0.84	0.99
        // Original	19	L70-40	0.6 to 1  (L70-40)		0.84	0.71	0.98
        // Python	19	L10-40	4 to 1  (L10-40)			2.05	0.99
        // Python	19	L25-40	1.6 to 1  (L25-40)		0.85	1.38	0.99
        // Python	19	L55-40	0.7 to 1  (L55-40)		0.82	0.84	0.97
        // Python	19	L70-40	0.6 to 1  (L70-40)		0.80	0.70	0.99
        // Python_NBT	19	L10-40	4 to 1  (L10-40)				
        // Python_NBT	19	L25-40	1.6 to 1  (L25-40)		0.82	1.47	0.99
        // Python_NBT	19	L55-40	0.7 to 1  (L55-40)		0.68	0.79	0.96
        // Python_NBT	19	L70-40	0.6 to 1  (L70-40)		0.67	0.66	0.98
        





ran by	Reinforcement Rate	Reinforcer Magnitude (µ)	Magnitude label	Mutation Rate (%)	Sensitivity (a)	Bias (b)	R2
Original	19	L10-40	4 to 1  (L10-40)	0.10	0.8575	2.3500	0.9933
Original	19	L25-40	1.6 to 1  (L25-40)	0.10	0.85	1.41	0.99
Original	19	L55-40	0.7 to 1  (L55-40)	0.10	0.81	0.84	0.99
Original	19	L70-40	0.6 to 1  (L70-40)	0.10	0.84	0.71	0.98

Python	19	L10-40	4 to 1  (L10-40)	0.10	0.8615599	2.05	0.99
Python	19	L25-40	1.6 to 1  (L25-40)	0.10	0.85	1.38	0.99
Python	19	L55-40	0.7 to 1  (L55-40)	0.10	0.82	0.84	0.97
Python	19	L70-40	0.6 to 1  (L70-40)	0.10	0.80	0.70	0.99
Python_NBT	19	L10-40	4 to 1  (L10-40)	0.10			
Python_NBT	19	L25-40	1.6 to 1  (L25-40)	0.10	0.82	1.47	0.99
Python_NBT	19	L55-40	0.7 to 1  (L55-40)	0.10	0.68	0.79	0.96
Python_NBT	19	L70-40	0.6 to 1  (L70-40)	0.10	0.67	0.66	0.98


ran by	Reinforcement Rate	Reinforcer Magnitude (µ)	Magnitude label	Mutation Rate (%)	sensitivity (a)	bias (b)	R2
Original	19	L40-40	1 to 1	10%	0.823	0.985	0.984
Python	19	L40-40	1 to 1	10%	0.835	1.002	0.985
Python_NBT	19	L40-40	1 to 1	10%	0.767	0.992	0.981


ran by	run/rep	Reinforcement Rate	Reinforcer Magnitude (µ)	Mutation Rate (%)	sensitivity (a)	bias (b)	R2
Original	C039 	19	L40-40	10%	0.84	1.01	0.99
Original	C040 	19	L40-40	10%	0.85	1.03	0.99
Original	C041 	19	L40-40	10%	0.80	0.92	0.98
Original	C042 	19	L40-40	10%	0.80	0.98	0.98
Original	C043 	19	L40-40	10%	0.87	1.03	0.98
Original	C044 	19	L40-40	10%	0.77	0.90	0.97
Original	C045 	19	L40-40	10%	0.82	1.03	1.00
Original	C046 	19	L40-40	10%	0.83	0.95	0.99
Original	C048 	19	L40-40	10%	0.76	0.99	0.98
Original	C049 	19	L40-40	10%	0.89	1.01	0.98
Python	1	19	L40-40	10%	0.90	1.01	0.99
Python	2	19	L40-40	10%	0.80	0.99	0.96
Python	3	19	L40-40	10%	0.84	1.05	1.00
Python	4	19	L40-40	10%	0.79	1.07	0.99
Python	5	19	L40-40	10%	0.80	1.00	0.98
Python	6	19	L40-40	10%	0.88	0.95	0.99
Python	7	19	L40-40	10%	0.83	0.99	0.99
Python	8	19	L40-40	10%	0.87	0.99	0.98
Python	9	19	L40-40	10%	0.89	0.97	0.99
Python	10	19	L40-40	10%	0.76	1.00	0.98
Python_NBT	1	19	L40-40	10%	0.766	1.011	0.987
Python_NBT	2	19	L40-40	10%	0.749	0.943	0.989
Python_NBT	3	19	L40-40	10%	0.757	0.978	0.971
Python_NBT	4	19	L40-40	10%	0.783	1.023	0.969
Python_NBT	5	19	L40-40	10%	0.795	0.955	0.98
Python_NBT	6	19	L40-40	10%	0.73	1.004	0.978
Python_NBT	7	19	L40-40	10%	0.772	1.04	0.98
Python_NBT	8	19	L40-40	10%	0.785	0.982	0.99

 */