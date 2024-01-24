import video1 from "../../images/video1.mp4";
import video2 from "../../images/video2.mp4";
import video3 from "../../images/video3.mp4";
import poster1 from "../../images/poster1.jpg";
import poster2 from "../../images/poster2.jpg";
import poster3 from "../../images/poster3.jpg";
import ThreeVideoItem from "./ThreeVideoItem";
import "./threeVideos.scss";

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
];

const ThreeVideos = () => {
  return (
    <div className="threeVideos">
      <div className="threeVideos_wrapper">
        {videoData.map((item, index) => (
          <ThreeVideoItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default ThreeVideos;
