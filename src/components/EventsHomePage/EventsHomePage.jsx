import EventHomePageItem from "./EventHomePageItem/EventHomePageItem";
import image1 from "../../images/featuredEvent1.png";
import image2 from "../../images/featuredEvent2.png";
import image3 from "../../images/featuredEvent3.png";
import image4 from "../../images/featuredEvent4.png";
import "./eventsHomePage.scss"

const EventsHomePage = () => {
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
        <div className="eventsHomePage_wrapper_left">
          {featuredEventsData.map((item, index) => (
            <EventHomePageItem
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
            <h2>Events</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsHomePage;
