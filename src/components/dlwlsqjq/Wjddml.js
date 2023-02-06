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

const Wjddml = () => {
  return (
    <Container>
      <Bigtext>이진법 / 二進法 / binary</Bigtext>
      <Texts>
        <p>
          2진법은 0과 1이라는 두 개의 숫자만을 사용하여 수를 나타내는 진법을
          말한다. 미적분학의 창시자이기도 한 고트프리트 빌헬름 라이프니츠가
          고안하였다.
        </p>

        <p>
          인간은 10개의 손가락을 각각의 객체로 인지하여 펴지거나 접힌 것을 세는
          셈법을 주로 써왔기에 오래 전부터 10진법을 사용해 왔지만, 전자기기의
          경우는 신호를 특정 순서로 그룹화 하여 인지하기에 해당 신호가
          켜졌는지(1), 꺼졌는지(0)를 구별하기 때문에[1] 2진법을 기반으로
          발전하였다.
        </p>

        <p>
          예시로 들자면, 인간은 손가락이 몇 개 펴져있는지, 혹은 접혀있는지를
          센다면, 기계는 손가락에 특정 순서를 할당하여 몇 번째 손가락이 펴지고
          접혔는지를 파악하여 그것을 숫자로 인식하는 식이다. 그래서 손가락 5개로
          사람은 0부터 5까지 세지만, 기계는 0부터 25-1=31까지 셀 수 있으며,
          검지, 중지, 약지, 새끼를 펴고 엄지만 굽힌다면 사람은 '4'라고
          인식하겠지만 기계는 23+22+21+20=15로 인식할 것이다. 이론상 열
          손가락으로 0부터 1023까지 셀 수 있다.[2]
        </p>
      </Texts>
    </Container>
  );
};

export default Wjddml;
