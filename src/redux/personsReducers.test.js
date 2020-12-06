import personReducer, {setAllUsersCount, setColleagueInProgress, setCurrentPage, setIsLoading} from "./personsReducers";

let initialState = {
    personsData: [],
    pageSize: 12,
    allUsersCount: 0,
    currentPage: 1,
    portionPage: 10,
    ColleagueInProgress: [],
    isLoading: false
};
it(`currentPage should be set`,() => {
    let action = setCurrentPage(13);
    let newState =  personReducer(initialState,action);
    expect(newState.currentPage).toBe(13)
})
it(`allUsersCount should be set`,() => {
    let action = setAllUsersCount(13);
    let newState =  personReducer(initialState,action);
    expect(newState.allUsersCount).toBe(13)
})
it(`isLoading should be set true`,() => {
    let action = setIsLoading(true);
    let newState =  personReducer(initialState,action);
    expect(newState.isLoading).toBe(true)
})
it(`isLoading should be set false`,() => {
    let action = setIsLoading(false);
    let newState =  personReducer(initialState,action);
    expect(newState.isLoading).toBe(false)
})
it(`ColleagueInProgress should be set `,() => {
    let action = setColleagueInProgress(10);
    let newState =  personReducer(initialState,action);
    expect(newState.ColleagueInProgress[0]).toBe(10)
})