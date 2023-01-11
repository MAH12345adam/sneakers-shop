import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://62f3c731b81dba4a013baa5e.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://62f3c731b81dba4a013baa5e.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://62f3c731b81dba4a013baa5e.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://62f3c731b81dba4a013baa5e.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://62f3c731b81dba4a013baa5e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://62f3c731b81dba4a013baa5e.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://62f3c731b81dba4a013baa5e.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart
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
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          exact
          element={
            <Favorites
              onAddToFavorite={onAddToFavorite}
              favorites={favorites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
