// import TextSection from "../textSection/TextSection";
import mainTabImage1 from "../../images/mainTab1.png";
import mainTabImage2 from "../../images/mainTab2.png";
import mainTabImage3 from "../../images/mainTab3.png";
import theSaintImage1 from "../../images/Life in a Nutshell.jpg";
import theSaintImage2 from "../../images/Sadhana & Kundalini Invocation.jpg";
import theSaintImage3 from "../../images/Siddhis-and-Nidhis.jpg";
// import theSaintImage4 from "../../images/theSaintImage4.png";
import image1 from "../../images/Divine Touch (Digital Diksha).jpg";
import image2 from "../../images/Siddhasana.jpg";
import image3 from "../../images/Ashram.jpg";
import image4 from "../../images/World-Spiritual-Forum.jpg";
import wisdomImage1 from "../../images/Miracles of Vedic Science.jpg";
import wisdomImage2 from "../../images/spiritual.jpeg";
import wisdomImage3 from "../../images/socialWisdom.jpeg";
import wisdomImage4 from "../../images/professionalWisdom.jpeg";
import "./tabSectionNewNew.scss";
import { useState } from "react";
import LeftRIghtImageContent from "../leftRightImageContent/LeftRightImageContent";
import arrow from "../../images/downArrow.svg";
// import video1 from "../../images/tab1Image.mp4";
// import video2 from "../../images/tab2Image2.mp4";
// import video3 from "../../images/tab3Image2.mp4";
import BigHeadingSmallHeading from "../bigHeadingSmallHeading/BigHeadingSmallHeading";
import arrows from "../../images/arrow.svg";
import whiteArrow from "../../images/arrowWhite.svg";

const theSaintData = [
  {
    id: 0,
    data: [
      {
        id: "life_of_nutshell",
        index: 0,
        img: theSaintImage1,
        tagline:"",
        title: "Sri SiddhGuru",
        text: "Sri Brahmrishi SiddhGuru Gurudev, embodying compassion, love, humility, and simplicity, stands as a revered sage in our era. Adhering to ancient Indian spiritual practices, he has mastered all Kundalini Chakras and eight Siddhis, achieving supreme spiritual enlightenment. Establishing a spiritual connection with him can profoundly transform your life, bringing peace and harmony in ways beyond our understanding. He has the divine ability to transform our lives, breaking the barrier of distance.",
        itemIndex: 0,
      },
      {
        id: "kundalini",
        index: 1,
        img: theSaintImage2,
        tagline:"Sri SiddhGuru",
        title: "Kundalini",
        text: "Kundalini, a dormant spiritual energy within us, reaches its peak through awakening all Chakras, a feat rarely achieved and often taking multiple lifetimes. Gurudev, uniquely born with all Chakras awakened, is among the few saints to attain such a divine consciousness. Unlike other sages who retreat from society, he uses his spiritual prowess to ease human suffering and enhance our inner peace and happiness. Additionally, he empowers us to navigate life's challenges with strength, helping us to settle our karmic debts.",
        itemIndex: 1,
      },
      {
        id: "asht_siddhi's_&_nav_nidhis",
        index: 2,
        img: theSaintImage3,
        tagline:"Sri SiddhGuru",
        title: "Siddhis",
        text: "SiddhGuru acquired all eight Siddhis, mastering 17,868 Vidhis with guidance from Guru Devraha Baba. Born with three Siddhis, he achieved the remaining through rigorous practice, completing them in under twelve years with Baba's support. Additionally, Gurudev has attained nine Nidhis, divine supernatural treasures. Followers testify to SiddhGuru's ability to manifest in extraordinary ways, using these divine energies to assist those in desperate situations, showcasing the profound impact of his spiritual mastery and compassion.",
        itemIndex: 2,
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        id: "anant_diksha",
        img: image1,
        tagline:"Mission",
        title: "Vision",
        text: "Sri SiddhGuru aims to revolutionize lives through Vedic science's hidden powers. Utilizing Brahm Shakti, he enables individuals to unlock their potential, elevate consciousness, and achieve unparalleled peace and harmony. This transformation surpasses ordinary understanding, accessing profound awareness beyond our minds' limits. SiddhGuru's guidance enhances personal growth and links us to a broader, enlightened purpose, fostering a more awakened society.",
        itemIndex: 3,
      },
      {
        id: "siddhasana",
        img: image2,
        tagline:"Mission",
        title: "Siddhasana",
        text: "Siddhasana is a unique life-changing experience, focusing on self-discovery and reconnecting with your true self in silence. This retreat is structured into seven levels, each designed to help calm and focus your mind, leading to a more conscious and fulfilling life. With activities and guidance tailored to each stage, you'll deeply engage with your inner self. By the end of each level, participants typically feel deep satisfaction and joy, having found a closer connection to their authentic essence.",
        itemIndex: 4,
      },
      {
        id: "ashram",
        img: image3,
        tagline:"Mission",
        title: "Ashram",
        text: "Discover the serene SiddhGuru's Ashram near Tirupati, nestled among sacred hills. This spiritual sanctuary offers more than just solace; it's a place where tranquility meets divine energy, creating a peaceful retreat from everyday life. Here, the world's noise diminishes, replaced by a spiritual calm that leads you to inner peace. Experience the essence of SiddhGuru's wisdom in every corner, making every moment a chance for enlightenment and soulful rejuvenation.",
        itemIndex: 5,
      },
      {
        id: "world_spiritual_forum",
        img: image4,
        tagline:"Mission",
        title: "World Spiritual Forum",
        text: "The World Spiritual Forum brings together people from all over the world, sharing SiddhGuru's vision of reaching a higher consciousness. This global network shows that searching for spiritual truth is something everyone can relate to, no matter where they are. It proves that the journey towards self-realization and peace knows no borders.",
        itemIndex: 6,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        img: wisdomImage1,
        title: "Wisdom",
        tagline:"Core Wisdom",
        text: "Sri SiddhGuru emphasizes the importance of having a harmonious liaison between Adhyatmikta (Spirituality) and Adhunikta in our lives. He encourages us to excel in all three phases of life – learning, earning and ultimately returning (to society) because service to humanity is the best work of life. Sri SiddhGuru imparts his wisdom not only through words but also by acting as a catalyst for positive changes in our lives through his divine energy.",
        itemIndex: 7,
      },
      {
        img: wisdomImage2,
        tagline:"Core Wisdom",
        title: "Spiritual Wisdom",
        text: "Happy moment – praise God; difficult moment – seek God; painful moment – trust God; every moment – thank God.",
        text2: "When our fate closes all doors, our faith opens new doors.",
        text3:
          "Our life is a gift from God. The way we live our life will be our return gift to God.",
        text4:
          "It is not a question of how powerful our God is but how powerful our faith is.",
        text5:
          "Man with intelligence has many questions; the man with surrender has all the answers.",
        text6: "Man cannot do God's work. God can but will not do man's work.",
        itemIndex: 8,
      },
      {
        img: wisdomImage3,
        tagline:"Core Wisdom",
        title: "Social Wisdom",
        text: "Service to humanity is the best work of life.",
        text2:
          "We understand less, explain more, and hence get entangled more and sorted less.",
        text3: "Be useful to others in life or society will not value you.",
        text4:
          "It is not important what you leave for your children. It is important what you leave in them.",
        text5:
          "Your life will serve in two ways – either as an example for others or as a warning for others.",
        itemIndex: 9,
      },
      {
        img: wisdomImage4,
        tagline:"Core Wisdom",
        title: "Professional Wisdom",
        text: "For Success in life, you need a combination of intelligence, hard work, focus, timing, and even luck.",
        text2:
          "Success is made of big things - it takes time; happiness is made of small things - it takes no time.",
        text3: "Try and fail, but never fail to try.",
        text4:
          "Experience is not what happened to you. It is what you do with what happened to you.",
        itemIndex: 10,
      },
    ],
  },
];


const tabData1 = [
  {
    title: "Sri SiddhGuru",
    id: 0,
  },
  {
    title: "Kudalini",
    id: 1,
  },
  {
    title: "Siddhis",
    id: 2,
  },
];
const tabData2 = [
  {
    title: "Vision",
    id: 3,
  },
  {
    title: "Siddhasana",
    id: 4,
  },
  {
    title: "Ashram",
    id: 5,
  },
  {
    title: "World Spiritual Forum",
    id: 6,
  },
];
const tabData3 = [
  {
    title: "Wisdom",
    id: 7,
  },
  {
    title: "Spiritual Wisdom",
    id: 8,
  },
  {
    title: "Social Wisdom",
    id: 8,
  },
  {
    title: "Professional Wisdom",
    id: 9,
  },
];

const TabSectionNew = () => {
  const [activeMainTab, setActiveMainTab] = useState("tab1");
  const [tabContent1, setTabContent1] = useState(0);
  const [tabContent2, setTabContent2] = useState(0);
  const [tabContent3, setTabContent3] = useState(0);
  const [tabContent1Mobile, setTabContent1Mobile] = useState(false);
  const [tabContent2Mobile, setTabContent2Mobile] = useState(false);
  const [tabContent3Mobile, setTabContent3Mobile] = useState(false);
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    // handleCountTab();
  };

  // const handleCountTab = () => {
  //   if (count < 2) {
  //     setActiveMainTab("tab1");
  //     console.log("tabChangesCount",count);
  //   }
  //   if (count > 2 && count < 5) {
  //     setActiveMainTab("tab2");
  //     console.log(count);
  //   }
  //   if (count > 5) {
  //     setActiveMainTab("tab3");
  //     console.log(count);
  //   }
  // };

  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    // handleCountTab();
  };
  console.log("count", count);
  console.log("activeTab", activeMainTab);

  const handleTab1 = () => {
    setActiveMainTab("tab1");
    setCount(0);
  };
  const handleTab2 = () => {
    setActiveMainTab("tab2");
    setCount(3);
  };
  const handleTab3 = () => {
    setActiveMainTab("tab3");
    setCount(7);
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
  // if (count > 0) {
  //   setActiveMainTab("tab1");
  // }
  return (
    <div className="tabSectionNewNew">
      <div className="tabSectionNewNew_wrapper">
        <BigHeadingSmallHeading
          bigHeading={"Sri Sidheshwar Brahmarishi SiddhGuru."}
          smallHeading={
            "Transforming Lives with the supreme power of Vedic Science."
          }
        />
        <div className="mainTab">
          <div className="mainTab_wrapper">
            <div
              className={`${
                activeMainTab === "tab1" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab1}
            >
              <img src={mainTabImage1} alt="mainTab" />
              <div className="mainTab_name">Sri SiddhGuru</div>
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
                    onClick={() => {
                      setTabContent1(index);
                      setCount(item.id);
                    }}
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
                    onClick={() => {
                      setTabContent2(index);
                      setCount(item.id);
                    }}
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
                    onClick={() => {
                      setTabContent3(index);
                      setCount(item.id);
                    }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={`innerTabs_data ${activeMainTab}`}>
          {theSaintData.map((item) =>
            item.data.map(
              (item, index) =>
                count === item.itemIndex && (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                )
            )
          )}
          {/* {visionData.map(
            (item, index) =>
              count === item.itemIndex && (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              )
          )}
          {wisdomData.map(
            (item, index) =>
              count === item.itemIndex && (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              )
          )} */}
        </div>
        <div className="arrows">
          <div className="arrows_wrapper">
            <button onClick={handlePrev} disabled={count === 0 ? true : false}>
              {count > 0 && (
                <>
                  <img src={arrows} alt="arrow" className="default left" />
                  <img src={whiteArrow} alt="arrow" className="hover left" />
                </>
              )}
              Prev
            </button>
            <button onClick={handleNext} disabled={count === 10 ? true : false}>
              Next
              {count < 10 && (
                <>
                  <img src={arrows} alt="arrow" className="default" />
                  <img src={whiteArrow} alt="arrow" className="hover" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* <div className="tabSection_mobile">
        <div className="tabSection_mobile_wrapper">
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage1} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text">
                Sri SiddhGuru
              </div>
            </div>
            {tabContent1Mobile && (
              <div className="mobileTab1">
                {theSaintData.map((item, index) => (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                ))}
              </div>
            )}
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
            {tabContent2Mobile === true && (
              <div className="mobileTab2">
                {visionData.map((item, index) => (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                ))}
              </div>
            )}
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
              <div className="tabSection_mobile_wrapper_tab_text ">Wisdom</div>
            </div>
            {tabContent3Mobile === true && (
              <div className="mobileTab3">
                {wisdomData.map((item, index) => (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                ))}
              </div>
            )}
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
      </div> */}
    </div>
  );
};
export default TabSectionNew;
