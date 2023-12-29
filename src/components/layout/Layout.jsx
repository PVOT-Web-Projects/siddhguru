import Footer from "../footer/Footer";
// import Header from "../header/Header";
import PropTypes from "prop-types";
import TopNavbar from "../header/topNavbar/TopNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopNavbar />
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
