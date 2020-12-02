import React, { useContext, useState } from "react";
import InputElement from "./InputElement";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";
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
import Loader from "react-loader-spinner";

const Step2 = (props) => {
  const submitStep = () => {
    return new Promise(function (resolve, reject) {
      setSpinnerLoading(true);
      setTimeout(resolve, 2000);
    }).then(function () {
      setSpinnerLoading(false);
      props.forward();
    });
  };

  const forwardStep = (e) => {
    e.preventDefault();
    const isUsernameValid = validateUsername(props.state.username);
    const isEmailValid = validateEmailField(props.state.email);
    const isPasswordValid = validatePassword(props.state.password);
    const isConfirmPasswordValid = validateConfirmPassword(
      props.state.confirmPassword
    );

    !isUsernameValid && setUsernameError(strings.usernameError[language]);
    !isEmailValid && setEmailError(strings.emailError[language]);
    !isPasswordValid && setPasswordError(strings.passwordError[language]);
    !isConfirmPasswordValid &&
      setConfirmPasswordError(strings.confirmPasswordError[language]);
    !terms && setTermsError(strings.termsError[language]);
    isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      terms &&
      submitStep();
  };

  const backStep = () => {
    props.back();
  };

  const validateUsername = (value) => {
    const validators = [
      validateRequired(value),
      validateMinLength(value, 4),
      validateMaxLength(value, 20),
    ];
    const isValid = validateMulti(validators);
    return isValid;
  };

  const validateEmailField = (value) => {
    const validators = [validateRequired(value), validateEmail(value)];
    const isValid = validateMulti(validators);
    return isValid;
  };

  const validatePassword = (value) => {
    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    console.log("match: ", validatePattern(value, pattern));
    const validators = [
      validateRequired(value),
      validatePattern(value, pattern),
    ];
    const isValid = validateMulti(validators);
    return isValid;
  };

  const validateConfirmPassword = (value) => {
    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    const password = props.state.password;
    const validators = [
      validateRequired(value),
      validatePattern(value, pattern),
      validateEqual(value, password),
    ];
    const isValid = validateMulti(validators);
    return isValid;
  };

  const onUsernameChange = (e) => {
    props.handleChange("username")(e);
    const isUsernameValid = validateUsername(e.target.value);
    !isUsernameValid && setUsernameError(strings.usernameError[language]);
    isUsernameValid && setUsernameError("");
  };

  const onEmailChange = (e) => {
    props.handleChange("email")(e);
    const isEmailValid = validateEmailField(e.target.value);
    !isEmailValid && setEmailError(strings.emailError[language]);
    isEmailValid && setEmailError("");
  };

  const onPasswordChange = (e) => {
    props.handleChange("password")(e);
    const isPasswordValid = validatePassword(e.target.value);
    console.log("is password value: ", isPasswordValid);
    !isPasswordValid && setPasswordError(strings.passwordError[language]);
    isPasswordValid && setPasswordError("");
  };

  const onConfirmPasswordChange = (e) => {
    props.handleChange("confirmPassword")(e);
    const isConfirmPasswordValid = validateConfirmPassword(e.target.value);
    !isConfirmPasswordValid &&
      setConfirmPasswordError(strings.confirmPasswordError[language]);
    isConfirmPasswordValid && setConfirmPasswordError("");
  };

  const handleTerms = () => {
    terms ? setTerms(false) : setTerms(true);
    terms ? setTermsError(strings.termsError[language]) : setTermsError("");
  };

  const [language] = useContext(LanguageContext);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(false);

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
