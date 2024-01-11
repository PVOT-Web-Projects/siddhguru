import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedTextWord = ({ text,text2, fontSize, justifyContent, color }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        // type: "spring",
        damping: 12,
        stiffness: 50,
        duration: "0.8",
      },
    },
    hidden: {
      x: 0,
      y: 100,
      transition: {
        damping: 12,
        stiffness: 50,
        duration: "0.8",
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: fontSize,
        justifyContent: justifyContent,
        color: color,
      }}
      variants={container}
    >
      <motion.span variants={child}>{text}<span className="text2">{text2}</span></motion.span>
    </motion.div>
  );
};

export default AnimatedTextWord;

AnimatedTextWord.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  fontSize: PropTypes.number,
  justifyContent: PropTypes.string,
  color: PropTypes.string,
};
