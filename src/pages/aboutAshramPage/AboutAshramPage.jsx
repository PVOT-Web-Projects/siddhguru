import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import "./aboutAshramPage.scss";
import image1 from "../../images/aboutAshramImage1.png";
import image2 from "../../images/aboutAshramImage2.png";
import image3 from "../../images/aboutAshramImage3.png";
import AboutAshramImages from "../../components/aboutAshramImages/AboutAshramImages";

const AboutAshramPage = () => {
  const aboutAshramImages = [
    {
      imageUrl1: image1,
      imageUrl2: image2,
      imageUrl3: image3,
    },
  ];
  return (
    <div className="aboutAshramPage">
      <InnerPageCommonHeading
        heading={"Shri Siddheshwar Tirth - Shree Brahmrishi Ashram"}
      />
      <InnerPageCommonText
        text1={
          "Step into the sacred embrace of Shri Brahmrishi Ashram, your gateway to spiritual liberation, blessed by Gurudev, for a profound journey to ultimate freedom, Moksha. Feel the divine energy surrounding you as you connect with our master upon entering. Touch the sacred ground, seeking healing power to fortify the body and spirit. Walk reverently, for this ground was sanctified by Lord Vishnu and revived by Shri Gurudev's spiritual energy. Strengthened by His sadhana, you embark on your spiritual quest, surrendering to His divine feet."
        }
        text2={
          "Shree Brahmrishi Ashram is infused with positive energies through daily pooja and saadhna practices. The melodies of bells and chants restore energy, ensuring peace and happiness. The philosophy of AA+SHRAM encourages service through seva and saadhna, fostering both physical and mental well-being. Here immerse yourself with an opportunity where you can experience both worship of GOD and the blessing of GURU who take us to the GOD. "
        }
        text3={
          "Embrace yourself in worship and the Guru's blessings with Trimukha Ganesh Mandir, Shree Laksmi Narayan Mandir, and Shree Brahmeshwar Parshavnath Jeeravala. Swarn Jain Mandir, Shree Brahmeshwar Mahadev, Shree Dhyan Mandir, Mata Hall, Dhyan Kendra, Gaushala, and a unique energy centre."
        }
      />
      {aboutAshramImages.map((item, index) => (
        <AboutAshramImages key={index} {...item} />
      ))}
      <div className="aboutAshramPage_wrapper"></div>
    </div>
  );
};
export default AboutAshramPage;
