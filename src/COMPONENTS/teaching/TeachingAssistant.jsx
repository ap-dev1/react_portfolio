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
                <tr>
                    <th
                        style={{
                            padding: "5px",
                            width: "220px",

                        }}
                    >
                        {item.name}
                    </th>

                    <td
                        style={{
                            padding: "5px",
                            width: "150px",
                        }}
                    >
                        {item.semester}
                    </td>

                    <td
                        style={{
                            padding: "5px",
                            width: "150px",
                        }}
                    >
                        for {item.instructor}
                    </td>
                </tr>
            )
        })

        return (
            <div

                style={{
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    //padding: "0px",
                    //color: "#19f8e2", 
                }}
            >

                <div className='divDetails'>

                    <table>
                        {TARoles}

                    </table>



                </div >





                {/* 
                <Card
                    className="card"
                    key={nanoid()}
                    style={{
                        width: "180px",
                        backgroundColor: "transparent",
                        opacity: 1,
                        boxShadow: "1px 1px 4px #042e23",
                        border: "0px solid #31D1B3",
                    }}
                >

                    <Card.Title
                        style={{
                            fontSize: "12px",
                            textAlign: "center",
                            //color: "#31D1B3",
                            color: "#bbb",
                            marginTop: "10px"
                        }}
                    >
                        Teaching Assistant

                    </Card.Title>

                    <Card.Subtitle
                        style={{
                            fontSize: "12px",
                            textAlign: "center",
                            marginBottom: "15px",
                            color: "#bbb"
                        }}
                    >
                        Emory University <br />2007 - 2013

                    </Card.Subtitle>


                    {TARoles}

                </Card>

 */}
            </div >
        )
    }

}