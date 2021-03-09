import { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

export default function BackButton() {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleBackButton()}>
      &#8592;
    </button>
  );
}
