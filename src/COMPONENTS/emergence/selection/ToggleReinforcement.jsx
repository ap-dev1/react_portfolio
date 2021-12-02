import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import "./toggle_reinforcement.sass"


export default function ToggleReinforcement(props) {
    const [reinforced, setReinforced] = useState(false)
    const [btnText, setBtnText] = useState("not reinforced")

    const myText = ["not reinforced", "reinforced"]

    function handleChange(e) {
        if (e.target.checked === false) {
            setReinforced(!reinforced)
            setBtnText(myText[1])
        }
        if (e.target.checked === true) {
            setReinforced(!reinforced)
            setBtnText(myText[0])
        }

    }

    return (
        <label
            className="toggle_reinforcement"

            style={{
                width: "50px",
                //height: "0px",
            }}
            key={nanoid()}
        >
            {btnText}

            <input
                checked={reinforced}
                value={reinforced}
                onChange={handleChange}
                type="checkbox"
                style={{
                    width: "0px",
                    height: "0px",
                    opacity: 0,
                }}
                key={nanoid()}
            >
            </input>
        </label>
    )
}