import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EventHomeVideoItem = ({ videoUrl, image, name }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="eventHomeVideoItem"
    >
      <Link to={videoUrl} target="_blank">
        <div className="videoName">{name}</div>
        <img src={image} alt="prevEvent" />
      </Link>
    </motion.div>
  );
};
export default EventHomeVideoItem;
