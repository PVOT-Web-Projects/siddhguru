import "./heroSection.scss";
import image1 from "../../images/hero_image1.png";
import Header from "../header/Header";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import HeadingTextAnimation from "../HeadingAnimation/HeadingTextAnimation";

const HeroSection = () => {
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
      {/* <Header /> */}
      <div className="hero_section_wrapper" ref={ref}>
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
          <div className="hero_section_first_image">
            <img src={image1} alt="hero_image1" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
