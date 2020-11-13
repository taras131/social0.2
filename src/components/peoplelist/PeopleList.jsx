import React from "react";
import PersonsItemsContainer from "./personsitems/PersonsItemsContainer";
import style from "./PeopleList.module.css";

const PeopleList = () => {
   return (
       <div className ={style.personlist}>
            <PersonsItemsContainer />
       </div>
   );
}

export default PeopleList;