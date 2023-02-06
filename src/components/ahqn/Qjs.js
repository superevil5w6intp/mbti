import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 5px;
  }
`;

const Bigtext = styled.div`
  font-size: 25.92px;
  margin-bottom: 20px;
  flex-shrink: 0;
  padding: 0 20px;
  font-family: "MaplestoryOTFBold";
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

const Qjs = () => {
  const [inputText, setInputText] = useState("");
  const [yeejinbubtext, setyeejinbubtext] = useState("");

  const yeejinbub = {
    A: ".-",
    N: "-.",
    B: "-...",
    O: "---",
    C: "-.-.",
    P: ".--.",
    D: "-..",
    Q: "--.-",
    E: ".",
    R: ".-.",
    F: "..-.",
    S: "...",
    G: "--.",
    T: "-",
    H: "....",
    U: "..-",
    I: "..",
    V: "...-",
    J: ".---",
    W: ".--",
    K: "-.-",
    X: "-..-",
    L: ".-..",
    Y: "-.--",
    M: "--",
    Z: "--..",
    " ": " ",
  };

  // x= {"a":1, "b":2}
  // x["b"]

  const byunhwangyee = () => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      console.log(">>>", inputText[i]);
      result += yeejinbub[inputText[i].toUpperCase()];
    }
    setyeejinbubtext(result);
  };
  const reset = () => {
    setInputText("");
    setyeejinbubtext("");
  };

  return (
    <Container>
      <Bigtext>모스부호 번역기</Bigtext>
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

export default Qjs;
