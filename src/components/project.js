import React, { Component } from 'react';

import '../styles/projects.css'


class Project extends Component {
    
    goToLink = (e) => {
        e.preventDefault()
        let destination = e.target.id
        window.open(destination, '_blank')
    };


    render() {
        return (
                <div className='projectRow'>

                    <div className='projectColumn'>

                        <h2 className='projectTitle'>{this.props.title}</h2>

                        <p className='projectOverview'>{this.props.description}</p>


                        <div className='projectButtons'>
                        
                            <button onClick={this.goToLink}
                            id={this.props.url}>{this.props.url_name}</button>

                            <button onClick={this.goToLink}
                            id={this.props.url2}>{this.props.url2_name}</button>


                        </div>

                    </div>



                    <div className='projectColumn'>
                        <a href={this.props.url}>
                            <img src={this.props.imageSrc}
                                alt={this.props.title}
                                title={this.props.imgTitle}
                                className='projectImage'></img>
                        </a>

                        <p className='imageCaption'>{this.props.citation}</p>
                    </div>

                </div>

         
        );
    }
}

export default Project;