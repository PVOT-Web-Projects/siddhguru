import "./textSection.scss";
import {  motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const TextSection = () => {
  const text =
    "Welcome to the Sacred Haven of Spiritual Enlightenment—Shri Siddhguru, the Divine Guide for the Modern Seeker. In the heart of his holiness Shri Sidheshwar Brahmrishi Gurudev, “Siddhguru” transcends the miracles of Vedic science and boundaries of conventional spirituality, ushering humanity towards the path of a divine life.";
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.009,
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
    <div className="textSection" ref={ref}>
      <motion.div
        variants={sentence}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
        className="textSection_wrapper"
      >
        {text.split("").map((char, index) => (
          <motion.span
            className={"mantra_wrapper"}
            key={char + "-" + index}
            variants={letter}
            style={index < 10 ? { color: "#6A1C1C" } : null}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
export default TextSection;
