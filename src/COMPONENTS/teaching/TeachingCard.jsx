import { nanoid } from "nanoid"
import React from "react"
import { Fade } from "react-reveal"


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
                // style={{ margin: "0px", fontSize: "12px", display: "flex", flexDirection: "column", textAlign: "left", width: "100%", padding: "0px 5px ", color: "#19f8e2" }}
                >

                    <span
                        style={{
                            margin: "1px",
                            textAlign: "left",
                            width: "100%",
                            color: "#eee",
                            color: `#${fontClr}`
                        }}
                    >
                        {this.props.institution}
                    </span>





                    <span
                        style={{
                            margin: "1px",
                            textAlign: "left",
                            width: "100%",
                            color: "#ddd",
                        }}
                    >
                        {this.props.semester}  {this.props.sections > 1 ? ` , ${this.props.sections} sections` : null}
                    </span>



                    <span
                        style={{
                            margin: "1px",
                            textAlign: "left",
                            width: "100%",
                            color: "#ddd",
                        }}
                    >
                        {this.props.role === "Instructor" ? null : this.props.role}
                    </span>

                </div >
            )
        }

    }

}