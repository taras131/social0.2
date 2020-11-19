import React from "react";
import style from "./PeopleList.module.css";
import PersonsItemsContainer from "./personsitems/PersonsItemsContainer";

const PeopleList = () => {
   return (
       <div className ={style.personlist}>
            <PersonsItemsContainer />
       </div>
   );
}

export default PeopleList;