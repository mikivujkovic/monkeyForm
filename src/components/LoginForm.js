import React, { useState } from "react";
import FinalStep from "./FinalStep";
import Step2 from "./Step2";
import Step1 from "./Step1";

const LoginForm = () => {
  const [step, setStep] = useState(1);

  const moveForward = () => {
    const prevStep = step;
    setStep(prevStep + 1);
  };

  const moveBack = () => {
    const prevStep = step;
    setStep(prevStep - 1);
  };

  const backToStart = () => {
    setStep(1);
  };

  switch (step) {
    case 1:
      return <Step1 forward={moveForward} />;
    case 2:
      return <Step2 forward={moveForward} back={moveBack} />;
    case 3:
      return <FinalStep tryAgain={backToStart} />;
    default:
      return <Step1 />;
  }
};

export default LoginForm;
