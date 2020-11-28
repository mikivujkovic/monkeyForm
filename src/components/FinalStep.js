import React from "react";

const FinalStep = (props) => {
  const handleTryAgain = () => {
    props.tryAgain();
  };

  return (
    <>
      <div>Final step</div>
      <button onClick={handleTryAgain}>Try Again</button>
    </>
  );
};

export default FinalStep;
