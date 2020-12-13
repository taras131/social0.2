import style from "./Persons.module.css";
import React from "react";
import PersonsPaginator from "./PersonsPaginator";
import Person from "./person/Person";
import {PersonsType} from "../../../../types/Types";
type PropsType = {
    personsData: Array<PersonsType>
    ColleagueInProgress: Array<number>
    allUsersCount: number
    pageSize: number
    currentPage: number
    portionPage: number
    onPageChanged: (currentPage: number) => void
    addColleagueThunkCreator: (person : PersonsType) => void
    removeColleagueThunkCreator: (id: number) => void
}

const Persons: React.FC<PropsType> = ({personsData,ColleagueInProgress, addColleagueThunkCreator,
                                          removeColleagueThunkCreator, allUsersCount,
                                          pageSize,onPageChanged, currentPage,portionPage }) => {
    let persons = personsData.map(item => <Person person={item}
                                                  ColleagueInProgress={ColleagueInProgress}
                                                  addColleagueThunkCreator={addColleagueThunkCreator}
                                                  removeColleagueThunkCreator={removeColleagueThunkCreator}/>)
    return <div>
        <PersonsPaginator allUsersCount={allUsersCount}
                          pageSize={pageSize}
                          onPageChanged={onPageChanged}
                          currentPage={currentPage}
                          portionPage={portionPage}/>
        <div className={style.personitems}>
            {persons}
        </div>
    </div>
}

export default Persons;