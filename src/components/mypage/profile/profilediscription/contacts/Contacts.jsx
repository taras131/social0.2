import style from "../ProfileDiscription.module.css";
const Contacts = (props) => {
    let array = Object.values(props.contacts);
    let arrayContacts = array.filter((item) => item != null);
let arrayContactsJsx = arrayContacts.map((item, index)=>{
    return <div key={index} className={style.findings}>
        {item}
    </div>
})
    return <div>
        {arrayContactsJsx}
    </div>
}
export default Contacts;