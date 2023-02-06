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
  padding: 0 20px;
  margin-bottom: 20px;
  font-family: "MaplestoryOTFBold";
`;

const Texts = styled.div`
  font-size: 14.4px;
  padding: 0 20px;
  line-height: 1.5;
  font-family: "Pretendard-Regular";
`;

const Mbt = () => {
  return (
    <Container>
      <Bigtext>곰벌레 생존력!!!!!!!!!!!!!!!!</Bigtext>
      <Texts>
        {" "}
        완보동물이 과학자들 사이에 주목을 받고 있는 점 중 하나가 완보동물이
        가지고 있는 갓청난 킹존능력이다. 수명은 완보동물 내에서도 종에 따라
        다른데, 보통 3달에서 2년정도 된다. 다만 환경이 안 좋을 때에는 일종의
        휴면 상태 혹은 가사 상태에 빠져 버틸 수 있는데, 신진대사율을 1만분의
        1까지 저하시켜 오랜 시간 살아남을 수 있다. 휴면 상태로부터 소생한 최장
        기간은 공식적으로 10여년 가까이 되나 냉동 상태나 무산소 상태라면 보존
        기간은 증가할 수 있다.{" "}
      </Texts>
    </Container>
  );
};
// TODO :: 링크!

export default Mbt;
