const ADDCOLLEAGUE = "ADDCOLLEAGUE",
      REMOVECOLLEAGUE = "REMOVECOLLEAGUE",
      SETPERSONDATA = "SETPERSONDATA";
let initialState = {
    personData: []
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
                return {...state, personData: [...state.personData, ...action.personData] }

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

export default personReducer;