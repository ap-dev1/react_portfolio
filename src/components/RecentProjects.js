import React, { Component } from 'react';
import RecentProject from './recentProject';
import infoRecent from "../data/infoRecent"


class RecentProjects extends Component {

    render() {
        return (

            <div id='RecentProjects'>
                <h1>Recent Activity</h1>

                <div className="recentRow">
                    {infoRecent.map((project) => (

                        <RecentProject
                            key={project.title}
                            title={project.title}
                            // date={project.date}
                            tags={project.tags}
                            overview={project.description}
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