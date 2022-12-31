import { Button, checkboxClasses } from "@mui/material";
import React, { useState } from "react";
// import { FcReadingEbook } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";

export default function Main() {
  const [submit, setSubmit] = useState(false);
  // const errors1 = { errors };
  const [per, setPer] = useState(false);
  const [save, setSave] = useState({
    fname: "",
    mname: "",
    lname: "",
    address: "",
    mail: "",
    mobile: "",
    account: "",
    micr: "",
    ifsc: "",
    branch: "",
  });
  const [errors, setErrors] = useState({
    fname: "",
    mname: "",
    lname: "",
    address: "",
    mail: "",
    mobile: "",
    account: "",
    micr: "",
    ifsc: "",
    branch: "",
  });
  const validate = (values) => {
    const errors = {};
    if (!values.fname) {
      errors.fname = "first name please...";
      setPer(true);
      setErrors(errors.fname);
    }
    if (!values.mname) {
      errors.mname = "middlename please...";
      setPer(true);

      setErrors(errors.mname);
    }
    if (!values.lname) {
      errors.lname = "lastname please...";
      setPer(true);
      setErrors(errors.lname);
    }
    if (!values.mail) {
      errors.mail = "email please...";
      setErrors(errors.mail);
    }
    if (!values.mobile) {
      errors.mobile = "number please...";
      setErrors(errors.mobile);
    }
    if (!values.account) {
      errors.account = "Account no. please...";
      setErrors(errors.account);
    }
    if (!values.ifsc) {
      errors.ifsc = "IFSC code please...";
      setErrors(errors.ifsc);
    }
    if (!values.micr) {
      errors.micr = "micr code please...";
      setErrors(errors.micr);
    }
    if (!values.branch) {
      errors.branch = "branch please...";
      setErrors(errors.fname);
    }
    if (!values.address) {
      errors.address = "address please...";
      setErrors(errors.address);
    }
    return errors;
  };
  const check = (e) => {
    e.preventDefault();
    // setSubmit(true);
    setErrors(validate(save));
    const {
      fname,
      mname,
      lname,
      address,
      mail,
      mobile,
      account,
      micr,
      ifsc,
      branch,
    } = save;
    if (
      fname !== null &&
      mname !== null &&
      lname !== null &&
      address !== null &&
      mail !== null &&
      mobile !== null &&
      ifsc !== null &&
      micr !== null &&
      branch !== null &&
      account !== null
    ) {
      window.confirm("Proper details required.");
    } else {
      window.confirm("Success");
      // navi('/page');
    }
  };

  return (
    <div>
      Main page
      <div className="account">
        body
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "black",
              marginLeft: "20px",
              height: "60px",
              width: "60px",
              borderRadius: "20px",
            }}
          >
            <FcReadingEbook
              style={{ height: "60px", width: "60px" }}
            ></FcReadingEbook>
          </div>
          <b style={{ display: "flex" }}>
            {" "}
            <div className="head">TAICO</div>
            <div className="head1">Bank</div>
            <div className="head1">Private</div>
            <div className="head1">Corporation</div>
            <div className="head1">Ltd.</div>
          </b>
        </div>
        <input
          className={errors.fname ? "red" : "input"}
          type="text"
          value={save.fname}
          placeholder={`${errors.fname}` ? `${errors.fname}` : "First Name"}
          onChange={(e) => setSave({ ...save, fname: e.target.value })}
        ></input>
        {/* {errors.fname} */}
        <input
          className={errors.mname ? "red" : "input1"}
          type="text"
          placeholder={`${errors.mname}` ? `${errors.mname}` : "Mid Name"}
          value={save.mname}
          onChange={(e) => setSave({ ...save, mname: e.target.value })}
        ></input>
        <input
          className={errors.lname ? "red" : "input2"}
          type="text"
          value={save.lname}
          placeholder={`${errors.lname}` ? `${errors.lname}` : "Last Name"}
          onChange={(e) => setSave({ ...save, lname: e.target.value })}
        ></input>
        <div>
          <input
            className={errors.address ? "red" : "input3"}
            type="text"
            placeholder={`${errors.address}` ? `${errors.address}` : "Address"}
            value={save.address}
            onChange={(e) => setSave({ ...save, address: e.target.value })}
          ></input>
          <input
            className={errors.mail ? "red" : "input4"}
            type="email"
            placeholder={
              `${errors.mail}` ? `${errors.mail}` : "E-mail   .@gmail"
            }
            value={save.mail}
            onChange={(e) => setSave({ ...save, mail: e.target.value })}
          ></input>
          <div>
            <input
              className={errors.mobile ? "red" : "input5"}
              type="number"
              placeholder={`${errors.mobile}` ? `${errors.mobile}` : "Mobile"}
              value={save.mobile}
              onChange={(e) => setSave({ ...save, mobile: e.target.value })}
            ></input>
          </div>
          <div>
            <div className="bankdet">
              <b>Bank Details</b>
            </div>
            <input
              className={errors.account ? "red" : "input6"}
              type="text"
              placeholder={
                `${errors.account}` ? `${errors.account}` : "Account number"
              }
              value={save.account}
              onChange={(e) => setSave({ ...save, account: e.target.value })}
            ></input>
            <input
              className={errors.micr ? "red" : "input7"}
              type="text"
              placeholder={`${errors.micr}` ? `${errors.micr}` : "MICR code"}
              value={save.micr}
              onChange={(e) => setSave({ ...save, micr: e.target.value })}
            ></input>
            <input
              className={errors.ifsc ? "red" : "input8"}
              type="text"
              placeholder={`${errors.ifsc}` ? `${errors.ifsc}` : "IFSC code"}
              value={save.ifsc}
              onChange={(e) => setSave({ ...save, ifsc: e.target.value })}
            ></input>
            <input
              className={errors.branch ? "red2" : "input9"}
              type="text"
              placeholder={`${errors.branch}` ? `${errors.branch}` : "Branch"}
              value={save.branch}
              onChange={(e) => setSave({ ...save, branch: e.target.value })}
            ></input>
          </div>
          {per == true ? `${errors.account}` : "no"}
          <div
            style={{
              marginLeft: "300px",
              height: "40px",
              width: "80px",
              borderRadius: "8px",
              marginTop: "20px",
              backgroundColor: "white",
            }}
          >
            <Button
              style={{ marginLeft: "7px", padding: "3px", marginTop: "5px" }}
              onClick={check}
            >
              <b>Save</b>
            </Button>
            hi
          </div>
          hello
        </div>
      </div>
    </div>
  );
}
