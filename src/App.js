function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="../images/logo.png" alt="logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="../images/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="../images/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 mb-40>Все кроссовки</h1>

        <div className="sneakers d-flex ">
        <div className="card">
          <img
            width={133}
            height={112}
            src="../images/sneakers/1.jpg"
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
              <img width={11} height={11} src="../images/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={112}
            src="../images/sneakers/1.jpg"
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
              <img width={11} height={11} src="../images/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={112}
            src="../images/sneakers/1.jpg"
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
              <img width={11} height={11} src="../images/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;