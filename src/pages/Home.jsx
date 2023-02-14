import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Home = ({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onAddToFavorite,
}) => {
  const { isLoading } = React.useContext(AppContext);

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        {...item}
      />
    ));
  };
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
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
