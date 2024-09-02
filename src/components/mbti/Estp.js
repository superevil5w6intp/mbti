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
      content: "😎 ";
    }
  }
`;
const Estp = () => {
  return (
    <Container>
      <details>
        <summary>
          <Title>Estp 특</Title>
        </summary>
        <Contents>
          <p>내기를 좋아한다. </p>
          <p>삶을 즐기며 산다. </p>
          <p>스릴을 좋아한다. </p>
          <p>MBA에서 흔히 볼 수 있다.</p>
          <p>
            매우 빠르게 생각과 행동을 하고 현실적이기 때문에 감정적이거나
            우유부단한 사람에 대해 답답해 하는 경향이 있다.
          </p>
          <p>
            주기능인 Se(외향 감각)과 부기능인 Ti(내향 사고)의 연상 작용으로
            인하여 모든 유형 중 감각적인 성향이 가장 강하다.
          </p>
          <p>
            ISTP와 더불어 창작물에서 Badass기믹으로 가장 빈번하게 나오는 성격
            유형 중 하나이다.
          </p>
          <p>무대의 중심에 서는 것과 관심을 즐긴다.</p>
          <p>
            타고난 해결사로써 문제를 해결하는 능력이 타의 추종을 불허한다.
            그러나 타고난 말썽꾸러기로써 문제를 유발하는 능력 또한 타의 추종을
            불허한다.
          </p>
          <p>
            MBTI 유형별 평균 소득 수준을 조사한 결과, ENTJ(1위), ESTJ(2위),
            ENTP(3위)에 이어 4위를 차지하였다. (평균 연봉 53,275$)
          </p>
          <p>
            흔히 오감이라고 부르는 시각, 청각, 후각, 미각, 촉각의 신경이 전부
            예민하게 잘 발달되어 있어 이를 통한 촉이 정말 좋다.
          </p>
          <p>
            위와 이어지는 맥락으로, 특히 시각적 정보를 예민하게 잘 받아들이는
            동시에 Ti(내향 사고)가 부기능으로 작용하기 때문에 관찰력이 정말
            뛰어나다. 다른 유형들은 미처 알아차리지 못하고 그냥 넘어갈 법한
            타인의 행동 변화나 옷차림의 변화, 또는 미세한 표정 변화 등을 곧 잘
            포착하고 이를 통해 상대방의 숨은 의도나 감정을 파악해내는 재주가
            있으며 사람이나 사물을 관찰할 때에는 선입견이나 편견을 씌우지 않고
            있는 그대로 바라보며 분석한다. 이와 같은 특성은 주로 이들의 내부에서
            이루어지기 때문에 대부분 겉으로는 잘 드러나지 않는다.
          </p>
          <p>
            미래지향적인 생각을 잘 하지 않고 현재지향적인 생각을 많이 한다.
            언제나 인생에서 현재, 바로 지금 이 찰나의 순간순간마다를 가장 중요한
            시점으로 여긴다.
          </p>
          <p>
            언제나 사전의 이론 공부보다는 상황에 직접 뛰어들어 체험을 통해
            경험하는 것을 더 선호하는 활동적인 성격이다. 인터넷의 커뮤니티
            공간에서는 가장 만나기 어려운 유형이며 야외의 공간(특히 활동할거리나
            즐길거리가 존재하는 곳)에서 가장 만나기 쉬운 유형이다.
          </p>
          <p>
            대학수학능력시험 표본 평균 점수는 문과로 지원하는 것이 압도적으로
            유리한 것으로 나타났다.
          </p>
          <p>
            xSxP 중에 수학 성적(학업성취도)이 안 좋은 사람들은 ‘학습목표를
            장기와 단기로 나누어 꾸준히 실천하는 전략’이 필요하다.
          </p>
          <p>대학교 평균 학점이 가장 낮다.</p>
        </Contents>
      </details>
      <Title>Estp 궁합 </Title>
      <Contents>
        <p>굳 : ♥ ISFJ, ISTJ ♥</p>
        <p>문나무난쓰 : INTJ, ENTJ, INTP, ENTP</p>
        <p>원수 : INFP, ENFP, INFJ, ENFJ </p>
      </Contents>
      <Title>Estp 기능 </Title>
      <Contents>
        <p>주기능: Se 외향 감각 </p>
        <p>2차 기능 : Ti 내향 사고 </p>
        <p>3차 기능: Fe 외향 감정</p>
        <p>열등 기능 :Ni 내향 직관</p>{" "}
      </Contents>
    </Container>
  );
};

export default Estp;
