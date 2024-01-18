import Footer from "../footer/Footer";
import Header from "../header/Header";
import PropTypes from "prop-types";
import TopNavbar from "../header/topNavbar/TopNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <TopNavbar />
      <Header />
  <main>{children}</main>
      <Footer /> 
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
