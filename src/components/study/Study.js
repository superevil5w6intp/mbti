import React from "react";
import Plus from "./Plus";
import Minus from "./Minus";
import Zoo from "./Zoo";
import Yanodobtn from "./Yanodobtn";
import Jeonsihue from "./Jeonsihue";
import Braintest from "./Braintest";
import Braintest2 from "./Braintest2";

const Study = () => {
  const { 덧셈1, 덧셈2, 덧셈결과 } = 덧셈();
  const { 나눗셈1, 나눗셈2, 나눗셈결과 } = 나눗셈();

  function 덧셈() {
    const 덧셈1 = 1;

    const 덧셈2 = 2;

    const 덧셈결과 = 덧셈1 + 덧셈2;

    return { 덧셈1, 덧셈2, 덧셈결과 };
  }
  function 나눗셈() {
    const 나눗셈1 = 500;

    const 나눗셈2 = 100;

    const 나눗셈결과 = 나눗셈1 / 나눗셈2;

    return { 나눗셈1, 나눗셈2, 나눗셈결과 };
  }

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* 덧셈 */}
      <div>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>덧셈: </span>
        <span style={{ fontSize: "24px" }}>{덧셈1}</span>
        <span style={{ fontSize: "24px" }}>+</span>
        <span style={{ fontSize: "24px" }}>{덧셈2}</span>
        <span style={{ fontSize: "24px" }}>=</span>
        <span style={{ fontSize: "24px" }}>{덧셈결과}</span>
      </div>

      {/* 나눗셈 */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        나눗셈:
        <span style={{ fontSize: "24px", fontWeight: "normal" }}>
          {나눗셈1}
        </span>
        <span style={{ fontSize: "24px", fontWeight: "normal" }}>나누기</span>
        <span style={{ fontSize: "24px", fontWeight: "normal" }}>
          {나눗셈2}
        </span>
        <span style={{ fontSize: "24px", fontWeight: "normal" }}>=</span>
        <span style={{ fontSize: "24px", fontWeight: "normal" }}>
          {나눗셈결과}
        </span>
      </div>

      <Plus />
      <Minus />
      <Zoo />
      <Yanodobtn />
      <Jeonsihue />
      <Braintest />
      <Braintest2 />
    </div>
  );
};

export default Study;
