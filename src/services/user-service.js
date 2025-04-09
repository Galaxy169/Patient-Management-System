import { MYAXIOS } from "./helper";

export const addUserToDb = (user) => {
  return MYAXIOS.post("/login/addUser", user).then((response) => response.data);
};
