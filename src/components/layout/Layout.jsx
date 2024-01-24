import Footer from "../footer/Footer";
import Header from "../header/Header";
import PropTypes from "prop-types";
import TopNavbar from "../header/topNavbar/TopNavbar";
import "./layout.scss";
import scrollTop from "../../images/scrollTop2.svg";

const Layout = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <Header />
      <main>
        {children}
        <a href="#hide-topNav" className="scrollTop">
          <img src={scrollTop} alt="scrollTop" />
        </a>
      </main>
      <Footer />
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
