import React, { useContext } from "react";
import { DisplayStyles } from "../../Styles/Styles";
import { NumberContext } from "../NumberProvider/NumberProvider";

export default function Display() {
  const { number } = useContext(NumberContext);
  return (
    <DisplayStyles>
      <div id="display">
        <h2>{number}</h2>
      </div>
    </DisplayStyles>
  );
}
