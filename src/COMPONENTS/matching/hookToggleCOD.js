// hookToggleCOD

import React, { useState } from "react";
import ReactDOM from "react-dom";


export default function ToggleCOD() {
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);

    return (

        <div>



            <label
                style={{
                    color: "#fff",
                    fontSize: ".9rem",
                }}
            >
                {isToggled.toString()}</label>




            <button onClick={toggleTrueFalse}>
                Toggle me
            </button>


        </div>


    );
}
