import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ProductDetails = ({ product }) => {
    const [isVisible, setIsVisible] = useState(true);
    const deleteProduct = (id) => {
        fetch(`https://chain-smoker.herokuapp.com/delete/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsVisible(!isVisible);
                }
            })
    }
    return (
        <div className="container">
            {
                isVisible && <div className="row bg-secondary text-white pt-2 rounded mb-1">
                    <div className="d-flex justify-content-center col-3">
                        <h4>{product.name}</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>{product.price}</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>1</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4><Button onClick={() => deleteProduct(product._id)} variant="danger">Delete</Button></h4>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;