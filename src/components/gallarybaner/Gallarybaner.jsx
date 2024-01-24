import "./gallarybaner.scss";
import backgroundbanner from "../../images/galaryimgbackground.png";
import galarybaner from "../../images/galaryimgbanner.png";
const Galary_banner = () => {
  return (
    <div className="background_banner">
      <div className="galary_baner">
        <div className="galary_baner_textcontent">
          <div className="galary_baner_title2">
            <div>
              <p>Siddhguru</p>
              <p>Gallery</p>
            </div>
            <div className="galary_baner_text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
        <div className="galary_baner_img">
          <img src={galarybaner} />
        </div>
      </div>
    </div>
  );
};
export default Galary_banner;
