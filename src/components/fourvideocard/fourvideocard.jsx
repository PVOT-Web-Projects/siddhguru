import video1 from "../../images/Ashok Sancheti Testimonial.mp4";
import video3 from "../../images/exp4.mp4";
import video2 from "../../images/Mayank Solanki Testimonial (Website).mp4";
// import video1 from "../../images/exp1.mp4";
import video4 from "../../images/exp3.mp4";
import poster1 from "../../images/Ravi_poster.jpg";
import poster2 from "../../images/mayank_poster.jpg";
import poster3 from "../../images/video3banner.jpg";
import poster4 from "../../images/shubhas_poster.jpg";
import FourVideoItem from "./Fourvideocard_data";
import { Player } from "video-react";
import "./Fourvideocard.scss";

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
    // posterImage: poster4,
  },
];

const Fourvideos = () => {
  return (
    <div className="fourVideos">
      <div className="fourVideos_wrapper">
        {/* {videoData.map((item, index) => (
          <ThreeVideoItem key={index} {...item} />
        ))} */}

        <div className="fourVideoItem try">
          <div className="fourVideoItem_wrapper">
            <Player
              playsInline={true}
              src={video2}
              // poster={poster2}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">Mayank Solanki</div>
        </div>
        <div className="fourVideoItem try">
          <div className="fourVideoItem_wrapper">
            <Player
              playsInline={true}
              src={video3}
              // poster={poster3}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">Vladislav Y</div>
        </div>
        <div className="fourVideoItem try">
          <div className="fourVideoItem_wrapper">
            <Player
              playsInline={true}
              src={video4}
              // poster={poster4}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">Ramesh Sankhla</div>
        </div>
        <div className="fourVideoItem try">
          <div className="fourVideoItem_wrapper">
            <Player
              playsInline={true}
              src={video1}
              // poster={poster2}
              // fluid={true}
            />
          </div>
          <div className="fourVideoItem_text">Ashok Sancheti</div>
        </div>
      </div>
    </div>
  );
};
export default Fourvideos;
