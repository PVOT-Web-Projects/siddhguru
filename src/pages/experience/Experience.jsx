import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import VideoCards from "../../components/fourvideocard/fourvideocard";
// import VideoCards_one from "../../components/videoCards/VideoCards";
import "./experience.scss";
import bannerImage from "../../images/Experience-Banners-D_2.jpg";
import mobilebannerImage from "../../images/Experience-Banners-M_2.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="experience">
      {/* <InnerPageCommonHeading heading={"Experience"} /> */}
      <InnerPageBanner
        image={bannerImage}
        mobileImage={mobilebannerImage}
        bigText={"DIVINE EXPERIENCES WITH SIDDHGURU"}
        // bigText2={"DIVINE EXPERIENCES WITH SIDDHGURU"}
      />
      <div className="headingAndText" ref={ref}>
        <div className="headingAndText_wrapper">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Voices of Devotion
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Dive into the heartfelt narratives of transformation as devotees
            share their sacred journey with Sri SiddhGuru
          </motion.p>
        </div>
      </div>
      <VideoCards />
      {/* <VideoCards_one /> */}
    </div>
  );
};
export default Experience;
