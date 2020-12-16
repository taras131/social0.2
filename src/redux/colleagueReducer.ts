import {APIColleague} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {PersonsType} from "../types/Types";

const COLLEAGUEREDUSER_SETCOLLEAGUE = "COLLEAGUEREDUSER_SETCOLLEAGUE",
    COLLEAGUEREDUSER_SETISLOANDING = "COLLEAGUEREDUSER_SETISLOANDING";
type InitialStateType = {
    colleagueData: Array<PersonsType>
    isLoadingcolleagueReducer: boolean
}
const initialState: InitialStateType = {
    colleagueData: [],
    isLoadingcolleagueReducer: false
}

const colleagueReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case COLLEAGUEREDUSER_SETCOLLEAGUE:
            return {...state, colleagueData: action.colleagues}
        case COLLEAGUEREDUSER_SETISLOANDING:
            return {...state, isLoadingcolleagueReducer: action.value}
        default:
            return state
    }
}
type ActionsTypes = SetColleagueActionType | SetIsLoandingColleagueReduserActionType
type SetColleagueActionType = {
    type: typeof COLLEAGUEREDUSER_SETCOLLEAGUE
    colleagues: any
}
export const setColleague = (colleagues: Array<PersonsType>): SetColleagueActionType => {
    return {type: COLLEAGUEREDUSER_SETCOLLEAGUE, colleagues}
}
type SetIsLoandingColleagueReduserActionType = {
    type: typeof COLLEAGUEREDUSER_SETISLOANDING
    value: boolean
}
export const setIsLoandingColleagueReduser = (value: boolean): SetIsLoandingColleagueReduserActionType => {
    return {type: COLLEAGUEREDUSER_SETISLOANDING, value}
}
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>
export const getColleague = (): ThunkActionType => async (dispatch) => {
    dispatch(setIsLoandingColleagueReduser(true));
        let response = await APIColleague.getColleague();
        dispatch(setColleague(response.data.items));
        dispatch(setIsLoandingColleagueReduser(false));
}

export default colleagueReducer;