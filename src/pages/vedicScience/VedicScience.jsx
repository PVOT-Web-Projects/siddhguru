import { useEffect, useState } from "react";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import axios from "axios";
import CardItem from "../../components/CardItem/CardItem";
import FullWidthImage from "../../components/fullWidthImage/FullWidthImage";
import fullImage from "../../images/fullWidthImage2.png";
import FormHomePage from "../../components/Form_homePage/FormHomePage";
import Spinner from "../../components/spinner/Spinner";
import "./vedicScience.scss";
import AllVideoHome from "../../components/allVideoHome/AllVideoHome";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/vedicScienceBanner2.jpg";
import bannerImagemobile from "../../images/vedicScienceMobileBanner2.jpg";
import image from "../../images/siddhasanaImage.png";
import SiddhasanaItem from "../../components/siddhasanaItem/SiddhasanaItem";
const siddhasanaData = [
  {
    delay: 0.1,
    image: image,
    heading: "Experience the wonders of Vedic science with Sri Siddhguru.",
    text1:
      "Intellect drives virtually every field of knowledge, but in Vedic science, consciousness is key. Only a sage at supreme consciousness can unlock its true potential. Sri Siddhguru, born with all eight Kundalini Chakras activated, possesses deep insights into Vedic mysteries through intense Sadhana. Rediscovering lost Siddhis, his teachings inspire and transform lives beyond intellectual understanding. He guides us toward fulfilling lives and spiritual advancement, offering his divine energy to elevate our consciousness, revealing the essence of Vedic science through profound spiritual engagement rather than mere intellectual pursuit.",
  },
  {
    delay: 0.2,
    image: image,
    heading: "Brahm Shakti",
    text1:
      "Brahm Shakti embodies Sri Siddhguru's divine energy, aimed at elevating our consciousness and awakening our spiritual essence. It manifests itself in different forms. Through Braham Sparsh, he activates a spark of divine energy by touching the third eye while you meditate. Similarly, Brahm Drusti involves a transformative gaze directly into your eyes. Brahm Prasad, a physically energized divine object, offers both protection and energy for soul elevation. These practices deepen our spiritual connection with Sri Siddhguru, positioning him as a guiding light for enhancing our lives.",
  },
];

const VedicScience = () => {
  const [knowledge, setKnowledge] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://Siddhguru.pvotdesigns.xyz//wp-json/wp/v2/knowledge/?_embed")
      .then((response) => {
        setKnowledge(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="vedicScience">
      {/* <InnerPageCommonHeading heading={"Vedic Science"} /> */}
      <InnerPageBanner
        image={bannerImage}
        mobileImage={bannerImagemobile}
        text={"Vedic Science"}
        // color={"#cf4a2a"}
      />
      {/* <InnerPageCommonText
        text1={`Our intellect is the primary driver of virtually every field of knowledge – be it modern science, philosophy, politics, finance, or anything else. Vedic science is the only field of knowledge where our intellect is not its only driver, but its primary driver is our consciousness. The only person who can help us cherish the true fruits of Vedic science is a sage who has reached the highest level of consciousness – the supreme consciousness. Sri SiddhGuru is that sage.`}
        text2={`His all eight Kundalini are invoked from birth, which gives him the energy to dive deeper into unraveling the unknown mysteries of our existence with intense Sadhana. He has discovered many Siddhis practiced by our Rishis that had been lost for thousands of years.  While you’ll find his discourses inspiring, he goes beyond that to transform your life. He acts as a catalyst to guide us to lead a more fulfilling life and advance towards spirituality in mysterious ways beyond the comprehension of our intellect of limited capacity. His true gift to us is his divine energy to elevate your consciousness, not just our intellect.
        `}
      /> */}
      <div className="vedicScienceWrapper">
        {siddhasanaData.map((item, index) => (
          <SiddhasanaItem key={index} {...item} />
        ))}
      </div>
      {/* {loading ? (
        <Spinner />
      ) : (
        <div className="cardList">
          {knowledge?.map((item) => (
            <CardItem
              key={item.id}
              imageUrl={
                item._embedded["wp:featuredmedia"] &&
                item._embedded["wp:featuredmedia"][0].media_details.sizes.full
                  .source_url
              }
              title={item.title.rendered}
              description={item.content.rendered}
            />
          ))}
        </div>
      )} */}
      <FullWidthImage image={fullImage} />
      {/* <FormHomePage /> */}
      <AllVideoHome />
    </div>
  );
};
export default VedicScience;
