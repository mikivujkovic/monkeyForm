import React, { useContext } from "react";
import strings from "../data/strings";
import { LanguageContext } from "../state/LanguageContext";

const FinalStep = (props) => {
  const handleTryAgain = () => {
    props.tryAgain();
  };

  const [language] = useContext(LanguageContext);

  return (
    <>
      <div>{strings.finalStep[language]}</div>
      <button onClick={handleTryAgain}>{strings.tryAgain[language]}</button>
    </>
  );
};

export default FinalStep;
