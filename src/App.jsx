import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import LocomotoveScroll from "locomotive-scroll";
import "./global.scss";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/loader/Loader";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  }, 2200);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader />
        ) : (
          <Layout>
            <Routes>
              <Route path="/siddhguru1" element={<Home />} />
              <Route />
            </Routes>
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
