import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/images/heart-unliked.svg" alt="unliked" />
      </div>
      <img
        width={133}
        height={112}
        src="/images/sneakers/1.jpg"
        alt="sneakers"
      />
      <h5>
        Мужские Кроссовки <br /> Nike Blazer Mid Suede
      </h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 000</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
