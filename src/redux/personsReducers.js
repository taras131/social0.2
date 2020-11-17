import {APIPersons} from "../api/api";

const ADDCOLLEAGUE = "ADDCOLLEAGUE",
      REMOVECOLLEAGUE = "REMOVECOLLEAGUE",
      SETPERSONSDATA = "SETPERSONSDATA",
      SETCURRENTPAGE = "SETCURRENTPAGE",
      ALLUSERSCOUNT = "ALLUSERSCOUNT",
      SETISLOADING = "SETISLOADING",
      COLLEAGUEINPROGRESS = "COLLEAGUEINPROGRESS";
let initialState = {
    personData: [],
    pageSize: 12,
    allUsersCount: 0,
    currentPage: 1,
    ColleagueInProgress: [],
    isLoading: false

};
const personReducer = (state = initialState, action) => {
        switch (action.type){
            case ADDCOLLEAGUE:
                return ({
                    ...state,
                    personData: state.personData.map(item =>{
                        if(item.id === action.id){
                            return {...item, followed: true}
                        } else
                            return item;
                    })
                })
            case REMOVECOLLEAGUE:
                return ({
                    ...state,
                    personData: state.personData.map(item =>{
                        if(item.id === action.id){
                            return {...item, followed: false}
                        } else {
                            return item;
                        }
                    })
                })
            case SETPERSONSDATA:
                return {...state, personData: [...action.persons]}
            case SETCURRENTPAGE:
                return {...state, currentPage: action.currentPage}
            case ALLUSERSCOUNT:
                return {...state, allUsersCount: (action.allUsersCount/100)}
            case SETISLOADING:
                return {...state, isLoading: action.isLoading}
            case COLLEAGUEINPROGRESS:
                console.log(state.ColleagueInProgress ,action.id, (state.ColleagueInProgress.some(id => id == action.id)));
                return ({
                    ...state,
                    ColleagueInProgress: (state.ColleagueInProgress.some(id => id == action.id))
                        ? state.ColleagueInProgress.filter(id => id != action.id)
                        : [...state.ColleagueInProgress, action.id]
                })
            default:
                return state;
        }
}
export const addColleague = (id) => {
    return {type: ADDCOLLEAGUE, id: id};
}
export const removeColleague = (id) => {
    return {type: REMOVECOLLEAGUE, id: id};
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
export const getPersons = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(setIsLoading(true));
        APIPersons.getPersons(currentPage, pageSize)
            .then(data => {
                dispatch(setIsLoading(false));
                dispatch(setPersonsData(data.items));
                dispatch(setAllUsersCount(data.totalCount));
            })
    }
}
export const removeColleagueThunkCreator = (id) => {
    return dispatch => {
        dispatch(setColleagueInProgress(id));
        APIPersons.removeColleague(id).then(data => {
            if(data.resultCode === 0) {
                dispatch(removeColleague(id));
                dispatch(setColleagueInProgress(id));
            }
        });
    }
}
export const addColleagueThunkCreator = (id) => {
    return dispatch => {
        dispatch(setColleagueInProgress(id));
        APIPersons.addColleague(id).then(data => {
            if(data.resultCode === 0) {
                dispatch(addColleague(id))
                dispatch(setColleagueInProgress(id));
            }
        });
    }
}

export default personReducer;