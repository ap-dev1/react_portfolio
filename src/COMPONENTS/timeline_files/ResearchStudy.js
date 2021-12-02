import React, { Component } from "react"
//import parse from "html-react-parser"
import ReadMore from "./ReadMore";
import "./study.sass"
//import { Image } from "react-bootstrap";


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


                                <div className="summary" key={Math.random()}>
                                    <ReadMore maxChars={500} overview={this.props.description} />
                                </div>

                                <div className="divTech tech" key={Math.random()} >  {this.props.tech}  </div>

                            </div>


                            <div className="study_info" key={Math.random()}>

                                <div className="irb" key={Math.random()}>
                                    <table key={Math.random()}>
                                        <tbody>
                                            {
                                                this.props.studyInfo.map((item) =>

                                                    < tr key={Math.random()}>
                                                        <td key={Math.random() + Date.now()}>{Object.entries(item)[0][0].toUpperCase()}:</td>
                                                        <td key={Date.now() + Math.random()}>{Object.entries(item)[0][1]}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                <div className="links_col" key={Math.random()} >  {this.props.links}</div>

                            </div>
                        </div>



                        <div className="rowImages" key={Math.random()}>
                            <div className="rowImages" key={Math.random()}>
                                <ImagesContainer props={this.props.img} />
                            </div>

                        </div>



                    </div>










                </div>
            </div >
        )
    }
}