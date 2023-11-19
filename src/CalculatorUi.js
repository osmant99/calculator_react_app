import React from "react";

export default function CalculatorUi(props) {
  return (
    <>
      <div className="wrapper">
        <input
          type="text"
          className="calc_screen"
          readOnly=""
          value={props.screen}
          placeholder="0"
        />
        <div className="keys">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.reset()}
          >
            C
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.backSpace("backspace")}
          >
            ←
          </button>
          <button type="button" className="btn btn-info" disabled>
            %
          </button>
          <button
            type="button"
            className="btn btn-info"
            disabled={props.num1 === ""}
            onClick={() => props.optStore("/")}
          >
            ÷
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("7")}
          >
            7
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("8")}
          >
            8
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("9")}
          >
            9
          </button>
          <button
            type="button"
            className="btn btn-info"
            disabled={props.num1 === ""}
            onClick={() => props.optStore("*")}
          >
            *
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("4")}
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("5")}
          >
            5
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("6")}
          >
            6
          </button>
          <button
            type="button"
            className="btn btn-info"
            disabled={props.num1 === ""}
            onClick={() => props.optStore("-")}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("1")}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("2")}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("3")}
          >
            3
          </button>
          <button
            type="button"
            className="btn btn-info"
            disabled={props.num1 === ""}
            onClick={() => props.optStore("+")}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => props.dataStore("0")}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.dataStore(".")}
          >
            .
          </button>
          <button
            type="button"
            className="btn btn-warning equal_sign"
            disabled={props.num1 === "" && props.num2 === ""}
            onClick={() => props.calculation()}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
