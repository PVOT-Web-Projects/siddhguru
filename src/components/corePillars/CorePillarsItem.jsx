import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CorePillarsItem = ({ image, title, id, delayTime }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <motion.div
      className={`corePillarsItem image_${id}`}
      ref={ref}
      initial={{ opacity: 0, y: 0, x:-100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: delayTime }}
    >
      <div className={`corePillarsItem_image`}>
        <img src={image} alt={title} />
        <div className="title">{title}</div>
      </div>
    </motion.div>
  );
};
export default CorePillarsItem;
CorePillarsItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.any,
  title: PropTypes.string,
  delayTime: PropTypes.number,
};
