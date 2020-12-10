import {APIColleague} from "../api/api";

const COLLEAGUEREDUSER_SETCOLLEAGUE = "COLLEAGUEREDUSER_SETCOLLEAGUE",
    COLLEAGUEREDUSER_SETISLOANDING = "COLLEAGUEREDUSER_SETISLOANDING";
const initialState = {
    colleagueData: [],
    isLoadingcolleagueReducer: false
}

const colleagueReducer = (state = initialState, action) => {
    switch (action.type) {
        case COLLEAGUEREDUSER_SETCOLLEAGUE:
            return {...state, colleagueData: action.colleagues}
        case COLLEAGUEREDUSER_SETISLOANDING:
            return {...state, isLoadingcolleagueReducer: action.value}
        default:
            return state
    }
}
export const setColleague = (colleagues) => {
    return {type: COLLEAGUEREDUSER_SETCOLLEAGUE, colleagues}
}
export const setIsLoandingColleagueReduser = (value) => {
    return {type: COLLEAGUEREDUSER_SETISLOANDING, value}
}
export const getColleague = () => async (dispatch) => {
    dispatch(setIsLoandingColleagueReduser(true));
    try {
        let response = await APIColleague.getColleague();
        dispatch(setColleague(response.data.items));
        console.log("response.data.items")
    } catch (e) {

    } finally {
        dispatch(setIsLoandingColleagueReduser(false));
    }
}


export default colleagueReducer;