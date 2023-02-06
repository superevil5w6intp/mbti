import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Texts = styled.div`
  font-size: 24px;
`;

const Input = styled.input`
  width: 300px;
  height: 60px;
  padding-left: 20px;
  font-size: 24px;
  font-family: "Pretendard-Regular";
  border-radius: 10px;
  border: 2px solid transparent;
  &:focus {
    outline: none;
    border: 2px solid salmon;
  }
`;

const Bigtext = styled.div`
  font-size: 25.92px;
  margin-bottom: 50px;
  flex-shrink: 0;
  padding: 0 20px;
  font-family: "MaplestoryOTFBold";
`;

const BUTTON = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  margin-right: 50px;
  font-family: "MaplestoryOTFBold";
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: silver;
    border: 2px solid silver;
  }
`;

const Rowbox = styled.div`
  display: flex;
  margin: 50px 0;
`;

const Qjsdurrl = () => {
  const [inputText, setInputText] = useState("");
  const [yeejinbubtext, setyeejinbubtext] = useState("");

  const yeejinbub = {
    a: "0100 0001",
    b: "0100 0010",
    c: "0100 0011",
    d: "0100 0100",
    e: "0100 0101",
    f: "0100 0110",
    g: "0100 0111",
    h: "0100 1000",
    i: "0100 1001",
    j: "0100 1010",
    k: "0100 1011",
    l: "0100 1100",
    m: "0100 1101",
    n: "0100 1110",
    o: "0100 1111",
    p: "0101 0000",
    q: "0101 0001",
    r: "0101 0010",
    s: "0101 0011",
    t: "0101 0100",
    u: "0101 0101",
    v: "0101 0110",
    w: "0101 0111",
    x: "0101 1000",
    y: "0101 1001",
    z: "0101 1010",
  };

  // x= {"a":1, "b":2}
  // x["b"]

  const byunhwangyee = () => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      result += yeejinbub[inputText[i]];
    }
    setyeejinbubtext(result);
  };

  const reset = () => {
    setInputText("");
    setyeejinbubtext("");
  };

  return (
    <Container>
      <Bigtext>yee진법 번역기</Bigtext>
      <Input
        placeholder="변환할 텍스트를 입력쿠다사이"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Rowbox>
        <BUTTON onClick={() => byunhwangyee()}>변환</BUTTON>
        <BUTTON onClick={() => reset()}>chogihwa</BUTTON>
      </Rowbox>
      <Texts> {yeejinbubtext}</Texts>{" "}
    </Container>
  );
};

export default Qjsdurrl;
