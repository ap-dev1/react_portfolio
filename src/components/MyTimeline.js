
import React from "react"
import parse from 'html-react-parser';

import ReadMore from "./ReadMore";
import ImagesCarousel from "./ImagesCarousel";

import "../styles/timeline.sass"

import "../styles/project.sass"
import "../styles/carousel.sass"


import PropTypes from "prop-types";
import infoTimeline from "../data/infoTimeline"




const MyTimeline = props => {

    let { events, orientation, startFrom } = props;

    var goToLink = (e) => {
        e.preventDefault()
        let destination = e.target.id
        window.open(destination, '_blank')
    };


    const eventsMappedToElements = events.map((e, i) => {

        var Links = null;
        var Tags = null;
        var myDescription = ""
        var date_type = ""


        if (e.urls.length > 0) {
            Links = e.urls.map((item) => (
                <button
                    id={item.link}
                    title={item.link}
                    onClick={goToLink}
                >{item.name}
                </button>
            ))
        }

        if (e.tags.length > 0) {
            Tags = e.tags.map((item) => (
                <label >{parse(item)}</label>
            ))
        }

        if (e.description !== "") {
            myDescription = parse(e.description)
        }


        // if (e.date !== "" & e.type !== "") {
        //     let s1 = e.date
        //     let s2 = e.type
        //     let s3 = s1 + ' '  + s2

        //     date_type = s3

        // }





        if (e.id === -1) {
            return (
                <div
                    style={{
                        padding: '0px 175px',
                        position: 'relative',
                    }}
                    key={e.id}
                    id={e.time}
                //content1={e.date.slice(-7)}
                //content1={e.date}
                >

                    <div
                        className='timelineContent'
                        style={{
                            border: '1px solid #999',
                            backgroundColor: '#f2f4f8',
                            opacity: 1,
                            color: '#444',
                            borderRadius: '1rem',
                        }}>
                        <div>

                            <span
                                className="title"
                                style={{
                                    fontSize: '1.2rem',
                                    textAlign: 'center',
                                    color: '#333',
                                    margin: '2rem'
                                }}
                            >
                                {parse(e.title)}
                            </span>

                            <p style={{
                                fontSize: '.8rem',
                                fontFamily: 'Roboto, sans-serif',
                                lineHeight: '1.3rem',
                                maxWidth: '700px',
                                margin: '0rem 0rem 1rem 3rem'

                            }}
                            >{myDescription}</p>

                        </div>
                    </div>

                </div>
            )
        }

        return (

            <div className='timelineItem right'
                key={e.time}
                id={e.time}
                //content1={e.date.slice(-7)}
                //content1={parse(e.date + " " + <br/> + e.role)} >
                content1={parse(e.date)} >

                <div className='timelineContent'>
                    <div className='projectColumnLeft'>
                        <span className="title">{parse(e.title)}</span>
                        <span className="eventType">{parse(e.type)}</span>

                        {/* <ReadMore
                            overview={parse(e.type)}
                            maxChars={100}
                            fontColor={'#999'}
                        /> */}

                        <ReadMore
                            overview={myDescription}
                            maxChars={200} />


                        <div className="projectTags">{Tags}</div>

                        <div className="projectLinks">{Links}</div>

                    </div>

                    <div className='projectColumnImages'>
                        <ImagesCarousel props={e.img} />

                        <ReadMore
                            //id='caption1'
                            overview={parse(e.citation)}
                            maxChars={100}
                        // style={{color: '#fff', backgroundColor: 'blue'}} 
                        />
                    </div>
                </div>
            </div>

        )
    });



    return (

        <div id='MyTimeline'>

            <h1 >Professional Trajectory</h1>

            <div className="vertical">
                {eventsMappedToElements}
            </div>

        </div>

    );
};



MyTimeline.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            //desc: PropTypes.string.isRequired
        })
    ).isRequired,
    orientation: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
    startFrom: PropTypes.oneOf(["first", "last"]).isRequired
};



MyTimeline.defaultProps = {
    orientation: "vertical",
    startFrom: "first",
    events: infoTimeline
};


export default MyTimeline;