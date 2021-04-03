import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsDataLoading(false);
            });
    }, [])

    return (
        <div>
            {
                isDataLoading && <div className="d-flex justify-content-center my-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            <div className="d-flex flex-wrap justify-content-center">
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>

    );
};

export default Shop;