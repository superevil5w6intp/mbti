import React from "react";

const Yanodobtn = () => {
  function handleclick() {
    window.alert("야 너 못해");
  }

  return (
    <div style={{ margin: "50px 0" }}>
      <button onClick={handleclick} style={{ padding: "20px 50px" }}>
        야 너도 할 수 있어
      </button>
    </div>
  );
};

export default Yanodobtn;
