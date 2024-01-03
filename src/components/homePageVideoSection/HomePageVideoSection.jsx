import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../components/buttons/button3";
import "./homePageVideoSection.scss";
import babaDP from "../../images/videoSectionImage.png";
import play from "../../images/videoSectionPlayIcon.png";
import mobileImage from "../../images/mobile_image.png";
const HomePageVideoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="homePageVideoSection">
      <div className="babaBgOuter">
        <div className="babaBgImageOuter">
          <img className="babaBgImage" src={babaDP} alt="image" />
          <img className="babaBgImage_mobile" src={mobileImage} alt="image" />
        </div>
        <div className="playButtonOuter">
          <img className="playButton" src={play} alt="image" />
        </div>
        <div className="babaBgText">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="babaText1"
          >
            Find your answers in Gurudev’s Words of Wisdom
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.49 }}
            className="babaName"
          >
            Sri Brahmrishi
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="babaBgButton"
          >
            <Button btn_text="Register Now" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default HomePageVideoSection;
