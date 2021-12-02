//import parse from "html-react-parser";

// var gDrive = "https://drive.google.com/drive/folders/1d6QlunZ_zh-mTXB1H2u0C5DQC7Vjmq5U?usp=sharing";



var infoPublications = [


    {
        citation:
            "McDowell, J. J, & Popa, A. (2009). Beyond continuous mathematics and traditional scientific analysis: Understanding and mining Wolfram's A new kind of science. <i>Behavioural Processes</i>, 81, 343-352.",
        date: "07/01/2009",
        type: "journal article",
        authors: ["McDowell & Popa (2009)"],

        keywords: ["Wolfram", "complex systems", "emergence", "Elementary Cellular Automata", "cellular automaton"],
        urls: [
            { name: "Pubmed", link: "http://www.ncbi.nlm.nih.gov/pubmed/19429227" },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/24414894_Beyond_continuous_mathematics_and_traditional_scientific_analysis_Understanding_and_mining_Wolfram's_A_New_Kind_of_Science",
            },
        ],
        abstract: "In A New Kind of Science, Stephen Wolfram recommends abandoning traditional scientific analysis and the continuous mathematical description that it affords in favor of the study of simple rules.He focuses on amachine known as a cellular automaton as the prototype generator of complex phenomena such as those we see in nature.The simplest cellular automaton consists of a row of cells, each existing in one of two states. The states of the cells are updated from moment to moment by simple rules.Wolfram shows that these machines and their many variations can generate a host of outcomes ranging from very simple to extremely complex.He argues that among these outcomes representations of all the phenomena in the universe will be found, including presumably the behavior of organisms.The output of cellular automata can be mapped to behavior by considering, for example, one of the states of a cell to represent the emission of a behavior.For some cellular automaton rules, these mappings generate cumulative records and inter-response time distributions that are similar to those produced by live organisms.In addition, at least one cellular automaton generates the Herrnstein hyperbola as an emergent outcome.These results suggest that Wolfram’s program and its mainstream version, which is known as complexity theory, is worth pursuing as a possible means of understanding and accounting for the behavior of organisms.",
    },




    {
        citation:
            "Popa, A., & McDowell, J. J. (2010). The effect of Hamming distances in a computational model of selection by consequences. Behavioural Processes, 84, 428-434.",
        date: "03/01/2010",
        type: "journal article",

        authors: ["Popa & McDowell (2010)"],
        keywords: ["ETBD", "Hamming Distances", "Changeover Delay", "matching", "sensitivity", "COD"],

        urls: [
            {
                name: "Emory ETD",
                link: "https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en",
            },
            {
                name: "ReshGate",
                link: "https://www.researchgate.net/publication/41427297_The_effect_of_Hamming_distances_in_a_computational_model_of_selection_by_consequences",
            },
            { name: "Pubmed", link: "http://www.ncbi.nlm.nih.gov/pubmed/20152891" },
        ],
        abstract:
            "McDowell (2004) instantiated the Darwinian principles of selection, recombination, and mutation in a computational model of selection by consequences.The model has been tested under a variety of conditions and the outcome is quantitatively indistinguishable from that displayed by live organisms. The computational model animates a virtual organism with a repertoire of 100 behaviors, selected from the integers from 0 to 1023, where the corresponding binary representations constitute the behavior’s genotypes. Using strings of binary digits raises the specific problem of Hamming distances: the number of bits that must be changed from 1 to 0 or from 0 to 1 in order to obtain another string of equal length.McDowell hypothesized that the Hamming distance may be computationally equivalent to the changeover delay used in experiments with live organisms.The results of the present experiments confirmed this hypothesis and revealed a robust rule about the effects of Hamming distances within the model, namely, in order to obtain good matching, the difference between the Hamming distance that separates the target classes and the largest Hamming distance comprised within a class must be equal to or larger than three.",

    },



    {
        citation:
            "McDowell, J. J, & Popa, A. (2010). Toward a mechanics of adaptive behavior: Evolutionary dynamics and matching theory statics. Journal of the Experimental Analysis of Behavior, 94, 241-260.",

        date: "12/01/2010",
        type: "journal article",
        authors: ["McDowell & Popa (2010)"],
        keywords: [
            "VBA/Excel",
            "hypothesis testing",
            "model selection",
            "ensemble fitting",
            "residual analysis",
        ],
        urls: [
            { name: "Pubmed", link: "http://www.ncbi.nlm.nih.gov/pubmed/20152891" },
            {
                name: "NCBI",
                link: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2929088/",
            },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/50937156_Toward_a_Mechanics_of_Adaptive_Behavior_Evolutionary_Dynamics_and_Matching_Theory_Statics",
            },
        ],

        abstract:
            "One theory of behavior dynamics instantiates the idea that behavior evolves in response to selection pressure from the environment in the form of reinforcement. This computational theory implements Darwinian principles of selection, reproduction, and mutation, which operate on a population of potential behaviors by means of a genetic algorithm. The behavior of virtual organisms animated by this theory may be studied in any experimental environment. The evolutionary theory was tested by comparing the steady-state behavior it generated on concurrent schedules to the description of steady state behavior provided by modern matching theory. Ensemble fits of modern matching theory that enforced its constant-k requirement and the parametric identities required by its equations, accounted for large proportions of data variance, left random residuals, and yielded parameter estimates with values and properties similar to those obtained in experiments with live organisms. These results indicate that the dynamics of the evolutionary theory and the statics of modern matching theory together constitute a good candidate for a mechanics of adaptive behavior.",
    },





    {
        citation:
            "McDowell, J, J., Popa, A., & Calvin, N. (2012). Selection Dynamics in Joint Matching to Rate and Magnitude of Reinforcement. <i>Journal of the Experimental Analysis of Behavior</i>, <i>98</i>, 199-212.",
        date: "03/01/2012",
        type: "journal article",
        time: "03/01/2012",
        keywords: [
            "VBA/Excel",
            "hypothesis testing",
            "model selection",
            "ensemble fitting",
            "residual analysis",
        ],
        authors: ["McDowell, Popa, & Calvin (2012)"],

        urls: [
            {
                name: "NCBI/Pubmed",
                link: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3449856/",
            },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/231176507_Selection_dynamics_in_joint_matching_to_rate_and_magnitude_of_reinforcement",
            },
        ],

        abstract:
            "Virtual organisms animated by a selectionist theory of behavior dynamics worked on concurrent random interval schedules where both the rate and magnitude of reinforcement were varied. The selectionist theory consists of a set of simple rules of selection, recombination, and mutation that act on a population of potential behaviors by means of a genetic algorithm. An extension of the power function matching equation, which expresses behavior allocation as a joint function of exponentiated reinforcement rate and reinforcer magnitude ratios, was fitted to the virtual organisms’ data, and over a range of moderate mutation rates was found to provide an excellent description of their behavior without residual trends.",
    },



    {
        citation:
            "Popa (2013). An Evolutionary Theory of Behavior Dynamics - Complexity, Darwinism, and the Emergence of High-Level Phenotypes. Doctoral Dissertation. Retrieved: https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en. ISBNxxxxxxxxxxxxxxx",
        date: "12/24/2013",
        type: "doctoral dissertation",
        authors: ["Popa (2013)"],
        keywords: ["Doctor of Philosophy", "dissertation", "education", "deggree", "synthetic data", "human data", 'emergence', "ADHD", "ETBD"],

        urls: [
            {
                name: "Emory ETD",
                link: "https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en",
            },
            // { name: "ProQuest", link: "xxxx" },
            { name: "Study info", link: "gDrive" },
        ],

        abstract: "The main purpose of this project was to explore the effects of mutation and the environment's value and conduciveness on various dimensions of behavioral variability, in continuous choice environments. Secondly, qualitative predictions made by the Evolutionary Theory about the effects of changeover delays (COD) on behavior variability were verified against the behavior of college students in equivalent environments. The continuous choice behavior of college students was correctly predicted on eight out of eight behavioral dimensions. Thirdly, low-level characteristics of students' continuous choice behavior were compared with traditional measures of impulsivity and sustained attention, in an effort to investigate the potential equivalence between mutation and a property of the nervous system that produces impulsivity-like symptoms. The results were inconclusive, likely due to a lack of extreme impulsivity scores in the human sample. The findings presented in this paper provided significant additional evidence for the selectionist account as a valid mechanism of behavior change. In addition, the knowledge generated by the Evolutionary Theory provided important insights about clinically-relevant phenomena, such as disordered variability (or impulsivity) and raise the possibility of using the theory as a platform for simulating the emergence of specific high-level phenotypes. These implications appear even more fascinating considering that a connection with mental health was not explicitly sought, nor can it be traced to the inner-workings of the theory. This challenges our current understanding of mental illness and provides a new way of thinking about the evolution of behavioral repertoires and their emergent high-level characteristics."
    },


    {
        citation:
            "Popa, A., & McDowell, J, J. (2016). Behavioral Variability in an Evolutionary Theory of Behavior Dynamics. The Journal of the Experimental Analysis of Behavior, 105 (2), 270-290.",

        date: "03/01/2016",
        type: "journal article",
        role: "PRINCIPAL INVESTIGATOR (part of my thesis turned journal article)",
        authors: ["Popa & McDowell (2016)"],

        keywords: ['ETBD', 'ADHD', 'behavior variablity', 'reinforcement learning', 'DMN', 'default mode network', 'spontaneous luctuations', 'emergence', 'complexity', 'sustained behavior'],

        urls: [
            {
                name: "JEAB",
                link: "http://onlinelibrary.wiley.com/doi/10.1002/jeab.199/abstract",
            },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/299382923_Behavioral_variability_in_an_evolutionary_theory_of_behavior_dynamics",
            },
        ],

        abstract:
            "McDowell’s evolutionary theory of behavior dynamics (McDowell, 2004) instantiates populations of behaviors(abstractly represented by integers) that evolve under the selection pressure of the environment in the form of positive reinforcement.Each generation gives rise to the next via low-level Darwinian processes of selection, recombination, and mutation.The emergent patterns can be analyzed and compared to those produced by biological organisms.The purpose of this project was to explore the effects of high mutation rates on behavioral variability in environments that arranged different reinforcer rates and magnitudes.Behavioral variability increased with the rate of mutation. High reinforcer rates and magnitudes reduced these effects; low reinforcer rates and magnitudes augmented them. These results are in agreement with live - organism research on behavioral variability. Various combinations of mutation rates, reinforcer rates, and reinforcer magnitudes produced similar high-level outcomes(equifinality).These findings suggest that the independent variables that describe an experimental condition interact; that is, they do not influence behavior independently.These conclusions have implications for the interpretation of high levels of variability, mathematical undermatching, and the matching theory. The last part of the discussion centers on a potential biological counterpart for the rate of mutation, namely spontaneous fluctuations in the brain’s default mode network."
    },


    {
        citation:
            "Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.",
        date: "09/08/2019",
        type: "preprint",
        time: "09/08/2019",
        authors: ["Popa (2019)"],
        keywords: [],

        urls: [
            { name: "PsyArXiv", link: "https://psyarxiv.com/m87an/" },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/335688963_Psychology_20_The_Emergence_of_Individuality",
            },
        ],
        abstract:
            "Physical forces acting on particles explain how physical systems change over time. Evolutionary forces acting on populations of genomes explain change in the genetic structure of populations across generations. Change in psychological systems - i.e. human development, or learning - is not yet understood. Although dynamic principles have been proposed, their target remained vaguely defined. Here I identified their target and I showed how it ties into psychology.",


    },


    {
        citation:
            "Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.",
        date: "09/30/2019",
        type: "preprint",
        authors: ["Popa (2019)"],

        keywords: ["Python", "Tkinter"],

        urls: [
            { name: "PsyArXiv", link: "https://psyarxiv.com/wgp4e/" },
            { name: "GitHub", link: "https://github.com/ap-dev1/automata/" },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/336143797_Imperfect_Automata_Effects_of_mutation_on_the_evolution_of_automaton_01101110_Rule_110",
            },
        ],
        abstract:
            "Novelty requires error. Automata are deterministic systems, governed by precise rules. The question examined here was: what if every new cell has a small probability to be written incorrectly, i.e. to mutate from 0 to 1 or viceversa. ... Low mutation probabilities facilitated the emergence of new patterns and structures, disconnected from the initial conditions.",
    },






];

export default infoPublications;
