import TextSection from "../textSection/TextSection";
import mainTabImage1 from "../../images/mainTab1.png";
import mainTabImage2 from "../../images/mainTab2.png";
import mainTabImage3 from "../../images/mainTab3.png";
import theSaintImage1 from "../../images/Life in a Nutshell.jpg";
import theSaintImage2 from "../../images/Sadhana & Kundalini Invocation.jpg";
import theSaintImage3 from "../../images/Siddhis-and-Nidhis.jpg";
import theSaintImage4 from "../../images/theSaintImage4.png";
import image1 from "../../images/Divine Touch (Digital Diksha).jpg";
import image2 from "../../images/Siddhasana.jpg";
import image3 from "../../images/Ashram.jpg";
import image4 from "../../images/World-Spiritual-Forum.jpg";
import wisdomImage from "../../images/Miracles of Vedic Science.jpg";
import "./tabSection.scss";
import { useState } from "react";
import LeftRIghtImageContent from "../leftRightImageContent/LeftRightImageContent";
import arrow from "../../images/downArrow.svg";

const theSaintData = [
  {
    id: "life_of_nutshell",
    index: 0,
    img: theSaintImage1,
    title: "Sri Siddhguru",
    text: "Full of compassion, love, humility, and simplicity, Sri Brahmrishi Siddhguru Gurudev is one of the most revered saints of our age. ",
    text2:
      "Sri Siddhguru follows the thousands of years old tradition of spiritual discipline and meditation regime (Sadhana) of ancient sages from India. He has achieved the pinnacle of Sadhana, invoking all his Kundalini Chakras (the centers of divine energy within our body) and acquiring eight Siddhis (supreme spiritual powers) mastered by our ancient sages.",
    text3:
      "Once you create a spiritual bond with Sri Siddhguru, he acts as a catalyst to bring peace and harmony to your life in ways beyond the comprehension of the limited capacity of our minds.  He has the divine ability to transform your life even when he is thousands of miles away.",
  },
  {
    id: "kundalini",
    index: 1,
    img: theSaintImage2,
    title: "Kundalini",
    text: "Kundalini is a powerful spiritual energy tucked away within every one of us that remains dormant until awakened. One reaches the pinnacle of spirituality by invoking all eight Kundalini Chakras, which can take many lives. Gurudev was born with all his eight Kundalini Chakras invoked. There are just a few living saints that have accomplished this virtually impossible spiritual state of this super divine consciousness. Most have chosen to distance themselves from fellow human beings. However, Siddhguru chose to use his divine energy to alleviate our sufferings and bring inner peace and happiness to our lives. ",
    text2:
      "We must pay for our karmic debt, so we’ll face challenges in our lives. Gurudev gives us the strength to overcome those challenges calmly.",
  },
  {
    id: "asht_siddhi's_&_nav_nidhis",
    index: 2,
    img: theSaintImage3,
    title: "Asht Siddhi’s & Nav Nidhis",
    text: "There are eight Siddhis. To acquire all eight Siddhis, one must practice and master 17868 Vidhis.",
    text2:
      "In Siddhguru’s own words, “I acquired all those Siddhis because of the grace of my Guru Devraha Baba, who was the most revered saint of recent times.",
    text3:
      "“I was born with three Siddhis already acquired.  They came with my birth. Baba helped me acquire the remaining Siddhis. That required me to do thousands of Vidhis. With Baba’s encouragement and help, I completed all remaining Siddhis in eleven years and eight months.”",
    text4:
      "Gurudev has also attained nine Nidhis -the divine supernatural treasures.",
    text5:
      "From the experiences of Siddhguru’s followers, you’ll see that Siddhguru has manifested himself in ways that seem impossible to help those in utterly desperate situations using these divine energies.",

    // descriptiontitle1: "Asht Sidhi -",
    // descriptiontext1:
    //   "अणिमा , महिमा, लघिमा, गरिमा, प्राप्ति, प्राकाम्य, इशित्व, वशित्व  पद्म निधि, महापद्म निधि, नील निधि, मुकुंद निधि, नंद निधि, मकर निधि, कच्छप निधि, 8. शंख निधि  खर्व निधि",

    // descriptiontitle2: "Nav Nidhi - ",
    // descriptiontext2:
    //   "पद्म निधि, महापद्म निधि, नील निधि, मुकुंद निधि, नंद निधि, मकर निधि, कच्छप निधि, 8. शंख निधि  खर्व निधि",

    // conclution:
    //   "Gurudev has always practised these Vedic powers for the protection of others and will continue to do so.",
  },
  // {
  //   id: "mission",
  //   index: 3,
  //   img: theSaintImage4,
  //   title: "Mission",
  //   text: "Service to humanity is the best work of life - Siddhguru",
  //   descriptiontitle1:
  //     "Siddhguru commits to the service of humanity by sharing knowledge that liberates hearts and empowers every individual. It's a dedicated journey where Siddhguru tirelessly works, akin to a compassionate friend extending a helping hand to those facing challenges. His mission acts as a guiding beacon, illuminating the way toward an infinite ocean of divine compassion. This compassion is an expansive sea of solace and understanding where everyone can find comfort. Siddhguru's endeavors go beyond imparting wisdom; they are about uplifting the spirits of the suffering masses, embodying a profound service to humanity that extends a compassionate embrace to all.",
  // },
];
const visionData = [
  {
    id: "anant_diksha",
    img: image1,
    title: "Divine Touch (Digital Diksha)",
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
    title: "Sri Siddhguru",
  },
  {
    title: "Sadhana & Kundalini Invocation",
  },
  {
    title: "Siddhis and Nidhis",
  },
  // {
  //   title: "Mission",
  // },
];
const tabData2 = [
  {
    title: "Divine Touch (Digital Diksha)",
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
  const [tabContent1, setTabContent1] = useState(0);
  const [tabContent2, setTabContent2] = useState(0);
  const [tabContent3, setTabContent3] = useState(0);
  const [tabContent1Mobile, setTabContent1Mobile] = useState(false);
  const [tabContent2Mobile, setTabContent2Mobile] = useState(false);
  const [tabContent3Mobile, setTabContent3Mobile] = useState(false);

  const handleTab1 = () => {
    setActiveMainTab("tab1");
  };
  const handleTab2 = () => {
    setActiveMainTab("tab2");
  };
  const handleTab3 = () => {
    setActiveMainTab("tab3");
  };
  const handleTab1Mobile = () => {
    setTabContent1Mobile(!tabContent1Mobile);
  };
  const handleTab2Mobile = () => {
    setTabContent2Mobile(!tabContent2Mobile);
  };
  const handleTab3Mobile = () => {
    setTabContent3Mobile(!tabContent3Mobile);
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
              <div className="mainTab_name">Sri Siddhguru</div>
            </div>
            <div
              className={`${
                activeMainTab === "tab2" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab2}
            >
              <img src={mainTabImage2} alt="mainTab" />
              <div className="mainTab_name">Mission</div>
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
                    className={`${tabContent1 === index ? "active" : ""}`}
                    onClick={() => setTabContent1(index)}
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
                    className={`${tabContent2 === index ? "active" : ""}`}
                    onClick={() => setTabContent2(index)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeMainTab === "tab3" && (
            <div className="tabs">
              <ul className="thirdTabTitle">
                {tabData3.map((item, index) => (
                  <li
                    key={index}
                    className={`${tabContent3 === index ? "active" : ""}`}
                    onClick={() => setTabContent3(index)}
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
                tabContent1 === index && (
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
                tabContent2 === index && (
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
                tabContent3 === index && (
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
                Sri Siddhguru
              </div>
            </div>
            {tabContent1Mobile &&
              theSaintData.map((item, index) => (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              ))}
            <div className="viewmore" onClick={handleTab1Mobile}>
              {tabContent1Mobile ? "View Less" : "View More"}
              {tabContent1Mobile ? (
                <img src={arrow} alt="arrow" className="showLess" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage2} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text">Mission</div>
            </div>
            {tabContent2Mobile === true &&
              visionData.map((item, index) => (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              ))}
            <div className="viewmore" onClick={handleTab2Mobile}>
              {tabContent2Mobile ? "View Less" : "View More"}
              {tabContent2Mobile ? (
                <img src={arrow} alt="arrow" className="showLess" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage3} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text">
                Core Wisdom
              </div>
            </div>
            {tabContent3Mobile === true &&
              wisdomData.map((item, index) => (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              ))}
            <div className="viewmore" onClick={handleTab3Mobile}>
              {tabContent3Mobile ? "View Less" : "View More"}
              {tabContent3Mobile ? (
                <img src={arrow} alt="arrow" className="showLess" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabSection;
