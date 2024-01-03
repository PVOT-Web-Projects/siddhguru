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
      bigText: "Lorem Ipsum is simply dummy",
      eventName: "Name of Event",
      date: " 22, Dec, 2023",
      location: "Ahmedabad, Gujarat",
      boxMonth: "December",
      boxDate: "19",
      boxWeek: "tue",
    },
    {
      id: 1,
      image: image2,
      bigText: "Lorem Ipsum is simply dummy",
      eventName: "Name of Event",
      date: " 22, Dec, 2023",
      location: "Ahmedabad, Gujarat",
      boxMonth: "December",
      boxDate: "19",
      boxWeek: "tue",
    },
    {
      id: 2,
      image: image3,
      bigText: "Lorem Ipsum is simply dummy",
      eventName: "Name of Event",
      date: " 22, Dec, 2023",
      location: "Ahmedabad, Gujarat",
      boxMonth: "December",
      boxDate: "19",
      boxWeek: "tue",
    },
    {
      id: 3,
      image: image4,
      bigText: "Lorem Ipsum is simply dummy",
      eventName: "Name of Event",
      date: " 22, Dec, 2023",
      location: "Ahmedabad, Gujarat",
      boxMonth: "December",
      boxDate: "19",
      boxWeek: "tue",
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
