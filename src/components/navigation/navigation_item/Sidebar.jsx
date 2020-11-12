import Sidebaritem from "./sidebar_item/Sidebar_item";
import style from "./Item.module.css";

const Sidebar = () => {

   // let sidebarElements = props.sidebarInformation.colleagueData.map(item => {
    //    return <Sidebaritem name ={item.name} url ={item.url} id = {item.id} />
   // });

    return (
        <div className = {style.sidebar}>
            <div>Коллеги</div>
            <div className = {style.sidebar_items}>

            </div>
        </div>
    )
}

export default Sidebar;