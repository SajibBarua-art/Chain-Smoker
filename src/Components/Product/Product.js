import React from 'react';
import './Product.css';

const Product = ({product}) => {
    return (
        <div className="product-card">
            <img src={product.img} alt=""/>
            <h3>{product.name}</h3>
            <h4>$ {product.price}</h4>
            
        </div>
    );
};

export default Product;