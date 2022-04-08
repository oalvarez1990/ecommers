import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCartThunk } from 'redux/actions';
// import 'styles/product-card.css';

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <div className="image">
                    <img src={product.productImgs?.[1]} alt="" className="over" />
                    <img src={product.productImgs?.[0]} alt="" />
                </div>
                <div className="info">
                    <span className="brand">{product.brand}</span>
                    <strong>{product.title}</strong>
                    <span className='price'>Price</span>
                    <span className="amount">$ {product.price}</span>
                </div>
            </Link>
            <button className='cart-button' onClick={() => dispatch(addToCartThunk(product.id, 1))}>
                <i className='icon-shopping-cart'></i>
            </button>
        </div>
    );
};

export default ProductCard;