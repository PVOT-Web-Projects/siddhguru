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
import BlogSingle from "./pages/blog/blogSingle/BlogSingle";
import Siddhasana from "./pages/siddhasana/Siddhasana";
import Experience from "./pages/experience/Experience";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [isLoading2, setIsLoading2] = useState(true);

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
            <Route path="/" element={<Home />} />
            <Route path="/the-saint" element={<TheSaint />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/core-wisdom" element={<CoreWisdom />} />
            <Route path="/about-ashram" element={<AboutAshramPage />} />
            <Route path="/vedic-science" element={<Knowledge />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/centers" element={<Centers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:name" element={<BlogSingle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/devotee" element={<Devotee />} />
            <Route path="/siddhasana" element={<Siddhasana />} />
            <Route path="/experience" element={<Experience />} />
            <Route />
          </Routes>
        </Layout>
      )}
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
