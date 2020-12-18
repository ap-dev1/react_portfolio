import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../styles/common_styles.css'
import '../styles/buttons.css'


class Project extends Component {
    state = {}
    render() {
        return (

            <Fade bottom>

                <div className='section_row'>

                    <div className='section_column'>

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



                    <div className='section_column'>
                        <a href={this.props.url}>
                            <img src={this.props.imageSrc} alt={this.props.title} width='600px'></img>
                        </a>

                        <p className='project_caption'>{this.props.citation}</p>
                    </div>

                </div>

            </Fade>);
    }
}

export default Project;