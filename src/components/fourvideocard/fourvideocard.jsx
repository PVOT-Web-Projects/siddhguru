import video1 from "../../images/Ashok Sancheti Testimonial-AxJu7i3v.mp4";
import video3 from "../../images/exp3-dNXmpXxb.mp4";
import video2 from "../../images/Mayank Solanki Testimonial (Website)-MYSdPzFp.mp4";
import video4 from "../../images/exp4-G1wzJ-nw.mp4";
import poster1 from "../../images/newThumbnial4.jpeg";
import poster2 from "../../images/newThumbnail1.jpeg";
import poster3 from "../../images/newThumbnail2.jpeg";
import poster4 from "../../images/newThumbnail3.jpeg";
// import FourVideoItem from "./Fourvideocard_data";
import { Player } from "video-react";
import "./Fourvideocard.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// const videoData = [
//   {
//     video: video1,
//     posterImage: poster1,
//   },
//   {
//     video: video2,
//     posterImage: poster2,
//   },
//   {
//     video: video3,
//     posterImage: poster3,
//   },
//   {
//     video: video4,
//     posterImage: poster4,
//   },
// ];

const Fourvideos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="fourVideos" ref={ref}>
      <div className="fourVideos_wrapper">
        {/* {videoData.map((item, index) => (
          <ThreeVideoItem key={index} {...item} />
        ))} */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fourVideoItem try"
        >
          <div className="fourVideoItem_wrapper">
            <Player
              playsInline={true}
              src={
                // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228581/siddhguru/rarhpb9tqupmbhvdo7ex.mp4"
                video2
              }
              poster={poster2}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">Mayank Solanki</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="fourVideoItem try"
        >
          <div className="fourVideoItem_wrapper">
            <Player
              playsInline={true}
              src={
                // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228683/siddhguru/uwpp7cyd0ovy83llhcxp.mp4"
                video4
              }
              poster={poster3}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">Vladislav Y</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="fourVideoItem try"
        >
          <div className="fourVideoItem_wrapper">
            <Player
              playsInline={true}
              src={
                // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228875/siddhguru/tm8xxjqiyhrt0rovppma.mp4"
                video3
              }
              poster={poster4}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">Ramesh Sankhla</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fourVideoItem try"
        >
          <div className="fourVideoItem_wrapper">
            <Player
              playsInline={true}
              src={
                // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228917/siddhguru/kndxhydub7iqoktwuuvd.mp4"
                video1
              }
              poster={poster1}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">Ashok Sancheti</div>
        </motion.div>
      </div>
    </div>
  );
};
export default Fourvideos;
