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
      content: "👺 ";
    }
  }
`;
const Infj = () => {
  return (
    <Container>
      <details>
        <summary>
          <Title>Infj 특</Title>
        </summary>
        <Contents>
          <p>이상주의적, 완벽주의적 성향을 추구한다. </p>
          <p>
            3차 기능이 Ti(내향 사고)로 겉으로는 공감할 수 있지만, 속으로는
            비판적으로 생각하는 경향이 있다. 따라서 감정형(F) 중에서는 대체로
            사고(T) 성향이 높은 편이다. 이는 ISFJ와 같다.
          </p>
          <p>
            주기능이 Ni(내향 직관)으로 과거와 현재의 공통점을 찾아 미래를
            예측하는 것을 좋아하며 상상력, 창의력과 독창성이 뛰어나다. 때문에
            비범한 통찰력을 지녔다.
          </p>
          <p>본인만의 철칙이 뚜렷하여 고집이 세다고 느껴질 수 있다. </p>
          <p>사회적 불의에 민감하여 높은 도덕 관념을 지니고 있다. </p>
          <p>생활에서 INFJ는 보수적이면서 동시에 반항적이다. </p>
          <p>INFJ는 감정적이면서 동시에 이성적이다. </p>
          <p>모든 유형 중 가장 이해하기 힘들고 미스테리하다.</p>
          <p>목적과 의미가 있는 일에 대해 열정적이다. </p>
          <p>
            이는 N 유형의 특징이기도 하다. 직관적 감성이 늘 현실을 초월하는
            의미와 관념에 관심을 기울이기 때문이다.
          </p>
          <p>
            특유의 열정으로 본인이 가진 한계점을 넘어서는 것은 즐기지만, 자칫
            열정이 임계점을 넘어설 경우, 쉬이 지치거나 극심한 스트레스를
            호소하기도 한다.{" "}
          </p>
          <p>
            번아웃에 취약한 유형이다. 반복적이고 의미 없는 일이나 과도한 업무량,
            불편한 인간관계 등에 쉽게 지친다.{" "}
          </p>
          <p>사람이나 일에 있어 호불호가 분명히 나뉜다. </p>
          <p>자신의 상상력을 자극하는 창작물을 좋아한다. </p>
          <p>
            호기심이 많고, 열정적이며 언제나 의문을 갖는다. 가슴 속에 묻어둔
            질문들이 많다.{" "}
          </p>
          <p>몽환적이며 신비로운 것을 좋아한다. </p>
          <p>거짓말을 매우 싫어하며 진실을 중요시한다.</p>
          <p>자아성찰을 자주 하는 편이며, 본인 스스로에게 매우 엄격하다. </p>
          <p>심리학에 관심이 많다.</p>
          <p>
            음악, 책 등의 예술 및 문학 분야에 많은 관심과 지식을 지니고 있으며,
            그 관심이 행동으로 직결되는 경우가 많기 때문에 그 분야에 뛰어난
            감각을 가지고 있는 사람이 많다.
          </p>
          <p>언어 능력 및 감각이 좋아 국어를 포함한 어학 과목에 강하다. </p>
        </Contents>
      </details>
      <Title>Infj 궁합 </Title>
      <Contents>
        <p>가장 잘 맞는 궁합: ENFP, ENTP</p>
        <p>잘 맞는 타입 : INFP, INFJ, ENFJ, INTJ, ENTJ, INTP, ENTP</p>
        <p>최악의 타입 : ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, ESTJ </p>
      </Contents>
      <Title>Infj 기능 </Title>
      <Contents>
        <p>주기능: Ni 내향 직관 </p>
        <p>2차 기능 : Fe 외향 감정 </p>
        <p>3차 기능: Ti 내향 사고</p>
        <p>열등 기능 :Se 외향 감각</p>{" "}
      </Contents>
    </Container>
  );
};

export default Infj;
