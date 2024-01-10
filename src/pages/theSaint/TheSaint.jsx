import InnerPageCommonHeading2 from "../../components/InnerPageCommonHeading2/InnerPageCommonHeading2";
import LeftRIghtImageContent from "../../components/leftRightImageContent/LeftRightImageContent";
import theSaintImage1 from "../../images/theSaintImage1.png";
import theSaintImage2 from "../../images/theSaintImage2.png";
import theSaintImage3 from "../../images/theSaintImage3.png";
import theSaintImage4 from "../../images/theSaintImage4.png";
import "./theSaint.scss";

const theSaintData = [
  {
    img: theSaintImage1,
    title: "Life in a Nutshell",
    text: "Dive into the incredible life story of Siddhguru, a journey marked by extraordinary events and divine moments that shaped his existence. It all began with his miraculous birth in the holy land of Bharata, filled with divine interventions that unfolded from a very young age. At just nine months old, his parents sought help from the revered Shri Devraha Baba when Siddhguru faced a critical health situation. To everyone's amazement, Devraha Baba recognized something special in the child, declaring him an incarnation of the Divine Spirit sent to bring spirituality to the world. The story then takes us to Siddhguru's upbringing under Devraha Baba's guidance, where silent introspection and deep spiritual exploration became the core of his existence for nearly eleven years.",
  },
  {
    img: theSaintImage2,
    title: "Kundalini",
    text: "Discover the fascinating world of Kundalini awakening, a powerful spiritual energy tucked away within every one of us. Siddhguru's expertise in unlocking the secrets of Kundalini is like a guidebook, unveiling the incredible potential hidden within each seeker. The teachings of Gurudev are like a deep dive into your inner self.All the Seven chakras of Gurudev were activated by birth. Siddhguru's mastery in navigating this inner realm is like a roadmap, showing how this energy can be awakened, unleashing a profound force for personal growth and spiritual evolution. It's like discovering a hidden treasure chest within yourself, waiting to be explored.",
  },
  {
    img: theSaintImage3,
    title: "Asht Siddhi’s & Nav Nidhis",
    text: "Discover the amazing spiritual treasures Siddhguru holds, known as Nav Nidhis and Asht Siddhis. They are like magical keys to celestial vaults full of divine wealth and blessings. Gurudev doesn't just have treasures; he possesses rare spiritual attainments, the Asht Siddhis, something only a few saints achieve, like those in the Himalayas. Gurudev's journey to attaining these is a fascinating tale he joyfully shares. It's like he's been given the keys to an otherworldly treasure trove! Every glimpse of Gurudev has the power to change your life's direction and destiny. So, dive into the divine blessings flowing through these channels and witness the magical impact of these sacred treasures Gurudev holds.It's like having a direct line to cosmic goodness and abundance!",

    descriptiontitle1: "Asht Sidhi -",
    descriptiontext1:
      "अणिमा , महिमा, लघिमा, गरिमा, प्राप्ति, प्राकाम्य, इशित्व, वशित्व  पद्म निधि, महापद्म निधि, नील निधि, मुकुंद निधि, नंद निधि, मकर निधि, कच्छप निधि, 8. शंख निधि  खर्व निधि",

    descriptiontitle2: "Nav Nidhi - ",
    descriptiontext2:
      "पद्म निधि, महापद्म निधि, नील निधि, मुकुंद निधि, नंद निधि, मकर निधि, कच्छप निधि, 8. शंख निधि  खर्व निधि",

    conclution:
      "Gurudev has always practised these Vedic powers for the protection of others and will continue to do so.",
  },
  {
    img: theSaintImage4,
    title: "Mission",
    text: "Service to humanity is the best work of life - Siddhguru",
    descriptiontitle1:
      "Siddhguru commits to the service of humanity by sharing knowledge that liberates hearts and empowers every individual. It's a dedicated journey where Siddhguru tirelessly works, akin to a compassionate friend extending a helping hand to those facing challenges. His mission acts as a guiding beacon, illuminating the way toward an infinite ocean of divine compassion. This compassion is an expansive sea of solace and understanding where everyone can find comfort. Siddhguru's endeavors go beyond imparting wisdom; they are about uplifting the spirits of the suffering masses, embodying a profound service to humanity that extends a compassionate embrace to all.",
  },
];

const TheSaint = () => {
  return (
    <div className="theSaint">
      <InnerPageCommonHeading2 heading={"The Saint"} textColor={"#1D5A3F"} />
      <div className="leftRightImageContent">
        {theSaintData.map((item, index) => (
          <LeftRIghtImageContent key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default TheSaint;
