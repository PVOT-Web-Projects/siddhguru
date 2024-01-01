import "./navbar.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Navbar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="navbar">
      <ul>
        <motion.li
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <a href="#">Siddhguru</a>
        </motion.li>
        <motion.li
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          <a href="#">About Ashram</a>
        </motion.li>
        <motion.li
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <a href="#">Knowledge</a>
        </motion.li>
        <motion.li
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <a href="#">Activities</a>
        </motion.li>
        <motion.li
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          <a href="#">Events</a>
        </motion.li>
        <motion.li
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.7 }}
        >
          <a href="#">Centers</a>
        </motion.li>
        <motion.li
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <a href="#">Contact Us</a>
        </motion.li>
      </ul>
    </div>
  );
};
export default Navbar;