import React from "react";

import cartEmptyImg from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина пустая :(</h2>
        <p>
          Вероятнней всего, вы ещё не заказывали пиццу. <br />
          Для того, чтобы заказать пиццу, перейдите на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
