import { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../../components/CardItem/CardItem";
import "./events.scss";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import EventsHomePage from "../../components/EventsHomePage/EventsHomePage";
import FormHomePage from "../../components/Form_homePage/FormHomePage";
import FullWidthImageSec from "../../components/fullWidthImageSec/FullWidthImageSec";
import fullWidthImage from "../../images/fullWidthImage1.png";
import Spinner from "../../components/spinner/Spinner";
const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://siddhguru.pvotdesigns.xyz//wp-json/wp/v2/posts/?_embed")
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="events">
      <InnerPageCommonHeading heading={"Event"} />
      <InnerPageCommonText
        text1={
          "Keep an eye on the horizon for the upcoming events that pulsate with the divine energy of Siddhguru. We are your portal to a world of spiritual gatherings, engaging workshops, and joyous celebrations designed to nurture unity and foster spiritual growth. It's like a vibrant calendar, where each event is a unique opportunity to connect with the profound teachings of Siddhguru and experience the transformative power of spiritual communion. Whether it's a spiritual workshop to deepen your understanding or a joyous celebration that uplifts your spirits, each event on this page is a doorway to an enriched spiritual journey. Your journey to spiritual growth and unity awaits at the upcoming events."
        }
      />
      <EventsHomePage />
      <FullWidthImageSec
        imageUrl={fullWidthImage}
        text={
          "As Gurudev always says there are 3 stages of everyone's life - “Learning; Learning and Earning; Learning, Earning and Returning”"
        }
      />
      {loading ? (
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
      )}
      <FormHomePage />
    </div>
  );
};
export default Events;
