import projectCardSorting from '../assets/prj_img_personal_values.png'
import pure_refuge from '../assets/pure_refuge.png'
import aquerous_plains from '../assets/aquerous_plains.png'


var infoRecent = [

    {
        id: 1,
        tags: ["MongoDB/Atlas", "Node/Express", "React"],
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
        tags: ["Python", "Node", "Websockets", "React", "D3"],
        title: "Pure Refuge",
        // description: 'This project deals with emergence and learning. Muro et al (2011) showed that group behavior that looks planned and coordinated does not <i>require</i> planning or communication. They instantiated wolves driven by low-level rules - follow the bison, but not too close - and successfully recreated hunting "strategies" observed in the wild. My goal is to implement wolves driven by more basic tendencies, like avoid harm, and to allow the agents to learn the rules. If the learning account is complete and robust (Popa, 2019), the right implementation should produce group behavior similar to that reported by Muro et al (2011). Technology-wise, this is a bridge between Python and D3, in a React-Express environment.',
        description: 'This project deals with emergence and learning. Muro et al (2011) showed that group behavior that looks planned and coordinated does not <i>require</i> planning or communication. ....',
        img: [pure_refuge],
        urls: [
            { name: "Demo", link: 'https://pure-refuge-75977.herokuapp.com/' },
            { name: "GitHub", link: 'https://github.com/ap-dev1/wolves3' },
        ],
        citation: '',
    },

    {
        id: 3,
        tags: ["MongoDB/Atlas", "Node/Express", "React"],
        title: 'Card Sorting App',
        description: 'My first MERN app. Before switching to MongoDB/Atlas, the app was relying on AWS: DynamoDB for authentication and RDS for storing user data. ',
        img: [projectCardSorting],
        urls: [
            { name: "GitHub", link: 'https://github.com/ap-dev1/personal_values' },
        ],
        citation: '',
    },




]


export default infoRecent;
