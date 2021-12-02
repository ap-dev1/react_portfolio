import "../sensitivity/mathematical_models.sass";
import { nanoid } from "nanoid";

// import "../etbd_selection/selection.sass";
import { useState, useEffect } from "react";

import ReadMore from "./ReadMore";
import CollapseHook from "./CollapseHook"

//import DrawEtbdInteractive from "../etbd_emergence/DrawEtbdInteractive"

//import EmergenceDemo from "../etbd_emergence/EmergenceDemo";
import EmergenceMain from "../emergence/EmergenceMain";


export default function EtbdEmergence(props) {

    var [population, updatePopulation] = useState()


    return (
        <div
            className="item"
            content1={props.qualDate}
            key={nanoid()}
            id={props.date}

            style={{
                fontFamily: props.fontFam,
                marginTop: "3rem",
                marginBottom: "3rem"
            }}
        >
            <div key={nanoid()} className="itemContent">


                {/* -------------------      EMERGENCE demo      ---------------------- */}


                <div key={nanoid()} className="projectColumnLeft" >

                    <span key={nanoid()} className="title">{props.title}</span>

                    <ReadMore maxChars={1000} overview={props.description} />

                    <CollapseHook
                        collapsedTitle={"Relevant work"}
                        collapsedText={
                            <div key={nanoid()} className="divRefs">  {props.references}  </div>
                        }
                    />
                    <div key={nanoid()} className="links" >  {props.links}  </div>
                </div>




                <div key={nanoid()} className="demo_emergence">
                    {/* <EmergenceDemo /> */}
                    <EmergenceMain />
                </div>


            </div>
        </div>
    )
}

{/* <div className="infoCarousel">
                                <p>The text changes, guiding the user through the simulation.</p>
                            </div> */}