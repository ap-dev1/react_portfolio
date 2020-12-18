import profile_444 from './assets/profile_444.jpg'
//import projectAutomata from './assets/automata_00004.jpg'
import projectAutomata1 from './assets/prj_img_imperfect_automata.jpg'

import projectCardSorting from './assets/prj_img_personal_values.png'

import projectPsych from './assets/Jackson_Pollock_1952.jpg'




const data = {
    headerTagline: ["Hi, I'm Andrei Popa", "I do research and development."],

    contactEmail: 'andrei.popa.dev@gmail.com',

    aboutText: "I am a web developer with solid background in behavioral sciences, passionate about creating useful products and learning new technologies.",

    aboutDescription: "I am a web developer with solid background in behavioral sciences, passionate about creating useful products and learning new technologies.",

    aboutTech: "HTML, CSS, JavaScript (+ React, Redux, Node, D3); AWS (DynamoDB, RDS/PosgreSQL), MongoDB/Atlas; Firebase; Python (+ tkinter, pandas, scipy, nltk, spacy), Tableau, VB.Net; Git; familiar with Agile and workflow boards;",

    aboutImage: profile_444,

    ShowAboutImage: true,


    // Change Projects Here 
    projects: [
        {
            id: 1,
            title: 'Card Sorting App',
            imageSrc: projectCardSorting,
            url: 'https://personal-values.herokuapp.com/',
            url_name: 'Demo',
            url2: 'https://github.com/ap-dev1/personal_values',
            url2_name: 'Code',
            description: 'MERN app inspired by the Personal Values Card Sorting activity - used in corporate coaching and therapeutic settings (examples). Front-back communication is facilitated by Axios. The front-end was enhanced with Styled Components and Semantic-ui. Before switching to MongoDB/Atlas, data was stored in DynamoDB (authentication) and RDS (user sessions).',
            citation:'',

        },
        {
            id: 2,
            title: 'Imperfect Automata',
            imageSrc: projectAutomata1,
            url: 'https://psyarxiv.com/wgp4e/',
            url_name: 'Learn more',
            url2: 'https://github.com/ap-dev1/automata/',
            url2_name: 'Code',
            description: 'Unlike biological systems, automata are deterministic systems, governed by precise rules. The question examined here was: what if every new cell has a small probability to be written incorrectly, i.e. to "mutate" from 0 to 1 or viceversa. ... Low mutation probabilities facilitated the emergence of new patterns and structures, disconnected from the initial conditions. ...',
            citation: 'Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.',
        },
        {
            id: 3,
            title: 'The Emergence of You',
            imageSrc: projectPsych,
            url: 'https://psyarxiv.com/m87an/',
            url_name: 'PsyArXiv',
            url2: 'https://www.researchgate.net/publication/335688963_Psychology_20_The_Emergence_of_Individuality',
            url2_name: 'ResearchGate',
            description: 'Physical forces acting on particles explain how physical systems change over time. Evolutionary forces acting on populations of genomes explain change in the genetic structure of populations across generations. Change in psychological systems - i.e. human development, or learning - is not yet understood. Although dynamic principles have been proposed, their target remained vaguely defined. What are such principles acting on, what kind of empirical transformations do they cause, and how do these transformations explain development?',
            citation: 'Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.',
        },


        

    ],


    links: [
        {
            name: 'Google Drive',
            url: 'https://drive.google.com/drive/folders/1d6QlunZ_zh-mTXB1H2u0C5DQC7Vjmq5U?usp=sharing',
            key: 1,
            image_src: 'link_google_drive_img.jpg',

            info: 'Download resume, transcripts, etc. See the README file for more details.',

        },
        {
            name: 'GitHub',
            url: 'https://github.com/ap-dev1',
            key: 2,
            image_src: 'link_github_logo1.png',
            
            info: 'info',
        },
        {
            name: 'ResearchGate',
            url: 'https://www.researchgate.net/profile/Andrei_Popa5',
            key: 3,
            image_src: 'link_researchgate_profile1.png',
            
            info: 'info',
        },
        {
            name: 'Google Scholar',
            url: 'https://scholar.google.com/citations?user=-C2nxZsAAAAJ',
            key: 4,
            image_src: 'src/assets/link_images/link_google_scholar.jpg',
            
            info: 'info',
        },
        {
            name: 'LinkedIn',
            url: 'http://www.linkedin.com/in/andrei-popa-evd',
            key: 5,
            image_src: 'link_linkedin_3.png',
            
            info: 'info',
        },
        {
            name: 'OSF/PsyArXiv',
            url: 'https://osf.io/8hz5f/',
            key: 6,
            image_src: 'src/assets/link_images/link_PsyArXiv_OSF_profile.png',
            
            info: 'info',
        },


    ]



}


export default data;
