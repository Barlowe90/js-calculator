import React, { useState } from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState("0");
  const [numberStored, setNumberStored] = useState("");
  const [functionType, setFunctionType] = useState("");

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

  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleStoredValue();
    }
    if (numberStored) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (numberStored > 0) {
      setNumberStored(`-${numberStored}`);
    } else {
      const positiveNumber = numberStored.slice(1);
      setNumberStored(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && numberStored) {
      switch (functionType) {
        case "+":
          setNumberStored(
            `${
              Math.round(
                `${(parseFloat(numberStored) + parseFloat(number)) * 100}`
              ) / 100
            }`
          );
          break;
        case "-":
          setNumberStored(
            `${
              Math.round(
                `${(parseFloat(numberStored) - parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "/":
          setNumberStored(
            `${
              Math.round(
                `${(parseFloat(numberStored) / parseFloat(number)) * 10000}`
              ) / 10000
            }`
          );
          break;
        case "*":
          setNumberStored(
            `${
              Math.round(
                `${parseFloat(numberStored) * parseFloat(number) * 1000}`
              ) / 1000
            }`
          );
          break;
        default:
          break;
      }
      setNumber("");
    }
  };

  return (
    <NumberContext.Provider
      value={{
        functionType,
        handleSetDisplayValue,
        handleStoredValue,
        handleClearValue,
        handleBackButton,
        handleSetCalcFunction,
        handleToggleNegative,
        doMath,
        number,
        numberStored,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
