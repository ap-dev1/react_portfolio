import React, { Component } from "react";
import RecentProject from "./recentProject";
import infoRecent from "../data/infoRecent";
import parse from "html-react-parser";

// import ContinuousEducation from "./ContinuousEducation";

class RecentProjects extends Component {
    render() {
        return (
            <div id="Recent" className="fullscreen light">

                <h1>Recent projects </h1>

                <div id="recentIntro" className="recentRow">
                    <p>I find it easier to learn by doing, so when I  These pet projects are in various stages of development. They are constantly being updated and updated, depending on what  and so depending on when you visit the   </p>
                </div>


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


            </div>
        );
    }
}

export default RecentProjects;
