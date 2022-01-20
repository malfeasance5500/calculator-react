import React from "react";
import { useDispatch } from "react-redux";
import { addText, delText, clearText, calcText } from "../actions/index";
import CalcButton from "./CalcButton";

function Keypad() {
  const dispatch = useDispatch();

  const enterData = (val) => {
    dispatch(addText(val));
  };

  const clearData = () => dispatch(clearText());
  const delData = () => dispatch(delText());
  const calculate = () => dispatch(calcText());

  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(5,1fr)` }}>
      <CalcButton onClick={() => enterData(7)} value={7} />
      <CalcButton onClick={() => enterData(8)} value={8} />
      <CalcButton onClick={() => enterData(9)} value={9} />
      <CalcButton onClick={() => delData()} value={"del"} />
      <CalcButton onClick={() => clearData()} value={"C"} />
      <CalcButton onClick={() => enterData(4)} value={4} />
      <CalcButton onClick={() => enterData(5)} value={5} />
      <CalcButton onClick={() => enterData(6)} value={6} />
      <CalcButton onClick={() => enterData("*")} value={"*"} />
      <CalcButton onClick={() => enterData("/")} value={"/"} />
      <CalcButton onClick={() => enterData(1)} value={1} />
      <CalcButton onClick={() => enterData(2)} value={2} />
      <CalcButton onClick={() => enterData(3)} value={3} />
      <CalcButton onClick={() => enterData("+")} value={"+"} />
      <CalcButton onClick={() => enterData("-")} value={"-"} />
      <div></div>
      <CalcButton onClick={() => enterData(0)} value={0} />
      <CalcButton onClick={() => enterData(".")} value={"."} />
      <CalcButton onClick={() => calculate()} value={"="} />
    </div>
  );
}

export default Keypad;


