import React from "react";
import { Calculator } from "./Components";
import NumberProvider from "./Components/NumberProvider";

function App() {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
