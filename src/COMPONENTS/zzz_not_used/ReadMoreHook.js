import React, { useState } from "react";
import parse from "html-react-parser";
import "./chapters.sass";

const ReadMoreHook = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  var maxChars = props.maxChars;

  if (props.overview !== "") {
    if (props.overview.toString().length > maxChars) {
      return (
        <p className="read-more-hook">
          {isReadMore
            ? props.overview.toString().slice(0, maxChars)
            : parse(props.overview.toString())}
          <span
            title="read more"
            onClick={toggleReadMore}
            className="expand-and-hide"
          >
            {isReadMore ? "... more" : "less"}
          </span>
        </p>
      );
    } else {
      return (
        <p className="read-more-hook">
          {isReadMore
            ? props.overview.toString().slice(0, maxChars)
            : parse(props.overview.toString())}
        </p>
      );
    }
  } else {
    return null;
  }
};

export default ReadMoreHook;
