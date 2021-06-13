import React, { Component } from "react";
import { Button } from "react-bootstrap";
import parse from "html-react-parser";
import infoContact from "../data/infoContact";
import "../styles/contact.sass";
//import "../App.sass";

class Contact extends Component {
    goToLink = (e) => {
        e.preventDefault();
        let a = e.currentTarget.name;
        window.open(a, "_blank");
    };

    render() {
        return (
            <div id="Contact" className="fullscreen darker">
                <h1>Contact</h1>

                <div className="section_column">
                    <label className="lbl_email">andrei.popa.dev@gmail.com</label>

                    <button
                        className="btn_email"
                        onClick={() =>
                            navigator.clipboard
                                .writeText("andrei.popa.dev@gmail.com")
                                .then(() => alert("Copied to clipboard. Use it only for good."))
                        }
                    >
                        Copy address
          </button>
                </div>

                <table className="table_contact">
                    <tbody>
                        {infoContact.slice(1).map((link, index) => (
                            <tr key={index}>
                                <td>
                                    <button
                                        name={link.url}
                                        title={link.url}
                                        onClick={this.goToLink}
                                    >
                                        {link.name}
                                    </button>
                                </td>

                                <td>
                                    <p>{parse(link.info)}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                <div className="footer" fixed="bottom">
                    <span>
                        End of site.
            <br />
            Made with React and ❤ (but mostly React) | Andrei Popa 2020
          </span>
                </div>
            </div>
        );
    }
}

export default Contact;
