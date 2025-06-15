import { useState, useCallback, useEffect, useRef } from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+|\"':?/><.,";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numAllowed, charAllowed, PasswordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-5">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
            <div>
              <div className="flex items-center mt-1 ml-2">
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumAllowed((prev) => !prev);
                  }}
                />
              </div>
            </div>
            <label>Numbes</label>
            <div>
              <div className="flex items-center mt-1 ml-2">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="charInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
              </div>
            </div>
            <label>Charaters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
