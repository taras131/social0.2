import style from "./Post.module.css";

const ExistingPost = (props) => {
    return (
        <div>
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
        </div>
    )
}

export default ExistingPost;