import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
`;

const Title = styled.div`
  font-family: "MaplestoryOTFBold";
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 50px;
  &:first-child {
    margin-top: 0;
  }
`;

const Contents = styled.div`
  & > p {
    color: snow;
    line-height: 2;
    ::before {
      content: "🤨 ";
    }
  }
`;
const Istp = () => {
  return (
    <Container>
      <details>
        <summary>
          <Title>Istp 특</Title>
        </summary>
        <Contents>
          <p>감각형(S) 중에서는 직관형(N)에 가장 가까운 편이다.</p>
          <p>마음에 없는 얘기를 상대방 기분 때문에 하지 않는다. </p>
          <p>일반적으로 조용한 편이나 필요에 따라 사교적이다. </p>
          <p>주기능은 Ti(내향 사고)로 분석적이고 논리적이다. </p>
          <p>
            3차 기능은 Ni(내향 직관)로 겉으로는 완만해 보이지만, 속으로는 완고한
            편이다.
          </p>
          <p>틀에 박히고 통념적인 생활을 싫어한다. </p>
          <p>타인의 일에 무관심한 편이다. </p>
          <p>고집이 세고 주관이 뚜렷하다. </p>
          <p>말이 없고 내색을 않는다. </p>
          <p>객관적 원리에 관심이 많다. </p>
          <p>
            맹목적이고 감정적인 것을 싫어하는 특성상, 무종교인 및 무신론자
            비율이 높다.
          </p>
          <p>느낌과 감정, 타인에 대한 마음을 표현하기 어려워한다. </p>
          <p>007의 주인공 제임스 본드 유형이다. </p>
          <p>정밀을 요하는 일을 잘 해낸다. </p>
        </Contents>
      </details>
      <Title>Istp 궁합 </Title>
      <Contents>
        <p>최고 궁합 : Esfj, Estj</p>
        <p>최악 궁합 : Infp, Enfp, Infj, Enfj</p>
      </Contents>
      <Title>Istp 기능 </Title>
      <Contents>
        <p>주기능: Ti 내향 사고 </p>
        <p>2차 기능 : se 외향 감각 </p>
        <p>3차 기능: ni 내향 직관</p>
        <p>열등 기능 :Fe 외향 감정</p>{" "}
      </Contents>
    </Container>
  );
};

export default Istp;
