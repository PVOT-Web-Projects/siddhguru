// import { useEffect, useState } from "react";
// import axios from "axios";
// import CardItem from "../../components/CardItem/CardItem";
import "./events.scss";
import "../../components/EventsHomePage/eventsHomePage.scss";
// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
// import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import EventsHomePage from "../../components/EventsHomePage/EventsHomePage";
// import FormHomePage from "../../components/Form_homePage/FormHomePage";
// import FullWidthImageSec from "../../components/fullWidthImageSec/FullWidthImageSec";
// import fullWidthImage from "../../images/fullWidthImage1.png";
// import Spinner from "../../components/spinner/Spinner";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
// import bannerImage from "../../images/Events-Banners-D_2.jpg";
// import mobilebannerImage from "../../images/Events-Banners-M_2.jpg";
import AllVideoHome from "../../components/allVideoHome/AllVideoHome";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import videoPoster1 from "../../images/arrowImageCircle.svg";
import EventHomeVideoItem from "../../components/EventsHomePage/eventHomePageItem/EventHomePageVideoItem";
import { useContext } from "react";
import LanguageContext from "../../components/language/Language";

const prevEventData = [
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=mb25KuF80VA",
    name: "Shri Anand Mahotsav 2024",
  },
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=Z-Ch3fGy634",
    name: "Namaste Europe",
  },
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=BDjD65sTZpM",
    name: "Jan Kalyan Mahotsav 2023",
  },
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=8qpZUtUNwiA",
    name: "Sidheshwar Mahotsav 2023",
  },
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=1LM4oRJ2y-M",
    name: "Gurupurnima 2023",
  },
];
const prevEventHindiData = [
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=mb25KuF80VA",
    name: "श्री आनन्द महोत्सव 2024",
  },
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=Z-Ch3fGy634",
    name: "नमस्ते यूरोप 2023",
  },
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=BDjD65sTZpM",
    name: "जन कल्याण महोत्सव 2023",
  },
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=8qpZUtUNwiA",
    name: "सिद्धेश्वर महोत्सव 2023",
  },
  {
    image: videoPoster1,
    videoUrl: "https://www.youtube.com/watch?v=1LM4oRJ2y-M",
    name: "गुरुपूर्णिमा 2023",
  },
];

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const { language } = useContext(LanguageContext);
  // const [events, setEvents] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("https://siddhguru.pvotdesigns.xyz//wp-json/wp/v2/posts/?_embed")
  //     .then((response) => {
  //       setEvents(response.data);
  //       console.log(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <div className="events">
      {/* <InnerPageCommonHeading heading={"Event"} /> */}
      <InnerPageBanner
        image={
          "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916770/uvc8okabb5zulzjwu3f9.jpg"
        }
        mobileImage={
          "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916806/tsnuo6vqfijlm6vp6fey.jpg"
        }
        bigText={
          "Experience Miracles Unfold: Stay Updated on SiddhGuru's Events"
        }
        hindiBigText={
          "करें चमत्कारों का साक्षात्कार : गुरुदेव के आगामी कार्यक्रमों की जानकारी प्राप्त करें"
        }
        overlay={true}
      />
      {/* <InnerPageCommonText
        text1={
          "Keep an eye on the horizon for the upcoming events that pulsate with the divine energy of Siddhguru. We are your portal to a world of spiritual gatherings, engaging workshops, and joyous celebrations designed to nurture unity and foster spiritual growth. It's like a vibrant calendar, where each event is a unique opportunity to connect with the profound teachings of Siddhguru and experience the transformative power of spiritual communion. Whether it's a spiritual workshop to deepen your understanding or a joyous celebration that uplifts your spirits, each event on this page is a doorway to an enriched spiritual journey. Your journey to spiritual growth and unity awaits at the upcoming events."
        }
      /> */}
      <EventsHomePage />
      <div className="eventsHomePage_wrapper_previous">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="previousEvent_heading"
        >
          {language == "en" ? "Previous Events" : "पहले के कार्यक्रम"}
        </motion.h2>
        <div className="eventsHomePage_wrapper_previous_wrapper">
          {(language === "en" ? prevEventData : prevEventHindiData).map(
            (item, index) => (
              <EventHomeVideoItem key={index} {...item} />
            )
          )}
        </div>
      </div>
      {/* <FullWidthImageSec
        imageUrl={fullWidthImage}
        text={
          "As Gurudev always says there are 3 stages of everyone's life - “Learning; Learning and Earning; Learning, Earning and Returning”"
        }
      /> */}
      {/* {loading ? (
        <Spinner />
      ) : (
        <div className="cardList">
          {events?.map((item) => (
            <CardItem
              key={item.id}
              imageUrl={
                item._embedded["wp:featuredmedia"] &&
                item._embedded["wp:featuredmedia"][0].media_details.sizes.full
                  .source_url
              }
              title={item.title.rendered}
              description={item.excerpt.rendered}
            />
          ))}
        </div>
      )} */}
      {/* <FormHomePage /> */}
      <AllVideoHome />
    </div>
  );
};
export default Events;
