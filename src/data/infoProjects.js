import projectAutomata1 from '../assets/prj_img_imperfect_automata.jpg'
import projectCardSorting from '../assets/prj_img_personal_values.png'
import projectPsych from '../assets/Jackson_Pollock_1952.jpg'
import pure_refuge from '../assets/pure_refuge.png'
import aquerous_plains from '../assets/aquerous_plains.png'
import placeholder from '../assets/placeholder.png'

import ow01 from '../assets/2018_oxford_writing/ow01.png' 
import ow02 from '../assets/2018_oxford_writing/ow02.png' 
import ow03 from '../assets/2018_oxford_writing/ow03.png' 
import ow04 from '../assets/2018_oxford_writing/ow04.png' 
import ow05 from '../assets/2018_oxford_writing/ow05.png' 
import ow06 from '../assets/2018_oxford_writing/ow06.png' 
import ow07 from '../assets/2018_oxford_writing/ow07.png' 
import ow08 from '../assets/2018_oxford_writing/ow08.png' 
import ow09 from '../assets/2018_oxford_writing/ow09.png' 
import ow10 from '../assets/2018_oxford_writing/ow10.png' 


var infoProjects = [

    // {
    //     id: 0,
    //     date: "2019-2021",

    //     title: 'Training / Certifications',
    //     description: "xxxxxxxxx",
    //     img: ["certificates"],
    //     urls: [
    //         { name: "Google Drive", link: 'xxxxxxxxxxxxxx' },
    //         //{ name: "repo", link: 'https://github.com/ap-dev1/clock_in' },
    //     ]
    // },


    {
        id: 1,
        date: "2021",

        title: 'Aqueros Plains',
        description: "An experimental approach to work and time management. Integrates WebSockets, React JS, Express, MongoAtlas, and Node JS. A work in progress.",
        img: [aquerous_plains],
        urls: [
            { name: "demo", link: 'https://aqueous-plains-89974.herokuapp.com' },
            { name: "repo", link: 'https://github.com/ap-dev1/clock_in' },
        ]
    },

    {
        id: 2,
        date: "2021",

        title: "Pure Refuge",
        description: 'This project deals with emergence and learning. Muro et al (2011) showed that group behavior that looks planned and coordinated does not <i>require</i> planning or communication. They instantiated wolves driven by low-level rules - follow the bison, but not too close - and successfully recreated hunting "strategies" observed in the wild. My goal is to implement wolves driven by more basic tendencies, like avoid harm, and to allow the agents to learn the rules. If the learning account is complete and robust (Popa, 2019), the right implementation should produce group behavior similar to that reported by Muro et al (2011). Technology-wise, this is a bridge between Python and D3, in a React-Express environment.',
        img: [pure_refuge],
        urls: [
            {name: "demo", link: 'https://pure-refuge-75977.herokuapp.com/'},
            {name: "repo",  link: 'https://github.com/ap-dev1/wolves3'},
        ],
        citation: '',
    },

    {
        id: 3,
        date: "10/2020",

        title: 'Card Sorting App',
        description: 'My first MERN sandbox. Front-back communication is facilitated by Axios. The front-end was enhanced with Styled Components and Semantic-ui. Before switching to MongoDB/Atlas, the app was relying on AWS: DynamoDB for authentication and RDS for storing user data. A useful learning experience.',
        img: [projectCardSorting],
        urls: [
            {name: "GitHub" , link:'https://github.com/ap-dev1/personal_values'},
        ],
        citation: '',
    },

    {
        id: 4,
        date: "09/2019",

        title: 'Imperfect Automata',
        description: 'Unlike biological systems, automata are deterministic systems, governed by precise rules. The question examined here was: what if every new cell has a small probability to be written incorrectly, i.e. to "mutate" from 0 to 1 or viceversa. ... Low mutation probabilities facilitated the emergence of new patterns and structures, disconnected from the initial conditions. ...',
        img: [projectAutomata1],
        urls: [
            {name: "PsyArXiv", link:'https://psyarxiv.com/wgp4e/'},
            {name: "GitHub", link:'https://github.com/ap-dev1/automata/'},
        ],
        citation: 'Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.',
    },

    {
        id: 5,
        date: "09/2019",

        title: 'The Emergence of You',
        description: 'Physical forces acting on particles explain how physical systems change over time. Evolutionary forces acting on populations of genomes explain change in the genetic structure of populations across generations. Change in psychological systems - i.e. human development, or learning - is not yet understood. Although dynamic principles have been proposed, their target remained vaguely defined. What are such principles acting on, what kind of empirical transformations do they cause, and how do these transformations explain development?',
        img: [projectPsych],
        urls: [
            {name: "ResearchGate", link:'https://www.researchgate.net/publication/335688963_Psychology_20_The_Emergence_of_Individuality'},
            {name: 'PsyArXiv', link: 'https://psyarxiv.com/m87an/'}
        ],
        citation: 'Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.',
    },



    // {
    //     title: 'Towards a dynamic account of human development',
    //     date: "05/2017",
    //     id: 9,
    //     description: '',
    //     img: [placeholder],
    //     citation: "ABAI 2017",
    //     urls: [
    //         //{name: "xxx", link:'xxx'},
    //         //{name: 'xxx', link: 'xxx'}
    //     ],
    // },



    
    {
        id: 6,
        title: 'ETBD.py',
        date: "09/2018",
        description: 'This evolutionary theory of behavior dynamics is similar to the one described in McDowell (2004). ... ',
        img: [placeholder, placeholder,placeholder, placeholder],
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'GitHub', link: 'xxx'}
        ],
        citation: '(capstone project for Python bootcamp I took in 2018)',
    },

   
    {
        title: 'Triangles!',
        id: 7,
        date: "04/2018",
        description: 'A laboratory invstigation in the effects of positive and negative reinforcement on learning... (Emory University, Oxford College Campus, 2018; with Kenneth Carter)',
        img: [placeholder, placeholder, placeholder,placeholder, placeholder, placeholder],
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        citation: "(Emory University, Oxford College Campus, 2018; with Kenneth Carter)"
    },


    // {
    //     title: 'Writing with purpose',
    //     date: "04/2018",
    //     id: 8,
    //     description: 'A talk about the role of purpose in structuring our ideas and their written expression.',
    //     img: [ow02, ow03, ow04, ow05, ow06, ow07, ow08, ow09, ow10],
    //     citation: "(Emory University, Oxford Campus, 2018)",
    //     urls: [
    //         //{name: "xxx", link:'xxx'},
    //         //{name: 'xxx', link: 'xxx'}
    //     ],
    // },








    {
        title: 'Escape behavior on extinction',
        date: "02/2017",
        type: "talk",

        id: 10,
        description: 'A laboratory invstigation in the effects of positive and negative reinforcement on learning... (Emory University, Oxford College Campus, 2018; with Kenneth Carter)',
        img: [placeholder],
        citation: "WCALB, 2017",
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        
    },



    {
        title: 'Behavioral Variability in ETBD',
        date: "03/2016",
        id:22 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "Popa, A., & McDowell, J, J. (2016). Behavioral Variability in an Evolutionary Theory of Behavior Dynamics. The Journal of the Experimental Analysis of Behavior, 105 (2), 270-290.",
        urls: [
            {name: "JEAB", link:'http://onlinelibrary.wiley.com/doi/10.1002/jeab.199/abstract'},
            {name: 'ResearchGate', link: 'xxx'},
            {namne: "Google Scholar", link: ""}
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
        id:23 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "Popa (2013). An Evolutionary Theory of Behavior Dynamics - Complexity, Darwinism, and the Emergence of High-Level Phenotypes. Doctoral Dissertation. Retrieved: https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en. ISBNxxxxxxxxxxxxxxx",
        urls: [
            {name: "Emory ETD", link:'https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en'},
            {name: "ProQuest", link:'xxx'},
            {name: 'ResearchGate', link: 'xxx'},
            {name: "Google Scholar", link: "xxxx"},
            {name: "Study info, IRB, ...", link: "xxxx"},
        ],
        
    },



    {
        title: 'Social Entanglementnntmtntmtntntnt',
        date: "04/2012",
        id:24 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "find manuscript.",
        urls: [
            {name: "O.R.D.E.R.", link:'xxx'},
            {name: "Google Drive", link:'xxx'},
        ],
    },


    


    {
        title: 'Bivariate Matching',
        date: "03/2012",
        id:25 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "McDowell, J, J., Popa, A., & Calvin, N. (2012). Selection Dynamics in Joint Matching to Rate and Magnitude of Reinforcement. Journal of the Experimental Analysis of Behavior, 98, 199-212.",
        urls: [
            {name: "JEAB ?? ", link:'http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3449856/'},
            {name: "ProQuest", link:'xxx'},
            {name: 'ResearchGate', link: 'xxx'},
            {name: "Google Scholar", link: "xxxx"},
        ],
        
    },



    {
        title: 'Toward a mechanics of adaptive behavior',
        date: "06/2010",
        id:27 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "McDowell, J. J, & Popa, A. (2010). Toward a mechanics of adaptive behavior: Evolutionary dynamics and matching theory statics. Journal of the Experimental Analysis of Behavior, 94, 241-260.",
        urls: [
            {name: "JEAB ?? ", link:'http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2929088/'},
            {name: "ProQuest", link:'xxx'},
            {name: 'ResearchGate', link: 'xxx'},
            {name: "Google Scholar", link: "xxxx"},
        ],
        
    },



    {
        title: 'Hamming Distances and Changeover Delays',
        date: "08/2010",
        id:28 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "Popa, A., & McDowell, J. J. (2010). The effect of Hamming distances in a computational model of selection by consequences. Behavioural Processes, 84, 428-434.",
        urls: [
            {name: "JEAB ?? ", link:'http://www.ncbi.nlm.nih.gov/pubmed/20152891'},
            {name: "ProQuest", link:'xxx'},
            {name: 'ResearchGate', link: 'xxx'},
            {name: "Google Scholar", link: "xxxx"},
        ],
        
    },




    {
        title: 'Master of Arts',
        date: "12/2009",
        id:29 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "Popa (2009). The Effects of Hamming Distances in a Computational Model of Selection by Consequences. Masters Thesis. Retrieved: https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en",
        urls: [
            {name: "Emory ETD", link:'https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en'},
            {name: "ProQuest", link:'xxx'},
            {name: 'ResearchGate', link: 'xxx'},
            {name: "Google Scholar", link: "xxxx"},
        ],
        
    },





    {
        title: 'Mathematical models of behavior applied to Elementary Cellular Automata',
        date: "2009",
        id:29 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "McDowell, J. J, & Popa, A. (2009). Beyond continuous mathematics and traditional scientific analysis: Understanding and mining Wolfram's A new kind of science. Behavioural Processes, 81, 343-352.",
        urls: [
            {name: "Pubmed", link:'http://www.ncbi.nlm.nih.gov/pubmed/19429227'},
            {name: "ProQuest", link:'xxx'},
            {name: 'ResearchGate', link: 'xxx'},
            {name: "Google Scholar", link: "xxxx"},
        ],
        
    },





]


export default infoProjects;
