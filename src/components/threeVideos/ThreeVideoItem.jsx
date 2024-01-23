import PropTypes from "prop-types";
import { useRef, useState } from "react";
import playIcon from "../../images/playIcon.svg";
import pauseIcon from "../../images/pauseIcon.svg";
const ThreeVideoItem = ({ video }) => {
  const [playButton, setPlayButton] = useState(true);
  const [pauseButton, setPauseButton] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setPlayButton(false);
    setPauseButton(true);
  };
  const handlePause = () => {
    videoRef.current.pause();
    setPlayButton(true);
    setPauseButton(false);
  };

  return (
    <div className="threeVideoItem">
      <div className="threeVideoItem_wrapper">
        <video ref={videoRef}>
          <source src={video} type="video/mp4" />
        </video>
        {playButton && (
          <button onClick={handlePlay}>
            <img src={playIcon} alt="playIcon" />
          </button>
        )}
        {pauseButton && (
          <button onClick={handlePause}>
            <img src={pauseIcon} alt="pauseIcon" />
          </button>
        )}
      </div>
    </div>
  );
};
export default ThreeVideoItem;

ThreeVideoItem.propTypes = {
  video: PropTypes.string,
};
