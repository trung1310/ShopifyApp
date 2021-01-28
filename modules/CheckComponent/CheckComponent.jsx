import React, { memo } from "react";

const ChildComponent = ({ number }) => {
  console.log("From child component");

  return (
    <div>
      <h1>Child component {number}</h1>
    </div>
  );
};

export default memo(ChildComponent);