import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import LocomotoveScroll from "locomotive-scroll";
import "./global.scss";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/loader/Loader";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Events from "./pages/events/Events";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  }, 2200);

  // useEffect(() => {
  //   const scroll = new LocomotoveScroll({
  //     smooth: true,
  //   });
  // });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <ScrollTop />
          <Routes>
            <Route path="/siddhguru1" element={<Home />} />
            <Route path="/siddhguru1/events" element={<Events />} />
            <Route />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
