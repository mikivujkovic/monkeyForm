import React from "react";

const InputElement = (props) => {
  const { label, type, placeholder, value, onChange, error } = props;

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
      <p>{error}</p>
    </>
  );
};

export default InputElement;
