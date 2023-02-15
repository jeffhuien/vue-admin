import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "此项必须输入！~",
  },

  string: {
    email: "邮箱格式错误！~",
    max: "不能超过最大${max}个字符",
    min: "不能少于${min}个字符",
  },
});

export default yup;
