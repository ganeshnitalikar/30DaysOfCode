import React, { useState } from "react";
import Input from "./components/Input";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const [name, setname] = useState("");
  const [rollNumber, setRollNumber] = useState();
  const [mobile, setMobile] = useState();
  const [score, setScore] = useState();
  const [email, setEmail] = useState("");
  const [sumbitted, setSubmitted] = useState(false);

  // const [formData , setFormData] = useState({
  //   name: "",
  //   rollNumber: "",
  //   mobile: "",
  //   score: "",
  //   email: "",
  // });

  const submitDetails = () => {
    //saving to database logic here
    window.alert("Details Submitted Successfully");
    setSubmitted(false);
    document.getElementById("form").reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      rollNumber === "" ||
      mobile === "" ||
      score === "" ||
      email === ""
    ) {
      alert("All fields are required");
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="form h-screen flex flex-col justify-center p-5 bg-indigo-500">
      <div className="mb-5 text-center text-4xl font-semibold text-black-800">
        Student Registration
      </div>
      <div className="wrapper p-9 bg-white w-full justify-center flex flex-col rounded-2xl">
        <form action="" id="form">
          <Input
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            title={"Name"}
            placeholder={"Enter Student Name"}
          ></Input>
          <Input
            value={rollNumber}
            onChange={(e) => {
              setRollNumber(e.target.value);
            }}
            title={"Roll Number"}
            placeholder={"Enter Roll Number"}
            type={"number"}
          ></Input>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            title={"Email"}
            placeholder={"Enter Email"}
            type={"email"}
          ></Input>

          <Input
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            title={"Mobile Number"}
            placeholder={"Enter Mobile Number"}
            type={"tel"}
          ></Input>
          <Input
            value={score}
            onChange={(e) => {
              setScore(e.target.value);
            }}
            title={"Score"}
            placeholder={"Enter Score"}
            type={"number"}
          ></Input>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleSubmit}
              className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
        <div className={sumbitted ? "block" : "hidden"}>
          {name}
          <br />
          {rollNumber}
          <br />
          {email}
          <br />
          {mobile}
          <br />
          {score}
          <br />
          <button
            onClick={submitDetails}
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
