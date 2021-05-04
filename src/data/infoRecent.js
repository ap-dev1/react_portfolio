import pure_refuge from '../assets/pure_refuge.png'
import aquerous_plains from '../assets/aquerous_plains.png'


var infoRecent = [

    {
        id: 1, title: 'Aqueros Plains',
        tags: ["MongoDB/Atlas", "Node/Express", "React"],
        description: "A different approach to work and time management. Integrates WebSockets, React JS, Express, MongoAtlas, and Node JS. A work in progress.",
        img: [aquerous_plains],
        urls: [
            { name: "Demo", link: 'https://aqueous-plains-89974.herokuapp.com' },
            { name: "GitHub", link: 'https://github.com/ap-dev1/clock_in' },
        ]
    },

    {
        id: 2, title: "Pure Refuge",
        tags: ["Python", "Node", "Websockets", "React", "D3"],
        // description: 'This project deals with emergence and learning. Muro et al (2011) showed that group behavior that looks planned and coordinated does not <i>require</i> planning or communication. They instantiated wolves driven by low-level rules - follow the bison, but not too close - and successfully recreated hunting "strategies" observed in the wild. My goal is to implement wolves driven by more basic tendencies, like avoid harm, and to allow the agents to learn the rules. If the learning account is complete and robust (Popa, 2019), the right implementation should produce group behavior similar to that reported by Muro et al (2011). Technology-wise, this is a bridge between Python and D3, in a React-Express environment.',
        description: 'This project deals with emergence and learning. Muro et al (2011) showed that group behavior that looks planned and coordinated does not <i>require</i> planning or communication. ....',
        img: [pure_refuge],
        urls: [
            { name: "Demo", link: 'https://pure-refuge-75977.herokuapp.com/' },
            { name: "GitHub", link: 'https://github.com/ap-dev1/wolves3' },
        ],
        citation: '',
    },

    // {
    //     id: 3, title: 'Card Sorting App',
    //     tags: ["MongoDB/Atlas", "Node/Express", "React"],
    //     description: 'My first MERN app. Before switching to MongoDB/Atlas, the app was relying on AWS: DynamoDB for authentication and RDS for storing user data. ',
    //     img: [projectCardSorting],
    //     urls: [
    //         { name: "GitHub", link: 'https://github.com/ap-dev1/personal_values' },
    //     ],
    //     citation: '',
    // },




]


export default infoRecent;
