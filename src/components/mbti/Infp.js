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
      content: "🥺 ";
    }
  }
`;
const Infp = () => {
  return (
    <Container>
      <Title>Infp 특</Title>
      <Contents>
        <p>개인주의자다.</p>
        <p>이상주의자다.</p>
        <p>
          진정성을 중시한다. 가식적이거나 피상적, 상투적인 것에 큰 거부감을 느낄
          수 있다.
        </p>
        <p>이해심 많고 적응력이 좋으며, 대체로 관대하고 개방적이다.</p>
        <p>조화롭게 살고자 하며 분쟁을 피하기 위해서는 철저하다.</p>
      </Contents>
      <Title>Infp 궁합 </Title>
      <Contents>
        <p>최고 궁합 : Enfj, Entj</p>
        <p>최악 궁합 : Isfp, Esfp, Istp, Estp, Isfj, Esfj, Istj, Estj</p>
      </Contents>
      <Title>Infp 기능 </Title>
      <Contents>
        <p>주기능: Fi 내향 감정 </p>
        <p>2차 기능 : Ne 외향 직관 </p>
        <p>3차 기능: Si 내향 감각</p>
        <p>열등 기능 :Te 외향 사고 </p>{" "}
      </Contents>
    </Container>
  );
};

export default Infp;
