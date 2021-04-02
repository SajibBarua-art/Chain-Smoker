import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(()=> {
        fetch('http://localhost:5000/product/'+id)
        .then(res => res.json())
        .then(data => setSelectedProduct(data));
    }, [])
    return (
        <div>
            <h3>Name: {selectedProduct.name}</h3>
            <h3>Price: $ {selectedProduct.price}</h3>
            <Link to='/orders'><Button variant="success">Order Now</Button></Link>
        </div>
    );
};

export default Checkout;