import { motion} from "framer-motion";
// import Button from "../../components/buttons/button3";
import { useInView } from "react-intersection-observer";
// import { useState } from "react";
// import { Dropdown } from "primereact/dropdown";
import Siddhguru_img from "../../images/homePageFormImage.png";
import "./formHomePage.scss";
import FormCommon from "../formCommon/FormCommon";

function FormHomePage() {
  const text = "कल को आसान बनाने के लिए आज आपको कड़ी मेहनत करनी ही पड़ेगी.";
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.02,
        staggerChildren: 0.05,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  // const controls = useAnimation();
  // const [selectedCity, setSelectedCity] = useState(null);
  // const cities = [
  //   { name: "English", code: "NY" },
  //   { name: "Hindi", code: "RM" },
  //   { name: "Gujrati", code: "LDN" },
  //   { name: "Marathi", code: "IST" },
  //   { name: "Bangali", code: "PRS" },
  // ];
  return (
    <div className="siddhguru_container" ref={ref}>
      <div className="siddhguru_section">
        <img src={Siddhguru_img} alt="none" />
      </div>

      <motion.div
        className="siddhguru_mantra_section"
        variants={sentence}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {text.split("").map((char, index) => (
          <motion.span
            className="siddhguru_mantra_text"
            key={char + "-" + index}
            variants={letter}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <div className="siddhguru_message_section">
        <p>Receive Siddhguru’s quote every day in your inbox.</p>
      </div>
      {/* <div className="siddhguru_form_Section">
        <form action="">
          <div className="sidhhguru_form_content">
            <input
              type="text"
              placeholder="Full Name"
              className="input_field"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input_field"
            />
          </div>
          <div className="sidhhguru_form_content">
            <input type="text" placeholder="Language" className="input_field" />
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Country"
              className="siddhguru_dropdown_menu"
            />
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="submit_btn_outer"
          >
            <Button btn_text="Sign Up" />
          </motion.div>
        </form>
      </div> */}
      <FormCommon />
    </div>
  );
}
export default FormHomePage;
