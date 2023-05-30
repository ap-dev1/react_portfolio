import './bg-divider.sass';

import { nanoid } from "nanoid";

export default function BgDivider(props) {

    return (

        <div className='bg-divider' key={nanoid()} >

            <div className='divider'>
                {props.title}
            </div>

        </div >


    )
}
