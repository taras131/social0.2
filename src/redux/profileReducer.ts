import {APIProfile} from "../api/api";
import {stopSubmit} from "redux-form";
import {addError, AddErrorActionType} from "./errorReducer";
import {PhotosType, PostDataType, ProfileType} from "../types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const ADDPOST = "ADDPOST",
    SETPROFILE = "SETPROFILE",
    SETSTATUS = "SETSTATUS",
    DELETEPOST = "DELETEPOST",
    SETPROFILEPHOTOSUCCES = "SETPROFILEPHOTOSUCCES",
    ISPROFILELOADING = "ISPROFILELOADING",
    SETPROFILEEDITMODE = "SETPROFILEEDITMODE";

let initialState = {
    postData: [
        {id: 1, text: "Это мой первый пост", likescount: 200},
        {id: 2, text: "Это мой второй пост", likescount: 700},
        {id: 3, text: "это я запостил из индекс js, прокинув пропс через Route!!! ", likescount: 500}
    ] as Array<PostDataType>,
    profile: null as ProfileType | null,
    status: "" as string,
    isProfileLoading: false,
    isEditMode: false
}
type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADDPOST:
            return {...state,postData: [...state.postData, {id: 11, text: action.text, likescount: 0}]};
        case DELETEPOST:
            return {...state, postData: state.postData.filter(item => item.id != action.postId)}
        case SETPROFILE:
            return {...state, profile: action.profile}
        case SETSTATUS:
            return {...state, status: action.status}
        case SETPROFILEPHOTOSUCCES:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        case ISPROFILELOADING:
            return {...state, isProfileLoading: action.isProfileLoading}
        case SETPROFILEEDITMODE:
            return {...state, isEditMode: action.isEditMode}
        default:
            return state;
    }
}
type ActionsTypes = AddPostActionType | DeletePostActionType | SetProfileActionType | SetStatusActionType |
    SetProfilePhotoSuccesActionType | SetProfileLoadingActionType | AddErrorActionType | SetProfileEditModeActionType
type AddPostActionType = {
    type: typeof ADDPOST
    text: string
}
export const addPost = (text: string): AddPostActionType => {
    return {type: ADDPOST, text};
}
type DeletePostActionType = {
    type: typeof DELETEPOST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => {
    return {type: DELETEPOST, postId};
}
type SetProfileActionType = {
    type: typeof SETPROFILE
    profile: ProfileType
}
export const setProfile = (profile: ProfileType): SetProfileActionType => {
    return {type: SETPROFILE, profile};
}
type SetStatusActionType = {
    type: typeof SETSTATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => {
    return {type: SETSTATUS, status}
}
type SetProfilePhotoSuccesActionType = {
    type: typeof SETPROFILEPHOTOSUCCES
    photos: PhotosType
}
export const setProfilePhotoSucces = (photos: PhotosType): SetProfilePhotoSuccesActionType => {
    return {type: SETPROFILEPHOTOSUCCES, photos}
}
type SetProfileLoadingActionType = {
    type: typeof ISPROFILELOADING
    isProfileLoading: boolean
}
export const setProfileLoading = (isProfileLoading: boolean): SetProfileLoadingActionType => {
    return {type: ISPROFILELOADING, isProfileLoading}
}
type SetProfileEditModeActionType = {
    type: typeof SETPROFILEEDITMODE
    isEditMode: boolean
}
export const setProfileEditMode = (isEditMode: boolean): SetProfileEditModeActionType => {
    return {type: SETPROFILEEDITMODE, isEditMode}
}
type ThunkActionType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>
export const getProfile = (id: number): ThunkActionType => async (dispatch) => {
    dispatch(setProfileLoading(true));
    try {
        let response = await APIProfile.getProfile(id);
        dispatch(setProfileLoading(false));
        dispatch(setProfile(response.data));
    } catch (e) {
        dispatch(setProfileLoading(false));
        dispatch(addError());
    }
}
export const getMyStatus = (id: number): ThunkActionType => async (dispatch) => {
    dispatch(setProfileLoading(true));
    try {
        let response = await APIProfile.getMyStatusAPI(id);
        dispatch(setStatus(response.data));
    } catch (e) {
        dispatch(addError());
    } finally {
        dispatch(setProfileLoading(false));
    }
}
export const updateMyStatus = (status: string): ThunkActionType => async (dispatch) => {
    dispatch(setProfileLoading(true))
    try {
        let response = await APIProfile.updateMyStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        dispatch(addError());
    } finally {
        dispatch(setProfileLoading(false))
    }
}
export const setProfilePhoto = (file: any): ThunkActionType => async (dispatch) => {
    dispatch(setProfileLoading(true))
    try {
        let response = await APIProfile.setProfilePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(setProfilePhotoSucces(response.data.data.photos))
        }
    } catch (e) {
        dispatch(addError());
    } finally {
        dispatch(setProfileLoading(false))
    }
}
type GetStateType = () => AppStateType
export const updateProfile = (formData: ProfileType): ThunkActionType => async (dispatch, getState: GetStateType) => {
    const id = getState().authenticationsInformation.authenticationsData.personId;
    dispatch(setProfileLoading(true));
    try {
        let response = await APIProfile.updateProfile(formData);
        dispatch(setProfileLoading(false));
        if (response.data.resultCode === 0) {
            dispatch(getProfile(id));
        } else {
            let message = response.data.messages[0];
            //let messageError =((message.split('>'))[1].replace(')', '')).toLowerCase()
            //dispatch(stopSubmit("profile", { "contacts": {messageError: response.data.messages[0]}}))
            dispatch(stopSubmit("profile", {_error: message}))
        }
    } catch (e) {
        dispatch(addError());
    } finally {
        dispatch(setProfileEditMode(false));
    }
}

export default profileReducer;