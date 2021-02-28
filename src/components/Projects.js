import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../myData';

import '../styles/common_styles.css'
import '../styles/buttons.css'

class Projects extends Component {
    state = {}
    render() {
        return (

            <div className='Section'>

                <h1 className='section_title'>
                    <Fade bottom cascade>Projects</Fade>
                </h1>


                <div>

                    {data.projects.map((project) => (

                        <Project

                            key={project.id}
                            title={project.title}
                            description={project.description}
                            service={project.service}
                            imageSrc={project.imageSrc}
                            url={project.url}
                            url_name={project.url_name}
                            url2={project.url2}
                            url2_name={project.url2_name}
                            citation={project.citation}

                        ></Project>

                    ))}

                </div>

            </div>
        );
    }
}

export default Projects;