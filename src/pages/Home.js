import { SearchBox, Filters } from 'components/Home';
import { ProductCard } from 'components';
import { useDispatch, useSelector } from 'react-redux';
// import 'styles/home.css';
import { useEffect } from 'react';
import { getCategoriesThunk, getProductsThunk } from 'redux/actions';

const Home = () => {

    let productsList = useSelector(state => state.products.productsList);// se inicia con useSelector
    const productsFiltered = useSelector(state => state.products.productsFiltered);

    const products = productsFiltered.length ? productsFiltered : productsList;

    const dispatch = useDispatch();

    useEffect(() => {// Se utiliza useEffect 
        dispatch(getProductsThunk());
        dispatch(getCategoriesThunk());
    }, [ dispatch ]);



    return (
        <div className='home'>
            <aside>
                <div className='fixed'>
                    <Filters handleClose={() => {}} />
                </div>
            </aside>
            <section className='main-container'>
                <SearchBox />
                <ul className='products-list'>
                {
                    products.map(product => (
                        <li key={product.id}>
                            <ProductCard product={product} />
                        </li>
                    ))
                }
                </ul>
            </section>
        </div>
    );
};

export default Home;