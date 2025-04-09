import "bootstrap/dist/css/bootstrap.css";
import { useContext, useRef, useState } from "react";
import { UserInfo } from "../store/user-info-store";
import HomePage from "./HomePage";
import { useLocation } from "react-router-dom";
import { addUserToDb } from "../services/user-service";
import { toast } from "react-toastify";

const AddUser = () => {
  const userName = useRef();
  const password = useRef();
  const roleId = useRef();
  const phoneNumber = useRef();

  const [data, setData] = useState({
    userName: "",
    password: "",
    roleId: "",
    phoneNumber: "",
  });

  const { userDetails } = useContext(UserInfo);

  let isLoggedin = userDetails.loginFlag;
  console.log("isLoggedin==", isLoggedin);

  const handleChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
    // console.log(data);
  };

  const submitForm = (event) => {
    event.preventDefault();
    // console.log("inside  submit form");
    if (
      userName.current.value !== "" &&
      password.current.value !== "" &&
      roleId.current.value !== "" &&
      phoneNumber.current.value !== ""
    ) {
      addUserToDb(data)
        .then((resp) => {
          console.log("resp===", resp);
          toast.success("User is added successfully!!!!");
          userName.current.value = "";
          password.current.value = "";
          roleId.current.value = "";
          phoneNumber.current.value = "";
        })
        .catch((error) => {
          console.log("error===", error);
        });
    } else {
      toast.warning("❌ Please fill all fields!!!");
    }
  };
  return (
    <>
      {isLoggedin ? (
        <div className="row">
          <section className="caseContainer">
            <div className="col-sm-2"></div>
            <div className="col-sm-4 mainForm">
              <form className="caseForm">
                <center>
                  <h3 style={{ marginTop: "40px" }}>
                    <b>ADD USER</b>
                  </h3>
                </center>
                <div className="input-box">
                  <label>User Name</label>
                  <input
                    type="text"
                    placeholder="User Name"
                    id="userName"
                    required
                    ref={userName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-box">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    ref={password}
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-box">
                  <label>Mobile Number</label>
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    id="phoneNumber"
                    ref={phoneNumber}
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="selectColumn">
                  <div className="select-box">
                    <select
                      id="roleId"
                      ref={roleId}
                      required
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">SELECT ROLE</option>
                      <option value="1">FACULTY</option>
                      <option value="2">STUDENT</option>
                    </select>
                  </div>
                </div>
                <button type="button" onClick={(e) => submitForm(e)}>
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      ) : (
        <HomePage />
      )}
    </>
  );
};

export default AddUser;
