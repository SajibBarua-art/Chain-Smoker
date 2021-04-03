import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import ProductDetails from '../ProductDetails/ProductDetails';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(true);
    
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setIsDataLoading(false);
        });
    },[])

    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <h3 className='mt-4 ml-2'>Manage Product: </h3>
            <div className="container">
                <div className="row bg-dark text-white p-2 pt-3 mb-3 rounded">
                    <div className="d-flex justify-content-center col-3">
                        <h4>Name</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Price</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Net</h4>
                    </div>
                    <div className="d-flex justify-content-center col-3">
                        <h4>Method</h4>
                    </div>
                </div>
            </div>
            {
                isDataLoading && <div className="d-flex justify-content-center my-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            <div className="mb-5">
                {
                    products.map(product => <ProductDetails product={product} key={product._id}></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;