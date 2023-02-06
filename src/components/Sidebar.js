import React from "react";
import styled, { css } from "styled-components";
import sideLogo from "../assets/sideLogo.png";

const Container = styled.div`
  width: 250px;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
`;

const Text = styled.div`
  margin: 10px 0;
  font-size: 24px;
  font-family: jejuFont;
  cursor: pointer;
  color: ${({ selected }) => selected && "darkred"};
  &:hover {
    color: darkred;
  }
  ${({ sub }) =>
    sub &&
    css`
      font-size: 20px;
      margin: 5px 0 5px 10px;
      color: ${({ selected }) => selected && "darkseagreen"};
      &:hover {
        color: darkseagreen;
      }
    `}
`;

const LogoImage = styled.img`
  width: 100%;
`;

const Sidebar = ({ select, setSelect, selectSub, setSelectSub }) => {
  return (
    <Container>
      <LogoImage src={sideLogo} />
      <Text
        selected={select === "곰벌레"}
        onClick={() => {
          setSelect("곰벌레");
          setSelectSub("곰벌레 정의");
        }}
      >
        곰벌레 젳
      </Text>
      {select === "곰벌레" && (
        <>
          <Text
            sub
            selected={selectSub === "곰벌레 정의"}
            onClick={() => setSelectSub("곰벌레 정의")}
          >
            줗 곰벌레 정의
          </Text>
          <Text
            sub
            selected={selectSub === "곰벌레 생존력"}
            onClick={() => setSelectSub("곰벌레 생존력")}
          >
            줗 곰벌레 생존력
          </Text>
          <Text
            sub
            selected={selectSub === "대중매체에서의 곰벌레"}
            onClick={() => setSelectSub("대중매체에서의 곰벌레")}
          >
            줗 대중매체에서의 곰벌레
          </Text>
        </>
      )}
      <Text
        selected={select === "mbti"}
        onClick={() => {
          setSelect("mbti");
          setSelectSub("Intp");
        }}
      >
        MBTI 젲
      </Text>
      {select === "mbti" && (
        <>
          <Text
            selected={selectSub === "Intp"}
            sub
            onClick={() => setSelectSub("Intp")}
          >
            젴 Intp 특
          </Text>
          <Text
            selected={selectSub === "Intj"}
            sub
            onClick={() => setSelectSub("Intj")}
          >
            젴 Intj 특
          </Text>
          <Text
            selected={selectSub === "Entp"}
            sub
            onClick={() => setSelectSub("Entp")}
          >
            젴 Entp 특
          </Text>
          <Text
            selected={selectSub === "Entj"}
            sub
            onClick={() => setSelectSub("Entj")}
          >
            젴 Entj 특
          </Text>
          <Text
            selected={selectSub === "Istp"}
            sub
            onClick={() => setSelectSub("Istp")}
          >
            젴 Istp 특
          </Text>
          <Text
            selected={selectSub === "Istj"}
            sub
            onClick={() => setSelectSub("Istj")}
          >
            젴 Istj 특
          </Text>
          <Text
            selected={selectSub === "Estp"}
            sub
            onClick={() => setSelectSub("Estp")}
          >
            젴 Estp 특
          </Text>
          <Text
            selected={selectSub === "Estj"}
            sub
            onClick={() => setSelectSub("Estj")}
          >
            젴 Estj 특
          </Text>
          <Text
            selected={selectSub === "Infp"}
            sub
            onClick={() => setSelectSub("Infp")}
          >
            젴 Infp 특
          </Text>
          <Text
            selected={selectSub === "Infj"}
            sub
            onClick={() => setSelectSub("Infj")}
          >
            젴 Infj 특
          </Text>
          <Text
            selected={selectSub === "Enfp"}
            sub
            onClick={() => setSelectSub("Enfp")}
          >
            젴 Enfp 특
          </Text>
          <Text
            selected={selectSub === "Enfj"}
            sub
            onClick={() => setSelectSub("Enfj")}
          >
            젴 Enfj 특
          </Text>
          <Text
            selected={selectSub === "Isfp"}
            sub
            onClick={() => setSelectSub("Isfp")}
          >
            젴 Isfp 특
          </Text>
          <Text
            selected={selectSub === "Isfj"}
            sub
            onClick={() => setSelectSub("Isfj")}
          >
            젴 Isfj 특
          </Text>
          <Text
            selected={selectSub === "Esfp"}
            sub
            onClick={() => setSelectSub("Esfp")}
          >
            젴 Esfp 특
          </Text>
          <Text
            selected={selectSub === "Esfj"}
            sub
            onClick={() => setSelectSub("Esfj")}
          >
            젴 Esfj 특
          </Text>
        </>
      )}
      <Text
        selected={select === "모스부호"}
        onClick={() => {
          setSelect("모스부호");
          setSelectSub("모스부호 정의");
        }}
      >
        모스부호 젣
      </Text>
      {select === "모스부호" && (
        <>
          <Text
            selected={selectSub === "모스부호 정의"}
            sub
            onClick={() => setSelectSub("모스부호 정의")}
          >
            젵 정의
          </Text>
          <Text
            selected={selectSub === "모스부호 번역기"}
            sub
            onClick={() => setSelectSub("모스부호 번역기")}
          >
            젵 번역기
          </Text>
        </>
      )}
      <Text
        selected={select === "이진법"}
        onClick={() => {
          setSelect("이진법");
          setSelectSub("이진법 정의");
        }}
      >
        {" "}
        이진법 젷
      </Text>
      {select === "이진법" && (
        <>
          <Text
            selected={selectSub === "이진법 정의"}
            sub
            onClick={() => setSelectSub("이진법 정의")}
          >
            젶 정의
          </Text>
          <Text
            selected={selectSub === "이진법 번역기"}
            sub
            onClick={() => setSelectSub("이진법 번역기")}
          >
            젶 번역기
          </Text>
        </>
      )}
    </Container>
  );
};

export default Sidebar;
