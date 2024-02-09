import PropTypes from "prop-types";
// import { useRef, useState } from "react";
// import playIcon from "../../images/playIcon.svg";
// import pauseIcon from "../../images/pauseIcon.svg";
import { Player } from "video-react";
// import "./node_modules/video-react/dist/video-react.css";
import "../../../node_modules/video-react/dist/video-react.css";
const ThreeVideoItem = ({ video, posterImage }) => {
  // const [playButton, setPlayButton] = useState(true);
  // const [pauseButton, setPauseButton] = useState(false);
  // const videoRef = useRef(null);

  // const handlePlay = () => {
  //   videoRef.current.play();
  //   setPlayButton(false);
  //   setPauseButton(true);
  // };
  // const handlePause = () => {
  //   videoRef.current.pause();
  //   setPlayButton(true);
  //   setPauseButton(false);
  // };

  return (
    <div className="threeVideoItem try">
      <div className="threeVideoItem_wrapper">
        <Player
          playsInline={true}
          src={video}
          poster={posterImage}
          fluid={true}
        />
      </div>
    </div>
  );
};
export default ThreeVideoItem;

ThreeVideoItem.propTypes = {
  video: PropTypes.string,
  posterImage: PropTypes.string,
};
