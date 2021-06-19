import React, { Component } from "react";
import parse from "html-react-parser";
import ReadMoreHook from "./ReadMoreHook";

class Chapter3 extends Component {
    render() {
        var skills = [
            "VB.Net",
            "Excel/VBA",
            "Python",
            "SQL",
            "Octave",
            "human research",
            'project management',

            "computational",
            "experimental interfaces",
            //"principal investigator",
            //"lab management",

        ];

        var Skills = skills.map((s) => {
            return <label key={s}>{s}</label>;
        });

        return (
            <div id="ch3" className="chapter">
                <div className="chapterRow">
                    <div className="chapterCol">
                        {/* <h1 >
                3. When did you finish becoming you? Do you remember?
              </h1> */}
                        <h1 className="chapter-title">
                            The other side of learning
            </h1>
                        {/* <span className="spanYears">2014 - 2018</span> */}

                        {/* <p className="p-left">
                            <i>
                                If positive reinforcement is equivalent to natural selection,
                                then what is negative reinforcement equivalent to?
                A question not for the faint of heart (McDowell & Klapes, 2019).
                            </i>
                        </p> */}

                        <p id="ch3_p1" className="p-left">
                            After graduation I focused my research on stimulus control and
                            aversive conditioning phenomena: punishment, escape, and
                            avoidance.
            </p>

                        <p className="p-left">
                            In parallel, I made progress on the human development front.
            </p>

                        {/* <p className="p-left">
              After my appointment at Oxford ended, I started working on my own
              computational theory of behavior dynamics.
            </p> */}

                        {/* <a href='https://www.andreipopa515.com/etbd'  style={{color: '#fff', textAlign: 'left' , marginBottom: '1rem', paddingTop: '0', fontWeight: 400, fontFamily: 'Roboto', }} > Learn more at https://www.andreipopa515.com/etbd    </a> */}

                        <div className="chapterSkills">{Skills}</div>
                    </div>

                    <div className="chapterCol">
                        <h2 className="chapter-sub-title">Learning: approach, escape, avoid</h2>

                        <ReadMoreHook
                            maxChars={500}
                            overview={parse(
                                "During my appointment at Agnes Scott (2015-2016) my mentees and I explored concurrent schedules of reinforcement and punishment, escape behavior, extinction-induced phenomena, invisible target classes of different dimensions, etc."
                            )}
                        />

                        <h2 className="chapter-sub-title">Approach and Avoidance in a symmetrical experiment</h2>

                        <ReadMoreHook
                            maxChars={500}
                            overview={parse(
                                "At Oxford, in 2017-2018, I led a research study on the difference between positive reinforcement and avoidance - a symmetrical comparison on their effects on learning arbitrary rules. Point-Acquisition events were twice as effective than the avoidance of Point-Loss events, between and within particpants, with Fixed and Variable Intervals, and with signalled and unsignalled contingencies."
                            )}
                        />

                        <h2 className="chapter-sub-title">Extinction bursts, recreate that!</h2>

                        <ReadMoreHook
                            maxChars={500}
                            overview={parse(
                                "At Oxford, in 2017-2018, I led a research study on the difference between positive reinforcement and avoidance - a symmetrical comparison on their effects on learning arbitrary rules. Point-Acquisition events were twice as effective than the avoidance of Point-Loss events, between and within particpants, with Fixed and Variable Intervals, and with signalled and unsignalled contingencies."
                            )}
                        />

                        {/* <h2 className="chapter-sub-title">ETBD.py</h2>
            <ReadMoreHook
              maxChars={300}
              overview={parse(
                "I used this version to verify an alternative approach to fitness-based <i>selection</i> that was on my mind since grad school. For verification, I chose a range of conditions from previous studies and I ran them with the traditional the alternative approach."
              )}
            /> */}

                        {/* <h2>When and how does development happen?</h2>
              <ReadMoreHook
                maxChars={300}
                overview="Contributing factors and developmental{" "}
                <strike>outcomes</strike> trajectories and stages It must work
                somehow. Traits, madnesses (lol), attachment styles,
                assimilation and acomodation of mental schemas (aha!) - they
                come happen somehow Human development is influenced by biological, psychological, and sociocultural variables that interact with each other in complicated ways (any textbook). Okay, but how? If one would want to observe and influence these interactions , where would one begin? How does society influence biology? Where do genes interact with families? How do nature and nurture mediate each other? What are sentience, agency, will? What role, if any, do they play in human life? Statistical jargon aside, to interact is to modify : something, somewhere, must undergo some kind of observable transformations. When and where do these transformations occur? How do they map on the plethora of contributing factors and developmental outcomes?"
              /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Chapter3;
