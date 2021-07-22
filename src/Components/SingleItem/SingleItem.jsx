import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';
import styles from './SingleItem.module.css';

const SingleItem = () => {
  const currentItem = useSelector((state) => state.shop.currentItem);

  const {
    image, title, description, price, id,
  } = currentItem;

  const dispatch = useDispatch();

  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={image}
        alt={title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{title}</p>
        <p className={styles.details__description}>{description}</p>
        <p className={styles.details__price}>
          $
          {price}
        </p>
        <button
          type="button"
          onClick={() => dispatch(addToCart(id))}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
