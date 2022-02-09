import React, { Component } from "react";
import { nanoid } from "nanoid"
import infoTimeline from "./DATA/infoTimeline";

import HeaderSection from "./COMPONENTS/header_files/HeaderSection";
import About from "./COMPONENTS/about_files/AboutSection";
import MyTimeline from "./COMPONENTS/timeline_files/MyTimeline";
import Chapter01 from "./COMPONENTS/background/Chapter01";

import Chapter04 from "./COMPONENTS/background/Chapter04";
import RecentProjects from "./COMPONENTS/recent/RecentProjects";
import TeachingExperience from "./COMPONENTS/teaching/TeachingSection";
import Contact from "./COMPONENTS/contact/ContactSection";
//import References from "./COMPONENTS/references/ReferencesSection";
import MyVitae from "./COMPONENTS/vitae/MyVitae";
import ResearchTrajectory from "./COMPONENTS/background/ResearchTrajectory";
import ResearchBegins from "./COMPONENTS/background/ResearchBegins";


class App extends Component {

    assignClasses = () => {
        // let x = document.getElementById("12/20/2009")
        // let y = x.childNodes[0]
        // let z = y.childNodes[0]

        // let title = z.childNodes[0]
        // let par = z.childNodes[1]

        // x.style.backgroundColor = "#1D2731"
        // x.style.width = "70%"
        // //x.parentElement.style.backgroundColor = "#1D2731"
        // x.parentNode.style.backgroundColor = "red"
        // y.style.backgroundColor = "#1D2731"
        // y.style.padding = "0rem 1rem"

        // z.style.backgroundColor = "#1D2731"

        // title.style.color = "yellow"
        // par.style.color = "#ccc"

        // console.log(z.childNodes)
    }


    componentDidMount() {
        var navigationMarkers = [
            //{ markerID: "columnHeader", navButtonID: "btnmyHeader", },
            { markerID: "divProfilePic", navButtonID: "btnAbout", },
            { markerID: "recentIntro", navButtonID: "btnRecent", },
            { markerID: "researchBegins", navButtonID: "btnresearchBegins", },
            { markerID: "ChoiceDemo", navButtonID: "btnChoiceDemo", },
            // { markerID: "ch2_p1", navButtonID: "btnch2", },
            { markerID: "QualPhdDesign", navButtonID: "btnQualPhdDesign", },
            { markerID: "12/24/2013", navButtonID: "btn12/24/2013", },
            // { markerID: "ch4_p1", navButtonID: "btnch4", },
            { markerID: "div_1400", navButtonID: "btndiv_1400", },
            { markerID: "sectionVitae", navButtonID: "btnsectionVitae", },

            { markerID: "btnEmail", navButtonID: "btnContact", },
        ]

        let observerOptions = { root: null, threshold: 0, }


        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                let navButtonID = navigationMarkers.filter(aa => aa.markerID.includes(entry.target.id))[0].navButtonID
                let navButton = document.getElementById(navButtonID)

                if (document.getElementsByClassName("currentView").length > 0) {
                    //console.log("at least one element with class CURRENT VIEW, removed.")
                    document.getElementsByClassName("currentView")[0].classList.remove("currentView")
                }

                navButton.classList.add("currentView")
            });
        },
            observerOptions);


        // Apply the observer to every section:
        navigationMarkers.forEach(marker => {
            observer.observe(document.getElementById(marker.markerID))
        })

        //this.assignClasses()
    }




    render() {

        return (
            <div>
                <HeaderSection />

                <About />


                <div id="div_1400" >

                    <div id="div_1401" >

                        <span id="span1" >  TEACHING  </span>
                        <span id="span2" >  2007 - 2018 </span>

                        <div className='div_schools'>

                            <span id="span3" >
                                Emory <br />University
                            </span>
                            <span id="span4" >
                                Georgia State<br /> University
                            </span>
                            <span id="span5" >
                                Agnes Scott<br /> College
                            </span>
                            <span id='span6'>
                                Emory University, <br />Oxford College
                            </span>

                        </div>

                    </div>


                </div>



                <TeachingExperience />

                <ResearchBegins />

                <ResearchTrajectory />

                <Chapter01 />

                <MyTimeline
                    //events={infoTimeline.slice(0, 13)}
                    events={infoTimeline}
                    orientation="vertical"
                    startFrom="first"
                />

                {/* <Chapter04 /> */}

                {/* <MyTimeline
                    events={infoTimeline.slice(13)}
                    orientation="vertical"
                    startFrom="first"
                /> */}

                <RecentProjects />

                <div
                    style={{
                        width: "100%",
                        minHeight: "100vh",
                        //backgroundColor: "#a7bdc3",
                        // backgroundColor: "#555",
                        // webkitBackgroundClip: "text",
                        // mozBackgroundClip: "text",
                        // backgroundClip: "text",
                        // color: "transparent",
                        // textShadow: "rgba(255,255,255,0.5) 0px 3px 3px",
                        // textAlign: "center",
                        // verticalAlign: "middle",
                        // fontSize: "100px",
                        // padding: "25% 5%"
                    }}
                >

                </div>

                <MyVitae />

                <Contact />



            </div>
        );
    }
}

export default App;
