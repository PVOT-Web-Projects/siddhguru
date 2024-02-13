import "./bigHeadingSmallHeading.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BigHeadingSmallHeading = ({ bigHeading, smallHeading }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="bigHeadingSmallHeading" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
        {bigHeading}
      </motion.h2>
      <motion.h4
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {smallHeading}
      </motion.h4>
    </div>
  );
};
export default BigHeadingSmallHeading;
