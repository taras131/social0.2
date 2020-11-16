import preloader from "../../img/preloader.svg";
import style from "./preloader.module.css";

let Preloader = () => {
    return <div className = {style.preloader}>
                <img src = {preloader}  />
          </div>
}

export default Preloader;