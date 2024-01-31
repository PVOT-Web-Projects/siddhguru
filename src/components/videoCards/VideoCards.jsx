import "./videoCards.scss";
import pic1 from "../../images/videoCard1.png";
import pic2 from "../../images/videoCard2.png";
import pic3 from "../../images/videoCard3.png";
import pic4 from "../../images/videoCard4.png";
import pic5 from "../../images/videoCard5.png";
import pic6 from "../../images/videoCard6.png";
import svg1 from "../../images/quoteStart.svg";
import svg2 from "../../images/quoteEnd.svg";
import playBtn from "../../images/playBtn.svg";
const Images = [
  {
    pic: pic1,
    title:
      "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile.Take lesson…",
    svg1: svg1,
    svg2: svg2,
  },
  {
    pic: pic2,
    title:
      "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile.Take lesson…",
    svg1: svg1,
    svg2: svg2,
  },
  {
    pic: pic3,
    title:
      "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile.Take lesson…",
    svg1: svg1,
    svg2: svg2,
  },
  {
    pic: pic4,
    title:
      "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile.Take lesson…",
    svg1: svg1,
    svg2: svg2,
  },
  {
    pic: pic5,
    title:
      "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile.Take lesson…",
    svg1: svg1,
    svg2: svg2,
  },
  {
    pic: pic6,
    title:
      "Welcome 2024 with a new hope, a renewed enthusiasm and a genuine smile.Take lesson…",
    svg1: svg1,
    svg2: svg2,
  },
];
const VideoCards = () => {
  return (
    <div className="experience_section">
      <div className="gallery_section">
        {Images.map((item, index) => (
          <div key={index} className="main_content">
            <div className="images_section">
              <img src={item.pic} alt="" />
              <div className="playbutton">
                <img src={playBtn} />
              </div>
            </div>
            <div className="content_section">
              <div className="titles">
                <img src={item.svg1} /> <span>{item.title}</span>{" "}
                <img src={item.svg2} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default VideoCards;
