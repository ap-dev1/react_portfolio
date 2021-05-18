import React, { Component } from "react";

import Header from "./components/Header";
import About from "./components/About";
import RecentProjects from "./components/RecentProjects";
import MyTimeline from "./components/MyTimeline";
import Contact from "./components/Contact";

import infoTimeline from "./data/infoTimeline";

import Chapter1 from "./components/chapters/Chapter1";
import Chapter2 from "./components/chapters/Chapter2";

import Chapter3 from "./components/chapters/Chapter3";
import Chapter4 from "./components/chapters/Chapter4";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <About />

        <div
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            fontSize: "16px",
            fontFamily: "Roboto",
            color: "#1B4D3E",
          }}
        >
          <div>
            <p>
              Neuronal activity can be represented computationally, <br />
              but the brain is not a computational machine.
            </p>
          </div>
        </div>

        <Chapter1 />

        <div className="between-chapters"></div>

        <MyTimeline
          events={infoTimeline.slice(0, 5)}
          orientation="vertical"
          startFrom="first"
        />

        <Chapter2 />

        <div className="between-chapters"></div>

        <MyTimeline
          events={infoTimeline.slice(5, 12)}
          orientation="vertical"
          startFrom="first"
        />

        <Chapter3 />

        <div className="between-chapters"></div>

        <MyTimeline
          events={infoTimeline.slice(12, -3)}
          orientation="vertical"
          startFrom="first"
        />

        <Chapter4 />

        {/* <div style={{ width: "100%", height: "50px" }}></div> */}

        <MyTimeline
          events={infoTimeline.slice(-3)}
          orientation="vertical"
          startFrom="first"
        />

        <div className="between-chapters"></div>

        <RecentProjects />

        <Contact />
      </div>
    );
  }
}

export default App;
