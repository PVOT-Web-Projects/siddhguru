import { useState, useEffect, useRef } from "react";
import "./counterHomePage.scss";
import FeaturedBlog from "../featuredBlogs/FeaturedBlogs.jsx";
const Space = () => {
  const [counter, setCounter] = useState(1);
  const spaceRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start the counter when the component comes into view
          const intervalId = setInterval(() => {
            setCounter((prevCounter) => {
              if (prevCounter < 160) {
                return prevCounter + 1;
              } else {
                clearInterval(intervalId); // Stop the counter when it reaches 160
                return prevCounter; // Return the current counter value
              }
            });
          }, 15);
          return () => clearInterval(intervalId); // Cleanup on component unmount
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );
    if (spaceRef.current) {
      observer.observe(spaceRef.current);
    }
    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);
  return (
    <div className="homePageCounter">
      <div ref={spaceRef} className="centerOuterColor">
        <div className="centerOuter">
          <div className="centerNumber">{counter}</div>
          <div className="CenterText">Centers</div>
        </div>
      </div>
      <FeaturedBlog />
    </div>
  );
};
export default Space;
