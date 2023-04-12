import "./carousel-swipe.sass";
import { useState, useEffect } from "react";
import parse from "html-react-parser"
import { getTopicData } from "./courseData";
import { Fade } from "react-reveal";
const infoTopics = getTopicData();
const abc = ["a", "b", "c"]

export default function CarouselSwipe() {
    const [idx, setidx] = useState(0)



    useEffect(() => {
        const interval = window.setInterval(() => {
            if (idx === infoTopics.length - 1) {
                setidx(0)
            } else {
                setidx(idx + 1)
            }

        }, 5000);

        return () => {
            clearInterval(interval)
        }
    },
        // [school]
        [idx]
    )


    return (

        <div className='carousel-wrapper'>

            <div className='item-wrapper' >

                <div
                    className='carousel-card'
                    notes={parse(infoTopics[idx].subtitle)}

                >

                    <h4 className='course-name'>
                        {parse(infoTopics[idx].name)}
                    </h4>

                    <div className='experience'>
                        {infoTopics[idx].semesters.map((val) => {
                            return (
                                <>
                                    <div className='experience-row'>
                                        <span>  {val.institution1} </span>
                                        <span> {val.semester}  </span>
                                    </div>

                                    <span
                                        style={{
                                            textAlign: "left",
                                            paddingRight: "15px"
                                        }}
                                    >
                                        {val.role === "ta" ? `TA for ${val.instructor}` : null}
                                    </span>
                                </>

                            )
                        })}
                    </div>
                </div>



                <div className="carousel-notes">
                    {parse(infoTopics[idx].subtitle)}
                </div>




            </div>


            <div className="carousel-controls">
                <button
                    className="carousel-button minus"
                    onClick={() => setidx(idx - 1)}
                    disabled={idx === 0 ? true : false}
                >
                    left
                </button>

                <div className="slide-number">
                    {idx + 1} of {infoTopics.length}
                </div>

                <button
                    className="carousel-button plus"
                    onClick={() => setidx(idx + 1)}
                    disabled={idx === infoTopics.length - 1 ? true : false}
                >
                    other left
                </button>

            </div>



        </div>
    )
}