import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 5px;
  }
`;

const Bigtext = styled.div`
  font-size: 25.92px;
  margin-bottom: 20px;
  flex-shrink: 0;
  padding: 0 20px;
  font-family: "MaplestoryOTFBold";
`;

const Texts = styled.div`
  font-size: 14.4px;
  line-height: 1.5;
  font-family: "Pretendard-Regular";
  margin: 20px 0;
  padding: 0 20px;
  flex-shrink: 0;
  & > p {
    :first-child {
      margin-top: 0;
    }
    margin: 10px 0;
  }
`;

const Qjd = () => {
  return (
    <Container>
      <Bigtext>모스부호 정의</Bigtext>
      <Texts>
        {" "}
        <p>
          새뮤얼 핀리 브리즈 모스(Samuel Finley Breese Morse, 1791 ~ 1872)가
          고안하여 1844년에 완성한 전신 기호로, 짧은 발신 전류와 긴 발신
          전류만을 가지고 전신부호를 구성하여 문장을 구성하여 전신기를 통해
          전송할 수 있게 하였다. 통신기술이 발달한 지금에도 가장 기초적인
          비상통신수단으로서 사용하기도 한다. 지금까지 라틴 문자(유럽 대륙이나
          베트남어 등의 diacritic 포함), 한글, 한자, 주음부호, 카타카나, 현대
          키릴 문자, 그리스 문자, 히브리 문자, 아랍 문자, 페르시아 문자, 태국
          문자로 이루어진 모스 부호 체계가 있다.
        </p>
        <p>
          {" "}
          보통 짧은 발신 전류를 점(·), 3단점 정도의 긴 발신 전류를 선(―)으로
          구분하여 표기한다. 영어로는 각각 dit과 dah로 읽는다. 한국과 북한에서는
          점을 '돈(톤[トン])', 선을 '쓰(츠[ツー])'라고 읽는데, 일본에서 쓰던
          말을 그대로 가져온 것이다. 짧은 발신신호 하나 보낼 정도의 시간을
          1단점이라 해서 시간기호로 사용한다. 문장의 구성은 점 1개나 선 사이에는
          1단점 길이로 간격을 가지고, 영어를 모스 부호로 표기할 경우 단어마다
          7단점 길이의 간격을 두고 표시하며,한글을 모스 부호로 표기하려 할 경우
          음운와 음운 사이에 5단점 간격을 둔다. 각 글자에 대한 부호 지정은 가장
          많이 사용되는 글자(영어 e, 한글 ㅏ)를 가장 짧은 부호(.)로 정하여
          타전하기 쉽도록 한다.
        </p>
        <p>
          SOS 신호는 · · ·- - - · · · (돈돈돈 쯔쯔쯔 돈돈돈)이다. 모스 부호로
          입력하는 방법은 짧게 세번, 길게 세번, 다시 짧게 세번으로 알면 된다.
          영화 엑시트에서는 영화 중후반 내내 "따따따 따 따 따 따따따"로
          등장하는데 이게 바로 SOS 모스 부호다. OSO로 보내지더라도 수신자가
          의도를 파악한다면 상관없지만, SOS · · · - - - · · ·와 OSO - - - · · ·
          - - - 가 헷갈린다면 SOS를 보내야 하는 급박한 순간에 조금이라도 더 빨리
          쳐야 한다는 식으로 유념해 두자. HAM(아마추어 무선 통신)에서 SOS(조난
          신호: 중대하고 급박한 위험에 처해 있을 때)와 OSO(비상 통신: 천재지변
          등으로 유선 통신을 사용할 수 없을 때)는 뜻이 약간 다르지만 어찌되었든
          간에 위급상황이라는 의미는 똑같다.
        </p>
      </Texts>
    </Container>
  );
};

export default Qjd;
