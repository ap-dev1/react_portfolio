import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";


function ImagesCarousel({ props }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        e.preventDefault();
        setIndex(selectedIndex);
    };

    const MyImages = props.map((item, index) => {

        return (
            <Carousel.Item
                key={item}
                id={item.imgTitle}
            // style={{
            //     maxWidth: "350px",
            //     maxHeight: "250px",
            //     margin: "auto",
            // }}
            >
                <Image
                    src={item}
                    alt={item.title}
                    title={item.imgTitle}
                    key={item}
                    id={item.imgTitle}
                    className="imgZoom"
                //thumbnail
                //fluid
                />
            </Carousel.Item>
        );
    });

    var showIndicators = false;

    if (MyImages.length > 1) {
        showIndicators = true;
    }

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
