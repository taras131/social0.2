

export const getAllPersons = (state) => {
    return state.personsInformation.personsData
}
export const getPageSize = (state) => {
    return state.personsInformation.pageSize
}
export const getAllUsersCount = (state) => {
    return state.personsInformation.allUsersCount
}
export const getCurrentPage = (state) => {
    return state.personsInformation.currentPage
}
export const getIsLoading = (state) => {
    return state.personsInformation.isLoading
}
export const getColleagueInProgress = (state) => {
    return state.personsInformation.ColleagueInProgress
}