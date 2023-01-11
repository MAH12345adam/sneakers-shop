import React from "react";
import { Link } from "react-router-dom";

const Header = ({ onClickCart }) => {
  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/images/logo.png" alt="logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/images/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="/images/heart.svg" alt="heart" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/images/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
