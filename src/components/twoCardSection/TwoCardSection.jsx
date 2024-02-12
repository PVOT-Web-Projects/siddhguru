import image1 from "../../images/twoCardImage1.png";
import image2 from "../../images/twoCardImage2.png";
import TwoCardItem from "./TwoCardItem";
import "./twoCardSection.scss";

const twoCardSectionData = [
  {
    id: 0,
    image: image1,
    imageText: "Indian",
    content:
      "For Indians, it is an invitation to discover the spiritual hubs scattered across India, sacred spaces where seekers congregate to bask in the divine presence and engage in transformative spiritual practices. Picture these centres as vibrant hubs, pulsating with the energy of spiritual communion.",
  },
  {
    id: 1,
    image: image2,
    imageText: "International",
    content:
      "Internationally, the exploration extends globally, unveiling SiddhGuru's profound influence through international centres. Here, seekers from diverse cultures unite in a shared spiritual quest, creating a tapestry of global spiritual connection. Each international centre is like a beacon, radiating the universal teachings of SiddhGuru and fostering unity among seekers from different walks of life.",
  },
];

const TwoCardSection = () => {
  return (
    <div className="twoCardSection">
      <div className="twoCardSection_wrapper">
        {twoCardSectionData.map((item) => (
          <TwoCardItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default TwoCardSection;
