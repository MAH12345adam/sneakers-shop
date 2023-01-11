import React from "react";
import Card from "../components/Card";

const Favorites = ({ favorites, onAddToFavorite }) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="h1">Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
