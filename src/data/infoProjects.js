import projectAutomata1 from '../assets/prj_img_imperfect_automata.jpg'
import projectCardSorting from '../assets/prj_img_personal_values.png'
import projectPsych from '../assets/Jackson_Pollock_1952.jpg'
import pure_refuge from '../assets/pure_refuge.png'
import aquerous_plains from '../assets/aquerous_plains.png'
import placeholder from '../assets/placeholder.png'


var infoProjects = [

    {
        id: 1,
        date: "2021",
        role: "",
        tags: "MongoDB/Atlas, Node/Express, React",
        title: 'Aqueros Plains',
        description: "A different approach to work and time management. Integrates WebSockets, React JS, Express, MongoAtlas, and Node JS. A work in progress.",
        img: [aquerous_plains],
        urls: [
            { name: "Demo", link: 'https://aqueous-plains-89974.herokuapp.com' },
            { name: "GitHub", link: 'https://github.com/ap-dev1/clock_in' },
        ]
    },

    {
        id: 2,
        date: "2021",
        role: "",
        tags: "Python, Node, Websockets, React, D3",
        title: "Pure Refuge",
        description: 'This project deals with emergence and learning. Muro et al (2011) showed that group behavior that looks planned and coordinated does not <i>require</i> planning or communication. They instantiated wolves driven by low-level rules - follow the bison, but not too close - and successfully recreated hunting "strategies" observed in the wild. My goal is to implement wolves driven by more basic tendencies, like avoid harm, and to allow the agents to learn the rules. If the learning account is complete and robust (Popa, 2019), the right implementation should produce group behavior similar to that reported by Muro et al (2011). Technology-wise, this is a bridge between Python and D3, in a React-Express environment.',
        img: [pure_refuge],
        urls: [
            { name: "Demo", link: 'https://pure-refuge-75977.herokuapp.com/' },
            { name: "GitHub", link: 'https://github.com/ap-dev1/wolves3' },
        ],
        citation: '',
    },

    {
        id: 3,
        date: "2020",
        role: "",
        tags: "MongoDB/Atlas, Node/Express, React",
        title: 'Card Sorting App',
        description: 'My first MERN app. Before switching to MongoDB/Atlas, the app was relying on AWS: DynamoDB for authentication and RDS for storing user data. ',
        img: [projectCardSorting],
        urls: [
            { name: "GitHub", link: 'https://github.com/ap-dev1/personal_values' },
        ],
        citation: '',
    },

    {
        id: 4,
        date: "2019",
        title: 'Imperfect Automata',
        tags: "Python, Tkinter",
        description: 'Unlike biological systems, automata are deterministic systems, governed by precise rules. The question examined here was: what if every new cell has a small probability to be written incorrectly, i.e. to "mutate" from 0 to 1 or viceversa. ... Low mutation probabilities facilitated the emergence of new patterns and structures, disconnected from the initial conditions.',
        img: [projectAutomata1],
        urls: [
            { name: "PsyArXiv", link: 'https://psyarxiv.com/wgp4e/' },
            { name: "GitHub", link: 'https://github.com/ap-dev1/automata/' },
            { name: "ResearchGate", link: "https://www.researchgate.net/publication/336143797_Imperfect_Automata_Effects_of_mutation_on_the_evolution_of_automaton_01101110_Rule_110" }
        ],
        citation: 'Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.',
    },

    {
        id: 5,
        date: "2019",
        //role: "Principal Investigator",
        tags: "Problem Solving",

        title: 'The Emergence of You',
        description: 'Physical forces acting on particles explain how physical systems change over time. Evolutionary forces acting on populations of genomes explain change in the genetic structure of populations across generations. Change in psychological systems - i.e. human development, or learning - is not yet understood. Although dynamic principles have been proposed, their target remained vaguely defined. What are such principles acting on, what kind of empirical transformations do they cause, and how do these transformations explain development?',
        img: [projectPsych],
        urls: [
            { name: 'PsyArXiv', link: 'https://psyarxiv.com/m87an/' },
            { name: "ResearchGate", link: 'https://www.researchgate.net/publication/335688963_Psychology_20_The_Emergence_of_Individuality' },
        ],
        citation: 'Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.',
    },


    // {
    //     id: 6,
    //     title: 'ETBD.py',
    //     date: "09/2018",
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
        role: "Principal Investigator",
        id: 7,
        tags: "VB.Net, Python, Pandas, SciPy, Matplotlib",

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
        role: "Principal Investigator",
        tags: "VB.Net, VBA (Excel macros)",

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
        role: "Principal Investigator",
        tags: "VB.Net, VBA (Excel macros)",

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
        role: "Principal Investigator",
        tags: "VB.Net, VBA (Excel macros)",

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
        date: "2012",
        role: "Study Coordinator (as O.R.D.E.R. fellow)",
        id: 24,
        description: 'xxxx',
        img: [placeholder],
        citation: "find manuscript.",
        urls: [
            { name: "O.R.D.E.R.", link: 'xxx' },
            { name: "Google Drive", link: 'xxx' },
        ],
    },





    {
        title: 'Bivariate Matching',
        date: "2012",
        role: "co-investigator",
        tags: "VBA/Excel, ensemble fitting, residual analysis, model selection",

        id: 25,
        description: 'xxxx',
        img: [placeholder],
        citation: "McDowell, J, J., Popa, A., & Calvin, N. (2012). Selection Dynamics in Joint Matching to Rate and Magnitude of Reinforcement. Journal of the Experimental Analysis of Behavior, 98, 199-212.",
        urls: [
            { name: "JEAB ?? ", link: 'http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3449856/' },
            { name: 'ResearchGate', link: 'https://www.researchgate.net/publication/231176507_Selection_dynamics_in_joint_matching_to_rate_and_magnitude_of_reinforcement' },
        ],

    },



    {
        title: 'Toward a mechanics of adaptive behavior',
        date: "2010",
        role: "co-investigator",
        tags: "VBA/Excel, ensemble fitting, residual analysis, model selection",
        id: 27,
        description: 'xxxx',
        img: [placeholder],
        citation: "McDowell, J. J, & Popa, A. (2010). Toward a mechanics of adaptive behavior: Evolutionary dynamics and matching theory statics. Journal of the Experimental Analysis of Behavior, 94, 241-260.",
        urls: [
            { name: "JEAB ?? ", link: 'http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2929088/' },
            { name: 'ResearchGate', link: 'https://www.researchgate.net/publication/50937156_Toward_a_Mechanics_of_Adaptive_Behavior_Evolutionary_Dynamics_and_Matching_Theory_Statics' },
        ],
    },



    {
        title: 'Hamming Distances and Changeover Delays',
        date: "2010",
        role: "Principal Investigator",
        tags: "VBA/Excel, ensemble fitting, residual analysis, model selection",
        id: 28,
        description: 'My M.A. project (December 2009) and my first peer-reviewed publication as first author',
        img: [placeholder],
        citation: "Popa, A., & McDowell, J. J. (2010). The effect of Hamming distances in a computational model of selection by consequences. Behavioural Processes, 84, 428-434.",
        urls: [
            { name: "JEAB ?? ", link: 'http://www.ncbi.nlm.nih.gov/pubmed/20152891' },
            { name: 'ResearchGate', link: 'https://www.researchgate.net/publication/41427297_The_effect_of_Hamming_distances_in_a_computational_model_of_selection_by_consequences' },
            { name: "Emory ETD", link: 'https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en' },
            { name: "ProQuest", link: 'xxx' }
        ],
    },



    {
        title: 'Mathematical models of behavior applied to Elementary Cellular Automata',
        date: "2009",
        role: "co-investigator",
        tags: "VBA/Excel, ensemble fitting, residual analysis, model selection",
        id: 29,
        description: 'xxxx',
        img: [placeholder],
        citation: "McDowell, J. J, & Popa, A. (2009). Beyond continuous mathematics and traditional scientific analysis: Understanding and mining Wolfram's A new kind of science. Behavioural Processes, 81, 343-352.",
        urls: [
            { name: "Pubmed", link: 'http://www.ncbi.nlm.nih.gov/pubmed/19429227' },
            { name: 'ResearchGate', link: "https://www.researchgate.net/publication/24414894_Beyond_continuous_mathematics_and_traditional_scientific_analysis_Understanding_and_mining_Wolfram's_A_New_Kind_of_Science" },
        ],
    },





]


export default infoProjects;
