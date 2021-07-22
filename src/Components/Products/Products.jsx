import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../redux/Shopping/shopping-actions';
import Product from './Product/Product';

const Products = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      dispatch(productList(response.data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product__block">
      <Product />
    </div>
  );
};

export default Products;
