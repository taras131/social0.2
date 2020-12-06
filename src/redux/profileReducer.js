import {APIProfile} from "../api/api";
import {stopSubmit} from "redux-form";

const ADDPOST = "ADDPOST",
    SETPROFILE = "SETPROFILE",
    SETSTATUS = "SETSTATUS",
    DELETEPOST = "DELETEPOST",
    SETPROFILEPHOTOSUCCES = "SETPROFILEPHOTOSUCCES",
    ISPROFILELOADING = "ISPROFILELOADING";
let initialState = {
    postData: [
        {id: 1, name: "Taras", text: "Это мой первый пост", likescount: 200},
        {id: 2, name: "Taras", text: "Это мой второй пост", likescount: 700},
        {id: 3, name: "Taras", text: "это я запостил из индекс js, прокинув пропс через Route!!! ", likescount: 500}
    ],
    profile: null,
    status: "",
    isProfileLoading: false
}

const profileReducer = (state = initialState, action) => {
    let temporaryState;
    switch (action.type) {
        case ADDPOST:
            temporaryState = {
                ...state,
                postData: [...state.postData, {id: 11, text: action.text, likescount: 0}]
            };
            return temporaryState;
        case DELETEPOST:
            return {state, postData: state.postData.filter(item => item.id != action.postId)}
        case SETPROFILE:
            return {...state, profile: action.profile}
        case SETSTATUS:
            return {...state, status: action.status}
        case SETPROFILEPHOTOSUCCES:
            return {...state, profile: {...state.profile, photos: action.photos}}
        case ISPROFILELOADING:
            return {...state ,isProfileLoading: action.isProfileLoading }
        default:
            return state;
    }
}
export const addPost = (text) => {
    return {type: ADDPOST, text};
}
export const deletePost = (postId) => {
    return {type: DELETEPOST, postId};
}
export const setProfile = (profile) => {
    return {type: SETPROFILE, profile};
}
export const setStatus = (status) => {
    return {type: SETSTATUS, status}
}
export const setProfilePhotoSucces = (photos) => {
    return {type: SETPROFILEPHOTOSUCCES, photos}
}
export const setProfileLoading = (isProfileLoading) => {
    return {type: ISPROFILELOADING, isProfileLoading}
}
export const getProfile = (id) => async (dispatch) => {
    dispatch(setProfileLoading(true))
    let response = await APIProfile.getProfile(id);
    dispatch(setProfileLoading(false))
    dispatch(setProfile(response));
}
export const getMyStatus = (id) => async (dispatch) => {
    dispatch(setProfileLoading(true))
    let response = await APIProfile.getMyStatusAPI(id);
    dispatch(setProfileLoading(false))
    dispatch(setStatus(response.data))
}
export const updateMyStatus = (status) => async (dispatch) => {
    dispatch(setProfileLoading(true))
    let response = await APIProfile.updateMyStatus(status);
    dispatch(setProfileLoading(false))
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const setProfilePhoto = (file) => async (dispatch) => {
    dispatch(setProfileLoading(true))
    let response = await APIProfile.setProfilePhoto(file);
    dispatch(setProfileLoading(false))
    if (response.data.resultCode === 0) {
        dispatch(setProfilePhotoSucces(response.data.data.photos))
    }
}
export const updateProfile = (formData) => async (dispatch, getState) => {
    const id = getState().authenticationsInformation.authenticationsData. personId;
    dispatch(setProfileLoading(true))
    let response = await APIProfile.updateProfile(formData);
    dispatch(setProfileLoading(false))
    if(response.data.resultCode === 0){
        dispatch(getProfile(id));
    } else {
        let  message = response.data.messages[0]
        dispatch(stopSubmit("profile", {_error: message}));
    }
}

export default profileReducer;