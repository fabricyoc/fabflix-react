import Slider from "react-slick";

import './Carousel.css';

function Carousel({ children }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;

