// import { useState } from "react";
import { Image } from "react-bootstrap";


function ImagesContainer({ props }) {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     e.preventDefault();
    //     setIndex(selectedIndex);
    // };


    const MyImages = props.map((item, i) => {

        let divKey = (Date.now() / (i + 1122.007654)).toString().replace(".", i)
        let imgKey = (Date.now() / (i + 22.1137654)).toString().replace(".", i)

        return (

            <div className="imgWrapper" key={divKey}>
                <Image
                    maxWidth="200px"
                    src={item}
                    alt={item.title}
                    title={item.imgTitle}
                    key={imgKey}
                    className="img"
                />
            </div>


        );
    });

    return (

        <>
            {MyImages}
        </>

    );
}

export default ImagesContainer;
