import React from "react";
import Logo from "./logo/Logo";
import Title from "./title/Title";
import style from "./Header.module.css";
import AcсountContainer from "./accoumt/AccountContainer";
import {NavLink} from "react-router-dom";

const Header = () =>{
    return (
        <header className = {style.header}>
            <Logo />
            <Title />
            <NavLink to ={"/login"}>
                <AcсountContainer />
            </NavLink>
        </header>
    );
}
export default Header;