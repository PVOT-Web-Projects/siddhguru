import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import SiddhasanaItem from "../../components/SiddhasanaItem/SiddhasanaItem";
import WeAreHere from "../../components/weAreHere/WeAreHere";
import image1 from "../../images/Siddhasana_WHAT.jpg";
import image2 from "../../images/Siddhasana_WHERE & WHEN.jpg";
import image3 from "../../images/Siddhasana_WHY-min.jpg";
import image4 from "../../images/Siddhasana_WHOM.jpg";
import image5 from "../../images/how_image.jpeg";
import "./Siddhasana.scss";
// import bannerImage from "../../images/Siddhasana-D.jpg";
// import mobilebannerImage from "../../images/Siddhasana-M.jpg";
// import NewHeroSection from "../../components/newHeroSection/NewHeroSection";
// import bannerVideo from "../../images/Siddhasana Banner D.mp4";
// import mobilebannerVideo from "../../images/Siddhasana Banners M.mp4";

const SiddhasanaData = [
  {
    delay: 0.1,
    image: image1,
    heading: "WHAT",
    text1:
      "Siddheshwar - The Power of Soul “Siddhasana” is a flagship lifestyle program with the mission to help you rediscover your inner self and reconnect you to your authentic being by using the power of silence.",
    text2:
      "Siddhasana is a journey of awakening and the anchor is silence.  It is a residential silence retreat program structured to raise your consciousness from subconscious living to higher conscious living.",
    text3:
      "The program progresses over 7 levels, with each level carefully crafted to bring the untrained, distracted mind one step closer to a more complete life.",
    text4:
      "Each level features its own set of activities, guidelines, and purpose.  By the end of each program, participants often feel greater satisfaction and leave with a deeper sense of happiness.",
    text5:
      "Note: Siddhasana is a priceless program built and sustained purely by the labor of love.  There is absolutely no charge for participation at any residential retreat in India.",
  },
  {
    delay: 0.2,
    image: image2,
    heading: "WHERE & WHEN",
    text1:
      "Siddheshwar - The Power of Soul “Siddhasana” programs are shared in the following ways:",
    text2:
      "Siddhasana Residential Retreats are conducted every month in India. Also, its online/ offline workshops are regularly conducted worldwide - including New York, Dubai, Japan, France, Portugal, Sweden, London, Spain, Canada, Singapore, Hong Kong, Georgia, Australia, New Zealand, Netherlands, Denmark, Holland, Thailand, Brazil, Mauritius, Kenya, Fiji, and Tanzania.",
    // text3:
    //   "The flagship 7-day residential silence retreat program is conducted amidst the therapeutic calm ambience surrounded by the beautiful green mountains at the foothills of Tirupati, India at - Sri Siddheshwar Tirth.",
    // text4:
    //   "The 3-day international retreats are conducted in different parts of the world.",
    // text5:
    //   "The 2-hour sessions are conducted in-person at various conferences, organizations, and universities.",
    text6:
      "Online workshops are also arranged in different parts of the world.",
      list1bold:"The flagship 7-day residential silence retreat program",
      list1light:" is conducted amidst the therapeutic calm ambience surrounded by the beautiful green mountains at the foothills of Tirupati, India at - Sri Siddheshwar Tirth.",
      list2bold:"The 3-day international retreats",
      list2light:"are conducted in different parts of the world.",
      list3bold:"The 2-hour sessions",
      list3light:"are conducted in-person at various conferences, organizations, and universities.",
  },
  {
    delay: 0.3,
    image: image3,
    heading: "WHY",
    text1:
      "Stress, anxiety, anger, fear, guilt, hurt, sadness, and loneliness are stopping us from experiencing the true happiness, peace and love within us.",
    text2:
      "Siddheshwar - The Power of Soul “Siddhasana” is here to hold your hand and take you through this journey of self-empowerment by sharing the art of letting go of  all the emotional baggage and gifting yourself a life full of freedom",
    text3:
      "We believe stress, tension,etc is a symptom of deteriorating soul power, Siddhasana resolves this through focused soul-uplifting therapies with the pure element of silence.",
    text4:
      "Silence is the first step to beginning the mastery of your mind because it nurtures the seed to bring inner clarity to your thoughts, words, and actions.",
    text5: "“Become non-harming; live and let live!”",
    text6:
      "This program enhances your overall health and empowers you to become the BEST VERSION OF YOURSELF.",
  },
  {
    delay: 0.4,
    image: image4,
    heading: "WHOM",
    text1:
      "Siddheshwar - The Power of Soul “Siddhasana” program is perfectly suitable for school & university teachers, parents, doctors, engineers, doctors, IAS & Govt. Officials, lawyers & judges, entrepreneurs,  homemakers, working professionals, executives and CXO corporate leaders.",
    text2: "Siddhasana Retreat is open for all from the age of 25 years.",
    text3:
      "Siddhasana 2-HOUR workshops are open for adults as well as children from the age of 14 years.",
    text4: "Let’s log in to ourselves and invest some time in silence.",
  },
  {
    delay: 0.6,
    image: image5,
    heading: "HOW",
    text1:
      "The 7-day residential program and 3-day international program of Siddheshwar - The Power of Soul “Siddhasana” - are meticulously crafted with an eye towards re-awakening and re-balancing the essential parts of the body, mind, and soul, through the unique blend of carefully constructed programs.",
    list1: "Rhythmic and expressive therapies",
    list2: "Full body exercises",
    list3: "Various natural therapies",
    list4: "Balancing the 5 elements of the human body",
    list5: "Mindful activities",
    list6: "Siddheshwar Yoga, pranayama, and meditation",
    list7: "Breathing techniques",
    list8: "Satvic food",
    list9: "Becoming one with self and nature",
  },
];

const Siddhasana = () => {
  return (
    <div className="Siddhasana">
      {/* <InnerPageCommonHeading
        heading={"The Power of Soul: Siddhasana Retreats"}
      /> */}
      <InnerPageBanner
        image={
          "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916551/kaxxspeevylgt1fuzpd0.jpg"
        }
        mobileImage={
          "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916597/aukbvayksklsohye1fjn.jpg"
        }
        // text={"Siddhasana"}
        bigText={"SIDDHASANA"}
        bigText2={"THE RHYTHM OF LIFE"}
      />
      {/* <NewHeroSection deskVideo={bannerVideo} mobileVideo={mobilebannerVideo} /> */}
      {/* <div className="Siddhasana_wrapper">
        <div className="Siddhasana_wrapper_content">
          Embark on a transformative journey with Siddhasana, a flagship
          lifestyle programme guiding you through self-discovery and connection
          to your authentic self using the profound power of silence. Progress
          through seven carefully curated levels of this residential silence
          retreat, leaving each stage with heightened satisfaction and
          happiness. Experience Siddhasana through residential and international
          retreats, in-person sessions, and online workshops, making the
          programme accessible worldwide. This transformative journey not only
          releases emotional burdens but also fosters a life of freedom,
          emphasising the art of 'live and let live.' Open to participants over
          the age of 25, Siddhasana promotes overall health, empowering
          individuals to become their best selves. Join us in the serenity of
          silence, unlocking inner potential, and embracing a life filled with
          peace, joy, and self-empowerment.
        </div>
        <div className="Siddhasana_wrapper_image">
          <img src={image} alt="Siddhasana" />
        </div>
      </div> */}
      <div className="siddhasana_wrapper">
        {SiddhasanaData.map((item, index) => (
          <SiddhasanaItem key={index} {...item} />
        ))}
      </div>
      <div className="border"></div>
      <WeAreHere />
    </div>
  );
};
export default Siddhasana;
