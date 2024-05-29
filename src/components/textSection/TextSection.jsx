import "./textSection.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const TextSection = () => {
  const text =
    "Welcome to the Sri Sidheshwar Tirth - Brahmrishi Ashram family in the realm of Vedic science. In this modern era, individuals seek a life of happiness for themselves and their loved ones. Amidst life's challenges, both minor and monumental, Vedic science offers solutions to every facet of human existence. Sri Sidheshwar Brahmarishi Gurudev, affectionately known as 'SiddhGuru,' embarks on a distinctive mission of spirituality and service, endeavoring to alleviate every sorrow in human life through his spiritual accomplishments, spanning the globe with his teachings.";
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
            style={
              index > 306 && index < 380
                ? { color: "#FF9900", fontWeight: 700 }
                : null
            }
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
export default TextSection;
