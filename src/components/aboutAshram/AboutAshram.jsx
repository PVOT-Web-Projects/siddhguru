import "./aboutAshram.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import border from "../../images/aboutAshramBorder.svg";
import gif from "../../images/finalGif3.gif";
import HeadingTextAnimation from "../HeadingAnimation/HeadingTextAnimation";
const AboutAshram = () => {
  // const text = "॥ गुरुर्ब्रह्माः गुरुर्विष्णुः गुरुर्देवो महेश्वरः॥ ";
  // const text2 = "॥ गुरुर्साक्षात् परब्रह्मः तस्मै श्री गुरुवै नमः ॥";
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.03,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  // const textSection = {
  //   hidden: { opacity: 0, y: 100 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //   },
  // };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="aboutAshram">
      <motion.div className="aboutAshram_wrapper" ref={ref}>
        <div className="aboutAshram_wrapper_image">
          <img src={gif} alt="gif" />
        </div>
        <motion.div
          className={"mantra"}
          variants={sentence}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span
            className={"mantra_wrapper"}
            variants={letter}
            style={{ marginBottom: "12px" }}
          >
            <HeadingTextAnimation
              heading={"॥ गुरुर्ब्रह्माः गुरुर्विष्णुः गुरुर्देवो महेश्वरः॥ "}
              fontSize={"26.934px"}
              justifyContent={"center"}
            />
          </motion.span>
          <motion.span className={"mantra_wrapper"} variants={letter}>
            <HeadingTextAnimation
              heading={"॥ गुरुर्साक्षात् परब्रह्मः तस्मै श्री गुरुवै नमः ॥ "}
              fontSize={"26.934px"}
              justifyContent={"center"}
            />
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="aboutAshram_content"
        >
          <div className="top_border">
            <img src={border} alt="border" />
          </div>
          <div className="aboutAshram_text">
            <h3>About Ashram</h3>
            <p>
              <span>'Sri Siddheshwar Teerth'</span>
              {
                " is a spiritual pilgrimage site near Tirupati, Andhra Pradesh, India. Every year, thousands of pilgrims and devotees worldwide visit this sacred abode. In the presence of Sri Siddhaguru, various festivals like Navaratri, Diwali, Shivaratri, and Guru Purnima are celebrated with great enthusiasm every year. Coming to this sacred place, countless individuals have experienced the divine presence of Guruji. "
              }
            </p>
            <p>
              {
                "In this ashram, a three-day and seven-day Siddhasana retreat is also organized free of cost, and people from all over the world come to benefit from it. They leave with divine knowledge and the experience of eternal happiness. This pilgrimage site on the spiritual land of India is a center of energy in itself."
              }
            </p>
          </div>
          <div className="bottom_border">
            <img src={border} alt="border" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default AboutAshram;
