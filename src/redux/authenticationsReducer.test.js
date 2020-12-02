import authenticationsReducer, {setPerson} from "./authenticationsReducer";

let initialState = {
    authenticationsData: {
        personId: null,
        email: null,
        login: null
    },
    isAuthentications: false
}
it(`person id should be set`,() =>{
    let action = setPerson(1, "tarassz@mail.ru", "block841", true);
    let newState = authenticationsReducer(initialState, action)
    expect(newState.authenticationsData.personId).toBe(1);
});
it(`person email should be set`,() =>{
    let action = setPerson(1, "tarassz@mail.ru", "block841", true);
    let newState = authenticationsReducer(initialState, action)
    expect(newState.authenticationsData.email).toBe("tarassz@mail.ru");
});
it(`person login should be set`,() =>{
    let action = setPerson(1, "tarassz@mail.ru", "block841", true);
    let newState = authenticationsReducer(initialState, action)
    expect(newState.authenticationsData.login).toBe("block841");
});
it(`isAuthentications id should be true`,() =>{
    let action = setPerson(1, "tarassz@mail.ru", "block841", true);
    let newState = authenticationsReducer(initialState, action)
    expect(newState.isAuthentications).toBe(true);
});
it(`isAuthentications id should be false`,() =>{
    let action = setPerson(1, "tarassz@mail.ru", "block841", false);
    let newState = authenticationsReducer(initialState, action)
    expect(newState.isAuthentications).toBe(false);
});