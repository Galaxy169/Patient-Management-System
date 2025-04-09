import { MYAXIOS } from "./helper";

export const addSheetToDb = (formData) => {
  return MYAXIOS.post("/caseSheet/addCaseSheet", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      header1: "headerValue1",
    },
  }).then((response) => response.data);
};
