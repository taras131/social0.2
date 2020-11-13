import React from "react";
import style from "./Person.module.css";

let Person = (props) => {
    if(props.personData.length == 0){
        props.setPerson(
            [
                {id: 1, colleague: true, firstname: "Василий", lastname: "ivan", location: {city: "Mockau", staate: "Russian"}, url : "https://i.gjcdn.net/data/fireside/posts/23/163/1491663/media/5f7-raxzkzk7.jpg"},
                {id: 2, colleague: false, firstname: "Василий", lastname: "stas", location: {city: "Mockau", staate: "Russian"}, url : "http://metierkudos.com/wp-content/uploads/2018/10/ocs1.jpg"},
                {id: 3, colleague: true, firstname: "Палыч", lastname: "дюша", location: {city: "Mockau", staate: "Russian"}, url : "https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2-%D0%BE%D0%B4%D0%BD%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D0%B8%D0%BA%D0%B0%D1%85-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD007.jpg"},
                {id: 4, colleague: false, firstname: "Василий", lastname: "метёдлкин", location: {city: "Mockau", staate: "Russian"}, url : "https://whatsism.com/uploads/posts/2019-04/1556173275_prikolnye_kartinki_na_zastavku_telefona_2_18034955.jpg"},
                {id: 5, colleague: true, firstname: "Пётр", lastname: "злодей", location: {city: "Mockau", staate: "Russian"}, url : "https://p7.hiclipart.com/preview/925/547/763/sticker-whatsapp-emoticon-kik-messenger-emoji-viber.jpg"},
                {id: 6, colleague: false, firstname: "Василий", lastname: "птица говорун", location: {city: "Mockau", staate: "Russian"}, url : "https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarka-dlya-vatsap-10.jpg"},
                {id: 7, colleague: true, firstname: "Василий", lastname: "ivan", location: {city: "Mockau", staate: "Russian"}, url : "https://i.gjcdn.net/data/fireside/posts/23/163/1491663/media/5f7-raxzkzk7.jpg"},
                {id: 8, colleague: false, firstname: "Хлебовод", lastname: "stas", location: {city: "Mockau", staate: "Russian"}, url : "http://metierkudos.com/wp-content/uploads/2018/10/ocs1.jpg"},
                {id: 9, colleague: true, firstname: "Василий", lastname: "дюша", location: {city: "Mockau", staate: "Russian"}, url : "https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B2-%D0%BE%D0%B4%D0%BD%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D0%B8%D0%BA%D0%B0%D1%85-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD007.jpg"},
                {id: 10, colleague: false, firstname: "Василий", lastname: "метёдлкин", location: {city: "Mockau", staate: "Russian"}, url : "https://whatsism.com/uploads/posts/2019-04/1556173275_prikolnye_kartinki_na_zastavku_telefona_2_18034955.jpg"},
                {id: 11, colleague: true, firstname: "Лавр", lastname: "злодей", location: {city: "Mockau", staate: "Russian"}, url : "https://p7.hiclipart.com/preview/925/547/763/sticker-whatsapp-emoticon-kik-messenger-emoji-viber.jpg"},
                {id: 12, colleague: false, firstname: "Василий", lastname: "птица говорун", location: {city: "Mockau", staate: "Russian"}, url : "https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarka-dlya-vatsap-10.jpg"}
            ]
        )
    }
    return (
        <div className={style.personitems}>
            {
                props.personData.map(item => <div className={style.person}>
                    <div>
                        <div className={style.personinformation}>
                            <div>
                                <img src ={item.url}/>
                            </div>
                            <div className={style.data}>
                                <div>Имя: {item.firstname}</div>
                                <div>Фамилия: {item.lastname}</div>
                                <div>Страна: {item.location.staate}</div>
                                <div>Город: {item.location.city}</div>
                            </div>
                        </div>
                    </div>
                        <div className={style.button}>
                            { item.colleague
                                ? <button className={style.buttonremove} onClick = { ()=> {props.removeColleague(item.id)}} >выгнать</button>
                                : <button className={style.buttonadd} onClick={ () => {props.addColleagu(item.id)}} >в коллеги</button> }
                        </div>

                </div>)
            }
        </div>
    )
}
export default Person;

