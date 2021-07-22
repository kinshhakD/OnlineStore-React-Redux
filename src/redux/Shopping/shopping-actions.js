import * as actionTypes from './shopping-types';

export const productList = (payload) => ({
  type: actionTypes.PRODUCT_LIST,
  payload,
});

export const addToCart = (itemID) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id: itemID,
  },
});

export const removeFromCart = (itemID) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id: itemID,
  },
});

export const adjustItemQty = (itemID, qty) => ({
  type: actionTypes.ADJUST_ITEM_QTY,
  payload: {
    id: itemID,
    qty,
  },
});

export const loadCurrentItem = (item) => ({
  type: actionTypes.LOAD_CURRENT_ITEM,
  payload: item,
});

export const removeCurrentItem = (itemID) => ({
  type: actionTypes.REMOVE_FROM_LIST,
  payload: itemID,
});
