import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";



const Header = () => {

    const [isLogin, setIsLogin] = useState(false);
        return (
            <React.Fragment>
                <div className="header">
                   <Logo />

                <div className="nav-bar">
                <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contat Us</Link></li>
                    <li>Cart</li>
                    <li><a href="#" onClick={()=>{
                        (isLogin === true)?setIsLogin(false):setIsLogin(true)
                    }}>{(isLogin)?'Logout':'Login'}</a></li>
                </ul>
                </div>

            </div>
            </React.Fragment>
        );
    }
export default Header;