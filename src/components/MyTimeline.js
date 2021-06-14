import React from "react";
import parse from "html-react-parser";

import ReadMore from "./ReadMore";
import ImagesCarousel from "./ImagesCarousel";

import "../styles/timeline.sass";
import "../styles/project.sass";

import PropTypes from "prop-types";
import infoTimeline from "../data/infoTimeline";
import infoReferences from "../data/infoReferences"

import "./sassy/event-a.sass";


const MyTimeline = (props) => {

    let { events, orientation, startFrom } = props;

    var goToLink = (e) => {
        e.preventDefault();
        let destination = e.target.id;
        window.open(destination, "_blank");
    };

    const eventsMappedToElements = events.map((e, i) => {
        var Links = null;
        var Tags = null;
        var Description = "";
        var Citation = "";

        if (e.urls.length > 0) {
            Links = e.urls.map((item) => (
                <button key={item.link} id={item.link} title={item.link} onClick={goToLink}>
                    {item.name}
                </button>
            ));
        }

        if (e.tags.length > 0) {
            Tags = e.tags.map((item) => <label key={item}>{parse(item)}</label>);
        }

        if (e.description !== "") {
            Description = parse(e.description);
        }

        if (e.citation !== "") {
            Citation = parse(e.citation);
        }


        let months = [
            "Jan ",
            "Feb ",
            "Mar ",
            "Apr ",
            "May ",
            "Jun ",
            "Jul ",
            "Aug ",
            "Sep ",
            "Oct ",
            "Nov ",
            "Dec ",
        ];

        var DisplayedDate = ""

        if (e.date === "in progress") {
            DisplayedDate = "in progress"
        } else {
            let moIndex = parseInt(e.date.slice(0, 2));
            let mo = months[moIndex - 1];
            DisplayedDate = mo + e.date.slice(-4);
        }


        var Authors = []

        if (e.authors) {

            Authors = e.authors.map(author => {

                if (author) {

                    var rf = infoReferences.filter(item => item.authors === author)

                    if (rf[0]) {
                        return (
                            <span className="authors" title={parse(rf[0].citation)} >{parse(author)}</span>
                        )
                    } else {
                        console.log("err:", e.title, author)
                    }


                }
            })
        }


        return (
            <div
                className="timelineItem right"
                content1={DisplayedDate}
                key={e.time}
                id={e.time}
            >
                <div className="timelineContent">

                    {/* -------------------       Event A      ---------------------- */}

                    <div className="projectColumnLeft">

                        <span className="title">{parse(e.title)}</span>

                        <ReadMore maxChars={300} overview={Description} />

                        <div className="divAuthors">
                            {Authors}
                        </div>

                        <div className="divLinks" style={{ fontSize: ".7rem" }}>
                            {Links}
                        </div>


                    </div>

                    <div className="projectColumnImages">

                        <ImagesCarousel props={e.img} />
                    </div>


                </div>
            </div>
        );
    });

    return (
        <div id="MyTimeline">
            {/* <h1 >Professional Trajectory</h1> */}

            <div className="vertical">{eventsMappedToElements}</div>
        </div>
    );
};

MyTimeline.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            //time: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            //desc: PropTypes.string.isRequired
        })
    ).isRequired,
    orientation: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
    startFrom: PropTypes.oneOf(["first", "last"]).isRequired,
};

MyTimeline.defaultProps = {
    orientation: "vertical",
    startFrom: "first",
    events: infoTimeline,
};

export default MyTimeline;
