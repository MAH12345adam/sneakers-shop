import Cart from "./components/Cart";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers d-flex ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
