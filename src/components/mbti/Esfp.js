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
      content: "🥳 ";
    }
  }
`;
const Esfp = () => {
  return (
    <Container>
      <Title>Esfp 특</Title>
      <Contents>
        <p>
          Se(외향 감각)이 주기능이라서 예민한 신경으로 인한 오감 발달과 인지
          능력이 발달되어 있다.
        </p>
        <p>신나고 재미있는 성격으로 분위기 메이커의 역할을 한다.</p>
        <p>모든 MBTI 유형 중 외향 성향이 ESFJ와 함께 가장 강한 편이다.</p>
        <p>
          천성적으로 친화력이 높고 사교적인 성격으로, 사람들과 쉽게 친해진다.
          특유의 사교성덕에 사람에 대한 데이터가 잘 쌓이며 이러한 경험치 덕에
          사람에 대한 통찰력이 있는 편이다.
        </p>
        <p>인생을 하루하루 즐겁게 살려고 한다.</p>
        <p>
          예전의 일도 쉽게 잊고 잘 털어내는 편이며, 예전 일을 들먹이며 뒤끝이 긴
          사람들을 불편해하는 편이다.
        </p>
        <p>건망증이 있는 편이다.</p>
        <p>타인을 기쁘게 해 줄 깜짝쇼를 준비하면서 즐거워한다.</p>
        <p>
          내 자신의 이야기를 솔직하게 상대방을 가리지 않고 잘 털어놓는 편이다.
        </p>
        <p>통상 책임감이 막중한 일의 경우 잘 하지 않고 회피하려고 한다.</p>
        <p>
          발등에 불이 떨어져야 행동에 옮기지만 중요한 사항에 대해서는 즉시
          처리하는 편이다.
        </p>
        <p>좋고 싫은 사람이 분명하다.</p>
        <p>정이 많고 사람들을 좋아한다.</p>
        <p>
          정이 많은 이유 때문인지 거절을 잘 못한다. 하지만 경우에 따라 아주
          냉정하게 행동하기도 한다.
        </p>
        <p>잘 먹고, 잘 자고, 생각이 단순하다. 고민하다가 그냥 잠든다.</p>
        <p>안읽씹을 잘한다.</p>
        <p>혼자 있는 것을 힘들어한다.</p>
        <p>조직생활보다는 자유로울 때 능력을 발휘한다.</p>
        <p>하고 싶은 말은 많은데 정작 하고 싶은 말은 못한다.</p>
        <p>
          말 자체는 많이 하는데 질은 떨어지는 편이다. 말에 임팩트가 없고 체계적,
          논리적이지 못한 것도 있다.
        </p>
        <p>이야기할 때 요점과 더불어 부연 설명을 많이 덧붙인다.</p>
      </Contents>
      <Title>Esfp 궁합 </Title>
      <Contents>
        <p>최고 : ISFJ, ISTJ</p>
        <p>낫베드 : 없습니다.</p>
        <p>최악 : INFP, ENFP, INFJ, ENFJ</p>
      </Contents>
      <Title>Esfp 기능 </Title>
      <Contents>
        <p>주기능: Se 외향 감각 </p>
        <p>2차 기능 : Fi 내향 감정 </p>
        <p>3차 기능: Te 외향 사고</p>
        <p>열등 기능 :Ni 내향 직관</p>{" "}
      </Contents>
    </Container>
  );
};

export default Esfp;
