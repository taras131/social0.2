import React from "react";
import "./css/App.css";
import Header from "./components/header/Header.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import MypageContainer from "./components/mypage/MypageContainer.jsx";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting"
import { BrowserRouter, Route } from "react-router-dom";
import PeopleList from "./components/peoplelist/PeopleList";
import Login from "./components/login/Login";

const App = (props) =>  {
  return (
      <div className = "app_wrapper">
        <Header />
        <Navigation />
        <div className = "app_wrapper_content">
        	<Route path ="/dialogs" render = { () => <Dialogs />} />
            <Route path ="/people" render = { () => <PeopleList />} />
          	<Route path ="/news" component = {News} />
          	<Route path ="/music" component = {Music} />
          	<Route path ="/setting" component = {Setting} />
            <Route path ="/login" component = {Login} />
            <Route path ="/profile/:personId?" render = { () => <MypageContainer />} />
        </div>
      </div>
  );
}

export default App;

