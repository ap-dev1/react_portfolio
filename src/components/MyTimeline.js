
import React from "react"

import ReadMore from "./ReadMore";

import "../styles/timeline.sass"

import PropTypes from "prop-types";

import infoTimeline from "../data/infoTimeline"



const MyTimeline = props => {
    let { events, orientation, startFrom } = props;

    if (startFrom === "last") {
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


        // FUNCTIONS, IMAGES, BUTTONS, -----------------------------------------
        var Buttons = e.urls.map((item) => (
            <button
                id={item.link}
                title={item.link}
                onClick={goToLink}
            >{item.name}
            </button>
        ))

        var Images = e.img.map((item) => {
            return (
                <img src={item}
                    alt={item.title}
                    title={item.imgTitle}
                    style={{ maxWidth: 350 / e.img.length, minWidth: 150, margin: '.1rem' }}
                    className="imgZoom"
                ></img>
            )
        })

        var Tags = e.tags.map((item) => (
            <label className="projectTagTimeline">{item}</label>
        ))

        // console.log(styles.timelineItem)

        return (

            <div
                //key={e.time}
                key={e.date}
                className="timelineItem right"
                content1={e.date}
            >

                <div className="timelineContent">

                    <div className="projectColumn">
                        <span className="title">{e.title}</span>

                        <p className='projectRole'>{e.role}</p>

                        <div className="divTags">{Tags}</div>

                        <div className='projectButtons'>{Buttons}</div>


                        <ReadMore overview={e.description} />

                    </div>

                    <div className='projectColumn'>
                        <div className="projectImages">{Images}</div>

                        <p className='imageCaption'>{e.citation}</p>
                    </div>

                </div>


            </div>


        )
    });

    return (


        <div
            className="vertical"
        >
            {eventsMappedToElements}

        </div>
        // <div className='timelineWrapper'>


        // </div>


        // <div className='projectRow'>
        //     <div className='projectColumn'>


        //     </div>
        // </div>

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