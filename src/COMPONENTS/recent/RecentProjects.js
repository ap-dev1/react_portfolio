import React, { Component } from "react";
import parse from "html-react-parser";

import RecentProject from "./recentProject";
import infoRecent from "../../DATA/infoRecent";


class RecentProjects extends Component {
    render() {
        return (
            <div
                id="Recent"
                className="fullscreen light"
                style={{
                    backgroundColor: "#1D2731",
                    marginTop: "0px",
                    paddingBottom: "200px",
                    marginBottom: "0rem",
                }}
            >

                <h1 style={{ color: "#fff", marginBottom: "1rem" }}>Recent projects </h1>

                <div id="recentIntro" className="recentRow" style={{ textAlign: "center" }}>
                    <p className="recentIntro" style={{ color: "#fff" }}>These items are in various stages of development; your experience might vary. </p>
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
