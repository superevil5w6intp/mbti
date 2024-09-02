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
      content: "😴 ";
    }
  }
`;
const Isfp = () => {
  return (
    <Container>
      <details>
        <summary>
          <Title>Isfp 특</Title>
        </summary>
        <Contents>
          <p>화가 나더라도 차분하고 친절하게 의견을 표현한다.</p>
          <p>남에게 싫은 소리 못하고 속으로 삭인다.</p>
          <p>다른 사람의 부탁을 거절하기 어려워한다.</p>
          <p>남을 잘 믿고 의심하지 않는다.</p>
          <p>유연한 사고 방식과 관용적이고 개방적인 태도를 지니고 있다.</p>
          <p>분쟁을 싫어하며 조화롭게 지내고자 노력한다.</p>
          <p>전화보다 메시지를 선호한다.</p>
          <p>내향(I)형답게 혼자만의 시간을 즐긴다.</p>
          <p>
            잘 단련된 인내심을 가지고 있어 그래도 부조리에 대처하는 능력은 제법
            출중한 편이다.
          </p>
          <p>자신의 행동에 대해 자아성찰을 자주 한다.</p>
          <p>첫인상은 차갑고 수줍어보이나 알고보면 꽤 순둥이다.</p>
          <p>타인의 비판에 대해 개방적이며 잘 수긍한다.</p>
          <p>비밀스럽고 미스테리한 다양한 색깔을 가진 사람들이다.</p>
          <p>
            자신의 생각이나 의견을 말해보라고 했을 때 대답하기 어려워한다.
            때문에 많은 사람들에게 답답하다는 말을 자주 듣는다.
          </p>
          <p>장기적인 관계를 선호한다.</p>
          <p>자기 영역을 보호받기를 원한다.</p>
          <p>자신의 마음을 솔직하게 표현하지 못한다.</p>
          <p>전통보다는 가치관에 따라 행동한다.</p>
        </Contents>
      </details>
      <Title>Isfp 궁합 </Title>
      <Contents>
        <p>가장 잘 맞는 궁합 : ENFJ, ESFJ, ESTJ</p>
        <p>무난한 궁합 : INTJ, ENTJ, INTP, ENTP, ISFJ, ISTJ</p>
        <p>안 맞는 궁합 : ISFP, ESFP, ISTP, ESTP</p>
        <p>최악의 궁합 : INFP, ENFP, INFJ</p>
      </Contents>
      <Title>Isfp 기능 </Title>
      <Contents>
        <p>주기능: Fi 내향 감정 </p>
        <p>2차 기능 : se 외향 감각 </p>
        <p>3차 기능: ni 내향 직관</p>
        <p>열등 기능 :Te 외향 사고</p>{" "}
      </Contents>
    </Container>
  );
};

export default Isfp;
