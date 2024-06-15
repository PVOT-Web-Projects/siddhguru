import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import VideoCards from "../../components/fourvideocard/fourvideocard";
// import VideoCards_one from "../../components/videoCards/VideoCards";
import "./experience.scss";
import bannerImage from "../../images/Experience_D.jpg";
import mobilebannerImage from "../../images/Experience_M.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import LanguageContext from "../../components/language/Language";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const { language } = useContext(LanguageContext);
  return (
    <div className="experience">
      {/* <InnerPageCommonHeading heading={"Experience"} /> */}
      <InnerPageBanner
        image={
          // "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916886/bb0mlpmevlvzkexza7o8.jpg"
          bannerImage
        }
        mobileImage={
          // "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916920/tneaglbxrj5ojlwu9ph1.jpg"
          mobilebannerImage
        }
        bigText={"DIVINE EXPERIENCES WITH SIDDHGURU"}
        hindiBigText={"श्री सिद्धगुरु के साथ कुछ दिव्य अनुभव"}

        // bigText2={"DIVINE EXPERIENCES WITH SIDDHGURU"}
      />
      <div className="headingAndText" ref={ref}>
        <div className="headingAndText_wrapper">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === "en" ? "Voices of Devotion" : "भक्ति की अमृतधारा"}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {language === "en"
              ? "Dive into the heartfelt narratives of transformation as devotees share their sacred journey with Sri SiddhGuru"
              : "गुरुभक्तों से सुनें गुरुदेव के संग अपने आध्यात्मिक जीवन के अलग अलग पड़ाव पर हुए परिवर्तनकारी अनुभवों की सत्य कथाएं"}
          </motion.p>
        </div>
      </div>
      <VideoCards />
      {/* <VideoCards_one /> */}
    </div>
  );
};
export default Experience;
