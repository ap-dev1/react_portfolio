import "./study-info.sass";
import { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import { nanoid } from "nanoid";

export default function StudyInfo(props) {
    const [open, setOpen] = useState(false);

    return (

        <div className='study-info'>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls='study-info-body'
                aria-expanded={open}
                title='irb documentation, instruments, team, etc'
                key={nanoid()}
                className='collapse-button'
            >
                {'study info'}
            </Button>

            <Collapse in={open}>
                <div
                    id='study-info-body'
                    className='collapse-body'
                    key={nanoid()}
                >

                    <>
                        <table className='table-irb' key={nanoid()} >
                            <tbody>


                                < tr key={nanoid()}>
                                    <th key={nanoid()}  >
                                        Name:
                                    </th>
                                    <td key={nanoid()}>{props.studyInfo.name}</td>
                                </tr>

                                < tr key={nanoid()}>
                                    <th key={nanoid()}  >
                                        IRB ID:
                                    </th>
                                    <td key={nanoid()}>{props.studyInfo.irbNumber}</td>
                                </tr>

                                < tr key={nanoid()}  >
                                    <th key={nanoid()}  >
                                        IRB lieson:
                                    </th>
                                    <td key={nanoid()}>{props.studyInfo.irbLieson}</td>
                                </tr>

                            </tbody>
                        </table>

                        <h2>Team</h2>

                        <table className='table-team' key={nanoid()}>
                            <tbody>
                                {
                                    props.studyInfo.team ?
                                        (props.studyInfo.team.map((item) => {
                                            return (
                                                < tr key={nanoid()}>
                                                    <th key={nanoid()}
                                                    >
                                                        {item.hero}
                                                    </th>
                                                    <td key={nanoid()}  >
                                                        {item.role}
                                                    </td>
                                                </tr>
                                            )
                                        }))
                                        : 'add team members'
                                }
                            </tbody>
                        </table>


                        <h2>Instruments</h2>

                        <table className='table-instruments' key={nanoid()}>
                            <tbody>
                                {
                                    props.studyInfo.instruments ?
                                        (props.studyInfo.instruments.map((item) => {
                                            return (
                                                < tr key={nanoid()}>
                                                    <th key={nanoid()}
                                                        title={item.longName}
                                                    >
                                                        {item.shortName}
                                                    </th>

                                                    <td key={nanoid()}  >
                                                        {item.description}
                                                    </td>
                                                </tr>
                                            )
                                        }))
                                        : 'add instruments'
                                }
                            </tbody>
                        </table>

                    </>

                </div>
            </Collapse>
        </div>
    );
}

