import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'

export default function NavCollapse(props) {
    const [open, setOpen] = useState(true);

    return (

        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="nav-collapse-text"
                aria-expanded={open}
                title="click to expand"

                style={{
                    // padding: "10px 0px",
                    margin: "auto",
                    marginBottom: "15px",
                    // border: '1px solid rgba(50, 50, 50, 1)',
                    fontWeight: 100,
                    fontSize: '.8rem',
                    borderRadius: "5px",
                    fontFamily: "Roboto",
                    color: 'rgba(50, 50, 50, 1)'
                }}
            >
                {open === true ? "Click to roll up" : "expand menu"}
            </Button>

            <Collapse in={open}>
                <div id="nav-collapse-text" >
                    {props.collapsedText}
                </div>
            </Collapse>
        </>
    );
}

