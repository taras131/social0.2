import {APIPersons, APIProfile} from "../api/api";

const SETCOLLEAGUE = "SETCOLLEAGUE",
    SETPERSONSDATA = "SETPERSONSDATA",
    SETCURRENTPAGE = "SETCURRENTPAGE",
    ALLUSERSCOUNT = "ALLUSERSCOUNT",
    SETISLOADING = "SETISLOADING",
    COLLEAGUEINPROGRESS = "COLLEAGUEINPROGRESS";
let initialState = {
    personsData: [],
    pageSize: 12,
    allUsersCount: 0,
    currentPage: 1,
    portionPage: 20,
    ColleagueInProgress: [],
    isLoading: false
};
const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETCOLLEAGUE:
            return ({
                ...state,
                personsData: state.personsData.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: action.set}
                    } else
                        return item;
                })
            })
        case SETPERSONSDATA:
            return {...state, personsData: [...action.persons]}
        case SETCURRENTPAGE:
            return {...state, currentPage: action.currentPage}
        case ALLUSERSCOUNT:
            return {...state, allUsersCount: (action.allUsersCount)}
        case SETISLOADING:
            return {...state, isLoading: action.isLoading}
        case COLLEAGUEINPROGRESS:
            return ({
                ...state,
                ColleagueInProgress: (state.ColleagueInProgress.some(id => id === action.id))
                    ? state.ColleagueInProgress.filter(id => id !== action.id)
                    : [...state.ColleagueInProgress, action.id]
            })
        default:
            return state;
    }
}
export const addColleague = (id) => {
    return {type: SETCOLLEAGUE, id: id, set: true};
}
export const removeColleague = (id) => {
    return {type: SETCOLLEAGUE, id: id, set: false};
}
export const setPersonsData = (persons) => {
    return {type: SETPERSONSDATA, persons};
}
export const setCurrentPage = (currentPage) => {
    return {type: SETCURRENTPAGE, currentPage};
}
export const setAllUsersCount = (allUsersCount) => {
    return {type: ALLUSERSCOUNT, allUsersCount};
}
export const setIsLoading = (isLoading) => {
    return {type: SETISLOADING, isLoading};
}
export const setColleagueInProgress = (id) => {
    return {type: COLLEAGUEINPROGRESS, id};
}

export const getPersons = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsLoading(true));
    dispatch(setCurrentPage(currentPage));
    let response = await APIPersons.getPersons(currentPage, pageSize);
    dispatch(setIsLoading(false));
    dispatch(setPersonsData(response.items));
    dispatch(setAllUsersCount(response.totalCount));
}
export const removeColleagueThunkCreator = (id) => async (dispatch) => {
    dispatch(setColleagueInProgress(id));
    let response = await APIPersons.removeColleague(id);
    if (response.resultCode === 0) {
        dispatch(removeColleague(id));
        dispatch(setColleagueInProgress(id));
    }
}
export const addColleagueThunkCreator = (id) => async (dispatch) => {
    dispatch(setColleagueInProgress(id));
    let response = await APIPersons.addColleague(id);
    if (response.resultCode === 0) {
        dispatch(addColleague(id))
        dispatch(setColleagueInProgress(id));
    }
}

export default personReducer;