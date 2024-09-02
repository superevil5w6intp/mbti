import React, { useEffect, useState } from "react";

const Braintest = () => {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [result, setresult] = useState();

  useEffect(() => {
    if (first === "좌" && second === "좌") {
      setresult("꼼꼼하고 착실한 타입");
    } else if (first === "좌" && second === "우") {
      setresult("옵빠 눈나 타입");
    } else if (first === "우" && second === "좌") {
      setresult("감상적이나 승부욕에 강한 타입");
    } else if (first === "우" && second === "우") {
      setresult("낙천적인 마이페이스 타입");
    } else {
      setresult("얼릉골라");
    }
  }, [first, second]);
  

  return (
    <div
      style={{
        margin: "50px 0",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <form>
        <fieldset>
          <legend
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "3px 6px",
            }}
          >
            자연스럽게 깍지를 꼈을 때, 어떤 손의 엄지손가락이 밑에 있는가? 왼/오
          </legend>

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="kraken"
            name="monster"
            value="좌"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
          <label htmlFor="kraken">왼쪽</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="sasquatch"
            name="monster"
            value="우"
            onChange={(e) => setFirst(e.target.value)}
          />
          <label htmlFor="sasquatch">오른쪽</label>
        </fieldset>
      </form>
      <form>
        <fieldset>
          <legend
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "3px 6px",
            }}
          >
            팔짱을 꼈을 때, 어느쪽 팔이 밑에 위치하는가?
          </legend>

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="kraken"
            name="monster"
            value={"좌"}
            onChange={(e) => setSecond(e.target.value)}
          />
          <label htmlFor="kraken">왼쪽</label>
          <br />

          <input
            style={{ margin: "0.4rem" }}
            type="radio"
            id="sasquatch"
            name="monster"
            value={"우"}
            onChange={(e) => setSecond(e.target.value)}
          />
          <label htmlFor="sasquatch">오른쪽</label>
        </fieldset>
      </form>

      <details>
        <summary>결과 확인은 열어서^^~!</summary>
        <div>{result}</div>
      </details>
    </div>
  );
};

export default Braintest;
