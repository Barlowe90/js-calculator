import { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

export default function NumberButton({ buttonValue, id }) {
  const { handleSetDisplayValue } = useContext(NumberContext);

  return (
    <button
      type="button"
      id={id}
      onClick={() => handleSetDisplayValue(buttonValue)}
    >
      {buttonValue}
    </button>
  );
}
