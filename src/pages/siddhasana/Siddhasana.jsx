import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import SiddhasanaItem from "../../components/siddhasanaItem/SiddhasanaItem";
import WeAreHere from "../../components/weAreHere/WeAreHere";
import image from "../../images/siddhasanaImage.png";
import "./siddhasana.scss";
import bannerImage from "../../images/siddhasanaBanner.jpg";
import mobilebannerImage from "../../images/siddhasanaBanner.jpg";

const siddhasanaData = [
  {
    delay: 0.1,
    image: image,
    heading: "WHAT",
    text1:
      "Siddheshwar - The Power of Soul (“Siddhasana”) is a flagship lifestyle program with the mission to help you rediscover your inner self and reconnect you to your authentic being by using the power of silence.",
    text2:
      "Siddhasana is a journey of awakening and the anchor is silence.  It is a residential silence retreat program structured to raise your consciousness from subconscious living to higher conscious living.",
    text3:
      "The program progresses over 7 levels, with each level carefully crafted to bring the untrained, distracted mind one step closer to a more complete living.",
    text4:
      "Each level features its own set of activities, guidelines, and purpose.  By the end of each program, participants often feel greater satisfaction and leave with a deeper sense of happiness.",
    text5:
      "Note: Siddhasana is a priceless program built and sustained purely by the labor of love.  There is absolutely no charge for participation at any residential retreat in India.",
  },
  {
    delay: 0.2,
    image: image,
    heading: "WHERE & WHEN",
    text1:
      "Siddheshwar - The Power of Soul “Siddhasana” programs are shared in the following ways:",
    text2:
      "The flagship residential retreats are held in the the beautiful and lush mountains of Tirupati, India, amidst the calm, therapeutic ambience of Sri Siddheshwar Tirth. ",
    text3:
      "The 3-day international retreats are conducted in different parts of the world.",
    text4:
      "The 2-hour sessions are conducted in-person at various conferences, organizations, and universities.",
    text5:
      "The online workshops are conducted worldwide. SIDDHASANA Residential Retreats are conducted every month in India",
    text6:
      "Siddhasana Workshops and sessions are organized throughout the year.",
  },
  {
    delay: 0.3,
    image: image,
    heading: "WHY",
    text1:
      "Stress, anxiety, anger, fear, guilt, hurt, sadness  and loneliness is stopping us from experiencing the true happiness, peace and love within us.",
    text2:
      "Siddheshwar The power of soul SIDDHASANA is here to hold your hand and take you through this journey of self empowerment by sharing the art of letting go all the emotional baggages and gift yourself a life full of freedom",
    text3:
      "We believe stress, tension,etc is a symptom of deteriorating soul power, Siddhasana resolves this through focused soul uplifting therapies with the pure element of silence.",
    text4: "“ Become Non Harming and Live and Let Live “",
    text5:
      "This program enhances your overall health and empowers you to become the *best version of yourself.*",
  },
  {
    delay: 0.4,
    image: image,
    heading: "WHOM",
    text1: "Siddhasana Retreat is open for all from the age of  25 years.",
    text2:
      "Siddhasana workshops are open for adults as well as children from the age of 14 years.",
    text3: "Let’s Login to ourselves and invest some time in silence",
  },
];

const Siddhasana = () => {
  return (
    <div className="siddhasana">
      {/* <InnerPageCommonHeading
        heading={"The Power of Soul: Siddhasana Retreats"}
      /> */}
      <InnerPageBanner image={bannerImage} mobileImage={mobilebannerImage} text={"Siddhasana"} />
      {/* <div className="siddhasana_wrapper">
        <div className="siddhasana_wrapper_content">
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
        <div className="siddhasana_wrapper_image">
          <img src={image} alt="siddhasana" />
        </div>
      </div> */}
      <div className="siddhasana_wrapper">
        {siddhasanaData.map((item, index) => (
          <SiddhasanaItem key={index} {...item} />
        ))}
      </div>
      <div className="border"></div>
      <WeAreHere />
    </div>
  );
};
export default Siddhasana;
