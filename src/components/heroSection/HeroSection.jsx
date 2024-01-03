import "./heroSection.scss";
import image1 from "../../images/hero_image1.png";
import image2 from "../../images/hero_image2.png";
import image3 from "../../images/hero_image3.png";
import Header from "../header/Header";
// import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import HeadingTextAnimation from "../HeadingAnimation/HeadingTextAnimation";

const HeroSection = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.03,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="hero_section">
      <Header />
      <div className="hero_section_wrapper" ref={ref}>
        {/* <h2>Lorem ipsum dolor</h2> */}
        <motion.div
          className={"hero_section_title"}
          variants={sentence}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeadingTextAnimation
            heading={"Lorem ipsum dolor"}
            fontSize={"45px"}
            justifyContent={"center"}
          />
        </motion.div>
        <div className="hero_section_wrapper_inner">
          <div
            className="hero_section_first_image"
            // style={{
            //   opacity: isInView ? 1 : 0,
            //   transition: "all 3s",
            // }}
          >
            <img src={image1} alt="hero_image1" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
