import React from 'react';
import { Carousel } from 'react-bootstrap';


function CarousselImages({images}){

    return(<>
        <Carousel>
        {images.map((image, index) => (
            <Carousel.Item key={index}>
            <img
                className="d-block"
                src={`http://localhost:8000/storage/${image.file_path}`}
                alt={`Slide ${index}`}
            />
            </Carousel.Item>
        ))}
        </Carousel>
    </>);

}

export default CarousselImages;