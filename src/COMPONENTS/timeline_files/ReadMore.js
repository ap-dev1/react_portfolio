import React, { useState } from 'react';
import parse from 'html-react-parser';

const ReadMore = (props) => {

    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    var maxChars = props.maxChars;

    if (props.overview !== "") {

        if (props.overview.length > maxChars) {
            return (
                <p className="projectOverview" style={{ color: props.fontColor }}>
                    {isReadMore ? parse(props.overview).slice(0, maxChars) : props.overview}
                    <span
                        title="read more"
                        onClick={toggleReadMore} className="read-or-hide"
                    >
                        {isReadMore ? "... more" : "less"}
                    </span>
                </p>
            )

        } else {
            return (
                <p className="projectOverview">
                    {isReadMore ? props.overview.slice(0, maxChars) : props.overview}
                </p>
            )
        }

    } else {
        return null
    }

};


export default ReadMore;