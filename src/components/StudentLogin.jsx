import { useContext, useRef, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { UserInfo } from "../store/user-info-store";
import { isLogin } from "../services/login_service";
import { toast } from "react-toastify";
const StudentLogin = () => {
  const { loginUser, userDetails } = useContext(UserInfo);
  const userIdElement = useRef();
  const passwdElement = useRef();

  /* const [name, setName] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false); */

  const navigate = useNavigate();

  let flag = false;

  const handleLogin = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const passwd = passwdElement.current.value;
    const role = 2;
    //  API CALL

    let data = {
      userName: userId,
      password: passwd,
      roleId: role,
    };

    //  API CALL
    isLogin(data)
      .then((resp) => {
        console.log(resp);
        if (resp.status === "200") {
          toast.success("Login Success!!!!");
          loginUser(userId, passwd);
          navigate("/studentDashboard");
        } else {
          alert(" Wrong UserId or Password.");
        }
      })
      .catch((error) => {
        toast.error("⚠️ Worng UserName or Password!!!!");
      });

    /* loginUser(userId, passwd);

    if (userId === "admin" && passwd === "admin") {
      navigate("/dashboard");
    } else {
      alert(" Wrong UserId or Password.");
    } */
  };
  return (
    <div className="HomeContainer">
      {" "}
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form id="loginForm">
        <h3>Student Login</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          ref={userIdElement}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          ref={passwdElement}
        />

        <button id="loginBtn" onClick={(e) => handleLogin(e)}>
          Log In
        </button>
        <center>
          <div className="social">
            <div className="go">
              <Link to="/" style={{ textDecoration: "none" }}>
                Switch User
              </Link>
            </div>
          </div>
        </center>
      </form>
    </div>
  );
};

export default StudentLogin;
