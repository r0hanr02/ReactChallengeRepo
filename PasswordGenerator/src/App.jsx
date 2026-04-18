import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "123567890";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordtoClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };
  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl text-white text-center mb-6 font-bold">
          Password Generator
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full flex items-center">
            <input
              type="text"
              className="flex-grow bg-white rounded-lg outline-none px-3 py-2 text-sm"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button
              className="ml-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition"
              onClick={copyPasswordtoClipboard}
            >
              Copy
            </button>
          </div>

          <div className="w-full text-white flex flex-col space-y-3">
            <div className="flex items-center gap-4">
              <input
                type="range"
                value={length}
                min={10}
                max={100}
                onChange={(e) => setLength(e.target.value)}
                className="w-full"
              />
              <label className="whitespace-nowrap">Length: {length}</label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
              />
              <label>Number Allowed</label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(!charAllowed)}
              />
              <label>Character Allowed</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
