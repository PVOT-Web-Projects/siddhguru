import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import "./aboutAshramPage.scss";

import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/aboutAshramNewBanner.jpg";
import mobilebannerImage from "../../images/ashramMOB.jpg";
import GalleryAshram from "../../components/galleryAshram/GalleryAshram";
import HeadingContentWithImages from "../../components/headingContentWithImages/HeadingContentWithImages";
import gaushalaImage2 from "../../images/gaushalaImage2.jpg";
import gaushalaImage3 from "../../images/gaushalaImage3.jpg";
import border from "../../images/aboutAshramBorder.svg";

const AboutAshramPage = () => {
  return (
    <div className="aboutAshramPage">
      <InnerPageBanner
        image={bannerImage}
        mobileImage={mobilebannerImage}
        bigText={"Awaken Your Soul: SiddhGuru's Ashram,"}
        bigText2={"Where Transformation Begins"}
        hindiBigText={"आत्मजागृति के लिए पधारें"}
        hindiBigText2={"श्री ब्रह्मर्षि आश्रम: जहाँ परिवर्तन की शुरुआत होती है"}
      />
      <InnerPageCommonText
        boldText={
          "Sri Sidheshwar Tirth - Sri Brahmarishi Ashram, near Tirupati"
        }
        text1={
          " stands as a revered spiritual pilgrimage site drawing thousands of devotees and pilgrims from around the globe annually. Blessed by the divine presence of Sri Siddhguru, this sacred abode resonates with fervor during celebrated festivals such as Navaratri, Diwali, and MahaShivaratri."
        }
        text2={
          "Additionally, the ashram hosts free three-day and seven-day Siddhasana retreats, attracting seekers from diverse corners of the world who depart enriched with spiritual wisdom and the bliss of eternal fulfillment. Positioned on the sacred soil of India, this pilgrimage site radiates with an inherent spiritual energy, serving as a beacon of enlightenment and transformation for all who tread its hallowed grounds."
        }
        text3={
          "The sanctity of this place has touched countless souls, offering profound experiences of Sri Gurudev's divine grace."
        }
        hindiBoldText={
          "भारत में तिरुपति के नज़दीक स्थित श्री सिद्धेश्वर तीर्थ - श्री ब्रह्मर्षि आश्रम"
        }
        hindiText1={
          "आध्यात्मिक चेतना से भरा एक अनोखा तीर्थस्थान है जहाँ हर साल, दुनियाभर से लाखों  भक्त और तीर्थयात्री पधारते हैं। श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] की तपस्या एवं दिव्य ऊर्जा से पावन हुई इस पवित्र धरा पर प्रति वर्ष श्रावण महोत्सव, नवरात्री और महाशिवरात्रि जैसे कई उत्सव धाम-धूम से मनाए जाते हैं।"
        }
        hindiText2={
          "साथ ही, श्री ब्रह्मर्षि आश्रम में ही तीन दिन और सात दिन तक चलने वाले निः शुल्क सिद्धसना रिट्रीट का आयोजन किया जाता है जिसमें दुनियाभर से स्वयं की खोज में निकले लोग हिस्सा लेते हैं और वह यहाँ से शाश्वत आध्यात्मिक ज्ञान और परम तत्त्व की अनुभूति में लीन हो कर लौटते हैं। भारतवर्ष की पुण्यभूमि पर स्थापित यह तीर्थक्षेत्र प्राकृतिक रूप से ही आध्यात्मिक ऊर्जा से परिपूर्ण हैI यह भूमि आत्मोथान एवं परमज्ञान की अभिलाषा लिए आने वाले सभी लोगों के लिए एक आस्था का केंद्र है।"
        }
        hindiText3={
          "इस जगह की पवित्रता ने अनगिनत लोगों की आत्माओं को छुआ है, उन्हें ऊर्जा दी है और गुरुदेव का आशीर्वाद पाने का मौका दिया है।"
        }
      />
      {/* <HeadingTextAnimation
        heading={
          "ना शरमाया करो ना सकुचाया करो, तुम्हारे माता पिता का घर है जब मन करे आया जाय करो "
        }
        text2={"- Siddhguru"}
        fontSize={"26px"}
        justifyContent={"center"}
        color={"#6A1C1C"}
      /> */}
      <div className="divider">
        <img src={border} alt="border" />
      </div>
      <HeadingContentWithImages
        heading={"Prāṇa Vriddhi (Energy Enhancement System™)"}
        hindiHeading={"प्राण वृद्धि (एनर्जी एनहैन्समेन्ट सिस्टम™)"}
        content={
          <>
            Devotees from all over India and the entire world visit Sri
            Brahmrishi Ashram for an opportunity to benefit from Prāṇa Vriddhi
            through our EE System in the peaceful atmosphere of Dhyan Mandir.
            This system, invented and developed by Dr. Sandra Rose Michael of
            USA, has been donated by Jason Shurka of Unifyd Healing (
            <a
              href="https://www.unifydhealing.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.unifydhealing.com
            </a>
            ). This technology uses color, light, and electromagnetic fields to
            create a balanced energized environment. You can activate and
            enhance the ‘Prāṇa’ energy within yourself that is not available
            anywhere else in India. Our Prāṇa Vriddhi EE System generates
            multiple life-enhancing energy fields that promote cell
            regeneration, immunity, pain relief, detoxification of the body, and
            overall energy levels.
          </>
        }
        hindiContent={
          <>
            ध्यान मंदिर के शांतिमय वातावरण में हमारे EE सिस्टम द्वारा प्राण
            वृद्धि की अनुभूति के अवसर के लिए भारत एवं विश्वभर से अनेकानेक भक्तजन
            श्री ब्रह्मर्षि आश्रम आते हैं। इस सिस्टम का अविष्कार एवं विकास
            अमरीका की डॉ. सेंड्रा रोज़ माइकल ने किया है और इसे यूनिफाइड हीलिंग (
            <a
              href="https://www.unifydhealing.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.unifydhealing.com
            </a>
            ).के जेसन शुक्रा द्वारा अर्पण किया गया है। इस तकनीक द्वारा रंग,
            प्रकाश और इलैक्ट्रोमैग्नेटिक फिल्ड के समन्वय से संतुलित ऊर्जामय
            वातावरण का निर्माण किया जाता है। अपने अंदर की प्राण शक्ति के स्तर को
            बढ़ाने एवं उसे अधिक सक्रिय बनाने का यह अवसर आपको पूरे भारत में और
            कहीं भी नहीं मिलेगा। यह प्राण वृद्धि EE सिस्टम जीवन ऊर्जा में बढ़ौतरी
            करने वाले ऐसे अनेक ऊर्जाक्षेत्रों का निर्माण करती है जो सेल
            रिजनरेशन, रोगप्रतिकारक शक्ति, दर्द से राहत, शरीर का डिटॉक्सिफिकेशन
            एवं ऊर्जा वर्धन करती है।
          </>
        }
        list1={"Combines your body, mind, and soul"}
        list1Hindi={"शरीर, मन और आत्मा का समन्वय करता है"}
        list2={"Helps you achieve peak performance"}
        list2Hindi={"अपना सर्वोत्तम प्रदर्शन प्राप्त करने में मदद करता है"}
        list3={"Takes you to a higher state of health"}
        list3Hindi={"आपको और सेहतमंद बनाता है"}
        list6={"Recharges your inner Prāṇa energy"}
        list6Hindi={"आपके अंदर के प्राण ऊर्जा में वृद्धि करता है"}
        list7={"Promotes natural healing & rejuvenation"}
        list7Hindi={"नैसर्गिक स्वस्थता एवं कायाकल्प को बढ़ावा देता है"}
        list8={"Enhances the sense of self-awareness"}
        list8Hindi={"आत्म जागरूकता में बढ़ौतरी करता है"}
        content1={
          "Using the Prāṇa Vriddhi EE System at Sri Brahmrishi Ashram is free for everyone."
        }
        content2={
          "Come and heal your body through the energy that has created your body!"
        }
        hindiContent1={
          "श्री ब्रह्मर्षि आश्रम में प्राण वृद्धि EE सिस्टम का उपयोग करना पूर्णतया निःशुल्क है।"
        }
        hindiContent2={
          "आओ और अपने शरीर को उसी ऊर्जा के साथ स्वस्थ बनाओ जिससे वह बना हुआ है।"
        }
      />

      <div className="divider">
        <img src={border} alt="border" />
      </div>
      <HeadingContentWithImages
        heading={"Gaushala"}
        content={
          '"Cows are special in Hindu culture, symbolizing purity, abundance, and gentleness. At Sidheshwar Tirth, Brahmrishi Ashram, we deeply respect and cherish these sacred animals, recognizing their significance in our spiritual traditions. Through our Gaushala, we provide a nurturing environment to many cows who are valued and cared for with compassion."'
        }
        hindiHeading={"गौशाला"}
        hindiContent={
          "पवित्रता, विपुलता और सौजन्यता के स्वरुप गौमाता को भारतीय संस्कृति में एक विशेष स्थान दिया गया है। हमारी आध्यात्मिक परंपराओं में उनके महत्व को समझते हुए श्री सिद्धेश्वर तीर्थ - श्री ब्रह्मर्षि आश्रम में हम इन पवित्र जीवात्माओं का सम्मान करते हैं और उनके अस्तित्व का उत्सव मनाते हैं। हमारी गौशाला द्वारा, हम अनेक गौमाता को एक सुरक्षित निवासस्थान प्रदान करते हैं, उनकी सेवा करते हैं तथा उनकी पूजा करते हैं।"
        }
        // image1={gaushalaImage1}
        image2={gaushalaImage2}
        image3={gaushalaImage3}
        // image4={gaushalaImage4}
      />
      {/* <HeadingContentWithImages
        heading={"Dhyan Mandir"}
        content={
          "Welcome to Sidheshwar Tirth, Brahmrishi Ashram Dhyan Mandir, a peaceful place for meditation and self-reflection. Here, you can escape the hustle and bustle of daily life and find a quiet spot to relax and unwind. Whether you're new to meditation or have been practising for years, our serene sanctuary is open to everyone. Sit quietly, focus on your breath, and let go of stress and worries. It's a space where you can connect with yourself and the divine. Join us as we journey inward and discover the peace that lies within."
        }
        image1={dyanMandirImage1}
        image2={dyanMandirImage2}
      />
      {aboutAshramImages.map((item, index) => (
        <AboutAshramImages key={index} {...item} />
      ))} */}
      <GalleryAshram />
      <div className="aboutAshramPage_wrapper"></div>
    </div>
  );
};
export default AboutAshramPage;
