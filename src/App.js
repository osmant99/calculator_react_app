import React, { useState } from "react";
import CalculatorUi from "./CalculatorUi";

function App() {
  const [screen, setscreen] = useState("");
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [operators, setoperators] = useState("");

  /* Calculation function */

  const calculation = () => {
    let result;
    if (num1 === "" && operators === "" && num2 === "") {
      alert(
        "Please initiate a calculation using numbers and mathematical operators"
      );
    } else {
      switch (operators) {
        case "+":
          result = Number(num1) + Number(num2);
          break;
        case "-":
          result = Number(num1) - Number(num2);
          break;
        case "*":
          result = Number(num1) * Number(num2);
          break;
        case "/":
          if (num2 === "0") {
            alert("cannot divided by 0");
            setnum1("");
            setnum2("");
            setoperators("");
            break;
          } else {
            result = Number(num1) / Number(num2);
          }
          break;
        default:
          break;
      }
    }
    setnum1(result);
    setscreen(result);
    setnum2("");
    setoperators("");
  };

  /* operators function */

  const optStore = (opt) => {
    if (num1 === "" && num2 === "") {
      alert("Please provide num1 first.");
    } else if (num1 !== "" && num2 === "") {
      setoperators(opt);
    } else if (operators) {
      setoperators("");
      setoperators(opt);
    }
    setscreen(opt);
  };

  /* data store function */

  const dataStore = (buttons) => {
    if (operators === "" && num2 === "") {
      setnum1(num1.concat(buttons));
      setscreen(num1.concat(buttons));
    } else if (operators !== "" && num1 !== "") {
      setnum2(num2.concat(buttons));
      setscreen(num2.concat(buttons));
    } else if (operators !== "" && num2 === "") {
      setnum1(num1.concat(buttons));
      setscreen(num1.concat(buttons));
    }
  };

  /* reset function */

  const reset = () => {
    setscreen("");
    setnum1("");
    setnum2("");
  };

  /* backspace function */

  const backSpace = () => {
    if (operators === "") {
      setnum1(num1.slice(0, -1));
      setscreen(num1.slice(0, -1));
    } else if (operators !== "") {
      setnum2(num2.slice(0, -1));

      setscreen(num2.slice(0, -1));
    }
  };

  return (
    <>
      <CalculatorUi
        screen={screen}
        dataStore={dataStore}
        optStore={optStore}
        calculation={calculation}
        reset={reset}
        backSpace={backSpace}
        num1={num1}
        num2={num2}
      />
    </>
  );
}

export default App;
