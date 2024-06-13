import { motion } from "framer-motion";
// import Button from "../../components/buttons/button3";
import { useInView } from "react-intersection-observer";
// import { useState } from "react";
// import { Dropdown } from "primereact/dropdown";
// import Siddhguru_img from "../../images/allVideo.jpg";
import Siddhguru_img from "../../images/lotusGuruImage.jpg";
import "./formHomePage.scss";
import HeadingTextAnimation from "../HeadingAnimation/HeadingTextAnimation";
import { useContext } from "react";
import LanguageContext from "../language/Language";

function FormHomePage() {
  // const text = "कल को आसान बनाने के लिए आज आपको कड़ी मेहनत करनी ही पड़ेगी.";
  const { language } = useContext(LanguageContext);
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.02,
        staggerChildren: 0.05,
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

  return (
    <div className="siddhguru_container" ref={ref}>
      <div className="siddhguru_section">
        <img src={Siddhguru_img} alt="none" />
      </div>

      <motion.div
        className="siddhguru_mantra_section"
        variants={sentence}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.span className={"mantra_wrapper"} variants={letter}>
          <HeadingTextAnimation
            heading={
              language === "en"
                ? "Lift your soul, empower yourself, become divine."
                : "आत्मोत्थान करो,  ऊर्जावान बनो, और दिव्यता की अनुभूति करो। "
            }
            fontSize={"39px"}
            justifyContent={"center"}
          />
        </motion.span>
        <motion.span className={"mantra_wrapper"} variants={letter}>
          <HeadingTextAnimation
            heading={
              language === "en"
                ? "You are a born victor."
                : "आपका जन्म जीतने के लिए ही हुआ है।"
            }
            fontSize={"39px"}
            justifyContent={"center"}
          />
        </motion.span>
      </motion.div>

     
    </div>
  );
}
export default FormHomePage;
