import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import LocomotoveScroll from "locomotive-scroll";
import "./global.scss";
// import { AnimatePresence } from "framer-motion";
import Loader from "./components/loader/Loader";
import Layout from "./components/layout/Layout";
// import Home from "./pages/home/Home";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Events from "./pages/events/Events";
// import TheSaint from "./pages/theSaint/TheSaint";
// import Vision from "./pages/vision/Vision";
// import CoreWisdom from "./pages/coreWisdom/CoreWisdom";
import AboutAshramPage from "./pages/aboutAshramPage/AboutAshramPage";
// import Activities from "./pages/activities/Activities";
// import Centers from "./pages/centers/Centers";
// import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

// import News from "./pages/news/News";
// import Devotee from "./pages/devotee/Devotee";
// import Gallery from "./pages/Gallary/gallary";
// import BlogSingle from "./pages/blog/blogSingle/BlogSingle";

import Siddhasana from "./pages/siddhasana/Siddhasana";
import Experience from "./pages/experience/Experience";
import VedicScience from "./pages/vedicScience/VedicScience";
import NewHome from "./pages/newHome/NewHome";
import mainTab1 from "./images/mainTab1.png";
import mainTab2 from "./images/mainTab2.png";
import mainTab3 from "./images/mainTab3.png";
import tab1Images1 from "./images/Life in a Nutshell.jpg";
import tab1Images2 from "./images/Sadhana & Kundalini Invocation.jpg";
import tab1Images3 from "./images/Siddhis-and-Nidhis.jpg";
import tab2Images1 from "./images/Divine Touch (Digital Diksha).jpg";
import tab2Images2 from "./images/Siddhasana.jpg";
import tab2Images3 from "./images/Ashram.jpg";
import tab2Images4 from "./images/World-Spiritual-Forum.jpg";
import tab3Images1 from "./images/Miracles of Vedic Science.jpg";
import tab3Images2 from "./images/spiritual.jpeg";
import tab3Images3 from "./images/socialWisdom.jpeg";
import tab3Images4 from "./images/professionalWisdom.jpeg";
import eventImage1 from "./images/Dhwajarohan.jpg";
import eventImage2 from "./images/Maha-Shivratri.jpg";
import eventImage3 from "./images/Asia-Tour.jpg";
import eventImage4 from "./images/Africa-Tour.jpg";
import lotus_image from "./images/lotus.png";
import popupImage from "./images/popup.jpeg";
import video1 from "./images/exp1.mp4";
import video2 from "./images/video2.mp4";
import video3 from "./images/video3.mp4";
import homeBanner from "./images/newHomeBanner.mp4";
import homeBannerM from "./images/homeVideoMobileBanner.mp4";
import expVideo1 from "./images/Ashok Sancheti Testimonial.mp4";
import expVideo3 from "./images/exp4.mp4";
import expVideo2 from "./images/Mayank Solanki Testimonial (Website).mp4";
import expVideo4 from "./images/exp5.mp4";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [popup, setPopup] = useState(true);
  // const [isLoading2, setIsLoading2] = useState(true);
  const [widthCheck, setWidthCheck] = useState(window.innerWidth);

  const [videosLoaded, setVideosLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // console.log("video", videosLoaded);
  // console.log("image", imagesLoaded);

  useEffect(() => {
    //Function to load all the images from home page beforehand

    window.onload = () => {
      // const loadVideo = (url) => {
      //   return new Promise((resolve, reject) => {
      //     const video = document.querySelector("video");
      //     video.onloadedmetadata = () => resolve(url);
      //     video.onerror = (err) => reject(err);
      //     video.src = url;
      //   });
      // };

      // Array of video URLs to load
      const videoUrls = [
        video1,
        video2,
        video3,
        homeBanner,
        homeBannerM,
        expVideo1,
        expVideo2,
        expVideo3,
        expVideo4,
      ];

      const loadVideos = async () => {
        try {
          await Promise.all(videoUrls);
          setVideosLoaded(true);
        } catch (error) {
          console.error("Error loading videos:", error);
        }
      };

      const loadImage = (url) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = () => resolve(url);
          image.onerror = (err) => reject(err);
          image.src = url;
        });
      };

      // Array of image URLs to load
      const imageUrls = [
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916659/kvrsjkzj7ljbotfmttpc.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916690/xwcvldaoobam5vaqxbsb.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916987/axbanxuqhdz1ltdtfmzp.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707917026/rcumi1sjejqn64kppb0j.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916770/uvc8okabb5zulzjwu3f9.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916806/tsnuo6vqfijlm6vp6fey.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916886/bb0mlpmevlvzkexza7o8.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916920/tneaglbxrj5ojlwu9ph1.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916551/kaxxspeevylgt1fuzpd0.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916597/aukbvayksklsohye1fjn.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916426/qwtt0niioctnyu2xxm5m.jpg",
        "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916469/l0bot5kgxhfu5lzmmwk8.jpg",
        mainTab1,
        mainTab2,
        mainTab3,
        tab1Images1,
        tab1Images2,
        tab1Images3,
        tab2Images1,
        tab2Images2,
        tab2Images3,
        tab2Images4,
        tab3Images1,
        tab3Images2,
        tab3Images3,
        tab3Images4,
        eventImage1,
        eventImage2,
        eventImage3,
        eventImage4,
        popupImage,
        lotus_image,
      ];

      const loadImages = async () => {
        try {
          await Promise.all(imageUrls.map(loadImage));
          setImagesLoaded(true);
        } catch (error) {
          console.error("Error loading images:", error);
        }
      };
      loadImages();
      // loadVideos();

      setIsLoading(false);
    };
    return () => (window.onload = null);
  }, []);
  setTimeout(() => {
    document.body.style.cursor = "smooth";
    window.scrollTo(0, 0);
  }, 2500);

  const handleResize = () => {
    setWidthCheck(window.innerWidth);
  };
  // console.log(widthCheck);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (widthCheck > 991) {
      var prevScrollpos = window.pageXOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("hide-header").style.top = "0px";
        } else {
          document.getElementById("hide-header").style.top =
            "-200px"; /* adjust this value to the height of your header */
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }, [widthCheck]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <ScrollTop />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<NewHome />} />
            {/* <Route path="/the-saint" element={<TheSaint />} /> */}
            {/* <Route path="/vision" element={<Vision />} /> */}
            {/* <Route path="/core-wisdom" element={<CoreWisdom />} /> */}
            <Route path="/about-ashram" element={<AboutAshramPage />} />
            <Route path="/vedic-science" element={<VedicScience />} />
            {/* <Route path="/activities" element={<Activities />} /> */}
            <Route path="/events" element={<Events />} />
            {/* <Route path="/centers" element={<Centers />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:name" element={<BlogSingle />} /> */}
            <Route path="/contact" element={<Contact />} />

            {/* <Route path="/news" element={<News />} /> */}
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            {/* <Route path="/devotee" element={<Devotee />} /> */}

            <Route path="/siddhasana" element={<Siddhasana />} />
            <Route path="/experience" element={<Experience />} />
            <Route />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
