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
      >
        {props.collapsedTitle}
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
          {props.collapsedText}
        </div>
      </Collapse>
    </>
  );
}

