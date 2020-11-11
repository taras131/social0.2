import style from "./Sidebar_item.module.css";

const Sidebaritem = (props) => {
    return (
        <div className = {style.item}>
            <div>
                <img src = {props.url} />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default Sidebaritem;