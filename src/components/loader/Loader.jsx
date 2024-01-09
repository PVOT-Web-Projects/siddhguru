import "./loader.scss";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import loader from "../../images/loader_logo.svg";
import { useInView } from "react-intersection-observer";
import LoaderTextAnimation from "../loader_text_animation/LoaderTextAnimation";
export default function Loader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [percentage, setPercentage] = useState(0);

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { duration: 1.3, delay: 0.2 },
    },
  };

  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
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

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    let intervalId;
    if (percentage < 100) {
      intervalId = setInterval(() => {
        setPercentage((prevPercentage) => prevPercentage + 1);
      }, 12); // Set the interval time as needed
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [percentage]);

  return (
    <div className={"loader"}>
      <div className="loader_wrapper">
        {/* <motion.div variants={opacity} initial="initial" animate="enter"> */}
        <div>
          <img src={loader} alt="" />
        </div>
        {/* </motion.div>{" "} */}
        {dimension.width > 0 && (
        <div className="counterContainer_wrapper">
          <div className={"counterContainer"}>
            <motion.div
              className={"percentageCounter"}
              variants={opacity}
              initial="initial"
              animate="enter"
            >
              {percentage}%
            </motion.div>

            <motion.div
              className={"mantra_loader"}
              variants={sentence}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.span
                className={"mantra_wrapper_loader"}
                variants={letter}
                style={{ marginBottom: "12px" }}
              >
                <LoaderTextAnimation
                  heading={
                    "॥ गुरुर्ब्रह्माः गुरुर्विष्णुः गुरुर्देवो महेश्वरः॥ "
                  }
                  fontSize={"26.934px"}
                  justifyContent={"center"}
                />
              </motion.span>
              <motion.span
                className={"mantra_wrapper_loader"}
                variants={letter}
              >
                <LoaderTextAnimation
                  heading={
                    "॥ गुरुर्साक्षात् परब्रह्मः तस्मै श्री गुरुवै नमः ॥ "
                  }
                  fontSize={"26.934px"}
                  justifyContent={"center"}
                />
              </motion.span>
            </motion.div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
