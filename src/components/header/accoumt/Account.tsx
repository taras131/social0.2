import style from "./Account.module.css";
import {NavLink} from "react-router-dom";
import {FC} from "react";

type PropsType = {
    isAuthentications: boolean
    login: string
    loginOut: () => void
}
const Account: FC<PropsType> = ({isAuthentications, login, loginOut}) => {
    return (
        <div className={style.accountwrapper}>
            {isAuthentications
                ? <div className={style.account}>
                    <div className={style.loginname}>{login}</div>
                    <button onClick={loginOut}>выйти</button>
                </div>
                : <NavLink to={"/login"}>"Войти в аккаунт"</NavLink>}
        </div>
    );
}

export default Account;