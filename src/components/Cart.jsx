import React from "react";

const Cart = ({ onCloseCart, cartItems, onRemove }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">
          Корзина{" "}
          <img
            onClick={onCloseCart}
            className="cu-p"
            src="/images/btn-remove.svg"
            alt="remove"
          />
        </h2>
        {cartItems.length > 0 ? (
          <>
            <div className="cartItems flex">
              {cartItems.map((obj) => (
                <div className="cartItem d-flex align-center">
                  <div
                    style={{ backgroundImage: `url(${obj.img})` }}
                    className="cartItemImage"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/images/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/images/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              src={"images/empty-cart.jpg"}
              alt="Empty"
            />
            <h2>"Корзина пустая"</h2>
            <p className="opacity-6">
              "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            </p>
            <button onClick={onCloseCart} className="greenButton">
              <img src="images/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
