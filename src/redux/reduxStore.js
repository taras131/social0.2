import {createStore, combineReducers} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import personReducer from "./personsReducers";

let redusersList = combineReducers({
    profileInformation: profileReducer,
    messagesInformation: messagesReducer,
    sidebarInformation: sidebarReducer,
    personInformation: personReducer
});
let store = createStore(redusersList);

export default store;