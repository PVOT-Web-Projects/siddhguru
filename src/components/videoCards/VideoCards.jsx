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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Images = [
  {
    delay: 0.2,
    pic: pic1,
    title: "Ashok Sancheti 1",
    svg1: svg1,
    svg2: svg2,
    link: "https://www.youtube.com/watch?v=SiCGZ1lCbGI&list=UULFNytVTV_cBGfhWUsNmQPtDQ&index=36",
  },
  {
    delay: 0.4,
    pic: pic2,
    title: "Vladislav Y",
    svg1: svg1,
    svg2: svg2,
    link: "https://www.youtube.com/shorts/o2xNZRUfNOE",
  },
  {
    delay: 0.6,
    pic: pic3,
    title: "Ramesh Sankhla",
    svg1: svg1,
    svg2: svg2,
    link: "https://www.youtube.com/watch?v=N49iS5du51Y&list=UULFNytVTV_cBGfhWUsNmQPtDQ&index=28",
  },
  {
    delay: 0.8,
    pic: pic4,
    title: "Ashok Sancheti 2",
    svg1: svg1,
    svg2: svg2,
    link: "https://www.youtube.com/watch?v=PQGF6KHo6-k&list=UULFNytVTV_cBGfhWUsNmQPtDQ&index=35",
  },
  // {
  //   pic: pic5,
  //   title:
  //     "Panthi Patel",
  //   svg1: svg1,
  //   svg2: svg2,
  // },
  // {
  //   pic: pic6,
  //   title:
  //     "Rahul Soni",
  //   svg1: svg1,
  //   svg2: svg2,
  // },
];
const VideoCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <motion.div ref={ref} className="experience_section">
      <div className="gallery_section demo">
        {Images.map((item, index) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: item.delay }}
            key={index}
            className="main_content"
          >
            <Link to={item.link} target="_blank">
              <div className="images_section">
                <img src={item.pic} alt={item.title} />
                <div className="playbutton">
                  <img src={playBtn} />
                </div>
              </div>
            </Link>
            <div className="content_section">
              {/* <div className="startImage">
                <img src={item.svg1} />
              </div> */}
              <div className="titles">{item.title}</div>
              {/* <div className="endImage">
                <img src={item.svg2} />
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default VideoCards;
