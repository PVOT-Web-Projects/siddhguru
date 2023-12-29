import shape from "../../images/aboutShape.svg";
import aboutAshram from "../../images/aboutAshramImage.png";
import leaf1 from "../../images/aboutAshramLeaf1.svg";
import leaf2 from "../../images/aboutAshramLeaf2.svg";
import leaf3 from "../../images/aboutAshramLeaf3.svg";
import leaf4 from "../../images/aboutAshramLeaf4.svg";
import "./aboutAshram.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import border from "../../images/aboutAshramBorder.svg";
const AboutAshram = () => {
  const text = "॥ गुरुर्ब्रह्माः गुरुर्विष्णुः गुरुर्देवो महेश्वरः॥ ";
  const text2 = "॥ गुरुर्साक्षात् परब्रह्मः तस्मै श्री गुरुवै नमः ॥";
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
  const textSection = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition:"all 5s"
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
    <div className="aboutAshram">
      <div className="aboutAshram_wrapper">
        <div className="aboutAshram_wrapper_image">
          <div className="shape_image">
            <img src={shape} alt="shapeImage" />
          </div>
          <div className="shape_image leaf1">
            <img src={leaf1} alt="shapeImage" />
          </div>
          <div className="shape_image leaf2">
            <img src={leaf2} alt="shapeImage" />
          </div>
          <div className="shape_image leaf3">
            <img src={leaf3} alt="shapeImage" />
          </div>
          <div className="shape_image leaf4">
            <img src={leaf4} alt="shapeImage" />
          </div>
          <div className="shape_image main_image">
            <img src={aboutAshram} alt="shapeImage" />
          </div>
        </div>
        <motion.div
          className={"mantra"}
          variants={sentence}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {text.split("").map((char, index) => (
            <motion.span
              className={"mantra_wrapper"}
              key={char + "-" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}
          <br />
          {text2.split("").map((char, index) => (
            <motion.span
              className={"mantra_wrapper"}
              key={char + "-" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={textSection}
          animate={inView ? "visible" : "hidden"}
          className="aboutAshram_content"
          ref={ref}
          transition={textSection}
        >
          <div className="top_border">
            <img src={border} alt="border" />
          </div>
          <div className="aboutAshram_text">
            <h3>About Ashram</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="bottom_border">
            <img src={border} alt="border" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default AboutAshram;
