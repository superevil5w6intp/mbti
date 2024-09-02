import React from "react";
import { useState } from "react";

const Plus = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [result, setResult] = useState(0);

  function plus() {
    setResult(Number(x) + Number(y));
  }

  return (
    <div style={{ height: "100px" }}>
      <span>
        <input
          value={x}
          onChange={(e) => setX(e.target.value)}
          type="number"
          style={{ fontSize: "24px" }}
        />
      </span>
      <span> + </span>
      <span>
        <input
          value={y}
          onChange={(e) => setY(e.target.value)}
          type="number"
          style={{ fontSize: "24px" }}
        />
      </span>
      <span>
        <button
          style={{
            padding: "10px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => plus()}
        >
          =
        </button>
      </span>
      <span>{result}</span>
    </div>
  );
};

export default Plus;
