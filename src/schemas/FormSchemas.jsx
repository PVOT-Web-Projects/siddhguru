import * as Yup from "yup";

export const FormSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email().required("Email is required"),
  country: Yup.string().required("Country is required"),
  language: Yup.object().required("language is required"),
});
