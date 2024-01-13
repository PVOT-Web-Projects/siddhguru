import AnimatedTextWord from "./HeadingAnimation";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeadingTextAnimation = ({
  heading,
  text2,
  fontSize,
  justifyContent,
  color,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      className="animatedText"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.2 }}
    >
      <AnimatedTextWord
        text={heading ? heading : null}
        text2={text2 ? text2 : null}
        fontSize={fontSize ? fontSize : ""}
        justifyContent={justifyContent ? justifyContent : ""}
        color={color ? color : "#000"}
      />
    </motion.div>
  );
};
export default HeadingTextAnimation;

HeadingTextAnimation.propTypes = {
  heading: PropTypes.string,
  text2: PropTypes.string,
  fontSize: PropTypes.string,
  justifyContent: PropTypes.string,
  color: PropTypes.string,
};
