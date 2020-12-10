import style from "./Post.module.css";
import {PureComponent} from "react";
import anonimavatar from "../../../../../img/anonimavatar.jpg";

class ExistingPost extends PureComponent {
    render() {
        return (
            <div>
                <div className={style.post_item}>
                    <img src={this.props.profile.photos.large ? this.props.profile.photos.large
                        : anonimavatar}/>
                    <div className={style.content}>{this.props.profile.fullName}: {this.props.text}</div>
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