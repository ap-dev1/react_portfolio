import "../emergence22.sass"
import React from "react"
import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { Fade } from "react-reveal"

export default function Emission(props) {
    //const [emission, setEmission] = useState("")

    function handleClick(event) {
        props.doSomething(event.target.value)
    }

    return (
        <>
            <div
                key={nanoid()}
                style={{
                    //border: "1px solid #ff0000",
                    height: "30px",
                    margin: "auto",
                    display: "inline-flex",
                    //backgroundColor: "transparent"
                }}
            >
                {/* {
                    props.population.map((item, i) => {
                        let cellId = `phenotype_${i + 1}`
                        return (
                            <button
                                title={"emited"}
                                value={item}
                                id={cellId}
                                onClick={handleClick}
                                className="btn_ems"
                                style={{
                                    color: "dark grey",
                                    width: "30px",
                                    height: "30px",
                                    margin: "auto",
                                    //background: "gradient fitness",
                                    color: "#ff00ff",

                                }}

                            >
                                {item}
                            </button>
                        )
                    })
                } */}


                {
                    props.population.map((item, i) => {
                        let cellId = `phenotype_${i + 1}`
                        return (


                            <button
                                key={nanoid()}
                                title={item.status}
                                value={item.phenotype}
                                id={cellId}
                                onClick={handleClick}
                                className="btn_ems"
                            >
                                {item.phenotype}
                            </button>

                        )
                    })
                }


            </div>
        </>

    )
}