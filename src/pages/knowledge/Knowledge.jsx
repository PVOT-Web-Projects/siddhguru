import { useEffect, useState } from "react";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import axios from "axios";
import CardItem from "../../components/CardItem/CardItem";
import FullWidthImage from "../../components/fullWidthImage/FullWidthImage";
import fullImage from "../../images/fullWidthImage.png";
import FormHomePage from "../../components/Form_homePage/FormHomePage";

const Knowledge = () => {
  const [knowledge, setKnowledge] = useState([]);
  useEffect(() => {
    axios
      .get("https://siddhguru.pvotdesigns.xyz//wp-json/wp/v2/knowledge/?_embed")
      .then((response) => {
        setKnowledge(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="knowlwdge">
      <InnerPageCommonHeading heading={"Knowledge"} />
      <InnerPageCommonText
        text1={
          "A digital treasure trove where the profound teachings of Gurudev come alive. It is a virtual library housing the timeless truths of Sanatana Dharma, inviting seekers to delve into the depths of divine knowledge. Here each step of enlightenment illuminate the path to a more meaningful and purposeful existence, is like having a personalised guide through the corridors of ancient wisdom, offering insights that resonate across time and space. It is more than just a collection of information; it's a sanctuary where seekers can explore the transformative power of divine knowledge, unlocking the secrets to a more harmonious and enlightened life."
        }
      />
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
      <FullWidthImage image={fullImage} />
      <FormHomePage />
    </div>
  );
};
export default Knowledge;
