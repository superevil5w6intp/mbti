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
      content: "𓁔 ";
    }
  }
`;
const Esfj = () => {
  return (
    <Container>
      <Title>Esfj 특</Title>
      <Contents>
        <p>스트레스를 받으면 누군가를 만나야 한다.</p>
        <p>
          강의나 다소 진지한 대화 등 이해가 필요한 말이 오갈 경우, 내용을
          이해했는지와 무관하게 고개를 많이 끄덕인다.
        </p>
        <p>모든 MBTI 유형 중에서 ESFP와 함께 외향성이 가장 강하다.</p>
        <p>
          ESFP와 달리 즐거움을 추구하지 않는 편이다. 사교성은 매우 뛰어나지만,
          노는 것은 별로 좋아하지 않는다.
        </p>
        <p>참을성이 많고 타인을 잘 돕는다.</p>
        <p>
          남에게 동조하는 경향이 뛰어나며 사람들과의 상호 활동에서 기력이
          생긴다.
        </p>
        <p>원칙주의자이다.</p>
        <p>기브&테이크를 중요시한다.</p>
        <p>타인의 인정을 받는 것에 아주 민감하다.</p>
        <p>
          변화를 싫어하는 편이며, 좋은 음식을 좋아하고, 재물을 모으는 것을
          즐긴다.
        </p>
        <p>
          INTP에 주로 많이 끌리며 매우 높은 관심과 애정을 가진 경우가 많다. 외국
          커뮤니티 설문조사에서 ESFJ가 좋아하는 유형 1위로 INTP가 뽑혔다.
        </p>
        <p>조화와 균형을 중요시한다.</p>
        <p>집단의 일이나 목적을 개인의 이익보다 앞세운다.</p>
        <p>관계에서 중재자 역할을 자처한다.</p>
        <p>명확하고 활발한 칭찬표현이 없을 시 실망하는 경향이 있다.</p>
        <p>1대 1보다는 다수 속에 있는 것을 좋아한다.</p>
        <p>
          치어리더나 풋볼의 쿼터백 같은 팀의 사기를 불어넣는 역할을 하기도 한다.{" "}
        </p>
        <p>여러 사람들의 스포트라이트를 받는 것을 즐긴다. </p>
        <p>국제 정치나 과학 이론과 같은 주제에는 관심이 없다.</p>
        <p>
          남들 챙기는 것을 좋아한다. 좋아하는 편에 속하지만 챙겨야 하는 책임감
          때문에 어쩔 수 없이 챙길 때도 많다.
        </p>
        <p>단순한 성격으로 복잡한 세상을 편하게 살아간다.</p>
        <p>자기 주장이 강하지는 않다.</p>
        <p>
          공감 능력이 좋다. 하지만 진심으로 공감되지 않더라도 적당히 상대방의
          기분에 맞춰주는 '가식적인' 공감도 잘 해준다.
        </p>
        <p>
          윗 글처럼 처음에는 공감되지 않던 타인의 주장을 들으며 가식적인 공감을
          하다가도 '오, 이 말도 일리가 있는데?' 하며 설득 당하는 경우도 잦다.
        </p>
        <p>가시적으로 증명되지 않은 개념을 잘 받아들이지 못한다.</p>
        <p>
          행동보다 말이 앞선다거나 뜬구름 잡는 소리를 하는 것을 한심하게
          생각하지만 겉으로는 잘 받아준다.
        </p>
      </Contents>
      <Title>Esfj 궁합 </Title>
      <Contents>
        <p>최고 : ISFP, ISTP</p>
        <p>낫베드 : ISFJ, ESFJ, ISTJ, ESTJ</p>
        <p>최악 : INFP, ENFP, INFJ, ENFJ</p>
      </Contents>
      <Title>Esfj 기능 </Title>
      <Contents>
        <p>주기능: Fe 외향 감정 </p>
        <p>2차 기능 : Si 내향 감각 </p>
        <p>3차 기능: Ne 외향 직관</p>
        <p>열등 기능 :Ti 내향 사고</p>{" "}
      </Contents>
    </Container>
  );
};

export default Esfj;
