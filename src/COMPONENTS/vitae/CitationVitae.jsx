import "./cv.sass"
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
// import parse from "html-react-parser";

export default function CitationVitae(props) {
    const [open, setOpen] = useState(false);

    return (

        <>
            <div
                onClick={() => setOpen(!open)}
                aria-controls="citation-collapse-text"
                aria-expanded={open}
                title="click to expand"
                className="div-citation"
                style={{
                    backgroundColor: open ? "#9ffbf899" : "transparent",
                    //border: open ? "1px solid #ccc" : "0px transparent",
                    color: open ? "#000" : "#888",

                }}
            >
                <p
                    key={nanoid()}
                    className="cvCitation"
                    name={props.contentType}
                    content-type={props.contentType}
                >
                    {props.collapsedTitle}
                </p>

            </div>




            <Collapse in={open}>

                <div
                    id="citation-collapse-text"
                style={{
                    // fontFamily: "Arial",
                    // fontSize: "13px",
                    // margin: "0",
                    // padding: "0",
                    // paddingLeft: "2rem",
                    // display: "flex",
                    // flexDirection: "column",
                    // maxWidth: "450px",
                    // marginBottom: "10px",
                    backgroundColor: "#fff"
                }}
                >
                    {props.collapsedText}

                </div>


            </Collapse>
        </>
    );
}

