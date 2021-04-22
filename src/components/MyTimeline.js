
import React from "react"
import parse from 'html-react-parser';
import DayJS from 'react-dayjs';

import ReadMore from "./ReadMore";
import ImagesCarousel from "./ImagesCarousel";

import "../styles/timeline.sass"
import "../styles/project.sass"
import "../styles/carousel.sass"


import PropTypes from "prop-types";
import infoTimeline from "../data/infoTimeline"



const MyTimeline = props => {

    let { events, orientation, startFrom } = props;

    if (startFrom === 'last') {
        events = events.reverse();
    }

    events = infoTimeline

    var goToLink = (e) => {
        e.preventDefault()
        let destination = e.target.id
        window.open(destination, '_blank')
    };


    // MAP EVERYTHING, -----------------------------------------
    const eventsMappedToElements = events.map((e, i) => {


        // TAGS, IMAGES, BUTTONS, -----------------------------------------
        var Buttons = e.urls.map((item) => (
            <button
                id={item.link}
                title={item.link}
                onClick={goToLink}
            >{item.name}
            </button>
        ))

        // var Images = e.img.map((item) => {
        //     if (!null) {
        //         console.log(e)
        //     }
        //     return (
        //         <img src={item}
        //             alt={item.title}
        //             title={item.imgTitle}
        //             style={{ maxWidth: 300 / e.img.length, minWidth: 150, margin: '.1rem' }}
        //             className="imgZoom"
        //         ></img>
        //     )
        // })


        var Tags = e.tags.map((item) => (
            <label >{item}</label>
        ))



        var myDescription = parse(e.description)

        return (

            <div className="timelineItem right"
                key={e.date}
                content1={e.date.slice(-7)}>

                <div className='timelineContent'>
                    <div className='projectColumnLeft'>
                        <span className="title">{e.title}</span>

                        <ReadMore
                            id="descrp"
                            overview={myDescription}
                            maxChars={200} />

                        <ReadMore
                            id="role"
                            overview={e.role}
                            maxChars={50}
                        />

                        <div className="projectTags">{Tags}</div>

                        <div className="projectLinks">{Buttons}</div>

                    </div>

                    <div className='projectColumnImages'>
                        <ImagesCarousel props={e.img} />

                        <ReadMore
                            id='caption1'
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
            desc: PropTypes.string.isRequired
        })
    ).isRequired,
    orientation: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
    startFrom: PropTypes.oneOf(["first", "last"]).isRequired
};



MyTimeline.defaultProps = {
    orientation: "vertical",
    startFrom: "last"
};


export default MyTimeline;