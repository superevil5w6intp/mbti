import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Bigtext = styled.div`
  font-size: 25.92px;
  margin-bottom: 20px;
  padding: 0 20px;
  font-family: "MaplestoryOTFBold";
`;

const Texts = styled.div`
  font-size: 14.4px;
  line-height: 1.5;
  padding: 0 20px;
  font-family: "Pretendard-Regular";
`;

const Mbw = () => {
  return (
    <Container>
      <Bigtext>곰벌레란?</Bigtext>
      <Texts>
        완보동물(Tardigrada)에 속하는 생물의 총칭. 절지동물계와 연관이 있다.
        지금으로보터 5억 3000만 년 전인 캄브리아기에 출현한 것으로 알려져 있다.
        몸길이는 성체의 경우 작은 것은 0.1mm가 채 되지 않으며 (단세포 생물인
        아메바와 짚신벌레도 그보단 크다) 가장 큰 것도 1.5mm가량일정도로 작다.
        느리게 걷는 모습이 곰이 천천히 걷는 모습을 연상시켜 곰벌레라는 이름을
        얻았다.{" "}
      </Texts>
    </Container>
  );
};
export default Mbw;
