import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import ProductDetails from '../ProductDetails/ProductDetails';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 className='mt-4 ml-2'>Manage Product: </h3>
            <div className="container">
                <div className="row bg-dark text-white p-2 pt-3 mb-3 rounded">
                    <div className="col-4">
                        <h4>Product Name</h4>
                    </div>
                    <div className="col-3">
                        <h4>Price</h4>
                    </div>
                    <div className="col-2">
                        <h4>Quantity</h4>
                    </div>
                    <div className="col-3">
                        <h4>Operation</h4>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                {
                    products.map(product => <ProductDetails product={product} key={product._id}></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;