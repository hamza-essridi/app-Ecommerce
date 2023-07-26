import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function UncontrolledCarousel() {
  return (
    <>
    <div className='slider-area'>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/h4-slide.png"
          alt="First slide"
        />
     {/* {   <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>} */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/h4-slide2.png"
          alt="Second slide"
        />

       {/* { <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>} */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/h4-slide3.png"
          alt="Third slide"
        />

        {/* {<Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>} */}
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default UncontrolledCarousel;