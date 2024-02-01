import "./navbar.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-submenu/dist/index.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
// import { DropdownSubmenu } from "react-bootstrap-submenu";
import { useState } from "react";

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  // const [showSubMenu, setShowSubMenu] = useState(false);
  // const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [offcanvasVisible, setOffcanvasVisible] = useState(false);

  const toggleBtn = () => {
    setOffcanvasVisible(!offcanvasVisible);
  };

  const handleOffcanvasHide = () => {
    setOffcanvasVisible((prevVisible) => !prevVisible);
  };

  // const handleMouseEnter = () => {
  //   setShowSubMenu(true);
  // };
  // const handleMouseLeave = () => {
  //   setShowSubMenu(false);
  // };
  // const handleMouseEnter2 = () => {
  //   setShowSubMenu2(true);
  // };
  // const handleMouseLeave2 = () => {
  //   setShowSubMenu2(false);
  // };
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <Navbar expand={false}>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav className="dekstop">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/about-ashram" className="line_underscore nav-link">
              About Ashram
            </Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/vedic-science" className="line_underscore nav-link">
              Vedic Science
            </Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/siddhasana" className="line_underscore nav-link">
              Siddhasana
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/activities" className="line_underscore nav-link">
              Activities
            </Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/experience" className="line_underscore nav-link">
              Experience
            </Link>
          </motion.div>
          {/* <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to={"/events"} className="line_underscore nav-link">
              Events
            </Link>
          </motion.div> */}

          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="padding"
          >
            <div className={`dropdown ${isDropdownOpen ? "active" : ""}`}>
              <button onClick={toggleDropdown}>
                <Link to="/centers" className="centers">
                  {" "}
                  Centers
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                        <path d="M12 14l-4-4h8z"></path>
                      </g>
                    </g>
                  </svg>{" "}
                </Link>
              </button>
              <div>
                <HashLink
                  to="/centers#indian"
                  onClick={closeDropdown}
                  className="dropdownsubmenu_btn"
                >
                  Indian
                </HashLink>
                <HashLink
                  to="/centers#international"
                  onClick={closeDropdown}
                  className="dropdownsubmenu_btn"
                >
                  International
                </HashLink>
              </div>
            </div>
          </motion.p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to={"/contact"} className="line_underscore nav-link">
              Contact
            </Link>
          </motion.div>
        </Nav>

        {/* mobile design */}

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="Mobile"
          onClick={toggleBtn}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={offcanvasVisible}
          onHide={handleOffcanvasHide}
        >
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {/* <Link
                to="/news"
                className="nav_link_mobile"
                onClick={() => setOffcanvasVisible(false)}
              >
                News
              </Link>
              <Nav.Link href="#link">Gallery</Nav.Link>
              <Link
                to="/devotee"
                className="nav_link_mobile"
                onClick={() => setOffcanvasVisible(false)}
              >
                Register Devotee/Volunteer
              </Link>
              <Nav.Link href="#link">Donate </Nav.Link> */}

              <Link
                to="/about-ashram"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                About Ashram
              </Link>
              <Link
                to="/vedic-science"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Vedic Science
              </Link>
              <Link
                to="/siddhasana"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Siddhasana
              </Link>
              <Link
                to="/activities"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Activities
              </Link>
              <Link
                to="/experience"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Experience
              </Link>

              <NavDropdown
                title={
                  <Link
                    to="/centers"
                    className="nav_link_mobile"
                    onClick={() => setOffcanvasVisible(false)}
                  >
                    Centers
                  </Link>
                }
                id="basic-nav-dropdown"
                className="dropdown"
              >
                <HashLink
                  to="/centers#indian"
                  smooth
                  onClick={() => setOffcanvasVisible(false)}
                  className="dropdownsubmenu_btn"
                >
                  Indian
                </HashLink>
                <NavDropdown.Divider />
                <HashLink
                  to="/centers#international"
                  smooth
                  onClick={() => setOffcanvasVisible(false)}
                  className="dropdownsubmenu_btn"
                >
                  International
                </HashLink>
                <NavDropdown.Divider />
              </NavDropdown>
              <Link
                to="/contact"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/news"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                News
              </Link>

              <Link
                to="/events"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Events
              </Link>
              <Link
                to="/gallery"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Blogs
              </Link>
              <Link
                to="/devotee"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Register Devotee/Volunteer
              </Link>
              <Link className="mobile_nav_link" href="#">
                Donate
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Menu;
