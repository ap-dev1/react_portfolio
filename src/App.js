import React, {Component} from 'react';
import './App.css';
import './styles/common_styles.css'
import './styles/header.css';
import './styles/about.css';
import './styles/contact.css';

//import SubscribeMailchimp from './components/SubscribeMailchimp'

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyTimeline from './components/MyTimeline';


class App extends Component {

    constructor(props){
        super(props);
        this.state={
            showThis: 1,
            seconds: 0,
            wait: 3
        }
    };

    componentDidMount(){
        // var myTimer = null;
        // myTimer = setInterval(() => {
        //     if (this.state.seconds <= this.state.wait) {
        //         this.setState({ seconds: this.state.seconds + 1 });
        //     } else {
        //         clearInterval(myTimer)
        //         // document.getElementById('myHeader').style.cssText = "display:none; transition: ease-out; transition-duration: 3s;"
        //         this.setState({showThis : 2})
                
        //     }
        // }, 1000);
    }

    render(){
        // var showThis = () => {
        //     if (this.state.showThis===1){
        //         return <Header secLeft = {this.state.wait+1-this.state.seconds}/>     
        //     } else {
        //         return <About/>
        //     }
        // }
        
        // console.log("showThis: ", showThis, typeof(showThis))


        return (
            <div className="App">

                {/* {showThis()} */}

                <Header></Header>
                
                <About/>
                
                <MyTimeline/>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }

}

export default App;


// function App() {
//     return (
//         <div className="App">
//             <Header></Header>
//             <About></About>
//             <Projects></Projects>
//             <Contact></Contact>
//             <Footer></Footer>
//         </div>
//     );
// }

// export default App;
