import React, { Component } from "react";

import infoTimeline from "./DATA/infoTimeline";

import HeaderSection from "./COMPONENTS/header_files/HeaderSection";
import About from "./COMPONENTS/about_files/AboutSection";
import MyTimeline from "./COMPONENTS/timeline_files/MyTimeline";
import Chapter01 from "./COMPONENTS/background/Chapter01";
// import Chapter02 from "./COMPONENTS/background/Chapter02";
// import Chapter03 from "./COMPONENTS/background/Chapter03";
import Chapter04 from "./COMPONENTS/background/Chapter04";
import RecentProjects from "./COMPONENTS/recent/RecentProjects";
import TeachingExperience from "./COMPONENTS/teaching/TeachingSection";
import Contact from "./COMPONENTS/contact/ContactSection";
//import References from "./COMPONENTS/references/ReferencesSection";
import MyVitae from "./COMPONENTS/vitae/MyVitae";


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
            { markerID: "researchTrajectory", navButtonID: "btnresearchTrajectory", },
            { markerID: "ch01_p1", navButtonID: "btnch01", },
            // { markerID: "ch2_p1", navButtonID: "btnch2", },
            // { markerID: "08/17/2011", navButtonID: "btn08/17/2011", },
            { markerID: "12/24/2013", navButtonID: "btn12/24/2013", },
            { markerID: "ch4_p1", navButtonID: "btnch4", },
            { markerID: "teachingSection", navButtonID: "btnteachingSection", },
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

                {/* <div style={{
                    width: "100%",
                    height: "50px",
                    backgroundImage: "linear-gradient(to bottom, #1d2731 , orange, #1A2930)"
                }}></div> */}

                <TeachingExperience />


                <div id="researchTrajectory"
                    className="fullscreen research"
                    style={{
                        backgroundColor: "#ff0000d0",
                        color: '#fff',
                        marginTop: "0rem",
                        marginBottom: "0rem",
                    }}
                >
                    <h1>Research Trajectory</h1>
                    <h1>2007 - 2019</h1>
                </div>


                <Chapter01 />



                <MyTimeline
                    events={infoTimeline.slice(0, 14)}
                    orientation="vertical"
                    startFrom="first"
                />

                <Chapter04 />

                <MyTimeline
                    events={infoTimeline.slice(14)}
                    orientation="vertical"
                    startFrom="first"
                />

                <RecentProjects />

                <MyVitae />

                <Contact />



            </div>
        );
    }
}

export default App;
