import theSaintImage1 from "../../images/saintMain.png";
import theSaintImage2 from "../../images/vedicExp.jpg";
import SiddhasanaItem from "../siddhasanaItem/SiddhasanaItem";
import "./eventLeftRight.scss"

const homepageLeftRightData = [
  {
    image: theSaintImage1,
    heading: "Who is Sri Siddhguru?",
    text1:
      "Describing Sri Siddhguru is like attempting to capture the essence of a fragrance in words—an experience transcending language. His divine aura and the energy he exudes are beyond mere description. When you are in his presence, you feel an overwhelming sense of divinity, a feeling that is both exhilarating and soothing.",
    text2:
      "Sri Siddhguru's journey to spiritual mastery, achieved through Vedic science, is a testament to his extraordinary capabilities. His life’s work has been to harness this divine energy to transform lives, offering an experience that surpasses the limits of our intellect.    ",
  },
  // {
  //   image: theSaintImage2,
  //   heading: "Miraculous Beginnings and Divine Journey",
  //   text1:
  //     "Sri Siddhguru's spiritual path began under miraculous circumstances during his early years. Under the guidance of the revered saint Yogiraj Devraha Baba, who foresaw his incredible potential, Siddhguru was nurtured in the sacred environment of an ashram. Devrah Baba's prophecy—that Siddhguru would reach unparalleled spiritual heights and use his divine energy to serve humanity—has come true. Today, Siddhguru is dedicated to his profound mission of uplifting lives through the transformative power of Vedic science.",
  //   text2:
  //     "From a young age, Siddhguru demonstrated extraordinary abilities, effortlessly reciting the Gita, Vedas, Puranas, Upanishads, and Agam. At the ashram, he engaged in intense spiritual practices, guided by his guru, to attain all eight Siddhis—the divine superpowers that only a few saints have ever achieved.",
  //   text3:
  //     "His spiritual journey then led him to the solitude of the Himalayas, where he undertook rigorous spiritual practices, including prolonged periods without food and water. After reaching the pinnacle of spirituality, he returned to the mortal world, bringing his divine powers to serve humanity.",
  //   // list1: "He can elevate your soul to HIGHER CONSCIOUSNESS",
  //   // list2: "He can protect you and your family through DIVINE POWERS      ",
  //   // list3: "He can change the Disha & Dasha of your life through VEDIC WISDOM",
  // },
];

const EventLeftRight = () => {
  return (
    <div className="eventLeftRight">
      {homepageLeftRightData.map((item, index) => (
        <SiddhasanaItem
          key={index}
          image={item.image}
          heading={item.heading}
          text1={item.text1}
          text2={item.text2}
          list1light={item.list1}
          list2light={item.list2}
          list3light={item.list3}
        />
      ))}
    </div>
  );
};
export default EventLeftRight;
