import React from "react";
import { useState } from "react";
import OTPInput from "./OTPInput";

function PhoneLogin() {
  const [phone, setPhone] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(false);
  const handlePhoneNumber = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    if(phone.length !== 10 || !regex.test(phone)){
      alert("Please enter a valid phone number")
    }
    else{
      setShowOtpSection(true);
    }

  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <div className="h-52 bg-yellow-200 rounded-2xl p-4 flex justify-center items-center">

      { !showOtpSection ?
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex 
        justify-center flex-col"
      >
        <label htmlFor="" className="text-lg">
          Mobile Number
        </label>
        <input
          className="rounded-md focus:border-l-indigo-500 p-2"
          type="tel"
          name=""
          id=""
          value={phone}
          onChange={handlePhoneNumber}
          placeholder="Enter Phone Number"
        />
        <button className="mt-2 p-2 rounded-2xl focus:border-indigo-500 bg-red-400 max-w-fit justify-center">
          Get OTP
        </button>
      </form> : <OTPInput onOtpSubmit={onOtpSubmit} mobileNumber={phone}></OTPInput>
}
    </div>
  );
}

export default PhoneLogin;
