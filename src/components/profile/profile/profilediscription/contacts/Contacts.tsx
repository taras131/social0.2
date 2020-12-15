import style from "../ProfileDiscription.module.css";
import {FC} from "react";

type PropsType = {
    contacts: Array<string>
}
const Contacts: FC<PropsType> = ({contacts}) => {
    let array = Object.values(contacts);
    let arrayContacts = array.filter((item) => item != null);
    let arrayContactsJsx = arrayContacts.map((item, index) => {
        return <div key={index} className={style.findings}>
            {item}
        </div>
    })
    return <div>
        {arrayContactsJsx}
    </div>
}
export default Contacts;