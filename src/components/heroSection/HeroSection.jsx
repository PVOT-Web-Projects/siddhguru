import "./heroSection.scss";
import image1 from "../../images/hero_image1.png";
import image2 from "../../images/hero_image2.png";
import image3 from "../../images/hero_image3.png";
import Header from "../header/Header";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="hero_section">
      <Header />
      <div className="hero_section_wrapper" ref={ref}>
        <div className="hero_section_wrapper_inner">
          <div
            className="hero_section_first_image"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 3s",
            }}
          >
            <img src={image1} alt="hero_image1" />
          </div>
          {/* <div className="hero_section_second_image">
          <img src={image2} alt="hero_image2" />
        </div>
        <div className="hero_section_third_image">
          <img src={image3} alt="hero_image3" />
        </div> */}
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
