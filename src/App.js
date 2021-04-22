
import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import RecentProjects from './components/RecentProjects';

import MyResearch from './components/MyResearch';
// import Projects from './components/Projects';
// import AboutCV from './components/AboutCV';

import MyTimeline from './components/MyTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

import infoTimeline from "./data/infoTimeline"


class App extends Component {

    render() {
        return (
            <div >
                <Header/>

                <About/>

                {/* <MyResearch/> */}

                <RecentProjects/>

                <MyTimeline 
                    events={infoTimeline}
                    orientation = "vertical"
                    startFrom = "last"
                    />
                

                <Contact/>
                
                <Footer/>
            </div>
        );
    }

}

export default App;
