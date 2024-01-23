import video1 from "../../images/video1.mp4";
import video2 from "../../images/video2.mp4";
import video3 from "../../images/video3.mp4";
import ThreeVideoItem from "./ThreeVideoItem";
import "./threeVideos.scss";

const videoData = [
  {
    video: video1,
  },
  {
    video: video2,
  },
  {
    video: video3,
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
