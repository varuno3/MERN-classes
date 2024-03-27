import React from "react";
import ReactDOM from "react-dom/client";

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo-container">
                <div className="amazon-logo nav-logo"></div>
                <span>.in</span>
            </div>
            <div className="location-container">
                <div className="location-logo nav-logo">

                </div>
                <div className="address">
                    <p>Deliver to Varun</p>
                    <p>Dehradun 248013</p>
                </div>
            </div>
            <div className="search-container">
                <select name="" id="">
                    <option value="">All Categories</option>
                    <option value="">Electronics</option>
                    <option value="">Clothing &amp; Shoes</option>
                    <option value="">Home & amp; Kitchen</option>
                    <option value="">Beauty &amp; Personal Care</option>
                </select>
                <input type="text" placeholder="Search Amazon.in" />
                <button className="search-btn">Icon</button>
            </div>
            <div className="account-details">
                <div className="country-language">
                    <img src="" alt="" className="country-flag" />
                    <span>EN</span>
                </div>
                <div className="user-options">
                    <p className="username">Hello, Varun</p>
                    <p>Accounts & Lists</p>
                </div>
                <div className="orders">
                    <p>Returns</p>
                    <p>& Orders</p>
                </div>
                <div className="cart">
                    <span>1</span>
                    <img src="" alt="" />
                </div>
            </div>
        </nav>
    )
}

root.render(<NavBar/>)