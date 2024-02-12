import React, { useState } from "react";

function FilteredInputs({ input, option, onClick }) {
  function doesMatchedWithInput(option) {
    return option.toLowerCase().includes(input.toLowerCase());
  }

  if (!doesMatchedWithInput(option)) return null;

  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded text-left px-2 py-1 hover:bg-blue-300 hover:text-white"
    >
      {option}
    </button>
  );
}

export default function Searchbox({ options }) {
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  function handleInputChange(e) {
    setInput(e.target.value);
    showDropdown || setShowDropdown(true);
  }

  function handleSelect(option) {
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

      <dialog open={showDropdown} className="bg-white rounded w-full absolute">
        {options.map((option) => (
          <FilteredInputs
            key={option}
            option={option}
            input={input}
            onClick={() => handleSelect(option)}
          />
        ))}
      </dialog>
    </div>
  );
}
