
import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import RecentProjects from './components/RecentProjects';
//import MyResearch from './components/MyResearch';
import MyTimeline from './components/MyTimeline';
import Contact from './components/Contact';

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
                    startFrom = "first"
                    />
                

                <Contact/>
                
            </div>
        );
    }

}

export default App;
