import React from "react";
import style from  "./Title.module.css";

const Title = () => {
    return (
        <div className = {style.title}>
            <h1>Социальная сеть работников добывающей промышленности </h1>
            <h2>общайтесь с профессионалами, ищите работу , делитесь опытом</h2>
        </div>
    );
}
export default Title;