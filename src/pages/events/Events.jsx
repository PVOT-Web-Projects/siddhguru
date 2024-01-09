import { useEffect } from "react";
import axios from "axios";
const Events = () => {
  const [events, setEvents] = [];
  useEffect(() => {
    axios
      .get("https://siddhguru.pvotdesigns.xyz//wp-json/wp/v2/posts")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="events">
      <h1>Events</h1>
    </div>
  );
};
export default Events;
