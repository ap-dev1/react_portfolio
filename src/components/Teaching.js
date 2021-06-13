import React, { Component } from "react";
import "./sassy/teaching.sass";

import parse from "html-react-parser";
import {
    Popover,
    Button,
    OverlayTrigger,
    Navbar,
    NavDropdown,
    Nav,
} from "react-bootstrap";

var infoTeaching = [
    {
        name: "Statistics",
        question: "What numbers are for",
        //type: "lab, <i>n</i> = 15",
        coordinates: [
            {
                place: "Emory University, Fall 2007",
                time: "Fall 2007",
                role: "Teaching Assistant<br/>grad school requirement<br/>Instructor: Dr. Nancy Bliwise",
                enrolled: 15,
            },
        ],
        notes: "",

    },
    {
        name: "Research<br/>Methods",
        question: "How to research, with or without numbers, with or without reason, etc.",
        coordinates: [
            {
                place: "Emory University",
                time: "Spring 2008",
                role: "Teaching Assistant<br/>grad school requirement<br/>Instructor: Dr. Nancy Bliwise",
                enrolled: 15,
            },
            {
                place: "Agnes Scott",
                time: "Spring 2016",
                role: "Instructor",
                enrolled: 30,
            },
        ],
        notes: "",

    },
    {
        name: "Introduction to<br/>Psychology",
        question: "If we'd teach these chapters in random order, would it matter? Bullet-lists don't make a science.",
        coordinates: [
            {
                place: "Emory University",
                time: ["Fall 2011"],
                role: "Teaching Assistant<br/>Instructor: Dr. Scott Lilienfeld",
                enrolled: 125,
            },
            {
                place: "Georgia State",
                time: ["2013 - 2015"],
                role: "Teaching Assistant<br/>grad school requirement<br/>Instructor: Dr. Nancy Bliwise",
                enrolled: 125,
            },
            {
                place: "Agnes Scott College",
                time: ["Fall 2015", "Spring 2016"],
                role: "Instructor",
                enrolled: 30,
            },
            {
                place: "Emory University, Oxford Campus",
                time: ["Fall 2017"],
                role: "Instructor",
                enrolled: 30,
            },
        ],
        notes: "",
    },



    {
        name: "Behavior<br/>Modification",
        question: "Basic science translated to clinical settings. Could be better.",

        coordinates: [
            {
                place: "Emory University",
                time: ["Spring 2009", "Fall 2010", "Fall 2011"],
                role: "Teaching Assistant<br/>Volunteer<br/>Instructor: Dr. Jack McDowell",
                enrolled: 50,
            },
        ],
        notes: "",
    },



    {
        name: "Complexity Science: <br/>Implications for Psychology",
        question: "Implications for Psychology",
        coordinates: [
            {
                place: "Emory University",
                time: ["Fall 2011", "Spring 2012"],
                role: "Co-instructor<br/>ORDER Fellow<br/>Coordinators: ",
                enrolled: 15,
            },
        ],
        notes: "Freshmen and Senior seminars<br/>O.R.D.E.R. fellowship<br/>Coordinators: Dr. David Lynn, Dr. Leslie Taylor",
    },



    {
        name: "The Evolution of<br/>Acquired Behavior",
        question: "How behavior works",
        coordinates: [
            {
                place: "Emory University",
                time: "Spring 2013",
                role: "Instructor",
                enrolled: 65,
            },
        ],
        notes: "",
    },




    {
        name: "Abnormal<br/>Psychology",
        question: "Social stressors meet genetic predispositions. Where? Is it scheduled? Can we take pictures? Asking for a friend.",
        coordinates: [
            {
                place: "Georgia State University",
                time: "2012 - 2015",
                role: "Instructor",
                enrolled: 75,
            },
        ],
        notes: "",
    },



    {
        name: "Personality<br/>Development",
        question: "When did you become you?<br/>",
        coordinates: [
            {
                place: "GSU",
                time: "2012 - 2015",
                role: "Instructor",
                enrolled: 50,
            },
        ],
        notes: "",
    },






    {
        name: "Social Psychology",
        question: "When did you become you?<br/>",
        coordinates: [
            {
                place: "Agnes Scott",
                time: "Spring 2016",
                role: "Instructor",
                enrolled: 30,
            },
        ],
        notes: "",
    },


    {
        name: "Choice and <br/>Preference",

        coordinates: [
            {
                place: "Agnes Scott",
                time: "Spring 2016",
                role: "Instructor",
                enrolled: 30,
            },
        ],
        notes: "Senior Seminar; see also SpARC 2016",
    },


    {
        name: "Introduction to<br/>Psychobiology",
        question: "",
        coordinates: [
            {
                place: "Emory University, Oxford Campus",
                time: "Fall 2017",
                role: "Instructor",
                enrolled: 30,
            },
        ],
        notes: "",
    },



    // {
    //     name: "Intro to Psychobiology",
    //     school: "Emory University - Oxford Campus",
    //     years: "2017/2018",
    //     notes: "",
    //     enrolled: 50,
    //     coordinates: {
    //         place: "",
    //         time: "",
    //         role: "Instructor",


    //     },







];

class TeachingExperience extends Component {

    render() {

        return (
            <div id="teachingSection" className="fullscreen darker" style={{ paddingTop: "0rem" }}>

                <div className="divTeaching">
                    <span className="title1">Teaching experience</span>
                    <span className="subtitle">2007 - 2018</span>

                    <div className="divTeachingCards">


                        {infoTeaching.map((item) => {
                            return (
                                <div className="teachingCard" key={item.name}>
                                    {/* <p> {item.question} </p> */}
                                    <p> {parse(item.name)} </p>
                                    {/* <p> {parse(item.info)} </p> */}
                                    {/* <p> {parse(item.notes)} </p> */}
                                    {/* <p> {item.school}, {item.years} </p> */}

                                </div>
                            );
                        })}
                    </div>


                </div>

                {/* <table className="table_teaching">
                    {infoTeaching.map((item) => {
                        return (
                            <tr>
                                <td> {item.name} </td>
                                <td> {parse(item.notes)} </td>
                                <td> {item.school}, {item.years} </td>

                            </tr>
                        );
                    })}
                </table> */}

            </div>
        )
    }
}

export default TeachingExperience;
