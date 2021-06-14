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

import FastMatchingDemo from "./components/background/FastMatchingDemo"

import TeachingExperience from "./components/Teaching"
import References from "./components/References"


class App extends Component {


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
                    events={infoTimeline.slice(7, 13)}
                    orientation="vertical"
                    startFrom="first"
                />
                <FastMatchingDemo />


                {/* <div id="FastMatching" className="fullscreen">
                    <FastMatchingDemo />
                </div> */}

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
