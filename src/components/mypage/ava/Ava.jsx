import React from "react";
import style from "./Ava.module.css";

const Ava = () =>{
    return (
        <div className = {style.ava}>
            <img src = "https://psihter.ru/wp-content/uploads/2017/12/starik-portret-trubka-shlyapa.jpg"/>
            <div className ={style.discription}>
                Здесь будетнаходиться краткое описание профиля
            </div>
        </div> 
    );
}

export default Ava;