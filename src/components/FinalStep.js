import React, { useContext } from "react";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";
import "../App.css";

const FinalStep = (props) => {
  const handleTryAgain = () => {
    props.tryAgain();
  };

  const [language] = useContext(LanguageContext);

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
        <button onClick={handleTryAgain}>{strings.tryAgain[language]}</button>
      </div>
    </>
  );
};

export default FinalStep;
