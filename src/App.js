// import logo from './logo.svg';
import ReactGA from 'react-ga';
import './App.css';
import SubscribeMailchimp from './SubscribeMailchimp'

function App() {
  
  // G-044X7R2Z81  or  UA-044X7R2Z81-G
  ReactGA.initialize('UA-044X7R2Z81-G');
  ReactGA.pageview('/homepage');

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          coming soon
        </p>


        <div className='fontMailchimp'>
          <SubscribeMailchimp/>
        </div>
        
        





        
      </header>
    </div>
  );
}

export default App;
