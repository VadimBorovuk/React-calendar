import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.jpg'

import './style.scss'

const Header = () => {
    return (
        <div className="werD__header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-8 header__logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 header__nav-items">
                        <Link className="header__nav-item" to="/">Home</Link>
                        <Link className="header__nav-item" to="/about-us">About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
