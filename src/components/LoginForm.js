/*
  Main component for all form data and subcomponents.
  Controls which step is presented and holds all form data in state.
  Defines a method for changing form data and passes it to child components 
*/

import React, { useState } from "react";
import FinalStep from "./FinalStep";
import Step2 from "./Step2";
import Step1 from "./Step1";

// import initial form state
import formStateStart from "../data/formState";

const LoginForm = () => {
  // state for determining which step to show
  const [step, setStep] = useState(1);
  // statehandling for form data
  const [formState, setFormState] = useState(formStateStart);

  // move to th enext step
  const moveForward = () => {
    const prevStep = step;
    setStep(prevStep + 1);
  };

  // move to the previous step
  const moveBack = () => {
    const prevStep = step;
    setStep(prevStep - 1);
  };

  // start logging in from the beggining with clean state
  const backToStart = () => {
    // set form data to initial state - everything empty
    setFormState(updatedState);
    // go back to first step
    setStep(1);
  };

  // handle any change of form state based on form field name - input and value from event e
  const handleChange = (input) => (e) => {
    // clone the state
    const updatedState = { ...formState };
    // change state clone
    updatedState[input] = e.target.value;
    // update state based on updated clone
    setFormState(updatedState);
  };

  // render step based on state and pass props to child components
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
