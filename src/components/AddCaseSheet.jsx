import "bootstrap/dist/css/bootstrap.css";
import { useContext, useRef, useState } from "react";
import { addSheetToDb } from "../services/caseSheet-service";
import { UserInfo } from "../store/user-info-store";
import HomePage from "./HomePage";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AddCaseSheet = () => {
  const name = useRef();
  const age = useRef();
  const occupation = useRef();
  const gender = useRef();
  const opd_unit = useRef();
  const address = useRef();
  const phoneNumber = useRef();
  const dob = useRef();
  const currDate = useRef();
  const admissionDate = useRef();
  const operationDate = useRef();
  const dischargeDate = useRef();
  const opdNumber = useRef();
  const chiefComplaint = useRef();
  const presentHistory = useRef();
  const pastMedicalHistory = useRef();
  const pastDentalHistory = useRef();
  const personalHistory = useRef();
  const allergyToMedicine = useRef();
  const systemicDisease = useRef();
  const anyMedications = useRef();
  const generalExamination = useRef();
  const temperature = useRef();
  const pulse = useRef();
  const respRate = useRef();
  const bloodPressure = useRef();
  const extraOralExamination = useRef();
  const intraOralExamination = useRef();
  const provisionalDiagnosis = useRef();
  const investigations = useRef();
  const radiographsFinding = useRef();
  const differentialDiagnosis = useRef();
  const finalDiagnosis = useRef();
  const treatmentPlan = useRef();
  const preOperativeMedi = useRef();
  const treatmentGiven = useRef();
  const operativeNotes = useRef();
  const diagram1 = useRef();
  const diagram2 = useRef();
  const intraOpsRemarks = useRef();
  const postOpsMedic = useRef();
  const postOpsInst = useRef();
  const biopsyDetails = useRef();
  const recallVisitOn = useRef();
  const histoPic = useRef();
  const firstSurgeon = useRef();
  const secondSurgeon = useRef();
  const thirdSurgeon = useRef();
  const fourthSurgeon = useRef();
  const pgFirstYear = useRef();
  const pgSecondYear = useRef();
  const pgThirdYear = useRef();

  const [data, setData] = useState({
    name: "",
    age: "",
    occupation: "",
    gender: "",
    opd_unit: "",
    address: "",
    phoneNumber: "",
    dob: "",
    currDate: "",
    admissionDate: "",
    operationDate: "",
    dischargeDate: "",
    opdNumber: "",
    chiefComplaint: "",
    presentHistory: "",
    pastMedicalHistory: "",
    pastDentalHistory: "",
    personalHistory: "",
    allergyToMedicine: "",
    systemicDisease: "",
    anyMedications: "",
    generalExamination: "",
    temperature: "",
    pulse: "",
    respRate: "",
    bloodPressure: "",
    extraOralExamination: "",
    intraOralExamination: "",
    provisionalDiagnosis: "",
    investigations: "",
    radiographsFinding: "",
    differentialDiagnosis: "",
    finalDiagnosis: "",
    treatmentPlan: "",
    preOperativeMedi: "",
    treatmentGiven: "",
    operativeNotes: "",
    diagram1: "",
    diagram2: "",
    intraOpsRemarks: "",
    postOpsMedic: "",
    postOpsInst: "",
    biopsyDetails: "",
    recallVisitOn: "",
    histoPic: "",
    firstSurgeon: "",
    secondSurgeon: "",
    thirdSurgeon: "",
    fourthSurgeon: "",
    pgFirstYear: "",
    pgSecondYear: "",
    pgThirdYear: "",
  });

  const { userDetails } = useContext(UserInfo);
  /* const location = useLocation();
  let isLoggedin = location.state.loginFlag; */
  let isLoggedin = userDetails.loginFlag;
  console.log("isLoggedin==", isLoggedin);

  const [error, setError] = useState({
    error: {},
    isError: false,
  });

  const handleReset = () => {
    //event.preventDefault();
    name.current.value = "";
    age.current.value = "";
    occupation.current.value = "";
    gender.current.value = "";
    opd_unit.current.value = "";
    address.current.value = "";
    phoneNumber.current.value = "";
    dob.current.value = "";
    currDate.current.value = "";
    admissionDate.current.value = "";
    operationDate.current.value = "";
    dischargeDate.current.value = "";
    opdNumber.current.value = "";
    chiefComplaint.current.value = "";
    presentHistory.current.value = "";
    pastMedicalHistory.current.value = "";
    pastDentalHistory.current.value = "";
    personalHistory.current.value = "";
    allergyToMedicine.current.value = "";
    systemicDisease.current.value = "";
    anyMedications.current.value = "";
    generalExamination.current.value = "";
    temperature.current.value = "";
    pulse.current.value = "";
    respRate.current.value = "";
    bloodPressure.current.value = "";
    extraOralExamination.current.value = "";
    intraOralExamination.current.value = "";
    provisionalDiagnosis.current.value = "";
    investigations.current.value = "";
    radiographsFinding.current.value = "";
    differentialDiagnosis.current.value = "";
    finalDiagnosis.current.value = "";
    treatmentPlan.current.value = "";
    preOperativeMedi.current.value = "";
    treatmentGiven.current.value = "";
    operativeNotes.current.value = "";
    diagram1.current.value = "";
    diagram2.current.value = "";
    intraOpsRemarks.current.value = "";
    postOpsMedic.current.value = "";
    postOpsInst.current.value = "";
    biopsyDetails.current.value = "";
    recallVisitOn.current.value = "";
    histoPic.current.value = "";
    firstSurgeon.current.value = "";
    secondSurgeon.current.value = "";
    thirdSurgeon.current.value = "";
    fourthSurgeon.current.value = "";
    pgFirstYear.current.value = "";
    pgSecondYear.current.value = "";
    pgThirdYear.current.value = "";
  };

  const handleErrorReset = () => {
    formData.delete("name");
    formData.delete("age");
    formData.delete("occupation");
    formData.delete("gender");
    formData.delete("opd_unit");
    formData.delete("address");
    formData.delete("phoneNumber");
    formData.delete("dob");
    formData.delete("currDate");
    formData.delete("admissionDate");
    formData.delete("operationDate");
    formData.delete("dischargeDate");
    formData.delete("opdNumber");
    formData.delete("chiefComplaint");
    formData.delete("presentHistory");
    formData.delete("pastMedicalHistory");
    formData.delete("pastDentalHistory");
    formData.delete("personalHistory");
    formData.delete("allergyToMedicine");
    formData.delete("systemicDisease");
    formData.delete("anyMedications");
    formData.delete("generalExamination");
    formData.delete("temperature");
    formData.delete("pulse");
    formData.delete("respRate");
    formData.delete("bloodPressure");
    formData.delete("extraOralExamination");
    formData.delete("intraOralExamination");
    formData.delete("provisionalDiagnosis");
    formData.delete("investigations");
    formData.delete("radiographsFinding");
    formData.delete("differentialDiagnosis");
    formData.delete("finalDiagnosis");
    formData.delete("treatmentPlan");
    formData.delete("preOperativeMedi");
    formData.delete("treatmentGiven");
    formData.delete("operativeNotes");
    formData.delete("intraOpsRemarks");
    formData.delete("postOpsMedic");
    formData.delete("postOpsInst");
    formData.delete("biopsyDetails");
    formData.delete("recallVisitOn");
    formData.delete("firstSurgeon");
    formData.delete("secondSurgeon");
    formData.delete("thirdSurgeon");
    formData.delete("fourthSurgeon");
    formData.delete("pgFirstYear");
    formData.delete("pgSecondYear");
    formData.delete("pgThirdYear");
    formData.delete("diagram1");
    formData.delete("diagram2");
    formData.delete("histoPic");
  };

  let formData = new FormData();
  const handleChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
    // formData.append(event.target.id, event.target.value);

    // console.log(data);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (
      name.current.value !== "" &&
      age.current.value !== "" &&
      occupation.current.value !== "" &&
      gender.current.value !== "" &&
      opd_unit.current.value !== "" &&
      address.current.value !== "" &&
      phoneNumber.current.value !== "" &&
      dob.current.value !== "" &&
      currDate.current.value !== "" &&
      admissionDate.current.value !== "" &&
      operationDate.current.value !== "" &&
      dischargeDate.current.value !== "" &&
      opdNumber.current.value !== "" &&
      chiefComplaint.current.value !== "" &&
      presentHistory.current.value !== "" &&
      pastMedicalHistory.current.value !== "" &&
      pastDentalHistory.current.value !== "" &&
      personalHistory.current.value !== "" &&
      allergyToMedicine.current.value !== "" &&
      systemicDisease.current.value !== "" &&
      anyMedications.current.value !== "" &&
      generalExamination.current.value !== "" &&
      temperature.current.value !== "" &&
      pulse.current.value !== "" &&
      respRate.current.value !== "" &&
      bloodPressure.current.value !== "" &&
      extraOralExamination.current.value !== "" &&
      intraOralExamination.current.value !== "" &&
      provisionalDiagnosis.current.value !== "" &&
      investigations.current.value !== "" &&
      radiographsFinding.current.value !== "" &&
      finalDiagnosis.current.value !== "" &&
      treatmentPlan.current.value !== "" &&
      preOperativeMedi.current.value !== "" &&
      treatmentGiven.current.value !== "" &&
      operativeNotes.current.value !== "" &&
      postOpsMedic.current.value !== "" &&
      firstSurgeon.current.value !== ""
    ) {
      formData.append("name", data.name);
      formData.append("age", data.age);
      formData.append("occupation", data.occupation);
      formData.append("gender", data.gender);
      formData.append("opd_unit", data.opd_unit);
      formData.append("address", data.address);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("dob", data.dob);
      formData.append("currDate", data.currDate);
      formData.append("admissionDate", data.admissionDate);
      formData.append("operationDate", data.operationDate);
      formData.append("dischargeDate", data.dischargeDate);
      formData.append("opdNumber", data.opdNumber);
      formData.append("chiefComplaint", data.chiefComplaint);
      formData.append("presentHistory", data.presentHistory);
      formData.append("pastMedicalHistory", data.pastMedicalHistory);
      formData.append("pastDentalHistory", data.pastDentalHistory);
      formData.append("personalHistory", data.personalHistory);
      formData.append("allergyToMedicine", data.allergyToMedicine);
      formData.append("systemicDisease", data.systemicDisease);
      formData.append("anyMedications", data.anyMedications);
      formData.append("generalExamination", data.generalExamination);
      formData.append("temperature", data.temperature);
      formData.append("pulse", data.pulse);
      formData.append("respRate", data.respRate);
      formData.append("bloodPressure", data.bloodPressure);
      formData.append("extraOralExamination", data.extraOralExamination);
      formData.append("intraOralExamination", data.intraOralExamination);
      formData.append("provisionalDiagnosis", data.provisionalDiagnosis);
      formData.append("investigations", data.investigations);
      formData.append("radiographsFinding", data.radiographsFinding);
      formData.append("differentialDiagnosis", data.differentialDiagnosis);
      formData.append("finalDiagnosis", data.finalDiagnosis);
      formData.append("treatmentPlan", data.treatmentPlan);
      formData.append("preOperativeMedi", data.preOperativeMedi);
      formData.append("treatmentGiven", data.treatmentGiven);
      formData.append("operativeNotes", data.operativeNotes);
      formData.append("intraOpsRemarks", data.intraOpsRemarks);
      formData.append("postOpsMedic", data.postOpsMedic);
      formData.append("postOpsInst", data.postOpsInst);
      formData.append("biopsyDetails", data.biopsyDetails);
      formData.append("recallVisitOn", data.recallVisitOn);
      formData.append("firstSurgeon", data.firstSurgeon);
      formData.append("secondSurgeon", data.secondSurgeon);
      formData.append("thirdSurgeon", data.thirdSurgeon);
      formData.append("fourthSurgeon", data.fourthSurgeon);
      formData.append("pgFirstYear", data.pgFirstYear);
      formData.append("pgSecondYear", data.pgSecondYear);
      formData.append("pgThirdYear", data.pgThirdYear);
      if (diagram1.current.value !== "")
        formData.append("diagram1", diagram1.current.files[0]);
      if (diagram2.current.value !== "")
        formData.append("diagram2", diagram2.current.files[0]);
      if (histoPic.current.value !== "")
        formData.append("histoPic", histoPic.current.files[0]);

      console.log("inside  submit form", formData);
      addSheetToDb(formData)
        .then((resp) => {
          console.log(resp);
          toast.success("Case Sheet Created Successfully.");
          handleReset();
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Some Error Occurred Please Try Again With Correct Details."
          );
          handleErrorReset();
        });
    } else {
      toast.warning("❌ Please fill mandatory fields!!!");
    }
  };

  return (
    <>
      {isLoggedin ? (
        <div className="row">
          <section className="caseContainer">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 mainForm">
              <form className="caseForm" encType="multipart/form-data">
                <center>
                  <h3 style={{ marginTop: "40px" }}>
                    <b>Case Sheet Form</b>
                  </h3>
                </center>
                <div className="input-box">
                  <label>FULL NAME</label>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    ref={name}
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
                      ref={age}
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
                      ref={occupation}
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="selectColumn">
                  <div className="select-box">
                    <select
                      id="gender"
                      ref={gender}
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
                      ref={opd_unit}
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
                    ref={address}
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>PHONE NUMBER</label>
                    <input
                      type="number"
                      maxlength="10"
                      placeholder="Phone number"
                      id="phoneNumber"
                      ref={phoneNumber}
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
                      ref={dob}
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
                      ref={currDate}
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <label>DATE OF ADMISSION</label>
                    <input
                      type="date"
                      id="admissionDate"
                      ref={admissionDate}
                      required
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
                      ref={operationDate}
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <label>DATE OF DISCHAEGE</label>
                    <input
                      type="date"
                      id="dischargeDate"
                      ref={dischargeDate}
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
                    ref={opdNumber}
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
                    ref={chiefComplaint}
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
                    ref={presentHistory}
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
                    ref={pastMedicalHistory}
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
                    ref={pastDentalHistory}
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
                    ref={personalHistory}
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
                    ref={allergyToMedicine}
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
                    ref={systemicDisease}
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
                    ref={anyMedications}
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
                    ref={generalExamination}
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
                      ref={temperature}
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
                      ref={pulse}
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
                      ref={respRate}
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
                      ref={bloodPressure}
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
                    ref={extraOralExamination}
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
                    ref={intraOralExamination}
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
                    ref={provisionalDiagnosis}
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
                    ref={investigations}
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
                    ref={radiographsFinding}
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
                    ref={differentialDiagnosis}
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
                    ref={finalDiagnosis}
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
                    ref={treatmentPlan}
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
                    ref={preOperativeMedi}
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
                    ref={treatmentGiven}
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
                    ref={operativeNotes}
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>DIAGRAM 1 OF PROCEDURE</label>
                    <input
                      className="form-control form-control-lg"
                      type="file"
                      id="diagram1"
                      ref={diagram1}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="diagram2">DIAGRAM 2 OF PROCEDURE</label>
                    <input
                      className="form-control form-control-lg"
                      type="file"
                      id="diagram2"
                      ref={diagram2}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label>INTRA-OPERATIVE COMPLICATIONS / REMARKS</label>
                  <input
                    type="text"
                    placeholder="INTRA-OPERATIVE COMPLICATIONS / REMARKS"
                    id="intraOpsRemarks"
                    ref={intraOpsRemarks}
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
                    ref={postOpsMedic}
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
                    ref={postOpsInst}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-box">
                  <label>BIOPSY DETAILS</label>
                  <input
                    type="text"
                    placeholder="BIOPSY DETAILS"
                    id="biopsyDetails"
                    ref={biopsyDetails}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>RECALL VISIT ON</label>
                    <input
                      type="date"
                      id="recallVisitOn"
                      ref={recallVisitOn}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="histoPic">HISTOPATHOLOGICAL PICTURE</label>
                    <input
                      className="form-control form-control-lg"
                      type="file"
                      id="histoPic"
                      ref={histoPic}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="input-box">
                    <label>1st SURGEON INCHARGE</label>
                    <input
                      type="text"
                      placeholder="1st SURGEON INCHARGE"
                      id="firstSurgeon"
                      ref={firstSurgeon}
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
                      ref={secondSurgeon}
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
                      ref={thirdSurgeon}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <label>4th SURGEON INCHARGE</label>
                    <input
                      type="text"
                      placeholder="4th SURGEON INCHARGE"
                      id="fourthSurgeon"
                      ref={fourthSurgeon}
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
                      ref={pgFirstYear}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <label>P.G. INCHARGE 2nd YEAR</label>
                    <input
                      type="text"
                      placeholder="P.G. INCHARGE 2nd YEAR"
                      id="pgSecondYear"
                      ref={pgSecondYear}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <label>P.G. INCHARGE 3rd YEAR</label>
                    <input
                      type="text"
                      placeholder="P.G. INCHARGE 3rd YEAR"
                      id="pgThirdYear"
                      ref={pgThirdYear}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="column">
                  <button type="button" onClick={(e) => submitForm(e)}>
                    Submit
                  </button>
                  <button type="button" style={{ visibility: "hidden" }}>
                    Submit
                  </button>
                  <button type="button" onClick={() => handleReset()}>
                    Reset
                  </button>
                </div>
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

export default AddCaseSheet;
