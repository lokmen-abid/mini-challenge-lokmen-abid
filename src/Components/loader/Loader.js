import React from "react";
import Spinner from "../../assets/spinner.png";

function Loader() {
  return (
    <div className="fp-container">
      <img src={Spinner} className="fp-loader" alt="loading" />
    </div>
  );
}

export default Loader;
