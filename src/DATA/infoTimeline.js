


import placeholder_blank from "../assets/placeholder_blank.png"

import paper_wolfram_2009 from "../assets/paper_wolfram_2009.png"
import paper_modern_matching_2010 from "../assets/paper_modern_matching_2010.png"
import paper_bivariate_matching_2012 from "../assets/paper_bivariate_matching_2012.png"
import hamming_abs_reinf_rate from "../assets/placeholders/hamming_abs_reinf_rate.png";
import abai_2014_radars_originals from "../assets/abai_2014_radars_originals.png"
import hamming_paper_page1 from "../assets/hamming_paper_page1.png"

// ----    OLD ONES  ---------------------



import projectAutomata1 from "../assets/prj_img_imperfect_automata.jpg";

import ABAI_2014_Chicago from "../assets/abai_darwin_sqab/ABAI_2014_Chicago.png";
import ABAI_2014_Andrei from "../assets/abai_darwin_sqab/ABAI_2014_Andrei.png";

import SpARC_01_Adekunle from "../assets/sparc2016/SpARC_01_Adekunle.png";
import SpARC_02_1_Tang from "../assets/sparc2016/SpARC_02_1_Tang.png";
import SpARC_06_1_Adekunle from "../assets/sparc2016/SpARC_06_1_Adekunle.png";
import SpARC_05_1_Forbes from "../assets/sparc2016/SpARC_05_1_Forbes.png";
import SpARC_07_1_Shen from "../assets/sparc2016/SpARC_07_1_Shen.png";

import SpARC_10_1_Adekunle from "../assets/sparc2016/SpARC_10_1_Adekunle.png";
import SpARC_11_1_Shen from "../assets/sparc2016/SpARC_11_1_Shen.png";
import SpARC_12_1_Booher from "../assets/sparc2016/SpARC_12_1_Booher.png";
import SpARC_14_1_Shen from "../assets/sparc2016/SpARC_14_1_Shen.png";
import SpARC_15_1_Waithe from "../assets/sparc2016/SpARC_15_1_Waithe.png";

import SpARC_16_1_Grissom from "../assets/sparc2016/SpARC_16_1_Grissom.png";

import ABAI_2017_5 from "../assets/abai_darwin_sqab/ABAI_2017_5.png";
import ABAI_2017_6 from "../assets/abai_darwin_sqab/ABAI_2017_6.png";

import wcalb2017_extinction08 from "../assets/wcalb2017_extinction08.png";

import etbd_adhd_slide_1 from "../assets/etbd_adhd_slide_1.png";
import phd_committee from "../assets/stripes/phd_committee.png";

import Pos01_1_pos from "../assets/triangles/Pos01_1_pos.png";
import Neg04_1_neg from "../assets/triangles/Neg04_1_neg.png";
import Trn04_2_pos from "../assets/triangles/Trn04_2_pos.png";
import Trn04_3_neg from "../assets/triangles/Trn04_3_neg.png";
import Trn04_4_ext from "../assets/triangles/Trn04_4_ext.png";

import projectCardSorting from "../assets/prj_img_personal_values.png";

import phd_etbd_humans_1 from "../assets/phd_etbd_humans_1.png";
import phd_etbd_humans_2 from "../assets/phd_etbd_humans_2.png";

import abai_2014_slide1 from "../assets/abai_2014_slide1.png";
import abai_2014_slide2 from "../assets/abai_2014_slide2.png";

import change_in_state_2 from "../assets/change_in_state_2.png";



// var gDrive = "https://drive.google.com/drive/folders/1d6QlunZ_zh-mTXB1H2u0C5DQC7Vjmq5U?usp=sharing";



var infoTimeline = [

    {
        title: 'Mathematical models & computational theories',
        nickname: "Emory 2009",
        fontFam: "Roboto",

        date: "05/02/2009",
        type: 'invited talk Emory University',
        role: "invited talk",
        authors: ["Popa & McDowell (2009)"],
        tags: [],
        keywords: ["ETBD", "conference", "Emory University"],
        description: "<b>Mathematical</b> models <b>describe</b> the behavior of biological agents in specific environments. <b>Computational</b> theories are essentially computer programs that implement algorithms that <b>generate</b> behavior. The algorithms implement theoretical assumptions about how learning works in biological agents. Mathematical models can be used to verify these assumptions.",
        img: [paper_modern_matching_2010, paper_bivariate_matching_2012],
        captions: ["paper_modern_matching_2010", "paper_bivariate_matching_2012"],
        urls: [
            //{ name: "", link: "" },
        ],
        // citation: "Popa, A., & McDowell, J J. (2009). A Computational Model of Adaptive Behavior Dynamics. Emory University, Department of Psychology, Annual Research Festival. Atlanta, GA",

        references: [
            "Popa, A., & McDowell, J J. (2009). A Computational Model of Adaptive Behavior Dynamics. Emory University, Department of Psychology, Annual Research Festival. Atlanta, GA",
            "McDowell, J. J, & Popa, A. (2010). Toward a mechanics of adaptive behavior: Evolutionary dynamics and matching theory statics. Journal of the Experimental Analysis of Behavior, 94, 241-260.",
            "McDowell, J, J., Popa, A., & Calvin, N. (2012). Selection Dynamics in Joint Matching to Rate and Magnitude of Reinforcement. <i>Journal of the Experimental Analysis of Behavior</i>, <i>98</i>, 199-212.",
        ],
    },



    {
        title: "Emergence",
        custom_item: "emergence_demo",


        fontFam: "Roboto",

        nickname: "Beh Proc",

        date: "07/01/2009",
        type: "journal article",
        authors: ["McDowell & Popa (2009)"],
        role: "CO-INVESTIGATOR (journal article; research, empirical)",
        tags: [
            "Excel/VBA",
            "hypothesis testing",
            "model selection",
            "ensemble fitting",
            "residual analysis",
        ],
        keywords: ["Wolfram", "complex systems", "emergence", "Elementary Cellular Automata", "cellular automaton"],


        description: "These results are a big deal because they emerge, unguided, from simple rules. There is no conceptual or computational connection between what happens at generation level and what happens at macro level. The outcome cannot be deduced analytically from the initial conditions. That is precisely what makes ETBD special: the disconnection between mechanisms and outcomes.",

        img: [paper_wolfram_2009],
        captions: [
            "Fig. 5. Image of a section of cellular automaton output, a cumulative record, and a log IRT survivor plot for a Rule 22 (top row) and a Rule 30 (bottom row) cellular automaton. The cumulative records and log survivor plots were constructed from a column of the cellular automaton output where each black cell was taken to represent a response.",
        ],
        urls: [
            { name: "Pubmed", link: "http://www.ncbi.nlm.nih.gov/pubmed/19429227" },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/24414894_Beyond_continuous_mathematics_and_traditional_scientific_analysis_Understanding_and_mining_Wolfram's_A_New_Kind_of_Science",
            },
        ],
        // citation:
        //     "McDowell, J. J, & Popa, A. (2009). Beyond continuous mathematics and traditional scientific analysis: Understanding and mining Wolfram's A new kind of science. <i>Behavioural Processes</i>, 81, 343-352.",

        references: [

            "McDowell, J. J, & Popa, A. (2009). Beyond continuous mathematics and traditional scientific analysis: Understanding and mining Wolfram's A new kind of science. <i>Behavioural Processes</i>, 81, 343-352.",
            "Popa, A., & McDowell, J J. (2010). Evolutionary Behavior Dynamics causally generates both molar and molecular properties of behavior. Symposium: The Molar-Molecular debate: A further discussion on the unresolved issue. Discussant: William M. Baum, Ph.D. Presented at the 36th Annual Convention of the Association for Behavior Analysis International, San Antonio, TX.",
        ],
    },



    {
        title: "Hamming Distances and CODs",
        custom_item: "hamming_demo",

        nickname: "M.A.",
        date: "12/20/2009",
        type: "Masters's Thesis",
        role: "Master of Arts",
        tags: [
            "Master of Arts",
            "Behavioural Processes",
            "journal article",
            "changeover delay",
            "hamming",
            "matching",
            "sensitivity",
            "M.A.",
            "Hamming Distance",
            "education",
            "deggree",
        ],
        authors: ["Popa (2009)", "Popa & McDowell (2010)"],
        committee: "Dr. Jack McDowell (chair), Dr. Eugene Emory, Dr. Philip Wolff",
        keywords: ["Masters Thesis", "ETBD", "Hamming Distances", "Changeover Delay", "matching", "sensitivity",],
        description:
            "Remeber the changeover delay you experienced above? McDowell et al (2008) suggested that it might have a functional corespondent in ETBD - namely in the Hamming Distance that separates the target classes. Exploring this idea was my first significant investigation into ETBD and its innerworkings. My work revealed that the ETBD equivalent of a COD was the overall degree of similarity between the target classes, measured in Hamming Distances (Popa, 2013; pp.19-21; figure 4, page 111).<br/><br/><b>Masters committee</b>: Dr. Jack McDowell (chair), Dr. Eugene Emory, Dr. Philip Wolff",

        img: [hamming_paper_page1],
        captions: ["hamming_paper_page1"],

        urls: [
            {
                name: "Emory ETD",
                link: "https://etd.library.emory.edu/concern/etds/8k71nj12p?locale=en",
            },

            // {
            //     name: "ReshGate",
            //     link: "https://www.researchgate.net/publication/41427297_The_effect_of_Hamming_distances_in_a_computational_model_of_selection_by_consequences",
            // },

            // { name: "Pubmed", link: "http://www.ncbi.nlm.nih.gov/pubmed/20152891" },

        ],
        // citation:
        //     "Popa, A., & McDowell, J. J. (2010). The effect of Hamming distances in a computational model of selection by consequences. Behavioural Processes, 84, 428-434.",

        references: [
            "Popa, A., & McDowell, J J. (2009).Hamming cliffs in a computational model of selection by consequences. Poster presented at the 32nd Annual Meeting of the Society for the Quantitative Analysis of Behavior, Phoenix, AZ.",

            "Masters thesis reference",

            "Popa, A., & McDowell, J.J. (2010).The effect of Hamming distances in a computational model of selection by consequences.Behavioural Processes, 84, 428 - 434.",

            "Class discriminability as COD - SQAB 2011",

            "Popa 2013",

        ],
    },


    {
        title: "Selection events as positive reinforcers",

        nickname: "SQAB 2010",

        custom_item: "emergence_demo",

        fontFam: "Roboto",

        date: "05/28/2010",
        type: "SQAB poster",
        authors: ["Popa & McDowell (2010)"],
        role: "first author",
        keywords: ["matching assumption"],
        tags: [
            "VBA/Excel",
            "hypothesis testing",
            "model selection",
            "ensemble fitting",
            "residual analysis",
        ],

        description: "ETBD implements a Darwinian account. The analogy between learning and evolution stands on the equivalence between selection and reinforcement.",

        // description: "According to matching theory, B1/B2 should depend only on r1/r2, but that was not the case in ETBD: r1/r2 interacted with the <b>overall reinforcement rate</b>, <b>reinforcer magnitude</b>, <b>COD</b>, and <b>mutation rate</b>.",

        // description: "According to matching theory, B1/B2 should depend only on r1/r2, but that was not the case in ETBD. In ETBD, B1/B2 varied noticeably with changes in <b>overall reinforcement rate</b>, <b>reinforcer magnitude</b>, <b>COD</b>, and <b>mutation rate</b>. <br/><br/> To understand how variables interact in ETBD means to figure out how they influence behavior at generation level, <i>here-and-now</i>. What emerges is the accumulation of these effects.",


        // description: "According to matching theory, B1/B2 should depend only on r1/r2. In ETBD, B1/B2 varied noticeably with changes in <b>overall reinforcement rate</b>, <b>reinforcer magnitude</b>, <b>COD</b>, and <b>mutation rate</b>. <br/><br/> Independent variables <i>interact</i>, but what does that <i>mean</i>? Specifically, I wanted to know <b>1)</b> how do IVs influence behavior at generation level, <i>here-and-now</i>, and <b>2)</b> how these local effects become preference patterns with specific properties.",

        abstract: "McDowell and Popa (in press) showed that when running concurrent schedules, experimental settings designed to reasonably sample the reinforcement ratio domain may not adequately sample the absolute reinforcement rate domain.  For example, a concurrent RI 10 RI 20 has a reinforcement ratio of 2:1, equal to a concurrent RI 100 RI 200; evidently, the absolute reinforcement rates differ considerably. McDowell and Popa suggested that the overall absolute reinforcement rate in a concurrent schedule might affect behavior generated by the computational model. Systematic and thorough sampling of the absolute reinforcement rate domain in a series of computational experiments confirmed this hypothesis. <b>The results</b> showed that as the overall absolute reinforcement rate increased, behavior generated by the computational model became less sensitive to changes in parameters related to reinforcer value, changeover delay, and impulsivity.",

        img: [hamming_abs_reinf_rate, paper_modern_matching_2010], //paper_mcdowell_popa_2010_fig, mcdowell_popa_2010_paper,
        captions: ["hamming_abs_reinf_rate", "paper_modern_matching_2010"],

        urls: [
            { name: "SQAB 2010", link: "https://www.sqab.org/programs/2010.pdf" },
        ],
        // citation:
        //     "McDowell, J. J, & Popa, A. (2010). Effects of overall absolute reinforcement rate in a computational model of selection by consequences. Journal of the Experimental Analysis of Behavior, 94, 241-260.",

        references: [
            "McDowell, J. J, & Popa, A. (2010). Effects of overall absolute reinforcement rate in a computational model of selection by consequences. Journal of the Experimental Analysis of Behavior, 94, 241-260.",
        ],
    },



    {
        title: "<i>Mutation</i>, behavior variability, and ADHD",
        nickname: "Qual",
        // fontFam: "Diploma",
        // fontFam: "'Press Start 2P', cursive",
        // fontFam: "'Special Elite', cursive",
        //fontFam: "'Yellowtail', cursive",

        date: "04/15/2011",
        type: "Qualifying Exam",
        role: "Doctoral Candidate",
        authors: [], //"Popa (2011)"
        committee: "Dr. Robert Hampton (chair), Dr. Irwin Waldman, Dr. Philip Wolff",
        keywords: ["candidacy"],
        tags: [],
        description:
            "The 'Qual' was the last requirement on the way to candidacy; I passed mine in April 2011, in front of a committee composed of Dr. Robert Hampton (chair), Dr. Irwin Waldman, and Dr. Philip Wolff. <br/><br/>My dissertation proposal was accepted a few month later. For my project I explored the connection between <i>mutation</i> and ADHD and ETBD's potential to predict human behavior.",

        img: [],
        captions: ["zfsdzgfgvzd", "dfgsdfgbfnsf"],

        urls: [
            //{ name: "", link: "" },
        ],

        // citation: "",
        references: [
            "Popa, A., & McDowell, J J. (2011). A Computational Model of Selection by Consequences: Evidence that Mutation is Computationally Equivalent to Impulsivity. Paper presented at the 37th Annual Convention of the Association for Behavior Analysis International, Denver, CO.",

        ],
    },



    // {
    //     title: "<i>Mutation</i>, behavior variability, and ADHD",
    //     nickname: "Qual",
    //     // fontFam: "Diploma",
    //     // fontFam: "'Press Start 2P', cursive",
    //     // fontFam: "'Special Elite', cursive",
    //     //fontFam: "'Yellowtail', cursive",

    //     date: "04/15/2011",
    //     type: "Qualifying Exam",
    //     role: "Doctoral Candidate",
    //     authors: [], //"Popa (2011)"
    //     committee: "Dr. Robert Hampton (chair), Dr. Irwin Waldman, Dr. Philip Wolff",
    //     keywords: ["candidacy"],
    //     tags: [],
    //     // description:
    //     //     "The 'Qual' was the last requirement on the way to candidacy. I passed mine in April 2011. My dissertation project was accepted a few month later.<br/><br/>For my project I tackled the connection between <i>mutation</i> and ADHD.<br/><br/>My main goals were to verify if ETBD can simulate ADHD symptoms, treatments, and developmental trajectories, and if ETBD data is relevant to human behavior. In both cases, the answer was yes.<br/><br/><b>Qualifying Exam committee</b>: Dr. Robert Hampton (chair), Dr. Irwin Waldman, Dr. Philip Wolff",

    //     description:
    //         "The 'Qual' was the last requirement on the way to candidacy. I passed mine in April 2011. My dissertation project was accepted a few month later.<br/><br/><b>Qualifying Exam committee</b>: Dr. Robert Hampton (chair), Dr. Irwin Waldman, Dr. Philip Wolff",

    //     img: [],

    //     urls: [
    //         //{ name: "", link: "" },
    //     ],

    //     // citation: "",
    //     references: [
    //         "Popa, A., & McDowell, J J. (2011). A Computational Model of Selection by Consequences: Evidence that Mutation is Computationally Equivalent to Impulsivity. Paper presented at the 37th Annual Convention of the Association for Behavior Analysis International, Denver, CO.",

    //     ],
    // },




    {
        studyInfo: [

            { name: "Choice & Conditioned Reinforcement" },
            { location: "Emory University" },
            { dates: "2011 - 04/2013" },
            { irb: ["eIRB0000000", "eIRB-AMD-00000000"] },
            { pi: ["Andrei Popa"] },
            { ci: ["Jack J McDowell, ", "Nick/Olivia Calvin"] },
        ],

        title: "Fast matching: from bits to human behavior",
        nickname: "ABAI 2012",
        fontFam: "Roboto",

        date: "05/26/2012",
        type: "talk, ABAI 2012",
        role: "SPEAKER (talk)",
        authors: ["Popa & McDowell (2012)"],
        technologies: ["VB.Net", "Excel/VBA",],

        keywords: ["research", "thesis", "fast matching"],
        tags: [],

        // description: "To accomplish two and three I designed and implemented a concurrent-schedule procedure that allowed me to compare human and computational data side by side.<br/><br/>To verify ETBD predictions, I investigated human behavior under different COD requirements, as shown in the demo. The results went in the direction predicted by ETBD for all eight dependent variables (pp. phd). Parts of this work were presented at ABAI (2012).<br/><br/>< p className = 'p-left' style = {{ color: 'rgb(255, 128, 49)', }}> Then, I explored human behavior under different COD requirements and I compared it with the ETBD. < br /> <br /></p ><br/><br/><p className='p-left' style={{ color: 'rgb(255, 128, 49)', }}>Finally, I used traditional instruments to measure ADHD symptoms in the same participants and I compared the scores with measures of choice behavior.</p>",


        description: "To accomplish two and three I designed and implemented a concurrent-schedule procedure that allowed me to compare human and computational data side by side.<br/><br/>To verify ETBD predictions, I investigated human behavior under different COD requirements, as shown in the demo. The results went in the direction predicted by ETBD for all eight dependent variables (pp. phd). < br /> <br />Finally, I used traditional instruments to measure ADHD symptoms in the same participants and I compared the scores with measures of choice behavior.",

        // img: [ABAI_2012_event, phd_etbd_humans_1, phd_etbd_humans_2,],
        img: [phd_etbd_humans_1, phd_etbd_humans_2,],
        captions: ["phd_etbd_humans_1", "phd_etbd_humans_2"],

        urls: [
            {
                name: "ABAI 2012",
                link: "https://www.abainternational.org/events/program-details/event-detail.aspx?sid=17728&by=ByArea#s28_0",
            },
            {
                name: "ResGate",
                link: "yyy",
            },
        ],
        // citation:
        //     "Popa, A., & McDowell, J J. (2012). The Computational Theory of Behavior Dynamics Predicts Effects of COD on Behavioral Variability: Evidence from experiments with human participants. Paper presented at the 38th Annual Convention of the Association for Behavior Analysis International, Seattle, WA.",

        abstract:
            "Popa and McDowell (2010) showed that the Hamming Distance, a particular mathematical feature of McDowell’s Evolutionary Theory of Behavior Dynamics (ETBD; McDowell, 2004, 2010) is computationally equivalent to the changeover delay (COD; Findley, 1954) used in experiments with live organisms. Popa and McDowell (2011) suggested that increasing the computational COD requirement reduces behavioral variability in a virtual organism animated by the ETBD. The present paper further investigated a wide range of computational COD values and used the results to formulate predictions about the effects of COD requirements on the behavioral variability of humans in concurrent-schedules environments. As predicted by ETBD, the rate of switching between alternatives was systematically decreased by increased COD requirements. These results provide further support for the ETBD as a valid account of behavior dynamics, showing that it is not only able to produce outcomes congruent with known behavior statics (the Matching Law; McDowell & Popa, 2010), but it can also formulate predictions about the behavior of live organisms. Moreover, these findings suggest that high behavioral variability may be a natural outcome of the selection pressure exerted by unstructured environments. The implications for ADHD-symptoms are discussed within the framework provided by previous research (Neuringer, 2010; Taylor et al, 2010).",

        references:
            [
                "Popa, A., & McDowell, J J. (2012). The Computational Theory of Behavior Dynamics Predicts Effects of COD on Behavioral Variability: Evidence from experiments with human participants. Paper presented at the 38th Annual Convention of the Association for Behavior Analysis International, Seattle, WA.",
            ],
    },



    {
        title: "The Emergence of High-Level Phenotypes",
        nickname: "Ph.D.",
        date: "12/24/2013",
        type: "doctoral dissertation",
        role: "Doctor of Philosophy",
        authors: ["Popa (2013)", "Hackett (2019)"],
        keywords: ["Doctor of Philosophy", "dissertation", "education", "deggree", "PhD"],
        tags: ["synthetic data", "human data"],

        description:
            "My work showed that ETBD can simulate clinically-relevant behaviors and interventions and that ETBD data can be used to predict human behavior. As for the third goal - properties of choice behavior were compared with scores on measures of ADHD that are popular among researchers: CPT-IP, UPPS-P, SSS-V, A-ADDES, etc. The results were inconclusive, likely due to a lack of high impulsivity scores in the human sample (Popa, 2013). McDowell's lab later confirmed my hypothesis (Hackett, 2019).",
        img: [
            phd_committee,
            etbd_adhd_slide_1,
        ],
        captions: ["phd_committee", "etbd_adhd_slide_1"],

        urls: [
            {
                name: "Popa (2013)",
                link: "https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en",
            },
            { name: "Hackett (2019)", link: "https://etd.library.emory.edu/concern/etds/rr171z32k?locale=en" },
            { name: "Study info", link: "gDrive" },
        ],

        // citation:
        //     "Popa (2013). An Evolutionary Theory of Behavior Dynamics - Complexity, Darwinism, and the Emergence of High-Level Phenotypes. Doctoral Dissertation. Retrieved: https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en. ISBNxxxxxxxxxxxxxxx",

        abstract: "The main purpose of this project was to explore the effects of mutation and the environment's value and conduciveness on various dimensions of behavioral variability, in continuous choice environments. Secondly, qualitative predictions made by the Evolutionary Theory about the effects of changeover delays (COD) on behavior variability were verified against the behavior of college students in equivalent environments. The continuous choice behavior of college students was correctly predicted on eight out of eight behavioral dimensions. Thirdly, low-level characteristics of students' continuous choice behavior were compared with traditional measures of impulsivity and sustained attention, in an effort to investigate the potential equivalence between mutation and a property of the nervous system that produces impulsivity-like symptoms. The results were inconclusive, likely due to a lack of extreme impulsivity scores in the human sample. The findings presented in this paper provided significant additional evidence for the selectionist account as a valid mechanism of behavior change. In addition, the knowledge generated by the Evolutionary Theory provided important insights about clinically-relevant phenomena, such as disordered variability (or impulsivity) and raise the possibility of using the theory as a platform for simulating the emergence of specific high-level phenotypes. These implications appear even more fascinating considering that a connection with mental health was not explicitly sought, nor can it be traced to the inner-workings of the theory. This challenges our current understanding of mental illness and provides a new way of thinking about the evolution of behavioral repertoires and their emergent high-level characteristics.",


        references: [
            "Popa (2013). An Evolutionary Theory of Behavior Dynamics - Complexity, Darwinism, and the Emergence of High-Level Phenotypes. Doctoral Dissertation. Retrieved: https://etd.library.emory.edu/concern/etds/9880vr10s?locale=en. ISBNxxxxxxxxxxxxxxx",
        ],

    },


    {
        title: "Multifinality and equifinality, step by step",
        nickname: "ABAI 2014",
        fontFam: "Roboto",
        date: "05/24/2014",
        type: "talk, ABAI 2014",
        role: "SPEAKER (talk, ABAI 2014)",
        authors: ["Popa, Calvin, & McDowell (2014)"],
        keywords: ["ABAI 2014", "causation", "complexity", "mechanisms",],
        tags: [],
        description: "ADHD-like symptoms were observed in contexts where the probability to respond <i>again</i> in the same target class was low.<br/><br/>Schedule 6 ...   Mechanisms  ...   <br/><br/><br/><br/>",
        img: [
            abai_2014_radars_originals,
            abai_2014_slide1,
            ABAI_2014_Chicago,
            ABAI_2014_Andrei,
            abai_2014_slide2,
        ],
        captions: ["abai_2014_radars_originals",
            "abai_2014_slide1",
            "ABAI_2014_Chicago",
            "ABAI_2014_Andrei",
            "abai_2014_slide2",],

        urls: [
            {
                name: "ABAI 2014",
                link: "https://www.abainternational.org/events/program-details/event-detail.aspx?sid=40586&by=ByArea#s30_0",
            },
        ],
        // citation:
        //     "Popa, A., Calvin, N., & McDowell, J J. (2014). Multifinality and Equifinality in an Evolutionary Theory of Behavior Dynamics. Paper presented at the 40th Annual Convention of the Association for Behavior Analysis International, Chicago, IL.",

        abstract:
            "Skinner (1981) suggested that natural selection operates not only at the biological level, but is also responsible for the evolution of behavioral repertoires throughout an organism’s lifetime. McDowell (2004) implemented the selectionist account in a computational theory of behavior dynamics. The theory causes a population of behaviors to evolve through time under the selection pressure exerted by the environment. It has been tested under a variety of conditions and the emergent outcomes were repeatedly  shown to be qualitatively and quantitatively indistinguishable from those displayed by live organisms (McDowell, in press). The present project investigated the effects of various environmental variables (e.g. reward magnitude) on the behavior variability of virtual organisms characterized by various mutation rates. High mutation rates produced behavioral constellations similar to those displayed by ADHD-diagnosed children. These effects were counteracted by arranging richer or more structured environments (higher changeover delay). Interestingly, arranging low-value environments caused organisms characterized by low mutation rates to display abnormally high levels of variability. These findings suggest that similar high-level phenotypes such ADHD may be caused by various combinations of organismic and environmental features (equifinality), during a dynamic process governed by Darwinian forces.",

        references: [
            "Popa, A., Calvin, N., & McDowell, J J. (2014). Multifinality and Equifinality in an Evolutionary Theory of Behavior Dynamics. Paper presented at the 40th Annual Convention of the Association for Behavior Analysis International, Chicago, IL.",
        ],
    },



    {
        title: "Mutation rate, ADHD, and DMN activation",
        nickname: "JEAB 2016",
        fontFam: "Roboto",

        date: "03/01/2016",
        type: "journal article",
        role: "PRINCIPAL INVESTIGATOR (part of my thesis turned journal article)",
        authors: ["Popa & McDowell (2016)"],

        keywords: ["Popa & McDowell, 2016", "DMN"],
        tags: [],
        description:
            "The brain's Default Mode Network, or DMN, is a plausible equivalent for mutation. This - and much more - can be investigated experimentally. By syncronizing fast matching with other technologies - EEG, Eye Trackers, etc. - we can investigate real-time changes in behavior, attention, and brain activity <i>simoultaneously</i>.",
        img: [
            // paper_popa_mcdowell_2016_end,
            // paper_popa_mcdowell_2016_etbd_humans,
            // paper_popa_mcdowell_2016_fig9,
            placeholder_blank
        ],
        captions: ["placeholder_blank_blankkk"],

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
        // citation:
        //     "Popa, A., & McDowell, J, J. (2016). Behavioral Variability in an Evolutionary Theory of Behavior Dynamics. The Journal of the Experimental Analysis of Behavior, 105 (2), 270-290.",

        abstract:
            "A plausible biological counterpart for mutation is the activity of the DMN - Default Mode Network, with high mutation rates coresponding to high levels of DMN activation. <br/><br/>These Fast matching procedures can be used in conjunction with  <br/><br/> ",

        references: [
            "Popa, A., & McDowell, J, J. (2016). Behavioral Variability in an Evolutionary Theory of Behavior Dynamics. The Journal of the Experimental Analysis of Behavior, 105 (2), 270-290.",
        ],
    },


    {
        title: "The other side of learning",

        studyInfo: [

            { name: "ASC study name" },
            { location: "Agnes Scott University" },
            { dates: "10/2015 - 05/2016" },
            { irb: ["ASC IRB xxxxxxxxx", "xxxxxx"] },
            { pi: ["Dr. Andrei Popa"] },
            { ci: [""] },
        ],

        nickname: "SpARC 2016",
        fontFam: "Roboto",

        date: "04/01/2016",
        type: "research study, human choice",
        time: "04/01/2016",
        role: "STUDY COORDINATOR",
        authors: [
            "<sup>U</sup>Adekunle & Popa (2016)",
            "<sup>U</sup>Booher & Popa (2016)",
            "<sup>U</sup>Forbes & Popa (2016)",
            "<sup>U</sup>Grissom & Popa (2016)",
            "<sup>U</sup>Shen & Popa (2016)",
            "<sup>U</sup>Tang & Popa (2016)",
            "<sup>U</sup>Waithe & Popa (2016)",
            "Popa & Grissom (2017)",
        ],
        technologies: ["VB.Net", "Excel/VBA",],

        keywords: ["Agnes Scott College", "fdtyghjh"],
        tags: ["VB.Net"],
        description: "The goal of this study was to learn more about aversive conditioning and stimulus control in humans. And learned we did.",

        // "During my appointment at Agnes Scott (2015-2016) my mentees and I explored concurrent schedules of reinforcement and punishment, escape behavior, extinction-induced phenomena, invisible target classes of different dimensions, etc."

        img: [
            SpARC_01_Adekunle,
            SpARC_02_1_Tang,
            SpARC_06_1_Adekunle,
            SpARC_05_1_Forbes,
            SpARC_07_1_Shen,
            SpARC_10_1_Adekunle,
            SpARC_11_1_Shen,
            SpARC_12_1_Booher,
            SpARC_14_1_Shen,
            SpARC_15_1_Waithe,
            SpARC_16_1_Grissom,
            wcalb2017_extinction08,
        ],

        captions: ["SpARC_01_Adekunle",
            "SpARC_02_1_Tang",
            "SpARC_06_1_Adekunle",
            "SpARC_05_1_Forbes",
            "SpARC_07_1_Shen",
            "SpARC_10_1_Adekunle",
            "SpARC_11_1_Shen",
            "SpARC_12_1_Booher",
            "SpARC_14_1_Shen",
            "SpARC_15_1_Waithe",
            "SpARC_16_1_Grissom",
            "wcalb2017_extinction08",],

        urls: [
            { name: "SpARC", link: "https://www.agnesscott.edu/sparc/index.html" },
            { name: "SpARC INDEX", link: "https://www.agnesscott.edu/sparc/" },
            {
                name: "WCALB 2017",
                link: "https://static1.squarespace.com/static/57b732f259cc68697145ea01/t/5b7dbd231ae6cf8700f3d604/1534967075831/Past+Programs+2017.pdf",
            },
        ],

        // citation:
        //     "The Spring Annual Research Conference is held at Agnes Scott each April to provide students and faculty with an opportunity to present their work to the campus community. As an interdisciplinary conference, SpARC fosters essential connections across academic disciplines and encourages an ongoing dialogue between the liberal arts and sciences.",

        abstract: "The Spring Annual Research Conference is held at Agnes Scott each April to provide students and faculty with an opportunity to present their work to the campus community.As an interdisciplinary conference, SpARC fosters essential connections across academic disciplines and encourages an ongoing dialogue between the liberal arts and sciences. My mentees (bold font) and I contributed five (5) posters and three (3) talks, counting towards ~15% of all research projects presented at SpARC 2016. Note that all eight were novel contributions to the field. I would like to take this opportunity to thank my former students and research assistants, AlessandraXi Zhangand Olivia Zivot. Without their contribution, managing this enterprise would have been challenging at best.",
        // citations:
        //     "Adekunle, O. & Popa, A. (2016). Higher Payoff or More Options? Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA. <br/> Booher, C. & Popa, A. (2016). Choice Behavior in Unsignaled Environments With and Without Immediate Negative Feedback. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.<br/> Forbes, V., & Popa, A. (2016). Human Choice Behaviors Before and After Extinction. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.<br/> Grissom, M. K., & Popa, A. (2016). Effects of Extinction on Human Escape Behavior. Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.<br/> Shen, R. & Popa, A. (2016). Is Competition Sufficient to Increase the Motivation to “Do Well”? Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.<br/> Tang, X., & Popa, A. (2016). Choice Behavior in Low Discriminability Conditions: Effects of the Operant Class Size. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.<br/> Waithe, O. Y., & Popa, A. (2016). The Effects of Imagery on Psychological Discomfort. Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",

        references: [
            "Popa, A. & Grissom, M. K. (2017). Extinction-Induced Variability on Negatively Reinforced Human Behavior. Paper presented at the Winter Conference on Animal Learning & Behavior, Park City, UT.",
            "Adekunle, O. & Popa, A. (2016). Higher Payoff or More Options? Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            "Booher, C. & Popa, A. (2016). Choice Behavior in Unsignaled Environments With and Without Immediate Negative Feedback. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            "Forbes, V., & Popa, A. (2016). Human Choice Behaviors Before and After Extinction. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            "Grissom, M. K., & Popa, A. (2016). Effects of Extinction on Human Escape Behavior. Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            "Shen, R. & Popa, A. (2016). Is Competition Sufficient to Increase the Motivation to “Do Well”? Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            "Tang, X., & Popa, A. (2016). Choice Behavior in Low Discriminability Conditions: Effects of the Operant Class Size. Poster presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
            "Waithe, O. Y., & Popa, A. (2016). The Effects of Imagery on Psychological Discomfort. Paper presented at the Spring Annual Research Conference, Agnes Scott College, Decatur, GA.",
        ],
    },


    {
        title: "Development, step by step",
        nickname: "ABAI 2017",
        fontFam: "Roboto",

        date: "05/28/2017",
        type: "talk, ABAI 2017",
        time: "05/28/2017",
        role: "PRINCIPAL INVESTIGATOR (talk, ABAI 2017)",
        authors: ["Popa (2017)"],

        keywords: ["ABAI 2017", "talk", "conference", "yes, dicks"],
        tags: [],
        description: "The framework described in Popa (2019), in the context of psychology.   <br/><br/>  <br/><br/>",
        // img: [ABAI_2017_1, ABAI_2017_2, ABAI_2017_3, ABAI_2017_4, ABAI_2017_5, ABAI_2017_6, ABAI_2017_7, ABAI_2017_8, ABAI_2017_9, ABAI_2017_10],
        img: [ABAI_2017_5, ABAI_2017_6],
        captions: ["ABAI_2017_5", "ABAI_2017_6"],

        urls: [
            {
                name: "ABAI 2017",
                link: "https://www.abainternational.org/events/program-details/event-detail.aspx?sid=53139&by=ByArea#s196_0",
            },
            {
                name: "Conference schedule",
                link: "https://www.abainternational.org/events/annual-2017.aspx",
            },
        ],
        // citation:
        //     "Popa, A., (2017). Towards a Dynamic Account of Human Development. Paper presented at the 43rd Annual Convention of the Association for Behavior Analysis International, Denver, CO.",

        abstract:
            "The biopsychosocial model acknowledges that high-level phenotypes (e.g., impulsivity, good at math, etc.) are multiply-caused by a plethora of contributing, interacting factors, such as specific genetic configurations, socio-economic status, culture, ethnicity, gender, and so on.  However, the model does not explain how these variables interact with each other or how, exactly, they contribute to a specific outcome. I submit to the reader a potential explanation. Drawing on theoretical advancements from the field of complex systems and on computational research on the dynamics of behavioral repertoires (McDowell, 2013; Popa, 2013; Popa & McDowell, 2016), the theory discussed here proposes that the interaction between agents and their environment consists of a continuous-choice process during which agents adapt to environmental changes. This process molds an individual’s context (e.g., income, culture, etc.) into robust collections of cognitive, emotional, and behavioral manifestations like “impulsivity”, “authoritative parent”, etc. The factors typically associated with impulsivity (for example) contribute to its emergence indirectly, by altering the relative value of existing options, and, by extension, the moment-to-moment probability of choosing one course of action over another. High-level phenotypes, therefore, cannot be directly explained by the contributing factors themselves, but by the moment-to-moment changes said factors produce in cognition and action.",

        references: [
            "Popa, A., Calvin, N., & McDowell, J J. (2013). Complexity, Emergence, and the Behavior of Organisms. Paper presented at the 39th Annual Convention of the Association for Behavior Analysis International, Minneapolis, MN.",

            // "Popa, A., Calvin, N., & McDowell, J J. (2013). Complexity, Emergence, and the Behavior of Organisms. Paper presented at the 39th Annual Convention of the Association for Behavior Analysis International, Minneapolis, MN.",

            "Popa, A. (2015). Towards an Evolutionary Account for the Dynamics of Cognizant Systems. Darwin Day Lecture Series, Georgia State University, Atlanta, GA.",

            "Popa, A. (2016). Population Thinking, Psychodiversity, and Human Development. Darwin Day Lecture Series, Georgia State University, Atlanta, GA.",

            "Popa, A., (2017). Towards a Dynamic Account of Human Development. Paper presented at the 43rd Annual Convention of the Association for Behavior Analysis International, Denver, CO.",
        ],
    },





    {
        title: "Triangles!",

        studyInfo: [

            { name: "name??" },
            { location: "Emory University, Oxford campus" },
            { dates: "10/2017 - 05/2018" },
            { irb: ["e IRB xxxxxxxxx", "xxxxxx"] },
            { pi: ["Dr. Keneth Carter", "Dr. Andrei Popa (<i>de facto</i>)"] },
            { ci: [""] },
        ],

        nickname: "Emory 2018",
        fontFam: "Roboto",

        date: "05/01/2018",
        type: "empirical research",
        role: "PRINCIPAL INVESTIGATOR (<i>de facto</i>)",
        authors: ["Popa & Carter (2018)"],
        technologies: ["VB.Net", "Excel/VBA",],

        keywords: ["fgchgbjk"],
        tags: ["VB.NET", "Python", "Pandas", "SciPy", "Matplotlib"],
        description:
            "Here we compared positively reinforced behavior and avoidance behavior in symmetrical environments (Popa & Carter, 2018). Participants discovered abstract rules twice as fast when correct responses acquired points (positive reinforcement) then when they prevented the loss of points (negative reinforcement). <br/><br/>",


        img: [Pos01_1_pos, Neg04_1_neg, Trn04_2_pos, Trn04_3_neg, Trn04_4_ext],
        captions: ["Pos01_1_pos", "Neg04_1_neg", "Trn04_2_pos", "Trn04_3_neg", "Trn04_4_ext"],

        urls: [{ name: "gDrive", link: "gDrive" }],

        // citation: "Emory University, Oxford College, IRB00101193, AM1_IRB00101193",

        references: ["gnsgnghmgjm", "fgnfhnb"],
    },




    {
        title: "ETBD.py",
        nickname: "Python",
        fontFam: "Roboto",

        date: "09/01/2018",
        type: "(research, computational modelling)",
        role: "PRINCIPAL INVESTIGATOR",
        technologies: ["Python", "Tkinter", "Postgress"],

        keywords: ["buyhbvjhb"],
        authors: [],

        tags: ["Python", "SciPy", "SQLite", "Postgres"],
        description:
            "This evolutionary theory is similar to the one described in McDowell (2004). ... <br/><br/><br/><br/><br/><br/><br/><br/><br/>",
        img: [placeholder_blank],
        captions: ["placeholder_blank"],

        urls: [
            //{name: "xxx", link:"xxx"},
            //{name: "GitHub", link: "xxx"}
        ],
        // citation: "",

        references: ["zxvxv", "mcvhncv"],
    },



    {
        title: "The Shape of Will",
        nickname: "PsyArXiv",
        fontFam: "Roboto",

        date: "09/08/2019",
        type: "preprint",
        time: "09/08/2019",
        role: "PRINCIPAL INVESTIGATOR",
        authors: ["Popa (2019a)"],
        keywords: ["hguhjbjkn"],
        tags: ["Problem Solving"],
        // description:
        //     "Close as it comes to the brain without being brain, per se. Causally speaking, changes in neuronal activation states begin after physicochemical changes, and before psychological phenomena, like cognitive, behavioral, emotional reactions. Fast and sensitive enough • to react to any immediate experience, no matter how subtle or short - lived(e.g., 'a look',subtle voice inflections, etc.) and • to be proximate cause for every form of expression(e.g., implicit cognition, thinking, carrying a conversation, ruminating, etc.). Complex and versatile enough to represent(i.e., 'encode') the richness of psychological dimensions and phenomena. Domain independent; common, binary - based representation for all psychological phenomena.Amenable to scientific investigation: Structures that can be described in terms of nodes and edges - like neurons and synapses - are called graphs. The transition between any two consecutive configurations of active neurons is equivalent to morphing one graph into another, again and again. These structures can be described mathematically and the transformations can be represented computationally.",

        description:
            "Neurons are located in a confined, 3-dimensional space. A neuron can be in one of two states: 1 or 0.<br/><br/> The neurons that 'fire' in a given window of time describe a shape, a configuration with measurable properties. The configuration keeps changing, as action potentials travel from cell to cell. <br/><br/> The streams of activation states is the material counterpart of all forms of experience and expression:  an agent that feels, notices, thinks, does - in real time.",

        // description:
        //     "The transformations that occur in the brain must occur in real time and must accomodate any form of experience and expression.<br/><br/><br/>Structures that can be described in terms of nodes and edges - like neurons and synapses - are called graphs. The transition between any two consecutive configurations of active neurons is equivalent to morphing one graph into another, again and again. These structures can be described mathematically and the transformations can be represented computationally.",

        /* 

        Neurons are located in a confined, 3-dimensional space. A neuron can be in one of two states: 1 or 0.<br/><br/> The neurons that "fire" in a given window of time describe a shape, a configuration with measurable properties. The configuration keeps changing, as action potentials travel from cell to cell. <br/><br/> The streams of activation states is the material counterpart of all forms of experience and expression:  an agent that feels, notices, thinks, does - in real time.
        */


        //caption: "Fig. 1. The transition between two configurations of active neurons is         equivalent to transforming on graph(t n ; left) into another(t n+ 1 ; right panel).",
        img: [change_in_state_2],
        captions: ["change_in_state_2"],

        urls: [
            { name: "PsyArXiv", link: "https://psyarxiv.com/m87an/" },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/335688963_Psychology_20_The_Emergence_of_Individuality",
            },
        ],
        citation:
            "Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.",

        references: [
            "Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.",
        ],
    },




    {
        title: "Imperfect Automata",
        nickname: "PsyArXiv",
        fontFam: "Roboto",

        date: "09/30/2019",
        type: "preprint",
        role: "",
        authors: ["Popa (2019b)"],

        keywords: ["hjhjbjn"],
        tags: ["Python", "Tkinter"],
        description:
            "Novelty requires error. Automata are deterministic systems, governed by precise rules. The question examined here was: what if every new cell has a small probability to be written incorrectly, i.e. to mutate from 0 to 1 or viceversa. ... Low mutation probabilities facilitated the emergence of new patterns and structures, disconnected from the initial conditions. <br/><br/><br/><br/>",
        img: [projectAutomata1],
        captions: ["projectAutomata1"],
        urls: [
            { name: "PsyArXiv", link: "https://psyarxiv.com/wgp4e/" },
            { name: "GitHub", link: "https://github.com/ap-dev1/automata/" },
            {
                name: "ResGate",
                link: "https://www.researchgate.net/publication/336143797_Imperfect_Automata_Effects_of_mutation_on_the_evolution_of_automaton_01101110_Rule_110",
            },
        ],
        // citation:
        //     "Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e.",

        references: [
            "Popa, Andrei. 2019. “Imperfect Automata: Effects of “mutation” on the Evolution of Automaton 01101110 (rule 110)” PsyArXiv. September 30. doi:10.31234/osf.io/wgp4e."
        ],
    },



    {
        title: "Hello web world!",
        nickname: "JS / MERN",
        fontFam: "Roboto",

        date: "11/01/2020",
        type: "MERN project",
        time: "10/05/2020",
        role: "",
        technologies: ["mongoDB", "Express", "React", "Node"],

        keywords: ["fghvhjb n"],
        authors: [],

        tags: [
            "React",
            "Node/Express",
            "MongoDB/Atlas",
            "DynamoDB",
            "RDS/Postgres",
        ],
        description:
            "My first MERN project was a simple card sorting activity: choose five cards from a deck of 80. It implements user registration and authentication, the activity itself, storing results, and redirecting the user to an updated home page. ",
        // +
        // "The first version was deployed with AWS and used DynamoDB for authentication data and RDS/Postgres for session data. The second version was deployed on Heroku and used MongoDB/Atlas for all app data. <br/><br/><br/><br/>",

        img: [projectCardSorting],
        captions: ["projectCardSorting"],

        urls: [
            { name: "GitHub", link: "https://github.com/ap-dev1/personal_values" },
        ],
        citation: "",

        references: ["cZDCx", "vzxv"],
    },



];

export default infoTimeline;
