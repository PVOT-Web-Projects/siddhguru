import EventHomePageItem from "./EventHomePageItem/EventHomePageItem";
import image1 from "../../images/featuredEvent1.png";
import image2 from "../../images/featuredEvent2.png";
import image3 from "../../images/featuredEvent3.png";
import Button from "../../components/buttons/button";
import image4 from "../../images/featuredEvent4.png";
import "./eventsHomePage.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const EventsHomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const featuredEventsData = [
    {
      id: 0,
      image: image1,
      bigText: "Dubai",
      // eventName: "Name of Event",
      date: "11th March, 24 to 15th March, 24",
      location: "Dubai",
      boxMonth: "March",
      boxDate: "11",
      // boxWeek: "tue",
    },
    {
      id: 1,
      image: image2,
      bigText: "Bangkok",
      // eventName: "Name of Event",
      date: "16th March, 24 to 19th March, 24",
      location: "Bangkok",
      boxMonth: "March",
      boxDate: "16",
      // boxWeek: "tue",
    },
    {
      id: 2,
      image: image3,
      bigText: "Kuala Lumpur",
      // eventName: "Name of Event",
      date: "20th March, 24 to 24th March, 24",
      location: "Kuala Lumpur",
      boxMonth: "March",
      boxDate: "20",
      // boxWeek: "tue",
    },
    {
      id: 3,
      image: image4,
      bigText: "Guangzhou",
      // eventName: "Name of Event",
      date: "25th March, 24 to 30th March, 24",
      location: "Guangzhou",
      boxMonth: "March",
      boxDate: "25",
      // boxWeek: "tue",
    },
  ];
  return (
    <div className="eventsHomePage">
      <div className="eventsHomePage_wrapper">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mobile_heading"
        >
          Events
        </motion.h2>
        <div className="eventsHomePage_wrapper_left">
          {featuredEventsData.map((item) => (
            <EventHomePageItem
              id={item.id}
              key={item.id}
              image={item.image}
              heading={item.bigText}
              eventName={item.eventName}
              date={item.date}
              location={item.location}
              boxMonth={item.boxMonth}
              boxDate={item.boxDate}
              boxWeek={item.boxWeek}
            />
          ))}
        </div>
        <div className="eventsHomePage_wrapper_right">
          <div className="eventsHomePage_wrapper_right_content">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Events
            </motion.h2>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              From spiritual discourses and meditation sessions to yoga and
              wellness programs promoting physical health, Sri Brahmrishi Ashram
              has become a vibrant center for personal development. At the same
              time, the Ashram actively engages in philanthropic endeavors,
              reaching out to the underprivileged through charitable activities
              and community service. Here are the dates, mark your calendar,
              today!
            </motion.p>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <Button btn_text="Read More" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsHomePage;
