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
import { useContext } from "react";
import LanguageContext from "../../components/language/Language";
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
    list1bold: "The flagship 7-day residential silence retreat program",
    list1light:
      " is conducted amidst the therapeutic calm ambience surrounded by the beautiful green mountains at the foothills of Tirupati, India at - Sri Siddheshwar Tirth.",
    list2bold: "The 3-day international retreats",
    list2light: "are conducted in different parts of the world.",
    list3bold: "The 2-hour sessions",
    list3light:
      "are conducted in-person at various conferences, organizations, and universities.",
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
const SiddhasanaHindiData = [
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
    text3:
      "The Power of Soul (सिद्धासना) हर कदम पर आपका मार्गदर्शन करता है।",
    text4:
      "मौन अपने मन-मस्तिष्क पर प्रभुत्व पाने की दिशा में पहला कदम है क्योंकि वह आपके विचार, शब्दों और कर्मों के अधिक स्पष्टता का बीज बोता है।",
    text5: "अहिंसक बनो – जीयो और जीने दो - इसी सोच के साथ यह प्रोग्राम आपको अधिक स्वस्थ बनाता है और आपको अपने श्रेष्ठत्तम रूप तक पहुँचने की शक्ति प्रदान करता है।",
    text6:
      "अहानिकर बनो - जिओ और जीने दो।",
  },
  {
    delay: 0.4,
    image: image4,
    heading: "कौन",
    text1:
      "Siddheshwar - The Power of Soul सिद्धासना प्रोग्राम शाला और विश्वविद्यालयों के शिक्षक, मातापिता, डॉक्टर, इंजीनियर, प्रशासनिक सेवा व सरकारी अधिकारी, वकील व न्यायाधीश, एंटरप्रेन्योर, गृहिणी, वर्किंग प्रोफेशनल, एक्सिक्यूटिव एवं CXO कॉर्पोरेट लीडर के लिए पूर्ण रूप से उपयुक्त है।",
    text2: "सिद्धासना रिट्रीट 25 वर्ष से अधिक उम्र के सभी लोगों के लिए उपलब्ध है।",
    text3:
      "सिद्धासना वर्कशॉप वयस्कों के साथ साथ 14 वर्ष से अधिक उम्र वाले बच्चों के लिए उपलब्ध है।",
    text4: "आईये मौन के सद्गुणों को अपनाने में थोड़ा समय दें और अपने आप को खोजें।",
  },
  {
    delay: 0.6,
    image: image5,
    heading: "कैसे",
    text1:
      "Siddheshwar - The Power of Soul सिद्धासना के 7-दिवसीय निवासी प्रोग्राम और 3-दिवसीय अंतर्राष्ट्रीय प्रोग्राम,शरीर, मन और आत्मा के मूलभूत अंगों को पुनः जागृत एवं पुनः संतुलित करने के उद्देश्य से बेहद सावधानी के साथ निर्धारित किए गए हैं।",
    list1: "रिधमिक और एक्सप्रेसिव थेरपी",
    list2: "फूल बॉडी एक्सरसाइज़",
    list3: "विविध प्राकृतिक थेरपी",
    list4: "शरीर के पंचतत्वों का संतुलन",
    list5: "माइंडफुल क्रियाएं",
    list6: "सिद्धेश्वर योग, प्राणायाम और ध्यान",
    list7: "ब्रीथिंग टेक्निक",
    list8: "सात्विक खाना",
    list9: "अपने आप एवं प्रकृति के साथ समन्वय",
  },
];

const Siddhasana = () => {
  const { language } = useContext(LanguageContext);
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
        hindiBigText={"सिद्धासना"}
        hindiBigText2={"जीवन की रिधम"}
        
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
        {(language === "en" ? SiddhasanaData : SiddhasanaHindiData).map(
          (item, index) => (
            <SiddhasanaItem key={index} {...item} />
          )
        )}
      </div>
      <div className="border"></div>
      <WeAreHere />
    </div>
  );
};
export default Siddhasana;
