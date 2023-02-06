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
      content: "🥸 ";
    }
  }
`;
const Entj = () => {
  return (
    <Container>
      <Title>Entj 특</Title>
      <Contents>
        <p>무언가를 주도하려는 욕심이 굉장히 강하다.</p>
        <p>
          ENTJ가 지향하는 본인의 사회 역할은 생산적인 사람, 유능한 사람, 영향력
          있는 사람이다.
        </p>
        <p>야망이 넘치며 권력과 영향력을 얻는 데 관심이 많다.</p>
        <p>
          본인 방식대로 성공하려면 혼자보다는 주변 사회구성원들의 도움이 더
          효과적이다.
        </p>
        <p>대담한 도전정신이 있다.</p>
        <p>
          변화를 위한 계획을 명확히 세우고, 이를 이행하는 과정에서 매우 단호하게
          행동하는 편이다.
        </p>
        <p>
          세상을 ‘가능성의 세계’로 인식하며 살고 있다. 공격할 수 있는 곳이면
          뭐든지 기꺼이 도전해본다.
        </p>
        <p>
          비판을 사사로운 악감정으로 생각하지 않으며, 굉장히 성장·성찰
          지향적이다.
        </p>
        <p>
          자신의 경험과 지식을 향상하는 측면이라면, 비판에 귀를 기울이고
          행동한다.
        </p>
        <p>
          피드백(비판·문제제기)해 줄 사람을 오히려 찾고 있으며, 그것을 두려워
          하는 사람들을 오히려 의아하게 생각한다
        </p>
        <p>
          외부 의견(자신에 대한 뒷담화)이 나오는 걸 두려워하지 않는다. ENTJ는
          상대방이 비판을 하는지, 기분 나쁘라고 하는 소리인지 분간한다.
        </p>
        <p>
          (토론·언쟁 속) 다방면에서 날아오는 공격으로부터 자신을 보호할 수 있다.
        </p>
        <p>비난에 거의 영향이 없으며 수동공격에 능하다.</p>
        <p>효율성을 중시한다.</p>
        <p>ENTJ가 어느 곳이든 비효율을 발견하면 근절하려고 나설 것이다.</p>
        <p>
          효율적 사고를 머릿속에 묵히지 않고 바로 실현해내므로 생산성이 높은
          편이다.
        </p>
        <p>
          합리성을 따지지 않고 게으른 사람들을 파괴자로 인식하며, 저런 사람들이
          비효율의 원흉이라고 생각한다.
        </p>
        <p>생각이 객관적이고 명료하다.</p>
      </Contents>
      <Title>Entj 궁합 </Title>
      <Contents>
        <p>좋은 궁합 - INFP, INTP, ENFP, INFJ, ENFJ, INTJ, ENTJ, ENTP</p>

        <p>좋지 않은 궁합 - 없음</p>
      </Contents>
      <Title>Entj 기능 </Title>
      <Contents>
        <p>주기능: Te 외향 사고 </p>
        <p>2차 기능 : Ni 내향 직관 </p>
        <p>3차 기능: Se 외향 감각</p>
        <p>열등 기능 :Fi 외향 감정</p>{" "}
      </Contents>
    </Container>
  );
};

export default Entj;
