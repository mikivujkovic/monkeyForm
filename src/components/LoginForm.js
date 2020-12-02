import React, { useState } from "react";
import FinalStep from "./FinalStep";
import Step2 from "./Step2";
import Step1 from "./Step1";
import formStateStart from "../data/formState";

const LoginForm = () => {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState(formStateStart);

  const moveForward = () => {
    const prevStep = step;
    setStep(prevStep + 1);
  };

  const moveBack = () => {
    const prevStep = step;
    setStep(prevStep - 1);
  };

  const backToStart = () => {
    const updatedState = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    setFormState(updatedState);
    setStep(1);
  };

  const handleChange = (input) => (e) => {
    const updatedState = { ...formState };
    updatedState[input] = e.target.value;
    setFormState(updatedState);
    console.log("state: ", formState);
  };

  switch (step) {
    case 1:
      return (
        <Step1
          forward={moveForward}
          state={formState}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <Step2
          forward={moveForward}
          back={moveBack}
          state={formState}
          handleChange={handleChange}
        />
      );
    case 3:
      return <FinalStep tryAgain={backToStart} state={formState} />;
    default:
      return <Step1 />;
  }
};

export default LoginForm;
