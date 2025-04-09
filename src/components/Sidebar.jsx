import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserInfo } from "../store/user-info-store";
const Sidebar = ({ isLoggedin, selectedTab, setselectedTab }) => {
  const { logOutUser, userDetails } = useContext(UserInfo);
  const navigate = useNavigate();
  const logout = () => {
    // localStorage.removeItem("token-info");
    // isLoggedin = false;
    logOutUser();
    console.log("logout");
    navigate("/");
  };
  console.log("selectedTab==", selectedTab);
  /* const navigateToAddSheet = () => {
    navigate("/addCaseSheet", { state: userDetails });
  }; */
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sideBar"
      style={{ width: "280px", marginTop: "75px" }}
    >
      <a href="#" className="homeLogo">
        <img
          src="src\assets\images\subwhiteLogo.webp"
          alt="Subharti LOGO"
          style={{ width: "120px" }}
        />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "home" && "active"
            }`}
            aria-current="page"
            onClick={() => {
              setselectedTab("home");
            }}
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "addSheet" && "active"
            }`}
            onClick={() => {
              setselectedTab("addSheet");
            }}
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            New Case Sheet
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "viewSheet" && "active"
            } ${selectedTab === "viewList" && "active"}`}
            onClick={() => {
              setselectedTab("viewSheet");
            }}
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Search Case Sheet
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "addUser" && "active"
            }`}
            onClick={() => {
              setselectedTab("addUser");
            }}
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Add User
          </a>
        </li>
        <li>
          <a onClick={logout} className="nav-link text-white logout">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Logout
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>ADMIN</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
