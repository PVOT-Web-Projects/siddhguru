import "./textSection.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TextSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="textSection" ref={ref}>
      <div className="textSection_wrapper">
        <p
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 2s",
            transform: isInView ? "none" : "translateY(100px)"
          }}
        >
          <span>Lorem Ipsum</span> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};
export default TextSection;
