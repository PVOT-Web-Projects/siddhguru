import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import "./aboutAshramPage.scss";
import image1 from "../../images/aboutAshramImage1.png";
import image2 from "../../images/aboutAshramImage2.png";
import image3 from "../../images/aboutAshramImage3.png";
import image1_mobile from "../../images/aboutAshramImage1_mobile.png";
import AboutAshramImages from "../../components/aboutAshramImages/AboutAshramImages";
import HeadingTextAnimation from "../../components/HeadingAnimation/HeadingTextAnimation";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/AshramPage.jpg";

const AboutAshramPage = () => {
  const aboutAshramImages = [
    {
      imageUrl1: image1,
      imageUrl1_mobile: image1_mobile,
      imageUrl2: image2,
      imageUrl3: image3,
    },
  ];
  return (
    <div className="aboutAshramPage">
      {/* <InnerPageCommonHeading
        heading={"Shri Siddheshwar Tirth - Shree Brahmrishi Ashram"}
      /> */}
      <InnerPageBanner image={bannerImage} />
      <InnerPageCommonText
        boldText={"'Sri Siddheshwar Teerth'"}
        text1={
          " is a spiritual pilgrimage site located near Tirupati, Andhra Pradesh, India. Every year, thousands of pilgrims and devotees from around the world visit this sacred abode. In the presence of Sri Siddhaguru, various festivals like Navaratri, Diwali, Shivaratri, Guru Purnima are celebrated with great enthusiasm every year. Coming to this sacred place, countless individuals have experienced the divine presence of Guruji."
        }
        text2={
          "In this ashram, a three-day and seven-day Siddhasana retreat is also organized, which is free of cost, and people from all over the world come here to benefit from it. They leave with the divine knowledge and experience of eternal happiness in their lives. This pilgrimage site on the spiritual land of India is a center of energy in itself."
        }
        // text3={
        //   "Embrace yourself in worship and the Guru's blessings with Trimukha Ganesh Mandir, Shree Laksmi Narayan Mandir, and Shree Brahmeshwar Parshavnath Jeeravala. Swarn Jain Mandir, Shree Brahmeshwar Mahadev, Shree Dhyan Mandir, Mata Hall, Dhyan Kendra, Gaushala, and a unique energy centre."
        // }
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
      {aboutAshramImages.map((item, index) => (
        <AboutAshramImages key={index} {...item} />
      ))}
      <div className="aboutAshramPage_wrapper"></div>
    </div>
  );
};
export default AboutAshramPage;
