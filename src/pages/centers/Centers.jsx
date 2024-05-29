// import CardItem from "../../components/CardItem/CardItem";
import FullWidthImageSec from "../../components/fullWidthImageSec/FullWidthImageSec";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
// import TwoCardSection from "../../components/twoCardSection/TwoCardSection";
import bigImage1 from "../../images/centerPage_bigImage1.png";
import bigImage2 from "../../images/centerPage_bigImage2.png";
// import centerTopCardImage1 from "../../images/gujrat.png";
// import centerTopCardImage2 from "../../images/maharashrta.png";
// import centerTopCardImage3 from "../../images/delhi.png";
// import centerBottomCardImage1 from "../../images/uk.png";
// import centerBottomCardImage2 from "../../images/usa.png";
// import centerBottomCardImage3 from "../../images/australia.png";
import "./centers.scss";

// const centerTopCards = [
//   {
//     image: centerTopCardImage1,
//     title: "Welcome New year with enthusiasm and Smile",
//     content:
//       "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile. Take lesson…",
//     imageText: "Gujrat",
//     colorGradient:
//       "linear-gradient(0deg, #A44F00 -4.37%, rgba(217, 217, 217, 0.00) 102.81%)",
//   },
//   {
//     image: centerTopCardImage2,
//     title: "Welcome New year with enthusiasm and Smile",
//     content:
//       "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile. Take lesson…",
//     imageText: "Maharashtra",
//     colorGradient:
//       "linear-gradient(0deg, rgba(244, 210, 182, 0.60) -4.37%, rgba(217, 217, 217, 0.00) 102.81%)",
//   },
//   {
//     image: centerTopCardImage3,
//     title: "Welcome New year with enthusiasm and Smile",
//     content:
//       "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile. Take lesson…",
//     imageText: "Delhi",
//     colorGradient:
//       "linear-gradient(0deg, #0073A4 -4.37%, rgba(217, 217, 217, 0.00) 102.81%)",
//   },
// ];
// const centerBottomCards = [
//   {
//     image: centerBottomCardImage1,
//     title: "Welcome New year with enthusiasm and Smile",
//     content:
//       "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile. Take lesson…",
//     imageText: "UK",
//     colorGradient:
//       "linear-gradient(0deg, #A44F00 -4.37%, rgba(217, 217, 217, 0.00) 102.81%)",
//   },
//   {
//     image: centerBottomCardImage2,
//     title: "Welcome New year with enthusiasm and Smile",
//     content:
//       "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile. Take lesson…",
//     imageText: "USA",
//     colorGradient:
//       "linear-gradient(0deg, rgba(244, 210, 182, 0.60) -4.37%, rgba(217, 217, 217, 0.00) 102.81%)",
//   },
//   {
//     image: centerBottomCardImage3,
//     title: "Welcome New year with enthusiasm and Smile",
//     content:
//       "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile. Take lesson…",
//     imageText: "Australia",
//     colorGradient:
//       "linear-gradient(0deg, #0073A4 -4.37%, rgba(217, 217, 217, 0.00) 102.81%)",
//   },
// ];

const Centers = () => {
  return (
    <div className="centers">
      <InnerPageCommonHeading heading={"Centers"} />
      <InnerPageCommonText
        text1={
          "Immerse yourself in a sanctuary where ancient wisdom meets modern seekers. At our centres, we open the doors to a world where spirituality is not just a practice but a way of life, and every step leads you closer to the essence of your being. Welcome to a space where the spiritual journey unfolds and seekers from around the globe connect in the pursuit of divine wisdom."
        }
      />
      {/* <TwoCardSection /> */}
      <FullWidthImageSec
        id={"indian"}
        imageUrl={bigImage1}
        text={
          "As Gurudev always says there are 3 stages of everyone’s life - “Learning; Learning and Earning; Learning, Earning and Returning”"
        }
      />
      {/* <div className="cardList">
        {centerTopCards?.map((item, index) => (
          <CardItem
            key={index}
            id={index}
            imageUrl={item.image}
            title={item.title}
            description={item.content}
            imageText={item.imageText}
          />
        ))}
      </div> */}
      <FullWidthImageSec
        id={"international"}
        imageUrl={bigImage2}
        text={
          "As Gurudev always says there are 3 stages of everyone’s life - “Learning; Learning and Earning; Learning, Earning and Returning”"
        }
      />
      {/* <div className="cardList">
        {centerBottomCards?.map((item, index) => (
          <CardItem
            key={index}
            id={index}
            imageUrl={item.image}
            title={item.title}
            description={item.content}
            imageText={item.imageText}
          />
        ))}
      </div> */}
    </div>
  );
};
export default Centers;
