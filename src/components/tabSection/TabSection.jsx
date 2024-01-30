import TextSection from "../textSection/TextSection";
import mainTabImage1 from "../../images/mainTab1.png";
import mainTabImage2 from "../../images/mainTab2.png";
import mainTabImage3 from "../../images/mainTab3.png";
import theSaintImage1 from "../../images/theSaintImage1.png";
import theSaintImage2 from "../../images/theSaintImage2.png";
import theSaintImage3 from "../../images/theSaintImage3.png";
import theSaintImage4 from "../../images/theSaintImage4.png";
import image1 from "../../images/visionImage1.png";
import image2 from "../../images/visionImage2.png";
import image3 from "../../images/visionImage3.png";
import image4 from "../../images/visionImage4.png";
import wisdomImage from "../../images/coreWisdomImage.png";
import "./tabSection.scss";
import { useState } from "react";
import LeftRIghtImageContent from "../leftRightImageContent/LeftRightImageContent";

const theSaintData = [
  {
    id: "life_of_nutshell",
    index: 0,
    img: theSaintImage1,
    title: "Life in a Nutshell",
    text: "Dive into the incredible life story of Siddhguru, a journey marked by extraordinary events and divine moments that shaped his existence. It all began with his miraculous birth in the holy land of Bharata, filled with divine interventions that unfolded from a very young age. At just nine months old, his parents sought help from the revered Shri Devraha Baba when Siddhguru faced a critical health situation. To everyone's amazement, Devraha Baba recognized something special in the child, declaring him an incarnation of the Divine Spirit sent to bring spirituality to the world. The story then takes us to Siddhguru's upbringing under Devraha Baba's guidance, where silent introspection and deep spiritual exploration became the core of his existence for nearly eleven years.",
  },
  {
    id: "kundalini",
    index: 1,
    img: theSaintImage2,
    title: "Kundalini",
    text: "Discover the fascinating world of Kundalini awakening, a powerful spiritual energy tucked away within every one of us. Siddhguru's expertise in unlocking the secrets of Kundalini is like a guidebook, unveiling the incredible potential hidden within each seeker. The teachings of Gurudev are like a deep dive into your inner self.All the Seven chakras of Gurudev were activated by birth. Siddhguru's mastery in navigating this inner realm is like a roadmap, showing how this energy can be awakened, unleashing a profound force for personal growth and spiritual evolution. It's like discovering a hidden treasure chest within yourself, waiting to be explored.",
  },
  {
    id: "asht_siddhi's_&_nav_nidhis",
    index: 2,
    img: theSaintImage3,
    title: "Asht Siddhi’s & Nav Nidhis",
    text: "Discover the amazing spiritual treasures Siddhguru holds, known as Nav Nidhis and Asht Siddhis. They are like magical keys to celestial vaults full of divine wealth and blessings. Gurudev doesn't just have treasures; he possesses rare spiritual attainments, the Asht Siddhis, something only a few saints achieve, like those in the Himalayas. Gurudev's journey to attaining these is a fascinating tale he joyfully shares. It's like he's been given the keys to an otherworldly treasure trove! Every glimpse of Gurudev has the power to change your life's direction and destiny. So, dive into the divine blessings flowing through these channels and witness the magical impact of these sacred treasures Gurudev holds.It's like having a direct line to cosmic goodness and abundance!",

    descriptiontitle1: "Asht Sidhi -",
    descriptiontext1:
      "अणिमा , महिमा, लघिमा, गरिमा, प्राप्ति, प्राकाम्य, इशित्व, वशित्व  पद्म निधि, महापद्म निधि, नील निधि, मुकुंद निधि, नंद निधि, मकर निधि, कच्छप निधि, 8. शंख निधि  खर्व निधि",

    descriptiontitle2: "Nav Nidhi - ",
    descriptiontext2:
      "पद्म निधि, महापद्म निधि, नील निधि, मुकुंद निधि, नंद निधि, मकर निधि, कच्छप निधि, 8. शंख निधि  खर्व निधि",

    conclution:
      "Gurudev has always practised these Vedic powers for the protection of others and will continue to do so.",
  },
  {
    id: "mission",
    index: 3,
    img: theSaintImage4,
    title: "Mission",
    text: "Service to humanity is the best work of life - Siddhguru",
    descriptiontitle1:
      "Siddhguru commits to the service of humanity by sharing knowledge that liberates hearts and empowers every individual. It's a dedicated journey where Siddhguru tirelessly works, akin to a compassionate friend extending a helping hand to those facing challenges. His mission acts as a guiding beacon, illuminating the way toward an infinite ocean of divine compassion. This compassion is an expansive sea of solace and understanding where everyone can find comfort. Siddhguru's endeavors go beyond imparting wisdom; they are about uplifting the spirits of the suffering masses, embodying a profound service to humanity that extends a compassionate embrace to all.",
  },
];
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
const wisdomData = [
  {
    // id: "anant_diksha",
    img: wisdomImage,
    title: "Miracles of Vedic Science",
    text: "During his sojourns in the Himalayas, Siddhguru Sri Siddheshwar Brahmrishi Gurudev undertook onerous Tapasya to unravel the secrets of Vedic Science. He developed a keen interest in Vedic Science and attained mastery over that sacred knowledge. A pupil of masters such as Maha Tapasvi Siddhiraj Pragyachakshuji and Brahmrishi Devraha Baba, Sri Siddhguru learned Vedic Science to heal and help people seeking his support.",
    text2:
      "The ancient wisdom of Vedic Science offers us a profound understanding of the interconnectedness between an individual, the cosmos, and the Parmatma. It suggests a holistic approach to life that delves into the metaphysical nature of a living being.",
  },
];

const tabData1 = [
  {
    title: "Life in a Nutshell",
  },
  {
    title: "Sadhana & Kundalini Invocation",
  },
  {
    title: "Siddhis and Nidhis",
  },
  {
    title: "Mission",
  },
];
const tabData2 = [
  {
    title: "Anant Diksha",
  },
  {
    title: "Siddhasana",
  },
  {
    title: "Ashram",
  },
  {
    title: "World Spiritual Forum",
  },
];
const tabData3 = [
  {
    title: "Miracles of Vedic Science",
  },
];

const TabSection = () => {
  const [activeMainTab, setActiveMainTab] = useState("tab1");
  const [tabContent, setTabContent] = useState(0);
  console.log(tabContent);

  const handleTab1 = () => {
    setActiveMainTab("tab1");
  };
  const handleTab2 = () => {
    setActiveMainTab("tab2");
  };
  const handleTab3 = () => {
    setActiveMainTab("tab3");
  };
  return (
    <div className="tabSection">
      <div className="tabSection_wrapper">
        <TextSection />
        <div className="mainTab">
          <div className="mainTab_wrapper">
            <div
              className={`${
                activeMainTab === "tab1" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab1}
            >
              <img src={mainTabImage1} alt="mainTab" />
              <div className="mainTab_name">The Saint</div>
            </div>
            <div
              className={`${
                activeMainTab === "tab2" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab2}
            >
              <img src={mainTabImage2} alt="mainTab" />
              <div className="mainTab_name">Vision</div>
            </div>
            <div
              className={`${
                activeMainTab === "tab3" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab3}
            >
              <img src={mainTabImage3} alt="mainTab" />
              <div className="mainTab_name">Core Wisdom</div>
            </div>
          </div>
        </div>
      </div>
      <div className="innerTabs">
        <div className="innerTabs_wrapper">
          {activeMainTab === "tab1" && (
            <div className="tabs">
              <ul>
                {tabData1.map((item, index) => (
                  <li
                    key={index}
                    className={`${tabContent === index ? "active" : ""}`}
                    onClick={() => setTabContent(index)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeMainTab === "tab2" && (
            <div className="tabs">
              <ul>
                {tabData2.map((item, index) => (
                  <li
                    key={index}
                    className={`${tabContent === index ? "active" : ""}`}
                    onClick={() => setTabContent(index)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeMainTab === "tab3" && (
            <div className="tabs">
              <ul>
                {tabData3.map((item, index) => (
                  <li
                    key={index}
                    className={`${tabContent === index ? "active" : ""}`}
                    onClick={() => setTabContent(index)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={`innerTabs_data ${activeMainTab}`}>
          {activeMainTab === "tab1" &&
            theSaintData.map(
              (item, index) =>
                tabContent === index && (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                )
            )}
          {activeMainTab === "tab2" &&
            visionData.map(
              (item, index) =>
                tabContent === index && (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                )
            )}
          {activeMainTab === "tab3" &&
            wisdomData.map(
              (item, index) =>
                tabContent === index && (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                )
            )}
        </div>
      </div>
      <div className="tabSection_mobile">
        <div className="tabSection_mobile_wrapper">
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage1} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text">
                The Saint
              </div>
            </div>
            {activeMainTab === "tab1" &&
              theSaintData.map((item, index) => (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              ))}
            <div className="viewmore" onClick={handleTab1}>
              View more
              <img src="" alt="" />
            </div>
          </div>
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage2} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text">Vision</div>
            </div>
            {activeMainTab === "tab2" &&
              visionData.map((item, index) => (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              ))}
            <div className="viewmore" onClick={handleTab2}>
              View more
              <img src="" alt="" />
            </div>
          </div>
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage3} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text">
                Core Wisdom
              </div>
            </div>
            {activeMainTab === "tab3" &&
              wisdomData.map((item, index) => (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              ))}
            <div className="viewmore" onClick={handleTab3}>
              View more
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabSection;
