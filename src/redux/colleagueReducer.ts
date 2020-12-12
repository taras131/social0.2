import {APIColleague} from "../api/api";

const COLLEAGUEREDUSER_SETCOLLEAGUE = "COLLEAGUEREDUSER_SETCOLLEAGUE",
    COLLEAGUEREDUSER_SETISLOANDING = "COLLEAGUEREDUSER_SETISLOANDING";
type InitialStateType = {
    colleagueData: Array<object>
    isLoadingcolleagueReducer: boolean
}
const initialState: InitialStateType = {
    colleagueData: [],
    isLoadingcolleagueReducer: false
}

const colleagueReducer = (state = initialState, action: any): any => {
    switch (action.type) {
        case COLLEAGUEREDUSER_SETCOLLEAGUE:
            return {...state, colleagueData: action.colleagues}
        case COLLEAGUEREDUSER_SETISLOANDING:
            return {...state, isLoadingcolleagueReducer: action.value}
        default:
            return state
    }
}
export const setColleague = (colleagues: any): any => {
    return {type: COLLEAGUEREDUSER_SETCOLLEAGUE, colleagues}
}
export const setIsLoandingColleagueReduser = (value: any): any => {
    return {type: COLLEAGUEREDUSER_SETISLOANDING, value}
}
export const getColleague = () => async (dispatch: any) => {
    dispatch(setIsLoandingColleagueReduser(true));

        let response = await APIColleague.getColleague();
        dispatch(setColleague(response.data.items));

        dispatch(setIsLoandingColleagueReduser(false));

}

export default colleagueReducer;