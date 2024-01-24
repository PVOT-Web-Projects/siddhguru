import * as Yup from "yup";

export const FormSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email().required("Email is required"),
  country: Yup.string().required("Country is required"),
  language: Yup.object().required("language is required"),
});
export const ContactSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email().required("Email is required"),
  country: Yup.string().required("Country is required"),
  language: Yup.object().required("Language is required"),
  message: Yup.string().required("Message is required"),
});
