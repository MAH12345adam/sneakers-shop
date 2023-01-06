import React from "react";
import styles from "./Card.module.scss";

const Card = ({ onFavorite, onPlus, img, price, title }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    if (!isAdded) onPlus({ img, price, title });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/images/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={img} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          onClick={onClickPlus}
          className={styles.plus}
          src={isAdded ? "/images/btn-cheked.svg" : "/images/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
};

export default Card;
