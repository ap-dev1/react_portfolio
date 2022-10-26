import React, { Component } from "react";


import {
    Popover,
    //Button,
    OverlayTrigger,
    //Navbar,
    //NavDropdown,
    //Nav,
} from "react-bootstrap";

var infoAcronyms = [
    {
        term: "ETBD",
        meaning: "evolutionary theory of behavior dynamics",
        link: "www",
    },
    { term: "COD", meaning: "Changeover Delay", link: "www" },
    {
        term: "Hamming Distance",
        meaning:
            "The number of diferences between two bit strings of equal length; in strings 1110 and 0011 one bit is the same and three are different, so the Hamming Distance = 3.",
        link: "https://en.wikipedia.org/wiki/Hamming_distance",
    },
    {
        term: "ABAI",
        meaning: "Association for Behavior Analysis International",
        link: "https://www.abainternational.org/welcome.aspx",
    },
    {
        term: "SQAB",
        meaning: "Society for Quantitative Analysis of Behavior",
        link: "https://www.sqab.org/",
    },
    {
        term: "IRB",
        meaning: "Institutional Review Board",
        link: "http://www.irb.emory.edu/",
    },

    {
        term: "ETD",
        meaning: "Electronic Theses and Disertations",
        link: "https://etd.library.emory.edu/",
    },

    {
        term: "WCALB",
        meaning: "Winter Conference of Learning and Behavior",
        link: "WWWWWWW",
    },
    // {
    //     term: "MERN",
    //     meaning: "MongoDB-Express-React-Node",
    //     link: "WWWWWWW",
    // },
];

class NavAcronyms extends Component {
    render() {
        const popover1 = (
            <Popover id="popover-basic" className="pop-over">
                <Popover.Content>
                    <table className="table_acronyms">
                        {infoAcronyms.map((item) => {
                            return (
                                <tr key={item.term}>
                                    <td>
                                        <b>{item.term}</b>
                                    </td>
                                    <td> {item.meaning} </td>
                                </tr>
                            );
                        })}
                    </table>
                </Popover.Content>
            </Popover>
        );

        var MyAcronyms = () => (
            <OverlayTrigger trigger="click" placement="left" overlay={popover1}>
                <button
                    id="navInfo"
                    title="Click to expand"
                    style={{
                        fontSize: ".8rem",
                        width: "100%",
                        marginBottom: "50px",
                        borderRadius: "5px",
                        fontFamily: "Roboto",
                        background: "#070c0a",
                        color: "#78f8a2",
                        opacity: 0.9,
                    }}
                >
                    {"acronyms"}
                </button>
            </OverlayTrigger>
        );

        return <MyAcronyms />;
    }
}

export default NavAcronyms;
