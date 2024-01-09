import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./homePage3D.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
// import HomePage3D from "./HomePage3D";
gsap.registerPlugin(ScrollTrigger);

// https://iraoverseas.com/wp-content/uploads/2024/01/0000001.png

const AirpodsAnimation = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  // const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  let refs = useRef([]);
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    // const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    // Set a fixed size for the canvas (adjust as needed)
    canvas.width = 750;
    canvas.height = window.innerHeight;

    const frameCount = 150;
    const currentFrame = (index) =>
      `https://iraoverseas.com/wp-content/uploads/2024/01/${(index + 1)
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
          trigger: ".hf",
          pin: true,
          scrub: 0.1,
          // scrub: true,
          end: "+=500%",
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
    createAnimation();
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: ".hf",
        scrub: true,
        start: `top`,
        end: "+=400%",
      },
      opacity: 1,
      color: "#123828",
      ease: "none",
      stagger: 20,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  console.log(refs);

  return (
    <section ref={sectionRef}>
      <div className="homePage3D">
        <div className="hf">
          <canvas ref={canvasRef}></canvas>
          <div className="eyesText">
            {splitWords("जिनकी एक दृष्टि जीवन की दिशा व दशा दोनो बदल देती है")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirpodsAnimation;
