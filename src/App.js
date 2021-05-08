
import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import RecentProjects from './components/RecentProjects';
import MyTimeline from './components/MyTimeline';
import Contact from './components/Contact';

import infoTimeline from "./data/infoTimeline"

import Parkour from './components/chapters/Parkour'
import EtbdAndMe from './components/chapters/EtbdAndMe'

import IntroETBD from './components/chapters/IntroETDB'
import PhdProject from './components/chapters/PhdProject'

import Postdoc1 from './components/chapters/Postdoc1'
import Postdoc2 from './components/chapters/Postdoc2'



class App extends Component {

    render() {
        return (
            <div >
                <Header />

                <About />

                <RecentProjects />


                {/* <IntroETBD />


                <MyTimeline
                    events={infoTimeline.slice(0, 6)}
                    orientation="vertical"
                    startFrom="first"
                    />

                <PhdProject />


                <MyTimeline
                    events={infoTimeline.slice(6, 12)}
                    orientation="vertical"
                    startFrom="first"
                    />


                <Postdoc1 />


                <MyTimeline
                    events={infoTimeline.slice(12, 18)}
                    orientation="vertical"
                    startFrom="first"
                    />


                <Postdoc2 />


                <MyTimeline
                    events={infoTimeline.slice(18, -1)}
                    orientation="vertical"
                    startFrom="first"
                    /> */}


                <Contact />


            </div>
        );
    }

}

export default App;
