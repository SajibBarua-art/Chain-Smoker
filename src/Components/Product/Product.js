import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Product.css';

const Product = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <div className="d-flex justify-content-between">
                <h4>$ {product.price}</h4>
                <Link to={`/checkout/${product._id}`}><Button variant="success">Buy Now</Button></Link>
            </div>

        </div>
    );
};

export default Product;