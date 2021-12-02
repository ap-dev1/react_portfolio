//import pure_refuge from "../assets/pure_refuge.png";
//import aquerous_plains from "../assets/aquerous_plains.png";

var infoReferences = [
    {
        id: "[0.1]",
        authors: "Popa & McDowell (2009)",
        label: 'invited talk',
        keywords: ["evolutionary dynamics", "computational modelling", "complex systems", "emergence"],
        citation: "Popa, A., & McDowell, J J. (2009). A Computational Model of Adaptive Behavior Dynamics. Emory University, Department of Psychology, Annual Research Festival. Atlanta, GA.",
    },
    {
        id: "[0.2]",
        authors: "Popa & McDowell (2009)",
        label: 'research poster',
        keywords: ["Hamming Distance", "changeover delay", "sensitivity", "changeovers"],
        citation: "Popa, A., & McDowell, J J. (2009). Hamming cliffs in a computational model of selection by consequences. Poster presented at the 32nd Annual Meeting of the Society for the Quantitative Analysis of Behavior, Phoenix, AZ."
    },
    {
        id: "[1]",
        authors: "McDowell & Popa (2009)",
        label: 'peer reviewed',
        keywords: ["Wolfram, complex systems, emergence, Elementary Cellular Automata, cellular automaton"],
        citation: "McDowell, J. J, & Popa, A. (2009). Beyond continuous mathematics and traditional scientific analysis: Understanding and mining Wolfram's A new kind of science. <i>Behavioural Processes</i>, 81, 343-352."
    },


    {
        id: "[2]",
        authors: "Popa (2009)",
        label: 'Masters thesis',
        committee: "Prof. Jack McDowell (chair), Prof. Eugene Emory, Prof. Phil Wolff",
        keywords: ["Masters Thesis, ETBD, Hamming Distances, Changeover Delay, matching, sensitivity",],
        citation: "Popa (2009). <i>The effect of Hamming distances in a computational model of selection by consequences.</i>. <b>Masters Thesis</b>. Retrieved: EMORY LINK ETEEDEEEE      . ISBNxxxxxxxxxxxxxxx"
    },


    {
        id: "[3]",
        authors: "Popa & McDowell (2010)",
        label: 'peer reviewed',
        keywords: ["Hamming paper"],
        citation: "Popa, A., & McDowell, J. J. (2010). The effect of Hamming distances in a computational model of selection by consequences. <i>Behavioural Processes</i>, 84, 428-434."
    },


    {
        id: "[4]",
        authors: "Popa & McDowell (2010)",
        label: 'invited talk',
        keywords: ["ABAI, ETBD, Hamming Distances, Changeover Delay, matching, sensitivity"],
        citation: "Popa, A., & McDowell, J J. (2010). <i>Evolutionary Behavior Dynamics causally generates both molar and molecular properties of behavior</i>. Symposium: The Molar-Molecular debate: A further discussion on the unresolved issue. <b>Discussant</b>: William M. Baum, Ph.D. Presented at the 36th Annual Convention of the Association for Behavior Analysis International, San Antonio, TX."
    },


    {
        id: "[5]",
        authors: "McDowell & Popa (2010)",
        label: 'peer reviewed',
        keywords: ["ETBD, matching, model selection, residual analysis, Akaike"],
        citation: "McDowell, J. J, & Popa, A. (2010). Toward a mechanics of adaptive behavior: Evolutionary dynamics and matching theory statics. <i>Journal of the Experimental Analysis of Behavior</i>, 94, 241-260."
    },

    {
        id: "[7]",
        authors: "Popa & McDowell (2011)",
        label: 'talk',
        keywords: ["ABAI, ETBD, Impulsivity, ADHD, Mutation"],
        citation: "Popa, A., & McDowell, J J. (2011). A Computational Model of Selection by Consequences: <i>Evidence that Mutation is Computationally Equivalent to Impulsivity</i>. Paper presented at the 37th Annual Convention of the Association for Behavior Analysis International, Denver, CO."
    },


    {
        id: "[8]",
        authors: "McDowell, Popa, & Calvin (2012)",
        label: 'peer reviewed',
        keywords: "keywords",
        citation: "McDowell, J, J., Popa, A., & Calvin, N. (2012). Selection Dynamics in Joint Matching to Rate and Magnitude of Reinforcement. <i>Journal of the Experimental Analysis of Behavior</i>, <i>98</i>, 199-212."
    },

    {
        id: "[10]",
        keywords: ["Human research, Fast Matching, ETBD, Impulsivity, ADHD, Mutation"],
        authors: "Popa & McDowell (2012)",
        label: 'talk',
        citation: "Popa, A., & McDowell, J J. (2012). The Computational Theory of Behavior Dynamics Predicts Effects of <i>COD on Behavioral Variability: Evidence from experiments with human participants</i>. Paper presented at the 38th Annual Convention of the Association for Behavior Analysis International, Seattle, WA."
    },


    {
        id: "[11]",
        authors: "Popa, Calvin, & McDowell (2013)",
        label: 'talk',
        keywords: ["ABAI, ETBD, mental disorders, ADHD, clinical implications"],
        citation: "Popa, A., Calvin, N., & McDowell, J J. (2013). <i>Complexity, Emergence, and the Behavior of Organisms</i>. Paper presented at the 39th Annual Convention of the Association for Behavior Analysis International, Minneapolis, MN."
    },


    {
        id: "[12]",
        authors: "Popa (2013)",
        label: 'Doctoral dissertation',
        committee: "Prof. Jack McDowell (chair), Prof. Scott Lilienfeld, Prof. Jack Marr, Prof. Monica Capra, Prof. Phil Wolff",
        keywords: ["Dissertation, ETBD, ADHD, emergence, Emory, doctoral thesis"],
        citation: "Popa (2013). An Evolutionary Theory of Behavior Dynamics - <i>Complexity, Darwinism, and the Emergence of High-Level Phenotypes</i>. <b>Doctoral Dissertation</b>. Retrieved: https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en. ISBNxxxxxxxxxxxxxxx",
    },


    {
        id: "[13]",
        authors: "Popa, Calvin, & McDowell (2014)",
        label: 'talk',
        keywords: ["ABAI, ETBD, multifinality, equifinality, developmental trajectories"],
        citation: "Popa, A., Calvin, N., & McDowell, J J. (2014). <i>Multifinality and Equifinality in an Evolutionary Theory of Behavior Dynamics</i>. Paper presented at the 40th Annual Convention of the Association for Behavior Analysis International, Chicago, IL.",
    },


    {
        id: "[14]",
        authors: "Popa (2015)",
        label: 'invited talk',
        keywords: "keywords",
        citation: "Popa, A. (2015). <i>Towards an Evolutionary Account for the Dynamics of Cognizant Systems</i>. Darwin Day Lecture Series, Georgia State University, Atlanta, GA.",
    },


    {
        id: "[15]",
        authors: "Popa (2016)",
        label: 'invited talk',
        keywords: ["essentialism, types, eidos, population, average"],
        citation: "Popa, A. (2016). <i>Population Thinking, Psychodiversity, and Human Development</i>. Darwin Day Lecture Series, Georgia State University, Atlanta, GA.",
    },


    {
        id: "[16]",
        authors: "Popa & McDowell (2016)",
        label: 'peer reviewed',
        keywords: ["ETBD, Mutation, DMN, Default Mode Network, Fast Matching, behavioral variability, maladaptive variability"],
        citation: "Popa, A., & McDowell, J, J. (2016). Behavioral Variability in an Evolutionary Theory of Behavior Dynamics. <i>The Journal of the Experimental Analysis of Behavior</i>, 105 (2), 270-290.",
    },


    {
        id: "[20]",
        authors: "<sup>U</sup>Adekunle & Popa (2016)",
        label: 'research poster',
        keywords: "keywords",
        citation: "<sup>U</sup>Adekunle, O. & Popa, A. (2016). <i>Higher Payoff or More Options? Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
    },


    {
        id: "[21]",
        authors: "<sup>U</sup>Booher & Popa (2016)",
        label: 'research poster',
        keywords: "keywords",
        citation: "<sup>U</sup>Booher, C. & Popa, A. (2016). <i>Choice Behavior in Unsignaled Environments With and Without Immediate Negative Feedback. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
    },


    {
        id: "[22]",
        authors: "<sup>U</sup>Forbes & Popa (2016)",
        label: 'research poster',
        citation: "<sup>U</sup>Forbes, V., & Popa, A. (2016). <i>Human Choice Behaviors Before and After Extinction. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
        keywords: "keywords",
    },

    {
        id: "[17]",
        authors: "<sup>U</sup>Grissom & Popa (2016)",
        label: 'talk',
        keywords: "keywords",
        citation: "<sup>U</sup>Grissom, M. K., & Popa, A. (2016). <i>Effects of Extinction on Human Escape Behavior. Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
    },


    {
        id: "[18]",
        authors: "<sup>U</sup>Shen & Popa (2016)",
        label: 'talk',
        keywords: "keywords",
        citation: "<sup>U</sup>Shen, R. & Popa, A. (2016). <i>Is Competition Sufficient to Increase the Motivation to “Do Well”</i>? Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
    },

    {
        id: "[23]",
        authors: "<sup>U</sup>Tang & Popa (2016)",
        label: 'research poster',
        citation: "<sup>U</sup>Tang, X., & Popa, A. (2016). <i>Choice Behavior in Low Discriminability Conditions: Effects of the Operant Class Size. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
        keywords: "keywords",
    },

    {
        id: "[19]",
        authors: "<sup>U</sup>Waithe & Popa (2016)",
        label: 'paper',
        keywords: "keywords",
        citation: "<sup>U</sup>Waithe, O. Y., & Popa, A. (2016). <i>The Effects of Imagery on Psychological Discomfort</i>. Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
    },



    {
        id: "[25]",
        authors: "Popa & Grissom (2017)",
        label: 'talk',
        keywords: "escaoe behavior. extinction. extinction burst. behavior variability. aversive conditioning",
        citation: "Popa, A. & Grissom, M. K. (2017). <i>Extinction-Induced Variability on Negatively Reinforced Human Behavior. Paper presented at the Winter Conference on Animal Learning & Behavior, Park City, UT.",
    },

    {
        id: "[26]",
        authors: "Popa (2017)",
        label: 'talk',
        keywords: "development. dynamics. diathesis. stress. culture. genes",
        citation: "Popa, A., (2017). <i>Towards a Dynamic Account of Human Development. Paper presented at the 43rd Annual Convention of the Association for Behavior Analysis International, Denver, CO.",
    },

    {
        id: "[27]",
        authors: "Popa & Carter (2018)",
        label: 'preprint',
        keywords: [],
        citation: "TBA",
    },

    {
        id: "[28]",
        authors: "Popa (2019)",
        label: 'invited talk',
        keywords: "development, learning, interactions, personality, neuronal dynamics, change in state",
        citation: "Popa, A. (2019).<i>Writing with purpose</i>. Emory University, Oxford Campus, Covington, GA.",
    },

    {
        id: "[29]",
        authors: "Popa (2019a)",
        label: 'preprint',
        keywords: "development, learning, interactions, personality, neuronal dynamics, change in state",
        citation: "Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” <i>PsyArXiv. September 8. doi:10.31234/osf.io/m87an.",
    },

    {
        id: "[30]",
        authors: "Popa (2019b)",
        label: 'preprint',
        keywords: [],
        citation: "Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” <i>PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.",
    },


    // {
    //     id: "[30]",
    //     authors: "xxx",
    //     keywords: [],
    //     citation: "xxx",
    // },


    // {
    //     id: "[31]",
    //     authors: "xxx",
    //     keywords: [],
    //     citation: "xxx",
    // },

    // {
    //     id: "[32]",
    //     authors: "xxx",
    //     tags: [],
    //     citation: "xxx",
    // },


];

export default infoReferences;
