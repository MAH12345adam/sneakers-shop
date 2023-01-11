import React from "react";
import styles from "./Card.module.scss";

const Card = ({
  id,
  onFavorite,
  onPlus,
  img,
  price,
  title,
  favorited = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ img, price, title });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, img, price, title });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/images/liked.svg" : "/images/unliked.svg"}
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={img} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
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
