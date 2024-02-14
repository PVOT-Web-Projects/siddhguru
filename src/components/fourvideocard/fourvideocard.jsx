import video1 from "../../images/Ashok Sancheti Testimonial.mp4";
import video3 from "../../images/exp4.mp4";
import video2 from "../../images/Mayank Solanki Testimonial (Website).mp4";
// import video1 from "../../images/exp1.mp4";
import video4 from "../../images/exp3.mp4";
import poster1 from "../../images/expPoster1.jpg";
import poster2 from "../../images/expPoster2.jpg";
import poster3 from "../../images/expPoster3.jpg";
import poster4 from "../../images/shubhas_poster.jpg";
import FourVideoItem from "./Fourvideocard_data";
import { Player } from "video-react";
import "./Fourvideocard.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const videoData = [
  {
    video: video1,
    posterImage: poster1,
  },
  {
    video: video2,
    posterImage: poster2,
  },
  {
    video: video3,
    posterImage: poster3,
  },
  {
    video: video4,
    posterImage: poster4,
  },
];

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
              src={video2}
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
              src={video3}
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
              src={video4}
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
              src={video1}
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