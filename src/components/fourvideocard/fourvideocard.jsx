import video1 from "../../images/Ashok Sancheti Testimonial-AxJu7i3v.mp4";
import video3 from "../../images/exp3-dNXmpXxb.mp4";
import video2 from "../../images/Mayank Solanki Testimonial (Website)-MYSdPzFp.mp4";
import video4 from "../../images/exp4-G1wzJ-nw.mp4";
import poster1 from "../../images/newThumbnial4.jpeg";
import poster2 from "../../images/newThumbnail1.jpeg";
import poster3 from "../../images/newThumbnail2.jpeg";
import poster4 from "../../images/newThumbnail3.jpeg";

import hindiVideo1 from "../../images/HindiVideo2.mp4";
import hindiVideo2 from "../../images/HindiVideo4.mp4";
import hindiVideo3 from "../../images/HindiVideo1.mp4";
import hindiVideo4 from "../../images/HindiVideo3.mp4";
import hindiPoster1 from "../../images/HindiThumbnail2.png";
import hindiPoster2 from "../../images/HindiThumbnail4.png";
import hindiPoster3 from "../../images/HindiThumbnail1.png";
import hindiPoster4 from "../../images/HindiThumbnail3.png";
// import FourVideoItem from "./Fourvideocard_data";
import { Player } from "video-react";
import "./Fourvideocard.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import LanguageContext from "../language/Language";

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
  const { language } = useContext(LanguageContext);
  const englishVideos = [video1, video2, video3, video4];
  const hindiVideos = [hindiVideo1, hindiVideo2, hindiVideo3, hindiVideo4];
  const englishPosters = [poster1, poster2, poster3, poster4];
  const hindiPosters = [hindiPoster1, hindiPoster2, hindiPoster3, hindiPoster4];

  // Determine which videos/posters to use based on the language
  const videos = language === "en" ? englishVideos : hindiVideos;
  const posters = language === "en" ? englishPosters : hindiPosters;
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
              src={videos[0]}
              poster={posters[0]}
              // src={
              //  video2
              // }
              // poster={poster2}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">
          
            {language === "en" ? "Ashok Sancheti" : "अशोक संचेती"}
          </div>
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
              src={videos[1]}
              poster={posters[1]}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">
            {language === "en" ? "Mayank Solanki" : "मयंक सोलंकी"}
          </div>
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
              src={videos[2]}
              poster={posters[2]}
              // src={
              //   // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228875/siddhguru/tm8xxjqiyhrt0rovppma.mp4"
              //   video3
              // }
              // poster={poster4}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">{language === "en" ? "Vladislav Y" : "व्लादिस्लाव वाय"}</div>
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
              src={videos[3]}
              poster={posters[3]}
              // src={
              //   // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228917/siddhguru/kndxhydub7iqoktwuuvd.mp4"
              //   video1
              // }
              // poster={poster1}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">{language === "en" ? "Ramesh Sankhla" : "रमेश सांखला"}</div>
        </motion.div>
      </div>
    </div>
  );
};
export default Fourvideos;
