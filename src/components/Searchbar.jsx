import React, { useState } from "react";
import { useRef } from "react";

export default function Searchbox({
  currencies = ["INR", "USD", "EUR", "YEN"],
}) {
  const [input, setInput] = useState("");
  const dropdown = useRef(null);

  const doesMatchedWithInput = (currency) => {
    return currency.toLowerCase().includes(input.toLowerCase());
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    dropdown.current.show();
  };

  const handleCurrencySelect = (currency) => {
    setInput(currency);
    dropdown.current.close();
  };

  return (
    <div className="text-black space-y-1 relative">
      <input
        type="text"
        placeholder="From"
        className="rounded px-2 py-1 outline-none"
        value={input}
        onChange={handleInputChange}
      />

      <dialog ref={dropdown} className="bg-white rounded w-full">
        {/*
          <button
            key={currency}
            className="w-full text-left px-2 py-1"
            onClick={() => handleCurrencySelect(currency)}
          >
            {currency}
          </button>
            */}

        {currencies.map((currency) => {
          if (!doesMatchedWithInput(currency)) return null;
          return (
            <button
              key={currency}
              className="w-full text-left px-2 py-1"
              onClick={() => handleCurrencySelect(currency)}
            >
              {currency}
            </button>
          );
        })}
      </dialog>
    </div>
  );
}
