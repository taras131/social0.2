import {addPostCreatioAction, inputCreatioAction} from "../../../../../redux/profileReducer";
import React from "react";
import Newpost from "./Newpost";
import StoreContext from "../../../../../redux/StoreContext";

const NewpostContainer = () =>{
    return (
        <StoreContext.Consumer>
            {
                (store) =>{
                    const addPost = () => {
                        store.dispatch(addPostCreatioAction());
                    };
                    const input = (text) => {
                        store.dispatch(inputCreatioAction(text));
                    };
                    return (<Newpost input = {input} addPost = {addPost}
                                     inputValue = {store.getState().profileInformation.inputValue} />
                    );
                }
            }
        </StoreContext.Consumer>)
}

export default NewpostContainer;