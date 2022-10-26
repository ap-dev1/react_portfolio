import "./study.sass"

import React, { Component } from "react"
import parse from "html-react-parser";

//import parse from "html-react-parser"
import ReadMore from "../ReadMore";
import { nanoid } from "nanoid"

// import ImagesContainer from "./ImagesContainer";
import ImagesCarousel from "../ImagesCarousel";
import CollapseHook from "../CollapseHook"

import { Container, Row, Col } from "react-bootstrap";
import StudyInfo from "./StudyInfo";

export default class ResearchStudyNew extends Component {



    render() {

        const studyInfo = this.props.studyInfo


        return (
            <div
                className="item"
                content1={this.props.displayDate}
                key={nanoid()}
                id={this.props.navMarker}
            >
                <div className="itemContent" key={nanoid()}>



                    {/* -------------------       RESEARCH STUDY  NEW    ---------------------- */}

                    <Container
                        className='research-study'
                        key={nanoid()}
                    >

                        <Row className='row1' key={nanoid()}>

                            <Col className='col1' key={nanoid()}>

                                <h1 key={nanoid()}  >
                                    {this.props.title[0].toUpperCase()}
                                </h1>

                                <h2 key={nanoid()}  >
                                    {this.props.title[1] ? this.props.title[1].toUpperCase() : this.props.title[1]}
                                </h2>


                                <div
                                    className='description'
                                    key={nanoid()}
                                >
                                    {this.props.description}
                                </div>

                            </Col>








                            <Col className='col2' key={nanoid()}>

                                <div className='study-header' key={nanoid()}>

                                    <h1 key={nanoid()} >
                                        RESEARCH STUDY
                                    </h1>

                                    <h2 key={nanoid()} >
                                        {studyInfo.location}
                                    </h2>

                                    <h2 key={nanoid()} >
                                        {studyInfo.startDate} - {studyInfo.endDate}
                                    </h2>

                                </div>



                                <div className='study-notes' key={nanoid()}  >
                                    <p>
                                        {studyInfo.studyNotes}
                                    </p>
                                </div>


                                <StudyInfo
                                    studyInfo={studyInfo}
                                />


                                <div className='div-tech-links' key={nanoid()}  >
                                    {this.props.tech}
                                    {this.props.links}
                                    <CollapseHook
                                        collapsedTitle={"Relevant work"}

                                        collapsedText={
                                            <div className="divRefs" key={nanoid()}>
                                                {this.props.references}
                                            </div>
                                        }
                                    />
                                </div>



                            </Col>
                        </Row>



                        <Row className='row2'  >
                            <Col className='col1'  >
                                <ImagesCarousel props={this.props.img} />
                            </Col>

                        </Row>

                    </Container>
                </div>
            </div >
        )
    }
}