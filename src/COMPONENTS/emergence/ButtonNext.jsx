import { nanoid } from "nanoid"


export default function ButtonNext(props) {


    return (
        <div
            title="continue"
            className="arrow_holder"
            key={nanoid()}
            onClick={props.onClick}
        >
            <div className="arrow down"></div>
            <div className="arrow down"></div>
        </div>
    )
}

