import "./images-carousel.sass"

import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import { nanoid } from 'nanoid';


function ImagesCarousel({ props }) {
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const MyImages = props.map((item, index) => {

        return (

            <Carousel.Item
                key={item}
                id={item.imgTitle}
            >
                <Image
                    key={nanoid()}
                    src={item}
                    alt={item.title}
                    title={item.imgTitle}
                    id={item.imgTitle}
                    className="imgZoom"
                />

                <Carousel.Caption>

                    <p key={nanoid()}  >
                        {props.imgCaption ? props.imgCaption : "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum."}
                    </p>

                </Carousel.Caption>


            </Carousel.Item>
        );
    });

    var showIndicators = false;

    if (MyImages.length > 1) {
        showIndicators = true;
    }

    return (
        <Carousel
            fade={true}
            //data-interval={2000}
            activeIndex={index}
            onSelect={handleSelect}
            //interval={3000}
            controls={false}
            indicators={showIndicators}
        >
            {MyImages}
        </Carousel>
    );
}

export default ImagesCarousel;
