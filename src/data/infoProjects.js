import projectAutomata1 from '../assets/prj_img_imperfect_automata.jpg'
// import projectCardSorting from '../assets/prj_img_personal_values.png'
import projectPsych from '../assets/Jackson_Pollock_1952.jpg'
// import pure_refuge from '../assets/pure_refuge.png'
// import aquerous_plains from '../assets/aquerous_plains.png'
import placeholder from '../assets/placeholder.png'

import bivariate2012_01 from '../assets/bivariate2012_01.png'
import bivariate2012_02 from '../assets/bivariate2012_02.png'


var infoProjects = [

   
    
    // {title: 'Imperfect Automata', date: "03/08/2019",
    //     tags: ["Python", "Tkinter"],
    //     description: "Unlike biological systems, automata are deterministic systems, governed by precise rules. The question examined here was: what if every new cell has a small probability to be written incorrectly, i.e. to mutate from 0 to 1 or viceversa. ... Low mutation probabilities facilitated the emergence of new patterns and structures, disconnected from the initial conditions.", 
    //     img: [projectAutomata1],
    //     urls: [
    //         { name: "PsyArXiv", link: "https://psyarxiv.com/wgp4e/" },
    //         { name: "GitHub", link: "https://github.com/ap-dev1/automata/" },
    //         { name: "ResGate", link: "https://www.researchgate.net/publication/336143797_Imperfect_Automata_Effects_of_mutation_on_the_evolution_of_automaton_01101110_Rule_110" }
    //     ],
    //     citation: "Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.",
    // },


    {
        id: 5,
        date: "2019",
        role: "PRINCIPAL INVESTIGATOR",
        tags: ["Problem Solving"],

        title: 'The Emergence of You',
        description: 'Physical forces acting on particles explain how physical systems change over time. Evolutionary forces acting on populations of genomes explain change in the genetic structure of populations across generations. Change in psychological systems - i.e. human development, or learning - is not yet understood. Although dynamic principles have been proposed, their target remained vaguely defined. What are such principles acting on, what kind of empirical transformations do they cause, and how do these transformations explain development?',
        img: [projectPsych],
        urls: [
            { name: 'PsyArXiv', link: 'https://psyarxiv.com/m87an/' },
            { name: "ResGate", link: 'https://www.researchgate.net/publication/335688963_Psychology_20_The_Emergence_of_Individuality' },
        ],
        citation: 'Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.',
    },



    // {
    //     id: 6,
    //     title: 'ETBD.py',
    //     date: "09/15/2018",
    //     role: "Principal Investigator",
    // tags: "Python, SciPy, SQLite, Postgres" ,


    //     description: 'This evolutionary theory of behavior dynamics is similar to the one described in McDowell (2004). ... ',
    //     img: [placeholder, placeholder,placeholder, placeholder],
    //     urls: [
    //         //{name: "xxx", link:'xxx'},
    //         //{name: 'GitHub', link: 'xxx'}
    //     ],
    //     citation: '(capstone project for Python bootcamp I took in 2018)',
    // },

    {
        title: 'Triangles!',
        date: "2018",
        role: "PRINCIPAL INVESTIGATOR",
        id: 7,
        tags: ["VB.NET", "Python", "Pandas", "SciPy", "Matplotlib"],

        description: 'A laboratory invstigation in the effects of positive and negative reinforcement on learning... (Emory University, Oxford College Campus, 2018; with Kenneth Carter)',
        img: [placeholder, placeholder, placeholder, placeholder, placeholder, placeholder],
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        citation: "(Emory University, Oxford College Campus, 2018; with Kenneth Carter)"
    },




    {
        title: 'Escape behavior on extinction',
        date: "2017",
        role: "PRINCIPAL INVESTIGATOR",
        tags: ["VB.NET", "VBA/Excel", "hypothesis testing", "ensemble fitting", "residual analysis", "model selection"],

        id: 10,
        description: 'A laboratory invstigation in the effects of positive and negative reinforcement on learning... Research conducted in 2016, at Agnes Scott College',
        img: [placeholder],
        citation: "WCALB, 2017",
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],

    },



    {
        title: 'Behavioral Variability in ETBD',
        date: "2016",
        role: "PRINCIPAL INVESTIGATOR",
        tags: ["VB.NET"],

        id: 22,
        description: 'xxxx',
        img: [placeholder],
        citation: "Popa, A., & McDowell, J, J. (2016). Behavioral Variability in an Evolutionary Theory of Behavior Dynamics. The Journal of the Experimental Analysis of Behavior, 105 (2), 270-290.",
        urls: [
            { name: "JEAB", link: 'http://onlinelibrary.wiley.com/doi/10.1002/jeab.199/abstract' },
            { name: 'ResearchGate', link: 'https://www.researchgate.net/publication/299382923_Behavioral_variability_in_an_evolutionary_theory_of_behavior_dynamics' },
        ],
    },




    // {
    //     title: 'Darwin Days 2015, 2016',
    //     id: 7,
    //     date: "04/2018",
    //     description: 'A laboratory invstigation in the effects of positive and negative reinforcement on learning... (Emory University, Oxford College Campus, 2018; with Kenneth Carter)',
    //     img: [placeholder, placeholder, placeholder,placeholder, placeholder, placeholder],
    //     urls: [
    //         //{name: "xxx", link:'xxx'},
    //         //{name: 'xxx', link: 'xxx'}
    //     ],
    //     citation: "(Emory University, Oxford College Campus, 2018; with Kenneth Carter)"
    // },



    // {
    //     title: 'SpARC',
    //     date: "04/2016",

    //     id: 1111111111111111111111111111111111111111,
    //     description: 'A series of studies on discriminative learning and negative reinforcement in humans.',
    //     citation: "SpARC, 2016",
    //     urls: [
    //         //{name: "xxx", link:'xxx'},
    //         //{name: 'xxx', link: 'xxx'}
    //     ],
    //     img: [placeholder],

    // },




    {
        title: 'Doctor of Philosophy',
        date: "12/2013",
        role: "PRINCIPAL INVESTIGATOR",

        tags: ["VB.NET", "VBA/Excel"],

        id: 23,
        description: 'xxxx',
        img: [placeholder],
        citation: "Popa (2013). An Evolutionary Theory of Behavior Dynamics - Complexity, Darwinism, and the Emergence of High-Level Phenotypes. Doctoral Dissertation. Retrieved: https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en. ISBNxxxxxxxxxxxxxxx",
        urls: [
            { name: "Emory ETD", link: 'https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en' },
            { name: "ProQuest", link: 'xxx' },
            { name: "Study info", link: "xxxx" },
        ],
    },



    {
        title: 'Social Entanglementnntmtntmtntntnt',
        date: "05/10/2012",
        role: "Study Coordinator (as O.R.D.E.R. fellow)",
        tags: ["David Lynn, ", " ---- ---  "],
        id: 24,
        description: "On Recent Discoveries by Emory Researchers, or ORDER, is a  ... fellowship ...  Course: Complexity and Emergence: Implications for Psychology ... Teacher/Scholar Fellowship; Research Project: Conformity at a Distance; ... Howard Hughes Teacher/Scholar Award; ...  Fellowship Advisory Board",
        img: [placeholder],
        citation: "find manuscript.",
        urls: [
            { name: "O.R.D.E.R.", link: "http://www.order.emory.edu/about/index.html" },
            { name: "Google Drive", link: 'xxx' },
        ],
    },





    {
        title: 'Bivariate Matching',
        date: "2012",
        role: "CO-INVESTIGATOR",
        tags: ["VBA/Excel", "hypothesis testing", "ensemble fitting", "residual analysis", "model selection"],

        id: 25,
        description: "Virtual organisms animated by a selectionist theory of behavior dynamics worked on concurrent random interval schedules where both the rate and magnitude of reinforcement were varied. The selectionist theory consists of a set of simple rules of selection, recombination, and mutation that act on a population of potential behaviors by means of a genetic algorithm. An extension of the power function matching equation, which expresses behavior allocation as a joint function of exponentiated reinforcement rate and reinforcer magnitude ratios, was fitted to the virtual organisms’ data, and over a range of moderate mutation rates was found to provide an excellent description of their behavior without residual trends.The mean exponents in this range of mutation rates were 0.83 for the reinforcement rate ratio and 0.68 for the reinforcer magnitude ratio, which are values that are comparable to those obtained in experiments with live organisms.These findings add to the evidence supporting the selectionist theory, which asserts that the world of behavior we observe and measure is created by evolutionary dynamics.",

        img: [bivariate2012_01, bivariate2012_02, ],
        citation: "McDowell, J, J., Popa, A., & Calvin, N. (2012). Selection Dynamics in Joint Matching to Rate and Magnitude of Reinforcement. Journal of the Experimental Analysis of Behavior, 98, 199-212.",
        urls: [
            { name: "NCBI", link: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3449856/" },
            { name: "ResGate", link: "https://www.researchgate.net/profile/Andrei_Popa5" },
        ],

    },



    {
        title: 'Toward a mechanics of adaptive behavior',
        date: "2010",
        role: "CO-INVESTIGATOR",
        tags: ["VBA/Excel", "hypothesis testing", "ensemble fitting", "residual analysis", "model selection"],
                id: 27,
        description: 'xxxx',
        img: [placeholder],
        citation: "McDowell, J. J, & Popa, A. (2010). Toward a mechanics of adaptive behavior: Evolutionary dynamics and matching theory statics. Journal of the Experimental Analysis of Behavior, 94, 241-260.",
        urls: [
            { name: "JEAB ?? ", link: 'http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2929088/' },
            { name: 'ResGate', link: 'https://www.researchgate.net/publication/50937156_Toward_a_Mechanics_of_Adaptive_Behavior_Evolutionary_Dynamics_and_Matching_Theory_Statics' },
        ],
    },



    {
        title: 'Hamming Distances and Changeover Delays',
        date: "2010",
        role: "Principal Investigator",
        tags: ["VBA/Excel", "hypothesis testing", "ensemble fitting", "residual analysis", "model selection"],
        id: 28,
        description: 'My M.A. project (December 2009) and my first peer-reviewed publication as first author',
        img: [""],
        citation: "Popa, A., & McDowell, J. J. (2010). The effect of Hamming distances in a computational model of selection by consequences. Behavioural Processes, 84, 428-434.",
        urls: [
            { name: "Pubmed", link: 'http://www.ncbi.nlm.nih.gov/pubmed/20152891' },
            { name: 'ReshGate', link: 'https://www.researchgate.net/publication/41427297_The_effect_of_Hamming_distances_in_a_computational_model_of_selection_by_consequences' },
            { name: "Emory ETD", link: 'https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en' },
            { name: "ProQuest", link: 'xxx' }
        ],
    },



    {
        title: 'Mathematical models of behavior applied to Elementary Cellular Automata',
        date: "2009",
        role: "CO-INVESTIGATOR",
        tags: ["VBA/Excel", "hypothesis testing", "ensemble fitting", "residual analysis", "model selection"],
        id: 29,
        description: 'xxxx',
        img: ['https://www.ncbi.nlm.nih.gov/pubmed/19429227'],
        citation: "McDowell, J. J, & Popa, A. (2009). Beyond continuous mathematics and traditional scientific analysis: Understanding and mining Wolfram's A new kind of science. Behavioural Processes, 81, 343-352.",
        urls: [
            { name: "Pubmed", link: 'http://www.ncbi.nlm.nih.gov/pubmed/19429227' },
            { name: 'ResGate', link: "https://www.researchgate.net/publication/24414894_Beyond_continuous_mathematics_and_traditional_scientific_analysis_Understanding_and_mining_Wolfram's_A_New_Kind_of_Science" },
        ],
    },





]


export default infoProjects;
