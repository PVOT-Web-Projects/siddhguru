import "./textSection.scss";
import {  motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const TextSection = () => {
  const text =
    "In Vedic science, the Sri Siddheshwar Teerth - Brahmarishi Ashram family welcomes you. In the present age, every individual strives for eternal happiness for themselves and their families. In the journey of life, surrounded by the world's challenges, solutions to every small or big problem of human life are found in Vedic science. Sri Siddheshwar Brahmarishi Gurudev, also known as 'Siddhaguru,' is on a unique mission of spirituality and service to alleviate every sorrow of human life through his spiritual achievements, traveling worldwide. ";
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
            style={index > 331 && index < 398 ? { color: "#FF9900", fontWeight:700 } : null}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
export default TextSection;
