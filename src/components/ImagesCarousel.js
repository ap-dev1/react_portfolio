

import { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import "../styles/carousel.sass";


function ImagesCarousel({ props }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        e.preventDefault()
        setIndex(selectedIndex);
    };

    const MyImages = props.map((item) => {

        return (

            <Carousel.Item key={item.imgTitle} id={item.imgTitle}
                style={{
                    maxWidth: '600px', 
                    //maxHeight: '300px',
                    backgroundColor: '#f2f4f8',
                    marginBottom: '.5rem',
                    padding: '.0rem'
                }}
            >

                <Image
                    src={item}
                    alt={item.title}
                    title={item.imgTitle}
                    key={item.imgTitle}
                    id={item.imgTitle}
                    className='imgZoom'
                    thumbnail
                    //fluid                
                />


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
