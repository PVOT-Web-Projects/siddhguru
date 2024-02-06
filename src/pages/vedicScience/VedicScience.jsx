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
import bannerImage from "../../images/VedicSciencePage.jpg";

const VedicScience = () => {
  const [knowledge, setKnowledge] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://siddhguru.pvotdesigns.xyz//wp-json/wp/v2/knowledge/?_embed")
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
      <InnerPageBanner image={bannerImage} />
      <InnerPageCommonText
        text1={`Vedic Science is the invaluable knowledge of India that can make India the Vishwa Guru, driven by the concept of "Vasudhaiva Kutumbakam" (the world is one family). The treasure of our ancient culture and spirituality makes anything possible. The miracles of Vedic Science can turn the impossible into possible. Practicing and acquiring knowledge in Vedic Science transform an individual's life. One can attain liberation and eternal happiness through the blessings and guidance of enlightened beings. From Distance Healing to Cosmic Travel, every mystery is hidden in this ancient science of ours. `}
      />
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
