import PropTypes from "prop-types";
import "./innerPageCommonHeading.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InnerPageCommonHeading = ({ heading }) => {
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
      y: 100,
      transition: {
        damping: 12,
        stiffness: 50,
        duration: "0.8",
      },
    },
  };

  return (
    <div className="innerPageCommonHeading">
      <motion.div
        className="innerPageCommonHeading_wrapper"
        variants={container}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.2 }}
      >
        <motion.h2 variants={child}>{heading}</motion.h2>
      </motion.div>
    </div>
  );
};
export default InnerPageCommonHeading;

InnerPageCommonHeading.propTypes = {
  heading: PropTypes.string,
};
