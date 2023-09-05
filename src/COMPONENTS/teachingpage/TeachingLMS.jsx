import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Container, Row, Col } from "react-bootstrap";


export default function TeachingLMS() {

    let style1 = {
        width: '100%',
        margin: '.2rem',
        padding: '.2rem',
        fontSize: '.75rem',
    }


    return (

        <>
            <Container
                title='Learning Management Systems'
                style={{
                    textAlign: 'center',
                    opacity: "0.8",
                    border: '1px solid #ff990050',
                    marginTop: "1rem",
                }}
            >
                <Row>
                    <Col

                    >
                        <Row
                            style={{
                                color: '#1f8f92',
                                width: "100%",
                                height: "100%",
                                // border: "1px solid #1f8f92",
                                letterSpacing: ".2rem"
                            }}
                        >


                            <h3
                                style={{
                                    color: '#1f8f92',
                                    color: "#ff990050",
                                    color: "#ff9900",
                                    fontSize: "1.5rem",
                                    width: "8rem",
                                    margin: "auto",
                                    padding: ".3rem",
                                    textAlign: 'center',
                                }}
                            >
                                LMS
                            </h3>


                        </Row>

                    </Col>
                    
    
                    <Col   >
                        <Row>
                            <a style={style1} href="https://www.blackboard.com/">Blackboard</a>
                        </Row>
                        <Row>
                            <a style={style1} href="https://www.d2l.com/">D2L</a>
                        </Row>
                    </Col>

                    <Col   >
                        <Row>
                            <a style={style1} href="https://www.instructure.com/">Canvas</a>
                        </Row>
                        <Row>
                            <a style={style1} href="https://moodle.com/">Moodle</a>
                        </Row>
                    </Col>
                </Row>
            </Container>


        </>



    )
}


