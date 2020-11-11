import Sitebaritem from "./sitebar_item/Sitebar_item";
import style from "./Item.module.css";

const Sitebar = (props) => {

    let sitebarElements = props.sitebarInformation.colleagueData.map(item => {
        return <Sitebaritem name ={item.name} url ={item.url} id = {item.id} />
    }); 

    return (
        <div className = {style.sitebar}>
            <div>Коллеги</div>
            <div className = {style.sitebar_items}>
                {sitebarElements}
            </div>
        </div>
    )
}

export default Sitebar;