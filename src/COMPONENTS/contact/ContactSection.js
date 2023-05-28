import "./contact.sass";

import React, { Component } from "react";
//import { Button } from "react-bootstrap";
import parse from "html-react-parser";
import infoContact from "../../DATA/infoContact";
// import data from '../../DATA/myData'
import { nanoid } from 'nanoid'



class Contact extends Component {
    goToLink = (e) => {
        e.preventDefault();
        let a = e.currentTarget.name;
        window.open(a, "_blank");
    };



    render() {


        return (
            <div id='Contact' key={nanoid()}  >

                <h1 key={nanoid()} > Contact  </h1>



                <table key={nanoid()} >
                    <tbody>

                        <tr key={nanoid()}  >
                            <td key={nanoid()}  >


                                <button
                                    id="btnEmail"
                                    className="btnContactLink"
                                    title={"click to copy"}
                                    onClick={() =>
                                        navigator.clipboard
                                            .writeText("andrei.popa.dev@gmail.com")
                                            .then(() => alert("Copied to clipboard. Use it only for good."))
                                    }
                                >
                                    andrei.popa.dev@gmail.com
                                </button>


                            </td>

                            <td >
                                <p className='p-details' key={nanoid()} >
                                    {'click to copy'}
                                </p>
                            </td>
                        </tr>
                        {infoContact.slice(1).map((link, index) => (
                            <tr key={nanoid()} >
                                <td key={nanoid()}  >
                                    <button
                                        className={link.label === "social" ? "btnContactLink social" : (link.label === "emory" ? "btnContactLink emory" : "btnContactLink")}
                                        key={nanoid()}
                                        name={link.url}
                                        title={link.url}
                                        onClick={this.goToLink}
                                    >
                                        {link.name}
                                    </button>
                                </td>

                                <td key={nanoid()}  >
                                    <p
                                        // className='p-details' 
                                        className={link.label === "social" ? "p-details social" : (link.label === "emory" ? "p-details emory" : "p-details")}
                                        key={nanoid()}
                                    >
                                        {/* {parse(link.info)} */}
                                        {link.info === "" ? link.url : parse(link.info)}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>



                <div
                    id='myFooter'
                    key={nanoid()}
                    fixed='bottom'
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
