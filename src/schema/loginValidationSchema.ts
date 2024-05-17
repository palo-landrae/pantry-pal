import { object, string } from "yup";

export const loginUpValidationSchema = object({
  username: string().required("Please enter your username."),
  password: string().required("Please enter your password."),
});
