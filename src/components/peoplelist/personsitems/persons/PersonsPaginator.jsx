import style from "./Persons.module.css";
import React, {useState} from "react";
import nextarrow from "../../../../icons/nextarrow.png";
import previusarrow from "../../../../icons/previusarrow.png";
import dublenextarrow from "../../../../icons/dublenextarrow.png";
import dublepreviusarrow from "../../../../icons/dublepreviusarrow.png";

const PersonsPaginator = (props) => {
    let [multiplierPaginator, setMultiplierPaginator]= useState(1)
    let pagesCount = Math.ceil(props.allUsersCount / props.pageSize);
    let finalPage = Math.ceil(pagesCount/props.portionPage);
    let startRenderPages = props.portionPage*multiplierPaginator-19;
    let stopRenderPages;
    if(props.portionPage*multiplierPaginator >= pagesCount){
        stopRenderPages = pagesCount;
    } else {
        stopRenderPages = props.portionPage*multiplierPaginator;
    }
    let pages = [];
    for (let i = startRenderPages; i <= stopRenderPages; i++) {
        pages.push(i);
    }
    const setPreviusPages= () => {
        setMultiplierPaginator(multiplierPaginator-1);
        props.onPageChanged(stopRenderPages-20)
    }
    const setNextPages= () => {
        setMultiplierPaginator(multiplierPaginator+1);
        props.onPageChanged(startRenderPages+20);
    }
    const setFirstPages = () =>{
        setMultiplierPaginator(1);
        props.onPageChanged(1);
    }
    const setFinalPages = () =>{
        setMultiplierPaginator(finalPage);
        props.onPageChanged(pagesCount);
    }
    return (
        <div className={style.pagenatorwrapper}>
            {multiplierPaginator > 1 &&
            <div onClick={setFirstPages} className={style.pagenatorselector}>
                <img src ={dublepreviusarrow} alt="dublepreviusarrow"/>
            </div>}
            {multiplierPaginator > 1 &&
            <div onClick={setPreviusPages} className={style.pagenatorselector}>
                <img src ={previusarrow} alt="previusarrow"/>
            </div>}
            <div>
                {pages.map(item => {
                    return(
                    <span className={props.currentPage === item
                        ? style.dedicatedcount : style.count} onClick={(e) => {
                        props.onPageChanged(item)
                    }}>{item}</span>
                    )
                })}
            </div>
            {stopRenderPages !== pagesCount &&
            <div onClick={setNextPages} className={style.pagenatorselector}>
                <img src= {nextarrow} alt="nextarrow"/>
            </div>}
            {multiplierPaginator < finalPage &&
            <div onClick={setFinalPages} className={style.pagenatorselector}>
                <img src ={dublenextarrow} alt="dublenextarrow"/>
            </div>}
        </div>
    )
}

export default PersonsPaginator;