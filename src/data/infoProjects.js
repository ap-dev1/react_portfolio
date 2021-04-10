import projectAutomata1 from '../assets/prj_img_imperfect_automata.jpg'
import projectCardSorting from '../assets/prj_img_personal_values.png'
import projectPsych from '../assets/Jackson_Pollock_1952.jpg'
import pure_refuge from '../assets/pure_refuge.png'
import aquerous_plains from '../assets/aquerous_plains.png'
import placeholder from '../assets/placeholder.png'


var infoProjects = [
    {
        id: 1,
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
        title: 'Card Sorting App',
        description: 'My first MERN sandbox. Front-back communication is facilitated by Axios. The front-end was enhanced with Styled Components and Semantic-ui. Before switching to MongoDB/Atlas, the app was relying on AWS: DynamoDB for authentication and RDS for storing user data. A useful learning experience.',
        img: [projectCardSorting],
        urls: [
            {name: "repo" , link:'https://github.com/ap-dev1/personal_values'},
        ],
        citation: '',
    },

    {
        id: 4,
        title: 'Imperfect Automata',
        description: 'Unlike biological systems, automata are deterministic systems, governed by precise rules. The question examined here was: what if every new cell has a small probability to be written incorrectly, i.e. to "mutate" from 0 to 1 or viceversa. ... Low mutation probabilities facilitated the emergence of new patterns and structures, disconnected from the initial conditions. ...',
        img: [projectAutomata1],
        urls: [
            {name: "PsyArXiv", link:'https://psyarxiv.com/wgp4e/'},
            {name: "repo", link:'https://github.com/ap-dev1/automata/'},
        ],
        citation: 'Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.',
    },

    {
        id: 5,
        title: 'The Emergence of You',
        description: 'Physical forces acting on particles explain how physical systems change over time. Evolutionary forces acting on populations of genomes explain change in the genetic structure of populations across generations. Change in psychological systems - i.e. human development, or learning - is not yet understood. Although dynamic principles have been proposed, their target remained vaguely defined. What are such principles acting on, what kind of empirical transformations do they cause, and how do these transformations explain development?',
        img: [projectPsych],
        urls: [
            {name: "ResearchGate", link:'https://www.researchgate.net/publication/335688963_Psychology_20_The_Emergence_of_Individuality'},
            {name: 'PsyArXiv', link: 'https://psyarxiv.com/m87an/'}
        ],
        citation: 'Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.',
    },

    {
        id: 6,
        title: 'ETBD.py',
        description: 'This evolutionary theory of behavior dynamics is similar to the one described in McDowell (2004). ... ',
        img: [placeholder, placeholder,placeholder, placeholder],
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        citation: '(capstone project for Python bootcamp I took in 2018)',
    },

   
    {
        title: 'Triangles!',
        id: 7,
        description: 'A laboratory invstigation in the effects of positive and negative reinforcement on learning... (Emory University, Oxford College Campus, 2018; with Kenneth Carter)',
        img: [placeholder, placeholder, placeholder,placeholder, placeholder, placeholder],
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        citation: "(Emory University, Oxford College Campus, 2018; with Kenneth Carter)"
    },

    {
        title: 'Writing with purpose',
        id: 8,
        description: 'A talk about the role of purpose in structuring our ideas and their written expression.',
        img: [placeholder, placeholder, projectAutomata1, pure_refuge],
        citation: "(Emory University, Oxford College Campus, 2018)",
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        
    },

    {
        title: 'Towards a dynamic account of human development',
        id: 9,
        description: '',
        img: [placeholder],
        citation: "ABAI 2017",
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        
    },

    {
        title: 'Escape behavior on extinction',
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
        title: 'SpARC',
        date: "2016",
        id: 1111111111111111111111111111111111111111,
        description: 'A series of studies on discriminative learning and negative reinforcement in humans.',
        citation: "SpARC, 2016",
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        img: [placeholder],
        
    },


    {
        title: 'Behavioral Variability in ETBD',
        date: "2016",
        id:22 ,
        description: 'xxxx',
        img: [placeholder],
        citation: "xxxx",
        urls: [
            //{name: "xxx", link:'xxx'},
            //{name: 'xxx', link: 'xxx'}
        ],
        
    },


    
]


export default infoProjects;
