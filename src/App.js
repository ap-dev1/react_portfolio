import React, { Component } from "react";

import Header from "./components/Header";
import About from "./components/About";
import RecentProjects from "./components/RecentProjects";
import MyTimeline from "./components/MyTimeline";
import Contact from "./components/Contact";

import infoTimeline from "./data/infoTimeline";

import Chapter1 from "./components/background/Chapter1";
import Chapter2 from "./components/background/Chapter2";

import Chapter3 from "./components/background/Chapter3";
import Chapter4 from "./components/background/Chapter4";

//import FastMatchingDemo from "./components/matching/FastMatchingDemo"
import MatchingDemoItem from "./components/matching/MatchingDemoItem"

import TeachingExperience from "./components/Teaching"

import References from "./components/References"


class App extends Component {


    componentDidMount() {

        var navigationMarkers = [
            { markerID: "columnHeader", navButtonID: "btnmyHeader", },
            { markerID: "divProfilePic", navButtonID: "btnAbout", },
            { markerID: "recentIntro", navButtonID: "btnRecent", },
            { markerID: "ch1_p1", navButtonID: "btnch1", },
            { markerID: "ch2_p1", navButtonID: "btnch2", },
            { markerID: "demo", navButtonID: "btnFastMatchingDemo", },
            { markerID: "ch3_p1", navButtonID: "btnch3", },
            { markerID: "ch4_p1", navButtonID: "btnch4", },
            { markerID: "divTeachingCards", navButtonID: "btnteachingSection", },
            { markerID: "refMarker1", navButtonID: "btnrefSection", },
            { markerID: "btnEmail", navButtonID: "btnContact", },
        ]

        let observerOptions = {
            root: null,
            threshold: 0,
            //rootMargin: "-150px"

        }

        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                let navButtonID = navigationMarkers.filter(aa => aa.markerID.includes(entry.target.id))[0].navButtonID
                let navButton = document.getElementById(navButtonID)

                if (document.getElementsByClassName("currentView").length > 0) {
                    console.log("at least one element with class CURRENT VIEW, removed.")
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
    }




    render() {




        return (
            <div>
                <Header />

                <About />

                <RecentProjects />


                <Chapter1 />

                <MyTimeline
                    events={infoTimeline.slice(0, 7)}
                    orientation="vertical"
                    startFrom="first"
                />


                <Chapter2 />

                <MyTimeline
                    events={infoTimeline.slice(7, 11)}
                    orientation="vertical"
                    startFrom="first"
                    style={{ marginBottom: "0rem" }}
                />



                {/* <FastMatchingDemo /> */}
                <MatchingDemoItem style={{ marginBottom: "0rem" }} />




                <MyTimeline
                    events={infoTimeline.slice(11, 13)}
                    orientation="vertical"
                    startFrom="first"
                    style={{ marginTop: "0rem" }}

                />






                <Chapter3 />

                <MyTimeline
                    events={infoTimeline.slice(13, -6)}
                    orientation="vertical"
                    startFrom="first"
                />

                <Chapter4 />

                <MyTimeline
                    events={infoTimeline.slice(-6)}
                    orientation="vertical"
                    startFrom="first"
                />

                <TeachingExperience />

                <References />


                <Contact />


            </div>
        );
    }
}

export default App;
