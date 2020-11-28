import React from "react";

const Step2 = (props) => {
  const forwardStep = () => {
    //TODO: validate
    props.forward();
  };

  const backStep = () => {
    //TODO: validate
    props.back();
  };

  return (
    <>
      <div>Step 2</div>
      <button onClick={backStep}>back</button>
      <button onClick={forwardStep}>next</button>
    </>
  );
};

export default Step2;
