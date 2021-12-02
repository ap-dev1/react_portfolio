import React, { Component } from 'react'
import '../styles/research.sass';

class MyResearch extends Component {

    // state={
    //     gDrive: 'https://drive.google.com/drive/folders/1d6QlunZ_zh-mTXB1H2u0C5DQC7Vjmq5U'
    // };


    // scrollToProjects = (e) => {
    //     e.preventDefault()
    //     document.getElementById('Projects').scrollIntoView({ block: 'start',  behavior: 'smooth' })
    // };


    // goToCredentials = (e) => {
    //     e.preventDefault()
    //     let gDrive = this.state.gDrive
    //     window.open(gDrive, '_blank')
    // };

    render() {

        return (

            <div id='MyResearch' className='fullscreen light'>
                <h1>Research</h1>
                <h5>- past, present, future -</h5>

                {/* <h2>How does behavior change over time, throughout an individual’s lifetime?</h2> */}

                <h2><b>How do nervous systems learn from experience?</b></h2>
                <h5>or</h5>
                <h2><i>How do connectoms come about?</i></h2>

{/* 
                <p>As children, our ability to act on our environments is limited. Over time, behavioral repertoires
                become rich, nuanced, and effective: new behaviors are learned, some fade away, while others
                become highly contextual. The basic principles that underlie these changes, that is, the
                dynamics of adaptive behavior, are yet to be understood.
                I approach this question from two, converging directions. I use computational modelling to
                implement dynamic theories of behavior change. In parallel, I use human laboratory studies to
                explore the fine-grained structure and temporal organization of adaptive behavior and to verify
computational findings.</p> */}

                <h2>Behavioral repertoires as Complex Systems</h2>
                <p>One of the more successful accounts was inspired by the analogy between learning and biological evolution (Pringle, 1951). The basic idea is straightforward: it proposes that, much like the phenotypes in a biopopulation, behavioral
                repertoires are shaped by low-level processes of selection and variation . These processes
                operate locally, here -and- now , and allow organisms to adapt in dynamic environments. Over
                time, they produce behavioral structures and properties that are difficult to predict
                by examining the processes themselves. 
                
                These high-level properties are called emergent and
                systems that exhibit emergence are referred to as complex systems (Holland, 1998; also in
                NOVA, 2007). Their dynamics can be studied computationally, as discussed in McDowell and
                Popa (2009): implement the system’s parts and processes in an abstract form, allow the system
                to evolve, and compare the emergent behavior with the behavior of biological organisms.
                http://www.pbs.org/wgbh/nova/nature/emergence.html
                </p>

                <h2>Computational Darwinism</h2>

                <p>The computational model discussed here (McDowell, 2004) implements a population of
                behaviors, positive reinforcement, and low-level rules of selection , recombination , and mutation .
                Behaviors have “phenotypes” and “genotypes”, represented by integers (e.g., 42) and their
                corresponding binary form (e.g., 101010). Phenotypes can be separated into target classes,
                functionally equivalent to pressing levers in an operant chamber. Target behaviors, on
occasions, can acquire reinforcers; non-target behaviors are never reinforced.</p>

                <p>An experiment begins with a random population (generation 1), equivalent to a naïve, untrained
                organism; from it, one behavior is chosen at random and emitted. The emission, equivalent to
                one lever press, triggers the Darwinian cycle, which transforms the existing population into a
                new one (generation 2). From it, one behavior is emitted, a third generation is created, and so
                on. Reinforcing events tend to concentrate the next generation around the just-reinforced
                phenotype. Non-reinforced emissions result in more dispersed, variable populations. The
emissions are recorded and analyzed as if they were the behaviors of a biological organism.</p>

                {/* <h1>PRE-CANDIDACY WORK (2007-2010)</h1>

                <h2>Agreement with mathematical descriptors of steady-state behavior</h2>
                <p>The field of quantitative analysis of behavior generated a wealth of fine-grained knowledge
                about operant behavior. This includes the “matching equations”, known to describe the overall
                relation between responses and reinforcers with great accuracy, and across species (for a
                review, see McDowell, 2013a). These equations were used to assess the behavior generated by the computational model. In McDowell and Popa (2010) we showed that when reinforcement
                rate varied (constant reinforcer magnitude), choice behavior was described in quantitative detail
                by Baum’s (1974) power function matching equation. In McDowell, Popa, and Calvin (2012) we
                showed that when both reinforcement rate and magnitude varied, choice behavior was well
                described by the bivariate (or generalized) matching equation (Baum & Rachlin, 1969; reviewed
                by Cording, McLean, & Grace, 2011). In both cases, the equations explained most of the
                variance preference patterns (pVAF > 98%) and yielded parameter values for sensitivity to
                reinforcement rate ( a r ~ 0.8) and magnitude ( a m ~ 0.6) indistinguishable from those observed in live
                organisms. These outcomes emerged, unguided, from the reiteration of Darwinian rules,
providing support for the evolutionary account of behavior dynamics.</p> */}

                {/* <h2>Changeover Delay, in the real world (COD) and in the computational model (Hamming COD )</h2>
                <p>The everyday is filled with distractions that can interfere with activities that require sustained
                effort. One solution is to make switching between activities more difficult. A common practice is
                to arrange a changeover delay (COD; Findley, 1958): a short interval contingent on switching
                behavior, during which all reinforcers are withheld (hence delayed). This is known to decrease
                the frequency of changeovers and increase sensitivity to reinforcement. For my master’s project,
                I showed that a computational variable (Popa & McDowell, 2010; see also Popa, 2013, p. 19-21)
                is functionally equivalent with the changeover delay (COD) arranged in experiments with living
                organisms: high values produced fewer changeovers and higher sensitivity to reinforcement
(and vice-versa). In this document, I denote this variable with COMP COD (HD COD).</p>
 */}

                {/* <h1>DISSERTATION</h1>
                <h2>1. Mutation rate , environmental characteristics, and maladaptive behavioral variability</h2>
                <p>In the model, each emission, or response, triggers a Darwinian cycle. After selection and
                recombination create a new population, it is affected by mutation : a certain percent of behaviors,
                referred to as mutation rate , is randomly selected and “mutated”: one bit in its “genotype”,
                chosen at random, is “flipped” from 1 to 0 or 0 to 1. Previous work, some of which was presented
                at ABAI (2011), suggested that high mutation rates may produce behavioral characteristics that
                could be described as impulsive . The first specific aim of my dissertation project was to explore
                the effects of various mutation rates, under different environmental conditions, on variability and
organization of choice behavior.</p>

                <p>High mutation rates produced severely disorganized behavior, strikingly similar to those
                observed in ADHD-diagnosed children: “...decreased sensitivity to reward, switched more often
                between activities, engaged less often in continuous-responding, abandoned the task faster,
                took longer to re-engage, acquired fewer resources, exhibited high levels of topographic
                variability... ” (from Popa, 2013, p. 42). Similar to the behavioral symptoms observed in ADHD,
                the disorganized behavior produced by high mutation rates were counteracted in “good environ”
and worsened in “bad” environs (p. 43-46).</p>


                <h3>From mutation rate to ADHD and brain function</h3>
                <p>These findings led me to hypothesize that mutation rate may be functionally equivalent to
                the level of spontaneous fluctuations in the brain’s default-mode network (DMN; Raichle
                et. al., 2001), recently shown to be associated with high levels of intra-individual
                variability (Buckner et. al., 2008; Weissman et. al., 2006) and to interfere with goal-
                directed activity (ref). This hypothesis can be explored by recording brain activity while
                the participant is engaged in continuous choice-behavior. The experimental procedure
                would have to be short enough to be used in conjunction with brain-investigation technologies (e.g., EEG, ERP, fMRI), but long enough to produce high frequencies of
responses and reinforcing events.</p>

                <h2>2. Verifying model’s predictions in a fast-paced, continuous-choice environment</h2>
                <p>For the second part of my project I programed and tested a “virtual operant chamber”. I arranged
                a continuous-choice environ in which five concurrent schedules, each in effect for only 200
                seconds, scheduled very high reinforcement rates (e.g., 100 reinforcers/minute). One group of
                students experienced a 2-seconds changeover delay (COD_2s); the second group did not
                (No_COD). Their choice behavior was compared along the same eight behavioral dimensions
used to explore behavioral variability in the computational model.</p>

                <p>When a two-second COD was contingent on switching, behavioral variability noticeably lower
                than in the No_COD condition. This provided further support for the equivalence between
                COMP COD and COD and showed that computational models can be used to predict human
                behavior (Popa, 2013, p. 59 - 60). Furthermore, behavior was relatively well described by the
                power function matching equation (COD_2s; a ~ 0.7, b ~ 1.0, pVAF ~ 75%), despite the short
experimental duration and very high reinforcement rates.</p>

                <h3>From computational models to brain function, via fast-paced procedures</h3>
                <p>My findings, unique at the time of their publication, suggest that fast-paced procedures
                can be used to explore equivalences between computational variables and properties of
                the nervous system. For example, if mutation rate and the level of spontaneous
                fluctuations in the brain’s default mode network (DMN) are functionally equivalent, then
                choice-behavior that correlates with high levels of DMN fluctuations should match that
produced by high mutation rates, as discussed in Popa & McDowell (2016).</p> */}


                {/* <h1>CURRENT WORK AND FUTURE DIRECTIONS</h1> */}


                {/* <p>Currently, I am developing an evolutionary model that, in addition to selection events (positive
                reinforcement), implements elimination events and contextual cues . The first step is to test the
                current implementation in single- and concurrent-schedule environments, by comparing its
                outcomes against known mathematical descriptors. Preliminary studies on choice behavior
                showed good conformance with the power-function matching equation ( a ~ 0.8; b ~ 1.0; pVAF >
                98%). Next, I will verify if elimination events (negative selection) have punishing effects and if
                contextual cues become discriminative stimuli. As verification criteria, I will use existing findings,
                such as Bradshaw’s et al. results on the effects of response cost in single-schedules (1978) and
predictions made by quantitative models of punishment (e.g., de Villiers, 1980).</p>

                <p>In parallel, I will use the human research program to expand our knowledge on the effects of
                discriminative stimuli and avoidance/escape behavior. Recent work, conducted in collaboration
                with my former students (see Vitae for a complete list), has produced results that can further
                inform and verify computational developments. For example, we investigated human behavior in
                concurrent schedules, with signaled and unsignaled (invisible) target classes (with Tang, X.).
                The outcomes of these experiments can be compared to behavior generated by the model in the
                presence or absence of contextual cues . In other studies, we explored the effects of extinction
                on positively reinforced behavior (with Forbes, A.) and on negatively reinforced behavior (Popa
                & Grissom, 2017), results that can be further used to verify the new computational
implementation.</p>

                <h2>Social Interactions as “behavioral Turing tests” for the evolutionary model</h2>
                <p>Both the model and the human experimental procedure can be expanded to the study of social
                interactions. In the model this can be done by instantiating multiple populations of behaviors and
                allowing them to evolve entangled, each emission being both behavior and consequence (for
                others). Similarly, the human procedure can be expanded to “multiplayer mode” (so to speak).
                Bridging the two will allow humans to interact with other humans and/or with digital agents. Will
                they recognize the difference between human and computer by behavior alone? Will they
cooperate? Compete? Avoid each other? Will in-groups and out-groups spontaneously emerge?</p> */}


                {/* <h1>SIGNIFICANCE</h1>
                <p>The question that drives my research, how behavior changes over time , is directly relevant to all
                phenomena in which adaptive behavior plays a significant role, from child rearing and
                personality development, to global warming and artificial intelligence. My approach is inherently
                transdisciplinary, combining theoretical developments and experimental techniques from
                experimental analysis of behavior, computer science, developmental psychology, cognitive-
                neuroscience, evolutionary biology, and information theory, Building upon ideas from these
                domains, I seek to make fundamental contributions to our understanding of the basic principles
                that underlie moment-to-moment changes in voluntary action, cognitive processes, and their
                underlying neuronal activity; in other words, about the emergence of psychodiversity and
individuality.</p> */}




            </div>

        );
    }
}

export default MyResearch;