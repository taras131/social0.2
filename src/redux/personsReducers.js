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
                            console.log(item.colleague);
                            return {...item, colleague: true}
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
                            return {...item, colleague: false}
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
export const setPersonDataActionCreater = (person) => {
    return {type: SETPERSONDATA, personData: person};
}

export default personReducer;