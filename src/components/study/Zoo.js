import React from "react";
import { useState } from "react";
import 앵무 from "../../assets/앵무.png";
import 떼껄룩 from "../../assets/떼껄룩.png";
import d0g from "../../assets/d0g.png";
import { useEffect } from "react";

const Zoo = () => {
  const [x, setX] = useState("");
  const [imagesource, setImagesource] = useState("");

  function image() {
    switch (x) {
      case "dog":
        setImagesource(d0g);
        break;
      case "cat":
        setImagesource(떼껄룩);
        break;
      case "parrot":
        setImagesource(앵무);
        break;
    }
  }

  useEffect(() => {
    image();
  }, [x]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
      }}
    >
      <select
        name="pets"
        id="pet-select"
        value={x}
        onChange={(e) => setX(e.target.value)}
        style={{ height: "50px", marginBottom: "20px" }}
      >
        <option value="">동물 골ㄹ라줘잉</option>
        <option value="dog">dangdand</option>
        <option value="cat">takealook</option>
        <option value="parrot">bird</option>
      </select>
      <img src={imagesource} />
    </div>
  );
};

export default Zoo;
