import theSaintImage1 from "../../images/saintMain.png";
import SiddhasanaItem from "../siddhasanaItem/SiddhasanaItem";

const homepageLeftRightData = [
  {
    image: theSaintImage1,
    heading: "Experience the miracles of Vedic Science with Sri Siddhguru",
    text1:
      "Sri Siddhguru has achieved supreme consciousness to unlock the immense potential of Vedic science. In the newly created WhatsApp channel, Sri Siddhguru will quench your curiosity about Vedic science and reveal its mysteries and miracles. The true miracle for hundreds of thousands of people has been that their spiritual bond with Sri Siddhguru has transformed their lives—for many in extraordinary ways. ",
    text2:
      "Join Our WhatsApp Channel! Connect deeply with Sri Siddhguru and elevate your mind and soul to new heights. Click here to begin your spiritual journey today.",
  },
];

const HomepageLeftRight = () => {
  return (
    <>
      {homepageLeftRightData.map((item, index) => (
        <SiddhasanaItem
          key={index}
          image={item.image}
          heading={item.heading}
          text1={item.text1}
          text2={item.text2}
        />
      ))}
    </>
  );
};
export default HomepageLeftRight;
