import React, { useState } from 'react';
import '../styles/projects.css'


const ReadMore = (props) => {

    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };


    return (

        <p className="projectOverview">
        {isReadMore ? props.overview.slice(0, 750) : props.overview} . . .

        <span
            onClick={toggleReadMore} className="read-or-hide"
        >
            {isReadMore ? "READ MORE" : ". . . LESS "}
        </span>

    </p>
    );
};


export default ReadMore;