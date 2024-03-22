import PropTypes from "prop-types";

const EventImage = ({ image }) => {
    return (
      <div className="eventImage">
        <img src={image} alt="eventImage" />
      </div>
    );
  };
  export default EventImage

  EventImage.propTypes = {
    image: PropTypes.any,
  };