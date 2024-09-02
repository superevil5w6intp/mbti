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
      content: "𓀦 ";
      font-size: 24px;
      color: black;
    }
  }
`;

const Istj = () => {
  return (
    <Container>
      <details>
        <summary>
          <Title>Istj 특</Title>
        </summary>
        <Contents>
          <p>선입견이 강하다.</p>
          <p>낯가림이 심한 편이다.</p>
          <p>지나고 난 다음에 따지는 편이다.</p>
          <p>주어진 업무나 책임을 끝까지 완수한다.</p>
          <p>의젓한 성격이므로 장남, 장녀같다는 말을 많이 듣는다.</p>
          <p>예고없이 갑작스러운 변화를 매우 싫어한다.</p>
          <p>원리, 원칙적이다.</p>
          <p>실수한 것을 참지 못하고 즉각 수정하기를 원한다.</p>
          <p>남들이 속을 모른다고 말한다.</p>
          <p>휴일에도 집에서 주로 지낸다.</p>
          <p>참고 참았다가 터뜨리는 편이다.</p>
          <p>
            논리적, 합리적인 것을 중시하지만, 부기능이 Te(외향 사고)이고
            주기능이 Si(내향 감각)라서 구시대적인 관습을 논리에 따른 판단 없이
            수용하는 편이다.
          </p>
          <p>잘못했다는 건 인정하면서도 미안하다, 잘못했다고 잘 못한다.</p>
          <p>
            주기능이 Si(내향 감각)이면서 3차 기능이 Fi(내향 감정)이라서
            사고형(T) 중에서는 가장 감정(F) 성향이 높은 편이다. 그래서 자세히
            관찰하지 않으면 ISFJ와 혼동 할 수 있다.
          </p>
          <p>정리정돈을 해놓는 것이 우선이다.</p>
        </Contents>
      </details>
      <Title>Istj 궁합 </Title>
      <Contents>
        <p>최고 궁합 : Esfp, Estp</p>
        <p>최악 궁합 : Infp, Enfp, Infj, Enfj</p>{" "}
      </Contents>
      <Title>Istj 기능 </Title>
      <Contents>
        <p>주기능: Si 내향 감각 </p>
        <p>2차 기능 : Te 외향 사고 </p>
        <p>3차 기능: Fi 내향 감정</p>
        <p>열등 기능 :Ne 외향 직관</p>{" "}
      </Contents>
    </Container>
  );
};

export default Istj;
