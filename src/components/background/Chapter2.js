import React, { Component } from "react";
import parse from "html-react-parser";
import ReadMoreHook from "./ReadMoreHook";

// var fast_matching_extra = parse(
//   "The purpose of this experimental procedure was to verify ETBD predictions and to learn more about human behavior. In this case, I looked at human behavior in two experimental conditions - No COD and 2 seconds COD. The results were congruent with computational findings, providing further support for the functional equivalence between similarity between target classes (measured in Hamming Distances) and real-world CODs. <br/><br/> More importantly, the procedure yielded “typical matching” results in ~ 15 minutes, despite very high reinforcement rates, unsignalled schedules, and short schedule duration. This means that fast matching procedures can be used in conjunction with eye trackers, EEGs, fMRIs, etc. to investigate the relation between behavior dynamics, neuronal dynamics, and the dynamics of cognitive processes like sustained attention. (Popa, 2013; Popa & McDowell, 2016)"
// );

class Chapter2 extends Component {
    render() {
        var skills = [
            "VB.Net",
            "Excel/VBA",
            "computational research",
            "human research",
            "principal investigator",
            "experimental interfaces",
        ];

        var Skills = skills.map((s) => {
            return <label key={s}>{s}</label>;
        });

        return (
            <div id="ch2" className="chapter">
                <div className="chapterRow">
                    <div className="chapterCol">
                        <h1 className="chapter-title">From bits to brain</h1>

                        <span className="spanYears">2011 - 2013</span>

                        <p id="ch2_p1" className="p-left">
                            For my dissertation project I conducted a massive exploration into
                            ETBD's innerworkings and I designed and implemented an
                            experimental procedure that allowed me to compare ETBD and human
                            behavior side by side.
            </p>

                        <p className="p-left">
                            My results showed that ADHD symptoms in humans may be caused by
                            disruptions in neuronal activity that underlies sustained
                            attention and sustained behavior and that fast matching procedures
                            can be used to investigate these phenomena directly, in real time
                            (with Eye Tracking and EEG, simoultaneously).
            </p>

                        <p>
                            {/* My dissertation project had two phases. <br /> <br /> In Phase 1
                I explored the interplay between mutation, reinforcement rate,
                reinforcer magnitude, and class similarity ("Hamming COD").
                <br />
                <br /> */}
                            {/* High rates of mutation produced behavioral
                constellations similar to textbooks descriptions of ADHD. These
                effects were worsen when classes were too similar, or when
                reinforcers were scarce or weak (and vice-versa), in agreement
                with the ADHD literature. */}
                        </p>

                        {/* <p>
                In Phase 2, can predict human behavior. hold for experimentally,
                in as predictions verify findings from Phase 1 the Class
                Similarity COD - COD parallel further, ETBD predictions from
                Phase 1 compare human behavior with ETBD behavior side by side.
                
                I ran two groups of particpants in two conditions,
                No-COD and COD 2 seconds, and a and I comused this procedure to
                compare choice behavior in t I ran two groups of participants in
                two experimental conditions, one with no COD and one with a COD
                of 2 seconds.
              </p> */}

                        {/* <p>
                <a
                  href="https://www.andreipopa515.com/computational-adhd"
                  className="link515"
                >
                  {
                    "More details and subsequent analyses here: https://www.andreipopa515.com/computational-adhd"
                  }
                </a>
              </p> */}

                        <div className="chapterSkills">{Skills}</div>
                    </div>

                    <div className="chapterCol">
                        <h2 className="chapter-sub-title">
                            Disrupted neuronal activity as formal cause for ADHD
            </h2>

                        <ReadMoreHook
                            maxChars={300}
                            overview="The idea was to leverage what I learned about Hamming Distances to explore the connection between <i>mutation</i> and ADHD. In ETBD, high mutation rates caused symptoms similar to textbook descriptions of ADHD and they were more severe when the Hamming Changeover Delay was low. A similar effect was shown in ADHD-diagnosed children: they did poorly without a COD, but did okay with a 3-seconds COD (they had to wait 3 seconds after switching between activities; Taylor et al, 2010).<br/><br/>So I thought to run partcipants in similar conditions - with and without a COD - and to compare the results to their scores on ADHD inventories and laboratory measures. I expected that the students with higher ADHD scores will do worse in concurrent schedules without a COD and better when the COD was 2 seconds. <br/><br/> The variation in ADHD scores in the sample was too low to detect potential effects, but by this time I already had what I wanted, and more. The experimental procedure captured the difference between the No-COD and COD-2s conditions very well. At the same time, after analyzing the data produced by ETBD, I figured out how different combinations of mutation, selection, and Hamming COD work at molecular level to produce ADHD-like symptoms in ETBD. This led me to propose that ADHD is an emergent property of disrupted neuronal dynamics and that mutation may have a counterpart in the  brain's Default Mode Network (DMN)."
                        />

                        <h2 className="chapter-sub-title">
                            Fast matching procedures: portals between the dynamics of
                            behavior, cognition, and brain function
            </h2>

                        <ReadMoreHook
                            maxChars={300}
                            overview="The reason I made Fast Matching was to verify ETBD predictions and to learn more about human behavior. In this case, I looked at human behavior in two experimental conditions - No COD and 2 seconds COD. The results were congruent with computational findings, providing further support for the functional equivalence between similarity between target classes (measured in Hamming Distances) and real-world CODs. More importantly, the procedure yielded “typical matching” results in ~ 15 minutes, despite very high reinforcement rates, unsignalled schedules, and short schedule duration. This suggested that 1) the relatively high sensitivity to reinforcement observed in the 2seconds COD condition was not the result of cognitive effort, but the adaptive mechanisms of the nervous system and 2) that Fast Matching procedures can be used in conjunction to eye trackers, fMRIs, and EEGs to bridge between neuronal dynamics, behavior dynamics, and the dynamics of sustained attention (Popa & McDowell, 2016, p.287-288). As principal investigator I was responsible with every aspect of the study, from conception to writup, including programming the experimental procedure and interfacing with Emory's Instiutional Review Board. "
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Chapter2;
