import lession from "../../images/lessons.svg";
import events from "../../images/events.svg";
import kriyaYoga from "../../images/kriyaYoga.svg";
import donation from "../../images/donation.svg";
import magazine from "../../images/magazine.svg";
import profile from "../../images/profile.svg";
import IconWithTextItem from "./IconWithTextItem";
import "./iconWithText.scss";
const iconWithTextData = [
  {
    image: lession,
    text: "Lessons subscription and renewals",
  },
  {
    image: events,
    text: "Event registrations",
  },
  {
    image: kriyaYoga,
    text: "Applying for Kriya Yoga",
  },
  {
    image: donation,
    text: "Donation",
  },
  {
    image: magazine,
    text: "Magazine subscription and access to the digital library",
  },
  {
    image: profile,
    text: "Managing profile",
  },
];

const IconWithText = () => {
  return (
    <div className="iconWithText">
      <div className="iconWithText_wrapper">
        {iconWithTextData.map((item, index) => (
          <IconWithTextItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default IconWithText;
