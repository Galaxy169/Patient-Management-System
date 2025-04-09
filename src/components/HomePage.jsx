import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="HomeContainer">
        <form id="loginForm">
          <h3 style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Swami Vivekanand Subharti University
          </h3>
          <div className="login-logo">
            <a href="#">
              <img
                src="src\assets\images\subharti-logo.png"
                alt="Subharti LOGO"
                style={{ width: "100px" }}
              />
            </a>
          </div>

          <button id="loginBtn" onClick={() => navigate("/studentLogin")}>
            PG Student Login
          </button>

          <button id="loginBtn" onClick={() => navigate("/facultyLogin")}>
            Faculty Login
          </button>
        </form>
      </div>
      <Outlet />
    </>
  );
};

export default HomePage;
