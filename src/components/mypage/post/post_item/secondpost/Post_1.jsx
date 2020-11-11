import style from "./Post_item.module.css";

const Post_1 = (props) =>{
    return (
        <div className = {style.post_item}>
            <img src="https://vraki.net/sites/default/files/inline/images/1551511862_48.jpg"/>
            <div className = {style.content}>{props.name}: {props.text}</div>
            <div>               
                <div className = {style.like}>
                    <img src ="https://neoshtamp.ru/assets/images/products/111/odobreno.png"/>
                    <div className = {style.count}>+{props.count}</div>
                </div>
            </div>
             
        </div> 
    );
}

export default Post_1;