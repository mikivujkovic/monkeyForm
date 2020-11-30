import React, { useContext } from "react";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";

const Step1 = (props) => {
  const forwardStep = () => {
    //TODO: validate
    props.forward();
  };

  const [language] = useContext(LanguageContext);

  return (
    <>
      <div>{strings.firstStep[language]}</div>
      <input
        type="text"
        placeholder={strings.firstname[language]}
        value={props.state.firstname}
        onChange={props.handleChange("firstname")}
      ></input>
      <br />
      <input
        type="text"
        placeholder={strings.lastname[language]}
        value={props.state.lastname}
        onChange={props.handleChange("lastname")}
      ></input>
      <br />
      <button onClick={forwardStep}>{strings.next[language]}</button>
    </>
  );
};

export default Step1;
