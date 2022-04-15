import { Gallery, ProductInfo } from 'components/Product';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { History, ProductCard } from 'components';
import { useParams } from 'react-router-dom';
// import 'styles/product-detail.css';
import { getProductsThunk } from 'redux/actions';

const Product = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    const [ product, setProduct ] = useState({});
    const [ productsFiltered, setProductsFiltered ] = useState([]);
    const productsList = useSelector(state => state.products.productsList);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        const productFind = productsList.find(
            productItem => productItem.id === +id
        )
        const filtered = productsList.filter(
            productItem => productItem.category.id === productFind.category.id
        )
        setProductsFiltered(filtered);
        setProduct(productFind)
    }, [ id, dispatch, productsList ]);

    
    useEffect(() => dispatch(getProductsThunk()), [ dispatch ])


    return (
        <section className='product-detail main-container'>
            <History currentPage={product?.title} />
            <div className="product-info-flex">
                <div className="col">
                    <Gallery images={product?.productImgs} />
                </div>
                <div className="col">
                    <ProductInfo product={product} />
                </div>
            </div>
            <div className="suggestions">
                <strong>
                    Discover similar items
                </strong>
                <ul>
                    {
                        productsFiltered.map(product => (
                            <li key={product.id}>
                                <ProductCard  product={product} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Product;

// Se crea componente 
// Se crea componente 
// Se crea componente 
// Se crea componente 
// Se crea componente 
// Se crea componente 
// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;