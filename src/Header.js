import React, { useState } from "react";
import Logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./utils/store";

const Title = () => {
    return (
        <Link to="/">
    <img data-testid="logo" className="h-25 w-28" alt="Food Villa" src={Logo} /></Link>
   );
}

const Header = () => {

    const cartItems = useSelector(store => store.cart.items);

    const [isLogin, setIsLogin] = useState(false);
        return (
            <React.Fragment>
                <div className="flex justify-between bg-pink-50 shadow-lg">
                   <Title />
                <div className="flex">
                <ul className="flex pt-11">
                    <li className="flex pl-2"><NavLink className={({isActive}) => isActive ? 'font-bold':'nav-link'} to="/">Home</NavLink></li> 
                    <li className="flex pl-2"><NavLink className={({isActive}) => isActive ? 'font-bold':'nav-link'} to="/about" >About Us</NavLink></li>
                    <li className="flex pl-2"><NavLink className={({isActive}) => isActive ? 'font-bold':'nav-link'} to="/contact">Contat Us</NavLink></li>
                    <li className="flex pl-2"><NavLink className={({isActive}) => isActive ? 'font-bold':'nav-link'} to="/smartmart">Smart Mart</NavLink></li>
                    <li className="flex pl-2" data-testid="cart-item">Cart - {cartItems.length} Items</li>
                    <li className="flex pl-2"><a href="#" onClick={()=>{
                        (isLogin === true)?setIsLogin(false):setIsLogin(true)
                    }}>{(isLogin)?'Logout':'Login'}</a></li>
                </ul>
                </div>

            </div>
            </React.Fragment>
        );
    }
export default Header;