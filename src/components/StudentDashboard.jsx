import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import HomePage from "./HomePage";
import AddCaseSheet from "./AddCaseSheet";
import { UserInfo } from "../store/user-info-store";
import { useContext, useState } from "react";
import Home from "./Home";
import AddUser from "./AddUser";
import SearchSheet from "./SearchSheet";
import SearchList from "./SearchList";
import StudentSidebar from "./StudentSidebar";

const StudentDashboard = () => {
  const [selectedTab, setselectedTab] = useState("home");
  const location = useLocation();
  const { userDetails } = useContext(UserInfo);

  let isLoggedin = userDetails.loginFlag;

  console.log("isLoggedin==", isLoggedin);
  /* const data = localStorage.getItem("token-info");
  let userIdFromStorage = "";

  if (userIdFromStorage === null) {
    userIdFromStorage = "NULL";
  }
  console.log("userId==", userId);
  console.log("userIdFromStorage==", userIdFromStorage); */
  return (
    <>
      {isLoggedin ? (
        <div className="appContainer">
          <StudentSidebar
            isLoggedin={isLoggedin}
            selectedTab={selectedTab}
            setselectedTab={setselectedTab}
          />
          <Header />

          {selectedTab === "home" ? (
            <Home />
          ) : selectedTab === "addSheet" ? (
            <AddCaseSheet></AddCaseSheet>
          ) : selectedTab === "viewSheet" ? (
            <SearchSheet setselectedTab={setselectedTab} />
          ) : selectedTab === "viewList" ? (
            <SearchList setselectedTab={setselectedTab} />
          ) : (
            <Home />
          )}
        </div>
      ) : (
        <HomePage />
      )}
    </>
  );
};

export default StudentDashboard;
