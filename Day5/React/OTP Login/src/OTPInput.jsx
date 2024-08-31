import React, { useCallback } from "react";
import { useRef, useState, useEffect } from "react";

function OTPInput({ mobileNumber = "", length = 4, onOTPSubmit = () => {} }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [showButton, setShowButton] = useState(false);

  const inputRefs = useRef([]);
  const handleSubmission = () =>{
    alert("Login Successful");
    
  };
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      setShowButton(true);
      onOTPSubmit(combinedOtp);
    }
    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 4);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      setShowButton(false);
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-lg">Enter OTP sent to {mobileNumber}</h1>
      <div className="flex flex-row">
        {otp.map((value, index) => {
          return (
            <>
              <input
                key={index}
                type="text"
                ref={(input) => (inputRefs.current[index] = input)}
                value={value}
                onChange={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="m-2 p-2 w-12 text-center border-2 border-gray-400 rounded-md"
              />
            </>
          );
        })}
      </div>
      {showButton && (
        <button className="bg-blue-400 p-2 rounded-md"
        onClick={
            () => handleSubmission()
        }
        
        >Submit</button>
      )}
    </div>
  );
}

export default OTPInput;
