import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
        
    );
};

export default Shop;