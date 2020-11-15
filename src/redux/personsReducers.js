const ADDCOLLEAGUE = "ADDCOLLEAGUE",
      REMOVECOLLEAGUE = "REMOVECOLLEAGUE",
      SETPERSONDATA = "SETPERSONDATA",
      SETCURRENTPAGE = "SETCURRENTPAGE",
      ALLUSERSCOUNT = "ALLUSERSCOUNT",
      SETISLOADING = "SETISLOADING";
let initialState = {
    personData: [],
    pageSize: 12,
    allUsersCount: 0,
    currentPage: 1,
    isLoading: false
};
const personReducer = (state = initialState, action) => {
        switch (action.type){
            case ADDCOLLEAGUE:
                console.log("add");
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
                console.log("remove");
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
            case SETPERSONDATA:
                return {...state, personData: [...action.personData]}
            case SETCURRENTPAGE:
                return {...state, currentPage: action.currentPage}
            case ALLUSERSCOUNT:
                return {...state, allUsersCount: (action.allUsersCount/100)}
            case SETISLOADING:
                return {...state, isLoading: action.isLoading}
            default:
                return state;
        }
}
export const addColleagueActionCreater = (id) => {
    return {type: ADDCOLLEAGUE, id: id};
}
export const removeColleagueActionCreater = (id) => {
    return {type: REMOVECOLLEAGUE, id: id};
}
export const setPersonDataActionCreater = (persons) => {
    return {type: SETPERSONDATA, personData: persons};
}
export const setCurrentPageActionCreater = (currentPage) => {
    return {type: SETCURRENTPAGE, currentPage};
}
export const setAllUsersCountActionCreater = (allUsersCount) => {
    return {type: ALLUSERSCOUNT, allUsersCount};
}
export const setIsLoadingActionCreater = (isLoading) => {
    return {type: SETISLOADING, isLoading};
}


export default personReducer;