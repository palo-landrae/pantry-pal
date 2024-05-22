import { object, string, ref } from "yup";

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character.`;
};

export const resetPasswordValidationSchema = object({
  currentPassword: string().required("Please enter your current password."),
  newPassword: string()
    .required("Please enter your new password.")
    .min(8, "Password must have at least 8 characters.")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: string()
    .required("Please re-type your password")
    .oneOf([ref("newPassword")], "Passwords does not match."),
});
