import Button from "../../components/buttons/button3";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { motion } from "framer-motion";

const FormCommon = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "English", code: "NY" },
    { name: "Hindi", code: "RM" },
    { name: "Gujrati", code: "LDN" },
    { name: "Marathi", code: "IST" },
    { name: "Bangali", code: "PRS" },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="siddhguru_form_Section">
      <form action="">
        <div className="sidhhguru_form_content">
          <input type="text" placeholder="Full Name" className="input_field" />
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
    </div>
  );
};

export default FormCommon;
