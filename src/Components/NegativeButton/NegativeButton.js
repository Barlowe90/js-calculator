import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

export default function NegativeButton() {
  const { handleToggleNegative } = useContext(NumberContext);

  return (
    <button type="button" onClick={() => handleToggleNegative()}>
      -/+
    </button>
  );
}
