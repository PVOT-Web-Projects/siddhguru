import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homePageSlider1.scss";
import image1 from "../../images/vision.png";
import image2 from "../../images/the_saint.png";
import image3 from "../../images/core_wisdom.png";
import { useEffect, useState } from "react";

const HomePageSlider1 = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const images = [
    {
      image: image1,
      text: "Vision",
      color: "#F90",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur recusandae natus repellat! Ipsum perferendis quisquam unde at nisi adipisci quaerat eum, cum eaque molestias ratione, quam distinctio rerum reprehenderit asperiores, quibusdam iusto dolores error.",
    },
    {
      image: image2,
      text: "Core Wisdom",
      color: "#966940",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur recusandae natus repellat! Ipsum perferendis quisquam unde at nisi adipisci quaerat eum, cum eaque molestias ratione, quam distinctio rerum reprehenderit asperiores, quibusdam iusto dolores error.",
    },
    {
      image: image3,
      text: "The Saint",
      color: "#1D523B",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur recusandae natus repellat! Ipsum perferendis quisquam unde at nisi adipisci quaerat eum, cum eaque molestias ratione, quam distinctio rerum reprehenderit asperiores, quibusdam iusto dolores error.",
    },
    {
      image: image1,
      text: "Vision",
      color: "#F90",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur recusandae natus repellat! Ipsum perferendis quisquam unde at nisi adipisci quaerat eum, cum eaque molestias ratione, quam distinctio rerum reprehenderit asperiores, quibusdam iusto dolores error.",
    },
    {
      image: image2,
      text: "Core Wisdom",
      color: "#966940",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur recusandae natus repellat! Ipsum perferendis quisquam unde at nisi adipisci quaerat eum, cum eaque molestias ratione, quam distinctio rerum reprehenderit asperiores, quibusdam iusto dolores error.",
    },
    {
      image: image3,
      text: "The Saint",
      color: "#1D523B",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur recusandae natus repellat! Ipsum perferendis quisquam unde at nisi adipisci quaerat eum, cum eaque molestias ratione, quam distinctio rerum reprehenderit asperiores, quibusdam iusto dolores error.",
    },
  ];
  const settings = {
    infinite: true, //to allow the slides to show infinitely
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    appendDots: ".slider_dots",
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "0px",
    speed: 1000,
  };
  return (
    <div className="homePageSlider">
      <div className="container">
        <div className="homePageSlider_wrapper">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
          >
            {images.map((item, idx) => (
              <div
                key={idx}
                className={idx === imgIndex ? "slide activeSlide" : "slide"}
              >
                <div className="card_content">
                  <img src={item.image} alt="image" />
                  <div
                    className="image_text"
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider_thumbnail_wrapper">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {images.map((item, idx) => (
              <div
                key={idx}
                className={
                  idx === imgIndex
                    ? "slidethumbnail activeSlideThimbnail"
                    : "slidethumbnail"
                }
              >
                <div className="thumbnail_text">{item.content}</div>
                <div className="slider_btn">
                  <a href="#">Read More</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="slider_dots"></div>
    </div>
  );
};
export default HomePageSlider1;
