import {createStore, combineReducers, applyMiddleware} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import personReducer from "./personsReducers";
import authenticationsReducer from "./authenticationsReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";
import errorReducer from "./errorReducer";
import colleagueReducer from "./colleagueReducer";

let redusersList = combineReducers({
    profileInformation: profileReducer,
    messagesInformation: messagesReducer,
    personsInformation: personReducer,
    appInformation: appReducer,
    authenticationsInformation: authenticationsReducer,
    errorInformation: errorReducer,
    colleagueInformation: colleagueReducer,
    form: formReducer
});
let store = createStore(redusersList, applyMiddleware(thunkMiddleware));

export default store;