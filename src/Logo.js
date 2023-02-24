import React from "react";
import {Link} from "react-router-dom";
import LogoImage from "./assets/logo.png";

const Logo = () => {
    return (
        <React.Fragment>
            <Link to="/">
        <img className="logo" alt="Food Villa" src={LogoImage} /></Link>
        </React.Fragment>        
    );
}

export default Logo;