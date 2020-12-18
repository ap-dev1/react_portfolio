
import './App.css';
import './styles/common_styles.css'
import './styles/header.css';
import './styles/about.css';
//import './styles/project.css';
import './styles/project_section.css';
import './styles/contact.css';

//import SubscribeMailchimp from './components/SubscribeMailchimp'

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {



    return (

        <div className="App">

            <Header></Header>

            <About></About>

            <Projects></Projects>
            
            <Contact></Contact>

            <Footer></Footer>

        </div>


    );
}

export default App;
