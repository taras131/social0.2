import style from "./Persons.module.css";
import React from "react";
import PersonsPaginator from "./PersonsPaginator";
import Person from "./person/Person";

const Persons = (props) => {
    let persons = props.personsData.map(item => <Person person={item}
                                                        ColleagueInProgress={props.ColleagueInProgress}
                                                        addColleagueThunkCreator={props.addColleagueThunkCreator}
                                                        removeColleagueThunkCreator={props.removeColleagueThunkCreator}
                                                        followed={props.followed} key={item.id}/>)
    return <div>
        <PersonsPaginator allUsersCount={props.allUsersCount}
                          pageSize={props.pageSize}
                          onPageChanged={props.onPageChanged}
                          currentPage={props.currentPage}
                          portionPage={props.portionPage}/>
        <div className={style.personitems}>
            {persons}
        </div>
    </div>
}

export default Persons;