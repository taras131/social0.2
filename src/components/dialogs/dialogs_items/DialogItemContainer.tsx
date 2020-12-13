import Dialog from "./dialog/Dialog";
import React, {FC} from "react";
import {DialogsType} from "../../../types/Types";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";

type PropsType = {
    dialogsData: Array<DialogsType>
}
const DialogItemContainer: FC<PropsType>= ({dialogsData}) => {
    let dialogsElements = dialogsData.map(item => {
        return (<Dialog id = {item.id} key = {item.id} img = {item.url} name = {item.name} />)});
    return (
        <div>
            {dialogsElements}
        </div>
    );
}
const mapStateToProps = (state: AppStateType) =>{
    return {
        dialogsData: state.dialogsInformation.dialogsData
    }
}
export default connect(mapStateToProps, null)(DialogItemContainer);
