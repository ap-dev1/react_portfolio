
import "./timeline.sass";

import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";

import infoTimeline from "../../DATA/infoTimeline";
import ReadMore from "./ReadMore";
import ImagesCarousel from "./ImagesCarousel";
import ResearchStudy from "./ResearchStudy";
import Qual from "./Qual";
import CollapseHook from "./CollapseHook"
// import MathematicalModels from "./MathematicalModels"
import EtbdEmergence from "./EtbdEmergence"
import HammingDistances from "./HammingDistances"
import LovelyOgive from "./LovelyOgive"


const MyTimeline = (props) => {

    // let { events, orientation, startFrom } = props;
    let { events } = props;

    var goToLink = (e) => {
        e.preventDefault();
        let destination = e.target.id;
        window.open(destination, "_blank");
    };





    const eventsMappedToElements = events.map((e, i) => {

        var Links = null,
            //Tags = null,
            Description = "",
            //Citation = "",
            Technologies = [];
        //DisplayedDate = "";






        // LINKS
        if (e.urls.length > 0) {
            Links = e.urls.map((item) => (
                <button
                    className="btnLink"
                    key={item.link}
                    id={item.link}
                    title={item.link}
                    onClick={goToLink}
                >
                    { item.name}
                </button >
            ))
        }



        // TECH
        if (e.technologies) {
            Technologies = e.technologies.map((item) =>
                <label key={item}> {parse(item)} </label>
            )
        }






        // if (e.tags.length > 0) {
        //     Tags = e.tags.map((item) => <label key={item}>{parse(item)}</label>);
        // }

        if (e.description !== "") {
            Description = parse(e.description);
        }



        // if (e.date === "in progress") {
        //     DisplayedDate = "[" + e.id + "]  " + "in progress"
        // } else {
        //     let mo = e.date.slice(0, 2);
        //     DisplayedDate = "[" + e.id + "]  " + mo + "-" + e.date.slice(-4)

        // }


        var DisplayedDateTemp = ""

        if (e.date === "in progress") {
            DisplayedDateTemp = "(" + e.id + ")  " + "in progress"
        } else {
            DisplayedDateTemp = e.date.replaceAll("/", ".")
        }


        // var Authors = []

        // if (e.authors) {
        //     Authors = e.authors.map(author => {

        //         if (author) {
        //             var rf = infoReferences.filter(item => item.authors === author)

        //             if (rf[0]) {
        //                 return (
        //                     <span className="authors" title={parse(rf[0].citation)} >{parse(author)}</span>
        //                 )
        //             } else {
        //                 //console.log("err:", e.title, author)
        //             }
        //         }
        //     })
        // }


        var References = []

        if (e.references) {
            References = e.references.map((item) => {

                if (item) {
                    return < p
                        className="citation-apa"
                        key={item}
                    //title={parse(item)}
                    >
                        {parse(item)}
                    </p >
                }


            })
        }


        var nickname = ""

        if (e.nickname) {
            nickname = e.nickname
        } else {
            nickname = e.title
        }

        var fontFam = e.fontFam

        //var itemKey = e.date + e.description


        // RESEARCH STUDY: 
        if (e.studyInfo) {
            let studyTitle = e.title.split(":")

            return (
                <ResearchStudy
                    nickname={nickname}
                    key={e.studyInfo[3].irb.toString()}
                    name={""}
                    studyInfo={e.studyInfo}
                    links={Links}
                    tech={Technologies}
                    description={Description}
                    img={e.img}
                    // title={e.title}
                    // title={e.title.toUpperCase()}
                    title={studyTitle}
                />
            )
        };



        // SENSITIVITY demo:
        // if (e.title === 'Mathematical models & computational theories') {
        //     return (
        //         <MathematicalModels
        //             qualDate={DisplayedDateTemp}
        //             key={"sensitivity_demo_sdgffgabalaxfxfsdg"}
        //             style={{ fontFamily: fontFam }}

        //             //tech={Technologies}
        //             title={parse(e.title)}
        //             description={Description}
        //             links={Links}
        //             references={References}
        //         />
        //     )
        // };



        // EMEMRGENCE demo:
        if (e.custom_item === 'emergence_demo') {
            return (
                <EtbdEmergence
                    qualDate={DisplayedDateTemp}
                    key={"emergence_demo_sdgffgabalaxfxfsdg"}
                    style={{ fontFamily: fontFam }}
                    tech={Technologies}
                    title={parse(e.title)}
                    description={Description}
                    links={Links}
                    references={References}
                />
            )
        };



        HAMMING:
        if (e.custom_item === 'hamming_demo') {
            return (
                <HammingDistances
                    qualDate={DisplayedDateTemp}
                    key={"qual_item_balabalaxfxfsdg"}
                    style={{ fontFamily: fontFam }}
                    //tech={Technologies}
                    title={parse(e.title)}
                    description={Description}
                    links={Links}
                    references={References}
                />
            )
        };


        // QUAL:
        // if (e.nickname === 'Qual') {
        //     return (
        //         <Qual
        //             qualDate={DisplayedDateTemp}
        //             key={"qual_item_balabalaxfxfsdg"}
        //             style={{ fontFamily: fontFam }}
        //             //tech={Technologies}
        //             title={parse(e.title)}
        //             description={Description}
        //             links={Links}
        //             references={References}
        //         />
        //     )
        // };


        let navMarker = e.navMarker ? e.navMarker : e.date


        // DEFAULT:
        return (
            <div
                className="item"
                content1={parse(DisplayedDateTemp)}
                key={e.date + e.title}
                id={navMarker}

                style={{ fontFamily: fontFam }}
            >
                <div className="itemContent">


                    {/* -------------------       Event A      ---------------------- */}

                    <div className="projectColumnLeft">

                        <span className="title">{parse(e.title)}</span>

                        <ReadMore maxChars={1000} overview={Description} />


                        <CollapseHook
                            collapsedTitle={"Relevant work"}

                            collapsedText={
                                <div className="divRefs">  {References}  </div>
                            }
                        />

                        <div className="divTech">  {Technologies}  </div>

                        <div className="links" >  {Links}  </div>

                    </div>


                    <div className="projectColumnImages">
                        <ImagesCarousel props={e.img} />
                    </div>


                </div>
            </div>
        );
    });


    return (

        <div className="timeline">
            {eventsMappedToElements}
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
