import "./homePage3d.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import eyes from "../../images/3D.png";
const HomePage3D = () => {
  const text = "जिनकी एक दृष्टि जीवन की दिशा व दशा दोनो बदल देती है";
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.01,
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
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="homePage3D">
      <div className="eyesOuter" ref={ref}>
        <div className="eyesImageOuter">
          <img className="eyesImage" src={eyes} alt="" />
        </div>
        <motion.div
          className="eyesTextOuter"
          variants={sentence}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {text.split("").map((char, index) => (
            <motion.span
              className="eyesText"
              key={char + "-" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default HomePage3D;
