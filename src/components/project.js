
import React, { Component } from 'react';
import '../styles/projects.css';
import '../styles/timeline.css';
//import ReadMore from "./ReadMore";
import ReadMore from "./ReadMore";


class Project extends Component {

    goToLink = (e) => {
        e.preventDefault()
        let destination = e.target.id
        window.open(destination, '_blank')
    };


    render() {

        var Buttons = this.props.urls.map((item) => (
            <button
                id={item.link}
                title={item.link}
                onClick={this.goToLink}
            >{item.name}
            </button>
        ))

        var Images = this.props.img.map((item) => {
            return (
                <img src={item}
                    alt={item.title}
                    title={item.imgTitle}
                    style={{ maxWidth: 500 / this.props.img.length, minWidth: 150, margin: '.1rem' }}
                    className="imgZoom"
                ></img>
            )
        })

        var Tags = this.props.tags.map((item) => (
            <label className="projectTag">{item}</label>
        ))



        return (

            <div className='projectRow'>


                <div className='projectRow'>
                    <div className='projectColumn'>


                        <h3 className='projectTitle'>{this.props.title}</h3>

                        <p className='projectRole'>{this.props.date}  |  {this.props.role}  </p>

                        <div className="divTags">
                            {Tags}
                        </div>

                        <div className='projectButtons'>
                            {Buttons}
                        </div>

                        <ReadMore overview={this.props.overview} />
                    </div>


                    <div className='projectColumn'>
                        <div className="projectImages">
                            {Images}
                        </div>

                        {/* <a href={this.props.urls[0]}>
                        <img src={this.props.img}
                            alt={this.props.title}
                            title={this.props.imgTitle}
                            className='projectImage'></img>
                    </a> */}

                        <p className='imageCaption'>{this.props.citation}</p>
                    </div>

                </div>




            </div>


        );
    }
}

export default Project;