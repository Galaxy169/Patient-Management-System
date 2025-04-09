import { useContext, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { searchViaMob } from "../services/searchViaMob-service";
import { toast } from "react-toastify";
import { UserInfo } from "../store/user-info-store";
import Modal from "./Modal";
import SearchSheet from "./SearchSheet";
const SearchList = ({ setselectedTab }) => {
  const navigate = useNavigate();
  const { caseSheetList } = useContext(UserInfo);
  const phoneNumber = useRef();
  const [data, setData] = useState({
    phoneNumber: "",
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
    // console.log(data);
  };

  let temp1 = [];
  temp1 = caseSheetList[0];

  //  temp1.map((r) => console.log("temp1==", r));

  return (
    <>
      <div className="HomeContainer">
        <form id="searchFormList">
          <h3
            style={{
              fontWeight: "bold",
              textDecorationLine: "underline",
              marginBottom: "20px",
            }}
          >
            Search Results
          </h3>

          {temp1.map((sheet) => (
            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action "
                key={sheet.caseSheetId}
                onClick={handleOpen}
              >
                {sheet.currDate} -- {sheet.phoneNumber}
              </a>
              <Modal isOpen={open}>
                <>
                  <div className="row">
                    <section className="caseContainer">
                      <div className="col-sm-8 mainForm">
                        <form className="caseForm">
                          <center>
                            <h3 style={{ marginTop: "40px" }}>
                              <b>
                                Case Sheet Form of <u>{sheet.name}</u>
                              </b>
                            </h3>
                          </center>
                          <div className="input-box">
                            <label>FULL NAME</label>
                            <input
                              type="text"
                              placeholder="Name"
                              id="name"
                              value={sheet.name}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>AGE</label>
                              <input
                                type="number"
                                placeholder="AGE"
                                id="age"
                                value={sheet.age}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>OCCUPATION</label>
                              <input
                                type="text"
                                placeholder="OCCUPATION"
                                id="occupation"
                                value={sheet.occupation}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="selectColumn">
                            <div className="select-box">
                              <select
                                id="gender"
                                value={sheet.gender}
                                required
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">SELECT GENDER</option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="OTHER">OTHER</option>
                              </select>
                            </div>
                            <div className="select-box">
                              <select
                                id="opd_unit"
                                value={sheet.opd_unit}
                                required
                                onChange={(e) => handleChange(e)}
                              >
                                <option value="">SELECT OPD OF</option>
                                <option value="Unit - 1">Unit 1</option>
                                <option value="Unit - 2">Unit 2</option>
                                <option value="Unit - 3">Unit 3</option>
                                <option value="Unit - 4">Unit 4</option>
                                <option value="Unit - 5">Unit 5</option>
                              </select>
                            </div>
                          </div>
                          <div className="input-box">
                            <label>ADDRESS</label>
                            <input
                              type="text"
                              placeholder="Address"
                              id="address"
                              value={sheet.address}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>PHONE NUMBER</label>
                              <input
                                type="number"
                                placeholder="Phone number"
                                id="phoneNumber"
                                value={sheet.phoneNumber}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>BIRTH DATE</label>
                              <input
                                type="date"
                                placeholder="Birth date"
                                id="dob"
                                value={sheet.dob}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>CURRENT DATE</label>
                              <input
                                type="date"
                                id="currDate"
                                value={sheet.currDate}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>DATE OF ADMISSION</label>
                              <input
                                type="date"
                                id="admissionDate"
                                value={sheet.admissionDate}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>DATE OF OPERATION</label>
                              <input
                                type="date"
                                id="operationDate"
                                value={sheet.operationDate}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>DATE OF DISCHAEGE</label>
                              <input
                                type="date"
                                id="dischargeDate"
                                value={sheet.dischargeDate}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>

                          {/* <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">prefer not to say</label>
            </div>
          </div>
        </div> */}
                          <div className="input-box">
                            <label>OPD/IPD NUMBER</label>
                            <input
                              type="text"
                              placeholder="OPD/IPD NUMBER"
                              id="opdNumber"
                              value={sheet.opdNumber}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>CHIEF COMPLAINT</label>
                            <input
                              type="text"
                              placeholder="CHIEF COMPLAINT"
                              id="chiefComplaint"
                              value={sheet.chiefComplaint}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>HISTORY OF PRESENT ILLNESS</label>
                            <textarea
                              rows="5"
                              cols="50"
                              placeholder="HISTORY OF PRESENT ILLNESS"
                              id="presentHistory"
                              value={sheet.presentHistory}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>PAST MEDICAL HISTORY</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="PAST MEDICAL HISTORY"
                              id="pastMedicalHistory"
                              value={sheet.pastMedicalHistory}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>PAST DENTAL HISTORY</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="PAST DENTAL HISTORY"
                              id="pastDentalHistory"
                              value={sheet.pastDentalHistory}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>PERSONAL HISTORY</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="PERSONAL HISTORY"
                              id="personalHistory"
                              value={sheet.personalHistory}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>ALLERGY TO ANY MEDICINE</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="ALLERGY TO ANY MEDICINE"
                              id="allergyToMedicine"
                              value={sheet.allergyToMedicine}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>ANY SYSTEMIC DISEASE</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="ANY SYSTEMIC DISEASE"
                              id="systemicDisease"
                              value={sheet.systemicDisease}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>ANY MEDICATIONS</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="ANY MEDICATIONS"
                              id="anyMedications"
                              value={sheet.anyMedications}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <center>
                            <h3 style={{ marginTop: "40px" }}>
                              <b>Examination</b>
                            </h3>
                          </center>
                          <div className="input-box">
                            <label>GENERAL EXAMINATION</label>
                            <textarea
                              rows="5"
                              cols="50"
                              placeholder="GENERAL EXAMINATION"
                              id="generalExamination"
                              value={sheet.generalExamination}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>TEMPERATURE ⁰F</label>
                              <input
                                type="number"
                                placeholder="TEMPERATURE ⁰F"
                                id="temperature"
                                value={sheet.temperature}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>PULSE/MINUTE</label>
                              <input
                                type="number"
                                placeholder="PULSE/MINUTE"
                                id="pulse"
                                value={sheet.pulse}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>RESPIRATORY RATE</label>
                              <input
                                type="number"
                                placeholder="RESPIRATORY RATE/MINUTE"
                                id="respRate"
                                value={sheet.respRate}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>BLOOD PRESSURE</label>
                              <input
                                type="text"
                                placeholder="BLOOD PRESSURE"
                                id="bloodPressure"
                                value={sheet.bloodPressure}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="input-box">
                            <label>EXTRA-ORAL EXAMINATION</label>
                            <textarea
                              rows="3"
                              cols="50"
                              placeholder="EXTRA-ORAL EXAMINATION"
                              id="extraOralExamination"
                              value={sheet.extraOralExamination}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>INTRA-ORAL EXAMINATION</label>
                            <textarea
                              rows="3"
                              cols="50"
                              placeholder="INTRA-ORAL EXAMINATION"
                              id="intraOralExamination"
                              value={sheet.intraOralExamination}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>PROVISIONAL DIAGNOSIS</label>
                            <input
                              type="text"
                              placeholder="PROVISIONAL DIAGNOSIS"
                              id="provisionalDiagnosis"
                              value={sheet.provisionalDiagnosis}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>INVESTIGATIONS</label>
                            <textarea
                              rows="3"
                              cols="50"
                              placeholder="INVESTIGATIONS"
                              id="investigations"
                              value={sheet.investigations}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>RADIOGRAPHS AND THEIR FINDINGS</label>
                            <textarea
                              rows="3"
                              cols="50"
                              placeholder="RADIOGRAPHS AND THEIR FINDINGS"
                              id="radiographsFinding"
                              value={sheet.radiographsFinding}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>DIFFERENTIAL DIAGNOSIS</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="DIFFERENTIAL DIAGNOSIS"
                              id="differentialDiagnosis"
                              value={sheet.differentialDiagnosis}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>FINAL DIAGNOSIS</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="FINAL DIAGNOSIS"
                              id="finalDiagnosis"
                              value={sheet.finalDiagnosis}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>TREATMENT PLAN</label>
                            <input
                              type="text"
                              placeholder="TREATMENT PLAN"
                              id="treatmentPlan"
                              value={sheet.treatmentPlan}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>PRE-OPERATIVE MEDICATIONS</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="PRE-OPERATIVE MEDICATIONS"
                              id="preOperativeMedi"
                              value={sheet.preOperativeMedi}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>TREATMENT GIVEN</label>
                            <textarea
                              rows="2"
                              cols="50"
                              placeholder="TREATMENT GIVEN"
                              id="treatmentGiven"
                              value={sheet.treatmentGiven}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>OPERATIVE NOTES</label>
                            <textarea
                              rows="10"
                              cols="50"
                              placeholder="OPERATIVE NOTES"
                              id="operativeNotes"
                              value={sheet.operativeNotes}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <label
                            htmlFor="histoPic"
                            style={{ marginBottom: "20px" }}
                          >
                            DIAGRAM - 1
                          </label>
                          <div className="input-box">
                            <img
                              src={sheet.diagram1Path}
                              alt="diagram1 PIC"
                              style={{ width: "630px", height: "300px" }}
                              id="diagram1"
                            />
                          </div>
                          <label
                            htmlFor="histoPic"
                            style={{ marginBottom: "20px" }}
                          >
                            DIAGRAM - 2
                          </label>
                          <div className="input-box">
                            <img
                              src={sheet.diagram2Path}
                              alt="diagram2 Pic"
                              style={{ width: "630px", height: "300px" }}
                              id="diagram2"
                            />
                          </div>
                          <div className="input-box">
                            <label>
                              INTRA-OPERATIVE COMPLICATIONS / REMARKS
                            </label>
                            <input
                              type="text"
                              placeholder="INTRA-OPERATIVE COMPLICATIONS / REMARKS"
                              id="intraOpsRemarks"
                              value={sheet.intraOpsRemarks}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>POST-OPERATIVE MEDICATIONS</label>
                            <textarea
                              rows="3"
                              cols="50"
                              placeholder="POST-OPERATIVE MEDICATIONS"
                              id="postOpsMedic"
                              value={sheet.postOpsMedic}
                              required
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>POST-OPERATIVE INSTRUCTIONS</label>
                            <input
                              type="text"
                              placeholder="POST-OPERATIVE INSTRUCTIONS"
                              id="postOpsInst"
                              value={sheet.postOpsInst}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="input-box">
                            <label>BIOPSY DETAILS</label>
                            <input
                              type="text"
                              placeholder="BIOPSY DETAILS"
                              id="biopsyDetails"
                              value={sheet.biopsyDetails}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>RECALL VISIT ON</label>
                              <input
                                type="date"
                                id="recallVisitOn"
                                value={sheet.recallVisitOn}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <label
                            htmlFor="histoPic"
                            style={{ marginBottom: "20px" }}
                          >
                            HISTOPATHOLOGICAL PICTURE
                          </label>
                          <div className="input-box">
                            <img
                              src={sheet.histoPicPath}
                              alt="histoPic Pic"
                              style={{ width: "630px", height: "300px" }}
                              id="histoPic"
                            />
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>1st SURGEON INCHARGE</label>
                              <input
                                type="text"
                                placeholder="1st SURGEON INCHARGE"
                                id="firstSurgeon"
                                value={sheet.firstSurgeon}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>2nd SURGEON INCHARGE</label>
                              <input
                                type="text"
                                placeholder="2nd SURGEON INCHARGE"
                                id="secondSurgeon"
                                value={sheet.secondSurgeon}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>3rd SURGEON INCHARGE</label>
                              <input
                                type="text"
                                placeholder="3rd SURGEON INCHARGE"
                                id="thirdSurgeon"
                                value={sheet.thirdSurgeon}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>4th SURGEON INCHARGE</label>
                              <input
                                type="text"
                                placeholder="4th SURGEON INCHARGE"
                                id="fourthSurgeon"
                                value={sheet.fourthSurgeon}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="column">
                            <div className="input-box">
                              <label>P.G. INCHARGE 1ST YEAR</label>
                              <input
                                type="text"
                                placeholder="P.G. INCHARGE 1ST YEAR"
                                id="pgFirstYear"
                                value={sheet.pgFirstYear}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>P.G. INCHARGE 2nd YEAR</label>
                              <input
                                type="text"
                                placeholder="P.G. INCHARGE 2nd YEAR"
                                id="pgSecondYear"
                                value={sheet.pgSecondYear}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="input-box">
                              <label>P.G. INCHARGE 3rd YEAR</label>
                              <input
                                type="text"
                                placeholder="P.G. INCHARGE 3rd YEAR"
                                id="pgThirdYear"
                                value={sheet.pgThirdYear}
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="column">
                            <button type="button" onClick={handleClose}>
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </section>
                  </div>
                </>
              </Modal>
              <br></br>
            </div>
          ))}
          {/*  <button id="loginBtn" onClick={(e) => submitForm(e)}>
            Search
          </button> */}
        </form>
      </div>

      <Outlet />
    </>
  );
};

export default SearchList;
