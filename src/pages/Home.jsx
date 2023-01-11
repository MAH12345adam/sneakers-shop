import React from "react";
import Card from "../components/Card";

const Home = ({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onAddToFavorite,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="h1">{searchValue ? searchValue : "Все кроссовки"}</h1>
        <div className="search-block d-flex align-center">
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="cu-p clear"
              src="/images/btn-remove.svg"
              alt="clear"
            />
          )}
          <img src="/images/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.id}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
