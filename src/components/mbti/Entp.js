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
      content: "😈 ";
    }
  }
`;

const Entp = () => {
  return (
    <Container>
      <Title>Entp 특</Title>
      <Contents>
        <p>대개 다재다능하며 토론가적 기질이 강하다.</p>
        <p>외향형이지만 혼자만의 시간도 많이 필요로 하며 중요하게 여긴다.</p>
        <p>
          MBTI에서 내향형(I)을 제외한 외향형(E) 타입들 중에서는 내성적인 성향이
          가장 큰 편이다. 타 외향형이 보기에 대인 교류에 그다지 적극적이지 않은
          ENTP유형이 드물지 않게 관찰되곤 한다. 따라서 교류가 적은 지인들이
          보기에는 내향형(I)으로 착각하는 경우가 많다.
        </p>
        <p>알고만 지내는 사이와 친한 사이의 선을 확실하게 긋는다.</p>
        <p>
          주기능인 Ne(외향 직관)으로 인해 두뇌 회전이 빠르며 사안에 대한
          직관력을 발휘해 대략적인 이해가 뛰어나다.
        </p>
        <p>
          이들이 내면의 상처를 갖고 있을 경우, 이를 드러내지 않으려 '강한
          자신'을 연기한다.
        </p>
        <p>말하거나 글 쓰는 재능이 있는 경우가 많다.</p>
        <p>
          복잡한 문제의 지름길을 발견하는 것에 능하다. 별개의 것을 연결하는 등
          통찰력과 창의력이 뛰어난 유형.
        </p>
        <p>
          상담과 조언을 요구할 때에는 단순히 상대방의 의견이 궁금해서일 뿐이다.
        </p>
        <p>평소 자신감이 넘치지만, 남에겐 자아도취로 보여지는 경우가 많다.</p>
        <p>
          때로는 3차기능인 Fe(외향감정)을 사용하여 친절한 모습과 협력적인 모습을
          보일수있으며 평균, 조화를 추구할수도 있다.
        </p>
        <p>넉살이 좋고 자기애가 강하다.</p>
        <p>즉흥적이고 유연하며, 순발력이 뛰어나다.</p>
        <p>상상력, 창의력, 사고의 유연성이 뛰어나다.</p>
        <p>개방적이고 자유를 추구하며, 억압당하는 것을 견디지 못한다.</p>
        <p>모험심이 강하며, 위험을 감수해서라도 새로운 시도를 하기도 한다.</p>
        <p>여행을 좋아한다.</p>
      </Contents>
      <Title>Entp 궁합 </Title>
      <Contents>
        <p>쵝오!!!: INFJ, INTJ</p>

        <p>좋은 궁합 : INFP, ENFP, ENFJ, ENTJ, INTP, ENTP</p>

        <p>그저 그런 궁합 : ISFP, ESFP, ISTP, ESTP</p>

        <p>별로 좋지 않은 궁합 : ISFJ, ESFJ, ISTJ, ESTJ</p>
      </Contents>
      <Title>Entp 기능 </Title>
      <Contents>
        <p>주기능: Ne 외향 직관 </p>
        <p>2차 기능 : Ti 내향 사고</p>
        <p>3차 기능: Fe 외향 감정 </p>
        <p>열등 기능 :Si 내향 감각 </p>
      </Contents>
    </Container>
  );
};

export default Entp;
