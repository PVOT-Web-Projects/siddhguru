import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./galleryAshram.scss";
import image1 from "../../images/001.jpg";
import image2 from "../../images/002.jpg";
import image4 from "../../images/003.jpg";
import image3 from "../../images/004.jpg";
import image5 from "../../images/005.jpg";
import image6 from "../../images/006.jpg";
import image7 from "../../images/007.jpg";
import image8 from "../../images/008.jpg";
import image9 from "../../images/009.jpg";
import image10 from "../../images/010.jpg";
import image11 from "../../images/011.jpg";
import image12 from "../../images/012.jpg";
import image13 from "../../images/013.jpg";
import image14 from "../../images/014.jpg";
import image15 from "../../images/015.jpg";
import image16 from "../../images/016.jpg";
import image17 from "../../images/017.jpg";
import image18 from "../../images/018.jpg";
import image19 from "../../images/019.jpg";
import image20 from "../../images/020.jpg";
import image21 from "../../images/021.jpg";
import closeIcon from "../../images/closeIcon.svg";
import { useState } from "react";

const images = [
  // image1,
  // image2,
  // image3,
  // image4,
  // image5,
  // image6,
  // image7,
  image8,
  // image9,
  // image10,
  // image11,
  // image12,
  image13,
  image14,
  // image15,
  // image16,
  // image17,
  // image18,
  // image19,
  // image20,
  image21,
];

const GalleryAshram = () => {
  const [data, setData] = useState({ img: "", index: 0 });
  const viewImage = (img, index) => {
    setData({ img, index });
    console.log(data.img);
  };

  const handleNext = (action) => {
    let index = data.index;
    if (action === "next-img") {
      setData({ img: images[index + 1], index: index + 1 });
      document.body.style.overflow = "hidden";
    }
    if (action === "prev-img") {
      setData({ img: images[index - 1], index: index - 1 });
      document.body.style.overflow = "hidden";
    }
    if (!action) {
      setData({ img: "", index: 0 });
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      {data.img && (
        <div className="imagePopup">
          <img
            src={closeIcon}
            alt="close"
            className="close"
            onClick={() => handleNext()}
          />
          <button
            disabled={data.index === 0 ? true : false}
            onClick={() => handleNext("prev-img")}
            className="prev"
          >
            Previous
          </button>
          <img src={data.img} alt="imagePopup" />
          <button
            disabled={data.index === images.length - 1 ? true : false}
            onClick={() => handleNext("next-img")}
            className="next"
          >
            Next
          </button>
        </div>
      )}
      <div className="galleryAshram">
        <div className="galleryAshram_wrapper">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 575: 1, 767: 2, 991: 3, 1199: 4 }}
          >
            <Masonry gutter="20px">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={index}
                  onClick={() => viewImage(image, index)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};
export default GalleryAshram;
