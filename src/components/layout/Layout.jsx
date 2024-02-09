import Footer from "../footer/Footer";
import Header from "../header/Header";
import PropTypes from "prop-types";
import TopNavbar from "../header/topNavbar/TopNavbar";
import "./layout.scss";
import scrollTop from "../../images/scrollTop2.svg";

const Layout = ({ children }) => {
  // useLayoutEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "instant" });
  // }, [pathname]);
  // return null;

  const scrollTopHandle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <TopNavbar />
      <Header />
      <main>
        {children}
        <div onClick={scrollTopHandle} className="scrollTop">
          <img src={scrollTop} alt="scrollTop" />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
