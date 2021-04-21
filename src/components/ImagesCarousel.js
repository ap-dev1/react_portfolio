

import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import "../styles/carousel.sass";


function ImagesCarousel({ props }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        e.preventDefault()
        setIndex(selectedIndex);
    };

    const MyImages = props.map((item) => {

        return (

            <Carousel.Item  >
                <img
                    src={item}
                    alt={item.title}
                    title={item.imgTitle}
                    style={{ maxWidth: 300 }}
                    //className='imgZoom'
                />

                {/* <Carousel.Caption>
                    <p>{item.caption}</p>
                </Carousel.Caption> */}

            </Carousel.Item>
        )
    });


    var showIndicators = false;

    if (MyImages.length > 1) {
        showIndicators = true
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            controls={false}
            indicators={showIndicators}
        >
            {MyImages}

        </Carousel>
    );
}


export default ImagesCarousel;
