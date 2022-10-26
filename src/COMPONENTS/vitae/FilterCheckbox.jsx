// import { useState } from "react";
// import { nanoid } from "nanoid";

// export default function FilterCheckbox(props) {

//     // const [checked, setChecked] = useState(false)

//     // function handleChange(e) {
//     //     props.handleChange(e.target.value)
//     // }


//     return (
//         <>
//             <button 
//                 role='checkbox'
//                 key={nanoid()}
//                 name={props.name}
//                 checked={props.checked}
//                 onClick={props.handleChange}
//                 value={props.itemNames}
//                 style={{
//                     fontSize: "11px",
//                     cursor: "pointer",
//                     borderRadius: "2px",
//                     // backgroundColor: props.checked === true ? 'aqua' : 'transparent',
//                     // backgroundColor: props.checked === true ? '#bdffff' : '#f0ffff',
//                     // backgroundColor: props.checked === true ? '#d0ffff' : '#f0ffff',
//                     backgroundColor: props.checked === true ? '#0fff0f19' : '#f0ffff',

//                     borderLeft: props.checked === true ? '2px solid rgb(50, 50, 50)' : "1px solid rgb(200, 200, 200)",
//                     borderTop: props.checked === true ? '2px solid rgb(50, 50, 50)' : "1px solid rgb(200, 200, 200)",
                    
//                     borderRight: props.checked === true ? '1px solid rgb(200, 200, 200)' : "1px solid rgb(50, 50, 50)",
//                     borderBottom: props.checked === true ? '1px solid rgb(200, 200, 200)' : "1px solid rgb(50, 50, 50)",

//                 }}

//             >
//                 {props.name}
//                 {/* is {props.checked.toString()} */}
//             </button>



//         </>
//     )
// }