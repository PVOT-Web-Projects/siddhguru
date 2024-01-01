import "./textSection.scss";
import { useRef } from "react";
import { color, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const TextSection = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
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
            style={index < 12 ? { color: "#6A1C1C" } : null}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
export default TextSection;