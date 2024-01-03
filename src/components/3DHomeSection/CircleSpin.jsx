import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./homePage3d.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import HomePage3D from "./HomePage3D";
gsap.registerPlugin(ScrollTrigger);

// https://iraoverseas.com/wp-content/uploads/2024/01/0000001.png

const AirpodsAnimation = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    // Set a fixed size for the canvas (adjust as needed)
    canvas.width = 750;
    canvas.height = window.innerHeight;

    const frameCount = 150;
    const currentFrame = (index) =>
      ` https://iraoverseas.com/wp-content/uploads/2024/01/${(index + 1)
        .toString()
        .padStart(7, "0")}.png`;

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    }

    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.1,
          // scrub: true,
          end: "+=900%",
        },
      })
      .to(airpodsRef.current, {
        frame: frameCount - 1,
        snap: "frame",

        ease: "none",
        duration: 1,
      });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the image without scaling
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="test" >
      <div className="hf">
        <section ref={sectionRef}>
          <canvas ref={canvasRef}></canvas>
        </section>
      </div>
      <HomePage3D />
    </div>
  );
};

export default AirpodsAnimation;
