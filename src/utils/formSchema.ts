import * as yup from "yup";

const errorMsg = {
  required: "这是必填项",
  match: "密码输入不一致",
};

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(errorMsg.required),
  password: yup.string().required(errorMsg.required),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email().required(errorMsg.required),
  password: yup.string().required(errorMsg.required),
  confirmPassword: yup
    .string()
    .required(errorMsg.required)
    .test(
      "match",
      errorMsg.match,
      (value, context) => value === context.parent.password
    ),
});