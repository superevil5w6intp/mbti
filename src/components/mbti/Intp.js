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
      content: "☠️ ";
    }
  }
`;

const Intp = () => {
  return (
    <Container>
      <Title>Intp 특</Title>

      <Contents>
        <p>책, 논문 등 간접경험을 인생에 적극적으로 활용한다.</p>
        <p>높은 직관력으로 통찰하는 재능과 지적 호기심이 많다.</p>
        <p>
          사교적인 부분에선 말을 꺼내는 걸 어려워한다. 친해지기 어려워서 그렇지
          친해지고 나면 유머감각이 뛰어나고 인싸와 구별할 수 없다.
        </p>
        <p>
          굉장한 강강약약이다. 해하려는 자에게는 상대보다 강하게 나가고 절대
          지지 않는다. 호의적인 사람에겐 세상에서 가장 친절하다. 뒤끝이 없고
          앞에서나 뒤에서나 똑같다.
        </p>
        <p>
          정서를 밖으로 좀처럼 표현하지 않으므로 친해지기 전에는 마음속을
          이해하기 어렵다.
        </p>
        <p>기분이나 감정도 생각을 통해서 느낀다.</p>
        <p>지적이고 추상적이며 설명이 이론적이다.</p>
        <p>스스로에 대해 가장 엄격하다. 타인에게 오히려 너그럽다.</p>
        <p>
          생각의 비약이 심해 보이지만 막상 까보면 다 흐름이 있고 이유가 있다.
          대부분 사람에게는 매우 빠른 속도의 논리라서 따라잡기 힘들 수 있다.
        </p>
        <p>
          타인에게 별로 관심이 없다. 관심이 있어도 표현을 절제하니 겉으로는 같아
          보인다.
        </p>
        <p>
          생각은 창의적인데 결과보다 과정을 중시하는 성향이라 불건강할 경우
          실천이 다소 부족할 수 있다.
        </p>
        <p>
          조직이나 단계, 계통 등에 적응하기 어려워한다. 적응하고 싶어하지도
          않는다.
        </p>
        <p>뻔한 이야기나 서론이 긴 것을 참기 어려워한다.</p>
        <p>주관이 뚜렷하고 생각이 합리적이다.</p>
        <p>꼭 필요한 것 아니면 잊어버려 건망증이 있다.</p>
        <p>추리소설을 좋아한다.</p>
        <p>
          의례식 외에 친목모임에는 의외로 끼는 것을 좋아한다. 하지만 막상 끼면
          즐겁다고 느끼지만 후에는 허무를 느낀다.
        </p>
        <p>친한 친구라도 일 없으면 연락을 잘 하지 않는다.</p>
        <p>아이디어 속에 빠져 있을 때가 많다.</p>
        <p>
          사회성 좋은 남들을 관찰하며 사회성을 학습하는 편이다. 스스로
          우러나오진 않는다.
        </p>
        <p>
          비논리적인 의견을 잘 수긍하지 않으나 논리적으로 맞다고 생각되면 본인을
          향한 비난까지도 수긍한다.
        </p>
        <p>타인의 비판에 대해 개방적이며 입체적으로 사고한다.</p>
        <p>톡톡 튀는 엉뚱함과 특이한 유머감각이 있다.</p>
        <p>이과에 속하는 사람들이 많으며 대체로 과학에 큰 관심을 보인다.</p>
        <p>특정 분야에, 특히 한가지 학문에 특출난 천재, 영재, 수재들이 많다.</p>
        <p>
          거짓말이나 꼼수를 잘 눈치챈다. 사람 심리를 꿰뚫어본다. 다만 그것에
          대해 책망하거나 돌려묻지는 않는다.
        </p>
      </Contents>
      <Title>Intp 궁합 </Title>

      <Contents>
        <p>최고 궁합 : ENTJ, ESTJ</p>
        <p>좋은 궁합 : INFP, ENFP, INFJ, ENFJ, INTJ, ENTP</p>
        <p>나쁜 궁합 : ISFJ, ESFJ, ISTJ</p>
        <p>최악 궁합 : 없음</p>{" "}
      </Contents>
      <Title>Intp 기능 </Title>
      <Contents>
        <p>주기능: Ti 내향 사고</p>
        <p>2차 기능 : Ne 외향 직관</p>
        <p>3차 기능: Si 내향 감각</p>
        <p>열등 기능 : Fe 외향 감정</p>
      </Contents>
    </Container>
  );
};

export default Intp;
