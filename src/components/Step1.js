import React, { useContext, useState } from "react";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";
import InputElement from "./InputElement";
import {
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validateLetters,
  validateMulti,
} from "../utils/validation";

const Step1 = (props) => {
  const forwardStep = (e) => {
    e.preventDefault();
    const isFirstNameValid = validateFirstName(props.state.firstname);
    const isLastNameValid = validateLastName(props.state.lastname);

    !isFirstNameValid && setFirstnameError(strings.firstNameError[language]);
    !isLastNameValid && setLastnameError(strings.lastNameError[language]);
    isFirstNameValid && isLastNameValid && props.forward();
  };

  const validateFirstName = (value) => {
    //const value = props.state.firstname;
    const validators = [
      validateRequired(value),
      validateMinLength(value, 2),
      validateMaxLength(value, 25),
    ];
    const isValid = validateMulti(validators);
    return isValid;
  };

  const validateLastName = (value) => {
    //const value = props.state.lastname;
    const validators = [
      validateLetters(value),
      validateMinLength(value, 2),
      validateMaxLength(value, 25),
    ];
    const isValid = validateMulti(validators);
    return isValid;
  };

  const onFirstNameChange = (e) => {
    props.handleChange("firstname")(e);
    const isFirstNameValid = validateFirstName(e.target.value);
    !isFirstNameValid && setFirstnameError(strings.firstNameError[language]);
    isFirstNameValid && setFirstnameError("");
  };

  const onLastNameChange = (e) => {
    props.handleChange("lastname")(e);
    const isLastNameValid = validateLastName(e.target.value);
    !isLastNameValid && setLastnameError(strings.lastNameError[language]);
    isLastNameValid && setLastnameError("");
  };

  const [language] = useContext(LanguageContext);

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  return (
    <>
      <div>{strings.firstStep[language]}</div>
      <form noValidate>
        <InputElement
          type="text"
          placeholder={strings.firstname[language]}
          value={props.state.firstname}
          onChange={onFirstNameChange}
          label={strings.firstname[language]}
          error={firstnameError && strings.firstNameError[language]}
        />
        <InputElement
          type="text"
          placeholder={strings.lastname[language]}
          value={props.state.lastname}
          onChange={onLastNameChange}
          label={strings.lastname[language]}
          error={lastnameError && strings.lastNameError[language]}
        />
        <br />
        <button onClick={forwardStep}>{strings.next[language]}</button>
      </form>
    </>
  );
};

export default Step1;
