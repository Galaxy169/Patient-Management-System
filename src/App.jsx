import "./App.css";
import HomePage from "./components/HomePage";
import "./assets/css/Home.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacultyLogin from "./components/FacultyLogin";
import StudentLogin from "./components/StudentLogin";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserInfoProvider from "./store/user-info-store";
import AddCaseSheet from "./components/AddCaseSheet";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SearchSheet from "./components/SearchSheet";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <UserInfoProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<HomePage />} />
              <Route path="facultyLogin" element={<FacultyLogin />} />
              <Route path="studentLogin" element={<StudentLogin />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="studentDashboard" element={<StudentDashboard />} />
              <Route path="homePage" element={<HomePage />} />
              <Route path="addCaseSheet" element={<AddCaseSheet />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserInfoProvider>
    </>
  );
}

export default App;
