import React from "react";
import Profile from "./navigation_item/Profile";
import Message from "./navigation_item/Message";
import News from "./navigation_item/News";
import Music from "./navigation_item/Music";
import Setting from "./navigation_item/Setting";
import Sidebar from "./navigation_item/Sidebar"
import style from "./Navigation.module.css";
import {NavLink} from "react-router-dom";
import PeopleList from "./navigation_item/People";

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <NavLink  to="/profile"> <Profile/></NavLink>
            <NavLink to="/dialogs"> <Message/></NavLink>
            <NavLink to="/people"> <PeopleList/></NavLink>
            <NavLink to="/news"> <News/></NavLink>
            <NavLink to="/music"> <Music/></NavLink>
            <NavLink to="/setting"> <Setting/></NavLink>
            <NavLink to="/colleague"> <Sidebar/></NavLink>
        </nav>
    );
}

export default Navigation;