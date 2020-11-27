import style from "./Account.module.css";
import {NavLink} from "react-router-dom";

const Account = (props) =>{
    return (
        <div className = {style.account}>
            {props.isAuthentications
                ? props.login
                :<NavLink to ={"/login"}>"Войти в аккаунт"</NavLink> }
        </div>
    );
}

export default Account;