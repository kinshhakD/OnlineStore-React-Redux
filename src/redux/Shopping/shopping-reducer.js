import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST:
      return { ...state, products: action.payload };
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((item) => item.id === action.payload.id);

      const inCart = state.cart.find((item) => item.id === action.payload.id);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) => (item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 } : item)) : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) => (item.id === action.payload.id
          ? { ...item, qty: +action.payload.qty } : item)),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.REMOVE_FROM_LIST:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
