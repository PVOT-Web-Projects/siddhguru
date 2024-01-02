import { motion } from "framer-motion";

const AnimatedTextWord = ({ text, fontSize, justifyContent }) => {
  //   const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 1 * i },
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
        duration: "0.5",
      },
    },
    hidden: {
      //   opacity: 0,
      x: 0,
      y: 100,
      transition: {
        // type: "spring",
        damping: 12,
        stiffness: 50,
        duration: "0.5",
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
      }}
      variants={container}
      //   initial={{rotate:-45}}
      //   animate={{rotate:45}}
    >
      {/* {words.map((word, index) => ( */}
      <motion.span variants={child} style={{ marginRight: "5px" }}>
        {text}
      </motion.span>
      {/* ))} */}
    </motion.div>
  );
};

export default AnimatedTextWord;
