import {APIPersons, APIProfile} from "../api/api";
import {addError} from "./errorReducer";
import {getColleague} from "./colleagueReducer";
import {PersonsType} from "../types/Types";

const SETCOLLEAGUE = "SETCOLLEAGUE",
    SETPERSONSDATA = "SETPERSONSDATA",
    SETCURRENTPAGE = "SETCURRENTPAGE",
    ALLUSERSCOUNT = "ALLUSERSCOUNT",
    SETISLOADING = "SETISLOADING",
    COLLEAGUEINPROGRESS = "COLLEAGUEINPROGRESS";
let initialState = {
    personsData: [] as Array<PersonsType>,
    pageSize: 12 as number,
    allUsersCount: 0 as number,
    currentPage: 1 as number,
    portionPage: 10 as number,
    ColleagueInProgress: [] as Array<number>, //array persons ids
    isLoading: false
};
type InitialStateType = typeof initialState;
const personReducer = (state = initialState, action: any): InitialStateType => {
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
type AddColleagueActionType = {
    type: typeof SETCOLLEAGUE
    id: number
    set: boolean
}
export const addColleague = (id: number): AddColleagueActionType => {
    return {type: SETCOLLEAGUE, id: id, set: true};
}
type RemoveColleagueActionType = {
    type: typeof SETCOLLEAGUE
    id: number
    set: boolean
}
export const removeColleague = (id: number): RemoveColleagueActionType => {
    return {type: SETCOLLEAGUE, id: id, set: false};
}
type SetPersonsDataActionType = {
    type: typeof SETPERSONSDATA
    persons: Array<object>
}
export const setPersonsData = (persons: Array<PersonsType>): SetPersonsDataActionType => {
    return {type: SETPERSONSDATA, persons};
}
type SetCurrentPageActionType = {
    type: typeof SETCURRENTPAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {type: SETCURRENTPAGE, currentPage};
}
type SetAllUsersCountActionType = {
    type: typeof ALLUSERSCOUNT
    allUsersCount: number
}
export const setAllUsersCount = (allUsersCount: number): SetAllUsersCountActionType => {
    return {type: ALLUSERSCOUNT, allUsersCount};
}
type SetIsLoadingActionType = {
    type: typeof SETISLOADING
    isLoading: boolean
}
export const setIsLoading = (isLoading: boolean): SetIsLoadingActionType  => {
    return {type: SETISLOADING, isLoading};
}
type SetColleagueInProgressActionType = {
    type: typeof COLLEAGUEINPROGRESS
    id: number
}
export const setColleagueInProgress = (id: number): SetColleagueInProgressActionType => {
    return {type: COLLEAGUEINPROGRESS, id};
}

export const getPersons = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setIsLoading(true));
    dispatch(setCurrentPage(currentPage));
    try{
        let response = await APIPersons.getPersons(currentPage, pageSize);
        dispatch(setPersonsData(response.data.items));
        dispatch(setAllUsersCount(response.data.totalCount));
        console.log(response.data.items)
    }
    catch (e) {
        dispatch(addError());
    }
    finally {
        dispatch(setIsLoading(false));
    }
}
export const removeColleagueThunkCreator = (id: number) => async (dispatch: any) => {
    dispatch(setColleagueInProgress(id));
    let response = await APIPersons.removeColleague(id);
    if (response.resultCode === 0) {
        dispatch(removeColleague(id));
        dispatch(setColleagueInProgress(id));
        dispatch(getColleague());
    }
}
export const addColleagueThunkCreator = (profile: any) => async (dispatch: any) => {
    dispatch(setColleagueInProgress(profile.id));
    let response = await APIPersons.addColleague(profile.id);
    if (response.resultCode === 0) {
        dispatch(addColleague(profile.id))
        dispatch(setColleagueInProgress(profile.id));
        dispatch(getColleague());
    }
}

export default personReducer;