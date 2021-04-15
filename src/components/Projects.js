import React, { Component } from 'react';
import Project from './project';
import infoProjects from "../data/infoProjects"
import '../styles/projects.css'

class Projects extends Component {
    

    render() {


        return (

            <div id='Projects'>
                {/* <h1>Projects</h1> */}

                <div>
                    {infoProjects.map((project) => (

                        <Project
                            key={project.title}
                            title={project.title}

                            date={project.date}
                            role={project.role}
                            tags={project.tags}
                            
                            overview={project.description}
                            img={project.img}
                            urls={project.urls}
                            
                            citation={project.citation}
                            imgTitle={project.title}

                            

                        ></Project>

                    ))}

                </div>

            </div>
        );
    }
}

export default Projects;