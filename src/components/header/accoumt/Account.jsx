import style from "./Account.module.css";
import {NavLink} from "react-router-dom";

const Account = (props) => {
    return (
        <div className={style.accountwrapper}>
            {props.isAuthentications
                ? <div className={style.account}>
                    <div className={style.loginname}>{props.login}</div>
                    <button onClick={props.loginOut}>выйти</button>
                </div>
                : <NavLink to={"/login"}>"Войти в аккаунт"</NavLink>}
        </div>
    );
}

export default Account;