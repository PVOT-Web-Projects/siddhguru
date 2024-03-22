import { Link } from "react-router-dom";
import "./topNavbar.scss";
import icon2 from "../../../images/facebook_icon.svg";
import icon3 from "../../../images/youtube_icon.svg";
import icon1 from "../../../images/instagram_icon.svg";
import icon4 from "../../../images/twitter.svg";

const TopNavbar = () => {
  return (
    <div className="topNavbar" id="hide-topNav">
      <div className="topNavbar_container">
        <div className="topNavbar_wrapper">
          <div className="footer_link_container">
            <div className="instagram_icon social_icon">
              <a
                href="https://www.instagram.com/srisidheshwarbrahmrishi/"
                target="_blank"
              >
                <img src={icon1} height="20px" />
              </a>
            </div>
            <div className="facebook_icon social_icon">
              <a
                href=" https://www.facebook.com/siddhgurusrisidheshwarbrahmrishi"
                target="_blank"
              >
                <img src={icon2} />
              </a>
            </div>
            <div className="youtube_icon social_icon">
              <a
                href=" https://www.youtube.com/@srisidheshwartirth-brahmri5318"
                target="_blank"
              >
                <img src={icon3} />
              </a>
            </div>
            <div className="youtube_icon social_icon">
              <a
                href=" https://twitter.com/sri_sidheswar"
                target="_blank"
              >
                <img src={icon4} />
              </a>
            </div>
          </div>
          <ul>
            {/* <li>
              <Link to="/news">News</Link>
            </li> */}
            {/* <li>
              <Link to="/events">Events</Link>
            </li> */}
            {/* <li>
              <Link to="/gallery">Gallery</Link>
            </li> */}
            {/* <li>
              <Link to="/blog">Blogs</Link>
            </li> */}
            <li>
              <Link to="https://app.sribrahmrishiashram.org/devotee/login" target="_blank">Register Devotee/Volunteer</Link>
            </li>
            {/* <li>
              <a href="#">Donate</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TopNavbar;
