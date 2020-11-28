import React from "react";

const Step1 = (props) => {
  const forwardStep = () => {
    //TODO: validate
    props.forward();
  };

  return (
    <>
      <div>Step 1</div>
      <button onClick={forwardStep}>next</button>
    </>
  );
};

export default Step1;
