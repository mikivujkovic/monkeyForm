import React, { useContext } from "react";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";

const Step2 = (props) => {
  const forwardStep = () => {
    //TODO: validate
    props.forward();
  };

  const backStep = () => {
    //TODO: validate
    props.back();
  };

  const [language] = useContext(LanguageContext);

  return (
    <>
      <div>Step 2</div>
      <input
        type="text"
        placeholder={strings.username[language]}
        value={props.state.username}
        onChange={props.handleChange("username")}
      ></input>
      <br />
      <input
        type="email"
        placeholder={strings.email[language]}
        value={props.state.email}
        onChange={props.handleChange("email")}
      ></input>
      <br />
      <input
        type="password"
        placeholder={strings.password[language]}
        value={props.state.password}
        onChange={props.handleChange("password")}
      ></input>
      <br />
      <input
        type="password"
        placeholder={strings.confirmPassword[language]}
        value={props.state.confirmPassword}
        onChange={props.handleChange("confirmPassword")}
      ></input>
      <br />
      <button onClick={backStep}>{strings.back[language]}</button>
      <button onClick={forwardStep}>{strings.next[language]}</button>
    </>
  );
};

export default Step2;
