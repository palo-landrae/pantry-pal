import { object, string, ref } from "yup";

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export const signUpValidationSchema = object({
  email: string()
    .required("Please enter your email.")
    .email("Email must be valid."),
  username: string().required("Please enter your username."),
  password: string()
    .required("Please enter your password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match."),
});
