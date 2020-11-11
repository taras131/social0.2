import style from "./Sitebar_item.module.css";

const Sitebaritem = (props) => {
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

export default Sitebaritem;