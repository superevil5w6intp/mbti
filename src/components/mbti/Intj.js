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
      <details>
        <summary>
          <Title>Intj 특</Title>
        </summary>

        <Contents>
          <p>결정에 신중한 편이며 긴 시간이 필요함.</p>
          <p>
            결론을 내릴 때는 불완전한 직감이나 억지스러운 가정이 아닌 분석과
            연구에 근거함.
          </p>{" "}
          <p>
            새로운 질문을 받으면 신중히 조사하고 고려하는 데 시간을 쏟는 경향이
            있음.{" "}
          </p>
          <p>
            기대에 미치지 못하는 사람에게는 무안할 정도로 단호함. 외부적인
            시선에서 보면 이러한 성격을 가진 사람들은 거만해 보이지만, 이들은
            단지 결단력이 있을 뿐이라고 주장함.
          </p>
          <p>
            자신의 강점이 독창성임을 알고 이를 살려줄 자유로운 분위기를 요구할
            수 있음.
          </p>
          <p>
            극심한 스트레스를 경험한 경우 열등 기능인 외향 감각(Se)에 지배될 수
            있음. 폭식을 하거나 막대한 돈을 쓰는 등 충동성과 무모함이 심해짐.
          </p>
        </Contents>
      </details>
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
