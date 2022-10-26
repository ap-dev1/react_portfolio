
import './_available-options.sass';

import React from "react";
import { nanoid } from "nanoid";


export default function AvailableOptions(props) {

    function handleClick(event) {
        props.doSomething(event.target)
    }

    return (
        <div id='available-options' key={nanoid()}>
            {
                props.population.map((item, i) => {
                    let cellid = `phenotype_${i + 1}`

                    return (
                        <button
                            className='option'
                            data-selected={props.emsid === cellid ? true : false}

                            title={item.status}
                            value={item.phenotype}
                            id={cellid}

                            onClick={handleClick}

                            role='input'
                            key={nanoid()}

                        >
                            {item.phenotype}
                        </button>
                    )
                })
            }
        </div>
    )
}











// import './_available-options.sass';

// import React from "react";
// import { nanoid } from "nanoid";

// export default function AvailableOptions(props) {

//     function handleClick(event) {
//         props.doSomething(event.target.value)
//     }

//     return (
//         <div id='available-options' key={nanoid()}>
//             {
//                 props.population.map((item, i) => {
//                     let cellId = `phenotype_${i + 1}`
//                     return (
//                         <button
//                             className='option'
//                             key={nanoid()}
//                             title={item.status}
//                             value={item.phenotype}
//                             id={cellId}
//                             onClick={handleClick}
//                         >
//                             {item.phenotype}
//                         </button>
//                     )
//                 })
//             }
//         </div>
//     )
// }