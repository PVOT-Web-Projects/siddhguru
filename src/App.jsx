import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import LocomotoveScroll from "locomotive-scroll";
import "./global.scss";
// import { AnimatePresence } from "framer-motion"; 
import Loader from "./components/loader/Loader";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Events from "./pages/events/Events";
import TheSaint from "./pages/theSaint/TheSaint";
import Vision from "./pages/vision/Vision";
import CoreWisdom from "./pages/coreWisdom/CoreWisdom";
import AboutAshramPage from "./pages/aboutAshramPage/AboutAshramPage";
import Knowledge from "./pages/knowledge/Knowledge";
import Activities from "./pages/activities/Activities";
import Centers from "./pages/centers/Centers";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import News from "./pages/news/News";
import Devotee from "./pages/devotee/Devotee";
import Gallery from "./pages/Gallary/gallary";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
    document.body.style.cursor = "smooth";
    window.scrollTo(0, 0);
  }, 2500);

  // useEffect(() => {
  //   const scroll = new LocomotoveScroll({
  //     smooth: true,
  //   });
  // });

  // useEffect(() => {
  //   var prevScrollpos = window.pageXOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("hide-header").style.top = "0px";
  //     } else {
  //       document.getElementById("hide-header").style.top =
  //         "-200px"; /* adjust this value to the height of your header */
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  // }, []);

  return (
    <>
      {/* <AnimatePresence mode="wait"> */}
        {isLoading ? (
          <Loader />
        ) : (
          <Layout>
            <ScrollTop />
            <Routes>
              <Route path="/siddhguru1" element={<Home />} />
              <Route path="/siddhguru1/the-saint" element={<TheSaint />} />
              <Route path="/siddhguru1/vision" element={<Vision />} />
              <Route path="/siddhguru1/core-wisdom" element={<CoreWisdom />} />
              <Route
                path="/siddhguru1/about-ashram"
                element={<AboutAshramPage />}
              />
              <Route path="/siddhguru1/knowledge" element={<Knowledge />} />
              <Route path="/siddhguru1/activities" element={<Activities />} />
              <Route path="/siddhguru1/events" element={<Events />} />
              <Route path="/siddhguru1/centers" element={<Centers />} />
              <Route path="/siddhguru1/blog" element={<Blog />} />
              <Route path="/siddhguru1/contact" element={<Contact />} />
              <Route path="/siddhguru1/news" element={<News />} />
              <Route path="/siddhguru1/galary" element={<Gallery />} />
              <Route path="/siddhguru1/devotee" element={<Devotee />} />
              <Route />
            </Routes>
          </Layout>
        )}
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
