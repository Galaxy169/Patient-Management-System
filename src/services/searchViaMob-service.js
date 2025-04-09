import axios from "axios";
import { MYAXIOS } from "./helper";

export const searchViaMob = (mob) => {
  return MYAXIOS.post("/caseSheet/fetchSheetByMobNum/", mob).then(
    (response) => response.data
  );
};
