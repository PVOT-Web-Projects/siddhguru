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
import lotus_image from "./images/lotus.png";
import popupImage from "./images/popup.jpeg";
import video1 from "./images/exp1.mp4";
import video2 from "./images/video2.mp4";
import video3 from "./images/video3.mp4";
import fullVideo from "./images/videcScienceVideo-FyWQQtnN.mp4";
import expvideo1 from "./images/Ashok Sancheti Testimonial-AxJu7i3v.mp4";
import expvideo3 from "./images/exp3-dNXmpXxb.mp4";
import expvideo2 from "./images/Mayank Solanki Testimonial (Website)-MYSdPzFp.mp4";
import expvideo4 from "./images/exp4-G1wzJ-nw.mp4";
import SingleEvent from "./pages/events/SingleEvent/SingleEvent";
import Prāṇa_Vriddhi from "./pages/aboutAshramPageinner/AboutAshramPageinner";
import UsaTour from "./pages/events/usaTour/UsaTour";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [widthCheck, setWidthCheck] = useState(window.innerWidth);
  const [videosLoaded, setVideosLoaded] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  console.log("video", videosLoaded);
  console.log("image", imagesLoaded);
  console.log("loading", isLoading);

  useEffect(() => {
    setTimeout(() => {
      setHideLoader(true);
    }, 5000);
  }, []);

  useEffect(() => {
    // Array of video URLs to load

    const videoUrls = [
      video1,
      video2,
      video3,
      fullVideo,
      expvideo1,
      expvideo2,
      expvideo3,
      expvideo4,
      "https://res.cloudinary.com/djkswfmo5/video/upload/v1709700937/siddhguru/cry6d20vdqdz2yq7vc1o.mp4",
      "https://res.cloudinary.com/djkswfmo5/video/upload/v1709700937/siddhguru/ftvbu1caqqxa7wdhnkdo.mp4",
      "https://res.cloudinary.com/djkswfmo5/video/upload/v1710225855/siddhguru/x5jsisbrhoksxnlos0p1.mp4",
      "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228581/siddhguru/rarhpb9tqupmbhvdo7ex.mp4",
      "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228683/siddhguru/uwpp7cyd0ovy83llhcxp.mp4",
      "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228875/siddhguru/tm8xxjqiyhrt0rovppma.mp4",
      "https://res.cloudinary.com/djkswfmo5/video/upload/v1710228917/siddhguru/kndxhydub7iqoktwuuvd.mp4",
    ];

    const loadVideos = async () => {
      try {
        await Promise.all(videoUrls);
        setVideosLoaded(false);
      } catch (error) {
        console.error("Error loading videos:", error);
      }
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
      popupImage,
      lotus_image,
    ];
    console.log(imageUrls);
    const loadImages = async () => {
      try {
        const loadImagePromises = imageUrls.map((imageUrl) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              resolve();
            };
          });
        });

        await Promise.all(loadImagePromises);
        setImagesLoaded(false);
        // setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        // Handle error loading images
      }
    };

    loadImages();

    loadVideos();
    // setTimeout(() => {
    //   document.body.style.cursor = "smooth";
    //   window.scrollTo(0, 0);
    //   setIsLoading(false);
    // }, 3000);
    // if (isLoading) {
    //   document.body.style.overflow = "hidden";
    // }
    // if (!isLoading) {
    //   document.body.style.overflow = "unset";
    // }
  }, [videosLoaded, imagesLoaded, isLoading]);

  // const handleResize = () => {
  //   setWidthCheck(window.innerWidth);
  // };
  // console.log(widthCheck);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   if (widthCheck > 991) {
  //     var prevScrollpos = window.pageXOffset;
  //     window.onscroll = function () {
  //       var currentScrollPos = window.pageYOffset;
  //       if (prevScrollpos > currentScrollPos) {
  //         document.getElementById("hide-header").style.top = "0px";
  //       } else {
  //         document.getElementById("hide-header").style.top =
  //           "-200px"; 
  //       }
  //       prevScrollpos = currentScrollPos;
  //     };
  //   }
  // }, [widthCheck]);

  return (
    <>
      {/* {!hideLoader && <Loader loading={isLoading} />} */}
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
          <Route path="/events/asia-tour" element={<SingleEvent />} />
          <Route path="/events/usa-tour" element={<UsaTour />} />
          {/* <Route path="/centers" element={<Centers />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/blog/:name" element={<BlogSingle />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/prana-vriddhi" element={<Prāṇa_Vriddhi />} />
          {/* <Route path="/news" element={<News />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          {/* <Route path="/devotee" element={<Devotee />} /> */}
          <Route path="/siddhasana" element={<Siddhasana />} />
          <Route path="/experiences" element={<Experience />} />
          <Route />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
