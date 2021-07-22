import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.shop.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>
            TOTAL: (
            {totalItems}
            {' '}
            items)
          </span>
          <span>
            $
            {' '}
            {totalPrice}
          </span>
        </div>
        <button
          type="button"
          className={styles.summary__checkoutBtn}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
