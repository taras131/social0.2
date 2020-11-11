import React from "react";
import Logo from "./logo/Logo";
import Title from "./title/Title";
import Account from "./accoumt/Account";
import style from "./Header.module.css";

const Header = () =>{
    return (
        <header className = {style.header}>
            <Logo/>
            <Title/>
            <Account/>
        </header>
    );
}
export default Header;