import React, { useState } from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState("0");
  const [numberStored, setNumberStored] = useState("");

  const handleSetDisplayValue = (num) => {
    if (!number.includes(".") || num !== ".") {
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }
  };

  const handleStoredValue = () => {
    setNumberStored(number);
    setNumber("");
  };

  const handleClearValue = () => {
    setNumber("0");
    setNumberStored("");
  };

  const handleBackButton = () => {
    if (number !== "") {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  return (
    <NumberContext.Provider
      value={{
        handleSetDisplayValue,
        handleStoredValue,
        handleClearValue,
        handleBackButton,
        number,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
