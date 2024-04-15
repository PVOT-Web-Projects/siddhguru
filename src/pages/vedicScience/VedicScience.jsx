import { useContext, useEffect, useState } from "react";
// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
// import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import axios from "axios";
// import CardItem from "../../components/CardItem/CardItem";
// import FullWidthImage from "../../components/fullWidthImage/FullWidthImage";
// import fullImage from "../../images/fullWidthImage2.png";
// import FormHomePage from "../../components/Form_homePage/FormHomePage";
// import Spinner from "../../components/spinner/Spinner";
import "./vedicScience.scss";
import AllVideoHome from "../../components/allVideoHome/AllVideoHome";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/vedicScienceNewBanner.jpg";
import bannerImagemobile from "../../images/vedicMOB.jpg";
import image1 from "../../images/vedicExp.jpg";
import image2 from "../../images/vedicBrahm.jpg";
import SiddhasanaItem from "../../components/siddhasanaItem/SiddhasanaItem";
import { Player } from "video-react";
import fullVideo from "../../images/videcScienceVideo-FyWQQtnN.mp4";
import fullVideo2 from "../../images/Robert Oppenheimer.mp4";
// import vedicScienceVideo from "../../images/videcScienceVideo.mp4";
import posterImage from "../../images/vedicVideoPosert.jpg";
import LanguageContext from "../../components/language/Language";
const siddhasanaData = [
  {
    delay: 0.1,
    image: image1,
    heading: "Experience the wonders of Vedic science with Sri SiddhGuru.",
    text1:
      "Intellect drives virtually every field of knowledge, but in Vedic science, consciousness is key. Only a sage at supreme consciousness can unlock its true potential. Sri SiddhGuru, born with all Kundalini Chakras activated, possesses deep insights into Vedic mysteries through intense Sadhana. Rediscovering lost Siddhis, his teachings inspire and transform lives beyond intellectual understanding. He guides us toward fulfilling lives and spiritual advancement, offering his divine energy to elevate our consciousness, revealing the essence of Vedic science through profound spiritual engagement rather than mere intellectual pursuit.",
  },
  // {
  //   delay: 0.2,
  //   image: image2,
  //   heading: "Brahma Shakti",
  //   text1:
  //     "Brahma Shakti embodies Sri SiddhGuru's divine energy, aimed at elevating our consciousness and awakening our spiritual essence. It manifests itself in different forms. Through Braham Sparsh, he activates a spark of divine energy by touching the third eye while you meditate. Similarly, Brahma Drishti involves a transformative gaze directly into your eyes. Brahma Prasad, a physically energized divine object, offers both protection and energy for soul elevation. These practices deepen our spiritual connection with Sri SiddhGuru, positioning him as a guiding light for enhancing our lives.",
  // },
  {
    delay: 0.2,
    image: image2,
    heading: "An Eminent Spiritual Scholar",
    text1:
      "Sri Siddhguru is one of the eminent scholars of Sanskrit and Vedic literature in the world. His profound expertise extends across scriptures such as the Vedas, Puranas, Bhagavad Gita, Agamas, and Astrology. Also, he has a deep understanding of the ideologies and philosophies of various faiths - including Jainism, Sikhism, Christianity, Buddhism, and Islam. Sri Siddhguru possesses the unique talent of explaining intricate concepts from the ancient scriptures using a simple language that is accessible to all.",
  },
];
const siddhasanaHindiData = [
  {
    delay: 0.1,
    image: image1,
    heading: "अनुभव करो वैदिक विज्ञान के चमत्कार",
    text1:
      "सामान्यतः  हर एक विषयवस्तु में हमेशा ही बुद्धिमत्ता पर ज़्यादा ज़ोर दिया जाता है परंतु वैदिक विज्ञान में चैतन्य को प्राथमिकता दी जाती है। वैदिक विज्ञान के गूढ़ रहस्यों को चैतन्य के सर्वोच्च स्तर पर पहुंच चुके संत ही उजागर कर सकते हैं। अपनी कुंडलिनी के सभी चक्रों के जागृत होने के साथ जन्मे श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] ने गहन अध्ययन एवं कठोर तपस्या द्वारा वैदिक विज्ञान का अद्वितीय ज्ञान प्राप्त किया। उनके उपदेश लोगों को सामान्य बुद्धिमत्ता से ऊपर उठकर जीवन में पूर्णता लाने के लिए प्रेरित करते हैं। सिर्फ ज्ञानप्राप्ति नहीं, गुरुदेव हमेशा लोगों को आध्यात्मिक जागृति की राह दिखाते हैं, अपनी दिव्य ऊर्जा से उनकी चेतना के स्तर को ऊपर उठाते हैं और वैदिक विज्ञान का सार दुनियाभर में फैलाते हैं।",
  },
  // {
  //   delay: 0.2,
  //   image: image2,
  //   heading: "Brahma Shakti",
  //   text1:
  //     "Brahma Shakti embodies Sri SiddhGuru's divine energy, aimed at elevating our consciousness and awakening our spiritual essence. It manifests itself in different forms. Through Braham Sparsh, he activates a spark of divine energy by touching the third eye while you meditate. Similarly, Brahma Drishti involves a transformative gaze directly into your eyes. Brahma Prasad, a physically energized divine object, offers both protection and energy for soul elevation. These practices deepen our spiritual connection with Sri SiddhGuru, positioning him as a guiding light for enhancing our lives.",
  // },
  {
    delay: 0.2,
    image: image2,
    heading: "जानेमाने आध्यात्मिक विद्वान",
    text1:
      "श्री सिद्धगुरु संस्कृत और वैदिक विज्ञान के विश्व के अग्रगण्य विद्वानों में से एक है। वेद, पुराण, आगम, भगवद गीता एवं ज्योतिष शास्त्र जैसे सभी विषयों में उन्होंने में अप्रतिम निपुणता प्राप्त की है। साथ ही वह जैन, सिख, ईसाई, बौद्ध और इस्लाम जैसे अन्य धर्मों के धर्मग्रंथ, दर्शन शास्त्र एवं विचारधारा की गहन समझ रखते हैं। श्री सिद्धगुरु के पास पौराणिक ग्रंथों में लिखित जटिल सिद्धांतों को सामान्य लोग आसानी से समझ सकें ऐसी एकदम सरल भाषा में प्रस्तुत करने का विशेष हुनर है।",
  },
];
const VedicScience = () => {
  const { language } = useContext(LanguageContext);
  // const [knowledge, setKnowledge] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("https://SiddhGuru.pvotdesigns.xyz//wp-json/wp/v2/knowledge/?_embed")
  //     .then((response) => {
  //       setKnowledge(response.data);
  //       console.log(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <div className="vedicScience">
      {/* <InnerPageCommonHeading heading={"Vedic Science"} /> */}
      <InnerPageBanner
        image={
          // "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916426/qwtt0niioctnyu2xxm5m.jpg"
          bannerImage
        }
        mobileImage={
          // "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916469/l0bot5kgxhfu5lzmmwk8.jpg"
          bannerImagemobile
        }
      
        text={"Vedic Science"}
        hindiText={"वैदिक विज्ञान"}
        // color={"#cf4a2a"}
      />
      {/* <InnerPageCommonText
        text1={`Our intellect is the primary driver of virtually every field of knowledge – be it modern science, philosophy, politics, finance, or anything else. Vedic science is the only field of knowledge where our intellect is not its only driver, but its primary driver is our consciousness. The only person who can help us cherish the true fruits of Vedic science is a sage who has reached the highest level of consciousness – the supreme consciousness. Sri SiddhGuru is that sage.`}
        text2={`His all eight Kundalini are invoked from birth, which gives him the energy to dive deeper into unraveling the unknown mysteries of our existence with intense Sadhana. He has discovered many Siddhis practiced by our Rishis that had been lost for thousands of years.  While you’ll find his discourses inspiring, he goes beyond that to transform your life. He acts as a catalyst to guide us to lead a more fulfilling life and advance towards spirituality in mysterious ways beyond the comprehension of our intellect of limited capacity. His true gift to us is his divine energy to elevate your consciousness, not just our intellect.
        `}
      /> */}
      <div className="vedicScienceWrapper">
        {(language === "en" ? siddhasanaData : siddhasanaHindiData).map(
          (item, index) => (
            <SiddhasanaItem key={index} {...item} />
          )
        )}
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
      {/* <FullWidthImage image={fullImage} /> */}
      <div className="vedicScienceVideo">
        <Player
          playsInline={true}
          src={
            // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710225855/siddhguru/x5jsisbrhoksxnlos0p1.mp4"
            fullVideo
          }
          poster={posterImage}
          // fluid={true}
        />
      </div>
      <div className="vedicScienceVideo">
        <Player
          playsInline={true}
          src={
            // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710225855/siddhguru/x5jsisbrhoksxnlos0p1.mp4"
            fullVideo2
          }
          // poster={posterImage}
          // fluid={true}
        />
      </div>
      {/* <FormHomePage /> */}
      <AllVideoHome />
    </div>
  );
};
export default VedicScience;
