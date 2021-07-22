import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem, removeCurrentItem } from '../../../redux/Shopping/shopping-actions';
import styles from './Product.module.css';

const Product = () => {
  const products = useSelector((state) => state.shop.products);

  const dispatch = useDispatch();

  const renderList = products.map((item) => (
    <div className={styles.product}>
      <img
        src={item.image}
        alt={item.title}
        className={styles.product__image}
      />
      <div className={styles.product__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>
          $
          {' '}
          {item.price}
        </p>
      </div>
      <div className={styles.product__buttons}>
        <button
          type="button"
          onClick={() => dispatch(removeCurrentItem(item))}
        >
          Delete
        </button>
        <Link to={`/product/${item.id}`}>
          <button
            type="button"
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
            onClick={() => dispatch(loadCurrentItem(item))}
          >
            View Item
          </button>
        </Link>
        <button
          type="button"
          onClick={() => dispatch(addToCart(item.id))}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  ));
  return (
    <>{renderList}</>
  );
};

export default Product;
