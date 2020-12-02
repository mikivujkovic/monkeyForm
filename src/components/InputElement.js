/* 
  Generic input component to show label, input and errors
*/

import React from "react";
import "../App.css";

const InputElement = (props) => {
  // destructure props to pass to child components
  const { label, type, placeholder, value, onChange, error } = props;

  return (
    <>
      <div className="inputBackground">
        <div className="inputRow">
          <label className="inputLabel">{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="inputStyle"
          ></input>
        </div>
        <p className="inputError">{error}</p>
      </div>
    </>
  );
};

export default InputElement;
