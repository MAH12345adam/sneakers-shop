import React from "react";

const Header = () => {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/images/logo.png" alt="logo" />
        <div>
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/images/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/images/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;