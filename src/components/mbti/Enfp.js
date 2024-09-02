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
      content: "🤡 ";
    }
  }
`;
const Enfp = () => {
  return (
    <Container>
      <details>
        <summary>
          <Title>Enfp 특</Title>
        </summary>
        <Contents>
          <p>감정이 얼굴에 잘 드러난다.</p>
          <p>인정을 받으려는 욕구가 강하고 타인의 시선에 민감하다.</p>
          <p>관심 받기를 원하며 생각이 많고 예민하다.</p>
          <p>새로운 시도를 좋아한다.</p>
          <p>계획하기보다는 그때그때 일을 처리하는 편이다.</p>
          <p>새로운 사람 만나기를 좋아한다.</p>
          <p>감동을 잘하고 눈물도 잘 흘린다.</p>
          <p>경제 관념이 희박하여 돈을 모으기는 힘들다.</p>
          <p>작은 일에도 감정의 기복이 심하다.</p>
          <p>
            내면은 소심하여 자주 삐친다. 그러나 삐치더라도 몇 시간 후면 다시
            원래대로 돌아온다.
          </p>
          <p>
            Ne(외향 직관)가 강하기 때문에 상황을 깊게 분석하는 능력은 떨어지는
            편이지만, 반비례로 상황을 정말 쉴 틈없이 파악하려는 성질이 약점을
            보완하기 때문에 종합적으로는 상대적으로 눈치가 있는 편에 속하고 당장
            직관적으로 드러나는 분위기 파악은 빠른 경향이 있다.
          </p>
          <p>
            상대방의 말에 굉장히 민감하나, 겉으로는 기분이 나쁘지 않은 척한다.
          </p>
          <p>내면에 열정을 지녔다.</p>
          <p>위기 대처능력이 뛰어나다.</p>
          <p>사람을 기쁘게 해주는 능력이 있다.</p>
          <p>사람을 쉽게 밀쳐내지 못한다.</p>
        </Contents>
      </details>{" "}
      <Title>Enfp 궁합 </Title>
      <Contents>
        <p>최고 궁합 : Intj, Istj</p>
        <p>최악 궁합 : Intp, Entp, Istp, Estp</p>
      </Contents>
      <Title>Enfp 기능 </Title>
      <Contents>
        <p>주기능: Ne 외향 직관 </p>
        <p>2차 기능 : Fi 내향 감정 </p>
        <p>3차 기능: Te 외향 사고</p>
        <p>열등 기능 :Si 내향 감각</p>{" "}
      </Contents>
    </Container>
  );
};

export default Enfp;
