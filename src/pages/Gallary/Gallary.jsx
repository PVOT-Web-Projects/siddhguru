import FormHomePage from "../../components/Form_homePage/FormHomePage";
import Galaryimages from "../../components/Gallaryimages/Galaryimage";
import FullWidthImage from "../../components/fullWidthImage/FullWidthImage";
import Galarybanner from "../../components/gallarybaner/Gallarybaner";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import galleryBigImage from "../../images/galleryBigImage.png";
import galleryBigImage2 from "../../images/fullWidthImage.png";
const Gallery = () => {
  return (
    <>
      <Galarybanner />
      <Galaryimages />
      <FullWidthImage image={galleryBigImage} />
      <InnerPageCommonText
        text1={
          "Isha is supported by over 17 million volunteers worldwide in more than 300 centers worldwide. The most prominent of these centers are the Isha Yoga Center in Coimbatore and the Sadhguru Sannidhi in Bengaluru in India, and the Isha Institute of Inner-sciences in Tennessee and Isha Yoga Center in Los Angeles in the United States. These were established by Sadhguru as large-scale infrastructure for raising human consciousness. The centers offer energized spaces for inner transformation, where one can imbibe classical Yoga, meditation, and rejuvenating processes for health and inner freedom."
        }
      />
      <FullWidthImage image={galleryBigImage2} />
      <FormHomePage />
    </>
  );
};
export default Gallery;
