import { useInView } from "react-intersection-observer";
import { Dropdown } from "primereact/dropdown";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { FormSchemas } from "../../schemas/FormSchemas";
import SubmitButton from "../buttons/SubmitButton";
import "./formCommon.scss";
import emailjs from "@emailjs/browser";

const FormCommon = () => {
  const cities = [
    { name: "English" },
    { name: "Hindi" },
    { name: "Gujrati" },
    { name: "Marathi" },
    { name: "Bangali" },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  // function sendemail(object) {
  //   emailjs.sendForm("service_en5qoij", "template_7ymw9ml", object, "fobUr4FlhTii3NWuL").then(
  //     (result) => {
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
      
  //   );
  //   console.log(object)
  // }
  const initialValue = {
    fullName: "",
    email: "",
    country: "",
    language: "",
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchemas,
    onSubmit: (value, action) => {
      console.log("value", value);
      emailjs.send('service_en5qoij', 'template_ycgs2m9', values, 'fobUr4FlhTii3NWuL')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // resetForm(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error('Email send error:', error);
      });
      action.resetForm();
    },
    
  });
  console.log(values);

  return (
    <div className="siddhguru_form_Section">
      <form onSubmit={handleSubmit}>
        <div className="sidhhguru_form_content">
          <div className="formField">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              className="input_field"
              onChange={handleChange}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <p className="error">{errors.fullName}</p>
            )}
          </div>
          <div className="formField">
            <input
              type="email"
              placeholder="Email Address"
              className="input_field"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="sidhhguru_form_content">
          <div className="formField">
            <input
              type="text"
              placeholder="Country"
              name="country"
              className="input_field"
              onChange={handleChange}
              value={values.country}
            />
            {touched.country && errors.country && (
              <p className="error">{errors.country}</p>
            )}
          </div>
          <div className="formField">
            <Dropdown
              // value={selectedCity}
              // onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              name="language"
              optionLabel="name"
              placeholder="Language"
              className="siddhguru_dropdown_menu"
              id="language"
              onChange={handleChange}
              value={values.language}
            />
            {touched.language && errors.language && (
              <p className="error">{errors.language}</p>
            )}
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="submit_btn_outer"
        >
          {/* <Button btn_text="Sign Up" /> */}
          <SubmitButton btn_text="Sign Up" />
        </motion.div>
      </form>
    </div>
  );
};

export default FormCommon;
