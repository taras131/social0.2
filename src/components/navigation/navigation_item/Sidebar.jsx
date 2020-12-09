import Sidebaritem from "./sidebar_item/Sidebar_item";
import style from "./Item.module.css";
import {connect} from "react-redux";

const Sidebar = (props) => {
   let sidebarElements = props.colleagueData.map(item => {
    return <Sidebaritem key ={item.id} name ={item.name} img ={item.photos.small} id = {item.id} />
    });
    let limit15sidebarElements= sidebarElements.filter((item,index)=> index < 15)
    return (
        <div className = {style.sidebar}>
            <div>Коллеги</div>
            {props.colleagueData.length !== 0
            ?<div className = {style.sidebar_items}>
                    {limit15sidebarElements}
                </div>
            :<b>у вас пока нет коллег </b>}
            {sidebarElements.length>15 &&
            <button>показать всех</button>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        colleagueData: state.sidebarInformation.colleagueData
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);