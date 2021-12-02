import { useState } from "react";
import { nanoid } from "nanoid";

export default function SvgRecord(props) {

    return (
        <svg key={nanoid()} className="svg_record"></svg>
    )
}