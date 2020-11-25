import {createStore, combineReducers, applyMiddleware} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import personReducer from "./personsReducers";
import authenticationsReduser from "./authenticationsReduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let redusersList = combineReducers({
    profileInformation: profileReducer,
    messagesInformation: messagesReducer,
    sidebarInformation: sidebarReducer,
    personInformation: personReducer,
    authenticationsInformation: authenticationsReduser,
    form: formReducer
});
let store = createStore(redusersList, applyMiddleware(thunkMiddleware));

export default store;