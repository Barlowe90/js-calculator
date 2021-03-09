import React, { useState } from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState("");

  const handleSetDisplayValue = (num) => {
    if (!number.includes(".") || num !== ".") {
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }
  };

  return (
    <NumberContext.Provider value={{ handleSetDisplayValue, number }}>
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
