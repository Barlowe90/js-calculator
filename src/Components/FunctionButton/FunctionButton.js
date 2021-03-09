import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

export default function FunctionButton({ buttonValue, id }) {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button
      type="button"
      id={id}
      onClick={() => handleSetCalcFunction(buttonValue)}
    >
      {buttonValue}
    </button>
  );
}
