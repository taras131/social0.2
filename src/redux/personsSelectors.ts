import {AppStateType} from "./reduxStore";

export const getAllPersons = (state: AppStateType) => {
    return state.personsInformation.personsData
}
export const getPageSize = (state: AppStateType) => {
    return state.personsInformation.pageSize
}
export const getAllUsersCount = (state: AppStateType) => {
    return state.personsInformation.allUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.personsInformation.currentPage
}
export const getIsLoading = (state: AppStateType) => {
    return state.personsInformation.isLoading
}
export const getColleagueInProgress = (state: AppStateType) => {
    return state.personsInformation.ColleagueInProgress
}
export const getPortionPage = (state: AppStateType) => {
    return state.personsInformation.portionPage
}
