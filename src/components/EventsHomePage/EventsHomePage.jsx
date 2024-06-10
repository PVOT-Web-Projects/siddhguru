import EventHomePageItem from "./EventHomePageItem/EventHomePageItem";
import "./eventsHomePage.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import LanguageContext from "../language/Language";
import { useLocation } from "react-router-dom";
import usaEvent from "../../images/usaEventImg.png";
import reTreatEvent from "../../images/reTreatEventImg.JPEG";
import { HashLink } from "react-router-hash-link";

const EventsHomePage = ({
  heading,
  hindiHeading,
  content,
  hindiContent,
  knowMore,
}) => {
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get("https://siddhguru.pvotdesigns.xyz/wp-json/wp/v2/posts/?_embed")
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  // const featuredEventsData = [
  //   {
  //     id: 0,
  //     image: image1,
  //     bigText:
  //       "Sri Brahmeshwar Parshwanath Swarn Jain Mandir – 6th Annual Celebrations",
  //     // eventName: "Name of Event",
  //     date: "6th March,2024",
  //     location: "Dubai",
  //     boxMonth: "March",
  //     boxDate: "11",
  //     eventDesc1:
  //       'The auspicious moment for the Sri Brahmeshwar Parshvanath Swarna Jain Temple will be celebrated with the"Dhvajarohan Mahotsav."',
  //     eventDesc2:
  //       "The event will include the hoisting of the flag according to Jain rituals, followed by worship and, afterward, a feast offering the lovingly prepared meal, known as Swamivatsalya Bhojan Prasad.",
  //     // boxWeek: "tue",
  //     leftBold1: "18 Abhishek Poojan - ",
  //     rightLight1: "8:00 AM onwards",
  //     leftBold2: "Sattar Bhedi Poojan - ",
  //     rightLight2: "11:45 AM onwards",
  //     leftBold3: "Dhwajarohan Mahotsav - ",
  //     rightLight3: "12:39 PM during Vijaya Muhurat",
  //     leftBold4: "Program Sponsor - ",
  //     rightLight4: "Shri Rajendra Ji Mehta & Family (Mumbai)",
  //     link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=19aae3ae-a742-4693-999e-f13a0e83950c",
  //   },
  //   {
  //     id: 1,
  //     image: image2,
  //     bigText: "Shri Mahashivratri Mahotsav",
  //     // eventName: "Name of Event",
  //     date: "8th March,2024",
  //     location: "Bangkok",
  //     boxMonth: "March",
  //     boxDate: "16",
  //     eventDesc1:
  //       "A divine experience of Shivatva (the state of being Shiva) in the presence of Sri Sidheshwar Brahmarishi Gurudev",
  //     // boxWeek: "tue",
  //     eventDesc2:
  //       "Mahashivratri is a special day celebrated to mark the wedding of Lord Shiva and Maa Parvati. People across India observe this day with fasting, prayers, and meditation. It's a time to seek blessings for harmony in relationships, spiritual growth, and peace of mind.",
  //     eventDesc3:
  //       "On this auspicious night, it's believed that Lord Shiva performs his divine dance, the Tandava. It's a time to honour the union of Shiva and Parvati and to reflect on our own spiritual journey with devotion and contemplation.",
  //     leftBold1: "Kaal Sarp Dosh Nivaran Poojan - ",
  //     rightLight1: "10 AM onwards",
  //     leftBold2: "Maha Rudrabhishek - ",
  //     rightLight2: "6 PM Onwards",
  //     leftBold3: "Venue - ",
  //     rightLight3:
  //       "Sri Sidheshwar Tirth, Sri Brahmarishi Ashram, near Tirupati",
  //     link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=1cb163f2-04cb-42fe-bf02-05bbf3da2b5c",
  //   },
  //   {
  //     id: 2,
  //     image: image3,
  //     bigText: "Asia Tour (Brahma Sparsh – A Divine Touch) ",
  //     // eventName: "Name of Event",
  //     date: "12th March to 30th March, 2024",
  //     location: "Kuala Lumpur",
  //     boxMonth: "March",
  //     boxDate: "20",
  //     // boxWeek: "tue",
  //     leftBold1: "Dubai - ",
  //     rightLight1: " 12 to 15 March, 2024",
  //     leftBold2: "Bangkok - ",
  //     rightLight2: " 17 to 19 March, 2024",
  //     leftBold3: "Kuala Lumpur - ",
  //     rightLight3: " 21 to 24 March, 2024",
  //     leftBold4: "Guangzhou (China) - ",
  //     rightLight4: " March 29 to April 1 2024",
  //     // note: "* The venues, timings, and other details of the Asia Tour programs will be displayed here very soon.",
  //     link: "/events/asia-tour",
  //   },
  //   {
  //     id: 3,
  //     image: image4,
  //     bigText: "Africa Tour (Brahma Sparsh – A Divine Touch)",
  //     // eventName: "Name of Event",
  //     date: "22nd May to 4th June, 2024",
  //     location: "Guangzhou",
  //     boxMonth: "March",
  //     boxDate: "25",
  //     // boxWeek: "tue",
  //     leftBold1: "Kampala - ",
  //     rightLight1: "22 to 25 May, 2024",
  //     leftBold2: "Nairobi - ",
  //     rightLight2: "27 to 30 May, 2024",
  //     leftBold3: "Arusha - ",
  //     rightLight3: "1 to 4 June, 2024",
  //     note: "*The venues, timings, and other details of the Africa Tour programs will be displayed here very soon.",
  //   },
  // ];

  return (
    <div className="eventsHomePage">
      <div className="eventsHomePage_wrapper">
        <div className="eventsHomePage_wrapper_right">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="eventSec_second_heading"
          >
            {language === "en" ? heading : hindiHeading}
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="eventSec_second_text"
          >
            {language === "en" ? content : hindiContent}
          </motion.div>
          {/* </motion.div> */}
        </div>

        <div className="eventsHomePage_wrapper_left">
          <div class="eventHomeItem">
            <div class="eventHomeItem_wrapper">
              <div class="eventHomeItem_wrapper_left">
                <div class="eventItem_image">
                  <img src={usaEvent} alt="eventImage" />
                </div>
              </div>
              <div class="eventHomeItem_wrapper_right">
                <div class="eventItem_content">
                  <div class="eventItem_content_heading_wrap">
                    <h5>Brahm Sparsh - USA Tour 2024</h5>
                    <div class="date"> 23 June to 16 July, 2024</div>
                  </div>
                  <div class="event_content">
                    <p>
                      The beginning of a transformative journey toward spiritual
                      enlightenment and deeper self-awareness.
                    </p>
                    <p></p>
                    <p></p>
                  </div>
                  <div class="event_card_left_right_data">
                    <p>
                      <span>Closter, New Jersey - </span>23rd June 2024
                    </p>
                    <p>
                      <span>Orlando, Florida - </span>28th June 2024
                    </p>
                    <p>
                      <span>Casselberry, Florida - </span>29th June 2024
                    </p>
                    <p>
                      <span>Tampa, Florida - </span>30th June 2024
                    </p>
                    <p>
                      <span>Jacksonville, Florida - </span>2nd July 2024
                    </p>
                    <p>
                      <span>Irving, Texas - </span>13th July 2024
                    </p>
                    <p>
                      <span>Kent, Washington - </span>16th July 2024
                    </p>
                  </div>
                  <div class="eventCardBtn">
                    <div>
                      <a
                        class="button-60"
                        role="button"
                        href={
                          location.pathname === "/events"
                            ? `https://docs.google.com/forms/d/e/1FAIpQLSdurV5pH-ozkPUUAp18K0Bjl0RRNs_wUkmH9dGAFm371iUSdg/viewform`
                            : "#/events"
                        }
                      >
                        <span class="text">
                          {location.pathname === "/events"
                            ? "Register Now"
                            : "Learn More"}
                        </span>
                        <span>
                          {location.pathname === "/events"
                            ? "Register Now"
                            : "Learn More"}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eventHomeItem">
            <div class="eventHomeItem_wrapper">
              <div class="eventHomeItem_wrapper_left">
                <div class="eventItem_image">
                  <img src={reTreatEvent} alt="eventImage" />
                </div>
              </div>
              <div class="eventHomeItem_wrapper_right">
                <div class="eventItem_content">
                  <div class="eventItem_content_heading_wrap">
                    <h5>Spiritual Retreat in New York with Sri Siddhguru</h5>
                    <div class="date">4 July to 7 July, 2024</div>
                  </div>
                  <div class="event_content">
                    <p>
                      A transformative spiritual retreat in the divine presence
                      of ‘Sri Siddhguru’.
                    </p>
                    <p>
                      Embark on a journey to spiritual upliftment and
                      enlightenment.
                    </p>
                    <p></p>
                  </div>
                  <div class="event_card_left_right_data"></div>
                  <div class="eventCardBtn">
                    <div>
                      <a class="button-60" role="button" href="#/retreat">
                        <span class="text">Learn More</span>
                        <span>Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {knowMore && (
          <div class="eventCardBtn">
            {/* <div>
              <a class="button-60" role="button" href={`/events${knowMore}`}>
               
              </a>
            </div> */}
             <HashLink
           to={`/events${knowMore}`}
           className="button-60"
         >
           <span class="text">Know More About Siddhguru</span>
           <span>Know More About Siddhguru</span>
         </HashLink>
          </div>
          
        )}
      </div>
    </div>
  );
};
export default EventsHomePage;
