const EventHomePageItem = ({
  image,
  heading,
  eventName,
  date,
  location,
  boxDate,
  boxMonth,
  boxWeek,
}) => {
  return (
    <div className="eventHomeItem">
      <div className="eventHomeItem_wrapper">
        <div className="eventHomeItem_wrapper_left">
          <div className="eventItem_image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="eventHomeItem_wrapper_right">
          <div className="eventItem_content">
            <h5>{heading}</h5>
            <div className="eventname">Event : {eventName}</div>
            <div className="date">Date : {date}</div>
            <div className="location">{location}</div>
          </div>
          <div className="boxDate">
            <div className="month">{boxMonth}</div>
            <div className="boxDate">
              {boxDate} <span>{boxWeek}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventHomePageItem;
