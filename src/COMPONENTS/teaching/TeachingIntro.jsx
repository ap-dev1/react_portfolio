import "./teaching-intro.sass";
import { nanoid } from "nanoid";

export default function TeachingIntro() {

    return (

        <div id='teaching-intro' key={nanoid()}>

            <div className='wrapper'>
                <h1 className='title' key={nanoid()} >  TEACHING  </h1>
                <h2 className='years' key={nanoid()} >  2007 - 2018  </h2>

                <div className='schools'>
                    <span key={nanoid()}>
                        Emory <br />University
                    </span>

                    <span key={nanoid()} >
                        Georgia State<br /> University
                    </span>

                    <span key={nanoid()}>
                        Agnes Scott<br /> College
                    </span>

                    <span key={nanoid()} >
                        Emory University, <br />Oxford College
                    </span>
                </div>



            </div>


        </div>
    )
}