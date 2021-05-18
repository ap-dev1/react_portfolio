import React, { Component } from "react";
import RecentProject from "./recentProject";
import infoRecent from "../data/infoRecent";
import parse from "html-react-parser";

import ContinuousEducation from "./ContinuousEducation";

class RecentProjects extends Component {
  render() {
    return (
      <div id="RecentProjects" className="fullscreen darker">
        <h1>Current projects </h1>

        <div className="recentRow">
          {infoRecent.map((project) => (
            <RecentProject
              key={project.title}
              title={project.title}
              // date={project.date}
              tags={project.tags}
              overview={parse(project.description)}
              img={project.img}
              urls={project.urls}
            ></RecentProject>
          ))}
        </div>

        {/* <ContinuousEducation/> */}
      </div>
    );
  }
}

export default RecentProjects;
