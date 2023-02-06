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
      color: black;
      font-size: 24px;
      content: "𓀨 ";
    }
  }
`;
const Estj = () => {
  return (
    <Container>
      <Title>Estj 특</Title>
      <Contents>
        <p>
          근면성실하며 질서정연하고 효율, 상식, 논리를 중시하는 타입이기 때문에
          게으르거나, 일을 잘 못하거나, 뜬구름 잡는 몽상가적 소리를 하거나,
          잡생각이 많거나, 감정에 휘둘리거나, 충동적이거나, 목적 의식이 없거나,
          사회의 틀에 맞지 않게 행동하는 사람들을 싫어하고 그러한 성격을 가진
          가족이나 친구를 말로 공격할 수도 있다. 하지만 젊어서 공격적인 성향을
          가졌던 ESTJ도 점차 나이가 들고 완숙해지면 결국 모든 사람들이 본인이
          생각하는 가치관에 맞게 행동하지 않는다는 사실을 알게 된다.
        </p>
        <p>
          따라서 공적 장소나 직장에서의 업무 처리가 아닌 이상, 타인의 사적인
          사항에 대해서 굳이 말을 꺼내지 않고 그냥 받아들이는 모습을 보이는
          경우가 많다. 실제로 성숙한 ESTJ들은 주변 사람들과의 원활한 관계와
          낭만도 중요하게 생각하는 편이다. 또한 사고(T)형들 중에서도 가장
          외향적이다.
        </p>
        <p>
          인간관계에는 주로 본인이 생각할 때에 필요한 인간관계나 도움이 되는
          관계라고 생각이 되는 관계만 유지하는 편이며, 필요없다고 생각하는
          에너지는 쓰려고 하지 않는 편이기 때문에 분명한 외향형이지만 내향형으로
          보이는 경우가 있다.
        </p>
        <p>
          현실적인 대책방안이 명확히 나지 않는 토론을 좋게 여기지 않는 편이며
          타인과의 의사소통에서도 명확한 결론이 나는 소통을 선호한다.
        </p>
        <p>
          많은 사람들과의 새로운 인간관계를 맺고 노는 것 보다는 새로운 지식을
          학습하거나 취미생활을 하나 더 배우는 것을 즐긴다.
        </p>
        <p>
          인간관계 소통방식은 주로 해결책을 먼저 제시하는 쪽이며, 감정에
          지나치게 치우쳐진 사람을 전혀 공감하지 못하는 경향이 있다. 사회적인
          성격이기 때문에 함께 지내다보면 맞춰서 리액션을 해주는 척을 하긴 하나
          굉장히 영혼이 없는 것이 티가 난다.
        </p>
        <p>
          E(외향형) 유형 치고는 상당히 독립적이고 혼자 자기계발을 하는 시간이
          대부분이다.
        </p>
        <p>
          외부에서의 모습과 내부에서의 모습이 완전 딴판이라 친해지고 나서 완전
          다른 모습에 충격을 먹는 사람도 적지 않다.
        </p>
        <p>
          이들도 사람이라 감정적으로 흔들릴 때도 있지만, 대부분 자신에게 그런
          감정들이 별 도움이 되지 않는다고 생각하여 무시하고 자신에게 주어진
          과업이나 자기계발을 행하는 데에 열중한다. 그러나 간혹 별것도 아닌 일에
          갑자기 감정이 격해지고 폭발할 때도 있다.
        </p>
      </Contents>
      <Title>Estj 궁합 </Title>
      <Contents>
        <p>천생연분 : ISFP, ISTP</p>
        <p>좋은관계 : ISFJ, ESFJ, ISTJ, ESTJ</p>
        <p>안맞아요 : INFP, ENFP, INFJ, ENFJ</p>
      </Contents>
      <Title>Estj 기능 </Title>
      <Contents>
        <p>주기능: Te 외향 사고 </p>
        <p>2차 기능 : Si 내향 감각 </p>
        <p>3차 기능: Ne 외향 직관 </p>
        <p>열등 기능 :Fi 내향 감정</p>{" "}
      </Contents>
    </Container>
  );
};

export default Estj;
