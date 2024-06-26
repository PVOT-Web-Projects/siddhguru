import "./loader.scss";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import loader from "../../images/loader_logo.svg";
import { useInView } from "react-intersection-observer";
import LoaderTextAnimation from "../loader_text_animation/LoaderTextAnimation";
import PropTypes from "prop-types";

export default function Loader({ loading }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  console.log("loading", loading);

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { duration: 1.3, delay: 0.2 },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
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

  // useEffect(() => {
  //   let intervalId;
  //   if (percentage < 100) {
  //     intervalId = setInterval(() => {
  //       setPercentage((prevPercentage) => prevPercentage + 1);
  //     }, 12);
  //   } else {
  //     clearInterval(intervalId);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [percentage]);

  return (
    <div className={`loader ${loading ? "loading" : "loaded"}`}>
      <div className="loader_wrapper">
        <motion.div variants={opacity} initial="initial" animate="enter">
          <div>
            <img src={loader} alt="" />
          </div>
        </motion.div>
        {dimension.width > 0 && (
          <div className="counterContainer_wrapper">
            <div className={"counterContainer"}>
              {/* <motion.div
              className={"percentageCounter"}
              variants={opacity}
              initial="initial"
              animate="enter"
            >
              {percentage}%
            </motion.div> */}

              <motion.div
                className={"mantra_loader"}
                variants={sentence}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                ref={ref}
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

Loader.propTypes = {
  loading: PropTypes.any,
};
