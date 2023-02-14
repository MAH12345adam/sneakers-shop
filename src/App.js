import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const CartResponse = await axios.get(
        "https://62f3c731b81dba4a013baa5e.mockapi.io/cart"
      );
      const FavoriteResponse = await axios.get(
        "https://62f3c731b81dba4a013baa5e.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://62f3c731b81dba4a013baa5e.mockapi.io/items"
      );
      setIsLoading(false);
      setCartItems(CartResponse.data);
      setFavorites(FavoriteResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://62f3c731b81dba4a013baa5e.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://62f3c731b81dba4a013baa5e.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://62f3c731b81dba4a013baa5e.mockapi.io/cart/${id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://62f3c731b81dba4a013baa5e.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://62f3c731b81dba4a013baa5e.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        cartItems,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        isLoading,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Cart
            setCartItems={setCartItems}
            onRemove={(id) => onRemoveToCart(id)}
            cartItems={cartItems}
            onCloseCart={() => setCartOpened(false)}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
              />
            }
          />
          <Route path="/favorites" exact element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
