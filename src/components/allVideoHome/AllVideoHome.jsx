import "./allVideoHome.scss";
import sidhhguru_layout1 from "../../images/videoImage1.png";
import sidhhguru_layout2 from "../../images/videoImage2.png";
import lotus_image from "../../images/lotus.png";
function AllVideoHome() {
  return (
    <div className="sidhhguru_first_container">
      <div className="sidhhguru_layout">
        <div className="sidhhguru_gurudev_first_content">
          <div>
            <p className="sidhhguru_gurudev_content">
              Latest Wisdom from Brahmashri Gurudev
            </p>
            <div className="sidhhguru_gurudev_btn_outer">
            <button className="sidhhguru_gurudev_btn">
                See all videos
            </button>
            </div>
          </div>
          <div className="sidhhguru_gurudev_second_content">
            <img src={sidhhguru_layout1} alt="none" className="sidhhguru_layout1_img"/>
            <div className="sidhhguru_gurudev_second_content_text">
                <p className="sidhhguru_gurudev_second_content_innertext">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry.</p>
            </div>
          </div>
          <div className="sidhhguru_gurudev_second_content">
            <img src={sidhhguru_layout2} alt="none" className="sidhhguru_layout1_img"/>
            <div className="sidhhguru_gurudev_second_content_text1">
                <p className="sidhhguru_gurudev_second_content_innertext">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        <div className="lotus_img_outer">
        <img src={lotus_image} alt="none" className="lotus_img"/>
        </div>
      </div>
    </div>
  );
}
export default AllVideoHome;