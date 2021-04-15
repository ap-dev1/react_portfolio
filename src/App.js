import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import RecentProjects from './components/RecentProjects';

import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {

    render() {
        return (
            <div >
                <Header/>
                <About/>

                <RecentProjects/>
                
                <Projects/>

                <Contact/>
                <Footer/>
            </div>
        );
    }

}

export default App;
