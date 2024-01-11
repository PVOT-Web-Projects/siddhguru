import PropTypes from "prop-types";
import brownImage from "../../images/brownHeadingBorderTop.svg";
import greenImage from "../../images/greenHeadingBorderTop.svg";
import orangeImage from "../../images/orangeHeadingBorderTop.svg";
import "./innerPageCommonHeading2.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InnerPageCommonHeading2 = ({ heading, textColor }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        damping: 12,
        stiffness: 50,
        duration: "0.8",
      },
    },
    hidden: {
      x: 0,
      y: 150,
      transition: {
        damping: 12,
        stiffness: 50,
        duration: "0.8",
      },
    },
  };
  return (
    <div className="innerPageCommonHeading2">
      <motion.div
        className="innerPageCommonHeading2_wrapper"
        variants={container}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.2 }}
      >
        <motion.div className="heading_wrapper" variants={child}>
          <div className="top_image">
            {textColor === "#966940" && (
              <img src={brownImage} alt="brownImage" />
            )}
            {textColor === "#1D5A3F" && (
              <img src={greenImage} alt="greenImage" />
            )}
            {textColor === "#FF9900" && (
              <img src={orangeImage} alt="orangeImage" />
            )}
          </div>
          <motion.h2 style={{ color: textColor }}>{heading}</motion.h2>
          <div className="bottom_image">
            {textColor === "#966940" && (
              <img src={brownImage} alt="brownImage" />
            )}
            {textColor === "#1D5A3F" && (
              <img src={greenImage} alt="greenImage" />
            )}
            {textColor === "#FF9900" && (
              <img src={orangeImage} alt="orangeImage" />
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default InnerPageCommonHeading2;

InnerPageCommonHeading2.propTypes = {
  heading: PropTypes.string,
  textColor: PropTypes.string,
};
