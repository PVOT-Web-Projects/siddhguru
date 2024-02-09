import "./siddhasanaItem.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SiddhasanaItem = ({
  heading,
  text1,
  text2,
  text3,
  text4,
  text5,
  image,
  delay,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay }}
      className="SiddhasanaItem"
    >
      <div className="SiddhasanaItem_wrapper">
        <h2>{heading}</h2>
        <p>{text1}</p>
        {text2 && <p>{text2}</p>}
        {text3 && <p>{text3}</p>}
        {text4 && <p>{text4}</p>}
        {text5 && <p>{text5}</p>}
      </div>
      <div className="SiddhasanaItem_image">
        <img src={image} alt="siddhasana" />
      </div>
    </motion.div>
  );
};
export default SiddhasanaItem;
