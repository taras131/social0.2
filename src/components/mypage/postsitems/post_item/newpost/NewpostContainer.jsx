import {addPostCreatioAction, inputCreatioAction} from "../../../../../redux/profileReducer";
import React from "react";
import Newpost from "./Newpost";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        inputValue: state.profileInformation.inputValue
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () => {
            dispatch(addPostCreatioAction())
        },
        input: (text) => {
            dispatch(inputCreatioAction(text))
        }
    }
}
const NewpostContainer = connect(mapStateToProps, mapDispatchToProps)(Newpost);
export default NewpostContainer;