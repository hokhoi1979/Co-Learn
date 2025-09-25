import Slider from "react-slick";
import bg1 from "../../../assets/img/bg1.jpg";
import bg2 from "../../../assets/img/bg2.jpg";
import bg3 from "../../../assets/img/bg3.jpg";
import bg4 from "../../../assets/img/bg4.jpg";
import bg5 from "../../../assets/img/bg5.jpg";
import bg6 from "../../../assets/img/bg6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselTeacher() {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselTeacher;
