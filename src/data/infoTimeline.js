

import projectAutomata1 from "../assets/prj_img_imperfect_automata.jpg"
// import projectCardSorting from "../assets/prj_img_personal_values.png"
import projectPsych from "../assets/Jackson_Pollock_1952.jpg"
// import pure_refuge from "../assets/pure_refuge.png"
// import aquerous_plains from "../assets/aquerous_plains.png"
import placeholder from "../assets/placeholder.png"
import bivariate2012_01 from "../assets/bivariate2012_01.png"
import bivariate2012_02 from "../assets/bivariate2012_02.png"


var infoTimeline = [

    {title: 'Hello World!', date: "08/15/2007", 
        tags: ["___", "___"],
        description: "I started my work on mathematical and computational models of adaptive behavior (Emory University, McDowell's lab)",
        img: ["___"],
        citation: '',
        urls: [{ name: "___", link: "___" },],
    },


    {title: 'Emory Talk 2009', date: "05/02/2009", 
        tags: ["talk", "conference", ],
        description: "Emory University, Department of Psychology, Annual Research Festival. Atlanta, GA",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "Popa, A., & McDowell, J J. (2009). A Computational Model of Adaptive Behavior Dynamics. Emory University, Department of Psychology, Annual Research Festival. Atlanta, GA.",
    },

    {title: 'The Wolfram project', date: "07/01/2009", 
        tags: ["publication", "peer-reviewed"],
        description: "Hamming Distances and Changeover Delays",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "McDowell, J. J, & Popa, A.  (2009). Beyond continuous mathematics and traditional scientific analysis:  Understanding and mining Wolfram's A new kind of science. Behavioural Processes, 81, 343-352.", 
    },

    {title: 'Master of Arts', date: "20/12/2009", 
        tags: ["COMMITTEE", "Hamming Distance", "education", "deggree"],
        description: "M.A. in Psychology, Cognition and Development Program, Emory University; The Effects of Hamming Distances in a Computational Model of Selection by Consequences",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "", 
    },
    
    
    {title: 'Beyond the molar-molecular debate', date: "05/31/2010", 
        tags: ["talk", "abai", "conference"],
        description: "Complex causation, or beyond the molar-molecular debate (ABAI 2010)",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "Popa, A., & McDowell, J J. (2010). Evolutionary Behavior Dynamics causally generates both molar and molecular properties of behavior. Symposium: The Molar-Molecular debate: A further discussion on the unresolved issue. Discussant: William M. Baum, Ph.D. Presented at the 36th Annual Convention of the Association for Behavior Analysis International, San Antonio, TX.", 
    },

    
    {title: 'SQAB 2010', date: "05/31/2010", 
        tags: ["poster", "sqab", "conference"],
        description: "Hamming Distances and Changeover Delays",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "Popa, A., & McDowell, J J. (2010). Effects of overall absolute reinforcement rate in a computational model of selection by consequences. Poster presented at the Annual Meeting of the Society for the Quantitative Analysis of Behavior, San Antonio, TX.", 
    },

    
    {title: 'Popa & McDowell, 2010', date: "08/01/2010", 
        tags: ["publication", "peer-reviewed"],
        description: "Hamming Distances and Changeover Delays",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "Popa, A., & McDowell, J. J.  (2010). The effect of Hamming distances in a computational model of selection by consequences. Behavioural Processes, 84, 428-434.", 
    },

    {title: 'McDowell & Popa, 2010', date: "12/01/2010", 
        tags: ["publication", "peer-reviewed"],
        description: "___",
        img: ["___"],
        urls: [{ name: "Pubmed", link: "http://www.ncbi.nlm.nih.gov/pubmed/20152891" }, ],
        citation: "McDowell, J. J, & Popa, A. (2010). Toward a mechanics of adaptive behavior: Evolutionary dynamics and matching theory statics. Journal of the Experimental Analysis of Behavior, 94, 241-260.", 
    },

    {title: 'Impulsivity in ETBD', date: "05/30/2011", 
        tags: ["ABAI", "ETBD", "ADHD"],
        description: "___",
        img: ["___"],
        urls: [{ name: "ABAI", link: "https://www.abainternational.org/events/program-details/event-detail.aspx?sid=13494&by=ByArea#s445_0" }, ],
        citation: "Popa, A., & McDowell, J J. (2011). A Computational Model of Selection by Consequences: Evidence that Mutation is Computationally Equivalent to Impulsivity. Paper presented at the 37th Annual Convention of the Association for Behavior Analysis International, Denver, CO.", 
    },

    {title: 'Bivariate Matching', date: "03/01/2012", 
        tags: ["tag", "tag", "tag"],
        description: "___",
        img: ["___"],
        urls: [{ name: "Pubmed", link: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3449856/" }, ],
        citation: "McDowell, J, J., Popa, A., & Calvin, N. (2012). Selection Dynamics in Joint Matching to Rate and Magnitude of Reinforcement. Journal of the Experimental Analysis of Behavior, 98, 199-212.", 
    },

    {title: 'From bit strings to human behavior', date: "05/26/2012", 
        tags: ["ABAI 2012"],
        description: "-----",
        img: ["-----"],
        urls: [{ name: "ABAI", link: "https://www.abainternational.org/events/program-details/event-detail.aspx?sid=17728&by=ByArea#s28_0" }, ],
        citation: "Popa, A., & McDowell, J J. (2012). The Computational Theory of Behavior Dynamics Predicts Effects of COD on Behavioral Variability: Evidence from experiments with human participants. Paper presented at the 38th Annual Convention of the Association for Behavior Analysis International, Seattle, WA." 
    },

    {title: 'Complexity, Emergence, and the Behavior of Organisms', date: "05/26/2013", 
        tags: ["ABAI 2013", "-----", "-----"],
        description: "-----",
        img: ["-----"],
        urls: [{ name: "ABAI 2013", link: "https://www.abainternational.org/events/program-details/event-detail.aspx?sid=28880&by=ByArea#s166_0" }, ],
        citation: "Popa, A., Calvin, N., & McDowell, J J. (2013). Complexity, Emergence, and the Behavior of Organisms. Paper presented at the 39th Annual Convention of the Association for Behavior Analysis International, Minneapolis, MN." 
    },

    {title: 'Doctor of Philosophy', date: "12/24/2013", 
        tags: ["dissertation", "education", "deggree"],
        description: "Complexity, Darwinism, and the Emergence of High-Level Phenotypes (like ADHD)",
        img: ["-----"],
        urls: [{ name: "Emory ETD", link: "https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en" }, ],
        citation: "Ph.D. in Psychology, Cognition and Development Program, Emory University; Thesis: An Evolutionary Theory of Behavior Dynamics - Complexity, Darwinism, and the Emergence of High-Level Phenotypes", 
    },

    {title: 'More on complex causation: Multifinality and Equifinality', date: "05/24/2014", 
        tags: ["ABAI 2014", "___", "___"],
        description: "___",
        img: ["___"],
        urls: [{ name: "ABAI 2014", link: "https://www.abainternational.org/events/program-details/event-detail.aspx?sid=40586&by=ByArea#s30_0" }, ],
        citation: "Popa, A., Calvin, N., & McDowell, J J. (2014). Multifinality and Equifinality in an Evolutionary Theory of Behavior Dynamics. Paper presented at the 40th Annual Convention of the Association for Behavior Analysis International, Chicago, IL.", 
    },

    {title: 'Darwin Day 2015', date: "02/13/2015", 
        tags: ["Darwin Day 2015", "___", "___"],
        description: "___",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "Popa, A. (2015). Towards an Evolutionary Account for the Dynamics of Cognizant Systems. Darwin Day Lecture Series, Georgia State University, Atlanta, GA.", 
    },

    {title: 'Darwin Day 2015', date: "02/09/2016", 
        tags: ["Darwin Day 2015", "___", "___"],
        description: "___",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "Popa, A. (2016). Population Thinking, Psychodiversity, and Human Development. Darwin Day Lecture Series, Georgia State University, Atlanta, GA.", 
    },

    {title: 'Popa & McDowell (2016)', date: "03/01/2016", 
        tags: ["___", "___", "___"],
        description: "___",
        img: ["___"],
        urls: [{ name: "JEAB", link: "http://onlinelibrary.wiley.com/doi/10.1002/jeab.199/abstract" }, ],
        citation: "Popa, A., & McDowell, J, J. (2016). Behavioral Variability in an Evolutionary Theory of Behavior Dynamics. The Journal of the Experimental Analysis of Behavior, 105 (2), 270-290.", 
    },


    {title: 'SpARC 2016', date: "04/01/2016    ", 
        tags: ["Agnes Scott College", "___", "___"],
        description: "My second opportunity to run my own lab. ... Stimulus control and negative reinforcement in humans. ...The students from my senior seminar on The Dynamics of Choice and Preference contributed three talks and four posters to the Spring Annual Research Conference.",
        img: ["___"],
        urls: [{ name: "SpARC 2016", link: "https://www.agnesscott.edu/sparc/index.html" }, ],
        citation: "___",
        citations: [
            "Adekunle, O. & Popa, A. (2016). Higher Payoff or More Options? Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA. ", 

            "Booher, C. & Popa, A. (2016). Choice Behavior in Unsignaled Environments With and Without Immediate Negative Feedback. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",

            "Forbes, V., & Popa, A. (2016). Human Choice Behaviors Before and After Extinction. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            
            "Grissom, M. K., & Popa, A. (2016). Effects of Extinction on Human Escape Behavior. Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            
            "Shen, R. & Popa, A. (2016). Is Competition Sufficient to Increase the Motivation to “Do Well”? Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            
            "Tang, X., & Popa, A. (2016). Choice Behavior in Low Discriminability Conditions: Effects of the Operant Class Size. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            
            "Waithe, O. Y., & Popa, A. (2016). The Effects of Imagery on Psychological Discomfort. Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
        ]
    },



    {title: 'WCALB 2017', date: "02/19/2017    ", 
        tags: ["WCALB 2017", "talk", "conference"],
        description: "Effects of extinction of escape behavior",
        img: ["___"],
        urls: [{ name: "WCALB 2017", link: "https://static1.squarespace.com/static/57b732f259cc68697145ea01/t/5b7dbd231ae6cf8700f3d604/1534967075831/Past+Programs+2018.pdf" }, ],
        citation: "Popa, A. & Grissom, M. K. (2017). Extinction-Induced Variability on Negatively Reinforced Human Behavior. Paper presented at the Winter Conference on Animal Learning & Behavior, Park City, UT. ", 
    },
    
    {title: 'ABAI 2017', date: "05/28/2017", 
        tags: ["ABAI 2017", "talk", "conference"],
        description: "Towards a Dynamic Account of Human Development",
        img: ["___"],
        urls: [{ name: "ABAI 2017", link: "https://www.abainternational.org/events/program-details/event-detail.aspx?sid=53139&by=ByArea#s196_0" }, ],
        citation: "Popa, A., (2017). Towards a Dynamic Account of Human Development. Paper presented at the 43rd Annual Convention of the Association for Behavior Analysis International, Denver, CO.", 
    },




    {title: 'Continuous Education', date: "ongoing", 
        tags: ["education", "certificate", "bootcamp"],
        description: "Data Science with Python track (09/01/2018) <br/> Python Bootcamp, Jose Portilla, Udemy (10/01/2018) <br/> Machine Learning by Stanford University on Coursera (Andrew Ng) (12/01/2018) <br/> SQL Bootcamp, Jose Portilla, Udemy (01/01/2019)",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "___", 
    },



    {title: 'Courses Tought', date: "2008 - 2018", 
        tags: ["___", "___", "___"],
        description: "Emory University, 2008 - 2012; <br/>  Statistics Lab (Spring 2008); <br/> Research Methods Lab (Fall 2008); <br/> Behavior Modification (for Jack McDowell; Fall 2010, 2011, 2012); <br/> Introduction to Psychology (for Scott Lilienfeld; Fall 2011) <br/> The Evolution of Acquired Behavior, Emory University; my first course (N ~ 50)   <br/>      Visiting Lecturer, Georgia State University; <br/>  Theories of Personality (14 sections); <br/>  Abnormal Psychology (8 sections); <br/>  Introduction to Psychology (8 sections) <br/>   Visiting Assistant Professor of Psychology, Agnes Scott College; <br/>  Senior Seminar: Choice and Preference; <br/>  Introduction to Sociology; <br/>  Research Methods and Design;  <br/>  Introduction to Psychology <br/>  Adjunct Assistant Professor of Psychology, Emory University, Oxford College; <br/>  Introduction to Psychology; <br/> Introduction to Psychobiology",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "___", 
    },



    {title: '___', date: "___", 
        tags: ["___", "___", "___"],
        description: "___",
        img: ["___"],
        urls: [{ name: "___", link: "___" }, ],
        citation: "___", 
    },


    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------


    {
        id: 4,
        date: "03/08/2019",
        title: 'Imperfect Automata',
        tags: ["Python", "Tkinter"],

        description: 'Unlike biological systems, automata are deterministic systems, governed by precise rules. The question examined here was: what if every new cell has a small probability to be written incorrectly, i.e. to "mutate" from 0 to 1 or viceversa. ... Low mutation probabilities facilitated the emergence of new patterns and structures, disconnected from the initial conditions.',
        img: [projectAutomata1],
        urls: [
            { name: "PsyArXiv", link: 'https://psyarxiv.com/wgp4e/' },
            { name: "GitHub", link: 'https://github.com/ap-dev1/automata/' },
            { name: "ResGate", link: "https://www.researchgate.net/publication/336143797_Imperfect_Automata_Effects_of_mutation_on_the_evolution_of_automaton_01101110_Rule_110" }
        ],
        citation: 'Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.',
    },

    {
        id: 5,
        date: "09/2019",
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
        description: "Virtual organisms animated by a selectionist theory of behavior dynamics worked on concurrent random interval schedules where both the rate and magnitude of reinforcement were varied. The selectionist theory consists of a set of simple rules of selection, recombination, and mutation that act on a population of potential behaviors by means of a genetic algorithm.An xtension of the power function matching equation, which expresses behavior allocation as a joint function of exponentiated reinforcement rate and reinforcer magnitude ratios, was fitted to the virtual organisms’ data, and over a range of moderate mutation rates was found to provide an excellent description of their behavior without residual trends.The mean exponents in this range of mutation rates were 0.83 for the reinforcement rate ratio and 0.68 for the reinforcer magnitude ratio, which are values that are comparable to those obtained in experiments with live organisms.These findings add to the evidence supporting the selectionist theory, which asserts that the world of behavior we observe and measure is created by evolutionary dynamics.",

        img: [bivariate2012_01, bivariate2012_02],
        citation: "McDowell, J, J., Popa, A., & Calvin, N. (2012). Selection Dynamics in Joint Matching to Rate and Magnitude of Reinforcement. Journal of the Experimental Analysis of Behavior, 98, 199-212.",
        urls: [
            { name: "NCBI", link: 'http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3449856/' },
            { name: 'ResGate', link: 'https://www.researchgate.net/publication/231176507_Selection_dynamics_in_joint_matching_to_rate_and_magnitude_of_reinforcement' },
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


export default infoTimeline;
