import Footer from "../footer/Footer";
import Header from "../header/Header";
import PropTypes from "prop-types";
import TopNavbar from "../header/topNavbar/TopNavbar";
import "./layout.scss";
// import scrollTop from "../../images/scrollTop2.svg";
import popupImage from "../../images/popup.jpeg";
import close from "../../images/closeIcon.svg";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  // useLayoutEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "instant" });
  // }, [pathname]);
  // return null;
  const [popup, setPopup] = useState(false);
  const scrollTopHandle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 2000);
  }, []);

  useEffect(() => {
    popup && (document.body.style.overflow = "hidden");
    !popup && (document.body.style.overflow = "unset");
  }, [popup]);

  const handlePopup = () => {
    setPopup(false);
  };
  console.log("popup", popup);
  return (
    <>
      <TopNavbar />
      <Header />
      <main>
        {children}
        {/* <div onClick={scrollTopHandle} className="scrollTop"> */}
        {/* <img src={scrollTop} alt="scrollTop" /> */}
        {popup && (
          <div className="popup">
            <div className="popup_wrapper">
              <Link
                to={"https://app.sribrahmrishiashram.org/devotee/login"}
                target="_blank"
              >
                <img src={popupImage} alt="popup" />
              </Link>
              <div className="close" onClick={handlePopup}>
                <img src={close} alt="close" />
              </div>
            </div>
          </div>
        )}
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
