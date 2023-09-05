import { nanoid } from "nanoid"
import React from "react"
import { Fade } from "react-reveal"
import { assistantRoles } from "../../DATA/infoTeaching"
import { Card } from "react-bootstrap"



export default class TeachingAssistant extends React.Component {
    render() {

        const infoTA = assistantRoles()

        const TARoles = infoTA.map((item) => {
            return (

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        marginBottom: "15px",
                        fontSize: "13px",

                    }}
                >
                    <span
                        style={{
                            margin: "0px",
                            marginBottom: '4px',
                            textAlign: "left",
                            color: "#31D1B3",
                            color: '#ff9900',
                            fontSize: "13px",
                            fontWeight: 500,
                        }}
                    >
                        {item.name}
                    </span>


                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            margin: "0px",
                            // border: "1px dashed lime",
                            justifyContent: 'space-between',
                            textAlign: 'left',
                        }}
                    >



                        <span
                            style={{
                                // margin: 'auto',
                                fontFamily: "Roboto",
                                color: "#aaa",
                                fontSize: "11px",
                                // paddingLeft: "20px",
                                // border: "1px dotted red",

                            }}
                        >
                            {`Instructor: ${item.instructor}`}
                        </span>

                        <span
                            style={{
                                fontFamily: "Roboto",
                                color: "#aaa",
                                fontSize: "11px",
                                // margin: 'auto',

                            }}
                        >
                            {item.years ? item.years : item.semester.slice(-4)}
                        </span>


                    </div>

                </div>

            )
        })

        return (
            <div
                style={{
                    //color: "#19f8e2", 
                    color: "#aaa",
                    width: '100%',
                    //height: "fit-content",
                    //marginRight: "75px",
                    //border: "1px dashed lime",
                }}
            >


                <div className='sub-section-header'
                    style={{
                        marginBottom: '20px',
                    }}
                >

                    <h1 className="title" >
                        TEACHING ASSISTANT
                    </h1>

                    <h2 className="years"  >
                        Emory University, 2007 - 2011
                    </h2>

                </div>

                <div className='sub-section-body'
                    style={{
                        marginTop: '0px',
                        paddingTop: '0px',
                    }}
                >
                    {TARoles}
                </div>


            </div >
        )
    }

}