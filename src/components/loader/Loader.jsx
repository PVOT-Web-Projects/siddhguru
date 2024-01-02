import "./loader.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import loader from "../../images/loader_logo.svg"
import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const words = ["PVOT"];

export default function Loader() {
  const [index, setIndex] = useState(0);
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

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

    // useEffect(() => {
    //   if (index === words.length - 1) return;
    //   const timeoutId = setTimeout(
    //     () => {
    //       setIndex(index + 1);
    //     },
    //     index === 0 ? 1000 : 150
    //   );
    //   return () => clearTimeout(timeoutId);
    // }, [index]);

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

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={"introduction"}
    >
      <motion.div variants={opacity} initial="initial" animate="enter">
        <div style={{ width: 200, height: 200 }}>
         <img src={loader} alt="" />
        </div>
      </motion.div>
      {dimension.width > 0 && (
        <div className={"counterContainer"}>
          <motion.div
            className={"percentageCounter"}
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            {percentage}%
          </motion.div>
          {/* <motion.p variants={opacity} initial="initial" animate="enter">
            {words[index]}
          </motion.p> */}
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </div>
      )}
    </motion.div>
  );
}
