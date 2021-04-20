import React, { useState } from 'react';
import '../styles/projects.css'


const ReadMore = (props) => {

    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    var chars = 200;
    
    if (props.overview !== "") {

        if (props.overview.length > chars) {
            return (
                <p className="projectOverview">
                    {isReadMore ? props.overview.slice(0, chars) : props.overview}
                    <span
                        title="read more"
                        onClick={toggleReadMore} className="read-or-hide"
                    >
                        {isReadMore ? ". . ." : ". . . LESS "}
                    </span>
                </p>
            )

        } else {
            return (
                <p className="projectOverview">
                    {isReadMore ? props.overview.slice(0, 300) : props.overview}
                </p>
            )
        }

    } else {
        return null
    }

};


export default ReadMore;