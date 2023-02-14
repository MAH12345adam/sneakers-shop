import React from "react";
import Info from "./info";
import axios from "axios";

const Cart = ({ onCloseCart, cartItems, onRemove, setCartItems }) => {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const onClickOrder = () => {
    axios.put(`https://62f3c731b81dba4a013baa5e.mockapi.io/cart`, []);
    setIsOrderComplete(true);
    setCartItems([]);
   for (let i = 0; i < cartItems.length; i++) {
    const a = cartItems[i]
    axios.delete(`https://62f3c731b81dba4a013baa5e.mockapi.io/cart/${a.id}`);
   }
  };
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
                <div key={obj.id} className="cartItem d-flex align-center">
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
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/images/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            image={
              isOrderComplete
                ? "images/complete-order.jpg"
                : "images/empty-cart.jpg"
            }
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `аш заказ #${Math.round(
                    Math.random() * 10
                  )} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
