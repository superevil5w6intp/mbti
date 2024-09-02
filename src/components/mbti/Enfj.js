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
      content: "😇 ";
    }
  }
`;
const Enfj = () => {
  return (
    <Container>
      <details>
        <summary>
          <Title>Enfj 특</Title>
        </summary>
        <Contents>
          <p>직관(N)형들 중에서 가장 외향적이다.</p>
          <p>전형적인 모범이 되는 학생회장 유형이다.</p>
          <p>군중을 이끄는 뛰어난 리더십이 있다.</p>
          <p>말하는 재능, 글쓰는 재능이 뛰어나다.</p>
          <p>
            대중과 상대방의 분위기를 읽는 공감능력이 탁월하기에, 유머감각이
            뛰어나다.
          </p>
          <p>사람을 굉장히 좋아한다.</p>
          <p>연민과 동정, 이해심이 대단히 많다.</p>
          <p>인생과 인간을 따뜻하게 바라본다.</p>
          <p>감정이입에 뛰어나 스스로 스트레스를 받는 경우도 있다.</p>
          <p>기본적으로 인류애가 많다.</p>
          <p>타인의 관심사에 귀 기울이며 그들을 배려한다.</p>
          <p>타인에 대한 관심이 많아 간혹 오지랖이 넓다는 평가를 받는다.</p>
          <p>이상적이다. 따라서 사람과 인간관계를 이상화하는 성향이 있다.</p>
          <p>원만한 인간관계를 유지하는 데 큰 의미를 부여하는 유형이다.</p>
          <p>인간관계에서도 진실성, 온전함에 가장 높은 가치를 부여한다.</p>
          <p>
            직관적으로 사람을 파악하는데 능하고, 도움을 주기 위해 적극적으로
            나서는 편이다.
          </p>
          <p>정말로 가치 있다고 여기는 일에 대해 헌신이 강하다.</p>
        </Contents>
      </details>
      <Title>Enfj 궁합 </Title>
      <Contents>
        <p>최고 궁합 : Infp</p>
        <p>최악 궁합 : Estp</p>{" "}
      </Contents>
      <Title>Enfj 기능 </Title>
      <Contents>
        <p>주기능: Fe 외향 감정 </p>
        <p>2차 기능 : Ni 내향 직관</p>
        <p>3차 기능: Se 외향 감각 </p>
        <p>열등 기능 :Ti 내향 사고 </p>{" "}
      </Contents>
    </Container>
  );
};

export default Enfj;
