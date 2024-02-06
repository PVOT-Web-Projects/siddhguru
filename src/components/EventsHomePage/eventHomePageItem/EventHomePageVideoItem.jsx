import { Link } from "react-router-dom";

const EventHomeVideoItem = ({ videoUrl, image, name }) => {
  return (
    <div className="eventHomeVideoItem">
      <Link to={videoUrl} target="_blank">
        <img src={image} alt="prevEvent" />
        <div className="videoName">{name}</div>
      </Link>
    </div>
  );
};
export default EventHomeVideoItem;
