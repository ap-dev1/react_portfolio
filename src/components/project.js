import React, { Component } from 'react';

import '../styles/projects.css'


class Project extends Component {
    state = {}
    render() {
        return (

           

                <div className='projectRow'>

                    <div className='projectColumn'>

                        <h2 className='project_title'>{this.props.title}</h2>

                        <p className='project_description'>{this.props.description}</p>


                        <div className='button_row'>
                            <a
                                href={this.props.url}
                                target='blank'
                                className="link_google"
                                style={{width:'30%'}}
                            >{this.props.url_name}
                            </a>


                            <a
                                href={this.props.url2}
                                target='blank'
                                className="link_google"
                                style={{width:'30%'}}
                            >{this.props.url2_name}
                            </a>


                        </div>

                    </div>



                    <div className='projectColumn'>
                        <a href={this.props.url}>
                            <img src={this.props.imageSrc} alt={this.props.title} width='500px'></img>
                        </a>

                        <p className='project_caption'>{this.props.citation}</p>
                    </div>

                </div>

         
        );
    }
}

export default Project;