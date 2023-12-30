import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const EventHomePageItem = ({
  image,
  heading,
  eventName,
  date,
  location,
  boxDate,
  boxMonth,
  boxWeek,
  id
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0, x: id === 1 || id === 3 ? 180 : 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="eventHomeItem"
    >
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
          <div className="boxDateSec">
            <div className="month">{boxMonth}</div>
            <div className="boxDate">
              {boxDate} <span>{boxWeek}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default EventHomePageItem;