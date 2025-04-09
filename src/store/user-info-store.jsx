import { createContext, useReducer } from "react";

export const UserInfo = createContext({
  userDetails: {},
  caseSheetList: [],
  loginUser: () => {},
  logOutUser: () => {},
  sheetListContext: () => {},
});

const userDetailsReducer = (curruserDetails, action) => {
  let newuserDetails = curruserDetails;

  if (action.type === "USER_LOGIN") {
    newuserDetails = {
      name: action.payload.userName,
      pass: action.payload.userPass,
      loginFlag: true,
    };
    console.log("newuserDetails==", newuserDetails);
  } else if (action.type === "USER_LOGOUT") {
    newuserDetails = { loginFlag: false };
  }
  return newuserDetails;
};

const caseSheetListReducer = (currcaseSheetList, action) => {
  let newcaseSheetList = [];
  let tempcaseSheetList = [];

  if (action.type === "SHEET_LIST") {
    tempcaseSheetList = [action.payload];
    tempcaseSheetList.map(
      (r) => (newcaseSheetList = [r.resp, ...newcaseSheetList])
    );
    tempcaseSheetList.map((r) => console.log("newcaseSheetList==", r.resp));
  }
  return newcaseSheetList;
};

const UserInfoProvider = ({ children }) => {
  const [userDetails, dispatchUserDetails] = useReducer(userDetailsReducer, []);
  const [caseSheetList, dispatchcaseSheetList] = useReducer(
    caseSheetListReducer,
    []
  );

  const sheetListContext = (resp) => {
    const sheetListContextAction = {
      type: "SHEET_LIST",
      payload: {
        resp: resp,
      },
    };
    dispatchcaseSheetList(sheetListContextAction);
  };

  const loginUser = (userName, userPass) => {
    const loginUserAction = {
      type: "USER_LOGIN",
      payload: {
        userName: userName,
        userPass: userPass,
      },
    };
    dispatchUserDetails(loginUserAction);
  };

  const logOutUser = () => {
    const logOutUserAction = {
      type: "USER_LOGOUT",
      payload: {},
    };
    dispatchUserDetails(logOutUserAction);
  };

  return (
    <UserInfo.Provider
      value={{
        userDetails: userDetails,
        caseSheetList: caseSheetList,
        loginUser: loginUser,
        logOutUser: logOutUser,
        sheetListContext: sheetListContext,
      }}
    >
      {children}
    </UserInfo.Provider>
  );
};

export default UserInfoProvider;
