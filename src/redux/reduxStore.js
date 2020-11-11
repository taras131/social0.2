import {createStore, combineReducers} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let redusersList = combineReducers({
    profileInformation: profileReducer,
    messagesInformation: messagesReducer,
    sidebarInformation: sidebarReducer
});
let store = createStore(redusersList);

export default store;