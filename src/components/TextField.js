import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setText, calcText } from "../actions/index";
import CalcButton from "./CalcButton";

function TextField() {
  // get state as a functional component
  const text = useSelector((state) => state.calcText);
  const dispatch = useDispatch();

  const enterData = (value) => {
    var added = value.slice(value.length - 1, 1);
    let re = /[^0-9\+\-\*\\]/;
    if (!re.test(added)) {
      // update state if the value is a number
      dispatch(setText(value));
    } else {
    }
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(calcText());
  };

  return (
    <form className="" onSubmit={(e) => submit(e)}>
      <input
        className="form-control "
        value={text}
        onChange={(e) => enterData(e.target.value)}
      />
    </form>
  );
}

export default TextField;
