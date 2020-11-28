import {createStore, combineReducers, applyMiddleware} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import personReducer from "./personsReducers";
import authenticationsReducer from "./authenticationsReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let redusersList = combineReducers({
    profileInformation: profileReducer,
    messagesInformation: messagesReducer,
    sidebarInformation: sidebarReducer,
    personsInformation: personReducer,
    appInformation: appReducer,
    authenticationsInformation: authenticationsReducer,
    form: formReducer
});
let store = createStore(redusersList, applyMiddleware(thunkMiddleware));

export default store;