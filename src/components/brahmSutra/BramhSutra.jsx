import Slider from "react-slick";
import pic1 from "../../images/brahmSutraImage1.png";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bramhSutra.scss"
const Slider1 = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [
    { pic: pic1 },
    { pic: pic1 },
    { pic: pic1 },
    { pic: pic1 },
    { pic: pic1 },
    { pic: pic1 },
  ];
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (current, next) => setImgIndex(next),
  };
  return (
    <div className="brahmasutra_section">
    
      <div className="brahmasutra_section_wrapper">
      <div className="orange_container"></div>
        <Slider {...settings}>
          {images.map((item, idx) => (
            <div
              key={idx}
              className={idx === imgIndex ? "slide activeSlide" : "slide"}
            >
              <div className="brahmasutra_section_images">
                <img src={item.pic} alt={`Image ${idx}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Slider1;