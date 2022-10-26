// // https://dev.to/sandra_lewis/building-a-multi-range-slider-in-react-from-scratch-4dl1
// // 
// // ADAPTED TO USE WITH A SINGLE VALUE
// import "./input-slider.sass";
// import { useRef, useState, useEffect, useCallback } from "react";



// export default function InputSlider(props) {
//     const [minVal, setMinVal] = useState(props.min);
//     const [maxVal, setMaxVal] = useState(props.max);

//     const range = useRef(null);
//     const minValRef = useRef(null);
//     const maxValRef = useRef(null);


//     const getPercent = useCallback((value) => {
//         Math.round(((value - props.min) / (props.max - props.min)) * 100);
//     }, [props.min, props.max]);



//     // Set width of the range to decrease from the left side
//     useEffect(() => {
//         if (maxValRef.current) {
//             const minPercent = getPercent(minVal);
//             const maxPercent = getPercent(+maxValRef.current.value);

//             if (range.current) {
//                 range.current.style.left = `${minPercent}%`;
//                 range.current.style.width = `${maxPercent - minPercent}%`;
//             }
//         }
//     }, [minVal, getPercent]);

//     // Set width of the range to decrease from the right side
//     useEffect(() => {
//         if (minValRef.current) {
//             const minPercent = getPercent(+minValRef.current.value);
//             const maxPercent = getPercent(maxVal);

//             if (range.current) {
//                 range.current.style.width = `${maxPercent - minPercent}%`;
//             }
//         }
//     }, [maxVal, getPercent]);

//     // Get min and max values when their state changes
//     useEffect(() => {
//         props.onChange({ min: minVal, max: maxVal });
//     }, [minVal, maxVal, props.onChange]);

//     return (
//         <>

//             <input
//                 type="range"
//                 min={props.min}
//                 max={props.max}
//                 value={minVal}
//                 ref={minValRef}
//                 onChange={(event) => {
//                     const value = Math.min(+event.target.value, maxVal - 1);
//                     setMinVal(value);
//                     event.target.value = value.toString();
//                 }}
//                 // className={classnames("thumb thumb--zindex-3", {
//                 //     "thumb--zindex-5": minVal > props.max - 1
//                 // })}
//                 // className={minVal > props.max - 10 ? "thumb--zindex-5" : "thumb thumb--zindex-3"}

//                 className="thumb thumb--zindex-3"

//             />
//             <input
//                 type="range"
//                 min={props.min}
//                 max={props.max}
//                 value={maxVal}
//                 ref={maxValRef}
//                 onChange={(event) => {
//                     const value = Math.max(+event.target.value, minVal + 1);
//                     setMaxVal(value);
//                     event.target.value = value.toString();
//                 }}
//                 className="thumb thumb--zindex-4"
//             />


//             <div className="slider">
//                 <div className="slider__track" />
//                 <div className="slider__range" />

//                 <div ref={range} className="slider__range" />

//                 <div className="slider__left-value">{minVal}</div>
//                 <div className="slider__right-value">{maxVal}</div>
//             </div>
//         </>
//     )
// }