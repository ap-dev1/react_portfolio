
import "../styles/carousel.sass"
import { Carousel } from 'react-bootstrap'



import { useState } from 'react'

function ImagesCarousel({ props }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const MyImages = props.map((item) => {

        // if (!null) {
        //     console.log(e)
        // }



        return (

            <Carousel.Item>
                <img
                    //className="imgZoom"
                    src={item}
                    alt={item.title}
                    title={item.imgTitle}
                    // style={{ maxWidth: 300 / props.length, minWidth: 150, margin: '.1rem' }}
                    style={{ maxWidth: 300, maxHeight: 300 }}

                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        )
    })
    
    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={2000}
            pause='hover'         //  worked without parantheses;
            fade='true'
            //controls='false'    // string didn't work;
            controls={false}      // accolades ???;

            
        >

            {MyImages}

            

        </Carousel>
    );
}


export default ImagesCarousel;
