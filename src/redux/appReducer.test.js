import appReducer, {setInitializedSuccess, setInitializedСanceled} from "./appReducer";


let initialState = {
    initialized: false
};
it(`initialized should be performed`, () => {
    let action = setInitializedSuccess();
    let newState = appReducer(initialState, action)
    expect(newState.initialized).toBe(true);
});
it(`initialized should be canceled`, () => {
    let initialState = {
        initialized: true
    };
    let action = setInitializedСanceled();
    let newState = appReducer(initialState, action)
    expect(newState.initialized).toBe(false);
});