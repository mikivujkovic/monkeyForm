/* 
  Generic input component to show label, input and errors
*/

import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const InputElement = (props) => {
  // destructure props to pass to child components
  const { label, type, placeholder, value, onChange, error } = props;

  return (
    <>
      <div className="inputBackground">
        <div className="inputRow">
          <label className="inputLabel" htmlFor="formInput">
            {label}
          </label>
          <input
            id="formInput"
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

InputElement.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default InputElement;
