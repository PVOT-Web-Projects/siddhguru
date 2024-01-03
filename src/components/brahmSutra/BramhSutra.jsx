import Slider from "react-slick";
import pic1 from "../../images/brahmSutraImage1.png";
import pic2 from "../../images/t1.png";
import pic3 from "../../images/t2.png";
import pic4 from "../../images/t3.png";
import pic5 from "../../images/t4.png";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bramhSutra.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeadingTextAnimation from "../HeadingAnimation/HeadingTextAnimation";
const BrahmSutra = () => {
  const [imgIndex, setImgIndex] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const images = [
    { pic: pic1 },
    { pic: pic2 },
    { pic: pic3 },
    { pic: pic4 },
    { pic: pic5 },
    { pic: pic1 },
    { pic: pic2 },
  ];
  const totalImages = images.length;
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: "300px",
    slidesToScroll: 1,
    speed: 1000,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: "0px",
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0px",
          centerMode: true,
        },
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          centerMode: true,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          centerMode: true,
        },
      },
    ],
  };
  return (
    <>
      <motion.div
        className="brahmasutra_section_title"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
      >
        <HeadingTextAnimation
          heading={"Brahm-Sutra"}
          fontSize={"55px"}
          justifyContent={"center"}
        />
      </motion.div>
      <div className="test_slider">
        <div className="index_indicator">
          <p>
            <span>{`${imgIndex}`}</span>/{`${totalImages}`}
          </p>
        </div>
        {/* <div className="container"> */}
        <div className="orange_container"></div>
        <div className="test_slider_wrapper">
          <Slider {...settings}>
            {images.map((item, idx) => (
              <div
                key={idx}
                className={idx === imgIndex ? "slide activeSlide" : "slide"}
              >
                <div className="card_content">
                  <img src={item.pic} alt={item.heading} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default BrahmSutra;
