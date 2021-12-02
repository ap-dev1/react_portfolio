import React, { Component } from "react";
//import { Button } from "react-bootstrap";
import parse from "html-react-parser";
import infoContact from "../../DATA/infoContact";
import "./contact.sass";


class Contact extends Component {
    goToLink = (e) => {
        e.preventDefault();
        let a = e.currentTarget.name;
        window.open(a, "_blank");
    };

    render() {
        return (
            <div id="Contact" className="fullscreen darker"
                style={{ backgroundColor: "#1D2731", marginBottom: "0rem" }}>


                <h1 className="section_title" style={{ marginBottom: "2rem" }}>Contact</h1>



                <div className="section_column">
                    <button
                        id="btnEmail"
                        className="btnContactLink"
                        style={{
                            width: "300px",
                            //color: "#02aab0",
                            fontSize: "1rem",
                            fontWeight: 400,
                        }}
                        title={"click to copy"}
                        onClick={() =>
                            navigator.clipboard
                                .writeText("andrei.popa.dev@gmail.com")
                                .then(() => alert("Copied to clipboard. Use it only for good."))
                        }
                    >
                        andrei.popa.dev@gmail.com
                    </button>
                </div>

                <table style={{ width: "800px", margin: "1rem auto 1rem auto" }}>
                    <tbody>
                        {infoContact.slice(1).map((link, index) => (
                            <tr
                                key={index}
                            >
                                <td
                                    style={{
                                        //border: "1px solid red",
                                        padding: ".1rem .2rem",
                                        verticalAlign: "top",
                                        textAlign: "center"
                                    }}
                                >
                                    <button
                                        className="btnContactLink"
                                        name={link.url}
                                        title={link.url}
                                        onClick={this.goToLink}
                                    >
                                        {link.name}
                                    </button>
                                </td>

                                <td style={{ padding: ".1rem .5rem" }}>
                                    <p style={{ width: "500px", color: "#ccc", fontSize: ".9rem", fontFamily: "Roboto" }}
                                    >{parse(link.info)}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>



                <div
                    id="myFooter"
                    className="footer"
                    fixed="bottom"
                //style={{ color: "#FF652F", color: "#14A76C" }}
                >
                    <span>
                        End of site.<br />
            Made with React and ❤ (but mostly React) | Andrei Popa 2020
          </span>
                </div>
            </div>
        );
    }
}

export default Contact;
