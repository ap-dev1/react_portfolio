import React, { useState } from "react";
import parse from "html-react-parser";
import {nanoid} from "nanoid";


const ReadMore = (props) => {

    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    if (props.overview !== "") {

        if (props.overview.length > props.maxChars) {
            return (
                <p className="projectOverview" key={nanoid()}>
                    {isReadMore ? parse(props.overview).slice(0, props.maxChars) : props.overview}
 
                    <span
                        title="read more"
                        onClick={toggleReadMore} 
                        className="read-or-hide"
                        key={nanoid()}
                    >
                        {isReadMore ? "... more" : "less"}
                    </span>
                </p>
            )

        } else {
            return (
                <p className="projectOverview" key={nanoid()} >
                    {isReadMore ? props.overview.slice(0, props.maxChars) : props.overview}
                </p>
            )
        }

    } else {
        return null
    }

};


export default ReadMore;