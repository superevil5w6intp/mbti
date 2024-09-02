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
      font-size: 24px;
      color: black;
      content: "𓁖 ";
    }
  }
`;
const Isfj = () => {
  return (
    <Container>
      <details>
        <summary>
          <Title>Isfj 특</Title>
        </summary>
        <Contents>
          <p>
            ISFJ는 혼자 있는 시간에 활력이 넘치고(I), 아이디어와 개념보다 사실과
            세부 사항에 중점을 두며(S), 감정과 가치에 따라 결정을 내리고(F),
            계획과 조직을 선호하는 사람을 나타내며, 자발적이고 유연하다(J).
            ISFJ는 사람들을 안전하고 잘 보살피는 데에 관심이 있기 때문에 때때로
            보호자 성격이라고도 한다.
          </p>
          <p>전통과 조직에 충실한 관리적인 성격이다.</p>
          <p>
            실용적이고 동정심이 많으며, 다른 사람들을 보살피며 위험으로부터
            보호하려고 한다.
          </p>
          <p>
            관습적이고 근거가 있으며, 사회의 확립된 구조에 기여하는 것을
            좋아한다.
          </p>
          <p>
            검증된 방법과 확실한 가치에 기인하고, 사회에 받아들여진 일을 하는
            것을 원한다.
          </p>
          <p>
            확립된 제도에 적응하고, 안정적인 사회 구조를 유지하기 위한 일을
            중요시 여긴다.
          </p>
          <p>
            안정적인 삶을 지향하지만, 본인이 이해 또는 존경받는다고 생각되는
            범위에서 변화를 수용할 수 있다.
          </p>
          <p>다른 사람들에 대한 깊은 책임감을 가지며 꾸준하고 헌신적이다.</p>
          <p>
            부기능이 외향감정(Fe)으로, 상대방에 대한 배려가 넘치고 공감적이지만,
            3차기능이 내향사고(Ti)로 속으로는 비판적으로 생각할 수 있다. 모든
            감정형 중에 가장 사고형에 가깝다.
          </p>
          <p>특히 다른 사람들의 욕구를 충족시킬 때 의무를 다한다.</p>
          <p>
            다른 사람들에게 자신이 믿을만 하고, 나에 대한 신뢰가 있기를 바란다.
          </p>
          <p>
            타인을 향한 연민이나 동정심이 있으면서도, 가족이나 친구를 보호해야
            할 때는 가차 없는 모습을 보이기 때문에 이들을 정의하는 성격 특성에
            꼭 들어맞지{" "}
          </p>
        </Contents>
      </details>
      <Title>Isfj 궁합 </Title>
      <Contents>
        <p>최고 궁합 : ENTJ,INTJ,ISFP </p>
        <p>좋은 궁합 : INFP, ENFP, INFJ, ENFJ</p>
        <p>나쁜 궁합 : 모?루 </p>
        <p>최악 궁합 : ISTJ</p> <p>몰?루:ESTJ,ENTP,ESFJ</p>
      </Contents>
      <Title>Isfj 기능 </Title>
      <Contents>
        <p>주기능: Si 내향 감각 </p>
        <p>2차 기능 : Fe 외향 감정 </p>
        <p>3차 기능: Ti 내향 사고</p>
        <p>열등 기능 : Ne 외향 직관</p>{" "}
      </Contents>
    </Container>
  );
};

export default Isfj;
