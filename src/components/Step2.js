/*
  Second step handling username, email, password and confirm password
*/

import React, { useContext, useState } from "react";
import InputElement from "./InputElement";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";
// import validation heleper functions
import {
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateEqual,
  validateEmail,
  validatePattern,
  validateMulti,
} from "../utils/validation";
import "../App.css";
// import loading spinner
import Loader from "react-loader-spinner";

const Step2 = (props) => {
  // show the spinner and move to the next step
  const submitStep = () => {
    return new Promise(function (resolve, reject) {
      // show the spinner
      setSpinnerLoading(true);
      // wait for 2 seconds
      setTimeout(resolve, 2000);
    }).then(function () {
      // remove the spinner
      setSpinnerLoading(false);
      // move to the next step
      props.forward();
    });
  };

  // handle button for moving to next step
  const forwardStep = (e) => {
    // prevent default form submission
    e.preventDefault();
    // check username validity and show error if necessary
    const isUsernameValid = validateUsername(props.state.username);
    !isUsernameValid && setUsernameError(strings.usernameError[language]);
    // check email validity and show error if necessary
    const isEmailValid = validateEmailField(props.state.email);
    !isEmailValid && setEmailError(strings.emailError[language]);
    // check password validity and show error if necessary
    const isPasswordValid = validatePassword(props.state.password);
    !isPasswordValid && setPasswordError(strings.passwordError[language]);
    // check confirmPassword validity and show error if necessary
    const isConfirmPasswordValid = validateConfirmPassword(
      props.state.confirmPassword
    );
    !isConfirmPasswordValid &&
      setConfirmPasswordError(strings.confirmPasswordError[language]);
    // check if terms and conditions are accepted and show error if necessary
    !terms && setTermsError(strings.termsError[language]);

    // if all fields  are valid call submission function to move to the next step
    isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      terms &&
      submitStep();
  };

  // call parent function to move back one step
  const backStep = () => {
    props.back();
  };

  // Validate fields

  // validate username value
  const validateUsername = (value) => {
    // validators for username
    const validators = [
      validateRequired(value), // check for required
      validateMinLength(value, 4), // check min legth
      validateMaxLength(value, 20), // check max legth
    ];

    const isValid = validateMulti(validators); // check if all validators return true
    return isValid;
  };

  // validate email value
  const validateEmailField = (value) => {
    // validators for email
    const validators = [
      validateRequired(value), // check required
      validateEmail(value), // check if valid email string
    ];
    const isValid = validateMulti(validators); // check if all validators return true
    return isValid;
  };

  // validate password value
  const validatePassword = (value) => {
    // regex pattern for password
    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    // validators for password
    const validators = [
      validateRequired(value), // cjeck required
      validatePattern(value, pattern), // check if it matches regex pattern
    ];
    const isValid = validateMulti(validators); // check if all validators return true
    return isValid;
  };

  // validate confirmPassword value
  const validateConfirmPassword = (value) => {
    // regex pattern for confirmPassword
    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    // get password value to compare
    const password = props.state.password;
    // validators for confirmPassword
    const validators = [
      validateRequired(value), // check for required
      validatePattern(value, pattern), // check if it matches regex pattern
      validateEqual(value, password), // check if equal to password
    ];
    const isValid = validateMulti(validators); // check if all validators return true
    return isValid;
  };

  // onChange handler functions

  // username input change handler
  const onUsernameChange = (e) => {
    // send event to parent component to change form state for username
    props.handleChange("username")(e);
    // check if username value is valid
    const isUsernameValid = validateUsername(e.target.value);
    // if not valid set error message
    !isUsernameValid && setUsernameError(strings.usernameError[language]);
    // if valid clear error message
    isUsernameValid && setUsernameError("");
  };

  // email input change handler
  const onEmailChange = (e) => {
    // send event to parent component to change form state for email
    props.handleChange("email")(e);
    // check if email value is valid
    const isEmailValid = validateEmailField(e.target.value);
    // if not valid set error message
    !isEmailValid && setEmailError(strings.emailError[language]);
    // if valid clear error message
    isEmailValid && setEmailError("");
  };

  // password input change handler
  const onPasswordChange = (e) => {
    // send event to parent component to change form state for password
    props.handleChange("password")(e);
    // check if password value is valid
    const isPasswordValid = validatePassword(e.target.value);
    // if not valid set error message
    !isPasswordValid && setPasswordError(strings.passwordError[language]);
    // if valid clear error message
    isPasswordValid && setPasswordError("");
  };

  // confirmPassword input change handler
  const onConfirmPasswordChange = (e) => {
    // send event to parent component to change form state for confirmPassword
    props.handleChange("confirmPassword")(e);
    // check if confirmPassword value is valid
    const isConfirmPasswordValid = validateConfirmPassword(e.target.value);
    // if not valid set error message
    !isConfirmPasswordValid &&
      setConfirmPasswordError(strings.confirmPasswordError[language]);
    // if valid clear error message
    isConfirmPasswordValid && setConfirmPasswordError("");
  };

  // handle Terms and conditions checkbox change
  const handleTerms = () => {
    // toggle state for checked terms
    terms ? setTerms(false) : setTerms(true);
    // set error message if terms not checked
    terms ? setTermsError(strings.termsError[language]) : setTermsError("");
  };

  // State hooks

  // get language from context
  const [language] = useContext(LanguageContext);

  // state hooks for error messages
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  // state hook for terms and conditions
  const [terms, setTerms] = useState(false);

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
        <div>{strings.secondStep[language]}</div>
        <form noValidate className="formStyle">
          <InputElement
            type="text"
            placeholder={strings.username[language]}
            value={props.state.username}
            onChange={onUsernameChange}
            label={strings.username[language]}
            error={usernameError && strings.usernameError[language]}
          />
          <br />
          <hr className="hr" />
          <InputElement
            type="email"
            placeholder={strings.email[language]}
            value={props.state.email}
            onChange={onEmailChange}
            label={strings.email[language]}
            error={emailError && strings.emailError[language]}
          />
          <br />
          <hr className="hr" />
          <InputElement
            type="password"
            placeholder={strings.password[language]}
            value={props.state.password}
            onChange={onPasswordChange}
            label={strings.password[language]}
            error={passwordError && strings.passwordError[language]}
          />
          <br />
          <hr className="hr" />
          <InputElement
            type="password"
            placeholder={strings.confirmPassword[language]}
            value={props.state.confirmPassword}
            onChange={onConfirmPasswordChange}
            label={strings.confirmPassword[language]}
            error={
              confirmPasswordError && strings.confirmPasswordError[language]
            }
          />
          <br />
          <hr className="hr" />
          <div className="inputRow">
            <input
              name="terms"
              type="checkbox"
              checked={terms}
              onChange={handleTerms}
            />

            <div>{strings.terms[language]}</div>
          </div>
          <p className="inputError">
            {termsError && strings.termsError[language]}
          </p>
          <br />
          <button onClick={backStep}>{strings.back[language]}</button>
          <button onClick={forwardStep}>{strings.next[language]}</button>
        </form>
      </>
    );
  }
};

export default Step2;
