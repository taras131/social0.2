import {connect} from "react-redux";
import {
    addColleagueActionCreater,
    removeColleagueActionCreater,
    setPersonDataActionCreater
} from "../../../redux/personsReducers";
import Person from "./person/Person";

const mapStateToProps = (state) => {
    return {
        personData: state.personInformation.personData
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addColleagu: (id) => {
            dispatch(addColleagueActionCreater(id));
        },
        removeColleague: (id) => {
            dispatch(removeColleagueActionCreater(id));

        },
        setPerson: (users) => {
            dispatch(setPersonDataActionCreater(users));
        }
    }
}
const PersonsItemsContainer = connect(mapStateToProps, mapDispatchToProps)(Person);
export default PersonsItemsContainer;