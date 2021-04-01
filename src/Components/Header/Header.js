import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/shop"><Navbar.Brand className="website-name-style">Chain Smoker</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-option" to="/shop">Home</Link>
                    <Link className="nav-option" to="/orders">Orders</Link>
                    <Link className="nav-option" to="/admin">Admin</Link>
                    <Link className="nav-option" to="/">Deals</Link>
                </Nav>
                <Link to="/login"><Button variant="success">Login</Button></Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;