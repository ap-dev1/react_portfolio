import { nanoid } from "nanoid"
import React from "react"
import { Fade } from "react-reveal"
import parse from 'html-react-parser'

export default class TeachingCard extends React.Component {
    render() {
        let fontClr = ""

        if (this.props.schoolCode === "agnes") {
            fontClr = "fcb3ff"
        }
        if (this.props.schoolCode === "emory" || this.props.schoolCode === "oxford") {
            fontClr = "edfd36"
        }
        if (this.props.schoolCode === "georgia") {
            fontClr = "71b6ff"
        }


        // if (!this.props.schools.includes(this.props.schoolCode)) {
        //     return null
        // }
        if (this.props.teachingDetails === false) {
            return null
        }
        else {
            return (
                <div
                    className='divDetails'
                    style={{
                        // margin: "0px",
                        marginBottom: "4px",

                        fontSize: "12px",
                        display: "flex",
                        // flexDirection: "column",
                        flexDirection: "row",

                        textAlign: "left",
                        width: "100%",
                        // padding: "0px 5px ",
                        color: "#19f8e2",
                        // border: '1px dotted yellow',
                        justifyContent: 'space-between',
                    }}
                >



                    <span
                        style={{
                            textAlign: "left",
                            color: "#eee",
                            fontSize: '11px',
                        }}
                    >
                        {this.props.institution} {this.props.sections > 1 ? `(${this.props.sections} sections)` : null}

                    </span>


                    {/* <span
                        style={{
                            margin: "1px",
                            textAlign: "left",
                            color: "#ddd",
                        }}
                    >
                        {this.props.semester}  {this.props.sections > 1 ? `, ${this.props.sections} sections` : null}
                    </span>
 */}

                    <span
                        style={{
                            fontSize: '11px',
                            textAlign: "left",
                            color: "#ddd",
                        }}
                    >
                        {this.props.semester}

                    </span>


                </div >


            )
        }

    }

}