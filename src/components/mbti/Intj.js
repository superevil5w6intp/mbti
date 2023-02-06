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
      content: " ☢️ ";
    }
  }
`;

const Intj = () => {
  return (
    <Container>
      <Title>Intj 특</Title>

      <Contents>
        <p>
          모순적으로 보일 수 있지만, 상상력이 풍부하면서도 결단력이 있으며,
          야망이 있지만 대외적으로 표현하지 않으며, 놀랄 만큼 호기심이 많지만
          쓸데없는 데 에너지를 낭비하는 법이 없다.모순적으로 보일 수 있지만,
          상상력이 풍부하면서도 결단력이 있으며, 야망이 있지만 대외적으로
          표현하지 않으며, 놀랄 만큼 호기심이 많지만 쓸데없는 데 에너지를
          낭비하는 법이 없다.
        </p>
      </Contents>
      <Title>Intj 궁합 </Title>
      <Contents>
        <p>최고 궁합 : ENTP, ENFP</p>
        <p>좋은 궁합 : INFP, ENTJ, INFJ, INTJ,ENFJ</p>
        <p>그?냥 궁합 : ISFP,ESFP,ISTP,ESTP</p>
        <p>최악 궁합 : ISFJ, ESFJ, ISTJ, ESTJ</p>{" "}
      </Contents>
      <Title>Intj 기능 </Title>
      <Contents>
        <p>주기능: Ni 내향 직관 </p>
        <p>2차 기능 : Te 외향 사고</p>
        <p>3차 기능: Fi 내향 감정</p>
        <p>열등 기능 : Se 외향 감각</p>
      </Contents>
    </Container>
  );
};

export default Intj;
