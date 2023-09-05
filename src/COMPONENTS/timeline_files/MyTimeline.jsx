import "./timeline.sass";
import "./event-default.sass";

import { nanoid } from "nanoid"

import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";

import infoHighlights from "../../DATA/infoHighlights";
import infoCV from "../vitae/infoCV";


import ReadMore from "./ReadMore";
import ImagesCarousel from "./ImagesCarousel";
// import ResearchStudy from "./ResearchStudy";
import ResearchStudyNew from "./research_study/ResearchStudyNew";

// import Qual from "./Qual";
import CollapseHook from "./CollapseHook"
// import MathematicalModels from "./MathematicalModels"
// import EtbdEmergence from "./EtbdEmergence"
// import HammingDistances from "./HammingDistances"
// import EtbdPy from './EtbdPy'

import LovelyOgive from "./LovelyOgive"
import Nbt2008 from "../etbd_nbt/Nbt2008"

import { Container, Row, Col } from "react-bootstrap"

const MyTimeline = (props) => {

    // let { events, orientation, startFrom } = props;
    let { events } = props;

    var goToLink = (e) => {
        e.preventDefault();
        let destination = e.target.id;
        window.open(destination, "_blank");
    };





    const TimelineHighlights = events.map((e, i) => {
        var Description = "",
            Links = [],
            Skills = [],
            Tech = [],
            References;


        // LINKS
        if (e.urls.length > 0) {
            Links = e.urls.map((item) => (
                <button
                    className='button-link'
                    key={nanoid()}
                    id={item.link}
                    title={item.link}
                    onClick={goToLink}
                >
                    {item.name}
                </button >
            ))
        };

        // TECH
        if (e.tech) {
            Tech = e.tech.map((item) =>
                <label className='lbl-tech' key={nanoid()}> {parse(item)} </label>
            )
        };

        if (e.skills) {
            Skills = e.skills.map((item) => {
                return <label className='lbl-skill' key={nanoid()}>{parse(item)}</label>
            })
        };

        if (e.description !== "") {
            Description = parse(e.description);
        };



        if (e.relevantWork) {
            References = e.relevantWork.map((item) => {

                if (item) {
                    let x = infoCV.filter(d => d.name === item)[0]
                    let xx = infoCV.filter(d => d.name === item)
                    let myRef = x.citation

                    return (
                        < p className="citation-apa" key={nanoid()} >
                            {parse(myRef)}
                        </p >
                    )
                }
            })
        };



        var nickname = ""

        if (e.nickname) {
            nickname = e.nickname
        } else {
            nickname = e.title
        }

        let navMarker = e.navMarker ? e.navMarker : e.date

        // RESEARCH STUDY: 
        if (e.studyInfo) {
            let studyTitle = e.title.split(":")

            return (
                <ResearchStudyNew
                    nickname={nickname}
                    key={nanoid()}
                    name={""}
                    studyInfo={e.studyInfo}
                    links={Links}
                    tech={Tech}
                    skills={Skills}
                    description={Description}
                    references={References}
                    img={e.img}
                    title={studyTitle}
                    displayDate={e.displayDate}
                    navMarker={navMarker}
                />
            )
        };

        // DEFAULT:
        return (
            <div
                className='item'
                content1={e.displayDate}
                key={nanoid()}
                id={navMarker}
            >
                <div
                    className='itemContent'
                    key={nanoid()}
                    style={{
                        // backgroundColor: props.contentBg ? props.contentBg : '#274235'
                        backgroundColor: props.contentBg ? props.contentBg : '#01303f'
                    }}
                >


                    {/* -------------------       default event     ---------------------- */}

                    <div className='event-default' key={nanoid()}>

                        <div className='col-left' key={nanoid()}>

                            <h1 className='title' key={nanoid()} >
                                {parse(e.title)}
                            </h1>

                            <ReadMore overview={Description} maxChars={1000} />


                            {/* <div
                                    className='div-tech' key={nanoid()}
                                >
                                    {Skills}
                                </div> */}

                            <div className='div-tech' key={nanoid()}>
                                {Tech}
                            </div>

                            <div className='div-links' key={nanoid()} >
                                {Links}
                            </div>

                            <CollapseHook
                                collapsedTitle={"Relevant work"}

                                collapsedText={
                                    <div className="divRefs" key={nanoid()}>
                                        {References}
                                    </div>
                                }
                            />

                        </div>

                        <div className="projectColumnImages">
                            {
                                e.custom_item === 'hamming_demo' ? <LovelyOgive /> : e.custom_item === 'nbt' ? <Nbt2008 /> : <ImagesCarousel props={e.img} />
                            }
                        </div>

                    </div>


                </div>
            </div>
        );
    });


    return (

        <div
            id='Parkour'
            className='timeline'
            key={nanoid()}
            style={{
                backgroundColor: props.bg ? props.bg : '#01303f',
            }}
        >

            {/* <h1>Highlights</h1> */}
            {TimelineHighlights}
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
    // events: infoTimeline,
    events: infoHighlights
};

export default MyTimeline;
