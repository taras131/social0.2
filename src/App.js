import React from "react";
import "./css/App.css";
import Header from "./components/header/Header.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting"
import PeopleList from "./components/peoplelist/PeopleList";
import {connect, Provider} from "react-redux";
import {getAuthMe} from "./redux/authenticationsReducer";
import {Redirect, Route} from "react-router-dom";
import {BrowserRouter, withRouter} from "react-router-dom";
import {compose} from "redux";
import {initialezeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/reduxStore";
import withSuspenseHOC from "./hoc/witchSuspenseHOC";
import ProfileContainer from "./components/profile/ProfileContainer";
import СolleagueContainer from "./components/colleaguecontainer/СolleagueContainer";

const Dialogs = React.lazy(() => import("./components/dialogs/Dialogs"));
const Login = React.lazy(() => import("./components/login/Login"));

class App extends React.Component {
    catchErrors(promiseRejectEvent) {
        alert(" Some Error");
    }
    componentDidMount() {
        this.props.initialezeApp();
    //    window.addEventListener("unhandledrejection", this.catchErrors);
    }
    componentWillUnmount() {
    //    window.removeEventListener("unhandledrejection", this.catchErrors);
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app_wrapper">
                <Header/>
                <Navigation/>
                <div className="app_wrapper_content">
                    <Route exact path="" render={() => <Redirect to="/profile"/>}/>
                    <Route path="/dialogs" render={withSuspenseHOC(Dialogs)}/>
                    <Route path="/people" render={() => <PeopleList/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/setting" component={Setting}/>
                    <Route path="/login" component={withSuspenseHOC(Login)}/>
                    <Route path="/profile/:personId?" render={() => <ProfileContainer/>}/>
                    <Route path="/colleague" component={withSuspenseHOC(СolleagueContainer)}/>
                </div>
            </div>
        )
            ;
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.appInformation.initialized
    }
}
let APPContainer = compose(
    withRouter,
    connect(mapStateToProps, {getAuthMe, initialezeApp}))(App);
const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <APPContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;



