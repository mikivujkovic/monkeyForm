/*
  Final step to show the form values and to logout
*/

import React, { useContext } from "react";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";
import "../App.css";

const FinalStep = (props) => {
  // handle logout button
  const handleTryAgain = () => {
    // run tryAgain function passed from parent control - LoginForm
    props.tryAgain();
  };

  // get language from Context
  const [language] = useContext(LanguageContext);

  // string literal to output form data
  const output = `
  {
    fields: [
      {
        code: "fname",
        valueStr: "${props.state.firstname}",
        dataType: "string",
      },
      {
        code: "lname",
        valueStr: "${props.state.lastname}",
        dataType: "string",
      },
      {
        code: "username",
        valueStr: "${props.state.username}",
        dataType: "string",
      },
      {
        code: "email",
        valueStr: "${props.state.email}",
        dataType: "string",
      },
      {
        code: "password",
        valueStr: "${props.state.password}",
        dataType: "string",
      },
      {
        code: "password_confirm",
        valueStr: "${props.state.confirmPassword}",
        dataType: "string",
      },
    ],
  }
  `;

  return (
    <>
      <div>{strings.finalStep[language]}</div>
      <div className="formStyle">
        <div>{strings.successLogin[language]}</div>
        <br />
        <div className="prettyPrint">
          <pre>{output}</pre>
        </div>
        <button name="logout" onClick={handleTryAgain}>
          {strings.tryAgain[language]}
        </button>
      </div>
    </>
  );
};

export default FinalStep;
