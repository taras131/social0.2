import {createStore, combineReducers, applyMiddleware} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import personReducer from "./personsReducers";
import authenticationsReducer from "./authenticationsReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";
import errorReducer from "./errorReducer";
import colleagueReducer from "./colleagueReducer";

let reducersList = combineReducers({
    profileInformation: profileReducer,
    dialogsInformation: dialogsReducer,
    personsInformation: personReducer,
    appInformation: appReducer,
    authenticationsInformation: authenticationsReducer,
    errorInformation: errorReducer,
    colleagueInformation: colleagueReducer,
    form: formReducer
});
type ReducersListType = typeof reducersList
export type AppStateType = ReturnType<ReducersListType>
let store = createStore(reducersList, applyMiddleware(thunkMiddleware));

export default store;