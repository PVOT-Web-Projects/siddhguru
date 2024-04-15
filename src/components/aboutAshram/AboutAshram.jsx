import "./aboutAshram.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import border from "../../images/aboutAshramBorder.svg";
import gif from "../../images/aboutAshramImage.jpeg";
import HeadingTextAnimation from "../HeadingAnimation/HeadingTextAnimation";
import Button from "../buttons/button4";
import LanguageContext from "../language/Language";
const AboutAshram = () => {
  // const text = "॥ गुरुर्ब्रह्माः गुरुर्विष्णुः गुरुर्देवो महेश्वरः॥ ";
  // const text2 = "॥ गुरुर्साक्षात् परब्रह्मः तस्मै श्री गुरुवै नमः ॥";
  const { language } = useContext(LanguageContext);
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
        {/* <div className="aboutAshram_wrapper_image">
          <img src={gif} alt="gif" />
        </div> */}
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
              heading={
                language === "en"
                  ? "Join our WhatsApp Channel"
                  : "हमारे व्हॉट्सऐप चैनल से जुड़ें "
              }
              fontSize={"26.934px"}
              justifyContent={"center"}
            />
          </motion.span>
          <motion.span className={"mantra_wrapper"} variants={letter}>
            <HeadingTextAnimation
              heading={
                language === "en"
                  ? "Experience the miracle of vedic Science with Sri SiddhGuru."
                  : "गुरुदेव के मार्गदर्शन में वैदिक विज्ञान की शक्ति को अपने जीवन में उतारें"
              }
              fontSize={"26.934px"}
              justifyContent={"center"}
            />
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            className="joinBtn"
          >
            <Button
            // btn_text={language === "en" ? "Join Now" : "अब शामिल हों"}
              btn_text="Join Now"
              link="https://whatsapp.com/channel/0029VaDdUk34NVikwxnIXa2T"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="aboutAshram_content"
        >
          <div className="top_border">
            <img src={border} alt="border" />
          </div>
          <div className="aboutAshram_text">
            <h3>About Our Ashram</h3>
            <p>
              <span>
                Sri Sidheshwar Tirth - Sri Brahmarishi Ashram, near Tirupati
              </span>
              {
                " stands as a revered spiritual pilgrimage site drawing thousands of devotees and pilgrims from around the globe annually. Blessed by the divine presence of Sri SiddhGuru, this sacred abode resonates with fervor during celebrated festivals such as Navaratri, Diwali, and MahaShivaratri."
              }
            </p>
            <p>
              {
                "Additionally, the ashram hosts free three-day and seven-day Siddhasana retreats, attracting seekers from diverse corners of the world who depart enriched with spiritual wisdom and the bliss of eternal fulfillment. Positioned on the sacred soil of India, this pilgrimage site radiates with an inherent spiritual energy, serving as a beacon of enlightenment and transformation for all who tread its hallowed grounds."
              }
            </p>
            <p>
              {
                "The sanctity of this place has touched countless souls, offering profound experiences of Sri Gurudev's divine grace."
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
