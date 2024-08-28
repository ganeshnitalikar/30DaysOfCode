import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);

  const  passwordRef = useRef(null);
  const generatePassword = useCallback ( () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+";
    let allCharacters = characters;
    if (includeCharacters) {
      allCharacters += specialCharacters;
    }
    if (includeNumbers) {
      allCharacters += numbers;
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
    setPassword(password);
  }, [length, includeCharacters, includeNumbers, setPassword]);

 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);


  useEffect(() => {
    generatePassword();
  }, [length, includeCharacters, includeNumbers, setPassword]);


  return (
    <>
      <div className="bg-purple-700 border-solid min-h-screen flex justify-center items-center">
        <div className="h-80 bg-blue-300 w-screen m-20 rounded-3xl flex justify-center items-center flex-col">
          <div className="flex m-4">
            <input
              className="h-10 w-full  p-5 rounded-lg mr-10"
              type="text"
              placeholder="Password"
              name="text"
              value={password}
              id="textInput"
              ref={passwordRef}
              readOnly
            />
            <button
              type="button"
             onClick={copyPasswordToClipboard}
              className="bg-blue-600 p-2 rounded-xl "
            >
              Copy
            </button>
          </div>
          <div className=" flex justify-around items-center w-full ">
            <div className="bg-blue-400 p-4 rounded-3xl  flex justify-center items-center flex-col m-5 ">
              <label className="font-extrabold font-sans size-30" htmlFor="length">Length</label>
              <input
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                min={0}
                max={100}
                type="range"
                name="Length"
                id="lengthInput"
                value={length}
              />
              <label className="font-extrabold font-sans size-30" htmlFor="length">{length}</label>
            </div>
            <div className="bg-blue-400 p-4 rounded-3xl flex justify-center items-center flex-col m-5">
              <input
                onChange={(e) => {
                  setIncludeCharacters(e.target.checked);
                }}
                type="checkbox"
                name="Character Allowed"
                id="charAllowed"
              />
              <label className="font-extrabold font-sans size-30" htmlFor="charAllowed">Include Characters</label>
            </div>
            <div className="bg-blue-400 p-4 rounded-3xl  flex justify-center items-center flex-col m-5">
              <input
                onChange={(e) => {
                  setIncludeNumbers(e.target.checked);
                }}
                type="checkbox"
                name="Character Allowed"
                id="charAllowed"
              />
              <label className="font-extrabold font-sans size-30" htmlFor="charAllowed">Include Numbers</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
