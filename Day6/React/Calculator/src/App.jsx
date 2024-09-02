import React from "react";

function App() {
  const [expression, setExpression] = React.useState("");
  const [result, setResult] = React.useState("");

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };
  const clear = () => {
    setResult("");
    setExpression((prev) => prev.slice(0, -1));
  };
  const clearAll = () => {
    setExpression("");
    setResult("");
  };
  // Function to handle the calculation
  const handleCalculate = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className=" bg-slate-300 h-screen mt-0">
      <h1
        className="
          text-4xl
          text-center
          text-white
          font-bold
          p-10
          bg-indigo-400
          shadow-md
          rounded
          mt-0
      "
      >
        Calculator In React JS
      </h1>
      <div className="App  m-auto max-w-3xl ">
        <div>
          <div className="border border-b-2 p-12 relative rounded-md shadow-sm border-gray-700">
            {/* Input field to display the expression */}
            <input
              type="text"
              value={expression}
              readOnly
              className="absolute focus:outline-none left-10 text-lg"
            />
            {/* Buttons for Clear and Clear All actions */}
            <div className="flex space-x-4 absolute bottom-4 right-4">
              <button
                onClick={clear}
                className="bg-indigo-400 text-sm text-white border rounded-full px-4 py-2"
              >
                Clear
              </button>
              <button
                onClick={clearAll}
                className="bg-indigo-400 text-sm text-white border rounded-full px-4 py-2"
              >
                Clear All
              </button>
            </div>
            {/* Displaying the result */}
            <div className="absolute top-3 right-6">
              <h1>{result}</h1>
            </div>
          </div>
        </div>
        {/* Grid layout for the calculator buttons */}
        <div className="grid grid-cols-4 gap-10 border  border-gray-700 bg-gray-300 rounded-md p-12 shadow-xl">
          {/* Mapping buttons for digits and operators */}
          {[7, 8, 9, "/"].map((value) => (
            <button
              className="border p-4 bg-white rounded-full"
              key={value}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          ))}
          {[4, 5, 6, "*"].map((value) => (
            <button
              className="border p-4 bg-white rounded-full"
              key={value}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          ))}
          {[1, 2, 3, "-"].map((value) => (
            <button
              className="border p-4 bg-white rounded-full"
              key={value}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          ))}
          {[0, ".", "=", "+"].map((value) => (
            // Special styling for the '=' button
            <button
              className={`${
                value === "=" && "border-indigo-300 border-8"
              } border p-4 bg-white rounded-full`}
              key={value}
              onClick={
                value === "=" ? handleCalculate : () => handleButtonClick(value)
              }
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
