// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import "./aboutashrampageinner.scss";
import image1 from "../../images/aboutAshramImage1.png";
import image2 from "../../images/aboutAshramImage2.png";
import image3 from "../../images/aboutAshramImage3.png";
import Button from "../../components/buttons/button4";
import image1_mobile from "../../images/aboutAshramImage1_mobile.png";
import AboutAshramImages from "../../components/aboutAshramImages/AboutAshramImages";
// import HeadingTextAnimation from "../../components/HeadingAnimation/HeadingTextAnimation";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/AboutashrampageInner.jpg";
import mobilebannerImage from "../../images/AboutashrampageInnerMobile.jpg";
import border from "../../images/aboutAshramBorder.svg";
import HeadingContentWithImages from "../../components/headingContentWithImages/HeadingContentWithImages";
import posterImage from "../../images/AboutashraminnerThumbnail.jpg";
import posterImageHindi from "../../images/AboutashraminnerThumbnailHindi.jpg";
import { useContext } from "react";
import LanguageContext from "../../components/language/Language";
import { Link } from "react-router-dom";

const AboutAshramPageinner = () => {
  const { language } = useContext(LanguageContext);

  const images = language === "en" ? posterImage : posterImageHindi;

  return (
    <div className="aboutAshramPage">
      {/* <InnerPageCommonHeading
        heading={"Shri Siddheshwar Tirth - Shree Brahmrishi Ashram"}
      /> */}
      <InnerPageBanner
        image={
          // "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916659/kvrsjkzj7ljbotfmttpc.jpg"
          bannerImage
        }
        mobileImage={
          // "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916690/xwcvldaoobam5vaqxbsb.jpg"
          mobilebannerImage
        }
        bigText={"Awaken Your Soul: SiddhGuru's Ashram,"}
        bigText2={"Where Transformation Begins"}
        hindiBigText={"आत्मजागृति के लिए पधारें"}
        hindiBigText2={"श्री ब्रह्मर्षि आश्रम: जहाँ परिवर्तन की शुरुआत होती है"}
      />
      {/* banner ends */}
      <InnerPageCommonText
        boldText={
          <>
            <p className="Bold_Text">
              Enhance the life force of your soul with
            </p>
          </>
        }
        text1={
          <>
            <p className="innercommonText">
              Prāṇa Vriddhi (Energy Enhancement System™ or EES)
            </p>
          </>
        }
        text2={"The technology developed by Dr Sandra Rose Michael, USA"}
        text3={
          <>
            Prāṇa Vriddhi, installed at Sri Brahmrishi Ashram, has been donated
            by Jason Shurka of UNIFYD Healing (
            <a
              href="https://www.unifydhealing.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.unifydhealing.com
            </a>
            ) and EESystem (
            <a
              href="https://eesystem.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.eesystem.com
            </a>
            ) as a humble contribution toward Gurudev’s service to humanity.
          </>
        }
        hindiBoldText={
          <>
            <p className="Bold_Text">अपने अंदर की जीवन ऊर्जा को बढ़ाएं</p>
          </>
        }
        hindiText1={
          <>
            <p className="innercommonText">
              प्राण वृद्धि (एनर्जी एनहैन्समेन्ट सिस्टम™ या EES) के साथ
            </p>
          </>
        }
        hindiText2={"डॉ. सेंड्रा रोज़ माइकल [अमरीका] द्वारा निर्मित तकनिकी "}
        hindiText3={
          <>
            श्री ब्रह्मर्षि आश्रम में स्थापित प्राण वृद्धि सिस्टम को यूनिफाइड
            हीलिंग (
            <a
              href="https://www.unifydhealing.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.unifydhealing.com
            </a>
            ) के जेसन शुक्रा एवं ई ई सिस्टम (
            <a
              href="https://eesystem.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.eesystem.com
            </a>
            ) द्वारा गुरुदेव के जनसेवा के कार्यक्रमों में सहभागी होने के हेतु से
            अर्पण किया गया है।
          </>
        }
      />
      <div className="divider">
        <img src={border} alt="border" />
      </div>

      <HeadingContentWithImages
        heading={"How Prāṇa Vriddhi Works?"}
        hindiHeading={"प्राण वृद्धि कैसे काम करता है? "}
        hindiContent1={" प्राण वृद्धि कैसे काम करता है? "}
        content={
          "In Dr Sandra Michael’s words “the power that made the body, heals the body. When the body has the right information and the right energy, it wants to heal everything itself”. It is the hyper healthy energetic environment that is created by this technology which repairs the DNA and activates it to its original design and potential. It is physical-spiritual technology bridging the two worlds."
        }
        hindiContent={
          '"डॉ. सेंड्रा माइकल के शब्दों में "जिस शक्ति ने यह शरीर बनाया है, वही इसका उपचार कर सकती है।  जब शरीर के पास सही जानकारी और सही ऊर्जा होती है तब वह अपनेआप ही सब उपचार कर लेता है"। यह तकनीक एक बेहद स्वास्थ्यपूर्ण ऊर्जामय वातावरण का निर्माण करती है जो DNA की मरम्मत करता है और उसको सक्रीय करके शरीर को अपना मूल रूप तथा सामर्थ्य प्रदान करता है। '
        }
        extracontent={
          "The video explaining the science behind the Energy Enhancement System technology in a simplified manner covers the importance of environment, cellular charge, pH levels, oxygen levels, and the law of conservation in maintaining health. The technology uses color, light, and electromagnetic fields to create a balanced environment for the body to heal itself and it is the natural tendency of the body to synchronize to the environment it is in."
        }
        hindiExtracontent={
          "सरल भाषा में एनर्जी एनहैन्समेन्ट सिस्टम™ की तकनिकी के पीछे का विज्ञान समझाने वाले इस विडिओ में - वातावरण, कोशिकाओं के चार्ज, pH स्तर, ऑक्सीजन का स्तर और स्वास्थ्य संरक्षण के नियम, इत्यादि का माहात्म्य समाविष्ट है। इस तकनीक द्वारा रंग, प्रकाश और इलैक्ट्रोमैग्नेटिक फिल्ड के समन्वय से संतुलित ऊर्जामय वातावरण का निर्माण किया जाता है जो शरीर को अपनेआप स्वस्थ होने में मदद करता है - जो की शरीर का अपने आसपास के वातावरण के साथ समन्वय बैठाने का प्राकृतिक गुण है। "
        }
        extracontent1={
          "For full but simplified explanation and true science behind the Energy Enhancement System (EES) technology please check at the following: "
        }
        hindiExtracontent1={
          "एनर्जी एनहैन्समेन्ट सिस्टम™ की तकनिकी के बारे में विस्तृत लेकिन आसान भाषा में जानकारी प्राप्त करने के लिए इस विडिओ को पूरा देखें: "
        }
      />
      <div className="ashram_inner_video">
        <Link
          to="https://youtu.be/Yd3gMgcazvg?si=WYdKfEWBWfMZNW12"
          target="_blank"
        >
          <img src={images} alt="image" className="vedicScienceVideo" />
        </Link>
      </div>

      <div className="divider">
        <img src={border} alt="border" />
      </div>

      <HeadingContentWithImages 
      heading={"Benefits of Prāṇa Vriddhi EE System"}
      hindiHeading={"प्राण वृद्धि ई ई सिस्टम के लाभ"}
      content={
        "It is a physiologically and environmentally safe system based on ancient healing traditions and modern techniques. Using the Prāṇa Vriddhi EE System at Sri Brahmrishi Ashram is free for everyone."
      }
      hindiContent={
        "यह शारीरिक एवं पर्यावरण की दॄष्टि से एक सुरक्षित सिस्टम है जो पौराणिक स्वास्थ्य सिद्धांतो और आधुनिक तकनिकी पर आधारित है। श्री ब्रह्मर्षि आश्रम में प्राण वृद्धि EE सिस्टम का उपयोग करना पूर्णतया निः शुल्क है।"
      }
      extracontent={
        "Prāṇa Vriddhi aims to address the root causes of imbalance and promote holistic healing from within. It combines body, mind, spirit and science to help achieve peak performance and higher states of health, consciousness and self-actualizaition. Though every individual’s experience of Prāṇa Vriddhi is different, these benefits are commonly observed in people of every age - children, adolescents, youth, middle-aged, or senior citizens."
      }
      hindiExtracontent={
        "प्राण वृद्धि सिस्टम शरीर के असंतुलन को उसकी जड़ में जाकर ठीक करता है और सम्पूर्ण स्वास्थ्य को बढ़ावा देता है। वह शरीर, मन, आत्मा और विज्ञान का का समन्वय कर स्वास्थ्य, परफॉर्मेंस, चेतना एवं आत्म-अनुभूति को सर्वोच्च स्तर पर ले जाता है। हालाँकि हर इंसान का प्राण वृद्धि का अनुभव अलग अलग होता है, उसका लाभ सामान्यतया: बच्चे, तरुण, युवा, अधेड़ या वृद्ध सभी लोगों में देखा जा सकता है।"
      }
      list1={"Feelings of calmness and peace"}
      list1Hindi={"शांतचित्त एवं चैन की अनुभूति"}
      list2={"Natural healing and rejuvenation"}
      list2Hindi={"नैसर्गिक स्वस्थता एवं कायाकल्प"}
      list3={"Increased energy levels in the body"}
      list3Hindi={"शरीर के ऊर्जास्तर में बढ़ोतरी"}
      list4={"Sense of emotional clarity and freedom"}
      list4Hindi={"भावनाओ में स्पष्टता और मुक्ति की अनुभूति"}
      list5={"Detoxification and better performance"}
      list5Hindi={"डिटॉक्सिफिकेशन और अच्छा परफॉर्मेंस"}
      list6={"Better mental health and confidence"}
      list6Hindi={"अच्छा मानसिक स्वास्थ्य और आत्मविश्वास"}
      list7={"Self-acceptance and self-awareness"}
      list7Hindi={"आत्म-स्वीकृति और आत्म-जागरूकता"}
      list8={"Freedom from past traumas &amp; stressors"}
      list8Hindi={"भूतकाल के दु:ख-दर्द और तनावों से मुक्ति"}
      list9={"Living more in the ‘present moment’"}
      list9Hindi={"वर्तमान क्षण में जीने की अनुभूति"}
      list10={"Better blood profile and metabolism"}
      list10Hindi={"अच्छा चयापचय और शुद्ध रक्त"}
      content1={
        <>
          Visit (
          <a
            href="https://eesystem.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.eesystem.com
          </a>
          ) to learn more about the amazing healing experiences of Prāṇa
          Vriddhi (Energy Enhancement System™).
        </>
      }
      hindiContent1={
        <>
          प्राण वृद्धि (एनर्जी एनहैन्समेन्ट सिस्टम™) के अद्भुत स्वास्थ्यवर्धक
          अनुभवों के बारे में अधिक जानकारी के लिए (
          <a
            href="https://eesystem.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.eesystem.com
          </a>
          ) विजिट करें।
        </>
      }
      content2={
        "Come and heal your body through the energy that has created your body!"
      }
      hindiContent2={""}
      content3={
        <>
          For accommodation-related inquiries, contact Sri Brahmrishi Ashram
          at
          <a href="tel:+919845823095" className="telephone_no">
            {" "}
            +919845823095
          </a>
        </>
      }
      hindiContent3={
        <>
          निवास की सुविधा से सम्बंधित जानकारी के लिए श्री ब्रह्मर्षि आश्रम का
          संपर्क करें:
          <a href="tel:+919845823095" className="telephone_no">
            {" "}
            +919845823095
          </a>
        </>
      }
      />

      <div className="aboutAshramPage_wrapper"></div>
    </div>
  );
};
export default AboutAshramPageinner;
