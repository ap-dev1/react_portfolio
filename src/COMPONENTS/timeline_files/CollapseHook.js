import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import "./timeline.sass";

export default function CollapseHook(props) {
    const [open, setOpen] = useState(false);

    return (

        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="success"
                title="click to expand"

                style={{
                    fontSize: "12px",
                    padding: "3px 10px",
                    backgroundColor: "#02382a",
                    marginBottom: "5px",
                    marginTop: "10px",
                    borderColor: "#11775e",
                    color: "#5a7e74",
                }}
                className="collapseHover"
            >
                {props.collapsedTitle}
            </Button>

            <Collapse in={open}>
                <div
                    id="example-collapse-text"
                    style={{ paddingLeft: "15px" }}
                >
                    {props.collapsedText}
                </div>
            </Collapse>
        </>
    );
}

