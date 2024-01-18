import "./topNavbar.scss";
const TopNavbar = () => {
  return (
    <div className="topNavbar" id="hide-topNav">
      <div className="topNavbar_container">
        <div className="topNavbar_wrapper">
          <ul>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Register Devotee/Volunteer</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TopNavbar;