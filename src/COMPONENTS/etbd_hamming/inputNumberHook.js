import '../etbd_input/input_styles.sass'
import { useRef } from "react"


function InputNumber(props) {
    // let [limitValue, updateLimitValue] = useState(471)
    // let decreaseValue = () => updateLimitValue(limitValue - 1);
    // const increaseValue = () => updateLimitValue(limitValue + 1);


    // handleChange = (e) => {
    //     const text = e.target.value
    //     this.props.onChange(this.props.id, text)
    // }


    return (

        <div className="inputContainer" style={{ marginLeft: "25px", marginRight: "25px" }}>
            <input
                //ref={refInput}
                name={props.name}
                defaultValue={props.value}
                onChange={props.updateValue}
            ></input>


            <div className="buttons">

                <button
                    className="btnMinus"
                    name={props.name}
                    onClick={props.decrement}
                >-</button>

                <button
                    className="btnPlus"
                    name={props.name}
                    onClick={props.increment}
                >+</button>

            </div>

        </div>

    )
}

export default InputNumber;