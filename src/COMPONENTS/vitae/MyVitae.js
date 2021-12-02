import React from 'react';
import infoPublications from "./infoPublications"
import infoConferences from "./infoConferences"
import "./cv.sass"
import parse from "html-react-parser";

export default class MyVitae extends React.Component {


    render() {

        var Publications = infoPublications.map((item) => {
            return <p className="cvCitation" key={item.abstract}>{parse(item.citation)}</p>
        })

        var Conferences = infoConferences.map((item) => {
            return <p className="cvCitation" key={item.citation} style={{ fontSize: "10px", marginBottom: "0rem" }}>{parse(item.citation)}</p>
        })

        return (
            <div id="sectionVitae" >

                <div className="colLeft">


                    <div id="cvEducation">
                        <h1>EDUCATION</h1>
                        <table >
                            <tbody>
                                <tr>
                                    <td>2003</td>
                                    <td>B.A. Psychology</td>
                                    <td>Alexandru Ioan Cuza University, Iasi, RO</td>
                                </tr>
                                <tr>
                                    <td>2009</td>
                                    <td>M.A. Psychology</td>
                                    <td>Emory University, Atlanta, GA, USA</td>
                                </tr>
                                <tr>
                                    <td>2013</td>
                                    <td>Ph.D. Psychology</td>
                                    <td>Emory University, Atlanta, GA, USA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div id="cvAppointments">
                        <h1>APPOINTMENTS</h1>
                        <table >
                            <tbody>
                                <tr>
                                    <td>2012-2015</td>
                                    <td>Adjunct faculty</td>
                                    <td>Georgia State University</td>
                                </tr>
                                <tr>
                                    <td>2015-2016</td>
                                    <td>Adjunct faculty</td>
                                    <td>Agnes Scott College</td>
                                </tr>
                                <tr>
                                    <td>2017-2018</td>
                                    <td>Adjunct faculty</td>
                                    <td>Oxford College of Emory University</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div id="cvPublications">
                        <h1>PUBLICATIONS</h1>

                        <div className="pubWrapper">
                            {Publications}
                        </div>
                    </div>

                </div>



                <div className="colRight">

                    <div id="cvConferences">
                        <h1>CONFERENCES</h1>
                        <div className="pubWrapper">
                            {Conferences}
                        </div>
                    </div>

                </div>



            </div>
        )
    }
}