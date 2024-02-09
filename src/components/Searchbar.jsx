import React, { useState } from "react";

export default function Searchbox({ options }) {
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  function doesMatchedWithInput(option) {
    return option.toLowerCase().includes(input.toLowerCase());
  }

  function handleInputChange(e) {
    setInput(e.target.value);
    setShowDropdown(true);
  }

  function handleCurrencySelect(option) {
    setInput(option);
    setShowDropdown(false);
  }

  return (
    <div className="text-black space-y-1 relative">
      <input
        type="text"
        placeholder="From"
        spellCheck={false}
        className="rounded px-2 py-1 outline-none"
        value={input}
        onChange={handleInputChange}
      />

      {showDropdown && (
        <ul className="bg-white rounded w-full absolute">
          {options.map((option) => {
            if (!doesMatchedWithInput(option)) return null;
            return (
              <li key={option}>
                <button
                  className="w-full bg-white rounded text-left px-2 py-1 hover:bg-blue-300 hover:text-white"
                  onClick={() => handleCurrencySelect(option)}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
