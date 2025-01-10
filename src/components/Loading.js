import React from "react";
import loading from "./Spinner.gif";
const Loading = () => {
  return (
    <div>
      <div className="text-center">
        <img src={loading} alt="Loading" />
      </div>
    </div>
  );
};

export default Loading;
