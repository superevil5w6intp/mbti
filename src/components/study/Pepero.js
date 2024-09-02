import React, { useEffect } from "react";
import { useState } from "react";

const Pepero = ({ value }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "-6px",
        right: "0px",
        width: " calc(100% - 250px - 20px)",
      }}
    >
      <progress max="100" value={value} style={{ width: "100%" }}></progress>
    </div>
  );
};

export default Pepero;
