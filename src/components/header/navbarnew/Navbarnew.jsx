import "./navbar.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-submenu/dist/index.css";
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Offcanvas,
  } from "react-bootstrap";
  import { DropdownSubmenu } from "react-bootstrap-submenu";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
    const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger once
    });