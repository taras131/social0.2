import React from "react";
import "./css/App.css";
import Header from "./components/header/Header.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Mypage from "./components/mypage/Mypage.jsx";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting"
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) =>  {
  return (
    <BrowserRouter>
      <div className = "app_wrapper">
        <Header />
        <Navigation sidebarInformation ={props.state.sidebarInformation} />

        <div className = "app_wrapper_content">			  
			<Route path ="/profile" 
		    	render = { () => <Mypage store = {props.store} />}  />
        
        	<Route path ="/dialogs" render = { () => <Dialogs 
            	messagesInformation = {props.state.messagesInformation}
                store = {props.store} />}  />

          	<Route path ="/news" component = {News} />
          	<Route path ="/music" component = {Music} />
          	<Route path ="/setting" component = {Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

