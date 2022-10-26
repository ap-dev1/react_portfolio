import "./pop-over-v2.sass";
import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";


export default function PopOverV2(props) {

    return (
        <>
            <OverlayTrigger
                trigger="click"
                placement="bottom-start"
                defaultShow={false}

                overlay={
                    <Popover className="pop-over-v2">

                        <span className='title' >
                            {props.title}
                        </span>

                        <p className='description'>
                            {props.description}
                        </p>

                        <a className='link' href={props.link} title={props.link}>
                            read more
                        </a>

                    </Popover>
                }

            >

                <button className='pop-over-btn'>
                    i
                </button>
            </OverlayTrigger>
        </>
    )
}
