import { useInView } from "react-intersection-observer";
import { Dropdown } from "primereact/dropdown";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { FormSchemas } from "../../schemas/FormSchemas";
import SubmitButton from "../buttons/SubmitButton";
import "./formCommon.scss";

const FormCommon = () => {
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
      action.resetForm();
      console.log("value", value);
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
