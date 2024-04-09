// import TextSection from "../textSection/TextSection";
// import mainTabImage1 from "../../images/mainTab1.png";
// import mainTabImage2 from "../../images/mainTab2.png";
// import mainTabImage3 from "../../images/mainTab3.png";
import mainTabImage1 from "../../images/saintTHUMB-min.jpg";
import mainTabImage2 from "../../images/missionTHUMB-min.jpg";
import mainTabImage3 from "../../images/corewisdom-min.jpg";
// import theSaintImage1 from "../../images/Life in a Nutshell.jpg";
// import theSaintImage1 from "../../images/SiddhguruTabImage.png";
import theSaintImage1 from "../../images/saintMain.png";
import theSaintImage2 from "../../images/Sadhana & Kundalini Invocation.jpg";
import theSaintImage3 from "../../images/Siddhis-and-Nidhis.jpg";
// import theSaintImage4 from "../../images/theSaintImage4.png";
// import image1 from "../../images/Divine Touch (Digital Diksha).jpg";
import image1 from "../../images/VisionMain.png";
import image2 from "../../images/Siddhasana.jpg";
import image3 from "../../images/Ashram.jpg";
import image4 from "../../images/World-Spiritual-Forum.jpg";
// import wisdomImage1 from "../../images/Miracles of Vedic Science.jpg";
import wisdomImage1 from "../../images/WisdomMain.png";
import wisdomImage2 from "../../images/spiritual.jpeg";
import wisdomImage3 from "../../images/socialWisdom.jpeg";
import wisdomImage4 from "../../images/professionalWisdom.jpeg";
import brahmaShaktiImg from "../../images/brahmaShaktiTab.png";
import "./tabSectionNewNew.scss";
import { useContext, useEffect, useState } from "react";
import LeftRIghtImageContent from "../leftRightImageContent/LeftRightImageContent";
import arrow from "../../images/downArrow.svg";
// import video1 from "../../images/tab1Image.mp4";
// import video2 from "../../images/tab2Image2.mp4";
// import video3 from "../../images/tab3Image2.mp4";
import BigHeadingSmallHeading from "../bigHeadingSmallHeading/BigHeadingSmallHeading";
import arrows from "../../images/arrow.svg";
import whiteArrow from "../../images/arrowWhite.svg";
import LanguageContext from "../language/Language";

const theSaintData = [
  {
    id: 0,
    data: [
      {
        id: "life_of_nutshell",
        index: 0,
        img: theSaintImage1,
        tagline: "Saint",
        title: "Sri SiddhGuru",
        text: "Sri Brahmarishi SiddhGuru Gurudev, embodying compassion, love, humility, and simplicity, stands as a revered sage in our era. Adhering to ancient Indian spiritual practices, he has mastered all Kundalini Chakras and eight Siddhis, achieving supreme spiritual enlightenment. Establishing a spiritual connection with him can profoundly transform your life, bringing peace and harmony in ways beyond our understanding. He has the divine ability to transform our lives, breaking the barrier of distance.",
        itemIndex: 0,
      },
      {
        id: "kundalini",
        index: 1,
        img: theSaintImage2,
        tagline: "Saint",
        title: "Kundalini",
        text: "Kundalini, a dormant spiritual energy within us, reaches its peak through awakening all Chakras, a feat rarely achieved and often taking multiple lifetimes. Gurudev, uniquely born with all Chakras awakened, is among the few saints to attain such a divine consciousness. Unlike other sages who retreat from society, he uses his spiritual prowess to ease human suffering and enhance our inner peace and happiness. Additionally, he empowers us to navigate life's challenges with strength, helping us to settle our karmic debts.",
        itemIndex: 1,
      },
      {
        id: "asht_siddhi's_&_nav_nidhis",
        index: 2,
        img: theSaintImage3,
        tagline: "Saint",
        title: "Siddhis",
        text: "SiddhGuru acquired all eight Siddhis, mastering 17,868 Vidhis with guidance from Guru Devraha Baba. Born with three Siddhis, he achieved the remaining through rigorous practice, completing them in under twelve years with Baba's support. Additionally, Gurudev has attained nine Nidhis, divine supernatural treasures. Followers testify to SiddhGuru's ability to manifest in extraordinary ways, using these divine energies to assist those in desperate situations, showcasing the profound impact of his spiritual mastery and compassion.",
        itemIndex: 2,
      },
      {
        id: "brahma_shakti",
        index: 3,
        img: brahmaShaktiImg,
        tagline: "Saint",
        title: "Brahma Shakti",
        text: "Brahma Shakti embodies Sri SiddhGuru's divine energy, aimed at elevating our consciousness and awakening our spiritual essence. It manifests itself in different forms. Through Braham Sparsh, he activates a spark of divine energy by touching the third eye while you meditate. Similarly, Brahma Drishti involves a transformative gaze directly into your eyes. Brahma Prasad, a physically energized divine object, offers both protection and energy for soul elevation. These practices deepen our spiritual connection with Sri SiddhGuru, positioning him as a guiding light for enhancing our lives.",
        itemIndex: 3,
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        id: "anant_diksha",
        img: image1,
        tagline: "Vision",
        title: "Vision",
        text: "Sri SiddhGuru aims to revolutionize lives through Vedic science's hidden powers. Utilizing Brahm Shakti, he enables individuals to unlock their potential, elevate consciousness, and achieve unparalleled peace and harmony. This transformation surpasses ordinary understanding, accessing profound awareness beyond our minds' limits. SiddhGuru's guidance enhances personal growth and links us to a broader, enlightened purpose, fostering a more awakened society.",
        itemIndex: 4,
      },
      {
        id: "siddhasana",
        img: image2,
        tagline: "Vision",
        title: "Siddhasana",
        text: "Siddhasana is a unique life-changing experience, focusing on self-discovery and reconnecting with your true self in silence. This retreat is structured into seven levels, each designed to help calm and focus your mind, leading to a more conscious and fulfilling life. With activities and guidance tailored to each stage, you'll deeply engage with your inner self. By the end of each level, participants typically feel deep satisfaction and joy, having found a closer connection to their authentic essence.",
        itemIndex: 5,
      },
      {
        id: "ashram",
        img: image3,
        tagline: "Vision",
        title: "Ashram",
        text: "Discover the serene SiddhGuru's Ashram near Tirupati, nestled among sacred hills. This spiritual sanctuary offers more than just solace; it's a place where tranquility meets divine energy, creating a peaceful retreat from everyday life. Here, the world's noise diminishes, replaced by a spiritual calm that leads you to inner peace. Experience the essence of SiddhGuru's wisdom in every corner, making every moment a chance for enlightenment and soulful rejuvenation.",
        itemIndex: 6,
      },
      {
        id: "world_spiritual_forum",
        img: image4,
        tagline: "Vision",
        title: "World Spiritual Forum",
        text: "The World Spiritual Forum brings together people from all over the world, sharing SiddhGuru's vision of reaching a higher consciousness. This global network shows that searching for spiritual truth is something everyone can relate to, no matter where they are. It proves that the journey towards self-realization and peace knows no borders.",
        itemIndex: 7,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        img: wisdomImage1,
        title: "Wisdom",
        tagline: "Wisdom",
        text: "Sri SiddhGuru emphasizes the importance of having a harmonious liaison between Adhyatmikta (Spirituality) and Adhunikta in our lives. He encourages us to excel in all three phases of life – learning, earning and ultimately returning (to society) because service to humanity is the best work of life. Sri SiddhGuru imparts his wisdom not only through words but also by acting as a catalyst for positive changes in our lives through his divine energy.",
        itemIndex: 8,
      },
      {
        img: wisdomImage2,
        tagline: "Wisdom",
        title: "Spiritual Wisdom",
        text: "Happy moment – praise God; difficult moment – seek God; painful moment – trust God; every moment – thank God.",
        text2: "When our fate closes all doors, our faith opens new doors.",
        text3:
          "Our life is a gift from God. The way we live our life will be our return gift to God.",
        text4:
          "It is not a question of how powerful our God is but how powerful our faith is.",
        text5:
          "Man with intelligence has many questions; the man with surrender has all the answers.",
        text6: "Man cannot do God's work. God can but will not do man's work.",
        itemIndex: 9,
      },
      {
        img: wisdomImage3,
        tagline: "Wisdom",
        title: "Social Wisdom",
        text: "Service to humanity is the best work of life.",
        text2:
          "We understand less, explain more, and hence get entangled more and sorted less.",
        text3: "Be useful to others in life or society will not value you.",
        text4:
          "It is not important what you leave for your children. It is important what you leave in them.",
        text5:
          "Your life will serve in two ways – either as an example for others or as a warning for others.",
        itemIndex: 10,
      },
      {
        img: wisdomImage4,
        tagline: "Wisdom",
        title: "Professional Wisdom",
        text: "For Success in life, you need a combination of intelligence, hard work, focus, timing, and even luck.",
        text2:
          "Success is made of big things - it takes time; happiness is made of small things - it takes no time.",
        text3: "Try and fail, but never fail to try.",
        text4:
          "Experience is not what happened to you. It is what you do with what happened to you.",
        itemIndex: 11,
      },
    ],
  },
  // {
  //   id: 3,
  //   data: [
  //     {
  //       img: brahmaShaktiImg,
  //       title: "Brahma Shakti",
  //       tagline: "Brahma Shakti",
  //       text: "Brahma Shakti embodies Sri SiddhGuru's divine energy, aimed at elevating our consciousness and awakening our spiritual essence. It manifests itself in different forms. Through Braham Sparsh, he activates a spark of divine energy by touching the third eye while you meditate. Similarly, Brahma Drishti involves a transformative gaze directly into your eyes. Brahma Prasad, a physically energized divine object, offers both protection and energy for soul elevation. These practices deepen our spiritual connection with Sri SiddhGuru, positioning him as a guiding light for enhancing our lives.",
  //       itemIndex: 11,
  //     },
  //   ],
  // },
];
const theSaintHindiData = [
  {
    id: 0,
    data: [
      {
        id: "life_of_nutshell",
        index: 0,
        img: theSaintImage1,
        tagline: "श्री सिद्धगुरु",
        title: "श्री सिद्धगुरु",
        text: "प्रेम, करुणा, विनम्रता, और सादगी की मूरत श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] आज के ज़माने के परम पूजनीय संत-महात्माओं में से एक हैं। वह भारत की सबसे पुरातन संन्यासी प्रथा से जुड़े हुए हैं और विश्वस्तर पर भारतीय संस्कृति को आज आगे बढ़ा रहे हैं। अपनी कुंडलिनी को जागृत कर अष्ट सिद्धि एवं नव निधियों पर विजय प्राप्त कर चुके श्री सिद्धगुरु आध्यात्मिक जागरण की अलख जगाने के लिए हम सब के बीच आए हैं। उनके साथ एक आध्यात्मिक नाता जोड़ कर आप अपने जीवन में सुख और शांति का ऐसा अनुभव प्राप्त कर सकते हैं जो शायद आज आपकी सोच से परे हो। यह संभव है क्योंकि गुरुदेव के पास है - समय की सीमा के परे जा कर आपके जीवन को संवारने की अदभुत शक्तियां।",
        itemIndex: 0,
      },
      {
        id: "kundalini",
        index: 1,
        img: theSaintImage2,
        tagline: "श्री सिद्धगुरु",
        title: "कुंडलिनी",
        text: "कुंडलिनी हमारे शरीर के अंदर छिपी एक आध्यात्मिक ऊर्जा है जो अपने सर्वोच्च स्तर पर तब पहुंचती है जब सभी चक्रों को जागृत किया जाए। यह एक ऐसी उपलब्धि है जिसे प्राप्त करने में एक आत्मा को कई जन्म लग जाते हैं और फिर भी उसे प्राप्त करना लगभग असंभव होता है। अद्भुत दिव्य चेतना के स्वामी, श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] उन गिने-चुने सिद्धात्माओं में से एक हैं जिनकी कुंडलिनी एवं सभी चक्र जन्म से ही जागृत थे। अन्य साधकों से अलग सोच के साथ, समाज से दूर जाने के बजाय उन्होंने अपनी दिव्य शक्तियों को मानवता की सेवा में लगाते हुए लोगों के दुःख-दर्द दूर कर उन्हें मन की शांति दिलाने के रास्ते को चुना। साथ ही, जिंदगी की चुनौतियों का सामना करने एवं अपने पिछले जन्म के कर्म बंधनों से मुक्ति पाने में वे हम सब की मदद करते हैं।",
        itemIndex: 1,
      },
      {
        id: "asht_siddhi's_&_nav_nidhis",
        index: 2,
        img: theSaintImage3,
        tagline: "श्री सिद्धगुरु",
        title: "सिद्धियां",
        text: "अपने गुरु श्री देवराहा बाबा के मार्गदर्शन में 17,868 से भी अधिक विधियों में महारथ प्राप्त कर श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] ने सभी आठ सिद्धियां प्राप्त की। तीन सिद्धियों के साथ इस दुनिया में अवतरित हुए गुरुदेव ने देवराहा बाबा की मदद से बाकी की 5 सिद्धियां अगले बारह वर्षों में कठोर तपस्या के द्वारा प्राप्त की। साथ ही, गुरुदेव ने अलौकिक शक्ति प्रदान करने वाली नव निधियों को भी प्राप्त किया। गुरुदेव के सभी भक्त अपने जीवन की कठिन परिस्थितियों में अलग अलग रूपों में उनका साक्षात्कार करने के अनुभवों का वर्णन करते हैं जो गुरुदेव की दिव्य शक्तियाँ, आध्यात्मिक ऊर्जा एवं करुणा के परिचायक है।",
        itemIndex: 2,
      },
      {
        id: "brahma_shakti",
        index: 3,
        img: brahmaShaktiImg,
        tagline: "श्री सिद्धगुरु",
        title: "ब्रह्म शक्ति",
        text: "श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] में समाहित दिव्य शक्ति जो हमारे चैतन्य के स्तर को ऊंचा उठाने और आध्यात्मिक जागृति लाने में मदद करती है - वह है ब्रह्म शक्ति। जब आप ध्यान में बैठते हैं तब आपके तीसरे नेत्र के स्थान पर गुरुदेव अपने ब्रह्म स्पर्श द्वारा दिव्य ऊर्जा की गंगा बहाते हैं। उसी तरह, आपकी आंखों में आँखें मिला कर गुरुदेव ब्रह्म दॄष्टि द्वारा आपकी आत्मा में जागृति लाते हैं और अपनी दिव्य ऊर्जा को भौतिक पदार्थों द्वारा ब्रह्म प्रसाद के ज़रिए गुरुदेव आपके शरीर की रक्षा करते हैं। यह तीन अनुभूतियाँ आपको गुरुदेव के साथ अपने आध्यात्मिक जुड़ाव को और मज़बूत करने में मदद करती हैं और जीवनभर आपका मार्गदर्शन करती हैं।",
        itemIndex: 3,
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        id: "anant_diksha",
        img: image1,
        tagline: "संकल्प",
        title: "ध्येय",
        text: "श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] का ध्येय है - वैदिक विज्ञान में छिपी शक्तियां एवं ज्ञान को सामान्य मानव तक पहुंचाकर उनके जीवन को बेहतर बनाना। वे अपनी ब्रह्म शक्तियों के द्वारा लोगो की चेतना के स्तर को बढ़ाने एवं उनकी क्षमताओं को पहचानने में उनकी सहायता करते हैं जिससे वे जीवन में सुख एवं शांति का अनुभव करते हैं I यह एक ऐसा परिवर्तन होता है जिसकी अनुभूति सामान्य समझ के परे होती है। गुरुदेव का मार्गदर्शन निजी जीवन में विकास के साथ साथ लोगों को एक नैतिक एवं सामाजिक स्तर पर एक साथ जुड़ने के लिए प्रेरित करता है जो अंततः  एक जागृत समाज का निर्माण करता है।",
        itemIndex: 4,
      },
      {
        id: "siddhasana",
        img: image2,
        tagline: "संकल्प",
        title: "सिद्धासना",
        text: "सिद्धासना एक अद्वितीय, दैविक (divine) अनुभव है जिसमें मौन के द्वारा अपनी अंतरात्मा को खोजने एवं उससे जुड़ने पर ध्यान केंद्रित किया जाता है। यह रिट्रीट सात अलग अलग चरणों में विभाजित किया गया है जिसका हर एक चरण आपको एकाग्रता और शांतचित्तता देने के साथ साथ एक जीवन अधिक चैतन्यमय व् सार्थक करने में मदद करता है। हर चरण के लिए निर्धारित प्रक्रियाओं तथा मार्गदर्शन द्वारा आप अपनेआप से एक अधिक गहरा नाता जोड़ पाएंगे। हर चरण के अंत में आप खुद को और भी अच्छे तरीके से जान पाएंगे और एक परमानन्द की अनुभूति कर पाएंगे।",
        itemIndex: 5,
      },
      {
        id: "ashram",
        img: image3,
        tagline: "संकल्प",
        title: "आश्रम",
        text: "तिरुमला की पवित्र पर्वतमाला में तिरुपति शहर के पास स्थित है श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] का दिव्य और भव्य आश्रम। यह एक आध्यात्मिक तपोभूमि है जहाँ पर आप प्रतिदिन की भागदौड़ से मुक्ति के साथ साथ असीम शांति और पावन ऊर्जा का अनुभव कर पाएंगे। यहाँ के कण-कण में आपको गुरुदेव की ज्ञानसरिता बहती मिलेगी और क्षण-क्षण में नवीन ऊर्जा का संचार पाएंगे।",
        itemIndex: 6,
      },
      {
        id: "world_spiritual_forum",
        img: image4,
        tagline: "संकल्प",
        title: "World Spiritual Forum",
        text: "The World Spiritual Forum brings together people from all over the world, sharing SiddhGuru's vision of reaching a higher consciousness. This global network shows that searching for spiritual truth is something everyone can relate to, no matter where they are. It proves that the journey towards self-realization and peace knows no borders.",
        itemIndex: 7,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        img: wisdomImage1,
        title: "विचारधारा",
        tagline: "ज्ञान",
        text: "श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] हर व्यक्ति को जीवन में आध्यात्मिकता एवं आधुनिकता में एक संतुलित समन्वय लाने पर महत्त्व देते हैं। गुरुदेव सभी को जीवन के इन तीन चरणों में सर्वोच्च सिद्धि प्राप्त करने के लिए प्रेरित करते हैं - ज्ञान अर्जन, उपार्जन और दान अर्थात समाज को लौटाना, क्योंकि मानवता की सेवा ही सबसे महान कर्म है। गुरुदेव न सिर्फ अपने शब्दों से यह बात समझाते हैं बल्कि हैं वे अपनी दिव्य शक्तिओं के द्वारा सभी के जीवन में एक सकारात्मक बदलाव लाने में भी मदद करते हैं।",
        itemIndex: 8,
      },
      {
        img: wisdomImage2,
        tagline: "विचारधारा",
        title: "आध्यात्मिक ज्ञान",
        text: " खुशी में - प्रभु को भजो; कठिन समय में - प्रभु को ढूंढो; दुःख  में - प्रभु पर भरोसा रखो; हर समय - प्रभु का धन्यवाद करो।",
        text2:
          "जब भाग्य सभी दरवाज़े बंद कर देता है, भक्ति नये दरवाज़े खोल देती है।",
        text3:
          "हमारा जीवन भगवान का दिया हुआ 'गिफ़्ट' है। हम इस जीवन को कैसे जीते हैं वह हमारी तरफ से भगवान के लिए 'रिटर्न गिफ्ट' है।",
        text4:
          "सवाल यह नहीं है कि भगवान कितने शक्तिशाली है, सवाल यह है कि हमारी आस्था कितनी शक्तिशाली है।",
        text5:
          "बुद्धिजीवी के पास कई सवाल होते है परंतु समर्पण की भावना वाले व्यक्ति के पास सारे जवाब होते हैं।",
        text6:
          "भगवान का काम मनुष्य नहीं कर सकता; मनुष्य का काम भगवान कर सकते हैं, पर नहीं करते हैं क्योंकि हमारे कर्म हमें ही करने होते हैं।",
        itemIndex: 9,
      },
      {
        img: wisdomImage3,
        tagline: "विचारधारा",
        title: "सामाजिक ज्ञान",
        text: "मानवता की सेवा ही सबसे महान कर्म है।",
        text2:
          "हम समझते कम और समझाते ज़्यादा हैं, इसीलिए हम सुलझते कम और उलझते ज़्यादा हैं।",
        text3: "अगर दूसरों के काम नहीं आओगे तो समाज आपको सम्मान नहीं देगा।",
        text4:
          "यह महत्वपूर्ण नहीं है की आप अपने बच्चों के लिए क्या छोड़ कर जाते हो। महत्वपूर्ण यह है की आप उनके अंदर क्या छोड़ कर जाते हो।",
        text5:
          "आपका जीवन दो तरीकों से किसी के काम आ सकता है - या तो एक उदहारण के रूप में या फिर एक चेतावनी के रूप में।",
        itemIndex: 10,
      },
      {
        img: wisdomImage4,
        tagline: "विचारधारा",
        title: "व्यावसायिक ज्ञान",
        text: "जीवन में सफलता के लिए इन सब का समन्वय ज़रूरी है - बुद्धिमत्ता, कठोर परिश्रम, ध्यान, समयबद्धता और भाग्य।",
        text2:
          "सफलता ऐसी बड़ी चीज़ों पर आधारित होती है जो अधिक समय लेती है; खुशियां ऐसी छोटी चीज़ों पर आधारित होती है जो कम समय लेती है।",
        text3:
          "प्रयत्न कर के चूक जाओ तो चलेगा परंतु प्रयत्न करने से कभी मत चूको।",
        text4:
          "आपके साथ क्या हुआ वह 'अनुभव' नहीं है; जो हुआ उससे आपने क्या सीखा - वह असली 'अनुभव' है।",
        itemIndex: 11,
      },
    ],
  },
  // {
  //   id: 3,
  //   data: [
  //     {
  //       img: brahmaShaktiImg,
  //       title: "Brahma Shakti",
  //       tagline: "Brahma Shakti",
  //       text: "Brahma Shakti embodies Sri SiddhGuru's divine energy, aimed at elevating our consciousness and awakening our spiritual essence. It manifests itself in different forms. Through Braham Sparsh, he activates a spark of divine energy by touching the third eye while you meditate. Similarly, Brahma Drishti involves a transformative gaze directly into your eyes. Brahma Prasad, a physically energized divine object, offers both protection and energy for soul elevation. These practices deepen our spiritual connection with Sri SiddhGuru, positioning him as a guiding light for enhancing our lives.",
  //       itemIndex: 11,
  //     },
  //   ],
  // },
];

const tabData1 = [
  {
    title: "Sri SiddhGuru",
    id: 0,
  },
  {
    title: "Kundalini",
    id: 1,
  },
  {
    title: "Siddhis",
    id: 2,
  },
  {
    title: "Brahma Shakti",
    id: 3,
  },
];
const tabData2 = [
  {
    title: "Vision",
    id: 4,
  },
  {
    title: "Siddhasana",
    id: 5,
  },
  {
    title: "Ashram",
    id: 6,
  },
  {
    title: "World Spiritual Forum",
    id: 7,
  },
];
const tabData3 = [
  {
    title: "Wisdom",
    id: 8,
  },
  {
    title: "Spiritual Wisdom",
    id: 9,
  },
  {
    title: "Social Wisdom",
    id: 10,
  },
  {
    title: "Professional Wisdom",
    id: 11,
  },
];
const tabHindiData1 = [
  {
    title: "श्री सिद्धगुरु",
    id: 0,
  },
  {
    title: "कुंडलिनी",
    id: 1,
  },
  {
    title: "सिद्धियां",
    id: 2,
  },
  {
    title: "ब्रह्म शक्ति",
    id: 3,
  },
];
const tabHindiData2 = [
  {
    title: "ध्येय",
    id: 4,
  },
  {
    title: "सिद्धासना",
    id: 5,
  },
  {
    title: "आश्रम",
    id: 6,
  },
  {
    title: "World Spiritual Forum",
    id: 7,
  },
];
const tabHindiData3 = [
  {
    title: "ज्ञान",
    id: 8,
  },
  {
    title: "आध्यात्मिक ज्ञान",
    id: 9,
  },
  {
    title: "सामाजिक ज्ञान",
    id: 10,
  },
  {
    title: "व्यावसायिक ज्ञान",
    id: 11,
  },
];
// const tabData4 = [
//   {
//     title: "Brahm Shakti",
//     id: 11,
//   },
// ];

const TabSectionNew = () => {
  const [activeMainTab, setActiveMainTab] = useState("tab1");
  const [tabContent1, setTabContent1] = useState(0);
  const [tabContent2, setTabContent2] = useState(0);
  const [tabContent3, setTabContent3] = useState(0);
  // const [tabContent4, setTabContent4] = useState(0);
  const [tabContent1Mobile, setTabContent1Mobile] = useState(false);
  const [tabContent2Mobile, setTabContent2Mobile] = useState(false);
  const [tabContent3Mobile, setTabContent3Mobile] = useState(false);
  // const [tabContent4Mobile, setTabContent4Mobile] = useState(false);
  const [count, setCount] = useState(0);
  const { language, switchLanguage } = useContext(LanguageContext);
  console.log("language: ", language);

  // const language = localStorage.getItem("lang");
  const handleNext = () => {
    if (count < 11) {
      setCount(count + 1);
    }
    // handleCountTab();
  };

  // const handleCountTab = () => {
  //   if (count < 2) {
  //     setActiveMainTab("tab1");
  //     console.log("tabChangesCount",count);
  //   }
  //   if (count > 2 && count < 5) {
  //     setActiveMainTab("tab2");
  //     console.log(count);
  //   }
  //   if (count > 5) {
  //     setActiveMainTab("tab3");
  //     console.log(count);
  //   }
  // };

  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    // handleCountTab();
  };
  console.log("count", count);
  console.log("activeTab", activeMainTab);

  const handleTab1 = () => {
    setActiveMainTab("tab1");
    setCount(0);
  };
  const handleTab2 = () => {
    setActiveMainTab("tab2");
    setCount(4);
  };
  const handleTab3 = () => {
    setActiveMainTab("tab3");
    setCount(8);
  };
  // const handleTab4 = () => {
  //   setActiveMainTab("tab4");
  //   setCount(12 );
  // };
  const handleTab1Mobile = () => {
    setTabContent1Mobile(!tabContent1Mobile);
  };
  const handleTab2Mobile = () => {
    setTabContent2Mobile(!tabContent2Mobile);
  };
  const handleTab3Mobile = () => {
    setTabContent3Mobile(!tabContent3Mobile);
  };
  // if (count > 0) {
  //   setActiveMainTab("tab1");
  // }
  return (
    <div className="tabSectionNewNew">
      <div className="tabSectionNewNew_wrapper">
        <BigHeadingSmallHeading
          bigHeading={"Sri Sidheshwar Brahmarishi SiddhGuru."}
          smallHeading={
            "Transforming Lives with the supreme power of Vedic Science."
          }
        />
        <div className="mainTab">
          <div className="mainTab_wrapper">
            <div
              className={`${
                activeMainTab === "tab1" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab1}
            >
              <img src={mainTabImage1} alt="mainTab" />
              <div className="mainTab_name">
                {language === "en" ? "Saint" : "श्री सिद्धगुरु"}
              </div>
            </div>
            <div
              className={`${
                activeMainTab === "tab2" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab2}
            >
              <img src={mainTabImage2} alt="mainTab" className="visionTab" />
              <div className="mainTab_name">
                {language === "en" ? "Vision" : "संकल्प"}
              </div>
            </div>
            <div
              className={`${
                activeMainTab === "tab3" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab3}
            >
              <img src={mainTabImage3} alt="mainTab" />
              <div className="mainTab_name">
                {language === "en" ? "Wisdom" : "विचारधारा"}
              </div>
            </div>
            {/* <div
              className={`${
                activeMainTab === "tab4" ? "active" : ""
              } mainTab_wrapper_image`}
              onClick={handleTab4}
            >
              <img src={mainTabImage3} alt="mainTab" />
              <div className="mainTab_name">Brahm Shakti</div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="innerTabs">
        <div className="innerTabs_wrapper">
          {activeMainTab === "tab1" && (
            <div className="tabs">
              <ul>
                {(language === "en" ? tabData1 : tabHindiData1).map(
                  (item, index) => (
                    <li
                      key={index}
                      className={`${tabContent1 === index ? "active" : ""}`}
                      onClick={() => {
                        setTabContent1(index);
                        setCount(item.id);
                      }}
                    >
                      {item.title}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
          {activeMainTab === "tab2" && (
            <div className="tabs">
              <ul>
                {(language === "en" ? tabData2 : tabHindiData2).map(
                  (item, index) => (
                    <li
                      key={index}
                      className={`${tabContent2 === index ? "active" : ""}`}
                      onClick={() => {
                        setTabContent2(index);
                        setCount(item.id);
                      }}
                    >
                      {item.title}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
          {activeMainTab === "tab3" && (
            <div className="tabs">
              <ul className="thirdTabTitle">
                {(language === "en" ? tabData3 : tabHindiData3).map(
                  (item, index) => (
                    <li
                      key={index}
                      className={`${tabContent3 === index ? "active" : ""}`}
                      onClick={() => {
                        setTabContent3(index);
                        setCount(item.id);
                      }}
                    >
                      {item.title}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
          {activeMainTab === "tab4" && (
            <div className="tabs">
              <ul className="forthTabTitle">
                {tabData4.map((item, index) => (
                  <li
                    key={index}
                    className={`${tabContent4 === index ? "active" : ""}`}
                    onClick={() => {
                      setTabContent4(index);
                      setCount(item.id);
                    }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={`innerTabs_data ${activeMainTab}`}>
          {(language === "en" ? theSaintData : theSaintHindiData).map((item) =>
            item.data.map(
              (item, index) =>
                count === item.itemIndex && (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                )
            )
          )}
          {/* {visionData.map(
            (item, index) =>
              count === item.itemIndex && (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              )
          )}
          {wisdomData.map(
            (item, index) =>
              count === item.itemIndex && (
                <LeftRIghtImageContent
                  key={index}
                  {...item}
                  index={index}
                  titleColor={"#1D5A3F"}
                />
              )
          )} */}
        </div>
        <div className="arrows">
          <div className="arrows_wrapper">
            <button onClick={handlePrev} disabled={count === 0 ? true : false}>
              {count > 0 && (
                <>
                  <img src={arrows} alt="arrow" className="default left" />
                  <img src={whiteArrow} alt="arrow" className="hover left" />
                </>
              )}
              Prev
            </button>
            <button onClick={handleNext} disabled={count === 11 ? true : false}>
              Next
              {count < 11 && (
                <>
                  <img src={arrows} alt="arrow" className="default" />
                  <img src={whiteArrow} alt="arrow" className="hover" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* <div className="tabSection_mobile">
        <div className="tabSection_mobile_wrapper">
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage1} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text">
                Sri SiddhGuru
              </div>
            </div>
            {tabContent1Mobile && (
              <div className="mobileTab1">
                {theSaintData.map((item, index) => (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                ))}
              </div>
            )}
            <div className="viewmore" onClick={handleTab1Mobile}>
              {tabContent1Mobile ? "View Less" : "View More"}
              {tabContent1Mobile ? (
                <img src={arrow} alt="arrow" className="showLess" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage2} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text">Mission</div>
            </div>
            {tabContent2Mobile === true && (
              <div className="mobileTab2">
                {visionData.map((item, index) => (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                ))}
              </div>
            )}
            <div className="viewmore" onClick={handleTab2Mobile}>
              {tabContent2Mobile ? "View Less" : "View More"}
              {tabContent2Mobile ? (
                <img src={arrow} alt="arrow" className="showLess" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
          <div className="tabSection_mobile_wrapper_tab">
            <div className="tabSection_mobile_wrapper_tab_image">
              <img src={mainTabImage3} alt="mainTabMobile" />
              <div className="tabSection_mobile_wrapper_tab_text ">Wisdom</div>
            </div>
            {tabContent3Mobile === true && (
              <div className="mobileTab3">
                {wisdomData.map((item, index) => (
                  <LeftRIghtImageContent
                    key={index}
                    {...item}
                    index={index}
                    titleColor={"#1D5A3F"}
                  />
                ))}
              </div>
            )}
            <div className="viewmore" onClick={handleTab3Mobile}>
              {tabContent3Mobile ? "View Less" : "View More"}
              {tabContent3Mobile ? (
                <img src={arrow} alt="arrow" className="showLess" />
              ) : (
                <img src={arrow} alt="arrow" />
              )}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default TabSectionNew;
