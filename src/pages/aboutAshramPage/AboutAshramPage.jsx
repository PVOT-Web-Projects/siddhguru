// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import "./aboutAshramPage.scss";
import image1 from "../../images/aboutAshramImage1.png";
import image2 from "../../images/aboutAshramImage2.png";
import image3 from "../../images/aboutAshramImage3.png";
import image1_mobile from "../../images/aboutAshramImage1_mobile.png";
import AboutAshramImages from "../../components/aboutAshramImages/AboutAshramImages";
// import HeadingTextAnimation from "../../components/HeadingAnimation/HeadingTextAnimation";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
// import bannerImage from "../../images/Ashram_D.jpg";
// import mobilebannerImage from "../../images/Ashram_M.jpg";
import GalleryAshram from "../../components/galleryAshram/GalleryAshram";
import HeadingContentWithImages from "../../components/headingContentWithImages/HeadingContentWithImages";
import gaushalaImage1 from "../../images/gaushalaImage1.jpg";
import gaushalaImage2 from "../../images/gaushalaImage2.jpg";
import dyanMandirImage1 from "../../images/dyanMandirImage1.jpg";
import dyanMandirImage2 from "../../images/dyanMandirImage2.jpg";
import gaushalaImage3 from "../../images/gaushalaImage3.jpg";
import gaushalaImage4 from "../../images/gaushalaImage4.jpeg";

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
          "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916659/kvrsjkzj7ljbotfmttpc.jpg"
        }
        mobileImage={
          "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916690/xwcvldaoobam5vaqxbsb.jpg"
        }
        bigText={"Awaken Your Soul: SiddhGuru's Ashram,"}
        bigText2={"Where Transformation Begins"}
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
      <HeadingContentWithImages
        heading={"Gaushala"}
        content={
          '"Cows are special in Hindu culture, symbolizing purity, abundance, and gentleness. At Sidheshwar Tirth, Brahmrishi Ashram, we deeply respect and cherish these sacred animals, recognizing their significance in our spiritual traditions. Through our Gaushala, we provide a nurturing environment to many cows who are valued and cared for with compassion."'
        }
        // image1={gaushalaImage1}
        image2={gaushalaImage2}
        image3={gaushalaImage3}
        // image4={gaushalaImage4}
      />
      <HeadingContentWithImages
        heading={"Dhyan Mandir"}
        content={
          "Welcome to Sidheshwar Tirth, Brahmrishi Ashram Dhyan Mandir, a peaceful place for meditation and self-reflection. Here, you can escape the hustle and bustle of daily life and find a quiet spot to relax and unwind. Whether you're new to meditation or have been practising for years, our serene sanctuary is open to everyone. Sit quietly, focus on your breath, and let go of stress and worries. It's a space where you can connect with yourself and the divine. Join us as we journey inward and discover the peace that lies within."
        }
        image1={dyanMandirImage1}
        image2={dyanMandirImage2}
      />
      {aboutAshramImages.map((item, index) => (
        <AboutAshramImages key={index} {...item} />
      ))}
      <GalleryAshram />
      <div className="aboutAshramPage_wrapper"></div>
    </div>
  );
};
export default AboutAshramPage;
