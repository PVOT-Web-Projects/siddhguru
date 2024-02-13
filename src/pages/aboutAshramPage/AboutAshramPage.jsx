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
import bannerImage from "../../images/Ashram_D.jpg";
import mobilebannerImage from "../../images/Ashram_M.jpg";
import GalleryAshram from "../../components/galleryAshram/GalleryAshram";

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
      <InnerPageBanner
        image={
          "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707834197/pgosswoceox7q8swkq67.jpg"
        }
        mobileImage={
          "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707834247/h5gwtgeiejoq7o7o3uct.jpg"
        }
        bigText={"Awaken Your Soul: SiddhGuru's Ashram,"}
        bigText2={"Where Transformation Begins"}
      />
      <InnerPageCommonText
        boldText={"Sri Sidheshwar Tirth (Near Brahmrishi Ashram, Tirupati)"}
        text1={
          " stands as a revered spiritual pilgrimage site drawing thousands of devotees and pilgrims from around the globe annually. Blessed by the divine presence of Sri Siddhaguru, this sacred abode resonates with fervor during celebrated festivals such as Navaratri, Diwali, Shivaratri, and Guru Purnima."
        }
        text2={
          "Additionally, the ashram hosts free three-day and seven-day Siddhasana retreats, attracting seekers from diverse corners of the world who depart enriched with spiritual wisdom and the bliss of eternal fulfillment. Positioned on the sacred soil of India, this pilgrimage site radiates with an inherent spiritual energy, serving as a beacon of enlightenment and transformation for all who tread its hallowed grounds."
        }
        text3={
          "The sanctity of this place has touched countless souls, offering profound experiences of Sri Gurudev's divine grace."
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
      <GalleryAshram />
      <div className="aboutAshramPage_wrapper"></div>
    </div>
  );
};
export default AboutAshramPage;
