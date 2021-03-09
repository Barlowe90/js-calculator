import { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

export default function ClearButton() {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="white-button"
      id="clear"
      onClick={() => handleClearValue()}
    >
      C
    </button>
  );
}
