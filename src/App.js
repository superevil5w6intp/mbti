import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Mbw from "./components/Mb/Mbw";
import Sidebar from "./components/Sidebar";
import "./font/font.css";
import "./GlobalStyle.css";
import misobg from "./assets/misobg.jpg";
import Mbt from "./components/Mb/Mbt";
import Mbe from "./components/Mb/Mbe";
import Intp from "./components/mbti/Intp";
import Intj from "./components/mbti/Intj";
import Entj from "./components/mbti/Entj";
import Entp from "./components/mbti/Entp";
import Estj from "./components/mbti/Estj";
import Estp from "./components/mbti/Estp";
import Istj from "./components/mbti/Istj";
import Istp from "./components/mbti/Istp";
import Infj from "./components/mbti/Infj";
import Infp from "./components/mbti/Infp";
import Enfj from "./components/mbti/Enfj";
import Esfp from "./components/mbti/Esfp";
import Isfp from "./components/mbti/Isfp";
import Isfj from "./components/mbti/Isfj";
import Enfp from "./components/mbti/Enfp";
import Esfj from "./components/mbti/Esfj";
import Qjs from "./components/ahqn/Qjs";
import Qjd from "./components/ahqn/Qjd";
import Wjddml from "./components/dlwlsqjq/Wjddml";
import Qjsdurrl from "./components/dlwlsqjq/Qjsdurrl";
import Study from "./components/study/Study";
import Pepero from "./components/study/Pepero";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0;
  padding: 0;
`;

const Contents = styled.div`
  width: calc(100% - 250px);
  padding: 20px;
  background-image: url(${misobg});
  background-size: cover;
  background-position: 50%;
`;

function App() {
  const contents = useRef();
  const [scroll, setScroll] = useState(0);

  const [select, setSelect] = useState("곰벌레");
  const [selectSub, setSelectSub] = useState("곰벌레 정의");

  function getScroll(value) {
    const domHeight = contents.current.scrollHeight - window.innerHeight;
    const current = contents.current.scrollTop;

    const result = (current / domHeight) * 100;

    setScroll(result);
  }

  useEffect(() => {
    contents.current.addEventListener("scroll", getScroll);

    return () => contents.current.removeEventListener("scroll", getScroll);
  }, []);
  return (
    <>
      <Container>
        <Sidebar
          select={select}
          setSelect={setSelect}
          selectSub={selectSub}
          setSelectSub={setSelectSub}
        />
        <Contents ref={contents}>
          {selectSub === "곰벌레 정의" ? (
            <Mbw />
          ) : selectSub === "곰벌레 생존력" ? (
            <Mbt />
          ) : selectSub === "대중매체에서의 곰벌레" ? (
            <Mbe />
          ) : selectSub === "Intp" ? (
            <Intp />
          ) : selectSub === "Intj" ? (
            <Intj />
          ) : selectSub === "Entj" ? (
            <Entj />
          ) : selectSub === "Entp" ? (
            <Entp />
          ) : selectSub === "Estj" ? (
            <Estj />
          ) : selectSub === "Esfj" ? (
            <Esfj />
          ) : selectSub === "Estp" ? (
            <Estp />
          ) : selectSub === "Esfp" ? (
            <Esfp />
          ) : selectSub === "Isfp" ? (
            <Isfp />
          ) : selectSub === "Isfj" ? (
            <Isfj />
          ) : selectSub === "Infj" ? (
            <Infj />
          ) : selectSub === "Infp" ? (
            <Infp />
          ) : selectSub === "Enfp" ? (
            <Enfp />
          ) : selectSub === "Istj" ? (
            <Istj />
          ) : selectSub === "Istp" ? (
            <Istp />
          ) : selectSub === "Enfj" ? (
            <Enfj />
          ) : selectSub === "모스부호 정의" ? (
            <Qjd />
          ) : selectSub === "모스부호 번역기" ? (
            <Qjs />
          ) : selectSub === "이진법 정의" ? (
            <Wjddml />
          ) : selectSub === "이진법 번역기" ? (
            <Qjsdurrl />
          ) : selectSub === "복습" ? (
            <Study />
          ) : (
            <></>
          )}
          <Pepero value={scroll}></Pepero>
        </Contents>
      </Container>
    </>
  );
}

export default App;
