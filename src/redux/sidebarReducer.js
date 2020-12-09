const SADEBARADDCOLLEAGUE = "SADEBARADDCOLLEAGUE",
    SADEBARREMOVECOLLEAGUE = "SADEBARREMOVECOLLEAGUE";

let initialState = {
    colleagueData: []
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SADEBARADDCOLLEAGUE:
            return {...state, colleagueData: [...state.colleagueData, action.profile]}
        case SADEBARREMOVECOLLEAGUE:
            return {
                ...state, colleagueData: [...state.colleagueData.filter((item => item.id !== action.id))]
            }
        default:
            return state;
    }
}
export const sidebarAddColleague = (profile) => {
    return {type: SADEBARADDCOLLEAGUE, profile};
}
export const sidebarRemoveColleague = (id) => {
    return {type: SADEBARREMOVECOLLEAGUE, id};
}
export default sidebarReducer;