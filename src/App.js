import React, { Component } from 'react';
import './App.css';
import './styles/common_styles.css'
import './styles/header.css';
import './styles/about.css';
import './styles/contact.css';


import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showThis: 1,
    //         seconds: 0,
    //         wait: 3
    //     }
    // };


    render() {
        return (
            <div >
                <Header/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        );
    }

}

export default App;
