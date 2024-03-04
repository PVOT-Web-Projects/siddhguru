import EventHomePageItem from "./EventHomePageItem/EventHomePageItem";
import image1 from "../../images/Dhwajarohan.jpg";
import image2 from "../../images/Maha-Shivratri.jpg";
import image3 from "../../images/Asia-Tour.jpg";
import image4 from "../../images/Africa-Tour.jpg";
import Button from "../../components/buttons/button";
import videoPoster1 from "../../images/arrowImageCircle.svg";
import "./eventsHomePage.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EventHomeVideoItem from "./eventHomePageItem/EventHomePageVideoItem";
const EventsHomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const featuredEventsData = [
    {
      id: 0,
      image: image1,
      bigText: "Sri Brahmeshwar Parshwanath Swarn Jain Mandir – 6th Annual Celebrations",
      // eventName: "Name of Event",
      date: "6th March,2024",
      location: "Dubai",
      boxMonth: "March",
      boxDate: "11",
      eventDesc1:
        'The auspicious moment for the Sri Brahmeshwar Parshvanath Swarna Jain Temple will be celebrated with the"Dhvajarohan Mahotsav."',
      eventDesc2:
        "The event will include the hoisting of the flag according to Jain rituals, followed by worship and, afterward, a feast offering the lovingly prepared meal, known as Swamivatsalya Bhojan Prasad.",
      // boxWeek: "tue",
      leftBold1: "18 Abhishek Poojan - ",
      rightLight1: "8:00 AM onwards",
      leftBold2: "Sattar Bhedi Poojan - ",
      rightLight2: "11:45 AM onwards",
      leftBold3: "Dhwajarohan Mahotsav - ",
      rightLight3: "12:39 PM during Vijaya Muhurat",
      leftBold4: "Program Sponsor - ",
      rightLight4: "Shri Rajendra Ji Mehta & Family (Mumbai)",
      link:"https://app.sribrahmrishiashram.org/devotee/login?eventId=19aae3ae-a742-4693-999e-f13a0e83950c"
    },
    {
      id: 1,
      image: image2,
      bigText: "Shri Mahashivratri Mahotsav",
      // eventName: "Name of Event",
      date: "8th March,2024",
      location: "Bangkok",
      boxMonth: "March",
      boxDate: "16",
      eventDesc1:
        "A divine experience of Shivatva (the state of being Shiva) in the presence of Sri Sidheshwar Brahmarishi Gurudev",
      // boxWeek: "tue",
      eventDesc2:"Mahashivratri is a special day celebrated to mark the wedding of Lord Shiva and Maa Parvati. People across India observe this day with fasting, prayers, and meditation. It's a time to seek blessings for harmony in relationships, spiritual growth, and peace of mind.",
      eventDesc3:"On this auspicious night, it's believed that Lord Shiva performs his divine dance, the Tandava. It's a time to honour the union of Shiva and Parvati and to reflect on our own spiritual journey with devotion and contemplation.",
      leftBold1: "Kaal Sarp Dosh Nivaran Poojan - ",
      rightLight1: "10 AM onwards",
      leftBold2: "Maha Rudrabhishek - ",
      rightLight2: "6 PM Onwards",
      leftBold3: "Venue - ",
      rightLight3: "Sri Sidheshwar Tirth, Sri Brahmarishi Ashram, near Tirupati",
      link:"https://app.sribrahmrishiashram.org/devotee/login?eventId=1cb163f2-04cb-42fe-bf02-05bbf3da2b5c"
    },
    {
      id: 2,
      image: image3,
      bigText: "Asia Tour (Brahma Sparsh – A Divine Touch) ",
      // eventName: "Name of Event",
      date: "12th March to 30th March, 2024",
      location: "Kuala Lumpur",
      boxMonth: "March",
      boxDate: "20",
      // boxWeek: "tue",
      leftBold1: "Dubai - ",
      rightLight1: " 12 to 15 March, 2024",
      leftBold2: "Bangkok - ",
      rightLight2: " 17 to 19 March, 2024",
      leftBold3: "Kuala Lumpur - ",
      rightLight3: " 21 to 24 March, 2024",
      leftBold4: "Guangzhou (China) - ",
      rightLight4: " March 29 to April 1 2024",
      // note: "* The venues, timings, and other details of the Asia Tour programs will be displayed here very soon.",
      link:"https://app.sribrahmrishiashram.org/devotee/login?eventId=14024a87-763c-42ae-b27c-2d686a52e49d"
    },
    {
      id: 3,
      image: image4,
      bigText: "Africa Tour (Brahma Sparsh – A Divine Touch)",
      // eventName: "Name of Event",
      date: "22nd May to 4th June, 2024",
      location: "Guangzhou",
      boxMonth: "March",
      boxDate: "25",
      // boxWeek: "tue",
      leftBold1: "Kampala - ",
      rightLight1: "22 to 25 May, 2024",
      leftBold2: "Nairobi - ",
      rightLight2: "27 to 30 May, 2024",
      leftBold3: "Arusha - ",
      rightLight3: "1 to 4 June, 2024",
      note: "*The venues, timings, and other details of the Africa Tour programs will be displayed here very soon.",
    },
  ];

  return (
    <div className="eventsHomePage">
      <div className="eventsHomePage_wrapper">
        <div className="eventsHomePage_wrapper_right">
          {/* <div className="eventsHomePage_wrapper_right_content">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Events
            </motion.h2>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <Button btn_text="See all events" />
              <h2 className="eventSec_second_heading">Upcoming Events</h2>
            </motion.div>
          </div> */}
          {/* <motion.div> */}
          {/* <Button btn_text="See all events" /> */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="eventSec_second_heading"
          >
            Upcoming Events with Sri SiddhGuru
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="eventSec_second_text"
          >
            Stay updated on Sri SiddhGuru's upcoming transformative gatherings
            and spiritual events.
          </motion.div>
          {/* </motion.div> */}
        </div>

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
              eventDesc1={item.eventDesc1}
              eventDesc2={item.eventDesc2}
              eventDesc3={item.eventDesc3}
              leftBold1={item.leftBold1}
              leftBold2={item.leftBold2}
              leftBold3={item.leftBold3}
              leftBold4={item.leftBold4}
              rightLight1={item.rightLight1}
              rightLight2={item.rightLight2}
              rightLight3={item.rightLight3}
              rightLight4={item.rightLight4}
              note={item.note}
              link={item.link}
            />
          ))}
        </div>
        {/* <div className="eventsHomePage_wrapper_previous">
          <motion.h2
            // ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="previousEvent_heading"
          >
            Previous Events
          </motion.h2>
          <div className="eventsHomePage_wrapper_previous_wrapper">
            {prevEventData.map((item, index) => (
              <EventHomeVideoItem key={index} {...item} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default EventsHomePage;
