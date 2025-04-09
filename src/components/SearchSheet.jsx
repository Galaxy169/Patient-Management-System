import { useContext, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { searchViaMob } from "../services/searchViaMob-service";
import SearchList from "./SearchList";
import { toast } from "react-toastify";
import { UserInfo } from "../store/user-info-store";
const SearchSheet = ({ setselectedTab }) => {
  const navigate = useNavigate();
  const { sheetListContext, userDetails } = useContext(UserInfo);
  const phoneNumber = useRef();
  const [data, setData] = useState({
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
    // console.log(data);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    if (phoneNumber.current.value !== "") {
      searchViaMob(data)
        .then((resp) => {
          console.log("resp===", resp);
          if (resp.length === 0) {
            toast.warning(" No Result Found.");
            phoneNumber.current.value = "";
          } else {
            setselectedTab("viewList");

            sheetListContext(resp);
          }

          // phoneNumber.current.value = "";
        })
        .catch((error) => {
          console.log("error===", error);
        });
    } else {
      toast.warning("Please Enter Mobile Number!!!");
    }
  };

  return (
    <>
      <div className="HomeContainer">
        <form id="searchForm">
          <h3 style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Search Case Sheet
          </h3>

          <div>
            <label style={{ fontSize: "20px", marginBottom: "15px" }}>
              Mobile Number
            </label>
            <input
              type="number"
              placeholder="Mobile Number"
              id="phoneNumber"
              ref={phoneNumber}
              required
              onChange={(e) => handleChange(e)}
              style={{ width: "100%", height: "50px", borderRadius: "5px" }}
            />
          </div>

          <button id="loginBtn" onClick={(e) => submitForm(e)}>
            Search
          </button>
        </form>
      </div>

      <Outlet />
    </>
  );
};

export default SearchSheet;
