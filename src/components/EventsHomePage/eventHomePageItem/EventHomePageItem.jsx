import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import Button from "../../buttons/button4";
import { useLocation } from "react-router-dom";
const EventHomePageItem = ({
  show,
  image,
  heading,
  eventName,
  eventDesc1,
  eventDesc2,
  eventDesc3,
  date,
  location,
  boxDate,
  boxMonth,
  boxWeek,
  id,
  leftBold1,
  leftBold2,
  leftBold3,
  leftBold4,
  leftBold5,
  leftBold6,
  leftBold7,
  rightLight1,
  rightLight2,
  rightLight3,
  rightLight4,
  rightLight5,
  rightLight6,
  rightLight7,
  note,
  link,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const eventLocation  = useLocation();
  console.log("event Location", eventLocation);
  return show ? (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="eventHomeItem"
    >
      <div className="eventHomeItem_wrapper">
        <div className="eventHomeItem_wrapper_left">
          <div className="eventItem_image">
            <img src={image} alt="eventImage" />
          </div>
        </div>
        <div className="eventHomeItem_wrapper_right">
          <div className="eventItem_content">
            <div className="eventItem_content_heading_wrap">
              <h5>{heading}</h5>
              <div className="date">{date}</div>
            </div>
            {/* {eventName && <div className="eventname">Event : {eventName}</div>} */}
            <div className="event_content">
              <p>{eventDesc1}</p>
              <p>{eventDesc2}</p>
              <p>{eventDesc3}</p>
            </div>
            <div className="event_card_left_right_data">
              {(leftBold1 || rightLight1) && (
                <p>
                  <span>{leftBold1}</span>
                  {rightLight1}
                </p>
              )}
              {(leftBold2 || rightLight2) && (
                <p>
                  <span>{leftBold2}</span>
                  {rightLight2}
                </p>
              )}
              {(leftBold3 || rightLight3) && (
                <p>
                  <span>{leftBold3}</span>
                  {rightLight3}
                </p>
              )}
              {(leftBold4 || rightLight4) && (
                <p>
                  <span>{leftBold4}</span>
                  {rightLight4}
                </p>
              )}
              {(leftBold5 || rightLight5) && (
                <p>
                  <span>{leftBold5}</span>
                  {rightLight5}
                </p>
              )}
              {(leftBold6 || rightLight6) && (
                <p>
                  <span>{leftBold6}</span>
                  {rightLight6}
                </p>
              )}
              {(leftBold7 || rightLight7) && (
                <p>
                  <span>{leftBold7}</span>
                  {rightLight7}
                </p>
              )}
            </div>
            {note && <div className="note">{note}</div>}
            {/* <div className="location">{location}</div> */}
            { !note && (
              <div className="eventCardBtn">
                <Button link={eventLocation.pathname === "/" ? "/events" : link} btn_text={eventLocation.pathname === "/" ? "Learn More" : "Register Now"} />
              </div>
            )}
            {/* {location === "/" && !note && (
              <div className="eventCardBtn">
                <Button link={"/event"} btn_text="See Events" />
              </div>
            )} */}
            {note && <div className="comingSoon">Coming soon...</div>}
          </div>
          {/* <div className="boxDateSec">
            <div className="month">{boxMonth}</div>
            <div className="boxDate">
              {boxDate} <span>{boxWeek}</span>
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  ) : null;
};
export default EventHomePageItem;

EventHomePageItem.propTypes = {
  image: PropTypes.any,
  heading: PropTypes.string,
  eventName: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  boxDate: PropTypes.string,
  boxMonth: PropTypes.string,
  boxWeek: PropTypes.string,
  id: PropTypes.number,
};
