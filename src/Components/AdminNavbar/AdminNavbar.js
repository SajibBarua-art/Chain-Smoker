import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
    return (
        <div className="container">
            <div className="row admin-navbar">
                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                    <Link to='/addProduct'><button className="btn btn-outline-success">Add Product</button></Link>
                </div>
                <div className="col-md-6 col-sm-6 d-flex justify-content-center">
                    <Link to='/manageProduct'><button className="btn btn-outline-success">Manage Product</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;