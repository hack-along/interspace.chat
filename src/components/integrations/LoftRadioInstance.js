import React from "react";

function LoftRadioInstance({ backgroundColor }) {
  return (
    <iframe
      title="Interspace loft.radio"
      src="https://loft.radio/"
      style={{
        height: `100%`,
        width: `100%`,
        border: "0px",
        backgroundColor: `${backgroundColor}`
      }}
    ></iframe>
  );
}

export default LoftRadioInstance;
