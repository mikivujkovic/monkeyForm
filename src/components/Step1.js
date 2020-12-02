/*
  First step handling firstname and lastname 
*/

import React, { useContext, useState } from "react";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";
import InputElement from "./InputElement";
// import validation helpers
import {
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateLetters,
  validateMulti,
} from "../utils/validation";
// import loading spinner
import Loader from "react-loader-spinner";

const Step1 = (props) => {
  // show the spinner and move to the next step
  const submitStep = () => {
    return new Promise(function (resolve, reject) {
      // show the spinner
      setSpinnerLoading(true);
      // wait two seconds
      setTimeout(resolve, 2000);
    }).then(function () {
      // remove spinner
      setSpinnerLoading(false);
      // move to the next step by calling function passed from the parent control
      props.forward();
    });
  };

  // handle button for moving to next step
  const forwardStep = (e) => {
    // prevent default form submission
    e.preventDefault();
    // check firstname validity and show error if necessary
    const isFirstNameValid = validateFirstName(props.state.firstname);
    !isFirstNameValid && setFirstnameError(strings.firstNameError[language]);
    // check lastname validity and show error if necessary
    const isLastNameValid = validateLastName(props.state.lastname);
    !isLastNameValid && setLastnameError(strings.lastNameError[language]);

    // if both fields are valid call submission function to move to the next step
    isFirstNameValid && isLastNameValid && submitStep();
  };

  // Validate fiels

  // validate firstname value
  const validateFirstName = (value) => {
    // validator functions for firstname field
    const validators = [
      validateRequired(value), // check for required field
      validateMinLength(value, 2), // check min length
      validateMaxLength(value, 25), // check max length
    ];
    const isValid = validateMulti(validators); // check if all validators return true
    return isValid;
  };

  // validate lastname value
  const validateLastName = (value) => {
    // validators for lastname
    const validators = [
      validateLetters(value), // check if only letters are used
      validateMinLength(value, 2), // check min length
      validateMaxLength(value, 25), // check max length
    ];
    const isValid = validateMulti(validators); // check if all validators return true
    return isValid;
  };

  // onChange handler functions

  // firstname input change handler
  const onFirstNameChange = (e) => {
    // send event to parent component to change form state for firstname
    props.handleChange("firstname")(e);
    // check if firstname value is valid
    const isFirstNameValid = validateFirstName(e.target.value);
    // if not valid set error message
    !isFirstNameValid && setFirstnameError(strings.firstNameError[language]);
    // if valid clear error message
    isFirstNameValid && setFirstnameError("");
  };

  // lastname inpit change handler
  const onLastNameChange = (e) => {
    // send event to parent component to change form state for lastname
    props.handleChange("lastname")(e);
    // check if lastname value is valid
    const isLastNameValid = validateLastName(e.target.value);
    // if not valid set error message
    !isLastNameValid && setLastnameError(strings.lastNameError[language]);
    // if valid clear error message
    isLastNameValid && setLastnameError("");
  };

  // State hooks

  // get language from Context
  const [language] = useContext(LanguageContext);

  // state hooks for error messages
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  // state hook to show the spinner
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  // show spinner or form control
  if (spinnerLoading) {
    return (
      <Loader
        type="Grids"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinnerLoading}
      />
    );
  } else {
    return (
      <>
        <div>{strings.firstStep[language]}</div>
        <form noValidate className="formStyle">
          <InputElement
            type="text"
            placeholder={strings.firstname[language]}
            value={props.state.firstname}
            onChange={onFirstNameChange}
            label={strings.firstname[language]}
            error={firstnameError && strings.firstNameError[language]}
            disabled1={firstnameError}
            disabled2={!firstnameError}
          />
          <br />
          <hr className="hr" />
          <InputElement
            type="text"
            placeholder={strings.lastname[language]}
            value={props.state.lastname}
            onChange={onLastNameChange}
            label={strings.lastname[language]}
            error={lastnameError && strings.lastNameError[language]}
            disabled1={lastnameError}
            disabled2={!lastnameError}
          />
          <br />
          <hr className="hr" />
          <button onClick={forwardStep}>{strings.next[language]}</button>
        </form>
      </>
    );
  }
};

export default Step1;
