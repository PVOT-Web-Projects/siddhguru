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
import { DropdownSubmenu } from "react-bootstrap-submenu";
import { useState } from "react";

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [offcanvasVisible, setOffcanvasVisible] = useState(false);

  const toggleBtn = () => {
    setOffcanvasVisible(!offcanvasVisible);
  };

  const handleOffcanvasHide = () => {
    setOffcanvasVisible((prevVisible) => !prevVisible);
  };

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };
  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };
  const handleMouseEnter2 = () => {
    setShowSubMenu2(true);
  };
  const handleMouseLeave2 = () => {
    setShowSubMenu2(false);
  };
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
            className="padding"
          >
            {/* <div className={`dropdown ${isDropdownOpen ? "active" : ""}`}> */}
            <div className="dropdown">
              <button onClick={toggleDropdown}>
                Siddhguru
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                      <path d="M12 14l-4-4h8z"></path> 
                    </g>
                     
                  </g>
                </svg>
              </button>
              <div>
                <div className="submenu">
                  <Link
                    to="/the-saint"
                    onClick={closeDropdown}
                    className="close"
                  >
                    The Saint
                    <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      transform="rotate(270)"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                          <path d="M12 14l-4-4h8z"></path> 
                        </g>
                         
                      </g>
                    </svg>
                  </Link>
                  <div>
                    <HashLink
                      to="/the-saint#life_of_nutshell"
                      onClick={closeDropdown}
                      className="dropdownsubmenu_btn"
                    >
                      Life in a Nutshell
                    </HashLink>

                    <HashLink
                      to="/the-saint#kundalini"
                      smooth
                      onClick={closeDropdown}
                      className="dropdownsubmenu_btn"
                    >
                      Sadhana & Kundalini Invocation
                    </HashLink>
                    <HashLink
                      to="/the-saint#asht_siddhi's_&_nav_nidhis"
                      onClick={closeDropdown}
                      className="dropdownsubmenu_btn"
                    >
                      Siddhis and Nidhis
                    </HashLink>
                    <HashLink
                      to="/the-saint#mission"
                      onClick={closeDropdown}
                      className="dropdownsubmenu_btn"
                    >
                      Mission
                    </HashLink>
                  </div>
                </div>
                <div className="submenu">
                  <Link to="/vision" onClick={closeDropdown}>
                    Vision
                    <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      transform="rotate(270)"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                          <path d="M12 14l-4-4h8z"></path> 
                        </g>
                         
                      </g>
                    </svg>
                  </Link>
                  <div>
                    <HashLink
                      to="/vision#anant_diksha"
                      onClick={closeDropdown}
                      className="dropdownsubmenu_btn"
                    >
                      Divine Touch (Digital Diksha)
                    </HashLink>
                    <HashLink
                      to="/vision#siddhasana"
                      smooth
                      onClick={closeDropdown}
                      className="dropdownsubmenu_btn"
                    >
                      Siddhasana
                    </HashLink>
                    <HashLink
                      to="/vision#ashram"
                      onClick={closeDropdown}
                      className="dropdownsubmenu_btn"
                    >
                      Ashram
                    </HashLink>
                    <HashLink
                      to="/vision#world_spiritual_forum"
                      onClick={() => setOffcanvasVisible(false)}
                      className="dropdownsubmenu_btn"
                    >
                      World Spiritual Forum
                    </HashLink>
                  </div>
                </div>
                <div className="submenu">
                  <Link to="/core-wisdom" onClick={closeDropdown}>
                    Core Wisdom
                    <svg
                      width="32px"
                      height="32px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      transform="rotate(270)"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                          <path d="M12 14l-4-4h8z"></path> 
                        </g>
                         
                      </g>
                    </svg>
                  </Link>
                  <div>
                    <Link to="/core-wisdom" onClick={closeDropdown}>
                      Miracles of Vedic Science
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/about-ashram" className="line_underscore nav-link">
              About Ashram
            </Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* <Nav.Link href="#link" className="line_underscore">
              Knowledge
            </Nav.Link> */}
            <Link to="/knowledge" className="line_underscore nav-link">
              Knowledge
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
            <Link to={"/events"} className="line_underscore nav-link">
              Events
            </Link>
          </motion.div>

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
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
              <NavDropdown
                title="Siddhguru"
                id="basic-nav-dropdown"
                className="mobile_dropdown"
              >
                <NavDropdown
                  title={
                    <Link
                      to="/the-saint"
                      className="nav_link_mobile"
                      onClick={() => setOffcanvasVisible(false)}
                    >
                      The Saint
                    </Link>
                  }
                  id="basic-nav-dropdown"
                  className="dropdownsubmenu_btn sub_sub_menu"
                >
                  <HashLink
                    to="/the-saint#life_of_nutshell"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Life in a Nutshell
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/the-saint#kundalini"
                    smooth
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Sadhana & Kundalini Invocation
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/the-saint#asht_siddhi's_&_nav_nidhis"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Siddhis and Nidhis
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/the-saint#mission"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Mission
                  </HashLink>
                  {/* <NavDropdown.Divider /> */}
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown
                  title={
                    <Link
                      to="/vision"
                      className="nav_link_mobile"
                      onClick={() => setOffcanvasVisible(false)}
                    >
                      Vision
                    </Link>
                  }
                  id="basic-nav-dropdown_sub"
                  className="dropdownsubmenu_btn sub_sub_menu"
                >
                  <HashLink
                    to="/vision#anant_diksha"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Divine Touch (Digital Diksha)
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/vision#siddhasana"
                    smooth
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Siddhasana
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/vision#ashram"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Ashram
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/vision#world_spiritual_forum"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    World Spiritual Forum
                  </HashLink>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown
                  title={
                    <Link
                      to="/core-wisdom"
                      className="nav_link_mobile"
                      onClick={() => setOffcanvasVisible(false)}
                    >
                      Core Wisdom
                    </Link>
                  }
                  id="basic-nav-dropdown_sub"
                  className="dropdownsubmenu_btn sub_sub_menu"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Miracles of Vedic Science
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
              </NavDropdown>
              <Link
                to="/about-ashram"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                About Ashram
              </Link>
              <Link
                to="/Knowledge"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Knowledge
              </Link>
              <Link
                to="/activities"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Activities
              </Link>
              <Link
                to="/events"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Events
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
              {/* <Link to="#" className="mobile_nav_link">
                Gallery
              </Link> */}
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
