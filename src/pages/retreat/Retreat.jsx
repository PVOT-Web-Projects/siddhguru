import HeadingContentWithImages from "../../components/headingContentWithImages/HeadingContentWithImages";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import image from "../../images/reTreat.jpeg";
import image1 from "../../images/Siddhasana_WHAT.jpg";
import image2 from "../../images/Siddhasana_WHERE & WHEN.jpg";
import image3 from "../../images/Siddhasana_WHY-min.jpg";
import image4 from "../../images/Siddhasana_WHOM.jpg";
import Button from "../../components/buttons/button6";
import image5 from "../../images/how_image.jpeg";
import SiddhasanaItem from "../../components/siddhasanaItem/SiddhasanaItem";
import { useContext } from "react";
import LanguageContext from "../../components/language/Language";
import HeadingTextAnimation from "../../components/HeadingAnimation/HeadingTextAnimation";
import "./retreat.scss";
import EventLeftRight from "../../components/eventLeftRight/EventLeftRight";
import EventLeftRightCopy from "../../components/eventLeftRight copy/EventLeftRight";
import { Player } from "video-react";
import fullVideo from "../../images/home_new_video.mp4";
import posterImage from "../../images/home_video_poster.jpg";
import border from "../../images/aboutAshramBorder.svg";
import { HashLink } from "react-router-hash-link";

const reTreatData = [
  {
    delay: 0.1,
    image: image2,
    heading: "Morning Session: Siddhasana",
    text1:
      "Begin your day with Siddhasana, a profound practice of yoga and meditation in silence, led by Namrata, the esteemed guide from the Ashram in Tirupati. This session offers a unique opportunity to experience the spiritual power of Siddhasana without the need to travel to the Ashram.",
    //   text2:
    //     "Siddhasana is a journey of awakening and the anchor is silence.  It is a residential silence retreat program structured to raise your consciousness from subconscious living to higher conscious living.",
    //   text3:
    //     "The program progresses over 7 levels, with each level carefully crafted to bring the untrained, distracted mind one step closer to a more complete life.",
    //   text4:
    //     "Each level features its own set of activities, guidelines, and purpose.  By the end of each program, participants often feel greater satisfaction and leave with a deeper sense of happiness.",
    //   text5:
    //     "Note: Siddhasana is a priceless program built and sustained purely by the labor of love.  There is absolutely no charge for participation at any residential retreat in India.",
  },
  {
    delay: 0.2,
    image: image5,
    heading: "Afternoon: Relax and Rejuvenate",
    text1:
      "After a nourishing lunch, take time to relax and soak in the natural beauty of the surroundings. This peaceful interlude will rejuvenate your body and spirit.",

    boldText: "Late Afternoon: Bhajans and Vedic Science",
    // text3:
    //   "The flagship 7-day residential silence retreat program is conducted amidst the therapeutic calm ambience surrounded by the beautiful green mountains at the foothills of Tirupati, India at - Sri Siddheshwar Tirth.",
    // text4:
    //   "The 3-day international retreats are conducted in different parts of the world.",
    // text5:
    //   "The 2-hour sessions are conducted in-person at various conferences, organizations, and universities.",
    text7:
      "Immerse yourself in the bliss of ninety minutes of Bhajans and mantra chanting. Additionally, engage in enlightening short sessions on Vedic science and discover how its principles can help you achieve peace and harmony in your life.",
    //   list1bold: "The flagship 7-day residential silence retreat program",
    //   list1light:
    //     " is conducted amidst the therapeutic calm ambience surrounded by the beautiful green mountains at the foothills of Tirupati, India at - Sri Siddheshwar Tirth.",
    //   list2bold: "The 3-day international retreats",
    //   list2light: "are conducted in different parts of the world.",
    //   list3bold: "The 2-hour sessions",
    //   list3light:
    //     "are conducted in-person at various conferences, organizations, and universities.",
  },
  {
    delay: 0.3,
    image: image1,
    heading: "Evening: Celebration and Reflection",
    text1:
      "As the day winds down, join us for evening celebrations filled with dance and casual fireside chats. This is a time for community and connection, with the possibility of a divine surprise appearance by Sri Siddhguru.",
    boldText: "Brahm Sparsh: A Divine Encounter",
    text7:
      "Experience the unforgettable Brahm Sparsh, where Sri Siddhguru touches your third eye during meditation, igniting a spark of divine energy. His informal words of wisdom will further enrich this profound spiritual experience.",
    //   text4:
    //     "Silence is the first step to beginning the mastery of your mind because it nurtures the seed to bring inner clarity to your thoughts, words, and actions.",
    //   text5: "“Become non-harming; live and let live!”",
    //   text6:
    //     "This program enhances your overall health and empowers you to become the BEST VERSION OF YOURSELF.",
  },
];
const reTreatHindiData = [
  {
    delay: 0.1,
    image: image1,
    heading: "क्या",
    text1:
      "Siddheshwar - The Power of Soul (सिद्धासना) सिद्धगुरु की प्रेरणा से निर्मित प्रमुख जीवनशैली कार्यक्रम (flagship lifestyle program) है जिसमें मौन साधना के ज़रिए लोगों को बाहरी दुनिया से परे स्वयं को पहचानने एवं अपने आप से जुड़ने के ध्येय से निर्मित किया गया है।",
    text2:
      'सिद्धसना एक जागृति की यात्रा है जिसकी आधार-शिला "मौन (silence)" है। यह एक आवासीय (residential) प्रोग्राम है जिसकी रूप-रेखा आपकी जीवन चेतना के स्तर को अचेतन (subconscious) से पूर्ण चेतना की ओर ले जाने के लिए निर्धारित की गई है।',
    text3:
      " यह प्रोग्राम 7 चरणों में विभाजित किया गया है जिसके तहत लोगों के अनियंत्रित और विचलित मन को पूर्णता की ओर एक कदम आगे बढ़ाने के लिए बड़ी सावधानी से हर एक चरण की रचना की गई है।",
    text4:
      "हर चरण के अपने लक्ष्य हैं, गतिविधियां हैं और मार्गदर्शिकाएं हैं। हर चरण के समापन पर प्रतिभागियों को अधिक संतुष्टि तथा परमानन्द की अनुभूति होती है।",
    text5:
      "सूचना: सिद्धासना एक निःशुल्क प्रोग्राम है जिसकी परिकल्पना एवं परिचालन सिर्फ और सिर्फ गुरुभक्तों की श्रद्धा व् प्रतिबद्धता से होता है। भारत में इस आवासीय प्रोग्राम में हिस्सा लेने के लिए कोई भी शुल्क नहीं लिया जाता।",
  },
  {
    delay: 0.2,
    image: image2,
    heading: "कहाँ और कब",
    text1:
      "Siddheshwar - The Power of Soul (सिद्धासना) प्रोग्राम कुछ इस तरह आयोजित किए जाते हैं:",
    text2:
      "सिद्धासना निवासीय रिट्रीट भारत में हर महीने आयोजित किए जाते हैं. साथ ही, न्यू यॉर्क, दुबई, जापान, फ्रांस, पुर्तगाल, स्वीडन, लंदन, स्पेन, कनाडा, सिंगापुर, हांगकांग, जॉर्जिया, ऑस्ट्रेलिया, न्यूजीलैंड, नीदरलैंड्स, डेनमार्क, हॉलैंड, थाईलैंड, ब्राजील, मॉरिशस, केन्या, फिजी, और तंजानिया में भी इसके ऑनलाइन/ ऑफलाइन वर्कशॉप आयोजित किये जाते हैं।",
    // text3:
    //   "The flagship 7-day residential silence retreat program is conducted amidst the therapeutic calm ambience surrounded by the beautiful green mountains at the foothills of Tirupati, India at - Sri Siddheshwar Tirth.",
    // text4:
    //   "The 3-day international retreats are conducted in different parts of the world.",
    // text5:
    //   "The 2-hour sessions are conducted in-person at various conferences, organizations, and universities.",
    text6:
      "दुनियाभर में उपलब्ध ऑनलाइन वर्कशॉप के साथ साथ भारत में हर माह सिद्धासना आवासीय रिट्रीट का आयोजन किया जाता है।",
    // list1bold: "The flagship 7-day residential silence retreat program",
    list1light:
      "भारत में 7-दिवसीय रेसिडेंशियल साइलेंट रिट्रीट प्रोग्राम का आयोजन तिरुपति की सुंदर और हरीभरी पहाडिओं में स्थित श्री सिद्धेश्वर तीर्थ के शांत और सुरम्य वातावरण में किया जाता है।",
    list2bold: "तीन दिवसीय अंतर्राष्ट्रीय रिट्रीट ",
    list2light: "दुनिया के अलग अलग भागों में आयोजित किया जाता है।",
    list3bold: "विभिन्न कॉन्फरेंस, सम्मेलन,",
    list3light:
      " सभाओं एवं विश्वविद्यालयों में दो घंटे के सेशन्स आयोजित किये जाते हैं।",
  },
  {
    delay: 0.3,
    image: image3,
    heading: "क्यों",
    text1:
      " तनाव, चिंता, क्रोध, भय, पछतावा, आघात, उदासी और अकेलापन - यह सब हमें अंदर से ख़ुशी, शांति और प्रेम की अनुभूति करने से रोकते हैं।",
    text2:
      "स्वयं को अधिक ऊर्जावान बनाते हुए अपनी कुंठाओं से मुक्त हो कर अपना जीवन जी सकें इस हेतु Siddheshwar",
    text3: "The Power of Soul (सिद्धासना) हर कदम पर आपका मार्गदर्शन करता है।",
    text4:
      "मौन अपने मन-मस्तिष्क पर प्रभुत्व पाने की दिशा में पहला कदम है क्योंकि वह आपके विचार, शब्दों और कर्मों के अधिक स्पष्टता का बीज बोता है।",
    text5:
      "अहिंसक बनो – जीयो और जीने दो - इसी सोच के साथ यह प्रोग्राम आपको अधिक स्वस्थ बनाता है और आपको अपने श्रेष्ठत्तम रूप तक पहुँचने की शक्ति प्रदान करता है।",
    text6: "अहानिकर बनो - जिओ और जीने दो।",
  },
];

const Retreat = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="retreat">
      <InnerPageBanner
        image={image}
        mobileImage={image}
        bigText={"Spiritual Retreat with Sri Siddhguru in New York"}
        hindiBigText={"Spiritual Retreat with Sri Siddhguru in New York"}
        overlay={true}
      />
      <div className="Retreat_background">
        <HeadingContentWithImages
          heading={"4th TO 7th JULY, 2024 – Garrison Institute, New York "}
          hindiHeading={"4th TO 7th JULY, 2024 – Garrison Institute, New York"}
          content={
            "We are thrilled to announce an extraordinary spiritual retreat from July 4 to July 7, 2024, at the serene Garrison Institute in upstate New York. This retreat will be graced by the divine presence of Sri Siddhguru, whose energy and wisdom promise a life-altering spiritual journey."
          }
          hindiContent={
            "We are thrilled to announce an extraordinary spiritual retreat from July 4 to July 7, 2024, at the serene Garrison Institute in upstate New York. This retreat will be graced by the divine presence of Sri Siddhguru, whose energy and wisdom promise a life-altering spiritual journey."
          }
          extracontent={
            "Located about 40 miles north of New York City, Garrison Institute is easily accessible by both road and train. The picturesque train ride from Grand Central Station in Manhattan takes approximately one hour."
          }
          hindiExtracontent={
            "Located about 40 miles north of New York City, Garrison Institute is easily accessible by both road and train. The picturesque train ride from Grand Central Station in Manhattan takes approximately one hour."
          }
          showDivider={true}
          link={
            "https://www.garrisoninstitute.org/event/spiritual-retreat-with-sri-siddhguru/"
          }
        />
      </div>
      <div className="siddhasana_wrapper">
        {reTreatData.map((item, index) => (
          <SiddhasanaItem key={index} {...item} />
        ))}
      </div>
      <div className="registerText">
        <HeadingContentWithImages
          heading={
            "Join Us. Don’t miss this rare opportunity for an unforgettable, life-transforming spiritual retreat with Sri Siddhguru."
          }
        />
      </div>
      <div className="register">
        <Button
          link={
            "https://www.garrisoninstitute.org/event/spiritual-retreat-with-sri-siddhguru/"
          }
          btn_text={"Register Now"}
        />
        <div>
          <HashLink
            to={`/retreat#know_more_about_siddhguru`}
            className="button-61"
          >
            <span className="text">Know more about Sri Siddhguru</span>
            <span>Know more about Sri Siddhguru</span>
          </HashLink>
        </div>
      </div>

      <EventLeftRight
        knowMore={"know_more_about_siddhguru"}
        btn_link={
          "https://www.garrisoninstitute.org/event/spiritual-retreat-with-sri-siddhguru/"
        }
        btn_text={" Register Now for Spiritual Retreat"}
      />
      <div className="event_copy">
        <EventLeftRightCopy
          btn_link={
            "https://www.garrisoninstitute.org/event/spiritual-retreat-with-sri-siddhguru/"
          }
          btn_text={" Register Now for Spiritual Retreat"}
        />
      </div>

      <div className="video">
        <Player
          playsInline={true}
          src={
            // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710225855/siddhguru/x5jsisbrhoksxnlos0p1.mp4"
            fullVideo
          }
          poster={posterImage}
          // fluid={true}
        />
        <div className="divider">
          <img src={border} alt="border" />
        </div>
      </div>
    </div>
  );
};
export default Retreat;
