 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>Our Partners</h2>
      <Slider {...settings}>
        <div>
          <img src="logo1.png" alt="Brand 1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="logo2.png" alt="Brand 2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="logo3.png" alt="Brand 3" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="logo4.png" alt="Brand 4" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
