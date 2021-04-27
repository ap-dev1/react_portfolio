import React, { Component } from 'react'
import RecentProject from './recentProject'
import infoRecent from "../data/infoRecent"

import ContinuousEducation from './ContinuousEducation'


class RecentProjects extends Component {

    render() {
        return (

            <div id='RecentProjects'>
                <h1>CURRENT PROJECTS </h1>

                <div className="recentRow">
                    {/* <h2>Projects</h2> */}
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

                <ContinuousEducation/>

            </div>
        );
    }
}

export default RecentProjects;