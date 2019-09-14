import * as Yup from "yup";

export const schemaUsernamePasword = Yup.object().shape({
  username: Yup.string()
    .required()
    .min(5, "Too Short!")
    .max(16, "Too Long"),
  password: Yup.string()
    .required()
    .min(5, "Too Short!")
    .max(16, "Too Long")
});

export const schemaUsernamePaswordandRepeat = Yup.object().shape({
  username: Yup.string()
    .required("Please Enter your username")
    .min(5, "Minimum 5 characters!")
    .max(16, "16 characters maximum"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(5, "Minimum 5 characters!")
    .max(16, "16 characters maximum"),
  passwordRepeat: Yup.string()
    .required("Please Enter your password again")
    .min(5, "Minimum 5 characters!")
    .max(16, "16 characters maximum")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
});
