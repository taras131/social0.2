import preloader from "../../../img/739.gif";
import style from "./preloader.module.css";

let Preloader = () => {
    return <span className={style.preloaderwrapper}>
        <div className={style.preloader}>
            <img src={preloader}/>
        </div>
    </span>
}

export default Preloader;