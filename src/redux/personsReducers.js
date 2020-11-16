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
                return ({
                    ...state,
                    personsData: state.personsData.map(item =>{
                        if(item.id === action.id){
                            return {...item, followed: true}
                        } else
                            return item;
                    })
                })
            case REMOVECOLLEAGUE:
                return ({
                    ...state,
                    personsData: state.personsData.map(item =>{
                        if(item.id === action.id){
                            return {...item, followed: false}
                        } else {
                            return item;
                        }
                    })
                })
            case SETPERSONDATA:
                return {...state, personData: [...action.persons]}
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
export const addColleague = (id) => {
    return {type: ADDCOLLEAGUE, id: id};
}
export const removeColleague = (id) => {
    return {type: REMOVECOLLEAGUE, id: id};
}
export const setPersonsData = (persons) => {
    return {type: SETPERSONDATA, persons};
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


export default personReducer;