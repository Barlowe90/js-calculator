import React, { useContext } from "react";
import { DisplayStyles } from "../../Styles/Styles";
import { NumberContext } from "../NumberProvider/NumberProvider";

export default function Display() {
  const { number, numberStored } = useContext(NumberContext);
  return (
    <DisplayStyles>
      <div id="display">
        <h2
          className={
            numberStored && numberStored.length > 12
              ? "long-main-display"
              : undefined
          }
        >
          {!number.length && !numberStored ? "0" : number || numberStored}
        </h2>
      </div>
    </DisplayStyles>
  );
}
