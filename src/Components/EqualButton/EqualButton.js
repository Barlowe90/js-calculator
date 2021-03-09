import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

export default function EqualButton() {
  const { doMath } = useContext(NumberContext);
  return (
    <button type="button" id="equals" onClick={() => doMath()}>
      =
    </button>
  );
}
