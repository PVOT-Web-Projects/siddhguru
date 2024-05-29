import { useContext } from "react";
import "./bigHeadingSmallHeading.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LanguageContext from "../language/Language";
const BigHeadingSmallHeading = ({ bigHeading, smallHeading,bigHindiHeading ,smallHindiHeading }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const { language } = useContext(LanguageContext);
  return (
    <div className="bigHeadingSmallHeading" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1 }}
       
      >
         {language === "en" ? bigHeading : bigHindiHeading}
        {/* {bigHeading} */}
      </motion.h2>
      <motion.h4
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {language === "en" ? smallHeading : smallHindiHeading}
        {/* {smallHeading} */}
      </motion.h4>
    </div>
  );
};
export default BigHeadingSmallHeading;
