import { MYAXIOS } from "./helper";

export const isLogin = (user) => {
  return MYAXIOS.post("/login/authLogin", user).then(
    (response) => response.data
  );
};
