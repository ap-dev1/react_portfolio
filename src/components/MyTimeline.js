
import React from "react"

import ReadMore from "./ReadMore";

import "../styles/timeline.sass"

import PropTypes from "prop-types";
// import cx from "classnames";
// import timeline from "../styles/timeline.sass";

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
        // var Buttons = e.urls.map((item) => (
        //     <button
        //         id={item.link}
        //         title={item.link}
        //         onClick={goToLink}
        //     >{item.name}
        //     </button>
        // ))

        // var Images = e.img.map((item) => {
        //     return (
        //         <img src={item}
        //             alt={item.title}
        //             title={item.imgTitle}
        //             style={{ maxWidth: 500 / e.img.length, minWidth: 150, margin: '.1rem' }}
        //             className="imgZoom"
        //         ></img>
        //     )
        // })

        // var Tags = e.tags.map((item) => (
        //     <label className="projectTag">{item}</label>
        // ))

        // console.log(styles.timelineItem)

        return (

            <div
                //key={e.time}
                key={e.date}
                className="timelineItem right"
                content1={e.date}

            // className={cx(styles.timelineItem, { [styles.right]: i % 2 !== 0 })}
            >

                <div className="timelineContent">
                    
                    {/* <span className="time">{e.date}</span> */}

                    <span className="title">{e.title}</span>
                    <p className="desc">{e.description}</p>

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