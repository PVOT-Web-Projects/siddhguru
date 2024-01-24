import InnerPageCommonHeading2 from "../../components/InnerPageCommonHeading2/InnerPageCommonHeading2";
import LeftRIghtImageContent from "../../components/leftRightImageContent/LeftRightImageContent";
import image1 from "../../images/visionImage1.png";
import image2 from "../../images/visionImage2.png";
import image3 from "../../images/visionImage3.png";
import image4 from "../../images/visionImage4.png";
import "./vision.scss";

const visionData = [
  {
    id: "anant_diksha",
    img: image1,
    title: "Anant Diksha",
    text: "Immerse yourself in a transformative journey with Anant Diksha, an extraordinary initiation into the realms of spiritual wisdom guided by Siddhguru. In ancient times, telepathy was used for communication, as seen when Sanjay narrated Mahabharat to Dhritrasht. Today, distance healing reflects the power of connections and energy, regardless of physical proximity. ",
    text2:
      "Anant Diksha is a form of Digital Diksha that mirrors the concept of getting the blessing of gurudev in any corner of the world. By registering, you become a part of our community, receiving Gurudev's blessings. It's like having a personal mentor digitally extend profound guidance. This experience makes Siddhguru's teachings vivid, fostering a deep connection between the seeker and divine wisdom. Feel the transformative power of spiritual guidance at your fingertips, seamlessly integrating sacred teachings into the digital age.",
  },
  {
    id: "siddhasana",
    img: image2,
    title: "Siddhasana",
    text: "A transformative journey with Siddheshwar: The Power of the Soul. Siddhasana is a flagship lifestyle program designed to guide you on a journey of self-discovery and reconnection to your authentic being through the profound influence of silence. This residential silence retreat unfolds over seven thoughtfully curated levels, each strategically designed to bring the untrained and distracted mind closer to a more fulfilling and conscious existence. At every stage, unique activities, guidelines, and purposes are introduced, creating a holistic experience that resonates with the individual at their core. At the culmination of each level, participants often express a heightened sense of satisfaction and depart with a profound sense of happiness, having rediscovered the authentic essence within themselves.",
  },
  {
    id: "ashram",
    img: image3,
    title: "Ashram",
    text: "Journey into the sacred embrace of Siddhguru's Ashram,located in the heart of tirupati a pious place of pilgrimage, surrounded by hills.A spiritual haven that transcends the ordinary and opens doors to solace and enlightenment. It is a peaceful oasis, a respite from the hustle of daily life, where the air is thick with tranquillity and the atmosphere resonates with divine energy. Step into a space where the noise of the world fades away and a gentle spiritual breeze guides you towards inner peace. Unveil the sanctity of this spiritual abode, where every corner echoes the wisdom of Siddhguru and every moment is an opportunity for enlightenment and spiritual nourishment.(Read More)",
  },
  {
    id: "world_spiritual_forum",
    img: image4,
    title: "World Spiritual Forum",
    text: "World Spiritual Forum, is a space that bridges the distances between seekers worldwide. You can call it an energy centre or a cosmic conference where people from different corners of the globe unite in a shared quest for divine wisdom. It is a virtual meeting point where the collective energy of spirituality flows seamlessly across continents. Through the World Spiritual Forum, Siddhguru's vision resonates far and wide, connecting hearts and minds in a shared exploration of higher consciousness. It's a platform that amplifies the universal nature of spiritual seeking, proving that divine wisdom knows no geographical boundaries.",
  },
];

const Vision = () => {
  return (
    <div className="vision">
      <InnerPageCommonHeading2 heading={"Vision"} textColor={"#FF9900"} />
      <div className="leftRightImageContent">
        {visionData.map((item, index) => (
          <LeftRIghtImageContent
            key={index}
            {...item}
            index={index}
            titleColor={"#FF9900"}
          />
        ))}
      </div>
    </div>
  );
};
export default Vision;
