import './_research-intro.sass';
import { nanoid } from "nanoid";
import parse from "html-react-parser";

export default function ResearchIntro() {

    return (

        <div id='research-intro' key={nanoid()} >

            <div className='wrapper'>

                <h1 className='title' key={nanoid()} > RESEARCH  </h1>

                <h2 className='years' key={nanoid()}  > 2007 - present</h2>

                <div className='labs'>
                    <span key={nanoid()}>
                        Emory <br />University
                    </span>

                    <span key={nanoid()}>
                        Agnes Scott<br /> College
                    </span>

                    <span key={nanoid()} >
                        Emory University, <br />Oxford College
                    </span>

                    {/* <span key={nanoid()} >
                        Independent
                    </span> */}
                </div>


            </div>

        </div >


    )
}
