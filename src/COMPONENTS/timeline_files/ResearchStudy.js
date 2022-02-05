import React, { Component } from "react"
//import parse from "html-react-parser"
import ReadMore from "./ReadMore";
import "./study.sass"
import { nanoid } from "nanoid"

import ImagesContainer from "./ImagesContainer";


export default class ResearchStudy extends Component {

    render() {

        return (
            <div
                className="item"
                content1={this.props.nickname}
                key={Date.now() + Math.random()}
                id={this.props.date}
            >
                <div className="itemContent item_study" key={Math.random()}>

                    {/* -------------------       RESEARCH STUDY      ---------------------- */}

                    <div className="outer_column" key={Date.now() + Math.random()}>

                        <div className="row" key={Math.random() + Date.now()}>

                            <div className="study_info" key={Math.random()}>

                                <div className="titles" key={Math.random()} >
                                    <h1 className="title" key={Math.random()}>
                                        {this.props.title[0].toUpperCase()}

                                    </h1>
                                    <h2 className="subtitle" key={Math.random()}>
                                        {this.props.title[1]}
                                    </h2>
                                </div>


                                <div className="summary" key={Math.random()}  >
                                    {this.props.description}
                                </div>

                                {/* <div className="divTech tech" key={Math.random()} >  {this.props.tech}  </div> */}

                            </div>


                            <div className="study_info" key={nanoid()}>

                                <div className="irb" key={nanoid()}>
                                    <table key={nanoid()}>
                                        <tbody>

                                            {
                                                this.props.studyInfo.map((item) =>

                                                    < tr key={nanoid()}>
                                                        <th key={nanoid()}>{Object.entries(item)[0][0]}:</th>
                                                        <td key={nanoid()}>{Object.entries(item)[0][1]}</td>
                                                    </tr>
                                                )
                                            }

                                            < tr
                                                key={nanoid()}

                                            >
                                                <th
                                                    style={{ color: "#fcbf6a" }}
                                                    key={nanoid()}
                                                >
                                                    <i>Tech:</i>
                                                </th>

                                                <td
                                                    style={{ color: "#fcbf6a" }}
                                                    key={nanoid()}
                                                >
                                                    <i>VB.Net, Excel/VBA</i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <div
                                    style={{ display: "flex", flexDirection: "row" }}
                                >
                                    {/* <div className="divTech tech" key={Math.random()} >  {this.props.tech}  </div> */}

                                    <div className="links_col" key={nanoid()} >  {this.props.links}</div>
                                </div>


                            </div>
                        </div>



                        <div className="rowImages" key={nanoid()}>
                            <div className="rowImages" key={nanoid()}>
                                <ImagesContainer props={this.props.img} />
                            </div>

                        </div>



                    </div>










                </div>
            </div >
        )
    }
}