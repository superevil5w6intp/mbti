import React, { useEffect, useState } from "react";

const Braintest2 = () => {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();
  const [fifth, setFifth] = useState();
  const [Result, setResult] = useState();

  useEffect(() => {
    let total = 0;
    if (first === "a") {
      total = total + 3;
    }
    if (first === "b") {
      total = total + 5;
    }
    if (first === "c") {
      total = total + 1;
    }
    if (second === "a") {
      total = total + 5;
    }
    if (second === "b") {
      total = total + 3;
    }
    if (second === "c") {
      total = total + 1;
    }
    if (third === "a") {
      total = total + 3;
    }
    if (third === "b") {
      total = total + 5;
    }
    if (third === "c") {
      total = total + 1;
    }
    if (fourth === "a") {
      total = total + 5;
    }
    if (fourth === "b") {
      total = total + 1;
    }
    if (fourth === "c") {
      total = total + 3;
    }
    if (fifth === "a") {
      total = total + 1;
    }
    if (fifth === "b") {
      total = total + 5;
    }
    if (fifth === "c") {
      total = total + 3;
    }

    if (total >= 5 && total <= 9) {
      setResult("회사사장.");
    } else if (total >= 10 && total <= 14) {
      setResult("운동선수.");
    } else if (total >= 15 && total <= 20) {
      setResult("전업주부. 너 전업주부.");
    } else if (total >= 21 && total <= 25) {
      setResult("연예인.");
    }
  }, [first, second, third, fourth, fifth]);

  return (
    <div
      style={{
        margin: "50px 0",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <h3 style={{ color: "PaleVioletRed", backgroundColor: "white" }}>
        강쥐와 아침 산책을 나온 당신. 날마다 가던 길이 아닌 다른 길로 가보기로
        했다. 다음 질문에 대한 답을 선택하자. A ~ C 중에서 무엇을 골랐는지 잘
        기억해 둘 것!!!!!!!
      </h3>
      <form>
        <fieldset>
          <legend
            style={{
              backgroundColor: "PaleVioletRed",
              color: "#fff",
              padding: "3px 6px",
            }}
          >
            처음 보는 골목길로 들어갔다. 무엇이 보일까?
          </legend>

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan1"
            name="monster"
            value="a"
            onChange={(e) => setFirst(e.target.value)}
          />
          <label htmlFor="gangsan1">화려한 가게 간판</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan2"
            name="monster"
            value="b"
            onChange={(e) => setFirst(e.target.value)}
          />
          <label htmlFor="gangsan2">흰 뭉게구름</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan3"
            name="monster"
            value="c"
            onChange={(e) => setFirst(e.target.value)}
          />
          <label htmlFor="gangsan3">비싼 자전거</label>
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend
            style={{
              backgroundColor: "PaleVioletRed",
              color: "#fff",
              padding: "3px 6px",
            }}
          >
            공원을 지나가는데, 당신을 부르는 소리가 들린다. 누구일까?
          </legend>

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan4"
            name="monster"
            value="a"
            onChange={(e) => setSecond(e.target.value)}
          />
          <label htmlFor="gangsan4">학원친구</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan5"
            name="monster"
            value="b"
            onChange={(e) => setSecond(e.target.value)}
          />
          <label htmlFor="gangsan5">옆반 여학생</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan6"
            name="monster"
            value="c"
            onChange={(e) => setSecond(e.target.value)}
          />
          <label htmlFor="gangsan6">이웃집 아주머니</label>
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend
            style={{
              backgroundColor: "PaleVioletRed",
              color: "#fff",
              padding: "3px 6px",
            }}
          >
            당신을 부른 사람에게 선물을 받았다. 무엇일까?
          </legend>

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan7"
            name="monster"
            value="a"
            onChange={(e) => setThird(e.target.value)}
          />
          <label htmlFor="gangsan7">신제품 껌</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan8"
            name="monster"
            value="b"
            onChange={(e) => setThird(e.target.value)}
          />
          <label htmlFor="gangsan8">고오급 쿠키</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan9"
            name="monster"
            value="c"
            onChange={(e) => setThird(e.target.value)}
          />
          <label htmlFor="gangsan9">달콤짭쪼름한 전통 과자</label>
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend
            style={{
              backgroundColor: "PaleVioletRed",
              color: "#fff",
              padding: "3px 6px",
            }}
          >
            갑자기 강아지가 달리기 시작했다. 도착한 곳은 어디일까?
          </legend>

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan10"
            name="monster"
            value="a"
            onChange={(e) => setFourth(e.target.value)}
          />
          <label htmlFor="gangsan10">과자 가게</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan11"
            name="monster"
            value="b"
            onChange={(e) => setFourth(e.target.value)}
          />
          <label htmlFor="gangsan11">서점</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan12"
            name="monster"
            value="c"
            onChange={(e) => setFourth(e.target.value)}
          />
          <label htmlFor="gangsan12">옷 가게</label>
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend
            style={{
              backgroundColor: "PaleVioletRed",
              color: "#fff",
              padding: "3px 6px",
            }}
          >
            평소보다 늦게 집으로 돌아온 당신, 엄마가 남긴 메모를 발견했다.
            뭐라고 쓰여있었을까??????
          </legend>
          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan13"
            name="monster"
            value="a"
            onChange={(e) => setFourth(e.target.value)}
          />
          <label htmlFor="gangsan13">아침밤은 부엌에 있엉</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan14"
            name="monster"
            value="b"
            onChange={(e) => setFourth(e.target.value)}
          />
          <label htmlFor="gangsan14">쇼핑 다녀올겡</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="gangsan15"
            name="monster"
            value="c"
            onChange={(e) => setFourth(e.target.value)}
          />
          <label htmlFor="gangsan15">수고했엉</label>
        </fieldset>
      </form>
      <details>
        <summary>결과 확인은 열어서 {"><"}</summary>
        <div> {Result}</div>
      </details>
    </div>
  );
};

export default Braintest2;
