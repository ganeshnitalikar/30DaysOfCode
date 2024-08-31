import React from "react";
import PhoneLogin from "./PhoneLogin";

function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-blue-300">
      <div className="title">
        <h1 className=" font-sans text-lg">Login With Mobile Number</h1>
      </div>
      <PhoneLogin></PhoneLogin>
    </div>
  );
}

export default App;
