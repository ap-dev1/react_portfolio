import "./_teaser-popa-2019.sass";
import { nanoid } from "nanoid";
import parse from "html-react-parser";

export default function TeaserPopa2019() {

    return (

        <div id='teaser-popa-2019' key={nanoid()} >

            <div className='content'>

                {/* <span className='span-title' key={nanoid()} > RESEARCH  </span> */}

                {/* <span className='span-years' key={nanoid()}  > 2007 - present</span> */}

                <p
                    className='p-teaser'
                    key={nanoid()}
                >
                    When agents interact with their environments, something in the real world must undergo some sort of change. These changes hold the key to all unsolved problems in psychology.
                </p>

                <p
                    className='p-link'
                    role="link"
                    key={nanoid()}
                    onClick={(e) => {
                        e.preventDefault();
                        let destination = 'https://psyarxiv.com/m87an/';
                        window.open(destination, '_blank');
                    }}
                >
                    {'https://psyarxiv.com/m87an/'}
                </p >

                <p
                    className='p-citation'
                    key={nanoid()}
                >
                    {parse("Popa, Andrei. 2019. “Psychology 2.0: The Emergence of Individuality.” PsyArXiv. September 8. doi:10.31234/osf.io/m87an.")}
                </p>

            </div>

        </div >


    )
}
