import "./timeline.sass";

import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'

export default function CollapseHook(props) {
    const [open, setOpen] = useState(false);

    return (

        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                title="click to expand"

                style={{
                    padding: props.padding ? props.padding : ".4rem 1rem..3rem 1rem",
                    backgroundColor: props.background ? props.background : "#02382a",
                    margin: props.margin ? props.margin : ".2rem auto .2rem 0",
                    fontWeight: props.fontWeight ? props.fontWeight : 400,

                }}
                className="collapseHover"
            >
                {props.collapsedTitle}
            </Button>

            <Collapse in={open}>
                <div
                    id="example-collapse-text"
                    style={{
                        paddingLeft: props.paddingLeft ? props.paddingLeft : "0",
                    }}
                >
                    {props.collapsedText}
                </div>
            </Collapse>
        </>
    );
}

