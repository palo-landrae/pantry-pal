import { object, string } from "yup";

export const accountValidationSchema = object({
  email: string()
    .required("Please enter your email.")
    .email("Email must be valid."),
  username: string().required("Please enter your username."),
});
