import React from "react";
import "../../style/loadingSpinner.scss";

/**
 * Loading Spinner
 */
const LoadingSpinner = () => {
  return (
    <div className="ldSpinnCtn">
      <div className="loadingSpinnerAnm"></div>
      <div>Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
