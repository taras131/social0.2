import style from "./Account.module.css";
import {NavLink} from "react-router-dom";

const Account = (props) =>{
    console.log(props.login)
    return (
        <div className = {style.account}>
            {props.isAuthentications
                ? <div>
                    <div>{props.login}</div>
                    <button onClick={props.loginOut}>выйти</button>
                  </div>
                :<NavLink to ={"/login"}>"Войти в аккаунт"</NavLink> }
        </div>
    );
}

export default Account;