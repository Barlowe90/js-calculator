import React from "react";
import NumberButton from "../NumberButton";
import FunctionButton from "../FunctionButton";
import ClearButton from "../ClearButton";
import Display from "../Display";
import EqualButton from "../EqualButton";
import BackButton from "../BackButton";
import NegativeButton from "../NegativeButton";
import { CalculatorStyles } from "../../Styles/Styles";

export default function Calculator() {
  return (
    <CalculatorStyles>
      <div className="display">
        <h1>JS Calculator - React hooks</h1>
        <div id="display" className="text-center">
          <h2>
            <Display />
          </h2>
        </div>
      </div>
      <div className="number-pad">
        <ClearButton />
        <BackButton />
        <NegativeButton />
        <FunctionButton buttonValue="/" id="divide" />
        <NumberButton buttonValue={7} id="seven" />
        <NumberButton buttonValue={8} id="eight" />
        <NumberButton buttonValue={9} id="nine" />
        <FunctionButton buttonValue="*" id="multiply" />
        <NumberButton buttonValue={4} id="four" />
        <NumberButton buttonValue={5} id="five" />
        <NumberButton buttonValue={6} id="six" />
        <FunctionButton buttonValue="-" id="subtract" />
        <NumberButton buttonValue={1} id="one" />
        <NumberButton buttonValue={2} id="two" />
        <NumberButton buttonValue={3} id="three" />
        <FunctionButton buttonValue="+" id="add" />
        <div className="zero-button">
          <NumberButton buttonValue={0} id="zero" />
        </div>
        <NumberButton buttonValue="." id="decimal" />
        <EqualButton />
      </div>
    </CalculatorStyles>
  );
}
