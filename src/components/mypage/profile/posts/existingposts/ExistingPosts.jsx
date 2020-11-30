import style from "./Post.module.css";
import {PureComponent} from "react";


class ExistingPost extends PureComponent {

    render() {
        console.log("render");
        return (
            <div>
                <div className={style.post_item}>
                    <img src="https://vraki.net/sites/default/files/inline/images/1551511862_48.jpg"/>
                    <div className={style.content}>{this.props.name}: {this.props.text}</div>
                    <div>
                        <div className={style.like}>
                            <img src="https://neoshtamp.ru/assets/images/products/111/odobreno.png"/>
                            <div className={style.count}>+{this.props.count}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExistingPost;