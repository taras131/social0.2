import style from "./Persons.module.css";
import React, {useState} from "react";
import nextarrow from "../../../../icons/nextarrow.png";
import previusarrow from "../../../../icons/previusarrow.png";
import dublenextarrow from "../../../../icons/dublenextarrow.png";
import dublepreviusarrow from "../../../../icons/dublepreviusarrow.png";

type PropsType = {
    pageSize: number
    allUsersCount: number
    portionPage: number
    currentPage: number
    onPageChanged: (pagesCount: number)=>void
}

const PersonsPaginator: React.FC<PropsType > = ({pageSize,allUsersCount, portionPage,
                                                    currentPage, onPageChanged}) => {
    let [multiplierPaginator, setMultiplierPaginator]= useState(1)
    let pagesCount = Math.ceil(allUsersCount / pageSize);
    let finalPage = Math.ceil(pagesCount/portionPage);
    let startRenderPages = portionPage*multiplierPaginator-portionPage+1;
    let stopRenderPages: number;
    if(portionPage*multiplierPaginator >= pagesCount){
        stopRenderPages = pagesCount;
    } else {
        stopRenderPages = portionPage*multiplierPaginator;
    }
    let pages = [];
    for (let i = startRenderPages; i <= stopRenderPages; i++) {
        pages.push(i);
    }
    const setPreviusPages= () => {
        setMultiplierPaginator(multiplierPaginator-1);
        onPageChanged(stopRenderPages-portionPage)
    }
    const setNextPages= () => {
        setMultiplierPaginator(multiplierPaginator+1);
        onPageChanged(startRenderPages+portionPage);
    }
    const setFirstPages = () =>{
        setMultiplierPaginator(1);
        onPageChanged(1);
    }
    const setFinalPages = () =>{
        setMultiplierPaginator(finalPage);
        onPageChanged(pagesCount);
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
                {pages.map((item, index) => {
                    return(
                    <span key={index} className={currentPage === item
                        ? style.dedicatedcount : style.count} onClick={(e) => {
                        onPageChanged(item)
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